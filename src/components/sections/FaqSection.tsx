import { faqItems } from "@/lib/site-content";

export function FaqSection() {
	return (
		<section id="faq" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-4xl">
				<p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">Dúvidas frequentes</p>
				<h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Como podemos ajudar?</h2>
				<div className="mt-8 divide-y divide-white/15 rounded-2xl border border-white/15 bg-white/10 px-6">
					{faqItems.map((item) => <details key={item.question} className="group py-5">
						<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--citi-yellow)]">{item.question}<span className="text-2xl text-[var(--citi-yellow)] transition group-open:rotate-45" aria-hidden="true">+</span></summary>
						<p className="max-w-3xl pt-4 leading-7 text-white/75">{item.answer}</p>
					</details>)}
				</div>
			</div>
		</section>
	);
}