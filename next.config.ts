import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O adapter OpenNext (@opennextjs/cloudflare) precisa do build padrão do Next
  // para gerar o Worker. O modo standalone fica disponível apenas quando
  // NEXT_OUTPUT=standalone (usado pela imagem Docker).
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
};

export default nextConfig;

// Bindings locais (KV, D1, R2...) durante o `next dev`, via wrangler.
// O Hub hoje não usa nenhum binding, então isso só roda quando pedido
// explicitamente: `npm run dev:cf`. Mantém o `npm run dev` rápido.
if (process.env.NODE_ENV === "development" && process.env.NEXT_DEV_CLOUDFLARE === "1") {
  void import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) =>
    initOpenNextCloudflareForDev(),
  );
}
