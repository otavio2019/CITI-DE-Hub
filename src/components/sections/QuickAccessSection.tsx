import { quickAccessLinks } from "@/lib/site-content";
import { quickAccessIcons, resolveIcon } from "@/lib/site-icons";
import { FiArrowUpRight } from "react-icons/fi";

export function QuickAccessSection() {
	return (
		<section id="acesso-rapido" className="bg-transparent px-5 py-14 text-white sm:py-16">
			<div className="mx-auto max-w-6xl">
				{/* Cabeçalho */}
				<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">
							Ações rápidas
						</p>
						<h2 className="mt-2 text-3xl sm:text-4xl">Vá direto ao que precisa</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-white/70">
						Escolha uma tarefa e encontre o conteúdo correspondente sem navegar pelos menus.
					</p>
				</div>

				{/* Cards de acesso */}
				<div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
					{quickAccessLinks.map((item) => {
						const Icon = resolveIcon(quickAccessIcons, item.id);

						return (
							<a
								key={item.id}
								href={item.href}
								className="group flex min-h-28 flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[var(--citi-yellow)] hover:bg-[var(--citi-blue-dark)]"
							>
								<Icon
									aria-hidden="true"
									className="text-xl text-[var(--citi-yellow-soft)] transition group-hover:text-[var(--citi-yellow)]"
								/>
								<span className="mt-6 flex items-end justify-between gap-2 text-base font-bold">
									{item.label}
									<FiArrowUpRight aria-hidden="true" className="shrink-0 text-[var(--citi-yellow-soft)]" />
								</span>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
