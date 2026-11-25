import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { contactInfo, programDetails } from "@/lib/hub-content";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import PreAccelerationLanding from "@/components/pre-aceleracao/PreAccelerationLanding";

type ProgramSlug = keyof typeof programDetails;

export function generateStaticParams() {
	return Object.keys(programDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const program = programDetails[slug as ProgramSlug];

	if (!program) {
		return { title: "Programa não encontrado" };
	}

	return {
		title: program.title,
		description: program.summary,
		openGraph: { title: program.title, description: program.summary },
	};
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const program = programDetails[slug as ProgramSlug];

	if (!program) {
		notFound();
	}

	if (slug === "pre-aceleracao-startups") {
		return <PreAccelerationLanding project={programDetails["pre-aceleracao-startups"]} />;
	}

	const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(`Dúvida sobre ${program.title}`)}`;

	return (
		<PageShell
			eyebrow="Programa CiTI-DE"
			title={program.title}
			lead={program.summary}
			backHref="/#programas"
			backLabel="Voltar para programas"
			primaryAction={{ label: "Falar com a CiTI-DE", href: mailto }}
			secondaryAction={{ label: "Ver cartilha completa", href: "/cartilha" }}
		>
			<PageSection index="01" eyebrow="Público" title="Para quem é o programa">
				<p className="page-copy">{program.audience}</p>
			</PageSection>

			<PageSection index="02" eyebrow="Benefícios" title="O que o programa oferece" variant="alt">
				<ul className="check-list">
					{program.offers.map((offer) => (
						<li key={offer}>
							<FiCheck aria-hidden="true" />
							<span>{offer}</span>
						</li>
					))}
				</ul>
			</PageSection>

			<PageSection index="03" eyebrow="Participação" title="Como participar">
				<div className="page-grid">
					<div>
						<p className="page-copy">{program.participation}</p>
					</div>
					<div>
						<p className="block-label">Documentos</p>
						<p className="page-copy" style={{ marginTop: 0 }}>
							{program.documents}
						</p>
					</div>
				</div>
			</PageSection>

			<PageSection index="04" eyebrow="Prazo" title="Quando acontece" variant="alt">
				<p className="page-copy">{program.period}</p>
			</PageSection>

			{"partner" in program && program.partner && (
				<PageSection index="05" eyebrow="Realização" title="Quem está à frente">
					<p className="page-copy">{program.partner}</p>
				</PageSection>
			)}

			{"timeline" in program && program.timeline && (
				<PageSection index="06" eyebrow="Cronograma" title="Etapas de execução" variant="alt">
					<ul className="data-list">
						{program.timeline.map((item) => (
							<li key={item.period}>
								<strong>{item.period}</strong>
								<span>{item.activity}</span>
							</li>
						))}
					</ul>
				</PageSection>
			)}

			{"goals" in program && program.goals && (
				<PageSection index="07" eyebrow="Resultados" title="Metas do projeto" variant="dark">
					<ul className="check-list">
						{program.goals.map((goal) => (
							<li key={goal}>
								<FiCheck aria-hidden="true" />
								<span>{goal}</span>
							</li>
						))}
					</ul>
				</PageSection>
			)}

			<PageSection index="08" eyebrow="Dúvidas" title="Perguntas frequentes">
				<div className="faq-list">
					{program.faq.map((item) => (
						<details key={item.question}>
							<summary>{item.question}</summary>
							<p>{item.answer}</p>
						</details>
					))}
				</div>

				<div className="source-note">
					<span>Informações baseadas na Cartilha da Inovação e nos documentos oficiais do programa.</span>
					<a href={program.sourceHref} target="_blank" rel="noreferrer" aria-label="Abrir a fonte oficial em nova aba">
						Ver fonte oficial <FiArrowUpRight aria-hidden="true" />
					</a>
				</div>
			</PageSection>
		</PageShell>
	);
}
