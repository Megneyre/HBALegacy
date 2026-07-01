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
  'js/data/user-logos.js',
  'js/core/engine.js',
  'js/core/service.js',
  'js/core/lineup.js',
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

function canonicalPlayerName(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
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
  assert.equal(report.totalJogadores, 153);
  assert.equal(report.totalPerfisOriginais, 179);
  assert.equal(report.totalAliases, 26);
  assert.equal(report.totalAparicoesHistoricas, 701);
  assert.equal(report.erros.length, 0);
  assert.equal(report.avisos.length, 0);
});

test('player aliases are canonicalized without removing historical appearances', () => {
  const aliases = database.aliases;
  assert.equal(Object.keys(aliases).length, 26);
  assert.equal(database.equipes.reduce((total, team) => total + team.elenco.length, 0), 701);

  const legacyNames = new Set(Object.keys(aliases));
  const rosterNames = database.equipes.flatMap((team) => team.elenco.map((player) => player.nome));
  for (const name of rosterNames) assert.equal(legacyNames.has(name), false, `Alias remained in roster: ${name}`);

  assert.equal(database.nomeCanonico('SethMacTravish'), 'Seth.MacTravish');
  assert.equal(database.nomeCanonico('Cironeto.'), 'CiroNeto.');
  assert.equal(database.nomeCanonico('hazmitboy'), 'hazmitBoy');
  assert.equal(database.nomeCanonico('Durval'), 'durvalx');
});

test('user logo is preserved in the generated league', () => {
  const logo = 'assets/team-logos/wolf.png';
  const league = engine.gerarLigaTemporada('Lobos HBA', createUserRoster(), logo);
  const user = league.equipes.find((team) => team.usuario);
  assert.equal(user.logo, logo);
  assert.equal(user.sigla, 'LH');
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


test('name variants are treated as the same player only during draws and league generation', () => {
  const allNames = [...new Set(database.equipes.flatMap((team) => team.elenco.map((player) => player.nome)))];
  const hazmitKey = canonicalPlayerName('hazmitBoy');
  const excluded = allNames.filter((name) => canonicalPlayerName(name) !== hazmitKey);
  excluded.push('hazmitBoy');

  assert.throws(() => engine.sortearEquipe(excluded), /Não há mais jogadores disponíveis/);
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
    const canonicalNames = allNames.map(canonicalPlayerName);
    assert.equal(new Set(allNames).size, allNames.length);
    assert.equal(new Set(canonicalNames).size, canonicalNames.length);

    for (const cpuTeam of league.equipes.filter((team) => !team.usuario)) {
      assert.ok(cpuTeam.overall >= 88 && cpuTeam.overall <= 90);
    }
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

test('difficulty progresses from normal regular season to medium playoffs and hard finals', () => {
  const regular = engine.obterPerfilDificuldade('REGULAR');
  const playoffs = engine.obterPerfilDificuldade('PLAYOFFS');
  const finals = engine.obterPerfilDificuldade('FINALS');

  assert.equal(regular.nome, 'Normal');
  assert.equal(playoffs.nome, 'Médio');
  assert.equal(finals.nome, 'Difícil');
  assert.ok(regular.bonusUsuario - regular.bonusCpu > playoffs.bonusUsuario - playoffs.bonusCpu);
  assert.ok(playoffs.bonusUsuario - playoffs.bonusCpu > finals.bonusUsuario - finals.bonusCpu);
});



test('selected players can move only between compatible lineup roles', () => {
  const lineup = context.HBALineup;
  const pf = { nome: 'PF Teste', posicao: 'PF', overall: 90, funcao: 'WING' };
  const roster = { ARMADOR: null, WING: pf, BIG: null, '4th': null };

  const moved = lineup.reposicionar(roster, 'WING', 'BIG');
  assert.equal(moved.ok, true);
  assert.equal(moved.roster.WING, null);
  assert.equal(moved.roster.BIG.nome, 'PF Teste');
  assert.equal(moved.roster.BIG.funcao, 'BIG');
  assert.equal(roster.WING.nome, 'PF Teste', 'Original roster must not be mutated.');

  const invalid = lineup.reposicionar(moved.roster, 'BIG', 'ARMADOR');
  assert.equal(invalid.ok, false);
  assert.equal(invalid.roster.BIG.nome, 'PF Teste');
});

test('occupied lineup roles swap only when both players fit their new roles', () => {
  const lineup = context.HBALineup;
  const validRoster = {
    ARMADOR: null,
    WING: { nome: 'PF A', posicao: 'PF', overall: 88, funcao: 'WING' },
    BIG: { nome: 'PF B', posicao: 'PF', overall: 89, funcao: 'BIG' },
    '4th': null,
  };
  const validSwap = lineup.reposicionar(validRoster, 'WING', 'BIG');
  assert.equal(validSwap.ok, true);
  assert.equal(validSwap.roster.WING.nome, 'PF B');
  assert.equal(validSwap.roster.BIG.nome, 'PF A');

  const invalidRoster = {
    ARMADOR: null,
    WING: { nome: 'PF', posicao: 'PF', overall: 88, funcao: 'WING' },
    BIG: { nome: 'C', posicao: 'C', overall: 89, funcao: 'BIG' },
    '4th': null,
  };
  const invalidSwap = lineup.reposicionar(invalidRoster, 'WING', 'BIG');
  assert.equal(invalidSwap.ok, false);
  assert.equal(invalidSwap.roster.WING.nome, 'PF');
  assert.equal(invalidSwap.roster.BIG.nome, 'C');
});

test('audio controller supports login autoplay, numbered tracks and synchronized volume controls', async () => {
  const audioPath = path.join(ROOT, 'js/core/audio.js');
  const htmlPath = path.join(ROOT, 'index.html');
  const audioSource = fs.readFileSync(audioPath, 'utf8');
  const htmlSource = fs.readFileSync(htmlPath, 'utf8');

  const storage = new Map();
  const symbols = [{ textContent: '' }, { textContent: '' }];
  const toggles = symbols.map((symbol) => ({
    classList: { toggle() {} },
    querySelector() { return symbol; },
    setAttribute() {},
    title: '',
  }));
  const ranges = [
    { value: '28', setAttribute() {}, title: '' },
    { value: '28', setAttribute() {}, title: '' },
  ];
  const outputs = [{ textContent: '' }, { textContent: '' }];
  const documentMock = {
    readyState: 'complete',
    documentElement: { lang: 'pt-BR' },
    addEventListener() {},
    querySelectorAll(selector) {
      if (selector === '[data-audio-toggle]') return toggles;
      if (selector === '[data-audio-volume]') return ranges;
      if (selector === '[data-audio-volume-value]') return outputs;
      return [];
    },
  };

  class AudioMock {
    constructor(src) {
      this.src = src;
      this.attributes = { src };
      this.volume = 1;
      this.currentTime = 0;
      this.listeners = new Map();
      this.error = null;
    }
    addEventListener(name, handler) { this.listeners.set(name, handler); }
    getAttribute(name) { return this.attributes[name] || null; }
    setAttribute(name, value) { this.attributes[name] = value; }
    removeAttribute(name) { delete this.attributes[name]; }
    load() {}
    pause() {}
    play() { return Promise.resolve(); }
  }

  const numbered = new Set([
    'assets/trilha sonora/trilha-principal.mp3',
    'assets/trilha sonora/trilha-principal1.mp3',
    'assets/trilha sonora/trilha-principal2.mp3',
  ]);
  const audioContext = {
    console,
    document: documentMock,
    Promise,
    Object,
    Array,
    Number,
    String,
    Boolean,
    Set,
    Map,
    Date,
    Error,
  };
  audioContext.window = {
    Audio: AudioMock,
    fetch: async (source) => ({ ok: numbered.has(String(source)) }),
    localStorage: {
      getItem(key) { return storage.has(key) ? storage.get(key) : null; },
      setItem(key, value) { storage.set(key, String(value)); },
    },
  };
  vm.createContext(audioContext);
  vm.runInContext(audioSource, audioContext, { filename: audioPath });

  const audio = audioContext.window.HBAAudio;
  const playlist = await audio.descobrirPlaylist();
  assert.deepEqual(Array.from(playlist), Array.from(numbered));
  audio.definirVolume(0.47);
  assert.equal(storage.get('hba_music_volume'), '0.47');
  assert.deepEqual(ranges.map((range) => range.value), ['47', '47']);
  assert.deepEqual(outputs.map((output) => output.textContent), ['47%', '47%']);
  assert.equal((htmlSource.match(/data-audio-volume/g) || []).length >= 2, true);
  assert.equal((htmlSource.match(/data-audio-toggle/g) || []).length >= 2, true);
});

test('service layer exposes the engine asynchronously', async () => {
  const draw = await service.sortearEquipe([]);
  assert.ok(draw.jogadores.length > 0);
  const report = service.validarBanco();
  assert.equal(report.valido, true);
});
