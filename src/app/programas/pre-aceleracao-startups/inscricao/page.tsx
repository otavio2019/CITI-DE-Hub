import Link from "next/link";
import PreAccelerationForm from "@/components/pre-aceleracao/PreAccelerationForm";

export default function PreAccelerationRegistrationPage() {
  return <main className="preaccel-utility-page"><div className="preaccel-container"><Link href="/programas/pre-aceleracao-startups" className="preaccel-back utility-back">← Voltar para o projeto</Link><div className="preaccel-utility-header"><p className="preaccel-eyebrow">Projeto Piloto de Pré-Aceleração</p><h1>Conte para a gente o que vocês estão construindo.</h1><p>A inscrição leva alguns minutos. Não é preciso ter todas as respostas prontas: queremos entender o momento atual para orientar a próxima etapa.</p></div><PreAccelerationForm /></div></main>;
}
