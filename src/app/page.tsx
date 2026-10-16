import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight, FiCheck, FiChevronDown } from "react-icons/fi";
import { hubAudiences, hubBenefits, hubFaqs, hubOpportunityLinks, hubStages } from "@/lib/hub-content";


export default function Home() {
  return (
    <main id="inicio" className="hub-shell">
      <div className="announcement"><span>CiTI-DE Hub</span><p>Um ponto de encontro para ideias, pessoas e oportunidades em Patos.</p><a href="#como-funciona">Conheça a jornada <FiArrowUpRight /></a></div>
      <header className="hub-header">
        <a className="brand" href="#inicio" aria-label="CiTI-DE Hub início"><Image src="/icons/logo.png" alt="Logo CiTI-DE" width={48} height={48} priority /><span><strong>CiTI<span>-DE</span></strong><small>Hub de inovação · Patos - PB</small></span></a>
        <nav aria-label="Navegação principal" className="hub-nav"><a href="#oportunidades">Programas</a><a href="#oportunidades">Serviços</a><a href="#oportunidades">Startups</a><a href="#programa">Sobre</a><a href="#faq">Contato</a></nav>
        <a className="header-cta" href="https://citide.patos.pb.gov.br/painel">Acessar o portal <FiArrowUpRight /></a>
      </header>

      <section className="hero-section"><div className="hero-copy"><p className="eyebrow light">Ciência · tecnologia · inovação · desenvolvimento</p><h1>Ideias que encontram <em>caminho.</em></h1><p className="hero-lead">O CiTI-DE Hub conecta pessoas, negócios e instituições às oportunidades que fazem Patos avançar.</p><div className="hero-actions"><a className="button button-yellow" href="#oportunidades">Quero encontrar meu caminho <FiArrowUpRight /></a><a className="text-link light-link" href="#programa">Entender o Hub <FiArrowDownRight /></a></div></div><div className="hero-art" aria-hidden="true"><Image src="/images/sol 2.png" alt="" width={1278} height={1230} priority className="hero-sun" /></div><div className="hero-bottom"><span>Uma iniciativa para transformar potencial em desenvolvimento local.</span><span className="hero-scroll">Deslize para explorar <FiArrowDownRight /></span></div></section>

      <section id="programa" className="section intro-section"><div className="section-kicker">01 <span>O Hub</span></div><div className="intro-grid"><h2>Um lugar para descobrir o próximo passo.</h2><div><p className="lead">O CiTI-DE Hub organiza, em um só lugar, os caminhos de qualificação, empreendedorismo, inovação e acesso a políticas públicas em Patos.</p><p>Você não precisa saber o nome do programa. Basta saber onde quer chegar. A partir do seu momento, encontre uma trilha clara para aprender, criar, empreender, trabalhar e conectar-se.</p><a className="text-link dark-link" href="#como-funciona">Ver como funciona <FiArrowUpRight /></a></div></div><div className="benefit-list">{hubBenefits.map((benefit) => <div key={benefit}><FiCheck /><span>{benefit}</span></div>)}</div></section>

      <section id="para-quem" className="section audience-section"><div className="section-heading-row"><div><div className="section-kicker">02 <span>Para quem é</span></div><h2>Seu momento importa.</h2></div><p>O Hub foi pensado para diferentes pontos de partida. Escolha a descrição que mais se aproxima de você.</p></div><div className="audience-grid">{hubAudiences.map((item) => <article className="audience-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#oportunidades" aria-label={`Ver oportunidades para ${item.title}`}><FiArrowUpRight /></a></article>)}</div></section>

      <section className="stats-section"><div className="stats-intro"><div className="section-kicker light">03 <span>Em movimento</span></div><h2>Desenvolvimento começa quando a oportunidade chega até você.</h2></div><div className="stats-grid"><div><strong>6</strong><span>programas de inovação</span></div><div><strong>4</strong><span>frentes de atendimento</span></div><div><strong>1</strong><span>Hub para conectar tudo</span></div><div><strong>∞</strong><span>possibilidades de caminho</span></div></div></section>

      <section id="como-funciona" className="section journey-section"><div className="section-heading-row"><div><div className="section-kicker">04 <span>Como funciona</span></div><h2>Do interesse à ação.</h2></div><p>Uma experiência direta para você sair da dúvida e chegar ao canal certo.</p></div><div className="journey-grid">{hubStages.map((stage, index) => <article key={stage.title}><span className="stage-number">0{index + 1}</span><div><h3>{stage.title}</h3><p>{stage.text}</p></div><FiArrowDownRight /></article>)}</div></section>

      <section id="oportunidades" className="opportunities-section"><div className="opportunities-content"><div className="section-kicker light">05 <span>Oportunidades</span></div><h2>O que você quer colocar em movimento?</h2><p>Escolha uma porta de entrada e encontre informações, serviços e programas para seguir em frente.</p><div className="opportunity-links">{hubOpportunityLinks.map((link) => <a key={link.label} href={link.href}><span><FiArrowUpRight /> {link.label}</span><FiArrowUpRight /></a>)}</div></div><div className="opportunity-aside"><Image src="/images/sobre-pessoa-inovacao-transparent.png" alt="Pessoa representando inovação e desenvolvimento" width={420} height={500} /></div></section>

      <section id="faq" className="section faq-section"><div className="section-heading-row"><div><div className="section-kicker">06 <span>Perguntas frequentes</span></div><h2>Antes de começar.</h2></div><p>Se ainda ficou alguma dúvida, comece por aqui.</p></div><div className="faq-list">{hubFaqs.map(([question, answer]) => <details key={question}><summary>{question}<FiChevronDown /></summary><p>{answer}</p></details>)}</div></section>
      <footer className="hub-footer"><div className="footer-brand"><Image src="/icons/logo.png" alt="Logo CiTI-DE" width={44} height={44} /><span><strong>CiTI<span>-DE</span> Hub</strong><small>Inovação que aproxima.</small></span></div><p>Ciência, Tecnologia, Inovação e Desenvolvimento Econômico<br />Patos · Paraíba</p><div className="footer-links"><a href="#inicio">Voltar ao início <FiArrowUpRight /></a><a href="https://citide.patos.pb.gov.br/">Portal oficial <FiArrowUpRight /></a></div></footer>
    </main>
  );
}
