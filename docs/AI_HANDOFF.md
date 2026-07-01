# Handoff técnico para IA

## Objetivo

Manter e expandir o HBA Legacy sem quebrar o banco histórico ou os fluxos de interface.

## Restrições obrigatórias

1. O título é `HBA Legacy`.
2. O projeto roda em GitHub + Vercel como site estático.
3. Não existe Google Apps Script.
4. Não usar `google.script.run`, `HtmlService`, `doGet` ou arquivos `.gs`.
5. O banco histórico deve permanecer em `js/data/database.js`.
6. A interface deve acessar o motor por `HBAService`.
7. O botão de início deve abrir o draft e disparar um único primeiro sorteio.
8. Jogadores precisam continuar selecionáveis por clique e por drag-and-drop.
9. Um jogador escolhido fica preso ao elenco. Ele pode mudar para outra função compatível por drag-and-drop, mas nunca pode ser removido da quadra.
10. Jogadores podem existir em várias equipes históricas do banco, mas não podem aparecer em duas equipes da mesma liga gerada.
11. O banco possui 179 perfis originais, 153 identidades canônicas, 26 aliases e 701 aparições. Não remover nenhuma aparição histórica.
12. Nomes com ponto definidos como canônicos devem ser preservados.
13. Não modificar equipes, temporadas, posições ou overalls sem pedido explícito.
14. O áudio é opcional e deve falhar silenciosamente se os arquivos não estiverem presentes.
15. Rodar `npm run check` após qualquer alteração.

## Dependências entre arquivos

```text
database.js -> assets.js -> user-logos.js -> engine.js -> service.js -> lineup.js -> audio.js -> app.js
```

`index.html` usa `defer` e preserva essa ordem.

## Contrato do serviço

- `sortearEquipe(excluidos)`
- `sortearProximaEquipe(excluidos, temporadaAtual, equipeAtual)`
- `sortearOutraTemporada(excluidos, temporadaAtual)`
- `sortearEquipeMesmaTemporada(excluidos, temporadaAtual, equipeAtual)`
- `gerarLigaTemporada(nome, roster, logoUsuario)`
- `simularRodadaRegular(jogos, equipes)`
- `simularPartidaEliminatoria(usuario, adversario, fase)`
- `simularSerieCpu(equipeA, equipeB, alvo, fase)`
- `validarBanco()`

## Pontos frágeis conhecidos

- Alterar a ordem dos scripts impede o botão inicial de ser registrado.
- Renderizar jogadores fora de `renderDraftTeam` remove listeners de clique e arraste.
- Criar listeners duplicados pode disparar sorteios repetidos.
- Alterar `lineup.js` sem preservar a compatibilidade pode remover jogadores ou permitir trocas inválidas.
- Mudar os IDs dos slots exige atualizar `POSICOES_VALIDAS_DRAFT` e os listeners.
- Remover `PERFIS_HISTORICOS_ORIGINAIS_HBA` ou aparições de `BANCO_CONSOLIDADO_HBA` apaga histórico.
- Alterar aliases exige atualizar `ALIASES_JOGADORES_HBA` e `docs/DATABASE_AUDIT.md`.
- Alterar o formato do banco exige atualizar a normalização no motor.

## Critério mínimo de aceite

- etapa de nome abre a seleção com 12 escudos;
- escudo escolhido acompanha o time do jogador;
- primeiro sorteio exibe equipe, temporada, logo e jogadores;
- Outra Equipe mantém a temporada;
- Outra Temporada troca a temporada;
- Próxima Equipe é gratuita;
- clique jogador + posição funciona;
- drag-and-drop funciona;
- jogador escolhido não pode sair da quadra e só pode mudar para função compatível;
- quatro jogadores iniciam a temporada;
- nenhum jogador aparece em duas equipes da mesma liga;
- perfis de dificuldade seguem Regular normal, Playoffs médio e Finais difícil;
- cinco rodadas são simuladas;
- playoffs encerram a campanha;
- Reiniciar Legado volta à introdução e permite novo jogo;
- nenhum erro de JavaScript no console;
- `npm run check` aprovado.
