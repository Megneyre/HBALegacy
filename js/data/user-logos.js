/**
 * Catálogo de escudos disponíveis para a equipe do jogador.
 *
 * - Originais: arquivos locais dentro de assets/team-logos/.
 * - NBA: reutiliza exatamente as URLs já cadastradas em NBA_TEAM_ASSETS.
 *
 * Nenhuma imagem da NBA é duplicada ou incluída neste arquivo.
 */
(function registrarLogosDoUsuario(global) {
  'use strict';

  const logosOriginais = [
    { id: 'wolf', nome: 'Lobo', src: 'assets/team-logos/wolf.png', categoria: 'originais', mime: 'image/png' },
    { id: 'eagle', nome: 'Águia', src: 'assets/team-logos/eagle.png', categoria: 'originais', mime: 'image/png' },
    { id: 'lion', nome: 'Leão', src: 'assets/team-logos/lion.png', categoria: 'originais', mime: 'image/png' },
    { id: 'shark', nome: 'Tubarão', src: 'assets/team-logos/shark.png', categoria: 'originais', mime: 'image/png' },
    { id: 'cobra', nome: 'Cobra', src: 'assets/team-logos/cobra.png', categoria: 'originais', mime: 'image/png' },
    { id: 'bull', nome: 'Touro', src: 'assets/team-logos/bull.png', categoria: 'originais', mime: 'image/png' },
    { id: 'bear', nome: 'Urso', src: 'assets/team-logos/bear.png', categoria: 'originais', mime: 'image/png' },
    { id: 'raven', nome: 'Corvo', src: 'assets/team-logos/raven.png', categoria: 'originais', mime: 'image/png' },
    { id: 'tiger', nome: 'Tigre', src: 'assets/team-logos/tiger.png', categoria: 'originais', mime: 'image/png' },
    { id: 'dragon', nome: 'Dragão', src: 'assets/team-logos/dragon.png', categoria: 'originais', mime: 'image/png' },
    { id: 'fox', nome: 'Raposa', src: 'assets/team-logos/fox.png', categoria: 'originais', mime: 'image/png' },
    { id: 'owl', nome: 'Coruja', src: 'assets/team-logos/owl.png', categoria: 'originais', mime: 'image/png' }
  ];

  const assetsNba = global.HBAAssets && global.HBAAssets.times
    ? global.HBAAssets.times
    : {};

  const logosNba = Object.entries(assetsNba).map(function(entry) {
    const nome = entry[0];
    const asset = entry[1] || {};
    const sigla = String(asset.sigla || nome.slice(0, 3)).toUpperCase();
    return {
      id: `nba-${sigla.toLowerCase()}`,
      nome: nome,
      src: String(asset.logo || ''),
      sigla: sigla,
      categoria: 'nba'
    };
  }).filter(function(logo) {
    return Boolean(logo.src);
  });

  const logos = logosOriginais.concat(logosNba);
  const categoriasValidas = Object.freeze(['originais', 'nba']);

  function obterPorId(id) {
    return logos.find(function(logo) { return logo.id === id; }) || logosOriginais[0];
  }

  function listarPorCategoria(categoria) {
    const categoriaNormalizada = categoriasValidas.includes(categoria) ? categoria : 'originais';
    return logos.filter(function(logo) { return logo.categoria === categoriaNormalizada; });
  }

  global.HBAUserLogos = Object.freeze({
    lista: Object.freeze(logos.map(function(logo) { return Object.freeze({ ...logo }); })),
    categorias: categoriasValidas,
    obterPorId: obterPorId,
    listarPorCategoria: listarPorCategoria
  });
})(window);
