# Portal oficial → Hub: inventário de telas

Referência de trabalho para recriar dentro do Hub as telas que hoje vivem no portal
externo `https://citide.patos.pb.gov.br/`, mantendo o visual do Hub.

Regra de ouro: **não recriar sistemas com banco de dados** (formulários que gravam,
listagens dinâmicas). Esses continuam apontando para o portal.

## Status

| Tela do portal | Rota no Hub | Status |
| --- | --- | --- |
| Home / institucional | `/` | concluído |
| Cartilha (`/cartilha`) | `/cartilha` | concluído |
| AceleraPatos | `/programas/acelerapatos` | concluído |
| Inovapatos | `/programas/inovapatos` | concluído |
| ProInova | `/programas/proinova` | concluído |
| Selo Inovação | `/programas/selo-inovacao` | concluído |
| Empregos | `/programas/empregos-programa` | concluído |
| PICTI | `/programas/picti` | concluído |
| Patos Startup (`/patos-startup`) | — | pendente |
| Torneio de Robótica (`/torneio-de-robotica`) | — | pendente |
| Sala do Empreendedor (`/sala-do-empreendedor`) | — | pendente |
| Editais (`/edital-feira-maos-que-criam`, `/feira-natalina`) | — | pendente |
| Vitrine (`/vitrine`) | — | **não recriar** (sistema com banco) |
| Mapeamento Artesões (`/mapeamento-artesoes`) | — | **não recriar** (sistema com banco) |
| Painel (`/painel`) | — | **não recriar** (área administrativa) |

## Conteúdo já levantado das telas pendentes

> Reconferir no portal antes de publicar; os números abaixo vieram de leitura das
> páginas oficiais e podem mudar a cada edição.

### Patos Startup — edital 013/2026
- 4 etapas de seleção.
- Critérios de avaliação somando 100 pontos.
- Cronograma com 15 marcos.
- 8 documentos exigidos na inscrição.
- Resultado com 13 inscritos.

### Torneio de Robótica
- 5 modalidades de disputa.
- Programação do dia (horários por modalidade).

### Sala do Empreendedor
- 8 serviços de apoio ao MEI.

### Editais
- Feira Natalina.
- Edital Feira Mãos que Criam.

## Fonte de notícias

`https://patos.pb.gov.br/noticias` — HTML renderizado no servidor, paginação em
`/noticias/p2_start/N`, imagens em `/images/fotos_p2_news/`. Não há RSS público;
automatizar exigiria scraping (a definir com o usuário).

## Padrão visual das telas internas

- `PageShell` — hero interno com eyebrow, título, lead, ações e faixa de números.
- `PageSection` — seções numeradas (`01`, `02`, ...) com variantes `is-alt` e `is-dark`.
- Blocos de conteúdo: `page-copy`, `page-grid`, `data-list`, `check-list`, `law-list`,
  `chip-grid`, `callout`, `source-note`, `block-label`, `page-block-title`.
- Header e footer vêm do layout raiz; âncoras do menu viram `/#secao` fora da home.
