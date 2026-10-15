"use client";

import { FormEvent, useState } from "react";
import { programs, services } from "@/lib/site-content";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortalSections } from "@/components/sections/PortalSections";

const searchableItems = [...services, ...programs];

export function StarterContent() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchMessage, setSearchMessage] = useState("");

	function handleSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const term = searchTerm.trim().toLocaleLowerCase("pt-BR");

		if (!term) {
			setSearchMessage("Digite um serviço, programa ou palavra-chave para buscar.");
			return;
		}

		const match = searchableItems.find((item) =>
			`${item.title} ${item.text}`.toLocaleLowerCase("pt-BR").includes(term),
		);

		if (!match) {
			setSearchMessage("Ainda não encontramos esse termo. Tente buscar por cursos, empregos ou inovação.");
			return;
		}

		setSearchMessage(`Encontramos “${match.title}”. Veja esta informação abaixo.`);
		document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<main id="inicio" className="overflow-hidden bg-[var(--citi-navy)]">
			<HeroSection
				searchTerm={searchTerm}
				searchMessage={searchMessage}
				onSearch={handleSearch}
				onSearchTermChange={(event) => setSearchTerm(event.target.value)}
			/>
			<PortalSections />
		</main>
	);
}
