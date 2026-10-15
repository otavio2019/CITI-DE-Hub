import type { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

/* -------------------------------------------------------------------------- */
/* Card reutilizável para serviços e programas                                */
/* -------------------------------------------------------------------------- */
type ContentCardProps = {
	id: string;
	title: string;
	text: string;
	status: string;
	href: string;
	Icon: IconType;
	ctaLabel: string;
};

export function ContentCard({ id, title, text, status, href, Icon, ctaLabel }: ContentCardProps) {
	return (
		<article
			id={id}
			className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--citi-yellow)] hover:bg-white/15 hover:shadow-lg"
		>
			{/* Ícone + status */}
			<div className="flex items-start justify-between gap-3">
				<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--citi-blue)] text-xl text-white shadow-sm transition group-hover:bg-[var(--citi-yellow)] group-hover:text-[var(--citi-navy)]">
					<Icon aria-hidden="true" />
				</div>
				<StatusBadge label={status} />
			</div>

			{/* Conteúdo */}
			<h3 className="mt-5 text-2xl">{title}</h3>
			<p className="mt-3 flex-1 leading-7 text-white/75">{text}</p>

			{/* CTA */}
			<ActionButton href={href} variant="outline" className="mt-5 w-fit">
				{ctaLabel} <FiArrowUpRight aria-hidden="true" />
			</ActionButton>
		</article>
	);
}
