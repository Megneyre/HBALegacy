# Changelog

## Beta 1.1 - banco consolidado e escolha de escudo

- reconstrução do banco a partir da base histórica anterior à migração;
- preservação das 127 equipes e 701 aparições de jogadores;
- armazenamento dos 179 perfis originais para auditoria;
- consolidação de 26 aliases em 153 identidades canônicas;
- preservação de nomes oficiais com pontos;
- escolha de um entre 12 escudos neutros após informar o nome do time;
- escudo do jogador exibido no cabeçalho, classificação e elencos da liga;
- assets locais, sem dependência de banco externo de logos.


## 1.0.3-beta

- controle de volume da trilha na tela inicial e no cabeçalho;
- volume salvo no navegador;
- tentativa de reprodução ao abrir a tela inicial, com retomada na primeira interação quando necessário;
- playlist automática para `trilha-principal.mp3`, `trilha-principal1.mp3`, `trilha-principal2.mp3` e seguintes;
- trilha mantida ao reiniciar e retornar à tela inicial.

## Beta 1.0.2 - reposicionamento do elenco

- jogadores escolhidos permanecem presos ao elenco;
- drag-and-drop entre funções compatíveis;
- troca entre duas vagas ocupadas apenas quando os dois atletas podem exercer as funções invertidas;
- nenhum jogador é removido ao soltar fora da quadra;
- overall exibido abaixo do nome nos slots da quadra;
- overall do 4th Man exibido à direita do nome;
- regras de escalação isoladas em `js/core/lineup.js`;
- testes automatizados para movimentos e trocas válidas e inválidas.

## Beta 1.0.1 - bloqueio, equilíbrio e áudio

- bloqueio definitivo de posições preenchidas no draft;
- proteção contra substituição por clique ou drag-and-drop;
- equipes da CPU recalibradas para OVR médio entre 88 e 90;
- dificuldade progressiva por fase: regular normal, playoffs médio e finais difícil;
- unicidade de jogadores entre equipes da mesma liga por nome normalizado;
- banco histórico preservado sem remoção de registros ou versões;
- novo controlador `js/core/audio.js`;
- pastas prontas para trilha sonora e efeitos sonoros;
- botão para ativar ou desativar áudio;
- ampliação dos testes automatizados e de interface.

## Beta 1.0 - migração GitHub/Vercel

- remoção completa do Google Apps Script;
- remoção da emulação quebrada de `google.script.run`;
- separação entre banco, assets, motor, serviço e interface;
- conexão segura da interface com o banco local versionado;
- validação automática do banco antes de habilitar o jogo;
- primeiro sorteio ligado diretamente ao início do legado;
- correção dos três tipos de rolagem;
- restauração da seleção por clique;
- restauração do drag-and-drop;
- correção do reinício completo;
- logo principal movida para asset local transparente;
- título padronizado como HBA Legacy;
- testes automatizados e documentação completa.
