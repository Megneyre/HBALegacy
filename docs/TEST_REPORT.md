# Relatório de testes

Data da revisão: 30 de junho de 2026.

## Resultado geral

- Testes automatizados do motor: **11 aprovados**
- Testes de interface no Chromium: **31 aprovados**
- Erros de JavaScript durante o fluxo completo: **0**
- Erros de console durante o fluxo completo: **0**

## Banco validado

- 127 equipes históricas
- 33 franquias
- 179 jogadores únicos
- nenhuma posição inválida
- nenhuma combinação duplicada de equipe e temporada
- nenhuma franquia sem mapeamento visual ou alias

## Carga de testes do motor

- 1.000 sorteios comuns
- 250 spins de Outra Equipe
- 250 spins de Outra Temporada
- 250 rolagens gratuitas de Próxima Equipe
- 100 verificações de exclusão de jogadores escolhidos
- 200 ligas completas geradas
- 300 rodadas regulares simuladas
- 600 séries eliminatórias simuladas

## Fluxos de interface testados

1. carregamento do banco;
2. título HBA Legacy;
3. botão inicial habilitado;
4. português e inglês;
5. tema claro e escuro;
6. abertura da gameplay;
7. primeiro sorteio;
8. equipe, temporada, jogadores e logo;
9. Outra Equipe mantendo temporada;
10. Outra Temporada trocando temporada;
11. consumo correto dos dois spins;
12. drag-and-drop para uma posição;
13. clique no jogador e depois em Armador;
14. clique no jogador e depois em Wing;
15. clique no jogador e depois em Big;
16. montagem de elenco 4/4;
17. botão mudando para Iniciar Temporada;
18. geração de seis equipes;
19. classificação por conferência;
20. exibição dos elencos adversários;
21. temporada regular;
22. playoffs e finais quando aplicáveis;
23. modal final;
24. histórico de partidas;
25. Reiniciar Legado;
26. limpeza do elenco;
27. restauração dos spins;
28. início de um segundo legado na mesma sessão.

## Comandos

```bash
npm test
npm run check
```

O resultado detalhado do teste de interface está em `tests/ui-results.json`.
