import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CiTI-DE | Ciência, Tecnologia e Inovação em Patos",
  description: "Programas, serviços, oportunidades e políticas públicas de ciência, tecnologia, inovação e desenvolvimento econômico em Patos.",
  icons: { icon: "/icons/logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR" className="h-full antialiased"><body className="min-h-full">{children}</body></html>;
}
