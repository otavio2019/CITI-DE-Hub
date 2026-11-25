import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Configuração padrão do adapter OpenNext para Cloudflare Workers.
// O Hub é um site institucional sem ISR/revalidação persistente, então os
// caches padrão ("dummy") bastam. Se um dia entrar conteúdo dinâmico com
// revalidate, trocar por R2/KV incremental cache + tag cache.
export default defineCloudflareConfig({});
