// O armazenamento local guarda apenas preferências visuais no navegador.
    // Estas funções impedem que uma falha de localStorage interrompa todo o JavaScript.
    function storageGet(key, fallbackValue) {
      try {
        const value = window.localStorage ? window.localStorage.getItem(key) : null;
        return value === null ? fallbackValue : value;
      } catch (error) {
        return fallbackValue;
      }
    }

    function storageSet(key, value) {
      try {
        if (window.localStorage) window.localStorage.setItem(key, String(value));
      } catch (error) {
        // Preferências locais são opcionais e não podem bloquear o jogo.
      }
    }

    const I18N = {
      pt: {
        welcomeTeamName: 'Nome do seu Time', welcomePlaceholder: 'Digite o nome da sua equipe', startLegacy: 'Iniciar Legado', startingLegacy: 'Preparando seu legado...', startFailed: 'Não foi possível abrir o draft. Tente novamente.', credit: 'Por Efésius Drumond',
        brandSubtitle: 'Draft histórico, temporada curta e playoffs por conferência', franchise: 'Franquia', overall: 'Overall', conference: 'Conferência', spins: 'Spins',
        regularSeason: 'Temporada regular', standings: 'Classificação', fiveGames: '5 JOGOS', standingsEmpty: 'A tabela será formada com seu time e cinco franquias aleatórias.',
        spinSeason: 'OUTRA TEMPORADA', spinTeam: 'OUTRA EQUIPE', nextTeam: '🎲 PRÓXIMA EQUIPE', startSeason: 'INICIAR TEMPORADA', playRound: 'JOGAR RODADA', playGame: 'JOGAR PARTIDA', newGame: 'REINICIAR LEGADO',
        hbaLeague: 'Liga HBA', regularSeasonTitle: 'Temporada Regular', seasonDescription: 'Cada equipe fará exatamente cinco jogos.', yourRoster: 'Seu elenco', lineup: 'Formação',
        guard: 'ARMADOR', empty: 'Vazio', reserve: 'Reserva', participants: 'Participantes', leagueRosters: 'Elencos da liga', sixTeams: '6 EQUIPES',
        rostersEmpty: 'Os elencos adversários aparecerão quando seu time estiver pronto.', teamHistory: 'Histórico da sua equipe', facedRosters: 'Elencos enfrentados', seasonPlayers: 'JOGADORES DA TEMPORADA', totalRecord: 'Campanha total',
        nameRequired: 'Digite um nome para sua equipe.', selectingTeam: 'Sorteando equipe...', searchingPlayers: 'Buscando jogadores disponíveis', seasonDash: 'Temporada --', loadingDraft: 'Carregando opções do draft...', dragHint: 'Arraste um jogador até uma posição da quadra ou clique nele e depois na posição desejada.',
        historicalTeam: 'Equipe histórica', season: 'Temporada', selectPlayer: 'Selecione um jogador antes de escolher a posição.', slotAccepts: 'Este slot aceita {positions}.', slotLocked: 'Esta posição já está ocupada. Arraste o jogador para outra função compatível.', slotReposition: 'Arraste para outra posição compatível.', slotSwapInvalid: 'Esses jogadores não podem trocar de função entre si.', anyPosition: 'qualquer posição',
        duplicatePlayer: 'Esse jogador já está no seu elenco.', playerAdded: 'Jogador adicionado. Avance para uma nova equipe.', nextTeamLocked: 'Escolha e encaixe um jogador desta equipe antes de avançar.', musicOn: 'Desativar trilha sonora', musicOff: 'Ativar trilha sonora', generatingLeague: 'GERANDO LIGA...', simulating: 'SIMULANDO...', definingBracket: 'DEFININDO CHAVE...',
        wait: 'Aguarde', round: 'Rodada', of: 'de', series: 'Série', opponent: 'Adversário', playoffsBo3: 'Playoffs · Melhor de 3', finalsBo5: 'Finais · Melhor de 5', conferenceFinal: 'Final da Conferência {conference}', finalsTitle: 'Finais da HBA Legacy',
        top2: 'TOP 2 AVANÇAM', team: 'TIME', gamesShort: 'J', winsShort: 'V', lossesShort: 'D', you: 'VOCÊ', view: 'VER', bracket: 'Chave eliminatória', otherConference: 'Outra conferência', qualified: 'classificado',
        champion: 'Campeão da HBA Legacy', notThisTime: 'Não foi dessa vez', games: 'JOGOS', noGames: 'Nenhuma partida foi registrada.', leagueUnavailable: 'A liga não está disponível.', yourTeam: 'SUA EQUIPE',
        eliminatedRegular: 'O {team} terminou fora das duas vagas de classificação da conferência {conference}.', championMessage: 'O {team} venceu as Finais e conquistou o título da HBA Legacy.', eliminatedBy: 'O {team} foi eliminado por {opponent}.',
        regularPhase: 'Temporada Regular', playoffs: 'Playoffs', finals: 'Finais', defaultTeam: 'Seu Time'
      },
      en: {
        welcomeTeamName: "Your Team's Name", welcomePlaceholder: 'Enter your team name', startLegacy: 'Start Legacy', startingLegacy: 'Preparing your legacy...', startFailed: 'The draft could not be opened. Please try again.', credit: 'By Efésius Drumond',
        brandSubtitle: 'Historic draft, short season and conference playoffs', franchise: 'Franchise', overall: 'Overall', conference: 'Conference', spins: 'Spins',
        regularSeason: 'Regular season', standings: 'Standings', fiveGames: '5 GAMES', standingsEmpty: 'The table will be formed by your team and five random franchises.',
        spinSeason: 'ANOTHER SEASON', spinTeam: 'ANOTHER TEAM', nextTeam: '🎲 NEXT TEAM', startSeason: 'START SEASON', playRound: 'PLAY ROUND', playGame: 'PLAY GAME', newGame: 'RESTART LEGACY',
        hbaLeague: 'HBA League', regularSeasonTitle: 'Regular Season', seasonDescription: 'Each team will play exactly five games.', yourRoster: 'Your roster', lineup: 'Lineup',
        guard: 'GUARD', empty: 'Empty', reserve: 'Reserve', participants: 'Participants', leagueRosters: 'League rosters', sixTeams: '6 TEAMS',
        rostersEmpty: 'Opponent rosters will appear when your team is ready.', teamHistory: 'Your team history', facedRosters: 'Faced rosters', seasonPlayers: 'SEASON PLAYERS', totalRecord: 'Overall record',
        nameRequired: 'Enter a name for your team.', selectingTeam: 'Drawing team...', searchingPlayers: 'Searching available players', seasonDash: 'Season --', loadingDraft: 'Loading draft options...', dragHint: 'Drag a player onto a court position, or click the player and then the desired position.',
        historicalTeam: 'Historic team', season: 'Season', selectPlayer: 'Select a player before choosing a position.', slotAccepts: 'This slot accepts {positions}.', slotLocked: 'This position is occupied. Drag the player to another compatible role.', slotReposition: 'Drag to another compatible position.', slotSwapInvalid: 'These players cannot swap roles with each other.', anyPosition: 'any position',
        duplicatePlayer: 'This player is already on your roster.', playerAdded: 'Player added. Move on to a new team.', nextTeamLocked: 'Choose and place one player from this team before moving on.', musicOn: 'Mute soundtrack', musicOff: 'Enable soundtrack', generatingLeague: 'GENERATING LEAGUE...', simulating: 'SIMULATING...', definingBracket: 'SETTING BRACKET...',
        wait: 'Please wait', round: 'Round', of: 'of', series: 'Series', opponent: 'Opponent', playoffsBo3: 'Playoffs · Best of 3', finalsBo5: 'Finals · Best of 5', conferenceFinal: '{conference} Conference Final', finalsTitle: 'HBA Legacy Finals',
        top2: 'TOP 2 ADVANCE', team: 'TEAM', gamesShort: 'G', winsShort: 'W', lossesShort: 'L', you: 'YOU', view: 'VIEW', bracket: 'Playoff bracket', otherConference: 'Other conference', qualified: 'qualified',
        champion: 'HBA Legacy Champion', notThisTime: 'Not this time', games: 'GAMES', noGames: 'No games were recorded.', leagueUnavailable: 'The league is unavailable.', yourTeam: 'YOUR TEAM',
        eliminatedRegular: '{team} finished outside the two qualifying spots in the {conference} Conference.', championMessage: '{team} won the Finals and claimed the HBA Legacy championship.', eliminatedBy: '{team} was eliminated by {opponent}.',
        regularPhase: 'Regular Season', playoffs: 'Playoffs', finals: 'Finals', defaultTeam: 'Your Team'
      }
    };

    function tr(key, variables = {}) {
      const language = interfaceState && interfaceState.language ? interfaceState.language : (storageGet('hba_language', 'pt') || 'pt');
      let value = (I18N[language] && I18N[language][key]) || I18N.pt[key] || key;
      Object.keys(variables).forEach(name => { value = value.replaceAll(`{${name}}`, variables[name]); });
      return value;
    }

    function definirIdioma(language) {
      const normalized = language === 'en' ? 'en' : 'pt';
      interfaceState.language = normalized;
      storageSet('hba_language', normalized);
      document.documentElement.lang = normalized === 'en' ? 'en' : 'pt-BR';
      document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = tr(element.dataset.i18n);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        element.placeholder = tr(element.dataset.i18nPlaceholder);
      });
      document.getElementById('language-pt').classList.toggle('active', normalized === 'pt');
      document.getElementById('language-en').classList.toggle('active', normalized === 'en');
      if (game && game.fase && game.fase !== 'DRAFT' && game.fase !== 'FINAL') atualizarSeasonUi();
      if (game && game.liga) {
        renderStandings();
        renderLeagueRosters();
        if (game.playoff) renderBracket();
      }
      renderUserRoster();
      if (window.HBAAudio && typeof window.HBAAudio.atualizarControle === 'function') {
        window.HBAAudio.atualizarControle();
      }
    }

    const interfaceState = {
      assets: {},
      language: storageGet('hba_language', 'pt') === 'en' ? 'en' : 'pt'
    };

    const game = {
      roster: { ARMADOR: null, WING: null, BIG: null, '4th': null },
      spins: 2,
      selectedDraftPlayer: null,
      draggedDraftPlayer: null,
      draggedRosterSlot: null,
      userName: 'Seu Time',
      liga: null,
      rodadaAtual: 0,
      fase: 'DRAFT',
      playoff: null,
      classificados: null,
      historicoUsuario: [],
      encerrado: false,
      draftAtual: null,
      jogadorEscolhidoNaEquipeAtual: false
    };

    function definirNomeUsuario(nome) {
      const nomeLimpo = String(nome || '').replace(/\s+/g, ' ').trim().slice(0, 25);
      if (!nomeLimpo) return false;

      game.userName = nomeLimpo;
      const display = document.getElementById('display-team-name');
      if (display) display.textContent = nomeLimpo;
      storageSet('hba_team_name_current', nomeLimpo);
      return true;
    }

    function iniciarLegado(event) {
      if (event && typeof event.preventDefault === 'function') event.preventDefault();
      if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
      if (game._iniciandoLegado || game._draftCarregando) return false;

      const input = document.getElementById('welcome-team-name');
      const status = document.getElementById('welcome-start-status');
      const button = document.getElementById('welcome-start-button');
      const nomeDigitado = String(input && input.value || '').replace(/\s+/g, ' ').trim().slice(0, 25);

      game._iniciandoLegado = true;
      game.fase = 'DRAFT';
      if (window.HBAAudio) window.HBAAudio.iniciarTrilha();
      definirNomeUsuario(nomeDigitado || tr('defaultTeam'));

      if (button) {
        button.disabled = true;
        button.dataset.starting = 'true';
        button.textContent = tr('startingLegacy');
      }
      if (status) status.textContent = tr('startingLegacy');

      const welcomeScreen = document.getElementById('welcome-screen');
      const appShell = document.getElementById('app-shell');
      const topBar = document.getElementById('top-bar');
      if (welcomeScreen) welcomeScreen.classList.add('hidden');
      if (appShell) appShell.classList.remove('hidden');
      if (topBar) topBar.classList.remove('hidden');
      switchView('view-draft');
      try { window.scrollTo(0, 0); } catch (scrollError) {}

      // O primeiro sorteio é disparado diretamente pelo mesmo clique que abre o jogo.
      solicitarEquipeDraft('inicial', { origem: 'inicio' });
      return false;
    }

    window.iniciarLegado = iniciarLegado;

    function configurarTime() {
      return iniciarLegado();
    }

    function nomesEscolhidosNoDraft() {
      return getRosterArray().map(function(player) { return player.nome; });
    }

    function normalizarEquipeDraft(payload) {
      const source = payload && payload.equipe ? payload.equipe : payload;
      if (!source || typeof source !== 'object') return null;
      const rawPlayers = Array.isArray(source.jogadores) ? source.jogadores
        : Array.isArray(source.elenco) ? source.elenco
        : Array.isArray(source.players) ? source.players : [];
      const jogadores = rawPlayers.map(function(player) {
        const posicao = String(player && (player.posicao || player.position || player.role) || '').toUpperCase();
        return {
          nome: String(player && (player.nome || player.name || player.apelido) || ''),
          posicao: posicao,
          overall: Number(player && (player.overall ?? player.ovr ?? player.rating)) || 0,
          overallBase: Number(player && (player.overallBase ?? player.overall ?? player.ovr ?? player.rating)) || 0,
          ajusteTemporada: Number(player && player.ajusteTemporada) || 0
        };
      }).filter(function(player) { return player.nome && player.posicao; });

      return {
        time: String(source.time || source.team || source.nomeEquipe || source.franquia || tr('historicalTeam')),
        temporada: String(source.temporada || source.season || source.ano || '--'),
        conferencia: String(source.conferencia || source.conference || ''),
        logo: String(source.logo || source.logoUrl || source.logo_url || source.imagem || source.escudo || ''),
        ovrEquipe: Number(source.ovrEquipe || source.overallEquipe || source.overall || 0),
        jogadores: jogadores
      };
    }

    function atualizarBotoesDraft() {
      const bloqueado = Boolean(game._draftCarregando || game._gerandoLiga);
      const semSpins = game.spins <= 0;
      const elencoCompleto = getRosterArray().length === 4;
      const podeAvancar = elencoCompleto || game.jogadorEscolhidoNaEquipeAtual;
      const spinSeason = document.getElementById('btn-spin-season');
      const spinTeam = document.getElementById('btn-spin-team');
      const next = document.getElementById('btn-next-team');
      if (spinSeason) spinSeason.disabled = bloqueado || semSpins;
      if (spinTeam) spinTeam.disabled = bloqueado || semSpins || !game.draftAtual;
      if (next) {
        next.disabled = bloqueado || !podeAvancar;
        next.innerText = elencoCompleto ? tr('startSeason') : tr('nextTeam');
        next.title = !bloqueado && !podeAvancar ? tr('nextTeamLocked') : '';
        next.setAttribute('aria-disabled', String(next.disabled));
      }
    }

    function prepararCarregamentoDraft() {
      game.selectedDraftPlayer = null;
      game.draggedDraftPlayer = null;
      game.draggedRosterSlot = null;
      game.jogadorEscolhidoNaEquipeAtual = false;
      limparEstadoArrasteSlots();
      document.querySelectorAll('.player-row').forEach(function(row) { row.classList.remove('selected'); });

      const nextButton = document.getElementById('btn-next-team');
      if (nextButton) nextButton.disabled = true;
      document.getElementById('draft-team-name').innerText = tr('selectingTeam');
      document.getElementById('draft-team-meta').innerText = tr('searchingPlayers');
      document.getElementById('draft-season').innerText = tr('seasonDash');

      const oldLogo = document.getElementById('draft-logo-wrap');
      if (oldLogo) oldLogo.outerHTML = '<div id="draft-logo-wrap" class="logo-fallback">HBA</div>';
      const container = document.getElementById('draft-players-container');
      if (container) container.innerHTML = `<div class="loading">${tr('loadingDraft')}</div>`;
    }
    function executarComTimeout(promise, timeoutMs, mensagem) {
      let timer;
      const timeout = new Promise(function(_, reject) {
        timer = setTimeout(function() {
          reject(new Error(mensagem || 'A operação demorou demais.'));
        }, timeoutMs);
      });
      return Promise.race([Promise.resolve(promise), timeout]).finally(function() {
        clearTimeout(timer);
      });
    }

    async function solicitarEquipeDraft(tipo, opcoes = {}) {
      if (game._draftCarregando) return false;
      prepararCarregamentoDraft();

      const token = (game._draftRequestToken || 0) + 1;
      game._draftRequestToken = token;
      game._draftCarregando = true;
      atualizarBotoesDraft();

      try {
        const excluidos = nomesEscolhidosNoDraft();
        let requisicao;

        if (tipo === 'outra-temporada') {
          requisicao = HBAService.sortearOutraTemporada(excluidos, game.draftAtual && game.draftAtual.temporada);
        } else if (tipo === 'mesma-temporada') {
          requisicao = HBAService.sortearEquipeMesmaTemporada(
            excluidos,
            game.draftAtual && game.draftAtual.temporada,
            game.draftAtual && game.draftAtual.time
          );
        } else if (tipo === 'proxima-equipe') {
          requisicao = HBAService.sortearProximaEquipe(
            excluidos,
            game.draftAtual && game.draftAtual.temporada,
            game.draftAtual && game.draftAtual.time
          );
        } else {
          requisicao = HBAService.sortearEquipe(excluidos);
        }

        const payload = await executarComTimeout(requisicao, 8000, 'O sorteio demorou demais para responder.');
        if (token !== game._draftRequestToken) return false;

        const equipe = normalizarEquipeDraft(payload);
        if (!equipe || !equipe.jogadores.length) {
          throw new Error('O banco respondeu sem jogadores disponíveis.');
        }

        renderDraftTeam(equipe);
        const welcomeButton = document.getElementById('welcome-start-button');
        if (welcomeButton) {
          welcomeButton.disabled = false;
          welcomeButton.dataset.starting = 'false';
          welcomeButton.textContent = tr('startLegacy');
        }
        const status = document.getElementById('welcome-start-status');
        if (status) status.textContent = '';
      } catch (error) {
        if (token !== game._draftRequestToken) return false;
        if (opcoes.reembolsarSpin) devolverSpin();
        tratarFalhaDraft(error, opcoes);
      } finally {
        if (token === game._draftRequestToken) {
          game._draftCarregando = false;
          game._iniciandoLegado = false;
          atualizarBotoesDraft();
        }
      }

      return true;
    }

    function sortearNovaEquipe(opcoes = {}) {
      return solicitarEquipeDraft(opcoes.tipo || 'aleatoria', opcoes);
    }

    function devolverSpin() {
      game.spins = Math.min(2, game.spins + 1);
      document.getElementById('spin-count').innerText = game.spins;
    }

    function tratarFalhaDraft(error, opcoes = {}) {
      const message = error && error.message ? error.message : String(error || 'Falha ao carregar o draft.');
      console.error('Falha no draft:', error);

      const container = document.getElementById('draft-players-container');
      if (container) {
        container.innerHTML = `
          <div class="empty-state">
            <strong>Não foi possível sortear a equipe.</strong><br>
            <span>${escapeHtml(message)}</span><br><br>
            <button type="button" class="btn" id="btn-retry-draft">TENTAR NOVAMENTE</button>
          </div>`;
      }
      const retryButton = document.getElementById('btn-retry-draft');
      if (retryButton) {
        retryButton.addEventListener('click', function() {
          sortearNovaEquipe({ tipo: 'aleatoria', origem: 'retry' });
        }, { once: true });
      }

      document.getElementById('draft-team-name').innerText = 'Falha no sorteio';
      document.getElementById('draft-team-meta').innerText = 'Confira a implantação e tente novamente';

      const welcomeButton = document.getElementById('welcome-start-button');
      if (welcomeButton) {
        welcomeButton.disabled = false;
        welcomeButton.dataset.starting = 'false';
        welcomeButton.textContent = tr('startLegacy');
      }
      const status = document.getElementById('welcome-start-status');
      if (status) status.textContent = message;
    }

    function renderDraftTeam(data) {
      data = normalizarEquipeDraft(data);
      if (!data || !Array.isArray(data.jogadores) || !data.jogadores.length) return false;
      game.draftAtual = { time: data.time, temporada: data.temporada, conferencia: data.conferencia };
      game.selectedDraftPlayer = null;
      game.draggedDraftPlayer = null;
      game.draggedRosterSlot = null;
      game.jogadorEscolhidoNaEquipeAtual = false;
      document.getElementById('draft-team-name').innerText = data.time;
      document.getElementById('draft-team-meta').innerText = data.conferencia ? `${tr('conference')} ${data.conferencia}` : tr('historicalTeam');
      document.getElementById('draft-season').innerText = `${tr('season')} ${data.temporada}`;

      const logoWrap = document.getElementById('draft-logo-wrap');
      if (logoWrap) {
        const replacement = data.logo ? document.createElement('img') : document.createElement('div');
        replacement.id = 'draft-logo-wrap';
        if (data.logo) {
          replacement.className = 'team-logo';
          replacement.src = data.logo;
          replacement.alt = `Logo ${data.time}`;
          replacement.dataset.logoFallback = 'draft';
        } else {
          replacement.className = 'logo-fallback';
          replacement.textContent = 'HBA';
        }
        logoWrap.replaceWith(replacement);
      }

      const container = document.getElementById('draft-players-container');
      container.innerHTML = '';

      data.jogadores.forEach(player => {
        const draftPlayer = { ...player, temporada: data.temporada, origem: data.time };
        const row = document.createElement('button');
        row.type = 'button';
        row.className = 'player-row';
        row.draggable = true;
        row.setAttribute('aria-label', `${player.nome}, ${player.posicao}, overall ${Number(player.overall)}`);
        row.innerHTML = `
          <span style="text-align:left; min-width:0;">
            <span class="player-name">${escapeHtml(player.nome)}</span>
            <span class="player-meta">${escapeHtml(player.posicao)} · ${tr('season')} ${escapeHtml(data.temporada)}</span>
          </span>
          <span class="ovr-badge">${Number(player.overall)}</span>`;

        row.addEventListener('click', function() {
          selecionarJogadorDraft(draftPlayer, row);
        });
        row.addEventListener('keydown', function(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selecionarJogadorDraft(draftPlayer, row);
          }
        });

        row.addEventListener('dragstart', function(event) {
          selecionarJogadorDraft(draftPlayer, row);
          game.draggedRosterSlot = null;
          game.draggedDraftPlayer = draftPlayer;
          row.classList.add('dragging');
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', player.nome);
            const preview = criarPreviewArrasteJogador(draftPlayer);
            row._hbaDragPreview = preview;
            event.dataTransfer.setDragImage(preview, 36, 36);
          }
        });

        row.addEventListener('dragend', function() {
          row.classList.remove('dragging');
          removerPreviewArraste(row);
          game.draggedDraftPlayer = null;
          limparEstadoArrasteSlots();
        });

        container.appendChild(row);
      });
      atualizarBotoesDraft();
      return true;
    }

    const POSICOES_VALIDAS_DRAFT = window.HBALineup.POSICOES_VALIDAS;

    function selecionarJogadorDraft(player, row) {
      document.querySelectorAll('.player-row').forEach(element => element.classList.remove('selected'));
      if (window.HBAAudio) window.HBAAudio.tocarEfeito('selecionar');
      if (row) row.classList.add('selected');
      game.selectedDraftPlayer = { ...player };
      ['ARMADOR', 'WING', 'BIG', '4th'].forEach(function(slotId) {
        const slot = document.getElementById(`slot-${slotId}`);
        if (slot) slot.classList.toggle('selection-target', jogadorPodeOcuparSlot(player, slotId));
      });
    }

    function jogadorCompativelComSlot(player, slotId) {
      return window.HBALineup.jogadorCompativelComSlot(player, slotId);
    }

    function jogadorPodeOcuparSlot(player, slotId) {
      return !game.roster[slotId] && jogadorCompativelComSlot(player, slotId);
    }

    function movimentoRosterValido(origemSlotId, destinoSlotId) {
      return window.HBALineup.movimentoValido(game.roster, origemSlotId, destinoSlotId);
    }


    function criarPreviewArrasteJogador(player) {
      document.querySelectorAll('.player-drag-preview').forEach(function(element) { element.remove(); });
      const preview = document.createElement('div');
      preview.className = 'player-drag-preview';
      preview.setAttribute('aria-hidden', 'true');
      preview.innerHTML = `
        <span class="player-drag-position">${escapeHtml(player.posicao)}</span>
        <strong class="player-drag-name">${escapeHtml(player.nome)}</strong>
        <span class="player-drag-ovr">${Number(player.overall)}</span>`;
      document.body.appendChild(preview);
      return preview;
    }

    function removerPreviewArraste(row) {
      if (row && row._hbaDragPreview) {
        row._hbaDragPreview.remove();
        row._hbaDragPreview = null;
      }
      document.querySelectorAll('.player-drag-preview').forEach(function(element) { element.remove(); });
    }

    function descricaoPosicoesSlot(slotId) {
      if (slotId === 'ARMADOR') return 'PG, SG ou SF';
      if (slotId === 'WING') return 'SF ou PF';
      if (slotId === 'BIG') return 'PF ou C';
      return tr('anyPosition');
    }

    function limparEstadoArrasteSlots() {
      document.querySelectorAll('.slot.drag-over, .bench-slot.drag-over, .slot.drag-invalid, .bench-slot.drag-invalid, .slot.selection-target, .bench-slot.selection-target')
        .forEach(slot => slot.classList.remove('drag-over', 'drag-invalid', 'selection-target'));
    }

    function configurarSlotsArrastaveis() {
      ['ARMADOR', 'WING', 'BIG', '4th'].forEach(function(slotId) {
        const slot = document.getElementById(`slot-${slotId}`);
        if (!slot || slot.dataset.dragConfigured === 'true') return;
        slot.dataset.dragConfigured = 'true';

        slot.addEventListener('dragstart', function(event) {
          const player = game.roster[slotId];
          if (game.fase !== 'DRAFT' || !player) {
            event.preventDefault();
            return;
          }
          game.draggedRosterSlot = slotId;
          game.draggedDraftPlayer = null;
          game.selectedDraftPlayer = null;
          document.querySelectorAll('.player-row.selected').forEach(element => element.classList.remove('selected'));
          slot.classList.add('roster-dragging');
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', `roster:${slotId}`);
            const preview = criarPreviewArrasteJogador(player);
            slot._hbaDragPreview = preview;
            event.dataTransfer.setDragImage(preview, 36, 36);
          }
        });

        slot.addEventListener('dragend', function() {
          slot.classList.remove('roster-dragging');
          removerPreviewArraste(slot);
          game.draggedRosterSlot = null;
          game.draggedDraftPlayer = null;
          limparEstadoArrasteSlots();
        });

        slot.addEventListener('dragenter', function(event) {
          if (game.fase !== 'DRAFT') return;
          const arrastandoRoster = Boolean(game.draggedRosterSlot);
          const playerDraft = game.draggedDraftPlayer;
          if (!arrastandoRoster && !playerDraft) return;
          event.preventDefault();
          const valido = arrastandoRoster
            ? movimentoRosterValido(game.draggedRosterSlot, slotId)
            : jogadorPodeOcuparSlot(playerDraft, slotId);
          slot.classList.toggle('drag-over', valido);
          slot.classList.toggle('drag-invalid', !valido);
        });

        slot.addEventListener('dragover', function(event) {
          if (game.fase !== 'DRAFT') return;
          const arrastandoRoster = Boolean(game.draggedRosterSlot);
          const playerDraft = game.draggedDraftPlayer;
          if (!arrastandoRoster && !playerDraft) return;
          event.preventDefault();
          const valido = arrastandoRoster
            ? movimentoRosterValido(game.draggedRosterSlot, slotId)
            : jogadorPodeOcuparSlot(playerDraft, slotId);
          if (event.dataTransfer) event.dataTransfer.dropEffect = valido ? 'move' : 'none';
        });

        slot.addEventListener('dragleave', function(event) {
          if (event.relatedTarget && slot.contains(event.relatedTarget)) return;
          slot.classList.remove('drag-over', 'drag-invalid');
        });

        slot.addEventListener('drop', function(event) {
          event.preventDefault();
          event.stopPropagation();
          const origemSlotId = game.draggedRosterSlot;
          const player = game.draggedDraftPlayer || game.selectedDraftPlayer;
          limparEstadoArrasteSlots();

          if (origemSlotId) {
            reposicionarJogadorNaQuadra(origemSlotId, slotId);
            return;
          }
          if (!player) return;
          alocarJogadorNoSlot(player, slotId);
        });
      });
    }

    function reposicionarJogadorNaQuadra(origemSlotId, destinoSlotId) {
      if (game.fase !== 'DRAFT' || !game.roster[origemSlotId]) return false;
      if (origemSlotId === destinoSlotId) return false;
      if (!movimentoRosterValido(origemSlotId, destinoSlotId)) {
        alert(tr('slotSwapInvalid'));
        return false;
      }

      const resultado = window.HBALineup.reposicionar(game.roster, origemSlotId, destinoSlotId);
      if (!resultado.ok) return false;
      game.roster = resultado.roster;

      game.draggedRosterSlot = null;
      game.draggedDraftPlayer = null;
      if (window.HBAAudio) window.HBAAudio.tocarEfeito('encaixar');
      renderUserRoster();
      limparEstadoArrasteSlots();
      return true;
    }

    function consumirSpin(tipo) {
      if (game.spins <= 0 || game._draftCarregando || game._gerandoLiga) return false;
      if (tipo === 'mesma-temporada' && !game.draftAtual) return false;
      game.spins--;
      if (window.HBAAudio) window.HBAAudio.tocarEfeito('spin');
      document.getElementById('spin-count').innerText = game.spins;
      atualizarBotoesDraft();
      solicitarEquipeDraft(tipo, { reembolsarSpin: true, origem: 'spin' });
      return false;
    }

    function usarSpinOutraTemporada() {
      return consumirSpin('outra-temporada');
    }

    function usarSpinOutraEquipe() {
      return consumirSpin('mesma-temporada');
    }

    function alocarAtleta(slotId) {
      if (game.fase !== 'DRAFT') return false;
      if (game.roster[slotId]) {
        alert(tr('slotLocked'));
        return false;
      }
      const player = game.selectedDraftPlayer;
      if (!player) {
        alert(tr('selectPlayer'));
        return false;
      }
      return alocarJogadorNoSlot(player, slotId);
    }

    function alocarJogadorNoSlot(player, slotId) {
      if (game.fase !== 'DRAFT' || !player) return false;

      if (game.roster[slotId]) {
        alert(tr('slotLocked'));
        return false;
      }

      if (!jogadorPodeOcuparSlot(player, slotId)) {
        alert(tr('slotAccepts', { positions: descricaoPosicoesSlot(slotId) }));
        return false;
      }

      const duplicado = Object.entries(game.roster).some(([chave, atleta]) => {
        return chave !== slotId && atleta && atleta.nome === player.nome;
      });
      if (duplicado) {
        alert(tr('duplicatePlayer'));
        return false;
      }

      game.roster[slotId] = { ...player, funcao: slotId === '4th' ? '4th MAN' : slotId };
      game.jogadorEscolhidoNaEquipeAtual = true;
      if (window.HBAAudio) window.HBAAudio.tocarEfeito('encaixar');
      renderUserRoster();
      game.selectedDraftPlayer = null;
      game.draggedDraftPlayer = null;
      limparEstadoArrasteSlots();
      document.getElementById('draft-players-container').innerHTML = `<div class="empty-state">${tr('playerAdded')}</div>`;
      document.getElementById('btn-next-team').disabled = false;

      const completo = getRosterArray().length === 4;
      document.getElementById('btn-next-team').innerText = completo ? tr('startSeason') : tr('nextTeam');
      atualizarBotoesDraft();
      return true;
    }

    function renderUserRoster() {
      Object.keys(game.roster).forEach(slotId => {
        const player = game.roster[slotId];
        const slot = document.getElementById(`slot-${slotId}`);
        const occupied = Boolean(player);
        slot.classList.toggle('occupied', occupied);
        slot.disabled = false;
        slot.draggable = occupied && game.fase === 'DRAFT';
        slot.dataset.locked = occupied ? 'true' : 'false';
        slot.setAttribute('aria-disabled', 'false');
        slot.setAttribute('aria-grabbed', 'false');
        slot.title = occupied ? tr('slotReposition') : '';
        slot.querySelector('.slot-name').innerText = occupied ? player.nome : tr('empty');
        const overallElement = slot.querySelector('.slot-ovr, .slot-ovr-inline');
        if (overallElement) {
          overallElement.textContent = occupied ? Number(player.overall) : '';
          overallElement.hidden = !occupied;
        }
      });

      const quantidade = getRosterArray().length;
      document.getElementById('roster-count').innerText = `${quantidade}/4`;
      atualizarOvrEquipe();
    }

    function proximaEquipe() {
      if (game._draftCarregando || game._gerandoLiga) return false;
      if (getRosterArray().length === 4) iniciarTemporada();
      else if (game.jogadorEscolhidoNaEquipeAtual) solicitarEquipeDraft('proxima-equipe', { origem: 'proxima-equipe' });
      else atualizarBotoesDraft();
      return false;
    }
    async function iniciarTemporada() {
      if (game._gerandoLiga) return false;

      const roster = getRosterArray();
      const botao = document.getElementById('btn-next-team');
      if (roster.length !== 4) {
        showError(new Error('Complete as quatro posições antes de iniciar a temporada.'));
        return false;
      }

      game._gerandoLiga = true;
      if (botao) {
        botao.disabled = true;
        botao.innerText = tr('generatingLeague');
      }

      try {
        const liga = await HBAService.gerarLigaTemporada(game.userName, roster);
        if (!liga || !Array.isArray(liga.equipes) || liga.equipes.length !== 6 || !Array.isArray(liga.calendario)) {
          throw new Error('O motor do jogo devolveu uma temporada incompleta.');
        }

        game.liga = liga;
        game.rodadaAtual = 0;
        game.fase = 'REGULAR';
        const equipeUsuario = liga.equipes.find(function(equipe) {
          return equipe.usuario || equipe.id === 'USER';
        });
        definirNomeUsuario(liga.nomeUsuario || (equipeUsuario && equipeUsuario.nome) || game.userName);
        document.getElementById('team-conference').innerText = liga.conferenciaUsuario || '--';
        switchView('view-season');
        renderStandings();
        renderLeagueRosters();
        atualizarSeasonUi();
      } catch (error) {
        if (botao) {
          botao.disabled = false;
          botao.innerText = tr('startSeason');
        }
        showError(error);
      } finally {
        game._gerandoLiga = false;
      }
      return false;
    }

    function jogarPartida() {
      if (game.encerrado) return false;
      if (!game.liga) {
        showError(new Error('A temporada ainda não foi iniciada.'));
        return false;
      }
      if (game.fase === 'REGULAR') jogarRodadaRegular();
      else if (game.fase === 'PLAYOFFS' || game.fase === 'FINALS') jogarPartidaSerie();
      return false;
    }
    async function jogarRodadaRegular() {
      const botao = document.getElementById('btn-play');
      if (!game.liga || !Array.isArray(game.liga.calendario)) {
        showError(new Error('O calendário da temporada não foi carregado.'));
        return false;
      }
      const rodada = game.liga.calendario[game.rodadaAtual];
      if (!rodada) {
        showError(new Error('A rodada atual não foi encontrada.'));
        return false;
      }

      botao.disabled = true;
      botao.innerText = tr('simulating');
      try {
        const resultados = await HBAService.simularRodadaRegular(rodada.jogos, game.liga.equipes);
        aplicarResultadosRodada(resultados);
        adicionarRodadaAoHistorico(rodada.numero, resultados);
        game.rodadaAtual++;
        renderStandings();
        if (game.rodadaAtual >= game.liga.totalRodadas) {
          await concluirTemporadaRegular();
        } else {
          atualizarSeasonUi();
          botao.disabled = false;
          botao.innerText = tr('playRound');
        }
      } catch (error) {
        botao.disabled = false;
        botao.innerText = tr('playRound');
        showError(error);
      }
      return false;
    }

    function aplicarResultadosRodada(resultados) {
      resultados.forEach(resultado => {
        const casa = getTeamById(resultado.casaId);
        const fora = getTeamById(resultado.foraId);

        casa.jogos++;
        fora.jogos++;
        casa.pontosPro += resultado.pontosCasa;
        casa.pontosContra += resultado.pontosFora;
        fora.pontosPro += resultado.pontosFora;
        fora.pontosContra += resultado.pontosCasa;

        if (resultado.vencedorId === casa.id) {
          casa.vitorias++;
          fora.derrotas++;
        } else {
          fora.vitorias++;
          casa.derrotas++;
        }

        if (casa.usuario || fora.usuario) {
          registrarPartidaUsuario(resultado, tr('regularPhase'), `${tr('round')} ${game.rodadaAtual + 1}`);
        }
      });
    }
    async function concluirTemporadaRegular() {
      game.classificados = {
        East: rankConference('East').slice(0, 2),
        West: rankConference('West').slice(0, 2)
      };
      renderStandings();

      const usuario = getTeamById('USER');
      const classificadosUsuario = game.classificados[usuario.conferencia];
      const classificou = classificadosUsuario.some(team => team.id === 'USER');
      if (!classificou) {
        finalizarJogo(false, tr('eliminatedRegular', { team: game.userName, conference: usuario.conferencia }));
        return;
      }

      const adversarioUsuario = classificadosUsuario.find(team => team.id !== 'USER');
      const outraConferencia = usuario.conferencia === 'East' ? 'West' : 'East';
      const [cpuA, cpuB] = game.classificados[outraConferencia];
      const playButton = document.getElementById('btn-play');
      playButton.disabled = true;
      playButton.innerText = tr('definingBracket');

      try {
        const serieCpu = await HBAService.simularSerieCpu(cpuA, cpuB, 2, 'PLAYOFFS');
        const finalistaCpu = getTeamById(serieCpu.vencedorId);
        game.playoff = {
          etapa: 'CONFERENCE',
          adversarioAtualId: adversarioUsuario.id,
          finalistaCpuId: finalistaCpu.id,
          vitoriasUsuario: 0,
          vitoriasAdversario: 0,
          serieCpu: serieCpu
        };
        game.fase = 'PLAYOFFS';
        adicionarSerieCpuAoHistorico(cpuA, cpuB, serieCpu, tr('conferenceFinal', { conference: outraConferencia }));
        atualizarSeasonUi();
        renderBracket();
        playButton.disabled = false;
        playButton.innerText = tr('playGame');
      } catch (error) {
        playButton.disabled = false;
        playButton.innerText = tr('playRound');
        showError(error);
      }
    }
    async function jogarPartidaSerie() {
      const botao = document.getElementById('btn-play');
      const usuario = getTeamById('USER');
      const adversario = getTeamById(game.playoff.adversarioAtualId);
      botao.disabled = true;
      botao.innerText = tr('simulating');

      try {
        const resultado = await HBAService.simularPartidaEliminatoria(usuario, adversario, game.fase);
        const venceu = resultado.vencedorId === 'USER';
        if (venceu) game.playoff.vitoriasUsuario++;
        else game.playoff.vitoriasAdversario++;

        adicionarJogoSerieAoHistorico(resultado, adversario, game.fase);
        renderBracket();
        const alvo = game.fase === 'FINALS' ? 3 : 2;
        if (game.playoff.vitoriasUsuario >= alvo) {
          if (game.fase === 'PLAYOFFS') iniciarFinais();
          else finalizarJogo(true, tr('championMessage', { team: game.userName }));
          return;
        }
        if (game.playoff.vitoriasAdversario >= alvo) {
          finalizarJogo(false, tr('eliminatedBy', { team: game.userName, opponent: adversario.nome }));
          return;
        }

        atualizarSeasonUi();
        botao.disabled = false;
        botao.innerText = tr('playGame');
      } catch (error) {
        botao.disabled = false;
        botao.innerText = tr('playGame');
        showError(error);
      }
    }

    function iniciarFinais() {
      game.fase = 'FINALS';
      game.playoff.etapa = 'FINALS';
      game.playoff.adversarioAtualId = game.playoff.finalistaCpuId;
      game.playoff.vitoriasUsuario = 0;
      game.playoff.vitoriasAdversario = 0;
      atualizarSeasonUi();
      renderBracket();
      document.getElementById('btn-play').disabled = false;
      document.getElementById('btn-play').innerText = tr('playGame');
    }

    function atualizarSeasonUi() {
      const eyebrow = document.getElementById('season-eyebrow');
      const title = document.getElementById('season-title');
      const description = document.getElementById('season-description');
      const progress = document.getElementById('progress-text');

      if (game.fase === 'REGULAR') {
        eyebrow.innerText = tr('hbaLeague');
        title.innerText = tr('regularSeasonTitle');
        description.innerText = interfaceState.language === 'en' ? 'The six teams play each other once.' : 'As seis equipes jogam entre si uma vez.';
        progress.innerText = `${tr('round')} ${game.rodadaAtual + 1} ${tr('of')} 5`;
      } else if (game.fase === 'PLAYOFFS') {
        const adversario = getTeamById(game.playoff.adversarioAtualId);
        eyebrow.innerText = tr('playoffsBo3');
        title.innerText = tr('conferenceFinal', { conference: getTeamById('USER').conferencia });
        description.innerText = `${tr('opponent')}: ${adversario.nome}`;
        progress.innerText = `${tr('series')} ${game.playoff.vitoriasUsuario}–${game.playoff.vitoriasAdversario}`;
      } else if (game.fase === 'FINALS') {
        const adversario = getTeamById(game.playoff.adversarioAtualId);
        eyebrow.innerText = tr('finalsBo5');
        title.innerText = tr('finalsTitle');
        description.innerText = `${tr('opponent')}: ${adversario.nome}`;
        progress.innerText = `${tr('series')} ${game.playoff.vitoriasUsuario}–${game.playoff.vitoriasAdversario}`;
      }
    }

    function renderStandings() {
      if (!game.liga) return;
      const container = document.getElementById('standings-content');
      container.innerHTML = ['East', 'West'].map(conferencia => {
        const teams = rankConference(conferencia);
        return `
          <section class="conference">
            <div class="conference-title"><strong>${conferencia} Conference</strong><span>${tr('top2')}</span></div>
            <div class="standing-head"><span>${tr('team')}</span><span>${tr('gamesShort')}</span><span>${tr('winsShort')}</span><span>${tr('lossesShort')}</span><span>+/-</span></div>
            ${teams.map((team, index) => standingRow(team, index)).join('')}
          </section>`;
      }).join('');
    }

    function standingRow(team, index) {
      const saldo = team.pontosPro - team.pontosContra;
      const logo = team.logo
        ? `<img src="${escapeAttr(team.logo)}" alt="" data-hide-on-error="true">`
        : `<span class="logo-fallback" style="width:27px;height:27px;flex-basis:27px;border-radius:8px;font-size:8px;">${escapeHtml(team.sigla || 'HBA')}</span>`;
      return `
        <div class="standing-row ${team.usuario ? 'user' : ''} ${index < 2 ? 'qualifier' : ''}">
          <div class="standing-team">
            <span class="position">${index + 1}</span>${logo}
            <span class="standing-team-name">${escapeHtml(team.nome)}</span>
          </div>
          <span>${team.jogos}</span><span>${team.vitorias}</span><span>${team.derrotas}</span>
          <span>${saldo > 0 ? '+' : ''}${saldo}</span>
        </div>`;
    }

    function renderLeagueRosters() {
      const container = document.getElementById('league-rosters');
      container.innerHTML = game.liga.equipes.map(team => {
        const logo = team.logo
          ? `<img class="team-logo small" src="${escapeAttr(team.logo)}" alt="" data-hide-on-error="true">`
          : `<span class="logo-fallback" style="width:30px;height:30px;flex-basis:30px;border-radius:8px;font-size:8px;">${escapeHtml(team.sigla || 'HBA')}</span>`;

        return `
          <details class="team-roster" ${team.usuario ? 'open' : ''}>
            <summary>
              ${logo}
              <span class="roster-summary-text"><strong>${escapeHtml(team.nome)}</strong><span>${team.conferencia} · OVR ${team.overall}</span></span>
              <span style="color:var(--orange);font-size:11px;font-weight:900;">${team.usuario ? tr('you') : tr('view')}</span>
            </summary>
            <div class="roster-list">
              ${team.elenco.map(player => `<div class="roster-player"><span>${escapeHtml(player.nome)}</span><span>${escapeHtml(player.funcao || player.posicao)} · ${Number(player.overall)}</span></div>`).join('')}
            </div>
          </details>`;
      }).join('');
    }

    function renderBracket() {
      const box = document.getElementById('bracket-box');
      if (!game.playoff) {
        box.classList.add('hidden');
        return;
      }

      const usuario = getTeamById('USER');
      const adversario = getTeamById(game.playoff.adversarioAtualId);
      const finalistaCpu = getTeamById(game.playoff.finalistaCpuId);
      const cpu = game.playoff.serieCpu;
      box.classList.remove('hidden');
      box.innerHTML = `
        <h4>${tr('bracket')}</h4>
        <div class="bracket-line"><span>${escapeHtml(usuario.nome)} × ${escapeHtml(adversario.nome)}</span><strong>${game.playoff.vitoriasUsuario}–${game.playoff.vitoriasAdversario}</strong></div>
        <div class="bracket-line"><span>${tr('otherConference')}</span><strong>${escapeHtml(finalistaCpu.nome)} ${tr('qualified')} (${cpu.vitoriasA}–${cpu.vitoriasB})</strong></div>`;
    }

    function adicionarRodadaAoHistorico(numero, resultados) {
      const html = resultados.map(resultado => {
        const casa = getTeamById(resultado.casaId);
        const fora = getTeamById(resultado.foraId);
        const userMatch = casa.usuario || fora.usuario;
        return `
          <div class="match-line ${userMatch ? 'user-match' : ''}">
            <span>${escapeHtml(casa.nome)}</span>
            <span class="score">${resultado.pontosCasa} × ${resultado.pontosFora}</span>
            <span class="right">${escapeHtml(fora.nome)}</span>
          </div>`;
      }).join('');

      document.getElementById('match-history').insertAdjacentHTML('afterbegin', `
        <section class="round-card"><div class="round-title">${tr('round')} ${numero}</div>${html}</section>`);
    }

    function adicionarSerieCpuAoHistorico(equipeA, equipeB, serie, titulo) {
      const linhas = serie.jogos.map(jogo => `
        <div class="match-line">
          <span>${escapeHtml(equipeA.nome)}</span>
          <span class="score">${jogo.pontosCasa} × ${jogo.pontosFora}</span>
          <span class="right">${escapeHtml(equipeB.nome)}</span>
        </div>`).join('');
      document.getElementById('match-history').insertAdjacentHTML('afterbegin', `
        <section class="round-card"><div class="round-title">${escapeHtml(titulo)}</div>${linhas}</section>`);
    }

    function adicionarJogoSerieAoHistorico(resultado, adversario, fase) {
      const usuario = getTeamById('USER');
      const titulo = fase === 'FINALS' ? tr('finals') : tr('conferenceFinal', { conference: usuario.conferencia });
      registrarPartidaUsuario(resultado, fase === 'FINALS' ? tr('finals') : tr('playoffs'), titulo);
      document.getElementById('match-history').insertAdjacentHTML('afterbegin', `
        <section class="round-card">
          <div class="round-title">${escapeHtml(titulo)}</div>
          <div class="match-line user-match">
            <span>${escapeHtml(usuario.nome)}</span>
            <span class="score">${resultado.pontosCasa} × ${resultado.pontosFora}</span>
            <span class="right">${escapeHtml(adversario.nome)}</span>
          </div>
        </section>`);
    }

    function registrarPartidaUsuario(resultado, fase, rotulo) {
      const casa = getTeamById(resultado.casaId);
      const fora = getTeamById(resultado.foraId);
      if (!casa || !fora || (!casa.usuario && !fora.usuario)) return;

      const usuarioCasa = casa.usuario;
      const adversario = usuarioCasa ? fora : casa;
      const pontosUsuario = usuarioCasa ? resultado.pontosCasa : resultado.pontosFora;
      const pontosAdversario = usuarioCasa ? resultado.pontosFora : resultado.pontosCasa;
      game.historicoUsuario.push({
        fase: fase,
        rotulo: rotulo,
        adversarioId: adversario.id,
        adversarioNome: adversario.nome,
        pontosUsuario: pontosUsuario,
        pontosAdversario: pontosAdversario,
        vitoria: pontosUsuario > pontosAdversario
      });
    }

    function finalizarJogo(venceu, mensagem) {
      game.fase = 'FINAL';
      if (window.HBAAudio) window.HBAAudio.tocarEfeito(venceu ? 'vitoria' : 'derrota');
      game.encerrado = true;
      const botao = document.getElementById('btn-play');
      if (botao) botao.disabled = true;

      const vitorias = game.historicoUsuario.filter(jogo => jogo.vitoria).length;
      const derrotas = game.historicoUsuario.length - vitorias;
      const modal = document.getElementById('end-modal');
      modal.classList.toggle('loss', !venceu);
      modal.classList.remove('hidden');
      document.body.classList.add('modal-open');
      const endIcon = document.getElementById('end-icon');
      endIcon.innerHTML = interfaceState.assets[venceu ? 'trofeu' : 'bolaBasquete']
        ? `<img src="${escapeAttr(interfaceState.assets[venceu ? 'trofeu' : 'bolaBasquete'])}" alt="" style="width:58px;height:58px;object-fit:contain;">`
        : (venceu ? '🏆' : '🏀');
      document.getElementById('end-title').innerText = venceu ? tr('champion') : tr('notThisTime');
      document.getElementById('end-message').innerText = mensagem;
      document.getElementById('end-record').innerText = `${vitorias}–${derrotas}`;
      document.getElementById('end-games-count').innerText = `${game.historicoUsuario.length} ${tr('games')}`;
      renderHistoricoFinal();
      renderElencosFinais();
    }

    function renderHistoricoFinal() {
      const container = document.getElementById('final-match-list');
      if (!game.historicoUsuario.length) {
        container.innerHTML = `<div class="empty-state">${tr('noGames')}</div>`;
        return;
      }
      container.innerHTML = game.historicoUsuario.map(jogo => `
        <div class="final-match">
          <span class="final-match-phase">${escapeHtml(jogo.fase)}</span>
          <span class="final-match-opponent">vs ${escapeHtml(jogo.adversarioNome)}</span>
          <span class="final-match-score">${jogo.pontosUsuario} × ${jogo.pontosAdversario}</span>
          <span class="result-pill ${jogo.vitoria ? 'win' : 'loss'}">${jogo.vitoria ? 'V' : 'D'}</span>
        </div>`).join('');
    }

    function renderElencosFinais() {
      const container = document.getElementById('final-rosters');
      if (!game.liga) {
        container.innerHTML = `<div class="empty-state">${tr('leagueUnavailable')}</div>`;
        return;
      }

      const idsEnfrentados = new Set(['USER']);
      game.historicoUsuario.forEach(jogo => idsEnfrentados.add(jogo.adversarioId));
      const equipes = game.liga.equipes.filter(team => idsEnfrentados.has(team.id));

      container.innerHTML = equipes.map(team => {
        const logo = team.logo
          ? `<img class="team-logo small" src="${escapeAttr(team.logo)}" alt="" data-hide-on-error="true">`
          : `<span class="logo-fallback" style="width:30px;height:30px;flex-basis:30px;border-radius:8px;font-size:8px;">${escapeHtml(team.sigla || 'HBA')}</span>`;
        return `
          <article class="final-roster-card">
            <div class="final-roster-head">
              ${logo}
              <div><strong>${escapeHtml(team.nome)}</strong><span>${team.conferencia} · OVR ${team.overall}${team.usuario ? ` · ${tr('yourTeam')}` : ''}</span></div>
            </div>
            <div class="final-roster-players">
              ${team.elenco.map(player => `
                <div class="final-roster-player">
                  <span>${escapeHtml(player.nome)}</span>
                  <strong>${escapeHtml(player.funcao || player.posicao)} · ${Number(player.overall)}</strong>
                </div>`).join('')}
            </div>
          </article>`;
      }).join('');
    }

    function resetarJogo() {
      game.roster = { ARMADOR: null, WING: null, BIG: null, '4th': null };
      game.spins = 2;
      game.selectedDraftPlayer = null;
      game.draggedDraftPlayer = null;
      limparEstadoArrasteSlots();
      game.userName = tr('defaultTeam');
      storageSet('hba_team_name_current', '');
      game.liga = null;
      game.rodadaAtual = 0;
      game.fase = 'DRAFT';
      game.playoff = null;
      game.classificados = null;
      game.historicoUsuario = [];
      game.encerrado = false;
      game.draftAtual = null;
      game.jogadorEscolhidoNaEquipeAtual = false;
      game._inicioExecutado = false;
      game._iniciandoLegado = false;
      game._draftCarregando = false;
      game._draftRequestToken = (game._draftRequestToken || 0) + 1;
      game._gerandoLiga = false;

      document.body.classList.remove('modal-open');
      document.getElementById('end-modal').classList.add('hidden');
      document.getElementById('end-modal').classList.remove('loss');
      document.getElementById('end-icon').innerText = '🏀';
      document.getElementById('top-bar').classList.add('hidden');
      document.getElementById('display-team-name').innerText = '--';
      document.getElementById('team-ovr').innerText = '--';
      document.getElementById('team-conference').innerText = '--';
      document.getElementById('spin-count').innerText = '2';
      document.getElementById('welcome-team-name').value = '';
      const welcomeStartButton = document.getElementById('welcome-start-button');
      if (welcomeStartButton) {
        welcomeStartButton.disabled = false;
        welcomeStartButton.dataset.starting = 'false';
        welcomeStartButton.textContent = tr('startLegacy');
      }
      const welcomeStartStatus = document.getElementById('welcome-start-status');
      if (welcomeStartStatus) welcomeStartStatus.textContent = '';
      document.getElementById('btn-spin-season').disabled = false;
      document.getElementById('btn-spin-team').disabled = true;
      document.getElementById('btn-next-team').disabled = true;
      document.getElementById('btn-next-team').innerText = tr('nextTeam');
      document.getElementById('btn-play').disabled = false;
      document.getElementById('btn-play').innerText = tr('playRound');
      document.getElementById('draft-team-name').innerText = tr('selectingTeam');
      document.getElementById('draft-team-meta').innerText = tr('wait');
      document.getElementById('draft-season').innerText = tr('seasonDash');
      document.getElementById('draft-players-container').innerHTML = '';
      document.getElementById('match-history').innerHTML = '';
      document.getElementById('final-match-list').innerHTML = '';
      document.getElementById('final-rosters').innerHTML = '';
      document.getElementById('bracket-box').innerHTML = '';
      document.getElementById('bracket-box').classList.add('hidden');
      document.getElementById('standings-content').innerHTML = `<div class="empty-state">${tr('standingsEmpty')}</div>`;
      document.getElementById('league-rosters').innerHTML = `<div class="empty-state">${tr('rostersEmpty')}</div>`;
      renderUserRoster();
      switchView('view-setup');
      document.getElementById('app-shell').classList.add('hidden');
      document.getElementById('welcome-screen').classList.remove('hidden');
      document.getElementById('welcome-team-name').focus();
      if (window.HBAAudio) window.HBAAudio.iniciarTrilha();
    }
    function carregarInterface() {
      aplicarTema(storageGet('hba_theme', 'dark') || 'dark');
      definirIdioma(interfaceState.language);
      interfaceState.assets = HBAService.obterAssetsInterface();
      aplicarAssetsInterface();
    }


    function aplicarAssetsInterface() {
      const assets = interfaceState.assets || {};
      const brand = document.getElementById('brand-ball');
      if (brand && assets.bolaBasquete) {
        brand.src = assets.bolaBasquete;
        brand.hidden = false;
        const fallback = document.getElementById('brand-fallback');
        if (fallback) fallback.hidden = true;
      }

      const welcomeLogo = document.getElementById('welcome-logo');
      if (welcomeLogo) {
        const directLogo = 'assets/hba-legacy-logo.png';
        welcomeLogo.src = assets.logoProjeto || directLogo;
        welcomeLogo.onload = function() {
          welcomeLogo.hidden = false;
          const fallback = document.getElementById('welcome-logo-fallback');
          if (fallback) fallback.hidden = true;
        };
        welcomeLogo.onerror = function() {
          if (welcomeLogo.src !== directLogo) {
            welcomeLogo.src = directLogo;
            return;
          }
          welcomeLogo.hidden = true;
          const fallback = document.getElementById('welcome-logo-fallback');
          if (fallback) fallback.hidden = false;
        };
      }

      atualizarIconeTema();
    }








    function alternarTema() {
      const atual = document.body.dataset.theme === 'dark' ? 'dark' : 'light';
      aplicarTema(atual === 'dark' ? 'light' : 'dark');
    }

    function aplicarTema(tema) {
      const normalizado = tema === 'dark' ? 'dark' : 'light';
      document.body.dataset.theme = normalizado;
      storageSet('hba_theme', normalizado);
      atualizarIconeTema();
    }

    function atualizarIconeTema() {
      const escuro = document.body.dataset.theme === 'dark';
      const simbolo = document.getElementById('theme-toggle-fallback');
      const botao = document.getElementById('theme-toggle');

      if (simbolo) {
        simbolo.textContent = escuro ? '☀' : '☾';
        simbolo.setAttribute('aria-label', escuro ? 'Ativar modo claro' : 'Ativar modo escuro');
      }

      if (botao) {
        const titulo = escuro ? 'Usar modo claro' : 'Usar modo escuro';
        botao.title = titulo;
        botao.setAttribute('aria-label', titulo);
      }
    }








    function embaralharCliente(lista) {
      for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
      }
      return lista;
    }

    function rankConference(conferencia) {
      return game.liga.equipes
        .filter(team => team.conferencia === conferencia)
        .slice()
        .sort((a, b) => {
          if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
          const saldoA = a.pontosPro - a.pontosContra;
          const saldoB = b.pontosPro - b.pontosContra;
          if (saldoB !== saldoA) return saldoB - saldoA;
          if (b.pontosPro !== a.pontosPro) return b.pontosPro - a.pontosPro;
          return a.nome.localeCompare(b.nome);
        });
    }

    function getTeamById(id) {
      return game.liga.equipes.find(team => team.id === id);
    }

    function getRosterArray() {
      return Object.values(game.roster).filter(Boolean);
    }

    function atualizarOvrEquipe() {
      const roster = getRosterArray();
      const overall = roster.length ? Math.round(roster.reduce((total, player) => total + Number(player.overall), 0) / roster.length) : 0;
      document.getElementById('team-ovr').innerText = overall || '--';
      return overall;
    }

    function switchView(viewId) {
      ['view-setup', 'view-draft', 'view-season', 'view-final'].forEach(id => {
        document.getElementById(id).classList.toggle('hidden', id !== viewId);
      });
    }

    function showError(error) {
      const message = error && error.message ? error.message : String(error || 'Ocorreu um erro inesperado.');
      alert(message);
    }

    function escapeHtml(value) {
      return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function escapeAttr(value) {
      return escapeHtml(value);
    }


    // Os controles da interface são registrados uma única vez por addEventListener.
    window.sortearNovaEquipe = sortearNovaEquipe;
    window.usarSpinOutraTemporada = usarSpinOutraTemporada;
    window.usarSpinOutraEquipe = usarSpinOutraEquipe;
    window.proximaEquipe = proximaEquipe;
    window.iniciarTemporada = iniciarTemporada;
    window.alocarAtleta = alocarAtleta;
    window.jogarPartida = jogarPartida;
    window.resetarJogo = resetarJogo;
    window.alternarTema = alternarTema;
    window.definirIdioma = definirIdioma;

    function vincularUmaVez(elemento, evento, handler, chave) {
      if (!elemento) return;
      const marker = `bound${chave || evento}`;
      if (elemento.dataset[marker] === 'true') return;
      elemento.dataset[marker] = 'true';
      elemento.addEventListener(evento, handler);
    }

    function registrarControlesInterface() {
      const welcomeButton = document.getElementById('welcome-start-button');
      const welcomeInput = document.getElementById('welcome-team-name');

      vincularUmaVez(welcomeButton, 'click', iniciarLegado, 'Start');
      if (welcomeButton) {
        welcomeButton.dataset.starting = welcomeButton.dataset.starting || 'false';
        welcomeButton.disabled = false;
      }

      vincularUmaVez(welcomeInput, 'keydown', function(event) {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        if (welcomeButton) welcomeButton.click();
      }, 'Enter');

      vincularUmaVez(document.getElementById('language-pt'), 'click', function() { definirIdioma('pt'); }, 'LanguagePt');
      vincularUmaVez(document.getElementById('language-en'), 'click', function() { definirIdioma('en'); }, 'LanguageEn');
      vincularUmaVez(document.getElementById('theme-toggle'), 'click', alternarTema, 'Theme');
      document.querySelectorAll('[data-audio-toggle]').forEach(function(botao, indice) {
        vincularUmaVez(botao, 'click', function() {
          if (window.HBAAudio) window.HBAAudio.alternarAudio();
        }, `AudioToggle${indice}`);
      });
      document.querySelectorAll('[data-audio-volume]').forEach(function(controle, indice) {
        vincularUmaVez(controle, 'input', function(event) {
          if (!window.HBAAudio) return;
          window.HBAAudio.definirVolume(Number(event.currentTarget.value) / 100);
        }, `AudioVolume${indice}`);
      });
      vincularUmaVez(document.getElementById('btn-spin-season'), 'click', usarSpinOutraTemporada, 'SpinSeason');
      vincularUmaVez(document.getElementById('btn-spin-team'), 'click', usarSpinOutraEquipe, 'SpinTeam');
      vincularUmaVez(document.getElementById('btn-next-team'), 'click', proximaEquipe, 'NextTeam');
      vincularUmaVez(document.getElementById('btn-play'), 'click', jogarPartida, 'Play');
      vincularUmaVez(document.getElementById('btn-reset-final'), 'click', resetarJogo, 'ResetFinal');
      vincularUmaVez(document.getElementById('btn-reset-modal'), 'click', resetarJogo, 'ResetModal');

      ['ARMADOR', 'WING', 'BIG', '4th'].forEach(function(slotId) {
        vincularUmaVez(document.getElementById(`slot-${slotId}`), 'click', function() {
          alocarAtleta(slotId);
        }, `Slot${slotId}`);
      });

      const welcomeLogo = document.getElementById('welcome-logo');
      const welcomeFallback = document.getElementById('welcome-logo-fallback');
      const atualizarLogoBoasVindas = function(carregou) {
        if (welcomeLogo) welcomeLogo.hidden = !carregou;
        if (welcomeFallback) welcomeFallback.hidden = carregou;
      };
      vincularUmaVez(welcomeLogo, 'load', function() { atualizarLogoBoasVindas(true); }, 'LogoLoad');
      vincularUmaVez(welcomeLogo, 'error', function() { atualizarLogoBoasVindas(false); }, 'LogoError');
      if (welcomeLogo && welcomeLogo.complete) atualizarLogoBoasVindas(Boolean(welcomeLogo.naturalWidth));
    }

    function registrarFallbacksDeImagem() {
      if (document.documentElement.dataset.imageFallbackBound === 'true') return;
      document.documentElement.dataset.imageFallbackBound = 'true';
      document.addEventListener('error', function(event) {
        const image = event.target;
        if (!(image instanceof HTMLImageElement)) return;
        if (image.dataset.hideOnError === 'true') {
          image.hidden = true;
          return;
        }
        if (image.dataset.logoFallback === 'draft' || image.id === 'draft-logo-wrap') {
          const fallback = document.createElement('div');
          fallback.id = 'draft-logo-wrap';
          fallback.className = 'logo-fallback';
          fallback.textContent = 'HBA';
          image.replaceWith(fallback);
        }
      }, true);
    }

    function inicializarHbaLegacy() {
      const startButton = document.getElementById('welcome-start-button');
      const startStatus = document.getElementById('welcome-start-status');

      if (!window.HBAService || !window.HBAEngine || !window.HBADatabase) {
        const mensagem = 'Falha ao carregar o banco ou o motor do HBA Legacy.';
        console.error(mensagem);
        if (startButton) startButton.disabled = true;
        if (startStatus) startStatus.textContent = mensagem;
        return;
      }

      const relatorioBanco = HBAService.validarBanco();
      if (!relatorioBanco.valido) {
        const mensagem = 'O banco de jogadores possui dados inválidos e o jogo foi bloqueado por segurança.';
        console.error(mensagem, relatorioBanco.erros);
        if (startButton) startButton.disabled = true;
        if (startStatus) startStatus.textContent = mensagem;
        return;
      }

      registrarControlesInterface();
      registrarFallbacksDeImagem();
      configurarSlotsArrastaveis();

      if (game._interfaceInicializada) return;
      game._interfaceInicializada = true;
      try {
        carregarInterface();
      } catch (error) {
        console.error('Falha ao carregar recursos opcionais da interface:', error);
      }
    }

    // app.js é carregado com defer, depois do banco, assets e motor do jogo.
    inicializarHbaLegacy();
