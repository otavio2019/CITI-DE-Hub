import type { ReactNode } from "react";

type ActionButtonProps = {
	href: string;
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
	className?: string;
};

const variants = {
	// Amarelo direciona para a ação principal; azul e outline são ações secundárias.
	primary: "bg-[var(--citi-yellow)] text-[var(--citi-navy)] hover:bg-[var(--citi-yellow-soft)]",
	secondary: "bg-[var(--citi-blue)] text-white hover:bg-[var(--citi-blue-light)]",
	outline: "border border-white/35 bg-white/10 text-white hover:border-[var(--citi-yellow)] hover:bg-white/15",
};

export function ActionButton({ href, children, variant = "primary", className = "" }: ActionButtonProps) {
	return <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${variants[variant]} ${className}`}>{children}</a>;
}
