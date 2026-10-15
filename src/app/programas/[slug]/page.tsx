import { notFound } from "next/navigation";
import Link from "next/link";
import { programDetails } from "@/lib/site-content";

export function generateStaticParams() {
	return Object.keys(programDetails).map((slug) => ({ slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const program = programDetails[slug as keyof typeof programDetails];

	if (!program) {
		notFound();
	}

	return (
		<main className="portal-content-surface min-h-screen px-5 py-16 text-white sm:py-24">
			<div className="mx-auto max-w-5xl">
				<Link href="/#programas" className="text-sm font-bold text-[var(--citi-yellow-soft)] hover:text-[var(--citi-yellow)]">← Voltar para programas</Link>
				<header className="mt-10 max-w-3xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">Programa CiTI-DE</p>
					<h1 className="mt-3 text-5xl leading-tight sm:text-7xl">{program.title}</h1>
					<p className="mt-6 text-xl leading-8 text-white/80">{program.summary}</p>
				</header>

				<div className="mt-12 grid gap-5 md:grid-cols-2">
					<InfoBlock title="Para quem é" text={program.audience} />
					<InfoBlock title="Como participar" text={program.participation} />
				</div>

				<section className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-8">
					<h2 className="text-2xl">O que oferece</h2>
					<ul className="mt-5 grid gap-3 sm:grid-cols-3">
						{program.offers.map((offer) => <li key={offer} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80">{offer}</li>)}
					</ul>
				</section>

				<div className="mt-5 grid gap-5 md:grid-cols-2">
					<InfoBlock title="Documentos necessários" text={program.documents} />
					<InfoBlock title="Prazo ou período" text={program.period} />
				</div>

				<section className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-8">
					<h2 className="text-2xl">Perguntas frequentes</h2>
					<div className="mt-5 space-y-4">
						{program.faq.map((item) => <div key={item.question} className="border-t border-white/15 pt-4"><h3 className="font-bold">{item.question}</h3><p className="mt-2 leading-7 text-white/75">{item.answer}</p></div>)}
					</div>
				</section>

				<div className="mt-8 flex flex-wrap gap-3">
					<a href="https://citide.patos.pb.gov.br/cartilha" className="inline-flex items-center rounded-full bg-[var(--citi-yellow)] px-5 py-3 font-bold text-[var(--citi-navy)] hover:bg-[var(--citi-yellow-soft)]">Quero saber mais</a>
					<Link href="/#contato" className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-5 py-3 font-bold text-white hover:border-[var(--citi-yellow)] hover:bg-white/15">Entrar em contato</Link>
				</div>
			</div>
		</main>
	);
}

function InfoBlock({ title, text }: { title: string; text: string }) {
	return <section className="rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-8"><h2 className="text-2xl">{title}</h2><p className="mt-4 leading-7 text-white/75">{text}</p></section>;
}