import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CiTI-DE Hub | Inovação que aproxima",
  description: "Serviços, programas e oportunidades de ciência, tecnologia, inovação e desenvolvimento em Patos.",
  icons: { icon: "/icons/logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR" className="h-full antialiased"><body className="min-h-full">{children}</body></html>;
}
