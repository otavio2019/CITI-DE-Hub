import Image from "next/image";
import { FiArrowUpRight, FiBriefcase, FiCheck, FiGlobe, FiMail, FiMapPin, FiUsers, FiZap } from "react-icons/fi";
import { institutionalBodies, programs, services } from "@/lib/hub-content";

const quickLinks = [
  { label: "Cursos e capacitações", href: "https://cursos.citide.patos.pb.gov.br/", icon: FiGlobe },
  { label: "Patos + Empregos", href: "https://patos.pb.gov.br/", icon: FiBriefcase },
  { label: "Sala do Empreendedor", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor", icon: FiUsers },
  { label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos", icon: FiZap },
  { label: "Cartilha da Inovação", href: "https://citide.patos.pb.gov.br/cartilha", icon: FiGlobe },
];

const pixelPlaces = [
  ["Cruz da Menina", "/images/patos-pixel/cruz-da-menina.png"],
  ["Catedral Nossa Senhora da Guia", "/images/patos-pixel/catedral-nossa-senhora-da-guia.png"],
  ["Igreja Nossa Senhora da Conceição", "/images/patos-pixel/igreja-nossa-senhora-da-conceicao.png"],
  ["Mercado Público", "/images/patos-pixel/mercado-publico.png"],
];

export function CiTiDeSections() {
  return <>
    <section id="acesso-rapido" className="citide-section citide-quick-section"><div className="citide-container"><div className="citide-section-heading"><span>01 · Acesso rápido</span><h2>Encontre o caminho certo para sua necessidade.</h2></div><div className="citide-quick-grid">{quickLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} className="citide-quick-card"><Icon /><strong>{label}</strong><FiArrowUpRight /></a>)}</div></div></section>

    <section id="sobre" className="citide-section citide-about-section"><div className="citide-container citide-about-grid"><div><div className="citide-section-heading"><span>02 · Sobre a CiTI-DE</span><h2>Política pública que aproxima ideias e oportunidades.</h2></div><p className="citide-big-copy">A CiTI-DE formula e executa políticas de ciência, tecnologia, inovação e desenvolvimento econômico em Patos.</p><p className="citide-muted">A secretaria conecta empresas, inventores, instituições de ensino e cidadãos aos caminhos que ajudam projetos e negócios a avançar.</p></div><div className="citide-bodies">{institutionalBodies.map((body) => <article key={body.title}><FiCheck /><div><h3>{body.title}</h3><p>{body.text}</p></div></article>)}</div></div></section>

    <section id="servicos" className="citide-section citide-dark-section"><div className="citide-container"><div className="citide-section-heading citide-light-heading"><span>03 · Serviços</span><h2>Ajuda prática para o próximo passo.</h2></div><div className="citide-card-grid">{services.slice(0, 6).map((service) => <a key={service.id} id={service.id} href={service.href} className="citide-info-card"><small>{service.status}</small><h3>{service.title}</h3><p>{service.text}</p><FiArrowUpRight /></a>)}</div></div></section>

    <section id="programas" className="citide-section citide-programs-section"><div className="citide-container"><div className="citide-section-heading"><span>04 · Programas</span><h2>Iniciativas para inovar, empreender e desenvolver.</h2></div><div className="citide-program-list">{programs.map((program) => <a key={program.id} href={program.href} className="citide-program-row"><span>{program.title}</span><p>{program.text}</p><FiArrowUpRight /></a>)}</div></div></section>

    <section id="patos-em-pixels" className="citide-section citide-pixel-section"><div className="citide-container"><div className="citide-section-heading citide-light-heading"><span>05 · Identidade local</span><h2>Patos em pixels.</h2></div><div className="citide-pixel-grid">{pixelPlaces.map(([title, image]) => <article key={title}><Image src={image} alt={title} fill sizes="(min-width: 1024px) 25vw, 50vw" /><strong>{title}</strong></article>)}</div></div></section>

    <section id="contato" className="citide-section citide-contact-section"><div className="citide-container citide-contact-grid"><div><div className="citide-section-heading"><span>06 · Atendimento</span><h2>Precisa de orientação?</h2></div><p className="citide-muted">Entre em contato com a equipe da CiTI-DE para encontrar o programa ou serviço adequado para sua demanda.</p><a className="citide-contact-button" href="mailto:citi-de@patos.pb.gov.br?subject=Solicitação de orientação"><FiMail /> Enviar uma dúvida <FiArrowUpRight /></a></div><div className="citide-contact-details"><div><FiMail /><span>citi-de@patos.pb.gov.br</span></div><div><FiMapPin /><span>Avenida Vidal de Negreiros, 84 - Centro, Patos - PB</span></div><div><FiUsers /><span>Atendimento: 08:00 às 14:00</span></div></div></div></section>

    <footer className="citide-footer"><div className="citide-container"><strong>CiTI-DE</strong><span>Ciência, Tecnologia, Inovação e Desenvolvimento Econômico · Patos - PB</span><a href="https://citide.patos.pb.gov.br/">Portal oficial <FiArrowUpRight /></a></div></footer>
  </>;
}
