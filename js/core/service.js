/**
 * Camada única entre a interface e o motor do jogo.
 *
 * Hoje o HBA Legacy roda 100% no navegador e usa o banco versionado no GitHub.
 * A interface depende apenas deste contrato; futuramente estes métodos podem ser
 * trocados por fetch('/api/...') sem reescrever os botões ou as telas.
 */
(function criarServicoHBA(global) {
  'use strict';

  function garantirDependencias() {
    if (!global.HBAEngine || !global.HBADatabase || !global.HBAAssets) {
      throw new Error('O banco ou o motor do HBA Legacy não foi carregado.');
    }
  }

  function executar(nome, args) {
    return Promise.resolve().then(function() {
      garantirDependencias();
      const metodo = global.HBAEngine[nome];
      if (typeof metodo !== 'function') {
        throw new Error('Operação não implementada no motor: ' + nome + '.');
      }
      return metodo.apply(null, args || []);
    });
  }

  global.HBAService = Object.freeze({
    sortearEquipe: function(nomesExcluidos) {
      return executar('sortearEquipe', [nomesExcluidos]);
    },
    sortearProximaEquipe: function(nomesExcluidos, temporadaAtual, equipeAtual) {
      return executar('sortearProximaEquipe', [nomesExcluidos, temporadaAtual, equipeAtual]);
    },
    sortearOutraTemporada: function(nomesExcluidos, temporadaAtual) {
      return executar('sortearOutraTemporada', [nomesExcluidos, temporadaAtual]);
    },
    sortearEquipeMesmaTemporada: function(nomesExcluidos, temporadaAtual, equipeAtual) {
      return executar('sortearEquipeMesmaTemporada', [nomesExcluidos, temporadaAtual, equipeAtual]);
    },
    gerarLigaTemporada: function(nomeUsuario, rosterUsuario) {
      return executar('gerarLigaTemporada', [nomeUsuario, rosterUsuario]);
    },
    simularRodadaRegular: function(jogos, equipes) {
      return executar('simularRodadaRegular', [jogos, equipes]);
    },
    simularPartidaEliminatoria: function(equipeUsuario, equipeAdversaria, fase) {
      return executar('simularPartidaEliminatoria', [equipeUsuario, equipeAdversaria, fase]);
    },
    simularSerieCpu: function(equipeA, equipeB, vitoriasNecessarias, fase) {
      return executar('simularSerieCpu', [equipeA, equipeB, vitoriasNecessarias, fase]);
    },
    obterAssetsInterface: function() {
      garantirDependencias();
      return global.HBAAssets.obterAssetsInterface();
    },
    validarBanco: function() {
      garantirDependencias();
      return global.HBAEngine.validarBanco();
    }
  });
})(window);
