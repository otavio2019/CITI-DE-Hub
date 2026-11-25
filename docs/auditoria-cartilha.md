# Auditoria da página `/cartilha`

Data: 25/11/2026 · Alvo: `http://127.0.0.1:3001/cartilha` (build de produção)
Referências: `web-perf`, `accessibility`, `web-design-engineer`, `web-design-reviewer`.

## Resumo executivo

A página está sólida em estrutura e semântica: sete seções com hierarquia de headings
correta, conteúdo textual real (sem depender de JS para aparecer), links com destino
explícito e um único CTA por seção. Os problemas encontrados eram de **acessibilidade de
teclado e contraste**, não de arquitetura.

O ganho concreto veio do código morto: 21 arquivos não alcançáveis por nenhuma rota
mantinham CSS compilado desnecessário. Removê-los levou o CSS de **82.837 → 60.155 bytes
(-27%)** e o pacote total da página para **745 KB** em disco (sem compressão).

## Core Web Vitals

Não medidos em laboratório: não há Chrome DevTools/Lighthouse disponível neste ambiente,
então LCP, CLS e INP reais não foram coletados. O que dá para afirmar com os dados atuais:

| Métrica | Situação |
| --- | --- |
| LCP | Provável candidato: bloco de título do hero (texto, sem imagem grande). A página não carrega imagem acima da dobra — bom sinal. |
| CLS | Baixo risco: sem imagens sem dimensão, sem fontes web (usa Georgia do sistema), sem injeção tardia de conteúdo. |
| INP | Baixo risco: a página é quase toda estática; o JS serve à hidratação do header/menu. |

Peso por tipo de recurso:

| Recurso | Bytes |
| --- | --- |
| HTML | 73.756 |
| CSS | 60.155 |
| JS (9 chunks, maior 229 KB) | 611.099 |
| **Total** | **745.010** |

O JS é o gargalo. O maior chunk vem do runtime React/Next e não muda com edição de
conteúdo — reduzir exige decisão de arquitetura (ex.: transformar o menu em `<details>`
nativo ou mover a página para renderização 100% estática sem componentes cliente).

## Acessibilidade (WCAG 2.2 AA)

Corrigido:

| # | Achado | Correção |
| --- | --- | --- |
| A1 | Sem atalho para o conteúdo: quem navega por teclado atravessava o header e os menus em todas as páginas. | Skip link "Pular para o conteúdo" como primeiro elemento focável, visível ao receber foco, com alvo em `id="conteudo"` no `<main>`. |
| A2 | Contraste do texto secundário em 4,47:1 (`#60758a` sobre `#f5f8fb`) — reprovava AA por pouco. | Token `--citi-text-muted` para `#5b7085` → 4,80:1. |
| A3 | Eyebrow e link "Voltar" em amarelo `#ffb800` sobre azul: 3,44:1. | Novo token `--citi-yellow-on-blue: #ffe08a` → 4,63:1. |
| A4 | Anel de foco em amarelo sobre fundo branco: 1,73:1, praticamente invisível. | Anel passou a usar `currentColor`, herdando o contraste do texto de cada contexto. |
| A5 | Dropdown "Programas" não anunciava a página atual. | `aria-current="page"` no link ativo. |
| A6 | A seta "←" era lida como parte do texto do link. | `aria-hidden` na seta. |

Pendências (não bloqueantes):

- **P2 — Fonte serifada**: `--serif` cai para Georgia, que só existe no Windows. Em
  Android/iOS o título troca de forma. Solução: uma webfont display com `font-display:
  swap`, ou aceitar a pilha e declarar fallbacks melhores.
- **P3 — `aria-current` no menu principal**: o mesmo tratamento dado a "Programas" ainda
  não existe para os demais itens do topo.

## Design review

| Dimensão | Nota | Observação |
| --- | --- | --- |
| Hierarquia visual | Boa | Numeração "01 ·", "02 ·" dá ritmo; hero concentra a atenção. |
| Consistência | Boa | Tokens de cor e o `PageShell` fazem as telas internas falarem a mesma língua. |
| Densidade | Boa | Parágrafos curtos, listas de 4 a 6 itens; nada de bloco de texto corrido. |
| Responsividade | Boa | Header vira menu sanfona abaixo de 980px; grids caem para coluna única. |
| Detalhe fino | Atenção | O hero tem degradê com faixas diagonais; nas telas internas o mesmo tratamento aparece mais discreto — vale conferir se é intencional. |

## O que foi alterado nesta rodada

- `src/app/layout.tsx` — skip link.
- `src/app/page.tsx` e `src/components/layout/PageShell.tsx` — `id="conteudo"`, seta com `aria-hidden`.
- `src/components/layout/SiteHeader.tsx` — estado ativo com `aria-current`.
- `src/app/globals.css` — skip link, foco com `currentColor`, tokens de contraste.
- 21 arquivos de código morto removidos de `src/` (Header antigo, seções da home antiga,
  cards, `site-icons.ts`).

## Próximos passos sugeridos

1. Medir Core Web Vitals de verdade quando houver acesso ao Chrome DevTools (ou usar
   PageSpeed Insights sobre o domínio publicado).
2. Decidir sobre webfont display (P2).
3. Levar o `aria-current` para os demais itens do menu (P3).
