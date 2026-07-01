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
9. Não modificar jogadores, equipes, temporadas, posições ou overalls sem pedido explícito.
10. Rodar `npm run check` após qualquer alteração.

## Dependências entre arquivos

```text
database.js -> assets.js -> engine.js -> service.js -> app.js
```

`index.html` usa `defer` e preserva essa ordem.

## Contrato do serviço

- `sortearEquipe(excluidos)`
- `sortearProximaEquipe(excluidos, temporadaAtual, equipeAtual)`
- `sortearOutraTemporada(excluidos, temporadaAtual)`
- `sortearEquipeMesmaTemporada(excluidos, temporadaAtual, equipeAtual)`
- `gerarLigaTemporada(nome, roster)`
- `simularRodadaRegular(jogos, equipes)`
- `simularPartidaEliminatoria(usuario, adversario, fase)`
- `simularSerieCpu(equipeA, equipeB, alvo, fase)`
- `validarBanco()`

## Pontos frágeis conhecidos

- Alterar a ordem dos scripts impede o botão inicial de ser registrado.
- Renderizar jogadores fora de `renderDraftTeam` remove listeners de clique e arraste.
- Criar listeners duplicados pode disparar sorteios repetidos.
- Mudar os IDs dos slots exige atualizar `POSICOES_VALIDAS_DRAFT` e os listeners.
- Alterar o formato do banco exige atualizar a normalização no motor.

## Critério mínimo de aceite

- primeiro sorteio exibe equipe, temporada, logo e jogadores;
- Outra Equipe mantém a temporada;
- Outra Temporada troca a temporada;
- Próxima Equipe é gratuita;
- clique jogador + posição funciona;
- drag-and-drop funciona;
- quatro jogadores iniciam a temporada;
- cinco rodadas são simuladas;
- playoffs encerram a campanha;
- Reiniciar Legado volta à introdução e permite novo jogo;
- nenhum erro de JavaScript no console;
- `npm run check` aprovado.
