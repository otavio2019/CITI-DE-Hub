"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiSave } from "react-icons/fi";
import { createProtocol, preAccelerationStages, saveSubmission, type PreAccelerationSubmission } from "@/lib/pre-acceleration";

const initialForm = {
  teamName: "", responsible: "", email: "", whatsapp: "", city: "Patos - PB", stage: "",
  problem: "", solution: "", customer: "", businessModel: "", team: "", link: "", consent: false,
};

type FormData = typeof initialForm;

export default function PreAccelerationForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [protocol, setProtocol] = useState("");

  const update = (field: keyof FormData, value: string | boolean) => setForm((current) => ({ ...current, [field]: value }));

  function validateStep() {
    const nextErrors: string[] = [];
    if (step === 1) {
      if (!form.teamName.trim()) nextErrors.push("Informe o nome da startup ou projeto.");
      if (!form.responsible.trim()) nextErrors.push("Informe a pessoa responsável.");
      if (!form.email.includes("@")) nextErrors.push("Informe um e-mail válido.");
      if (!form.whatsapp.trim()) nextErrors.push("Informe um telefone ou WhatsApp.");
      if (!form.stage) nextErrors.push("Selecione o estágio atual.");
    }
    if (step === 2) {
      if (form.problem.trim().length < 20) nextErrors.push("Descreva o problema com pelo menos 20 caracteres.");
      if (form.solution.trim().length < 20) nextErrors.push("Descreva a solução com pelo menos 20 caracteres.");
      if (form.customer.trim().length < 10) nextErrors.push("Explique quem é o cliente ou usuário.");
    }
    if (step === 3 && !form.consent) nextErrors.push("É necessário autorizar o uso dos dados para análise da inscrição.");
    setErrors(nextErrors);
    return nextErrors.length === 0;
  }

  function nextStep() {
    if (validateStep()) setStep((current) => Math.min(3, current + 1));
  }

  function previousStep() {
    setErrors([]);
    setStep((current) => Math.max(1, current - 1));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!validateStep()) return;
    const submission: PreAccelerationSubmission = { ...form, protocol: createProtocol(), submittedAt: new Date().toISOString(), status: "recebida" };
    saveSubmission(submission);
    setProtocol(submission.protocol);
  }

  if (protocol) {
    return <section className="preaccel-form-card preaccel-success-card"><div className="preaccel-success-icon"><FiCheck /></div><p className="preaccel-eyebrow">Inscrição registrada</p><h2>Seu próximo passo já tem protocolo.</h2><p>Guarde este código para acompanhar o andamento da inscrição. Nesta primeira versão, os dados ficam salvos neste navegador.</p><strong className="preaccel-protocol">{protocol}</strong><div className="preaccel-form-actions"><Link href={`/programas/pre-aceleracao-startups/acompanhar?protocolo=${protocol}`} className="preaccel-button preaccel-button-primary">Acompanhar inscrição <FiArrowRight /></Link><Link href="/programas/pre-aceleracao-startups" className="preaccel-button preaccel-button-secondary">Voltar ao projeto</Link></div></section>;
  }

  return <form className="preaccel-form-card" onSubmit={submit}>
    <div className="preaccel-form-progress"><div><span className={step >= 1 ? "active" : ""}>01</span><small>Equipe</small></div><i /><div><span className={step >= 2 ? "active" : ""}>02</span><small>Negócio</small></div><i /><div><span className={step >= 3 ? "active" : ""}>03</span><small>Revisão</small></div></div>
    {errors.length > 0 && <div className="preaccel-form-errors" role="alert"><strong>Confira estes pontos:</strong><ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul></div>}
    {step === 1 && <fieldset><legend>Sobre a equipe</legend><p className="preaccel-field-intro">Comece com as informações básicas da startup ou projeto.</p><div className="preaccel-fields-grid"><Field label="Nome da startup ou projeto *" value={form.teamName} onChange={(value) => update("teamName", value)} placeholder="Ex.: Sertão Solar" /><Field label="Pessoa responsável *" value={form.responsible} onChange={(value) => update("responsible", value)} placeholder="Nome completo" /><Field label="E-mail *" type="email" value={form.email} onChange={(value) => update("email", value)} placeholder="voce@exemplo.com" /><Field label="WhatsApp *" value={form.whatsapp} onChange={(value) => update("whatsapp", value)} placeholder="(83) 99999-9999" /><Field label="Cidade / estado" value={form.city} onChange={(value) => update("city", value)} placeholder="Patos - PB" /><label className="preaccel-field"><span>Em que estágio está? *</span><select value={form.stage} onChange={(event) => update("stage", event.target.value)}><option value="">Selecione</option>{preAccelerationStages.map((stage) => <option key={stage}>{stage}</option>)}</select></label></div></fieldset>}
    {step === 2 && <fieldset><legend>Sobre o negócio</legend><p className="preaccel-field-intro">Não precisa estar tudo pronto. Queremos entender o momento atual e os próximos desafios.</p><div className="preaccel-fields-stack"><TextArea label="Qual problema vocês querem resolver? *" value={form.problem} onChange={(value) => update("problem", value)} placeholder="Conte quem enfrenta o problema e por que ele importa." /><TextArea label="Qual é a solução? *" value={form.solution} onChange={(value) => update("solution", value)} placeholder="Explique o produto, serviço ou tecnologia de forma simples." /><TextArea label="Quem é o cliente ou usuário? *" value={form.customer} onChange={(value) => update("customer", value)} placeholder="Descreva para quem a solução é feita." /><TextArea label="Como o negócio pretende gerar valor?" value={form.businessModel} onChange={(value) => update("businessModel", value)} placeholder="Fale sobre modelo de negócio, receita ou sustentabilidade." /><TextArea label="Quem faz parte da equipe?" value={form.team} onChange={(value) => update("team", value)} placeholder="Conte brevemente as funções e experiências da equipe." /><Field label="Link de apresentação, site ou rede social" value={form.link} onChange={(value) => update("link", value)} placeholder="https://..." /></div></fieldset>}
    {step === 3 && <fieldset><legend>Revise e envie</legend><p className="preaccel-field-intro">Confira os dados antes de registrar sua inscrição.</p><div className="preaccel-review-grid"><Review label="Projeto" value={form.teamName} /><Review label="Responsável" value={form.responsible} /><Review label="Contato" value={`${form.email} · ${form.whatsapp}`} /><Review label="Estágio" value={form.stage} /><Review label="Problema" value={form.problem} /><Review label="Solução" value={form.solution} /></div><label className="preaccel-consent"><input type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} /><span>Autorizo o uso dessas informações pela equipe do projeto para análise da inscrição e contato sobre a pré-aceleração.</span></label></fieldset>}
    <div className="preaccel-form-actions">{step > 1 && <button type="button" className="preaccel-button preaccel-button-secondary" onClick={previousStep}><FiArrowLeft /> Voltar</button>}{step < 3 ? <button type="button" className="preaccel-button preaccel-button-primary" onClick={nextStep}>Continuar <FiArrowRight /></button> : <button type="submit" className="preaccel-button preaccel-button-primary"><FiSave /> Registrar inscrição</button>}</div>
    <p className="preaccel-form-note">MVP local: a inscrição será salva neste navegador. A integração com banco de dados e notificações será conectada em uma próxima etapa.</p>
  </form>;
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string }) { return <label className="preaccel-field"><span>{label}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>; }
function TextArea({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) { return <label className="preaccel-field"><span>{label}</span><textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={4} /></label>; }
function Review({ label, value }: { label: string; value: string }) { return <div className="preaccel-review-item"><small>{label}</small><p>{value || "Não informado"}</p></div>; }
