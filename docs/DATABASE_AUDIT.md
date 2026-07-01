# Auditoria do banco histórico

Data: 1º de julho de 2026.

## Fonte usada

A reconstrução partiu do arquivo `base_de_dados.js` presente no primeiro ZIP do repositório GitHub. O arquivo novo foi comparado registro por registro com essa fonte.

## Integridade preservada

- 127 equipes históricas antes e depois;
- 701 aparições de jogadores antes e depois;
- mesmas franquias, temporadas, conferências e desempenhos;
- mesmas posições, overalls, overalls-base e ajustes sazonais;
- 179 perfis originais mantidos em `PERFIS_HISTORICOS_ORIGINAIS_HBA`;
- nenhuma aparição movida de um time para outro;
- nenhuma aparição removida.

A única mudança nos elencos foi a substituição de aliases pelo nome canônico da mesma pessoa. Foram alteradas 42 ocorrências de nome, sem alterar qualquer outro campo.

## Aliases consolidados

| Nome antigo | Nome canônico |
|---|---|
| `Durvalx` | `durvalx` |
| `Durval` | `durvalx` |
| `durval` | `durvalx` |
| `Mutucka` | `mutucka` |
| `Tico012` | `tico012` |
| `Sartori` | `-Sartori` |
| `hendersonha` | `hendersonha.` |
| `Tree,` | `Tree.` |
| `Jameican` | `Jameican.` |
| `-Ipod,Russo` | `-Ipod,Russo.` |
| `SethMacTravish` | `Seth.MacTravish` |
| `NatsuDragnnel` | `-NatsuDragnnel` |
| `hazmitboy` | `hazmitBoy` |
| `Cironeto.` | `CiroNeto.` |
| `CiroNeto` | `CiroNeto.` |
| `:JaviMartinez` | `JaviMartinez` |
| `JamesHarden` | `James-Harden` |
| `jet` | `jet_` |
| `@!LM` | `!LM` |
| `LM!` | `!LM` |
| `Dududusao` | `dududusao` |
| `AntiChrist` | `Antichrist` |
| `mikadunker` | `mikedunker` |
| `Splikek` | `Spliked` |
| `jackakka404` | `jackkaka404` |
| `hbateamo` | `rbateamo` |

## Nomes com ponto

Quando existia uma forma comprovadamente equivalente com ponto, ela foi mantida como canônica. Exemplos:

- `Seth.MacTravish`;
- `CiroNeto.`;
- `Jameican.`;
- `hendersonha.`;
- `Tree.`;
- `-Ipod,Russo.`.

## Estrutura de auditoria no código

`window.HBADatabase` expõe:

```js
HBADatabase.perfis           // 153 identidades canônicas
HBADatabase.perfisOriginais  // 179 registros de nome da base antiga
HBADatabase.equipes          // 127 equipes e 701 aparições
HBADatabase.aliases          // 26 aliases
HBADatabase.nomeCanonico(nome)
```

O motor usa os nomes canônicos. Os perfis originais continuam disponíveis para conferência e futuras correções manuais.
