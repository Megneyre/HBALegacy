/**
 * Valida e padroniza o nome escolhido na tela de boas-vindas.
 * O retorno pode ser usado pelo front-end sem provocar navegação ou reload.
 */
function prepararNovoLegado(nomeUsuario) {
  return {
    nomeTime: normalizarNomeTime_(nomeUsuario)
  };
}

function normalizarNomeTime_(nomeUsuario) {
  const nome = String(nomeUsuario || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 25);

  if (!nome) {
    throw new Error('Informe o nome da sua equipe.');
  }

  return nome;
}

function normalizarLogoUsuario_(logoUsuario) {
  const caminho = String(logoUsuario || '').trim();
  if (/^assets\/team-logos\/[a-z0-9-]+\.png$/i.test(caminho)) return caminho;
  return '';
}

function criarSiglaTime_(nome) {
  const palavras = String(nome || '').trim().split(/\s+/).filter(Boolean);
  if (!palavras.length) return 'HBA';
  if (palavras.length === 1) return palavras[0].slice(0, 3).toUpperCase();
  return palavras.slice(0, 3).map(function(palavra) { return palavra[0]; }).join('').toUpperCase();
}


const PERFIS_DIFICULDADE_HBA = Object.freeze({
  REGULAR: Object.freeze({
    nome: 'Normal',
    bonusUsuario: 0.6,
    bonusCpu: 0,
    pesoOverall: 2.05,
    variacao: 9.5
  }),
  PLAYOFFS: Object.freeze({
    nome: 'Médio',
    bonusUsuario: 0.5,
    bonusCpu: 0.75,
    pesoOverall: 2.15,
    variacao: 8.5
  }),
  FINALS: Object.freeze({
    nome: 'Difícil',
    bonusUsuario: 0,
    bonusCpu: 0.8,
    pesoOverall: 2.2,
    variacao: 8
  })
});

function obterPerfilDificuldade(fase) {
  const chave = String(fase || 'REGULAR').toUpperCase();
  const perfil = PERFIS_DIFICULDADE_HBA[chave] || PERFIS_DIFICULDADE_HBA.REGULAR;
  return { ...perfil };
}


/**
 * Valida o nome e devolve a primeira equipe do draft em uma única execução.
 * Isso evita que o front-end marque o jogo como iniciado antes do sorteio.
 */

function iniciarDraft(nomeUsuario, nomesExcluidos) {
  const nomeTime = normalizarNomeTime_(nomeUsuario);
  const listaLimpaExcluidos = Array.isArray(nomesExcluidos) ? nomesExcluidos : [];
  return {
    nomeTime: nomeTime,
    equipe: sortearEquipe(listaLimpaExcluidos)
  };
}

function sortearEquipe(nomesExcluidos) {
  const excluidos = criarSetExcluidos_(nomesExcluidos);
  const equipesValidas = listarEquipesDraftValidas_(excluidos);
  if (!equipesValidas || !equipesValidas.length) {
    throw new Error('Não há mais jogadores disponíveis para o draft.');
  }
  return formatarEquipeDraft_(embaralhar_(equipesValidas.slice())[0], excluidos);
}

function sortearProximaEquipe(nomesExcluidos, temporadaAtual, equipeAtual) {
  const excluidos = criarSetExcluidos_(nomesExcluidos);
  const temporadaReferencia = String(temporadaAtual || '');
  const equipeReferencia = String(equipeAtual || '');
  const equipesValidas = listarEquipesDraftValidas_(excluidos).filter(function(equipe) {
    return !(String(equipe.temporada) === temporadaReferencia && String(equipe.time) === equipeReferencia);
  });
  if (!equipesValidas.length) {
    throw new Error('Não há uma próxima equipe disponível para o draft.');
  }
  return formatarEquipeDraft_(embaralhar_(equipesValidas.slice())[0], excluidos);
}

function sortearOutraTemporada(nomesExcluidos, temporadaAtual) {
  const excluidos = criarSetExcluidos_(nomesExcluidos);
  const temporadaReferencia = String(temporadaAtual || '');
  const equipesValidas = listarEquipesDraftValidas_(excluidos).filter(function(equipe) {
    return String(equipe.temporada) !== temporadaReferencia;
  });
  if (!equipesValidas.length) {
    throw new Error('Não há outra temporada disponível com jogadores válidos para o draft.');
  }
  return formatarEquipeDraft_(embaralhar_(equipesValidas.slice())[0], excluidos);
}

function sortearEquipeMesmaTemporada(nomesExcluidos, temporadaAtual, equipeAtual) {
  const excluidos = criarSetExcluidos_(nomesExcluidos);
  const temporadaReferencia = String(temporadaAtual || '');
  const equipeReferencia = String(equipeAtual || '');
  if (!temporadaReferencia) {
    throw new Error('A temporada atual não foi identificada.');
  }
  const equipesValidas = listarEquipesDraftValidas_(excluidos).filter(function(equipe) {
    return String(equipe.temporada) === temporadaReferencia && String(equipe.time) !== equipeReferencia;
  });
  if (!equipesValidas.length) {
    throw new Error('Não há outra equipe disponível nesta temporada com jogadores válidos para o draft.');
  }
  return formatarEquipeDraft_(embaralhar_(equipesValidas.slice())[0], excluidos);
}

function criarSetExcluidos_(nomesExcluidos) {
  const lista = Array.isArray(nomesExcluidos) ? nomesExcluidos : [];
  return new Set(lista.map(function(nome) {
    return normalizarChaveJogador_(nome);
  }).filter(Boolean));
}

function listarEquipesDraftValidas_(excluidos) {
  if (typeof BANCO_CONSOLIDADO_HBA === 'undefined') {
    console.error("Erro Crítico: BANCO_CONSOLIDADO_HBA não foi carregado.");
    return [];
  }
  return BANCO_CONSOLIDADO_HBA.filter(function(equipe) {
    if (!equipe || !Array.isArray(equipe.elenco)) return false;
    return equipe.elenco.some(function(jogador) {
      if (!jogador || !jogador.nome) return false;
      return !excluidos.has(normalizarChaveJogador_(jogador.nome));
    });
  });
}

function formatarEquipeDraft_(equipe, excluidos) {
  if (!equipe) throw new Error('Nenhuma equipe válida foi encontrada.');
  const jogadores = equipe.elenco
    .filter(function(jogador) { 
      if (!jogador || !jogador.nome) return false;
      return !excluidos.has(normalizarChaveJogador_(jogador.nome)); 
    })
    .map(function(jogador) {
      return {
        nome: String(jogador.nome).trim(),
        posicao: normalizarPosicao_(jogador.posicao),
        overall: Number(jogador.overall) || 82,
        overallBase: Number(jogador.overallBase) || Number(jogador.overall) || 82,
        ajusteTemporada: Number(jogador.ajusteTemporada) || 0
      };
    });
  if (!jogadores.length) {
    throw new Error('A equipe sorteada não possui jogadores disponíveis.');
  }
  const somaOvr = jogadores.reduce(function(total, jogador) {
    return total + jogador.overall;
  }, 0);
  let asset = { logo: '', conferencia: 'East' };
  if (typeof obterAssetTime === 'function') {
    try { asset = obterAssetTime(equipe.time); } catch(e) { console.warn(e); }
  }
  return {
    time: equipe.time,
    temporada: String(equipe.temporada),
    conferencia: equipe.conferencia || asset.conferencia || 'East',
    logo: asset.logo || '',
    ovrEquipe: Math.round(somaOvr / jogadores.length),
    jogadores: jogadores
  };
}
function gerarLigaTemporada(nomeUsuario, rosterUsuario, logoUsuario) {
  const nomeTimeUsuario = normalizarNomeTime_(nomeUsuario);
  const logoTimeUsuario = normalizarLogoUsuario_(logoUsuario);
  const rosterLimpo = (rosterUsuario || []).map(function(jogador) {
    return {
      nome: String(jogador.nome || ''),
      posicao: normalizarPosicao_(jogador.posicao),
      overall: Number(jogador.overall) || 82,
      overallBase: Number(jogador.overallBase) || Number(jogador.overall) || 82,
      ajusteTemporada: Number(jogador.ajusteTemporada) || 0,
      temporada: String(jogador.temporada || ''),
      origem: String(jogador.origem || ''),
      funcao: String(jogador.funcao || 'RESERVA')
    };
  }).filter(function(jogador) { return jogador.nome; });

  if (rosterLimpo.length !== 4) {
    throw new Error('A equipe do jogador precisa ter exatamente quatro atletas.');
  }

  const nomesUsuario = new Set(rosterLimpo.map(function(jogador) {
    return normalizarChaveJogador_(jogador.nome);
  }));
  const conferenciaUsuario = Math.random() < 0.5 ? 'East' : 'West';
  const franquias = selecionarCincoFranquias_(conferenciaUsuario);
  const pool = criarPoolJogadores_(nomesUsuario);

  const overallUsuario = Math.round(rosterLimpo.reduce(function(total, jogador) {
    return total + jogador.overall;
  }, 0) / rosterLimpo.length);

  const equipes = [{
    id: 'USER',
    nome: nomeTimeUsuario,
    sigla: criarSiglaTime_(nomeTimeUsuario),
    conferencia: conferenciaUsuario,
    logo: logoTimeUsuario,
    overall: overallUsuario,
    elenco: rosterLimpo,
    usuario: true,
    jogos: 0,
    vitorias: 0,
    derrotas: 0,
    pontosPro: 0,
    pontosContra: 0
  }];

  franquias.forEach(function(nomeFranquia, indice) {
    const asset = obterAssetTime(nomeFranquia);
    const elenco = gerarElencoCpu_(pool);
    const overall = Math.round(elenco.reduce(function(total, jogador) {
      return total + jogador.overall;
    }, 0) / elenco.length);

    equipes.push({
      id: 'CPU_' + (indice + 1),
      nome: nomeFranquia,
      sigla: asset.sigla,
      conferencia: asset.conferencia,
      logo: asset.logo,
      overall: overall,
      elenco: elenco,
      usuario: false,
      jogos: 0,
      vitorias: 0,
      derrotas: 0,
      pontosPro: 0,
      pontosContra: 0
    });
  });

  validarUnicidadeElencosLiga_(equipes);

  return {
    nomeUsuario: nomeTimeUsuario,
    equipes: equipes,
    calendario: gerarCalendarioTurnoUnico_(equipes.map(function(equipe) { return equipe.id; })),
    totalRodadas: 5,
    conferenciaUsuario: conferenciaUsuario
  };
}

/** Simula as três partidas de uma rodada da temporada regular. */
function simularRodadaRegular(jogos, equipes) {
  const porId = {};
  (equipes || []).forEach(function(equipe) { porId[equipe.id] = equipe; });

  return (jogos || []).map(function(jogo) {
    const casa = porId[jogo.casaId];
    const fora = porId[jogo.foraId];
    if (!casa || !fora) throw new Error('Uma equipe da rodada não foi encontrada.');

    const placar = simularPlacar_(
      casa.overall,
      fora.overall,
      'REGULAR',
      Boolean(casa.usuario),
      Boolean(fora.usuario)
    );
    return {
      casaId: casa.id,
      foraId: fora.id,
      pontosCasa: placar.pontosA,
      pontosFora: placar.pontosB,
      vencedorId: placar.pontosA > placar.pontosB ? casa.id : fora.id
    };
  });
}

/** Simula uma partida da série controlada pelo jogador. */
function simularPartidaEliminatoria(equipeUsuario, equipeAdversaria, fase) {
  if (!equipeUsuario || !equipeAdversaria) {
    throw new Error('Equipes inválidas para a partida eliminatória.');
  }

  const placar = simularPlacar_(
    equipeUsuario.overall,
    equipeAdversaria.overall,
    fase || 'PLAYOFFS',
    true,
    false
  );
  return {
    casaId: equipeUsuario.id,
    foraId: equipeAdversaria.id,
    pontosCasa: placar.pontosA,
    pontosFora: placar.pontosB,
    vencedorId: placar.pontosA > placar.pontosB ? equipeUsuario.id : equipeAdversaria.id
  };
}

/** Resolve uma série entre duas equipes controladas pela máquina. */
function simularSerieCpu(equipeA, equipeB, vitoriasNecessarias, fase) {
  const alvo = Number(vitoriasNecessarias) || 2;
  let vitoriasA = 0;
  let vitoriasB = 0;
  const jogos = [];

  while (vitoriasA < alvo && vitoriasB < alvo) {
    const placar = simularPlacar_(equipeA.overall, equipeB.overall, fase || 'PLAYOFFS');
    const vencedorId = placar.pontosA > placar.pontosB ? equipeA.id : equipeB.id;
    if (vencedorId === equipeA.id) vitoriasA++;
    else vitoriasB++;

    jogos.push({
      casaId: equipeA.id,
      foraId: equipeB.id,
      pontosCasa: placar.pontosA,
      pontosFora: placar.pontosB,
      vencedorId: vencedorId
    });
  }

  return {
    vencedorId: vitoriasA > vitoriasB ? equipeA.id : equipeB.id,
    vitoriasA: vitoriasA,
    vitoriasB: vitoriasB,
    jogos: jogos
  };
}

function selecionarCincoFranquias_(conferenciaUsuario) {
  const nomes = Object.keys(NBA_TEAM_ASSETS);
  const mesma = embaralhar_(nomes.filter(function(nome) {
    return NBA_TEAM_ASSETS[nome].conferencia === conferenciaUsuario;
  }));
  const oposta = embaralhar_(nomes.filter(function(nome) {
    return NBA_TEAM_ASSETS[nome].conferencia !== conferenciaUsuario;
  }));

  // A liga sempre tem três equipes por conferência:
  // usuário + duas franquias na sua conferência e três na conferência oposta.
  // Assim, o usuário pode realmente ser eliminado ainda na temporada regular.
  return embaralhar_([
    mesma[0], mesma[1],
    oposta[0], oposta[1], oposta[2]
  ]);
}

function criarPoolJogadores_(nomesExcluidos) {
  const melhoresPorJogador = {};

  BANCO_CONSOLIDADO_HBA.forEach(function(equipe) {
    equipe.elenco.forEach(function(jogador) {
      const chaveJogador = normalizarChaveJogador_(jogador.nome);
      if (!chaveJogador || nomesExcluidos.has(chaveJogador)) return;

      const candidato = {
        nome: jogador.nome,
        chaveJogador: chaveJogador,
        posicao: normalizarPosicao_(jogador.posicao),
        overall: Number(jogador.overall) || 82
      };

      if (!melhoresPorJogador[chaveJogador] || candidato.overall > melhoresPorJogador[chaveJogador].overall) {
        melhoresPorJogador[chaveJogador] = candidato;
      }
    });
  });

  return embaralhar_(Object.keys(melhoresPorJogador).map(function(chaveJogador) {
    return melhoresPorJogador[chaveJogador];
  }));
}

function validarUnicidadeElencosLiga_(equipes) {
  const jogadoresUsados = new Map();

  (equipes || []).forEach(function(equipe) {
    (equipe.elenco || []).forEach(function(jogador) {
      const chave = normalizarChaveJogador_(jogador.nome);
      if (!chave) return;
      if (jogadoresUsados.has(chave)) {
        throw new Error(
          'O jogador "' + jogador.nome + '" foi sorteado para mais de uma equipe na mesma temporada.'
        );
      }
      jogadoresUsados.set(chave, equipe.id || equipe.nome);
    });
  });
}

/**
 * Monta um elenco de CPU competitivo e equilibrado.
 *
 * Perfil desejado por equipe:
 * - 1 estrela / muito bom: 93 a 95
 * - 1 jogador bom: 90 a 92
 * - 1 jogador médio: 87 a 89
 * - 1 peça fraca: 81 a 86
 *
 * A combinação final procura uma média entre 88 e 90. As faixas são relativas
 * ao banco histórico: o jogador "fraco" ainda pode ser útil, mas cria uma
 * vulnerabilidade real para impedir que todos os quatro atletas sejam estrelas.
 */
function gerarElencoCpu_(pool) {
  if (!pool || pool.length < 4) {
    throw new Error('O banco não possui jogadores suficientes para gerar os adversários.');
  }

  const slotsTitulares = [
    { nome: 'ARMADOR', posicoes: ['PG', 'SG'] },
    { nome: 'WING', posicoes: ['SF', 'PF'] },
    { nome: 'BIG', posicoes: ['PF', 'C'] }
  ];

  const perfisTitulares = [
    { nome: 'MUITO BOM', minimo: 93, maximo: 95, alvo: 94 },
    { nome: 'BOM', minimo: 90, maximo: 92, alvo: 91 },
    { nome: 'MÉDIO', minimo: 87, maximo: 89, alvo: 88 }
  ];

  const todasPosicoes = ['PG', 'SG', 'SF', 'PF', 'C'];
  const alvoMedia = 88 + Math.floor(Math.random() * 3); // 88, 89 ou 90
  let melhorFormacao = null;
  let melhorPontuacao = Infinity;

  // Testa diversas combinações sem retirar atletas do pool original.
  // No fim, somente a melhor formação consome os jogadores escolhidos.
  for (let tentativa = 0; tentativa < 60; tentativa++) {
    const disponiveis = pool.slice();
    const ordemSlots = embaralhar_(slotsTitulares.slice());
    const formacao = [];
    let falhou = false;

    for (let i = 0; i < perfisTitulares.length; i++) {
      const perfil = perfisTitulares[i];
      const slot = ordemSlots[i];
      const jogador = selecionarJogadorCpu_(
        disponiveis,
        slot.posicoes,
        perfil.minimo,
        perfil.maximo,
        perfil.alvo
      );

      if (!jogador) {
        falhou = true;
        break;
      }

      removerJogadorDoPool_(disponiveis, jogador.nome);
      formacao.push({
        nome: jogador.nome,
        posicao: jogador.posicao,
        overall: jogador.overall,
        funcao: slot.nome,
        nivelCpu: perfil.nome
      });
    }

    if (falhou || formacao.length !== 3) continue;

    const somaTitulares = formacao.reduce(function(total, jogador) {
      return total + jogador.overall;
    }, 0);

    // O reserva é selecionado por último e funciona como contrapeso da equipe.
    const alvoReserva = limitarNumero_((alvoMedia * 4) - somaTitulares, 81, 86);
    const reserva = selecionarJogadorCpu_(
      disponiveis,
      todasPosicoes,
      81,
      86,
      alvoReserva
    );

    if (!reserva) continue;

    formacao.push({
      nome: reserva.nome,
      posicao: reserva.posicao,
      overall: reserva.overall,
      funcao: '4th MAN',
      nivelCpu: 'FRACO'
    });

    const media = formacao.reduce(function(total, jogador) {
      return total + jogador.overall;
    }, 0) / 4;

    // Prioridade absoluta: ficar dentro da faixa de desafio pedida.
    // Depois, aproximar-se da média-alvo sorteada para diferenciar as equipes.
    const foraDaFaixa = media < 88 || media > 90;
    const distanciaMedia = Math.abs(media - alvoMedia);
    const distanciaPerfis = formacao.reduce(function(total, jogador) {
      const alvo = jogador.nivelCpu === 'MUITO BOM' ? 94
        : jogador.nivelCpu === 'BOM' ? 91
        : jogador.nivelCpu === 'MÉDIO' ? 88
        : alvoReserva;
      return total + Math.abs(jogador.overall - alvo);
    }, 0);

    const pontuacao = (foraDaFaixa ? 1000 : 0)
      + (distanciaMedia * 100)
      + (distanciaPerfis * 4)
      + Math.random();

    if (pontuacao < melhorPontuacao) {
      melhorPontuacao = pontuacao;
      melhorFormacao = formacao;
    }
  }

  // Fallback defensivo para bancos muito reduzidos ou desfalcados pelo draft.
  if (!melhorFormacao) {
    return gerarElencoCpuFallback_(pool);
  }

  return melhorFormacao.map(function(escolhido) {
    const indice = pool.findIndex(function(jogador) {
      return jogador.nome === escolhido.nome;
    });

    if (indice < 0) {
      throw new Error('Um jogador selecionado para a CPU não foi encontrado no pool.');
    }

    const jogador = pool.splice(indice, 1)[0];
    jogador.funcao = escolhido.funcao;
    jogador.nivelCpu = escolhido.nivelCpu;
    return jogador;
  });
}

/** Seleciona um jogador elegível, priorizando a faixa e o overall-alvo. */
function selecionarJogadorCpu_(pool, posicoes, minimo, maximo, alvo) {
  const elegiveis = pool.filter(function(jogador) {
    return posicoes.indexOf(jogador.posicao) !== -1;
  });

  if (!elegiveis.length) return null;

  const dentroDaFaixa = elegiveis.filter(function(jogador) {
    return jogador.overall >= minimo && jogador.overall <= maximo;
  });

  // Caso o usuário já tenha escolhido várias estrelas, a CPU utiliza o atleta
  // elegível mais próximo da faixa, em vez de falhar ao montar a equipe.
  const candidatos = (dentroDaFaixa.length ? dentroDaFaixa : elegiveis)
    .slice()
    .sort(function(a, b) {
      const distanciaA = Math.abs(a.overall - alvo);
      const distanciaB = Math.abs(b.overall - alvo);
      if (distanciaA !== distanciaB) return distanciaA - distanciaB;
      return b.overall - a.overall;
    });

  // Sorteio entre os melhores encaixes evita elencos idênticos em toda partida.
  const limite = Math.min(5, candidatos.length);
  return candidatos[Math.floor(Math.random() * limite)];
}

function removerJogadorDoPool_(pool, nomeJogador) {
  const indice = pool.findIndex(function(jogador) {
    return jogador.nome === nomeJogador;
  });
  if (indice >= 0) pool.splice(indice, 1);
}

function limitarNumero_(valor, minimo, maximo) {
  return Math.max(minimo, Math.min(maximo, Number(valor) || minimo));
}

/** Mantém o jogo funcional mesmo se o banco disponível estiver muito reduzido. */
function gerarElencoCpuFallback_(pool) {
  const funcoes = [
    { nome: 'ARMADOR', posicoes: ['PG', 'SG'] },
    { nome: 'WING', posicoes: ['SF', 'PF'] },
    { nome: 'BIG', posicoes: ['PF', 'C'] }
  ];

  const elenco = funcoes.map(function(funcao) {
    const jogador = retirarJogadorPorPosicao_(pool, funcao.posicoes);
    jogador.funcao = funcao.nome;
    jogador.nivelCpu = 'FALLBACK';
    return jogador;
  });

  if (!pool.length) {
    throw new Error('O banco não possui jogadores suficientes para gerar os adversários.');
  }

  const reserva = pool.shift();
  reserva.funcao = '4th MAN';
  reserva.nivelCpu = 'FALLBACK';
  elenco.push(reserva);
  return elenco;
}

function retirarJogadorPorPosicao_(pool, posicoes) {
  let indice = pool.findIndex(function(jogador) {
    return posicoes.indexOf(jogador.posicao) !== -1;
  });
  if (indice < 0) indice = 0;
  if (!pool[indice]) throw new Error('O banco não possui jogadores suficientes para montar os elencos.');
  return pool.splice(indice, 1)[0];
}

function gerarCalendarioTurnoUnico_(ids) {
  const rotacao = ids.slice();
  const total = rotacao.length;
  const rodadas = [];

  for (let rodada = 0; rodada < total - 1; rodada++) {
    const jogos = [];
    for (let i = 0; i < total / 2; i++) {
      let casaId = rotacao[i];
      let foraId = rotacao[total - 1 - i];
      if ((rodada + i) % 2 === 1) {
        const temporario = casaId;
        casaId = foraId;
        foraId = temporario;
      }
      jogos.push({ casaId: casaId, foraId: foraId });
    }
    rodadas.push({ numero: rodada + 1, jogos: jogos });

    const ultimo = rotacao.pop();
    rotacao.splice(1, 0, ultimo);
  }

  return rodadas;
}

function simularPlacar_(overallA, overallB, fase, equipeAUsuario, equipeBUsuario) {
  const perfil = obterPerfilDificuldade(fase);
  let overallAjustadoA = Number(overallA) || 82;
  let overallAjustadoB = Number(overallB) || 82;

  // Os bônus existem somente quando uma das equipes é controlada pelo jogador.
  // Partidas CPU x CPU continuam neutras e usam apenas os overalls dos elencos.
  if (equipeAUsuario) {
    overallAjustadoA += perfil.bonusUsuario;
    overallAjustadoB += perfil.bonusCpu;
  } else if (equipeBUsuario) {
    overallAjustadoB += perfil.bonusUsuario;
    overallAjustadoA += perfil.bonusCpu;
  }

  const variacaoA = Math.random() * (perfil.variacao * 2) - perfil.variacao;
  const variacaoB = Math.random() * (perfil.variacao * 2) - perfil.variacao;

  let pontosA = Math.round(68 + ((overallAjustadoA - 75) * perfil.pesoOverall) + variacaoA);
  let pontosB = Math.round(68 + ((overallAjustadoB - 75) * perfil.pesoOverall) + variacaoB);

  pontosA = Math.max(55, Math.min(125, pontosA));
  pontosB = Math.max(55, Math.min(125, pontosB));

  if (pontosA === pontosB) {
    if (Math.random() < 0.5) pontosA++;
    else pontosB++;
  }

  return { pontosA: pontosA, pontosB: pontosB };
}

function normalizarChaveJogador_(nome) {
  return String(nome || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function normalizarPosicao_(posicao) {
  const valor = String(posicao || '').toUpperCase();
  return ['PG', 'SG', 'SF', 'PF', 'C'].indexOf(valor) !== -1 ? valor : 'SF';
}

function embaralhar_(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temporario = lista[i];
    lista[i] = lista[j];
    lista[j] = temporario;
  }
  return lista;
}


/**
 * Faz uma validação estrutural sem alterar os dados históricos.
 * Retorna um relatório útil para testes e diagnóstico no navegador.
 */
function validarBancoHBA() {
  const posicoesValidas = new Set(['PG', 'SG', 'SF', 'PF', 'C']);
  const erros = [];
  const avisos = [];
  const chaves = new Set();
  const jogadores = new Set();

  BANCO_CONSOLIDADO_HBA.forEach(function(equipe, indice) {
    const chave = String(equipe && equipe.time) + '|' + String(equipe && equipe.temporada);
    if (!equipe || !equipe.time || !equipe.temporada || !Array.isArray(equipe.elenco)) {
      erros.push('Registro de equipe inválido no índice ' + indice + '.');
      return;
    }
    if (chaves.has(chave)) avisos.push('Equipe/temporada duplicada: ' + chave + '.');
    chaves.add(chave);

    const nomesLocais = new Set();
    equipe.elenco.forEach(function(jogador, jogadorIndice) {
      if (!jogador || !jogador.nome) {
        erros.push(chave + ': jogador sem nome no índice ' + jogadorIndice + '.');
        return;
      }
      const nome = String(jogador.nome).trim();
      const posicao = String(jogador.posicao || '').toUpperCase();
      const overall = Number(jogador.overall);
      if (!posicoesValidas.has(posicao)) erros.push(chave + ': posição inválida de ' + nome + ' (' + posicao + ').');
      if (!Number.isFinite(overall) || overall < 70 || overall > 100) erros.push(chave + ': overall inválido de ' + nome + '.');
      if (nomesLocais.has(nome)) avisos.push(chave + ': jogador duplicado no elenco: ' + nome + '.');
      nomesLocais.add(nome);
      jogadores.add(nome);
    });
  });

  return {
    valido: erros.length === 0,
    totalEquipesHistoricas: BANCO_CONSOLIDADO_HBA.length,
    totalFranquias: new Set(BANCO_CONSOLIDADO_HBA.map(function(equipe) { return equipe.time; })).size,
    totalJogadores: jogadores.size,
    totalPerfisOriginais: window.HBADatabase && window.HBADatabase.perfisOriginais ? Object.keys(window.HBADatabase.perfisOriginais).length : jogadores.size,
    totalAliases: window.HBADatabase && window.HBADatabase.aliases ? Object.keys(window.HBADatabase.aliases).length : 0,
    totalAparicoesHistoricas: BANCO_CONSOLIDADO_HBA.reduce(function(total, equipe) { return total + equipe.elenco.length; }, 0),
    erros: erros,
    avisos: avisos
  };
}

window.HBAEngine = Object.freeze({
  prepararNovoLegado: prepararNovoLegado,
  iniciarDraft: iniciarDraft,
  sortearEquipe: sortearEquipe,
  sortearProximaEquipe: sortearProximaEquipe,
  sortearOutraTemporada: sortearOutraTemporada,
  sortearEquipeMesmaTemporada: sortearEquipeMesmaTemporada,
  gerarLigaTemporada: gerarLigaTemporada,
  simularRodadaRegular: simularRodadaRegular,
  simularPartidaEliminatoria: simularPartidaEliminatoria,
  simularSerieCpu: simularSerieCpu,
  obterPerfilDificuldade: obterPerfilDificuldade,
  validarBanco: validarBancoHBA
});
