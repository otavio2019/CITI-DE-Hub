import { opportunities } from "@/lib/site-content";
import { FiArrowRight } from "react-icons/fi";

/* Usa as primeiras oportunidades e repete para o ticker contínuo. */
const highlightItems = opportunities.slice(0, 5);
const tickerItems = [...highlightItems, ...highlightItems];

export function HighlightsStripSection() {
	return (
		<section className="relative border-y border-white/10 bg-[linear-gradient(90deg,rgba(3,40,66,0.96),rgba(8,103,168,0.92))] px-4 py-4 text-white sm:px-5 sm:py-5">
			<div className="mx-auto max-w-7xl">
				{/* Cabeçalho */}
				<div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
					<p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--citi-yellow-soft)] sm:text-[0.65rem]">
						Destaques
					</p>
					<a
						href="#oportunidades"
						className="inline-flex items-center gap-1 text-[0.64rem] font-bold text-[var(--citi-yellow)] transition hover:text-[var(--citi-yellow-soft)] sm:text-xs"
					>
						Ver todas as novidades <FiArrowRight aria-hidden="true" />
					</a>
				</div>

				{/* Trilha animada */}
				<div className="ticker-shell">
					<div className="ticker-track">
						{tickerItems.map((item, index) => (
							<a
								key={`${item.id}-${index}`}
								href={item.href}
								className="group flex w-[220px] shrink-0 items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/8 px-3 py-2.5 shadow-sm transition hover:border-[var(--citi-yellow)] hover:bg-white/12 sm:w-[260px] sm:px-4 sm:py-3"
							>
								<span className="inline-flex items-center gap-2 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-[var(--citi-yellow-soft)] sm:text-[0.65rem]">
									<span className="h-2 w-2 rounded-full bg-[var(--citi-yellow)]" aria-hidden="true" />
									{item.category}
								</span>
								<span className="text-[0.7rem] font-semibold text-white transition group-hover:text-[var(--citi-yellow-soft)] sm:text-sm">
									{item.title}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
