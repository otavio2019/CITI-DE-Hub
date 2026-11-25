import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "CiTI-DE | Ciência, Tecnologia e Inovação em Patos",
		template: "%s | CiTI-DE",
	},
	description:
		"Programas, serviços, oportunidades e políticas públicas de ciência, tecnologia, inovação e desenvolvimento econômico em Patos.",
	icons: { icon: "/icons/logo.png" },
	openGraph: {
		type: "website",
		locale: "pt_BR",
		siteName: "CiTI-DE",
		title: "CiTI-DE | Ciência, Tecnologia e Inovação em Patos",
		description:
			"Programas, serviços, oportunidades e políticas públicas de ciência, tecnologia, inovação e desenvolvimento econômico em Patos.",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR" className="h-full antialiased">
			<body className="min-h-full">
				<div className="announcement">
					<span>CiTI-DE</span>
					<p>Ciência, tecnologia, inovação e desenvolvimento em Patos.</p>
					<Link href="/#acesso-rapido">
						Conheça os caminhos <FiArrowUpRight aria-hidden="true" />
					</Link>
				</div>
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
