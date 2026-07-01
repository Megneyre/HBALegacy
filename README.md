# HBA Legacy

Minigame de basquete histórico em que o jogador monta um elenco com atletas sorteados de equipes e temporadas da HBA, disputa uma temporada curta e tenta conquistar os playoffs.

Esta versão foi organizada para funcionar como site estático no GitHub e na Vercel. Ela não depende mais de Google Apps Script, `google.script.run`, arquivos `.gs`, templates do Google ou URL `/exec`.

## Estado do projeto

- Título oficial: **HBA Legacy**
- Versão exibida: **Beta 1.0**
- Execução: navegador, sem build obrigatório
- Hospedagem recomendada: Vercel conectada ao GitHub
- Banco atual: arquivo JavaScript versionado no repositório
- Salvamento permanente: ainda não implementado
- Idiomas: português e inglês
- Tema: claro e escuro

## Como o jogo funciona

1. O jogador informa o nome da equipe e clica em **Iniciar Legado**.
2. O jogo abre a tela de draft e realiza imediatamente o primeiro sorteio.
3. Cada sorteio mostra uma equipe histórica, sua temporada, logo e jogadores disponíveis.
4. O jogador monta quatro posições:
   - Armador: PG, SG ou SF
   - Wing: SF ou PF
   - Big: PF ou C
   - 4th Man: qualquer posição
5. Um jogador pode ser colocado de duas formas:
   - clicar no jogador e depois na posição;
   - arrastar o jogador até a posição na quadra.
6. Depois de preencher as quatro vagas, o botão principal passa a iniciar a temporada.
7. A liga possui seis equipes, três por conferência, e cinco rodadas de temporada regular.
8. As duas melhores equipes de cada conferência avançam.
9. A final de conferência é melhor de três e as finais são melhor de cinco.
10. Ao final, o jogo exibe campanha, partidas e elencos enfrentados.

## Tipos de sorteio

### Próxima Equipe

- Botão: **🎲 Próxima Equipe**
- Custo: gratuito
- Regra: sorteia outra entrada histórica sem repetir exatamente a equipe e a temporada atuais.

### Outra Temporada

- Custo: um spin
- Regra: a nova equipe deve vir obrigatoriamente de outra temporada.

### Outra Equipe

- Custo: um spin
- Regra: mantém obrigatoriamente a temporada atual e troca apenas a equipe.

Os jogadores já escolhidos são removidos dos sorteios seguintes.

## Estrutura do repositório

```text
HBA-Legacy/
├── index.html
├── package.json
├── vercel.json
├── README.md
├── CHANGELOG.md
├── .gitignore
├── assets/
│   └── hba-legacy-logo.png
├── css/
│   └── styles.css
├── js/
│   ├── data/
│   │   ├── database.js
│   │   └── assets.js
│   ├── core/
│   │   ├── engine.js
│   │   └── service.js
│   └── ui/
│       └── app.js
├── docs/
│   ├── AI_HANDOFF.md
│   └── TEST_REPORT.md
└── tests/
    ├── engine.test.cjs
    └── ui-results.json
```

## Ordem de carregamento

O `index.html` carrega os arquivos nesta ordem:

1. `js/data/database.js`
2. `js/data/assets.js`
3. `js/core/engine.js`
4. `js/core/service.js`
5. `js/ui/app.js`

Essa ordem é obrigatória. A interface só é habilitada depois que banco, assets e motor passam pela validação inicial.

## Banco de dados

O banco está em:

```text
js/data/database.js
```

Ele contém:

- `PERFIS_HISTORICOS_HBA`: atributos e métricas históricas por jogador;
- `BANCO_CONSOLIDADO_HBA`: equipes, temporadas, elencos, posições e overalls;
- `window.HBADatabase`: interface de leitura usada pelo motor e pelos testes.

### Totais validados

- 127 equipes históricas
- 33 franquias
- 179 jogadores únicos
- posições aceitas: PG, SG, SF, PF e C

A migração não alterou os dados de jogadores, equipes, temporadas ou overalls do ZIP recebido. Foi adicionada apenas uma interface de leitura ao final do arquivo.

### Estrutura de uma equipe

```js
{
  time: "Boston Celtics",
  temporada: 12,
  elenco: [
    {
      nome: "Jogador",
      posicao: "PG",
      overall: 88,
      overallBase: 86,
      ajusteTemporada: 2
    }
  ],
  ajusteEquipe: 1.5
}
```

### Como editar o banco sem quebrar o jogo

- Preserve os nomes das propriedades.
- Use apenas PG, SG, SF, PF ou C.
- Mantenha `overall` numérico.
- Não repita a mesma combinação de equipe e temporada.
- Não remova `elenco` nem transforme o elenco em objeto.
- Depois de editar, execute `npm test`.

## Camadas do código

### `database.js`

Fonte de dados histórica. Não possui lógica de interface.

### `assets.js`

Mapeia franquias, conferências, siglas, logos e recursos visuais da interface. Franquias antigas usam aliases para suas sucessoras quando necessário.

### `engine.js`

Motor puro do jogo. Responsável por:

- sorteios;
- exclusão de jogadores já escolhidos;
- geração da liga;
- montagem dos elencos adversários;
- calendário;
- placares;
- séries de playoffs;
- validação do banco.

### `service.js`

Contrato entre interface e motor. A interface não chama o banco diretamente.

Atualmente o serviço executa o motor no navegador. Caso o projeto ganhe API, Supabase ou outro backend, a migração deve ser feita aqui, preservando os mesmos métodos:

```js
HBAService.sortearEquipe()
HBAService.sortearProximaEquipe()
HBAService.sortearOutraTemporada()
HBAService.sortearEquipeMesmaTemporada()
HBAService.gerarLigaTemporada()
HBAService.simularRodadaRegular()
HBAService.simularPartidaEliminatoria()
HBAService.simularSerieCpu()
```

### `app.js`

Controla telas, botões, estado da partida, tradução, tema, renderização, drag-and-drop e reinício.

Todos os controles são ligados por `addEventListener`. Não existem `onclick` inline nem gatilhos do Google Apps Script.

### `styles.css`

Contém todo o visual, responsividade, quadra, cards, modais, temas e estados de drag-and-drop.

## Estado e persistência

O jogo mantém a partida atual em memória. Recarregar a página inicia uma nova partida.

O `localStorage` guarda apenas:

- idioma;
- tema;
- nome atual da equipe.

A campanha, elenco e temporada ainda não são persistidos.

## Rodar localmente

O projeto não precisa de compilação. Evite abrir apenas o `index.html` por duplo clique, pois alguns navegadores restringem arquivos locais.

Com Python:

```bash
python -m http.server 4173
```

Depois abra:

```text
http://localhost:4173
```

Com Node, também pode ser usado qualquer servidor estático.

## Testes

Requer Node.js com suporte ao executor nativo `node:test`.

```bash
npm test
```

Validação completa de sintaxe e motor:

```bash
npm run check
```

Os testes cobrem banco, sorteios, spins, exclusões, liga, calendário, elencos, placares e playoffs.

O relatório dos testes de interface está em:

```text
docs/TEST_REPORT.md
```

## Publicar no GitHub

1. Crie ou abra o repositório do HBA Legacy.
2. Envie o conteúdo desta pasta para a raiz do repositório.
3. Confirme que `index.html` está na raiz.
4. Faça commit e push.

Exemplo:

```bash
git add .
git commit -m "Migra HBA Legacy para versão web"
git push
```

## Publicar na Vercel

1. Entre na Vercel e escolha criar um novo projeto.
2. Importe o repositório do GitHub.
3. Deixe o diretório raiz como `./`.
4. Use **Other** como Framework Preset.
5. Deixe o comando de build vazio.
6. Mantenha o diretório de saída como `.`.
7. Publique.

Como o projeto é estático, a Vercel deve servir o `index.html` e os diretórios diretamente. Cada novo push no branch de produção gera uma nova implantação.

## `vercel.json`

O arquivo atual define o projeto como estático, desativa instalação e build desnecessários, usa a raiz (`.`) como saída, habilita URLs limpas e adiciona cabeçalhos básicos. Ele não possui rotas de API e não reescreve o jogo para outra página.

## Problemas comuns

### O botão Iniciar Legado aparece, mas não responde

Verifique no console se algum dos arquivos abaixo retornou 404:

```text
js/data/database.js
js/data/assets.js
js/core/engine.js
js/core/service.js
js/ui/app.js
```

Também confirme que a ordem dos scripts no `index.html` não foi alterada.

### A tela fica em “Sorteando equipe”

O serviço não concluiu a operação. Verifique se `HBAService` e `HBAEngine` existem no console e execute:

```js
HBAService.validarBanco()
```

O campo `valido` deve ser `true`.

### A equipe aparece sem jogadores

Execute os testes e confira se o objeto da equipe possui `elenco` como array. A interface recebe o formato normalizado com a propriedade `jogadores`.

### A logo de uma equipe não aparece

Confira o nome da franquia em `database.js` e o mapeamento em `assets.js`. O jogo possui fallback visual e não deve parar por causa de uma imagem.

### Drag-and-drop não funciona

Confirme que o navegador permite HTML5 Drag and Drop. O método alternativo continua disponível: clique no jogador e depois na posição.

### A Vercel mostra página 404

Confirme que `index.html` está na raiz do repositório e que o Root Directory do projeto aponta para a pasta correta.

## Evolução para banco externo

O banco local é suficiente enquanto o jogo não possui contas, salvamento compartilhado ou administração online.

Para migrar futuramente:

1. mantenha os contratos do `HBAService`;
2. mova os dados para a solução escolhida;
3. crie endpoints de leitura e simulação;
4. substitua as chamadas internas do serviço por `fetch`;
5. nunca exponha chaves administrativas no frontend;
6. valide novamente os formatos retornados.

Essa separação permite usar Supabase, PostgreSQL ou funções da Vercel sem reescrever a interface.

## Recursos visuais e direitos

- A logo do HBA Legacy está em `assets/hba-legacy-logo.png`.
- Os logos das franquias são carregados por URLs externas e pertencem aos respectivos titulares.
- Alguns ícones usam OpenMoji conforme indicado em `assets.js`.
- Antes de uma publicação comercial, revise licenças e permissões de todos os recursos de terceiros.

## Resumo para outra IA

Ao editar este projeto:

- não reintroduza Google Apps Script;
- não crie uma emulação de `google.script.run`;
- não mova o banco para dentro do HTML;
- não altere nomes, posições, temporadas ou overalls sem solicitação explícita;
- mantenha o primeiro sorteio dentro do fluxo de `iniciarLegado`;
- use `HBAService` para qualquer operação do motor;
- preserve as duas formas de escalação, clique e drag-and-drop;
- execute `npm run check` antes de entregar alterações;
- mantenha o título como **HBA Legacy**.
