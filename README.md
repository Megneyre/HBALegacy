# HBA Legacy

Minigame de basquete histórico em que o jogador monta um elenco com atletas sorteados de equipes e temporadas da HBA, disputa uma temporada curta e tenta conquistar os playoffs.

Esta versão foi organizada para funcionar como site estático no GitHub e na Vercel. Ela não depende mais de Google Apps Script, `google.script.run`, arquivos `.gs`, templates do Google ou URL `/exec`.

## Estado do projeto

- Título oficial: **HBA Legacy**
- Versão exibida: **Beta 1.1**
- Execução: navegador, sem build obrigatório
- Hospedagem recomendada: Vercel conectada ao GitHub
- Banco atual: arquivo JavaScript versionado no repositório
- Salvamento permanente: ainda não implementado
- Idiomas: português e inglês
- Tema: claro e escuro

## Como o jogo funciona

1. O jogador informa o nome da equipe.
2. O jogador escolhe um dos 12 escudos neutros locais.
3. Ao clicar em **Iniciar Legado**, o jogo abre o draft e realiza imediatamente o primeiro sorteio.
4. Cada sorteio mostra uma equipe histórica, sua temporada, logo e jogadores disponíveis.
5. O jogador monta quatro posições:
   - Armador: PG, SG ou SF
   - Wing: SF ou PF
   - Big: PF ou C
   - 4th Man: qualquer posição
6. Um jogador pode ser colocado de duas formas:
   - clicar no jogador e depois na posição;
   - arrastar o jogador até a posição na quadra.
7. Depois de escolhido, o atleta fica preso ao elenco e não pode ser removido da quadra. Ele pode ser arrastado para outra função compatível. Se o destino estiver ocupado, a troca só acontece quando os dois jogadores puderem cumprir as funções invertidas.
8. Depois de preencher as quatro vagas, o botão principal passa a iniciar a temporada.
9. A liga possui seis equipes, três por conferência, e cinco rodadas de temporada regular.
10. As duas melhores equipes de cada conferência avançam.
11. A final de conferência é melhor de três e as finais são melhor de cinco.
12. Ao final, o jogo exibe campanha, partidas e elencos enfrentados.

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
│   ├── hba-legacy-logo.png
│   ├── team-logos/
│   │   ├── wolf.png
│   │   └── ...
│   ├── trilha sonora/
│   │   └── README.md
│   └── efeitos sonoros/
│       └── README.md
├── css/
│   └── styles.css
├── js/
│   ├── data/
│   │   ├── database.js
│   │   ├── assets.js
│   │   └── user-logos.js
│   ├── core/
│   │   ├── engine.js
│   │   ├── service.js
│   │   ├── lineup.js
│   │   └── audio.js
│   └── ui/
│       └── app.js
├── docs/
│   ├── AI_HANDOFF.md
│   ├── DATABASE_AUDIT.md
│   └── TEST_REPORT.md
└── tests/
    ├── engine.test.cjs
    └── ui-results.json
```

## Ordem de carregamento

O `index.html` carrega os arquivos nesta ordem:

1. `js/data/database.js`
2. `js/data/assets.js`
3. `js/data/user-logos.js`
4. `js/core/engine.js`
5. `js/core/service.js`
6. `js/core/lineup.js`
7. `js/core/audio.js`
8. `js/ui/app.js`

Essa ordem é obrigatória. A interface só é habilitada depois que banco, assets e motor passam pela validação inicial.

## Banco de dados

O banco está em:

```text
js/data/database.js
```

Ele contém:

- `PERFIS_HISTORICOS_ORIGINAIS_HBA`: os 179 registros de nome exatamente como existiam na base antiga;
- `ALIASES_JOGADORES_HBA`: mapeamento entre variações de nome e identidade canônica;
- `PERFIS_HISTORICOS_HBA`: 153 identidades canônicas consolidadas;
- `BANCO_CONSOLIDADO_HBA`: equipes, temporadas, elencos, posições e overalls;
- `window.HBADatabase`: interface de leitura usada pelo motor e pelos testes.

### Totais validados

- 127 equipes históricas
- 33 franquias
- 701 aparições de jogadores preservadas nos elencos
- 179 registros de nome originais preservados para auditoria
- 153 identidades canônicas após consolidar 26 aliases
- posições aceitas: PG, SG, SF, PF e C

A consolidação não remove jogadores de equipes, não troca temporadas e não altera overalls. Ela apenas substitui variações comprovadamente equivalentes pelo mesmo nome canônico nos elencos. Nomes com ponto, como `Seth.MacTravish` e `CiroNeto.`, foram preservados como forma oficial.

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

### `user-logos.js`

Lista os 12 escudos neutros locais disponíveis para a equipe do jogador. Os PNGs ficam em `assets/team-logos/` e não dependem de serviços externos.

### `engine.js`

Motor puro do jogo. Responsável por:

- sorteios;
- exclusão de jogadores já escolhidos;
- geração da liga;
- montagem dos elencos adversários sem repetir o mesmo jogador em equipes diferentes da mesma temporada;
- dificuldade progressiva: temporada regular normal, playoffs médios e finais difíceis;
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

### `lineup.js`

Centraliza as regras de compatibilidade das funções, movimentação entre posições e trocas seguras entre jogadores já escolhidos. Nenhum movimento remove um atleta do elenco.

### `audio.js`

Controla a trilha sonora, efeitos, preferência de áudio, volume e os botões de som das telas inicial e de gameplay. O sistema tenta iniciar a música assim que a tela inicial abre. Quando o navegador bloqueia autoplay com som, a reprodução é retomada na primeira interação do usuário.

A playlist aceita uma faixa principal e faixas numeradas contínuas:

```text
assets/trilha sonora/trilha-principal.mp3
assets/trilha sonora/trilha-principal1.mp3
assets/trilha sonora/trilha-principal2.mp3
assets/trilha sonora/trilha-principal3.mp3
```

As músicas são tocadas em sequência e retornam à primeira ao terminar. A numeração deve ser contínua, sem pular números. O volume e o estado ligado/desligado ficam salvos no `localStorage`.

Efeitos esperados:

```text
assets/efeitos sonoros/selecionar-jogador.mp3
assets/efeitos sonoros/encaixar-jogador.mp3
assets/efeitos sonoros/spin.mp3
assets/efeitos sonoros/vitoria.mp3
assets/efeitos sonoros/derrota.mp3
```

Use apenas arquivos próprios ou licenciados para jogos e publicação web. A pasta `assets` pode ser mantida separadamente ao atualizar apenas o código.

### `app.js`

Controla telas, botões, estado da partida, tradução, tema, renderização, drag-and-drop, reposicionamento visual, áudio e reinício.

Todos os controles são ligados por `addEventListener`. Não existem `onclick` inline nem gatilhos do Google Apps Script.

### `styles.css`

Contém todo o visual, responsividade, quadra, cards, modais, temas e estados de drag-and-drop.

## Equilíbrio e unicidade dos adversários

O banco mantém todas as 701 aparições históricas. Os aliases conhecidos já são consolidados no próprio `database.js`, e o motor ainda cria uma chave normalizada de segurança durante a geração da liga.

Essa regra vale somente para a temporada atual:

- um atleta não pode aparecer em duas equipes da mesma liga;
- o atleta continua disponível normalmente em uma nova temporada;
- nenhuma aparição histórica é apagada; os aliases ficam registrados em `ALIASES_JOGADORES_HBA`;
- equipes da CPU ficam, em regra, entre OVR 88 e 90.

Dificuldade por fase:

- temporada regular: normal;
- primeira fase dos playoffs: média;
- finais: difícil.

## Estado e persistência

O jogo mantém a partida atual em memória. Recarregar a página inicia uma nova partida.

O `localStorage` guarda apenas:

- idioma;
- tema;
- nome atual da equipe;
- preferência de áudio ligado ou desligado;
- escudo escolhido para a equipe.

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
js/data/user-logos.js
js/core/engine.js
js/core/service.js
js/core/lineup.js
js/core/audio.js
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
- Os 12 escudos neutros do jogador são PNGs locais em `assets/team-logos/` e foram criados para este projeto.
- Os logos das franquias são carregados por URLs externas e pertencem aos respectivos titulares.
- Alguns ícones usam OpenMoji conforme indicado em `assets.js`.
- Antes de uma publicação comercial, revise licenças e permissões de todos os recursos de terceiros.

## Resumo para outra IA

Ao editar este projeto:

- não reintroduza Google Apps Script;
- não crie uma emulação de `google.script.run`;
- não mova o banco para dentro do HTML;
- preserve `ALIASES_JOGADORES_HBA`, os 179 perfis originais e as 701 aparições históricas;
- mantenha o primeiro sorteio dentro do fluxo de `iniciarLegado`;
- use `HBAService` para qualquer operação do motor;
- preserve as duas formas de escalação, clique e drag-and-drop;
- execute `npm run check` antes de entregar alterações;
- mantenha o título como **HBA Legacy**.
