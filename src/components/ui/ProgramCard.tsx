import type { IconType } from "react-icons";
import { ContentCard } from "@/components/ui/ContentCard";

type ProgramCardProps = {
	id: string;
	title: string;
	text: string;
	status: string;
	Icon: IconType;
};

export function ProgramCard({ id, title, text, status, Icon }: ProgramCardProps) {
	return (
		<ContentCard
			id={id}
			title={title}
			text={text}
			status={status}
			Icon={Icon}
			href={`/programas/${id}`}
			ctaLabel="Conhecer programa"
		/>
	);
}
