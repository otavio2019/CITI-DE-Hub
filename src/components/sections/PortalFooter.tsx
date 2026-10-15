import Image from "next/image";

export function PortalFooter() {
	return (
		<footer id="portal" className="bg-[linear-gradient(180deg,var(--citi-navy)_0%,var(--citi-blue-dark)_100%)] px-5 py-12 text-sm text-white/70">
			<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
				<div>
					<div className="flex items-center gap-4">
						<div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/8 shadow-lg ring-1 ring-white/20">
							<Image src="/images/logo citi-de.png" alt="Logo CiTI-DE" width={82} height={82} className="h-full w-full object-contain" />
						</div>
						<div>
							<p className="font-[family-name:var(--font-joan)] text-2xl text-white">CiTI-DE</p>
							<p className="text-xs text-white/70">Prefeitura de Patos</p>
						</div>
					</div>
					<p className="mt-5 max-w-sm leading-6 text-base text-white/80">Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico.</p>
				</div>
				<div>
					<p className="font-bold uppercase tracking-[0.14em] text-[var(--citi-yellow-soft)]">Atendimento</p>
					<div className="mt-3 space-y-2 leading-6">
						<p>08:00 às 14:00</p>
						<p>Avenida Vidal de Negreiros, 84 - Centro, Patos - PB</p>
						<a href="mailto:citi-de@patos.pb.gov.br" className="block transition hover:text-[var(--citi-yellow)]">citi-de@patos.pb.gov.br</a>
					</div>
				</div>
				<div>
					<p className="font-bold uppercase tracking-[0.14em] text-[var(--citi-yellow-soft)]">Links oficiais</p>
					<div className="mt-3 flex flex-col items-start gap-2">
						<a href="https://patos.pb.gov.br/" className="transition hover:text-[var(--citi-yellow)]">Portal da Prefeitura ↗</a>
						<a href="https://www.instagram.com/citide_patos/" className="transition hover:text-[var(--citi-yellow)]">Instagram CiTI-DE ↗</a>
						<a href="https://www.instagram.com/pmpatos/" className="transition hover:text-[var(--citi-yellow)]">Instagram Prefeitura ↗</a>
						<a href="https://transparencia.patos.pb.gov.br/" className="transition hover:text-[var(--citi-yellow)]">Transparência ↗</a>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row">
				<p>© Prefeitura de Patos · Todos os direitos reservados.</p>
				<div className="flex flex-wrap gap-x-4 gap-y-2"><a href="#acessibilidade" className="hover:text-[var(--citi-yellow)]">Acessibilidade</a><a href="#privacidade" className="hover:text-[var(--citi-yellow)]">Política de privacidade</a></div>
			</div>
			<div className="mx-auto mt-4 flex max-w-6xl flex-col gap-1 text-xs text-white/45 sm:flex-row sm:gap-5">
				<p id="acessibilidade">Acessibilidade: este portal prioriza contraste, navegação por teclado e textos alternativos.</p>
				<p id="privacidade">Política de privacidade: os dados informados são tratados conforme a legislação aplicável.</p>
			</div>
		</footer>
	);
}