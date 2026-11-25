import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type PageAction = {
	label: string;
	href: string;
	external?: boolean;
};

type PageStat = {
	value: string;
	label: string;
};

type PageShellProps = {
	eyebrow: string;
	title: ReactNode;
	lead: string;
	backHref?: string;
	backLabel?: string;
	primaryAction?: PageAction;
	secondaryAction?: PageAction;
	stats?: PageStat[];
	children: ReactNode;
};

function ActionLink({ action, primary }: { action: PageAction; primary?: boolean }) {
	const className = primary ? "page-action" : "page-action-ghost";

	if (action.external) {
		return (
			<a
				className={className}
				href={action.href}
				target="_blank"
				rel="noreferrer"
				aria-label={`${action.label} (abre em nova aba)`}
			>
				{action.label} <FiArrowUpRight aria-hidden="true" />
			</a>
		);
	}

	return (
		<Link className={className} href={action.href}>
			{action.label} <FiArrowUpRight aria-hidden="true" />
		</Link>
	);
}

export function PageShell({
	eyebrow,
	title,
	lead,
	backHref = "/",
	backLabel = "Voltar para a página inicial",
	primaryAction,
	secondaryAction,
	stats,
	children,
}: PageShellProps) {
	return (
		<main className="page-shell">
			<header className="page-hero">
				<div className="citide-container">
					<Link className="page-back" href={backHref}>
						← {backLabel}
					</Link>
					<span className="page-eyebrow">{eyebrow}</span>
					<h1>{title}</h1>
					<p className="page-lead">{lead}</p>

					{(primaryAction || secondaryAction) && (
						<div className="page-actions">
							{primaryAction && <ActionLink action={primaryAction} primary />}
							{secondaryAction && <ActionLink action={secondaryAction} />}
						</div>
					)}

					{stats && stats.length > 0 && (
						<div className="page-stats">
							{stats.map((stat) => (
								<div key={stat.label}>
									<strong>{stat.value}</strong>
									<span>{stat.label}</span>
								</div>
							))}
						</div>
					)}
				</div>
			</header>

			{children}
		</main>
	);
}

type PageSectionProps = {
	id?: string;
	index?: string;
	eyebrow: string;
	title: string;
	variant?: "default" | "alt" | "dark";
	aside?: string;
	children: ReactNode;
};

export function PageSection({ id, index, eyebrow, title, variant = "default", aside, children }: PageSectionProps) {
	const className = `page-section${variant === "alt" ? " is-alt" : ""}${variant === "dark" ? " is-dark" : ""}`;

	return (
		<section id={id} className={className}>
			<div className="citide-container">
				<div className="page-section-head">
					<div className="citide-section-heading">
						<span>{index ? `${index} · ${eyebrow}` : eyebrow}</span>
						<h2>{title}</h2>
					</div>
					{aside && <p className="page-aside">{aside}</p>}
				</div>
				{children}
			</div>
		</section>
	);
}
