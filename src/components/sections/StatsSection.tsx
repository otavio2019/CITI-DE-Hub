import { institutionalStats } from "@/lib/site-content";

export function StatsSection() {
	return (
		<section id="indicadores" className="bg-transparent px-5 py-14 text-white sm:py-16">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">Estrutura e alcance</p>
						<h2 className="mt-2 text-3xl sm:text-4xl">Inovação com base institucional</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-white/70">Dados que mostram a dimensão das políticas públicas de ciência, tecnologia e inovação de Patos.</p>
				</div>
				<div className="mt-8 grid grid-cols-2 divide-x divide-white/15 border-y border-white/15 sm:grid-cols-4">
					{institutionalStats.map((stat) => (
						<div key={stat.label} className="px-3 py-6 text-center sm:px-6">
							<strong className="block text-4xl text-[var(--citi-yellow)] sm:text-5xl">{stat.value}</strong>
							<span className="mt-2 block min-h-8 text-xs font-bold uppercase tracking-[0.12em] text-white/70">{stat.label}</span>
							<a href={stat.sourceHref} target="_blank" rel="noreferrer" className="mt-3 block text-xs text-[var(--citi-yellow-soft)] underline underline-offset-4 hover:text-[var(--citi-yellow)]">Fonte: {stat.sourceLabel}</a>
							<time dateTime={stat.updatedAt} className="mt-1 block text-xs text-white/50">Verificado em {new Date(`${stat.updatedAt}T12:00:00`).toLocaleDateString("pt-BR")}</time>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}