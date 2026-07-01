# Relatório de testes

Data da revisão: 1º de julho de 2026.

## Resultado geral

- Testes automatizados do motor: **14 aprovados**
- Fluxo completo de interface no Chromium: **aprovado**
- Erros de JavaScript durante o fluxo: **0**
- Primeiro sorteio, draft, liga, temporada, playoffs, final e reinício: **aprovados**

## Banco preservado

- 127 equipes históricas
- 33 franquias
- 179 nomes históricos exatos
- nenhum jogador, time, temporada, posição ou overall removido
- nenhuma alteração em `js/data/database.js`

## Unicidade durante a liga

O pool temporário reconhece diferenças de caixa, pontuação e símbolos. Exemplos:

- `hazmitBoy` e `hazmitboy`;
- `-Sartori` e `Sartori`;
- `Durvalx` e `durvalx`.

Foram geradas 500 ligas adicionais sem qualquer atleta repetido entre equipes da mesma temporada. A regra não persiste entre partidas e não apaga registros históricos.

## Equilíbrio

- equipes da CPU: OVR 88 a 90;
- média observada em 2.500 equipes simuladas: aproximadamente 89;
- temporada regular: dificuldade normal;
- playoffs: dificuldade média;
- finais: dificuldade difícil.

Em 30.000 partidas de equipes com o mesmo OVR, as taxas aproximadas de vitória do usuário foram:

- temporada regular: 56%;
- playoffs: 47%;
- finais: 39%.

Essas porcentagens são referências estatísticas, não resultados garantidos.

## Interface testada

- primeiro sorteio e renderização dos jogadores;
- seleção por clique;
- drag-and-drop;
- jogador escolhido permanece preso ao elenco;
- movimento para vaga compatível vazia;
- troca entre vagas ocupadas somente quando ambos são compatíveis;
- tentativa de troca incompatível bloqueada;
- overall abaixo do nome na quadra e à direita no 4th Man;
- Próxima Equipe liberada somente após uma escolha;
- montagem do elenco 4/4;
- geração de seis equipes;
- temporada completa até o modal final;
- reinício do legado;
- controle de áudio;
- ausência dos arquivos MP3 sem quebrar o jogo.

## Áudio

Foram validados o controlador de áudio, a persistência de volume e os caminhos definidos em `js/core/audio.js`:

```text
assets/trilha sonora/trilha-principal.mp3
assets/trilha sonora/trilha-principal1.mp3
assets/trilha sonora/trilha-principal2.mp3
assets/trilha sonora/trilha-principal3.mp3
assets/efeitos sonoros/selecionar-jogador.mp3
assets/efeitos sonoros/encaixar-jogador.mp3
assets/efeitos sonoros/spin.mp3
assets/efeitos sonoros/vitoria.mp3
assets/efeitos sonoros/derrota.mp3
```

A playlist procura faixas numeradas contínuas, tenta iniciar na tela inicial e retoma na primeira interação quando o navegador bloqueia autoplay.

## Comandos

```bash
npm test
npm run check
```

O resultado resumido do teste de interface está em `tests/ui-results.json`.
