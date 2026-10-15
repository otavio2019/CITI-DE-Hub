import { opportunities } from "@/lib/site-content";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function NewsSection() {
	return (
		<section id="oportunidades" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<SectionHeader eyebrow="Fique por dentro" title="Últimas oportunidades" />
					<p className="max-w-md text-sm leading-6 text-white/70">
						Acompanhe cursos, editais, programas e informações importantes da CiTI-DE.
					</p>
				</div>

				<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{opportunities.map((item) => (
						<article
							key={item.id}
							className="flex min-h-64 flex-col rounded-2xl border border-white/15 bg-white/10 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--citi-yellow)] hover:bg-white/15"
						>
							<div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em]">
								<span className="text-[var(--citi-yellow-soft)]">{item.category}</span>
								<StatusBadge label={item.status} />
							</div>

							<p className="mt-5 text-xs text-white/55">{item.date}</p>
							<h3 className="mt-2 text-2xl">{item.title}</h3>
							<p className="mt-3 flex-1 leading-7 text-white/70">{item.summary}</p>

							<a
								href={item.href}
								className="mt-5 inline-flex items-center gap-1 font-bold text-[var(--citi-yellow)] hover:text-[var(--citi-yellow-soft)]"
							>
								Ver detalhes <FiArrowUpRight aria-hidden="true" />
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
