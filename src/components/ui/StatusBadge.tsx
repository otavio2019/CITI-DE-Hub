type StatusBadgeProps = {
	label: string;
};

export function StatusBadge({ label }: StatusBadgeProps) {
	// O texto mantém o status compreensível mesmo para quem não percebe a cor.
	return <span className="rounded-full border border-[var(--citi-yellow)]/50 px-2 py-1 text-xs font-bold text-[var(--citi-yellow-soft)]">{label}</span>;
}
