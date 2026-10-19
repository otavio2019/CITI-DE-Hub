import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { CiTiDeSections } from "@/components/citide/CiTiDeSections";

export default function Home() {
  return (
    <main id="inicio" className="citide-shell">
      <div className="announcement"><span>CiTI-DE</span><p>Ciência, tecnologia, inovação e desenvolvimento em Patos.</p><a href="#acesso-rapido">Conheça os caminhos <FiArrowUpRight /></a></div>
      <header className="hub-header">
        <a className="brand" href="#inicio" aria-label="CiTI-DE início"><Image src="/icons/logo.png" alt="Logo CiTI-DE" width={48} height={48} priority /><span><strong>CiTI<span>-DE</span></strong><small>Ciência · tecnologia · inovação</small></span></a>
        <nav aria-label="Navegação principal" className="hub-nav"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#programas">Programas</a><a href="#contato">Contato</a></nav>
        <a className="header-cta" href="https://citide.patos.pb.gov.br/">Portal oficial <FiArrowUpRight /></a>
      </header>
      <section className="hero-section"><div className="hero-copy"><p className="eyebrow light">Ciência · tecnologia · inovação · desenvolvimento</p><h1>Ideias que encontram <em>caminho.</em></h1><p className="hero-lead">A CiTI-DE conecta pessoas, negócios e instituições às oportunidades que fazem Patos avançar.</p><div className="hero-actions"><a className="button button-yellow" href="#acesso-rapido">Encontrar uma oportunidade <FiArrowUpRight /></a><a className="text-link light-link" href="#sobre">Conhecer a CiTI-DE <FiArrowDownRight /></a></div></div><div className="hero-art" aria-hidden="true"><Image src="/images/sol 2.png" alt="" width={1278} height={1230} priority className="hero-sun" /></div><div className="hero-bottom"><span className="hero-scroll">Deslize para explorar <FiArrowDownRight /></span></div></section>
      <CiTiDeSections />
    </main>
  );
}
