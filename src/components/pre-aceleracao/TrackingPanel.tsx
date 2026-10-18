"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { findSubmission, statusLabels, type PreAccelerationSubmission } from "@/lib/pre-acceleration";

export default function TrackingPanel() {
  const [protocol, setProtocol] = useState(() => typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("protocolo") ?? "");
  const [email, setEmail] = useState("");
  const [submission, setSubmission] = useState<PreAccelerationSubmission | null>(null);
  const [searched, setSearched] = useState(false);

  function search(event: FormEvent) {
    event.preventDefault();
    setSubmission(findSubmission(protocol, email) ?? null);
    setSearched(true);
  }

  return <main className="preaccel-utility-page"><div className="preaccel-container"><Link href="/programas/pre-aceleracao-startups" className="preaccel-back utility-back">← Voltar para o projeto</Link><div className="preaccel-utility-header"><p className="preaccel-eyebrow">Área do participante</p><h1>Acompanhe sua inscrição.</h1><p>Informe o protocolo gerado no envio e o mesmo e-mail usado na inscrição.</p></div><form className="preaccel-form-card preaccel-track-form" onSubmit={search}><div className="preaccel-fields-grid"><label className="preaccel-field"><span>Protocolo *</span><input value={protocol} onChange={(event) => setProtocol(event.target.value)} placeholder="PPA-2026-ABC123" required /></label><label className="preaccel-field"><span>E-mail da inscrição *</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@exemplo.com" required /></label></div><button type="submit" className="preaccel-button preaccel-button-primary"><FiSearch /> Consultar status</button><p className="preaccel-form-note">Nesta primeira versão, a consulta funciona no mesmo navegador em que a inscrição foi registrada.</p></form>{searched && (submission ? <section className="preaccel-status-card"><div><span className="preaccel-status-dot" /><p className="preaccel-eyebrow">Status atual</p><h2>{statusLabels[submission.status]}</h2><p>Protocolo <strong>{submission.protocol}</strong> · enviado em {new Date(submission.submittedAt).toLocaleDateString("pt-BR")}</p></div><div className="preaccel-status-steps"><span className="done">Inscrição enviada</span><span className={submission.status !== "recebida" ? "done" : "current"}>Análise da equipe</span><span className={submission.status === "selecionada" ? "done" : "pending"}>Próximo contato</span></div></section> : <section className="preaccel-not-found"><h2>Não encontramos essa inscrição.</h2><p>Confira o protocolo e use o mesmo e-mail informado no formulário. Se ainda precisar de ajuda, entre em contato com a CiTI-DE.</p><Link href="mailto:citi-de@patos.pb.gov.br" className="preaccel-text-link">Enviar e-mail <FiArrowLeft /></Link></section>)}</div></main>;
}
