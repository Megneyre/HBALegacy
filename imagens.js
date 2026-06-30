/**
 * Catálogo visual das franquias usadas no simulador.
 *
 * As imagens são carregadas por URL externa e foram vinculadas apenas para
 * prototipagem/testes. Os nomes e logotipos pertencem aos respectivos titulares.
 */
const NBA_TEAM_ASSETS = Object.freeze({
  "Atlanta Hawks":             { sigla: "ATL", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/atl.png" },
  "Boston Celtics":            { sigla: "BOS", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png" },
  "Brooklyn Nets":             { sigla: "BKN", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png" },
  "Charlotte Hornets":         { sigla: "CHA", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/cha.png" },
  "Chicago Bulls":             { sigla: "CHI", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png" },
  "Cleveland Cavaliers":       { sigla: "CLE", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/cle.png" },
  "Detroit Pistons":           { sigla: "DET", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/det.png" },
  "Indiana Pacers":            { sigla: "IND", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/ind.png" },
  "Miami Heat":                { sigla: "MIA", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png" },
  "Milwaukee Bucks":           { sigla: "MIL", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/mil.png" },
  "New York Knicks":           { sigla: "NYK", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/ny.png" },
  "Orlando Magic":             { sigla: "ORL", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/orl.png" },
  "Philadelphia 76ers":        { sigla: "PHI", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/phi.png" },
  "Toronto Raptors":           { sigla: "TOR", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png" },
  "Washington Wizards":        { sigla: "WAS", conferencia: "East", logo: "https://a.espncdn.com/i/teamlogos/nba/500/wsh.png" },

  "Dallas Mavericks":          { sigla: "DAL", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/dal.png" },
  "Denver Nuggets":            { sigla: "DEN", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/den.png" },
  "Golden State Warriors":     { sigla: "GSW", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/gs.png" },
  "Houston Rockets":           { sigla: "HOU", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png" },
  "Los Angeles Clippers":      { sigla: "LAC", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/lac.png" },
  "Los Angeles Lakers":        { sigla: "LAL", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png" },
  "Memphis Grizzlies":         { sigla: "MEM", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png" },
  "Minnesota Timberwolves":    { sigla: "MIN", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/min.png" },
  "New Orleans Pelicans":      { sigla: "NOP", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/no.png" },
  "Oklahoma City Thunder":     { sigla: "OKC", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/okc.png" },
  "Phoenix Suns":              { sigla: "PHX", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/phx.png" },
  "Portland Trail Blazers":    { sigla: "POR", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/por.png" },
  "Sacramento Kings":          { sigla: "SAC", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png" },
  "San Antonio Spurs":         { sigla: "SAS", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/sa.png" },
  "Utah Jazz":                 { sigla: "UTA", conferencia: "West", logo: "https://a.espncdn.com/i/teamlogos/nba/500/utah.png" }
});

function obterAssetTime(nomeTime) {
  const nomesAlternativos = {
    "LA Clippers": "Los Angeles Clippers",
    "Cincinnati Royals": "Sacramento Kings",
    "Seattle Supersonics": "Oklahoma City Thunder",
    "Vancouver Grizzlies": "Memphis Grizzlies"
  };
  const nomeNormalizado = nomesAlternativos[nomeTime] || nomeTime;
  return NBA_TEAM_ASSETS[nomeNormalizado] || {
    sigla: nomeNormalizado.substring(0, 3).toUpperCase(),
    conferencia: null,
    logo: ""
  };
}

/**
 * Assets genéricos da interface. Para usar imagens próprias, troque somente as
 * URLs abaixo por links públicos HTTPS que abram diretamente o PNG.
 *
 * Os ícones OpenMoji são usados sob CC BY-SA 4.0.
 */
const HBA_UI_ASSETS = Object.freeze({
  logoProjeto: 'https://i.ibb.co/v2Ds66s/Chat-GPT-Image-29-de-jun-de-2026-23-16-12.png',
  bandeiraBrasil: '',
  bandeiraEstadosUnidos: '',

  // Elementos gerais da interface, servidos por CDN em URLs HTTPS diretas.
  bolaBasquete: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F3C0.png',
  trofeu: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F3C6.png',
  medalha: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F3C5.png',
  tenis: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F45F.png',
  apito: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F4E3.png',
  alvo: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F3AF.png',
  celebracao: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F389.png',
  placar: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F4CA.png',
  fogo: 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@17.0/color/618x618/1F525.png',

  // Controles de tema usam os símbolos nativos abaixo.
  // O botão de tema usa os símbolos nativos ☀ e ☾ no Index.html.
  temaClaro: '',
  temaEscuro: ''
});

function obterAssetsInterface() {
  return JSON.parse(JSON.stringify(HBA_UI_ASSETS));
}
