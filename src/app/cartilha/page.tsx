import type { Metadata } from "next";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { contactInfo, officialLinks } from "@/lib/hub-content";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import {
	acelerapatos,
	cartilhaStats,
	empregos,
	inovapatos,
	laws,
	proinova,
	secretaria,
	selo,
	smcti,
} from "@/lib/content/cartilha";

export const metadata: Metadata = {
	title: "Cartilha da Inovação",
	description:
		"Conheça as seis leis municipais que incentivam ciência, tecnologia e inovação em Patos e como empresas, inventores, instituições de ensino e cidadãos podem se beneficiar.",
	openGraph: {
		title: "Cartilha da Inovação | CiTI-DE",
		description:
			"Conheça as seis leis municipais que incentivam ciência, tecnologia e inovação em Patos.",
	},
};

const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Dúvida sobre a Cartilha da Inovação")}`;

export default function CartilhaPage() {
	return (
		<PageShell
			eyebrow="Cartilha da Inovação"
			title={
				<>
					Seis leis para fazer <em>Patos inovar.</em>
				</>
			}
			lead="Conheça as leis que incentivam ciência, tecnologia e inovação em Patos — e descubra como empresas, inventores, instituições de ensino e cidadãos podem se beneficiar."
			backHref="/"
			backLabel="Voltar para a página inicial"
			primaryAction={{ label: "Falar com a CiTI-DE", href: mailto }}
			secondaryAction={{ label: "Ver os programas", href: "/#programas" }}
			stats={cartilhaStats}
		>
			<PageSection index="01" eyebrow="Gestão e governança" title={secretaria.title}>
				<div className="page-grid">
					<p className="page-copy">{secretaria.intro}</p>
					<ul className="data-list">
						{secretaria.bodies.map((body) => (
							<li key={body.title}>
								<strong>{body.title}</strong>
								<span>{body.text}</span>
							</li>
						))}
					</ul>
				</div>
			</PageSection>

			<PageSection index="02" eyebrow="Sistema Municipal" title={smcti.title} variant="alt">
				<p className="page-copy">{smcti.intro}</p>
				<div className="chip-grid">
					{smcti.members.map((member) => (
						<span key={member}>{member}</span>
					))}
				</div>
			</PageSection>

			<PageSection
				index="03"
				eyebrow="Pacote de leis"
				title="Seis programas, um único objetivo: fazer Patos inovar."
			>
				<ul className="law-list">
					{laws.map((law) => (
						<li key={law.anchor}>
							<a href={`#${law.anchor}`}>
								<div>
									<small>{law.law}</small>
									<strong>{law.title}</strong>
								</div>
								<p>{law.summary}</p>
								<FiArrowUpRight aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
			</PageSection>

			<PageSection
				id="inovapatos"
				index="04"
				eyebrow="A política-mãe"
				title="InovaPatos"
				variant="alt"
				aside={inovapatos.law}
			>
				<p className="page-copy">{inovapatos.intro}</p>

				<div id="picti" className="callout">
					<h3>{inovapatos.picti.title}</h3>
					<p>{inovapatos.picti.text}</p>
				</div>

				<div className="page-grid">
					<div>
						<p className="block-label">{inovapatos.benefitsTitle}</p>
						<ul className="check-list">
							{inovapatos.benefits.map((benefit) => (
								<li key={benefit}>
									<FiCheck aria-hidden="true" />
									<span>{benefit}</span>
								</li>
							))}
						</ul>
					</div>
					<ul className="data-list">
						{inovapatos.highlights.map((highlight) => (
							<li key={highlight.title}>
								<strong>{highlight.title}</strong>
								<span>{highlight.text}</span>
							</li>
						))}
					</ul>
				</div>
			</PageSection>

			<PageSection
				id="acelerapatos"
				index="05"
				eyebrow="Benefícios fiscais"
				title="AceleraPatos"
				aside={acelerapatos.law}
			>
				<p className="page-copy">{acelerapatos.intro}</p>

				<div className="page-grid">
					<div>
						<p className="block-label">{acelerapatos.benefitsTitle}</p>
						<ul className="check-list">
							{acelerapatos.benefits.map((benefit) => (
								<li key={benefit}>
									<FiCheck aria-hidden="true" />
									<span>{benefit}</span>
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="block-label">{acelerapatos.documentsTitle}</p>
						<ul className="data-list">
							{acelerapatos.documents.map((document, index) => (
								<li key={document}>
									<strong>0{index + 1}</strong>
									<span>{document}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</PageSection>

			<PageSection
				id="proinova"
				index="06"
				eyebrow="Apoio ao inventor"
				title="ProInova"
				variant="alt"
				aside={proinova.law}
			>
				<p className="page-copy">{proinova.intro}</p>
				<ul className="data-list">
					{proinova.items.map((item, index) => (
						<li key={item}>
							<strong>0{index + 1}</strong>
							<span>{item}</span>
						</li>
					))}
				</ul>
			</PageSection>

			<PageSection
				index="07"
				eyebrow="Reconhecimento e emprego"
				title="Duas leis para valorizar quem inova e quem trabalha"
				variant="dark"
			>
				<div className="page-grid">
					<div id="selo-inovacao">
						<p className="block-label">{selo.law}</p>
						<h3 className="page-block-title">{selo.title}</h3>
						<p className="page-copy">{selo.text}</p>
					</div>
					<div id="patos-empregos">
						<p className="block-label">{empregos.law}</p>
						<h3 className="page-block-title">{empregos.title}</h3>
						<p className="page-copy">{empregos.text}</p>
					</div>
				</div>

				<div className="source-note">
					<span>
						Conteúdo baseado na Cartilha da Inovação publicada pela CiTI-DE. Em caso de divergência, prevalece o texto
						oficial da lei.
					</span>
					<a href={officialLinks.cartilha} target="_blank" rel="noreferrer" aria-label="Abrir a cartilha oficial em nova aba">
						Ver cartilha oficial <FiArrowUpRight aria-hidden="true" />
					</a>
				</div>
			</PageSection>
		</PageShell>
	);
}
