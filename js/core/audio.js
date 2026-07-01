(function inicializarSistemaAudioHBA() {
  'use strict';

  const DIRETORIO_TRILHA = 'assets/trilha sonora';
  const NOME_BASE_TRILHA = 'trilha-principal';
  const EXTENSAO_TRILHA = '.mp3';
  const LIMITE_TRILHAS_NUMERADAS = 30;

  const CAMINHOS_AUDIO = Object.freeze({
    trilhaPrincipal: `${DIRETORIO_TRILHA}/${NOME_BASE_TRILHA}${EXTENSAO_TRILHA}`,
    efeitos: Object.freeze({
      selecionar: 'assets/efeitos sonoros/selecionar-jogador.mp3',
      encaixar: 'assets/efeitos sonoros/encaixar-jogador.mp3',
      spin: 'assets/efeitos sonoros/spin.mp3',
      vitoria: 'assets/efeitos sonoros/vitoria.mp3',
      derrota: 'assets/efeitos sonoros/derrota.mp3'
    })
  });

  const CANDIDATAS_TRILHA = Object.freeze([
    CAMINHOS_AUDIO.trilhaPrincipal,
    ...Array.from({ length: LIMITE_TRILHAS_NUMERADAS }, function(_, indice) {
      return `${DIRETORIO_TRILHA}/${NOME_BASE_TRILHA}${indice + 1}${EXTENSAO_TRILHA}`;
    })
  ]);

  const estado = {
    habilitado: lerPreferencia('hba_audio_enabled', 'true') !== 'false',
    volume: normalizarVolume(Number(lerPreferencia('hba_music_volume', '0.28'))),
    trilha: null,
    playlist: [CAMINHOS_AUDIO.trilhaPrincipal],
    indiceTrilha: 0,
    descobertaConcluida: false,
    descobertaPromise: null,
    aguardandoInteracao: false,
    inicializado: false,
    efeitos: new Map(),
    efeitosIndisponiveis: new Set()
  };

  function lerPreferencia(chave, fallback) {
    try {
      const valor = window.localStorage ? window.localStorage.getItem(chave) : null;
      return valor === null ? fallback : valor;
    } catch (erro) {
      return fallback;
    }
  }

  function salvarPreferencia(chave, valor) {
    try {
      if (window.localStorage) window.localStorage.setItem(chave, String(valor));
    } catch (erro) {
      // Preferências locais são opcionais.
    }
  }

  function normalizarVolume(valor) {
    const numero = Number(valor);
    if (!Number.isFinite(numero)) return 0.28;
    return Math.max(0, Math.min(1, numero));
  }

  function criarAudio(caminho, volume, loop) {
    if (typeof window.Audio !== 'function') return null;
    const audio = new window.Audio(caminho);
    audio.preload = 'metadata';
    audio.volume = normalizarVolume(volume);
    audio.loop = Boolean(loop);
    return audio;
  }

  function criarTrilha() {
    if (estado.trilha) return estado.trilha;

    const trilha = criarAudio(estado.playlist[estado.indiceTrilha], estado.volume, false);
    if (!trilha) return null;

    trilha.addEventListener('ended', function() {
      avancarTrilha(true);
    });

    trilha.addEventListener('error', function() {
      avancarTrilha(false);
    });

    trilha.addEventListener('play', function() {
      estado.aguardandoInteracao = false;
      atualizarControle();
    });

    trilha.addEventListener('pause', atualizarControle);
    estado.trilha = trilha;
    return trilha;
  }

  async function caminhoExiste(caminho) {
    if (typeof window.fetch !== 'function') return caminho === CAMINHOS_AUDIO.trilhaPrincipal;

    try {
      const resposta = await window.fetch(caminho, {
        method: 'HEAD',
        cache: 'no-store'
      });
      return resposta.ok;
    } catch (erro) {
      return false;
    }
  }

  function descobrirPlaylist() {
    if (estado.descobertaPromise) return estado.descobertaPromise;

    estado.descobertaPromise = (async function() {
      const encontradas = [];

      if (await caminhoExiste(CAMINHOS_AUDIO.trilhaPrincipal)) {
        encontradas.push(CAMINHOS_AUDIO.trilhaPrincipal);
      }

      // As faixas numeradas devem ser contínuas: 1, 2, 3... A busca encerra
      // no primeiro número ausente para evitar dezenas de requisições 404.
      for (let indice = 1; indice <= LIMITE_TRILHAS_NUMERADAS; indice += 1) {
        const caminho = `${DIRETORIO_TRILHA}/${NOME_BASE_TRILHA}${indice}${EXTENSAO_TRILHA}`;
        if (!(await caminhoExiste(caminho))) break;
        encontradas.push(caminho);
      }

      if (encontradas.length > 0) {
        const caminhoAtual = estado.trilha ? estado.trilha.getAttribute('src') : null;
        estado.playlist = encontradas;
        const indiceAtual = caminhoAtual ? encontradas.indexOf(caminhoAtual) : -1;
        estado.indiceTrilha = indiceAtual >= 0 ? indiceAtual : 0;

        if (estado.trilha && !encontradas.includes(estado.trilha.getAttribute('src'))) {
          estado.trilha.src = encontradas[0];
          estado.trilha.load();
        }
      } else {
        estado.playlist = [];
        estado.indiceTrilha = 0;
        if (estado.trilha) {
          estado.trilha.pause();
          estado.trilha.removeAttribute('src');
          estado.trilha.load();
        }
      }

      estado.descobertaConcluida = true;
      return [...estado.playlist];
    })().catch(function() {
      estado.descobertaConcluida = true;
      return [...estado.playlist];
    });

    return estado.descobertaPromise;
  }

  function definirFonteAtual() {
    const trilha = criarTrilha();
    if (!trilha || estado.playlist.length === 0) return null;

    const caminho = estado.playlist[estado.indiceTrilha] || estado.playlist[0];
    if (trilha.getAttribute('src') !== caminho) {
      trilha.src = caminho;
      trilha.load();
    }
    trilha.volume = estado.volume;
    return trilha;
  }

  function tocarTrilhaAtual() {
    if (!estado.habilitado) return Promise.resolve(false);
    const trilha = definirFonteAtual();
    if (!trilha) return Promise.resolve(false);

    try {
      const tentativa = trilha.play();
      if (!tentativa || typeof tentativa.then !== 'function') return Promise.resolve(true);
      return tentativa.then(function() {
        estado.aguardandoInteracao = false;
        atualizarControle();
        return true;
      }).catch(function(erro) {
        estado.aguardandoInteracao = Boolean(erro && erro.name === 'NotAllowedError');
        atualizarControle();
        return false;
      });
    } catch (erro) {
      estado.aguardandoInteracao = true;
      atualizarControle();
      return Promise.resolve(false);
    }
  }

  async function avancarTrilha(reiniciarQuandoUnica) {
    await descobrirPlaylist();
    if (!estado.habilitado || estado.playlist.length === 0) return false;

    if (estado.playlist.length === 1) {
      const trilhaUnica = definirFonteAtual();
      if (!trilhaUnica) return false;
      if (reiniciarQuandoUnica || trilhaUnica.error) trilhaUnica.currentTime = 0;
      return tocarTrilhaAtual();
    }

    estado.indiceTrilha = (estado.indiceTrilha + 1) % estado.playlist.length;
    const trilha = definirFonteAtual();
    if (trilha) trilha.currentTime = 0;
    return tocarTrilhaAtual();
  }

  function iniciarTrilha() {
    if (!estado.habilitado) return Promise.resolve(false);

    // A primeira tentativa é imediata para aproveitar uma eventual permissão de autoplay.
    const tentativaImediata = tocarTrilhaAtual();

    // As faixas numeradas são descobertas em segundo plano e entram na sequência.
    descobrirPlaylist();
    return tentativaImediata;
  }

  function pararTrilha() {
    if (!estado.trilha) return;
    estado.trilha.pause();
    estado.trilha.currentTime = 0;
    atualizarControle();
  }

  function obterEfeito(nome) {
    const caminho = CAMINHOS_AUDIO.efeitos[nome];
    if (!caminho || estado.efeitosIndisponiveis.has(nome)) return null;
    if (estado.efeitos.has(nome)) return estado.efeitos.get(nome);

    const efeito = criarAudio(caminho, 0.58, false);
    if (!efeito) return null;
    efeito.addEventListener('error', function() {
      estado.efeitosIndisponiveis.add(nome);
    }, { once: true });
    estado.efeitos.set(nome, efeito);
    return efeito;
  }

  function tocarEfeito(nome) {
    if (!estado.habilitado) return false;
    const efeito = obterEfeito(nome);
    if (!efeito) return false;

    try {
      efeito.pause();
      efeito.currentTime = 0;
      const promise = efeito.play();
      if (promise && typeof promise.catch === 'function') promise.catch(function() {});
      return true;
    } catch (erro) {
      return false;
    }
  }

  function definirVolume(valor) {
    estado.volume = normalizarVolume(valor);
    salvarPreferencia('hba_music_volume', estado.volume);

    if (estado.trilha) estado.trilha.volume = estado.volume;
    atualizarControle();
    return estado.volume;
  }

  function alternarAudio() {
    estado.habilitado = !estado.habilitado;
    salvarPreferencia('hba_audio_enabled', estado.habilitado);

    if (estado.habilitado) iniciarTrilha();
    else if (estado.trilha) estado.trilha.pause();

    atualizarControle();
    return estado.habilitado;
  }

  function atualizarControle() {
    const ingles = String(document.documentElement.lang || '').toLowerCase().startsWith('en');
    const volumePercentual = Math.round(estado.volume * 100);
    const audioAtivo = estado.habilitado && estado.volume > 0;
    const titulo = estado.habilitado
      ? (ingles ? 'Mute soundtrack' : 'Desativar trilha sonora')
      : (ingles ? 'Enable soundtrack' : 'Ativar trilha sonora');
    const rotuloVolume = ingles ? 'Soundtrack volume' : 'Volume da trilha sonora';

    document.querySelectorAll('[data-audio-toggle]').forEach(function(botao) {
      const simbolo = botao.querySelector('[data-audio-symbol]');
      if (simbolo) simbolo.textContent = audioAtivo ? '♫' : '♪';
      botao.classList.toggle('muted', !audioAtivo);
      botao.title = titulo;
      botao.setAttribute('aria-label', titulo);
      botao.setAttribute('aria-pressed', String(estado.habilitado));
    });

    document.querySelectorAll('[data-audio-volume]').forEach(function(controle) {
      controle.value = String(volumePercentual);
      controle.setAttribute('aria-label', rotuloVolume);
      controle.title = `${rotuloVolume}: ${volumePercentual}%`;
    });

    document.querySelectorAll('[data-audio-volume-value]').forEach(function(saida) {
      saida.textContent = `${volumePercentual}%`;
    });
  }

  function retomarComPrimeiraInteracao() {
    if (!estado.habilitado) return;
    tocarTrilhaAtual();
  }

  function registrarRetomadaPorInteracao() {
    ['pointerdown', 'touchstart', 'keydown'].forEach(function(evento) {
      document.addEventListener(evento, retomarComPrimeiraInteracao, {
        capture: true,
        passive: true,
        once: true
      });
    });
  }

  function inicializar() {
    if (estado.inicializado) return;
    estado.inicializado = true;
    criarTrilha();
    atualizarControle();
    registrarRetomadaPorInteracao();
    iniciarTrilha();
  }

  window.HBAAudio = Object.freeze({
    inicializar: inicializar,
    iniciarTrilha: iniciarTrilha,
    pararTrilha: pararTrilha,
    tocarEfeito: tocarEfeito,
    alternarAudio: alternarAudio,
    definirVolume: definirVolume,
    obterVolume: function() { return estado.volume; },
    atualizarControle: atualizarControle,
    descobrirPlaylist: descobrirPlaylist,
    obterPlaylist: function() { return [...estado.playlist]; },
    obterCaminhos: function() {
      return {
        trilhaPrincipal: CAMINHOS_AUDIO.trilhaPrincipal,
        trilhasNumeradas: [...CANDIDATAS_TRILHA.slice(1)],
        efeitos: { ...CAMINHOS_AUDIO.efeitos }
      };
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar, { once: true });
  } else {
    inicializar();
  }
})();
