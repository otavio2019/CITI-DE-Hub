import Image from "next/image";
import { institutionalBodies } from "@/lib/site-content";
import { FiArrowUpRight } from "react-icons/fi";

export function AboutSection() {
	return (
		<section id="sobre" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

				{/* Texto institucional */}
				<div>
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">
						Sobre a secretaria
					</p>
					<h2 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
						CiTI-DE — Ciência, Tecnologia, Inovação e Desenvolvimento Econômico
					</h2>
					<p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
						A CiTI-DE é a secretaria da Prefeitura de Patos responsável por formular e executar as políticas públicas de ciência, tecnologia e inovação do município — conectando empresas, inventores, instituições de ensino e cidadãos às oportunidades do ecossistema local.
					</p>
					<p className="mt-4 max-w-xl leading-7 text-white/75">
						Por meio de programas, capacitações e políticas públicas, a secretaria aproxima quem tem uma ideia de quem pode ajudar a colocá-la em prática.
					</p>

					<div className="mt-8 grid gap-3 sm:grid-cols-2">
						{institutionalBodies.map((body) => (
							<article
								key={body.title}
								className="border-l-4 border-[var(--citi-yellow)] bg-white/10 px-4 py-3 shadow-sm"
							>
								<h3 className="text-base font-bold text-white">{body.title}</h3>
								<p className="mt-1 text-sm leading-6 text-white/70">{body.text}</p>
								<a
									href="#contato"
									className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[var(--citi-yellow)] hover:text-[var(--citi-yellow-soft)]"
								>
									Falar com a secretaria <FiArrowUpRight aria-hidden="true" />
								</a>
							</article>
						))}
					</div>
				</div>

				{/* Ilustração */}
				<div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_62%_28%,rgba(255,184,0,0.28),transparent_42%)] shadow-2xl">
					<div className="flex items-center justify-center px-4 pb-4 pt-6 sm:px-6 sm:pb-6 sm:pt-8">
						<Image
							src="/images/sobre-pessoa-inovacao-transparent.png"
							alt="Jovem em um computador com um pato de fones, um robô e o sol da inovação"
							width={2176}
							height={1632}
							sizes="(max-width: 1024px) 90vw, 560px"
							className="relative h-auto w-full max-w-[560px] object-contain drop-shadow-[0_20px_36px_rgba(2,24,48,0.28)]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
