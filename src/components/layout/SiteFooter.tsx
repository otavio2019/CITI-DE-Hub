import Image from "next/image";
import { FiArrowUpRight, FiBookOpen, FiClock, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";
import { contactInfo, officialLinks } from "@/lib/hub-content";

export function SiteFooter() {
	return (
		<footer className="citide-footer">
			<div className="citide-footer-rays" aria-hidden="true" />
			<div className="citide-container">
				<div className="citide-footer-intro">
					<p className="citide-footer-kicker">Secretaria municipal</p>
					<div className="citide-footer-brand">
						<strong>CiTI-DE</strong>
						<span>Ciência, Tecnologia, Inovação e Desenvolvimento Econômico · Patos - PB</span>
						<small>
							Formula e executa políticas públicas que conectam pessoas, empresas e instituições às oportunidades de
							desenvolvimento local.
						</small>
					</div>
				</div>

				<div className="citide-footer-panel">
					<p className="citide-footer-label">Atendimento</p>
					<div className="citide-footer-detail">
						<FiMapPin aria-hidden="true" />
						<span>{contactInfo.address}</span>
					</div>
					<div className="citide-footer-detail">
						<FiClock aria-hidden="true" />
						<span>{contactInfo.hours}</span>
					</div>
					<a className="citide-footer-detail" href={`mailto:${contactInfo.email}`}>
						<FiMail aria-hidden="true" />
						<span>{contactInfo.email}</span>
					</a>
				</div>

				<div className="citide-footer-links">
					<p className="citide-footer-label">Acesso oficial</p>
					<a href={officialLinks.portal}>
						Portal CiTI-DE <FiArrowUpRight aria-hidden="true" />
					</a>
					<a href="/cartilha">
						<FiBookOpen aria-hidden="true" /> Cartilha da Inovação <FiArrowUpRight aria-hidden="true" />
					</a>
					<a href={contactInfo.portalPrefeitura}>
						Portal da Prefeitura <FiArrowUpRight aria-hidden="true" />
					</a>
					<a href={contactInfo.instagramCiti}>
						<FiInstagram aria-hidden="true" /> Instagram CiTI-DE <FiArrowUpRight aria-hidden="true" />
					</a>
					<a href={contactInfo.instagramPrefeitura}>
						<FiInstagram aria-hidden="true" /> Instagram Prefeitura <FiArrowUpRight aria-hidden="true" />
					</a>
				</div>
			</div>

			<div className="citide-footer-bottom citide-container">
				<span>© Prefeitura de Patos · Todos os direitos reservados.</span>
				<span>Portal institucional de ciência, tecnologia e inovação.</span>
			</div>

			<div className="citide-footer-marks">
				<Image
					src="/icons/logo.png"
					alt="Brasão da Prefeitura de Patos"
					width={221}
					height={208}
					className="citide-footer-mark is-prefeitura"
				/>
				<Image
					src="/images/citi-de-colorida.png"
					alt="CiTI-DE — Ciência, Tecnologia, Inovação e Desenvolvimento Econômico"
					width={1200}
					height={338}
					className="citide-footer-mark is-citi"
				/>
			</div>
		</footer>
	);
}
