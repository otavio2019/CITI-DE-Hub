import {
	FiBookOpen,
	FiBriefcase,
	FiFileText,
	FiGlobe,
	FiUsers,
	FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";

/* -------------------------------------------------------------------------- */
/* Ícones por área do portal                                                  */
/* -------------------------------------------------------------------------- */
export const serviceIcons = {
	cursos: FiBookOpen,
	empregos: FiBriefcase,
	"sala-empreendedor": FiBriefcase,
	artesaos: FiUsers,
	inscricoes: FiFileText,
	atendimento: FiGlobe,
} as const satisfies Record<string, IconType>;

export const programIcons = {
	inovapatos: FiGlobe,
	acelerapatos: FiBriefcase,
	proinova: FiZap,
	"selo-inovacao": FiUsers,
	"empregos-programa": FiBriefcase,
	picti: FiFileText,
} as const satisfies Record<string, IconType>;

export const quickAccessIcons = {
	curso: FiBookOpen,
	emprego: FiBriefcase,
	ideia: FiZap,
	inovapatos: FiGlobe,
	programas: FiGlobe,
	selo: FiUsers,
} as const satisfies Record<string, IconType>;

/** Resolve ícone de um mapa sem quebrar se a chave não existir. */
export function resolveIcon<T extends Record<string, IconType>>(
	map: T,
	id: string,
	fallback: IconType = FiGlobe,
): IconType {
	return map[id as keyof T] ?? fallback;
}
