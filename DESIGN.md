# CITI-DE Hub — Guia visual

> Guia de referência para manter a identidade visual do CITI-DE Hub consistente em novas páginas, componentes e conteúdos.
>
> **Princípio central:** o Hub deve parecer uma porta de entrada institucional clara, humana e contemporânea para ciência, tecnologia, inovação e desenvolvimento econômico em Patos.

## 1. Direção visual

O CITI-DE combina a autoridade de uma secretaria pública com a energia de um ecossistema de inovação. A linguagem visual deve ser editorial, objetiva e acolhedora, evitando tanto a aparência burocrática quanto o excesso de estética tecnológica genérica.

A interface usa grandes títulos serifados, textos curtos, bastante espaço em branco, linhas finas, blocos de informação bem definidos e acentos amarelos sobre uma base azul-marinho. A hierarquia deve ser percebida antes da leitura detalhada: primeiro o título e a ação principal; depois o contexto; por fim os detalhes, links e fontes oficiais.

### Palavras-chave

- Institucional
- Local
- Confiável
- Editorial
- Acessível
- Direto
- Inovador sem ser futurista demais

### Personalidade

- **Autoridade:** informações objetivas, origem oficial e linguagem segura.
- **Proximidade:** textos compreensíveis para cidadãos, empreendedores, empresas e instituições.
- **Movimento:** chamadas para o próximo passo, com verbos claros como conhecer, consultar, acessar e acompanhar.
- **Território:** sempre que pertinente, conectar a comunicação ao desenvolvimento de Patos e da Paraíba.

## 2. Paleta oficial

Os tokens devem ser usados em vez de repetir hexadecimais diretamente nos componentes.

| Token | Valor | Uso principal |
|---|---:|---|
| `--citi-navy` | `#032842` | Hero, rodapé, fundos institucionais escuros e maior contraste |
| `--citi-blue-dark` | `#064B78` | Gradientes, superfícies intermediárias e estados escuros |
| `--citi-blue` | `#0867A8` | Links, ícones, títulos de seção e ações secundárias |
| `--citi-blue-light` | `#1688C7` | Realces, fundos de apoio e detalhes de destaque |
| `--citi-blue-soft` | `#EAF4FA` | Hover suave, superfícies informativas e áreas de apoio |
| `--citi-background` | `#F5F8FB` | Fundo geral das páginas claras |
| `--citi-text` | `#172B3A` | Texto principal e títulos em superfícies claras |
| `--citi-text-muted` | `#60758A` | Texto secundário, metadados e descrições |
| `--citi-yellow` | `#FFB800` | CTA principal, marcadores, ícones ativos e linha de destaque |
| `--citi-yellow-soft` | `#FFD45A` | Texto amarelo sobre fundo escuro e destaques suaves |
| `--line` | `rgba(3, 40, 66, .16)` | Divisórias e bordas em superfícies claras |
| `--paper` | `#FFFFFF` | Cards e blocos de conteúdo sobre fundo claro |

### Regras de contraste e uso

- Texto branco ou `--citi-yellow-soft` deve ser usado sobre `--citi-navy` e `--citi-blue-dark`.
- Texto `--citi-text` deve ser usado sobre branco ou `--citi-background`.
- `--citi-yellow` é cor de ação; não usar como fundo de grandes blocos de texto.
- Não usar azul claro como texto sobre branco em tamanhos pequenos sem verificar contraste.
- Evitar adicionar novas cores sem necessidade. A interface deve permanecer reconhecível com azul-marinho, azuis, amarelo, branco e neutros.

### Gradientes aprovados

Para áreas institucionais escuras, usar gradientes discretos e direcionais:

```css
background:
  linear-gradient(110deg, rgba(3, 40, 66, .98) 0%,
  rgba(6, 75, 120, .88) 48%,
  rgba(8, 103, 168, .35) 100%);
```

No rodapé, o brilho deve ser sutil e nunca competir com o conteúdo:

```css
background:
  radial-gradient(circle at 8% 0%, rgba(22, 136, 199, .28), transparent 32%),
  radial-gradient(circle at 92% 100%, rgba(255, 184, 0, .12), transparent 28%),
  var(--citi-navy);
```

## 3. Tipografia

O projeto usa duas famílias com papéis diferentes:

```css
--serif: Georgia, "Times New Roman", serif;
--sans: Arial, Helvetica, sans-serif;
```

### Serif editorial

Usar `var(--serif)` em:

- Títulos de hero;
- Títulos de seção;
- Títulos de cards importantes;
- Nome CiTI-DE em áreas de marca;
- Frases de destaque e chamadas institucionais.

Características:

- Peso normal ou 400;
- Tracking levemente negativo em títulos grandes;
- Line-height compacto, normalmente entre `.9` e `.98`;
- Não usar caixa alta em títulos editoriais.

### Sans-serif funcional

Usar `var(--sans)` em:

- Corpo de texto;
- Navegação;
- Labels e eyebrow;
- Botões;
- Metadados;
- Formulários;
- Informações de contato.

Características:

- Corpo padrão entre 13px e 18px;
- Line-height entre 1.5 e 1.65 para leitura;
- Labels pequenos podem usar caixa alta e tracking ampliado;
- Evitar parágrafos longos em blocos estreitos.

### Escala recomendada

| Elemento | Desktop | Mobile |
|---|---:|---:|
| Hero `h1` | `clamp(58px, 8vw, 118px)` | aproximadamente `58px` |
| Título de seção | `clamp(42px, 5.5vw, 72px)` | aproximadamente `48px` |
| Título de card | 25px–30px | 22px–25px |
| Texto de destaque | 18px–23px | 16px–18px |
| Texto corrido | 13px–17px | 13px–16px |
| Eyebrow / label | 10px–12px | 9px–11px |

## 4. Espaçamento e layout

O layout deve respirar. A composição atual utiliza grandes seções verticais e containers com largura controlada.

### Containers

```css
.citide-container {
  width: min(1180px, 86vw);
  margin: 0 auto;
}
```

Para páginas com maior impacto visual, usar padding lateral próximo de `9vw`. Para header, anúncio e rodapé, `5vw` é suficiente.

### Ritmo vertical

- Seções desktop: aproximadamente `105px` no eixo vertical;
- Seções mobile: aproximadamente `76px`;
- Hero: mínimo de `620px` no desktop;
- Espaço entre eyebrow e título: aproximadamente `20px–25px`;
- Espaço entre título e conteúdo: aproximadamente `24px–60px`, conforme a densidade;
- Divisórias devem criar ritmo, não poluir.

### Grid

- Usar grids assimétricos para hero, introduções e blocos institucionais;
- Usar divisórias de 1px em listas e grids de cards;
- Desktop pode usar duas ou três colunas para informação institucional;
- Cards de serviços usam três colunas no desktop e duas no tablet;
- No mobile, priorizar uma coluna e leitura sequencial.

## 5. Estrutura da página institucional

A home segue esta lógica narrativa:

1. **Announcement bar:** identificação curta e acesso rápido.
2. **Header:** marca, navegação essencial e Portal oficial.
3. **Hero:** posicionamento, mensagem principal e CTA.
4. **Acesso rápido:** primeiras intenções do visitante.
5. **Sobre a CiTI-DE:** missão e estruturas institucionais.
6. **Serviços:** ações e caminhos práticos.
7. **Programas:** iniciativas oficiais com acesso à Cartilha.
8. **Atendimento:** e-mail, endereço e horário.
9. **Rodapé institucional:** Secretaria, atendimento e fontes oficiais.

A ordem deve conduzir o visitante do entendimento geral para uma ação concreta. Não inserir uma nova seção apenas para preencher espaço.

## 6. Componentes e padrões

### Announcement bar

- Fundo `--citi-navy`;
- Texto pequeno, uppercase e com tracking;
- Frase principal curta;
- CTA em `--citi-yellow`;
- No mobile, esconder o texto auxiliar e preservar o CTA.

### Header

- Fundo branco;
- Borda inferior usando `--line`;
- Logo à esquerda;
- Navegação centralizada;
- Botão “Portal oficial” à direita;
- O CTA deve ter borda escura, sem raio exagerado;
- Menu deve desaparecer ou ser adaptado no mobile.

### Hero

- Fundo principal `--citi-navy` com gradiente para `--citi-blue-dark` e `--citi-blue`;
- Título grande em serif;
- Palavra ou fragmento de destaque em amarelo e itálico;
- Texto de apoio curto, no máximo duas ou três linhas;
- Um CTA amarelo como ação primária;
- Um link textual como ação secundária;
- Imagem do sol oficial em `public/images/sol 2.png` como elemento visual, sem competir com o texto;
- Linha inferior com “Deslize para explorar” em amarelo.

### Eyebrow / kicker

Padrão recomendado:

```css
font-size: 10px;
letter-spacing: .22em;
text-transform: uppercase;
font-weight: 700;
```

Pode receber uma linha curta antes do texto com `:before`. Em fundos claros, usar `--citi-blue`; em fundos escuros, usar `--citi-yellow`.

### Botões e links

CTA primário:

```css
background: var(--citi-yellow);
color: var(--citi-text);
padding: 16px 19px;
font-size: 12px;
font-weight: 700;
```

Comportamento:

- Hover com pequena elevação de `translateY(-2px)`;
- Fundo passa para `--citi-yellow-soft`;
- Ícone deve indicar direção ou ação;
- Foco visível obrigatório com contorno amarelo.

Links institucionais:

- Preferir sublinhado visual por espaçamento, cor ou ícone;
- Usar `FiArrowUpRight` para links externos;
- Usar `FiArrowDownRight` para guiar o fluxo interno;
- Não esconder a finalidade do link.

### Cards de serviço

- Fundo escuro em `--citi-text` ou `--citi-navy`;
- Altura mínima consistente;
- Status em amarelo suave e caixa alta;
- Título serifado;
- Descrição curta em tom claro reduzido;
- Ícone de saída no canto inferior;
- Hover pode escurecer o fundo e elevar o contraste.

### Lista de programas

- Fundo claro ou branco;
- Linhas horizontais com `--line`;
- Nome do programa em serif;
- Descrição à direita no desktop;
- Ícone de saída na terceira coluna;
- Hover desloca levemente a linha e troca a cor para `--citi-blue`;
- O link “Ver cartilha completa” deve usar `officialLinks.cartilha`.

### Atendimento

- Usar grid de duas colunas no desktop;
- Texto explicativo à esquerda;
- Dados de contato em linhas separadas à direita;
- Ícones em `--citi-blue`;
- CTA de e-mail em amarelo;
- No mobile, empilhar texto e detalhes.

### Rodapé institucional

O rodapé atual é um bloco visual de encerramento, não apenas uma faixa de links. Ele deve conter três áreas:

1. **Identidade da Secretaria:** nome CiTI-DE, nome completo e descrição da missão.
2. **Atendimento:** endereço, horário e e-mail, usando `contactInfo`.
3. **Acesso oficial:** Portal CiTI-DE, Cartilha da Inovação e Portal da Prefeitura, usando `officialLinks`.

Características visuais:

- Fundo `--citi-navy`;
- Linha superior em `--citi-yellow`;
- Brilhos radiais discretos em azul e amarelo;
- Divisórias verticais no desktop;
- Divisórias horizontais no mobile;
- Rodapé inferior com copyright e descrição curta do portal.

## 7. Conteúdo e fonte oficial

Toda informação de programas, serviços, oportunidades e links deve ser centralizada em:

```text
src/lib/hub-content.ts
```

Usar preferencialmente:

- `officialLinks` para portais, Cartilha e páginas oficiais;
- `programLinks` para destinos oficiais dos programas;
- `programs` para a lista de programas exibida na home;
- `services` para cards e serviços;
- `serviceLinks` para atalhos de serviço;
- `contactInfo` para endereço, e-mail, horário e canais;
- `institutionalBodies` para estruturas da Secretaria;
- `institutionalStats` para indicadores que tenham fonte definida.

### Regras de conteúdo

- Não inventar prazos, inscrições, benefícios ou critérios;
- Se a informação não estiver confirmada, usar “Consulte as informações oficiais”, “Acompanhe os próximos editais” ou “Verifique os critérios no portal oficial”;
- Manter os links oficiais junto do conteúdo relacionado;
- Evitar duplicar textos e URLs em componentes;
- Não alterar dados institucionais diretamente em `page.tsx` ou em componentes quando eles pertencem à fonte central.

## 8. Imagens e assets

Assets principais:

```text
public/icons/logo.png
public/images/logo citi-de.png
public/images/sol 2.png
```

Regras:

- Usar o logo oficial; não recriar a marca com CSS;
- Usar `alt` descritivo em imagens informativas;
- Usar `alt=""` e `aria-hidden="true"` em imagens puramente decorativas;
- Preservar o sol oficial no hero sem aplicar filtros que mudem sua identidade;
- Manter imagens com `object-fit: contain` ou `cover` conforme o papel visual;
- Não adicionar imagens decorativas se elas competirem com a mensagem institucional.

## 9. Responsividade

### Desktop: acima de 900px

- Header completo;
- Navegação visível;
- Grids de duas ou três colunas;
- Rodapé com três colunas;
- Títulos grandes e bastante área negativa.

### Tablet: até 900px

- Esconder ou adaptar a navegação;
- Header reduzido;
- Hero continua amplo, mas com arte mais transparente;
- Grids passam para duas colunas;
- Rodapé começa a empilhar seus blocos.

### Mobile: até 560px

- Conteúdo em uma coluna;
- CTA do hero empilhado;
- Hero com arte reduzida e opacidade menor;
- Cards com altura menor;
- Listas de programas com nome, descrição e ícone em fluxo vertical;
- Rodapé com blocos empilhados e divisórias horizontais;
- Nunca depender apenas de hover para revelar informação.

## 10. Acessibilidade

- Todos os links e botões devem ter foco visível;
- Não usar amarelo como único indicador de estado;
- Manter contraste suficiente entre texto e fundo;
- Usar `aria-hidden="true"` em ícones decorativos;
- Usar labels ou texto acessível em links com apenas ícone;
- Manter a ordem semântica dos headings;
- Não pular níveis de heading sem motivo;
- Respeitar `prefers-reduced-motion` em animações futuras;
- Garantir que áreas de toque tenham tamanho confortável em mobile.

## 11. Movimento e interação

O movimento deve ser discreto e funcional:

- Duração padrão entre `180ms` e `300ms`;
- Easing suave, sem efeitos elásticos excessivos;
- Hover pode elevar cards ou trocar cor;
- Links podem deslocar poucos pixels para indicar continuidade;
- Não usar animações contínuas que distraiam da leitura;
- Nunca usar movimento como substituto de hierarquia visual.

## 12. Checklist para novas telas

Antes de publicar uma nova página ou seção, verificar:

- [ ] Usa os tokens de cor existentes;
- [ ] Usa a serif para títulos e a sans-serif para leitura;
- [ ] Possui uma hierarquia clara de título, contexto e ação;
- [ ] Usa dados de `src/lib/hub-content.ts` quando aplicável;
- [ ] Aponta para fontes oficiais;
- [ ] Não inventa prazos, benefícios ou inscrições;
- [ ] Funciona em desktop, tablet e mobile;
- [ ] Possui estado de foco visível;
- [ ] Imagens têm `alt` adequado;
- [ ] O contraste foi conferido;
- [ ] O espaçamento segue o ritmo das seções existentes;
- [ ] A seção realmente melhora a experiência e não apenas aumenta o comprimento da página.

## 13. Arquivos de referência

- Tokens e estilos globais: `src/app/globals.css`
- Conteúdo central: `src/lib/hub-content.ts`
- Home institucional: `src/app/page.tsx`
- Seções da home: `src/components/citide/CiTiDeSections.tsx`
- Logo: `public/icons/logo.png`
- Sol oficial do hero: `public/images/sol 2.png`
- Páginas de programas: `src/app/programas/[slug]/page.tsx`

> Ao criar uma nova seção, primeiro reutilize tokens, componentes e conteúdo centralizado. Só crie um novo padrão visual quando houver uma necessidade clara e documente a decisão neste arquivo.
