const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const context = {
  console,
  Math,
  JSON,
  Object,
  Array,
  Number,
  String,
  Boolean,
  Set,
  Map,
  Date,
  Promise,
  Error,
};
context.window = context;
vm.createContext(context);

for (const relative of [
  'js/data/database.js',
  'js/data/assets.js',
  'js/core/engine.js',
  'js/core/service.js',
]) {
  const filename = path.join(ROOT, relative);
  vm.runInContext(fs.readFileSync(filename, 'utf8'), context, { filename });
}

const engine = context.HBAEngine;
const service = context.HBAService;
const database = context.HBADatabase;
const assets = context.HBAAssets;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createUserRoster() {
  const chosen = [];
  const names = new Set();
  while (chosen.length < 4) {
    const draw = engine.sortearEquipe([...names]);
    const player = draw.jogadores.find((candidate) => !names.has(candidate.nome));
    assert.ok(player, 'A draw should provide at least one unused player.');
    names.add(player.nome);
    chosen.push({
      ...clone(player),
      temporada: draw.temporada,
      origem: draw.time,
      funcao: ['ARMADOR', 'WING', 'BIG', '4th MAN'][chosen.length],
    });
  }
  return chosen;
}

test('database is structurally valid and preserves expected totals', () => {
  const report = engine.validarBanco();
  assert.equal(report.valido, true);
  assert.equal(report.totalEquipesHistoricas, 127);
  assert.equal(report.totalFranquias, 33);
  assert.equal(report.totalJogadores, 179);
  assert.equal(report.erros.length, 0);
  assert.equal(report.avisos.length, 0);
});

test('every historical franchise has a visual mapping or alias', () => {
  const missing = [];
  for (const team of database.equipes) {
    const asset = assets.obterAssetTime(team.time);
    if (!asset || !asset.sigla || !asset.logo) missing.push(team.time);
  }
  assert.equal(new Set(missing).size, 0);
});

test('normal draw always returns a complete team payload', () => {
  for (let index = 0; index < 1000; index += 1) {
    const draw = engine.sortearEquipe([]);
    assert.ok(draw.time);
    assert.ok(draw.temporada);
    assert.ok(Array.isArray(draw.jogadores));
    assert.ok(draw.jogadores.length > 0);
    assert.ok(draw.logo);
    for (const player of draw.jogadores) {
      assert.ok(player.nome);
      assert.match(player.posicao, /^(PG|SG|SF|PF|C)$/);
      assert.ok(player.overall >= 70 && player.overall <= 100);
    }
  }
});

test('same-season spin changes only the team', () => {
  for (let index = 0; index < 250; index += 1) {
    const first = engine.sortearEquipe([]);
    const next = engine.sortearEquipeMesmaTemporada([], first.temporada, first.time);
    assert.equal(next.temporada, first.temporada);
    assert.notEqual(next.time, first.time);
  }
});

test('another-season spin always changes the season', () => {
  for (let index = 0; index < 250; index += 1) {
    const first = engine.sortearEquipe([]);
    const next = engine.sortearOutraTemporada([], first.temporada);
    assert.notEqual(next.temporada, first.temporada);
  }
});

test('free next-team draw never repeats the exact current entry', () => {
  for (let index = 0; index < 250; index += 1) {
    const first = engine.sortearEquipe([]);
    const next = engine.sortearProximaEquipe([], first.temporada, first.time);
    assert.notEqual(`${next.time}|${next.temporada}`, `${first.time}|${first.temporada}`);
  }
});

test('chosen players are removed from later draft options', () => {
  const first = engine.sortearEquipe([]);
  const excluded = first.jogadores.slice(0, 3).map((player) => player.nome);
  for (let index = 0; index < 100; index += 1) {
    const next = engine.sortearEquipe(excluded);
    const returned = new Set(next.jogadores.map((player) => player.nome));
    for (const name of excluded) assert.equal(returned.has(name), false);
  }
});

test('generated league has six teams, balanced conferences and five rounds', () => {
  for (let index = 0; index < 200; index += 1) {
    const roster = createUserRoster();
    const league = engine.gerarLigaTemporada('Equipe Teste', roster);
    assert.equal(league.equipes.length, 6);
    assert.equal(league.calendario.length, 5);
    assert.equal(league.totalRodadas, 5);

    const conferences = league.equipes.reduce((result, team) => {
      result[team.conferencia] = (result[team.conferencia] || 0) + 1;
      return result;
    }, {});
    assert.equal(conferences.East, 3);
    assert.equal(conferences.West, 3);

    const appearances = new Map(league.equipes.map((team) => [team.id, 0]));
    for (const round of league.calendario) {
      assert.equal(round.jogos.length, 3);
      const ids = new Set();
      for (const game of round.jogos) {
        assert.notEqual(game.casaId, game.foraId);
        assert.equal(ids.has(game.casaId), false);
        assert.equal(ids.has(game.foraId), false);
        ids.add(game.casaId);
        ids.add(game.foraId);
        appearances.set(game.casaId, appearances.get(game.casaId) + 1);
        appearances.set(game.foraId, appearances.get(game.foraId) + 1);
      }
      assert.equal(ids.size, 6);
    }
    for (const total of appearances.values()) assert.equal(total, 5);

    const allNames = league.equipes.flatMap((team) => team.elenco.map((player) => player.nome));
    assert.equal(new Set(allNames).size, allNames.length);
  }
});

test('regular-season simulation returns valid, tie-free scores', () => {
  for (let index = 0; index < 300; index += 1) {
    const league = engine.gerarLigaTemporada('Equipe Teste', createUserRoster());
    const results = engine.simularRodadaRegular(league.calendario[0].jogos, league.equipes);
    assert.equal(results.length, 3);
    for (const result of results) {
      assert.notEqual(result.pontosCasa, result.pontosFora);
      assert.ok(result.pontosCasa > 0);
      assert.ok(result.pontosFora > 0);
      assert.ok([result.casaId, result.foraId].includes(result.vencedorId));
    }
  }
});

test('playoff series always ends exactly at the requested win target', () => {
  const teamA = { id: 'A', overall: 88 };
  const teamB = { id: 'B', overall: 86 };
  for (const target of [2, 3]) {
    for (let index = 0; index < 300; index += 1) {
      const series = engine.simularSerieCpu(teamA, teamB, target, 'PLAYOFFS');
      assert.ok(series.vitoriasA === target || series.vitoriasB === target);
      assert.ok(series.vitoriasA < target || series.vitoriasB < target);
      assert.equal(series.jogos.length, series.vitoriasA + series.vitoriasB);
    }
  }
});

test('service layer exposes the engine asynchronously', async () => {
  const draw = await service.sortearEquipe([]);
  assert.ok(draw.jogadores.length > 0);
  const report = service.validarBanco();
  assert.equal(report.valido, true);
});
