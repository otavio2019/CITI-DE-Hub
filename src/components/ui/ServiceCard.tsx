import type { IconType } from "react-icons";
import { ContentCard } from "@/components/ui/ContentCard";

type ServiceCardProps = {
	id: string;
	title: string;
	text: string;
	status: string;
	href: string;
	Icon: IconType;
};

export function ServiceCard(props: ServiceCardProps) {
	return <ContentCard {...props} ctaLabel="Acessar serviço" />;
}
