type SectionHeaderProps = {
	eyebrow: string;
	title: string;
	description?: string;
	className?: string;
};

export function SectionHeader({ eyebrow, title, description, className = "" }: SectionHeaderProps) {
	// Padroniza a hierarquia textual usada no início das seções do portal.
	return (
		<div className={`max-w-2xl ${className}`}>
			<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">{eyebrow}</p>
			<h2 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
			{description && <p className="mt-4 text-lg leading-8 text-white/75">{description}</p>}
		</div>
	);
}
