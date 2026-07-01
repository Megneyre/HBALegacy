(function (global) {
  'use strict';

  const POSICOES_VALIDAS = Object.freeze({
    ARMADOR: Object.freeze(['PG', 'SG', 'SF']),
    WING: Object.freeze(['SF', 'PF']),
    BIG: Object.freeze(['PF', 'C']),
    '4th': Object.freeze(['PG', 'SG', 'SF', 'PF', 'C'])
  });

  function jogadorCompativelComSlot(player, slotId) {
    return Boolean(
      player &&
      POSICOES_VALIDAS[slotId] &&
      POSICOES_VALIDAS[slotId].includes(player.posicao)
    );
  }

  function movimentoValido(roster, origemSlotId, destinoSlotId) {
    if (!roster || !origemSlotId || !destinoSlotId || origemSlotId === destinoSlotId) return false;
    const jogadorOrigem = roster[origemSlotId];
    const jogadorDestino = roster[destinoSlotId];
    if (!jogadorOrigem || !jogadorCompativelComSlot(jogadorOrigem, destinoSlotId)) return false;
    return !jogadorDestino || jogadorCompativelComSlot(jogadorDestino, origemSlotId);
  }

  function funcaoDoSlot(slotId) {
    return slotId === '4th' ? '4th MAN' : slotId;
  }

  function reposicionar(roster, origemSlotId, destinoSlotId) {
    if (!movimentoValido(roster, origemSlotId, destinoSlotId)) {
      return { ok: false, roster: { ...roster } };
    }

    const jogadorOrigem = roster[origemSlotId];
    const jogadorDestino = roster[destinoSlotId];
    const novoRoster = { ...roster };
    novoRoster[destinoSlotId] = { ...jogadorOrigem, funcao: funcaoDoSlot(destinoSlotId) };
    novoRoster[origemSlotId] = jogadorDestino
      ? { ...jogadorDestino, funcao: funcaoDoSlot(origemSlotId) }
      : null;

    return { ok: true, roster: novoRoster };
  }

  global.HBALineup = Object.freeze({
    POSICOES_VALIDAS,
    jogadorCompativelComSlot,
    movimentoValido,
    reposicionar
  });
})(typeof window !== 'undefined' ? window : globalThis);
