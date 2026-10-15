import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HighlightsStripSection } from "@/components/sections/HighlightsStripSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { PortalFooter } from "@/components/sections/PortalFooter";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PatosPixelSection } from "@/components/sections/PatosPixelSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";

/* -------------------------------------------------------------------------- */
/* Ordem das seções da página (após o hero)                                   */
/* 1. Destaques                                                               */
/* 2. Sobre                                                                   */
/* 3. Acesso rápido                                                           */
/* 4. Patos pixel / novidades / públicos                                      */
/* 5. Serviços / programas / FAQ / contato / stats / rodapé                   */
/* -------------------------------------------------------------------------- */
export function PortalSections() {
	return (
		<div className="portal-content-surface">
			{/* 1) Destaques — vem antes do Sobre */}
			<HighlightsStripSection />

			{/* 2) Sobre a secretaria */}
			<AboutSection />

			{/* 3) Atalhos de ação rápida */}
			<QuickAccessSection />

			{/* 4) Identidade local e notícias */}
			<PatosPixelSection />
			<NewsSection />

			{/* 5) Jornada por público */}
			<AudienceSection />

			{/* 6) Serviços e programas */}
			<ServicesSection />
			<ProgramsSection />

			{/* 7) Dúvidas e contato */}
			<FaqSection />
			<ContactSection />

			{/* 8) Números e rodapé */}
			<StatsSection />
			<PortalFooter />
		</div>
	);
}
