import { FiArrowUpRight, FiClock, FiGlobe, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";
import { ActionButton } from "@/components/ui/ActionButton";

const contactItems = [
	{
		Icon: FiMail,
		title: "E-mail",
		content: (
			<a href="mailto:citi-de@patos.pb.gov.br" className="hover:text-[var(--citi-yellow)]">
				citi-de@patos.pb.gov.br
			</a>
		),
	},
	{
		Icon: FiInstagram,
		title: "Instagram",
		content: (
			<a
				href="https://www.instagram.com/citide_patos?stkn=MTNwZnI3bGlrajc1cg=="
				target="_blank"
				rel="noreferrer"
				className="hover:text-[var(--citi-yellow)]"
			>
				@citide_patos <FiArrowUpRight className="inline" aria-hidden="true" />
			</a>
		),
	},
	{
		Icon: FiGlobe,
		title: "Prefeitura",
		content: (
			<a
				href="https://www.instagram.com/pmpatos/"
				target="_blank"
				rel="noreferrer"
				className="hover:text-[var(--citi-yellow)]"
			>
				@pmpatos <FiArrowUpRight className="inline" aria-hidden="true" />
			</a>
		),
	},
	{
		Icon: FiClock,
		title: "Horário",
		content: (
			<>
				<p>08:00 às 14:00</p>
				<p className="mt-1 text-xs text-white/55">Prazo médio de resposta: até 3 dias úteis.</p>
			</>
		),
	},
	{
		Icon: FiMapPin,
		title: "Endereço",
		content: (
			<a href="https://maps.app.goo.gl/ibpgjG25uxvzyBYL7" className="hover:text-[var(--citi-yellow)]">
				Avenida Vidal de Negreiros, 84 - Centro, Patos - PB{" "}
				<FiArrowUpRight className="inline" aria-hidden="true" />
			</a>
		),
		wide: true,
	},
] as const;

export function ContactSection() {
	return (
		<section id="contato" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-[linear-gradient(135deg,var(--citi-blue-dark)_0%,var(--citi-navy)_100%)] p-6 sm:p-10">
				<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
					{/* Chamada principal */}
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">
							Atendimento CiTI-DE
						</p>
						<h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Precisa de orientação?</h2>
						<p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
							Nossa equipe pode ajudar você a encontrar o programa ou serviço adequado para sua necessidade.
						</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<ActionButton href="mailto:citi-de@patos.pb.gov.br?subject=Solicitação de orientação">
								<FiMail aria-hidden="true" />
								Enviar uma dúvida
							</ActionButton>
							<ActionButton href="https://maps.app.goo.gl/ibpgjG25uxvzyBYL7" variant="outline">
								<FiMapPin aria-hidden="true" />
								Ver localização
							</ActionButton>
						</div>
					</div>

					{/* Canais de contato */}
					<div className="grid gap-4 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-1">
						{contactItems.map(({ Icon, title, content, ...rest }) => (
							<div
								key={title}
								className={`flex gap-3 ${"wide" in rest && rest.wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
							>
								<Icon className="mt-1 shrink-0 text-[var(--citi-yellow-soft)]" aria-hidden="true" />
								<div>
									<p className="font-bold text-white">{title}</p>
									{content}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
