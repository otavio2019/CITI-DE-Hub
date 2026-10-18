import Link from "next/link";
import { FiArrowDownRight, FiArrowUpRight, FiCheck, FiClock, FiFileText, FiUsers } from "react-icons/fi";
import type { programDetails } from "@/lib/hub-content";

type Project = typeof programDetails["pre-aceleracao-startups"];

export default function PreAccelerationLanding({ project }: { project: Project }) {
  return (
    <main className="preaccel-page">
      <section className="preaccel-hero">
        <div className="preaccel-container">
          <Link href="/#oportunidades" className="preaccel-back">← Voltar para o Hub</Link>
          <div className="preaccel-hero-grid">
            <div>
              <p className="preaccel-eyebrow">Projeto piloto · CITI-DE + Farol Digital</p>
              <h1>Prepare sua startup para o próximo estágio.</h1>
              <p className="preaccel-lead">{project.summary}</p>
              <div className="preaccel-actions">
                <Link href="/programas/pre-aceleracao-startups/inscricao" className="preaccel-button preaccel-button-primary">Quero participar <FiArrowUpRight /></Link>
                <Link href="/programas/pre-aceleracao-startups/acompanhar" className="preaccel-text-link">Acompanhar inscrição <FiArrowDownRight /></Link>
              </div>
            </div>
            <div className="preaccel-hero-card">
              <span className="preaccel-card-label">Uma jornada de 8 semanas</span>
              <strong>10</strong>
              <p>startups ou projetos inovadores poderão participar.</p>
              <div className="preaccel-card-rule" />
              <span className="preaccel-card-label">15 de outubro — 10 de dezembro de 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="preaccel-section preaccel-overview">
        <div className="preaccel-container">
          <div className="preaccel-section-heading"><span>01 · O projeto</span><h2>Da ideia ao próximo estágio.</h2></div>
          <div className="preaccel-overview-grid">
            <p className="preaccel-big-copy">Uma jornada prática para transformar diagnóstico em decisão, decisão em desenvolvimento e desenvolvimento em conexão.</p>
            <div className="preaccel-copy-stack"><p>O projeto apoia startups em estágio inicial, empreendedores, projetos acadêmicos e equipes com soluções inovadoras.</p><p>Durante o ciclo, cada participante trabalha seu problema, solução, cliente, modelo de negócio, produto ou MVP e estratégia de mercado.</p></div>
          </div>
          <div className="preaccel-fact-grid">
            <div><FiUsers /><strong>Até 10</strong><span>participantes selecionados</span></div>
            <div><FiClock /><strong>8 semanas</strong><span>de jornada prática</span></div>
            <div><FiFileText /><strong>1 Pitch Day</strong><span>para conexões e continuidade</span></div>
          </div>
        </div>
      </section>

      <section className="preaccel-section preaccel-stages">
        <div className="preaccel-container">
          <div className="preaccel-section-heading"><span>02 · A jornada</span><h2>Quatro etapas para ganhar clareza e tração.</h2></div>
          <div className="preaccel-stage-grid">
            {[
              ["01", "Seleção e diagnóstico", "Mapeamento de problema, solução, cliente, modelo de negócio, produto, mercado e desafios."],
              ["02", "Mentorias", "Orientação direcionada em negócios, produto, mercado e vendas, gestão, tecnologia e captação."],
              ["03", "Desenvolvimento do negócio", "Encontros práticos para trabalhar proposta de valor, modelo, cliente, MVP e estratégia comercial."],
              ["04", "Pitch final e conexões", "Preparação e apresentação dos negócios para empresas, ICTs, investidores e parceiros."],
            ].map(([number, title, text]) => <article key={number} className="preaccel-stage-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><FiArrowDownRight /></article>)}
          </div>
        </div>
      </section>

      <section className="preaccel-section preaccel-timeline-section">
        <div className="preaccel-container">
          <div className="preaccel-section-heading"><span>03 · Cronograma</span><h2>Um ciclo com começo, meio e Demo Day.</h2></div>
          <ol className="preaccel-timeline">{project.timeline.map((item) => <li key={item.period}><strong>{item.period}</strong><span>{item.activity}</span></li>)}</ol>
        </div>
      </section>

      <section className="preaccel-section preaccel-goals">
        <div className="preaccel-container preaccel-goals-grid"><div><div className="preaccel-section-heading"><span>04 · Ao final</span><h2>O que cada participante leva consigo.</h2></div><p className="preaccel-muted">A proposta é sair da jornada com mais maturidade, uma solução mais clara e próximos passos definidos.</p></div><ul>{project.goals.map((goal) => <li key={goal}><FiCheck />{goal}</li>)}</ul></div>
      </section>

      <section className="preaccel-cta"><div className="preaccel-container"><p className="preaccel-eyebrow">Patos + Farol Digital</p><h2>Tem uma solução para colocar em movimento?</h2><div className="preaccel-actions"><Link href="/programas/pre-aceleracao-startups/inscricao" className="preaccel-button preaccel-button-primary">Iniciar inscrição <FiArrowUpRight /></Link><a href="mailto:citi-de@patos.pb.gov.br?subject=Projeto%20Piloto%20de%20Pr%C3%A9-acelera%C3%A7%C3%A3o" className="preaccel-text-link">Falar com a CiTI-DE <FiArrowUpRight /></a></div></div></section>
    </main>
  );
}
