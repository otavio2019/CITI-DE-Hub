export type PreAccelerationStatus = "recebida" | "em_analise" | "selecionada" | "lista_de_espera" | "nao_selecionada";

export type PreAccelerationSubmission = {
  protocol: string;
  submittedAt: string;
  status: PreAccelerationStatus;
  teamName: string;
  responsible: string;
  email: string;
  whatsapp: string;
  city: string;
  stage: string;
  problem: string;
  solution: string;
  customer: string;
  businessModel: string;
  team: string;
  link: string;
  consent: boolean;
};

export const preAccelerationStages = [
  "Ideia ou validação inicial",
  "Protótipo ou MVP em desenvolvimento",
  "MVP testado com primeiros usuários",
  "Negócio em operação",
] as const;

const STORAGE_KEY = "citi-de-pre-acceleration-submissions";

export function createProtocol() {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PPA-2026-${suffix}`;
}

export function saveSubmission(submission: PreAccelerationSubmission) {
  const current = readSubmissions();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([submission, ...current]));
}

export function readSubmissions(): PreAccelerationSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) as PreAccelerationSubmission[] : [];
  } catch {
    return [];
  }
}

export function findSubmission(protocol: string, email: string) {
  return readSubmissions().find((item) => item.protocol.toLowerCase() === protocol.trim().toLowerCase() && item.email.toLowerCase() === email.trim().toLowerCase());
}

export const statusLabels: Record<PreAccelerationStatus, string> = {
  recebida: "Inscrição recebida",
  em_analise: "Em análise",
  selecionada: "Selecionada",
  lista_de_espera: "Lista de espera",
  nao_selecionada: "Não selecionada",
};
