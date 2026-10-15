import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pixelPlaces = [
	{
		title: "Cruz da Menina",
		image: "/images/patos-pixel/cruz-da-menina.png",
		alt: "Cruz e capela da Cruz da Menina em pixel art, ao pôr do sol no sertão",
	},
	{
		title: "Catedral Nossa Senhora da Guia",
		image: "/images/patos-pixel/catedral-nossa-senhora-da-guia.png",
		alt: "Catedral Nossa Senhora da Guia em pixel art",
	},
	{
		title: "Igreja Nossa Senhora da Conceição",
		image: "/images/patos-pixel/igreja-nossa-senhora-da-conceicao.png",
		alt: "Igreja Nossa Senhora da Conceição em pixel art",
	},
	{
		title: "Mercado Público",
		image: "/images/patos-pixel/mercado-publico.png",
		alt: "Mercado Público de Patos em pixel art",
	},
];

export function PatosPixelSection() {
	return (
		<section id="patos-em-pixels" className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(3,40,66,0.45),rgba(3,40,66,0.12))] px-5 py-16 text-white sm:py-20">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<SectionHeader eyebrow="Identidade local" title="Patos em pixels" />
						<p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">A tecnologia também conta histórias. Conheça lugares que fazem parte da identidade de Patos em uma linguagem visual inspirada no próprio universo do CiTI-DE.</p>
					</div>
					<span className="w-fit rounded-full border border-[var(--citi-yellow)]/60 bg-[var(--citi-yellow)]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--citi-yellow-soft)]">Cultura + tecnologia</span>
				</div>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{pixelPlaces.map((place) => (
						<article key={place.title} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-sm transition hover:-translate-y-1 hover:border-[var(--citi-yellow)] hover:bg-white/15">
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image src={place.image} alt={place.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
							</div>
							<h3 className="px-4 py-4 text-lg font-bold text-white">{place.title}</h3>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default PatosPixelSection;

