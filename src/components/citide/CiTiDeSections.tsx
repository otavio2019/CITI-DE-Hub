import { FiArrowUpRight, FiBriefcase, FiCheck, FiGlobe, FiMail, FiMapPin, FiUsers, FiZap } from "react-icons/fi";
import { institutionalBodies, officialLinks, programLinks, programs, serviceLinks, services } from "@/lib/hub-content";

const quickLinks = [
  { label: "Cursos e capacitações", href: serviceLinks.find((link) => link.label === "Cursos CiTI-DE & SENAC")?.href ?? "#", icon: FiGlobe },
  { label: "Patos + Empregos", href: officialLinks.empregos, icon: FiBriefcase },
  { label: "Sala do Empreendedor", href: serviceLinks.find((link) => link.label === "Sala do Empreendedor")?.href ?? "#", icon: FiUsers },
  { label: "AceleraPatos", href: officialLinks.aceleraPatos, icon: FiZap },
  { label: "Cartilha da Inovação", href: officialLinks.cartilha, icon: FiGlobe },
];

const programOfficialLinks = new Map(programLinks.map((program) => [program.label, program.href]));

export function CiTiDeSections() {
  return <>
    <section id="acesso-rapido" className="citide-section citide-quick-section"><div className="citide-container"><div className="citide-section-heading"><span>01 · Acesso rápido</span><h2>Encontre o caminho certo para sua necessidade.</h2></div><div className="citide-quick-grid">{quickLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} className="citide-quick-card"><Icon /><strong>{label}</strong><FiArrowUpRight /></a>)}</div></div></section>

    <section id="sobre" className="citide-section citide-about-section"><div className="citide-container citide-about-grid"><div><div className="citide-section-heading"><span>02 · Sobre a CiTI-DE</span><h2>Política pública que aproxima ideias e oportunidades.</h2></div><p className="citide-big-copy">A CiTI-DE formula e executa políticas de ciência, tecnologia, inovação e desenvolvimento econômico em Patos.</p><p className="citide-muted">A secretaria conecta empresas, inventores, instituições de ensino e cidadãos aos caminhos que ajudam projetos e negócios a avançar.</p></div><div className="citide-bodies">{institutionalBodies.map((body) => <article key={body.title}><FiCheck /><div><h3>{body.title}</h3><p>{body.text}</p></div></article>)}</div></div></section>

    <section id="servicos" className="citide-section citide-dark-section"><div className="citide-container"><div className="citide-section-heading citide-light-heading"><span>03 · Serviços</span><h2>Ajuda prática para o próximo passo.</h2></div><div className="citide-card-grid">{services.slice(0, 6).map((service) => <a key={service.id} id={service.id} href={service.href} className="citide-info-card"><small>{service.status}</small><h3>{service.title}</h3><p>{service.text}</p><FiArrowUpRight /></a>)}</div></div></section>

    <section id="programas" className="citide-section citide-programs-section"><div className="citide-container"><div className="citide-section-heading"><span>04 · Programas</span><h2>Iniciativas para inovar, empreender e desenvolver.</h2><a className="citide-section-link" href={officialLinks.cartilha}>Ver cartilha completa <FiArrowUpRight /></a></div><div className="citide-program-list">{programs.map((program) => <a key={program.id} href={programOfficialLinks.get(program.title) ?? program.href} className="citide-program-row"><span>{program.title}</span><p>{program.text}</p><FiArrowUpRight /></a>)}</div></div></section>

    <section id="contato" className="citide-section citide-contact-section"><div className="citide-container citide-contact-grid"><div><div className="citide-section-heading"><span>05 · Atendimento</span><h2>Precisa de orientação?</h2></div><p className="citide-muted">Entre em contato com a equipe da CiTI-DE para encontrar o programa ou serviço adequado para sua demanda.</p><a className="citide-contact-button" href="mailto:citi-de@patos.pb.gov.br?subject=Solicitação de orientação"><FiMail /> Enviar uma dúvida <FiArrowUpRight /></a></div><div className="citide-contact-details"><div><FiMail /><span>citi-de@patos.pb.gov.br</span></div><div><FiMapPin /><span>Avenida Vidal de Negreiros, 84 - Centro, Patos - PB</span></div><div><FiUsers /><span>Atendimento: 08:00 às 14:00</span></div></div></div></section>

    <footer className="citide-footer"><div className="citide-container"><div className="citide-footer-brand"><strong>CiTI-DE</strong><span>Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico · Patos - PB</span><small>Formula e executa políticas públicas que conectam pessoas, empresas e instituições às oportunidades de desenvolvimento local.</small></div><a href="https://citide.patos.pb.gov.br/">Portal oficial <FiArrowUpRight /></a></div></footer>
  </>;
}
