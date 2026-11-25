# Deploy na Cloudflare Workers

O Hub roda como **Cloudflare Worker** usando o adapter oficial **OpenNext**
(`@opennextjs/cloudflare`). O Next.js é compilado normalmente e o adapter
transforma o resultado em um Worker + assets estáticos.

## Arquivos de configuração (já no repositório)

| Arquivo | Papel |
| --- | --- |
| `wrangler.jsonc` | Nome do Worker (`citi-de-hub`), entrypoint `.open-next/worker.js`, assets em `.open-next/assets`, flags `nodejs_compat` e `global_fetch_strictly_public`, binding `WORKER_SELF_REFERENCE` |
| `open-next.config.ts` | Config do adapter. Hoje sem cache persistente (site institucional) |
| `public/_headers` | Cache imutável de 1 ano para `/_next/static/*` |
| `next.config.ts` | `output` só vira `standalone` quando `NEXT_OUTPUT=standalone` |
| `Dockerfile` | Define `NEXT_OUTPUT=standalone`, então a imagem Docker continua funcionando |
| `.dev.vars` | Variáveis locais do `wrangler dev` (ignorado no git) |

## Scripts

```bash
npm run preview   # build + roda localmente no runtime do Workers (workerd)
npm run deploy    # build + publica no Cloudflare
npm run upload    # build + envia a versão sem promover a 100% do tráfego
npm run cf-typegen# gera cloudflare-env.d.ts a partir do wrangler.jsonc
```

## Configuração no dashboard (só dá para fazer pelo painel)

Em **Workers & Pages → citi-de-hub → Settings → Build**:

- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** `/`
- **Build output directory:** deixar vazio (o adapter cuida disso)

Sem essa troca, o Workers Builds tenta rodar o comando padrão do Next
(`next build`) e fica pendurado, porque não existe Worker gerado para publicar.

## Por que o build antigo travava

1. O repositório não tinha `wrangler.jsonc`, `open-next.config.ts` nem
   `@opennextjs/cloudflare` — o Workers Builds não encontrava nada para publicar.
2. `output: "standalone"` no `next.config.ts` conflita com o adapter, que
   precisa do build padrão do Next para montar o Worker.

## GitHub Pages

Existe um workflow legado "pages build and deployment" publicando da `main`.
Com o site na Cloudflare ele não serve para nada. Desative em
**Settings → Pages → Source: None**.
