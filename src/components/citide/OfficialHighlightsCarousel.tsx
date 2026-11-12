"use client";

import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { officialHighlights } from "@/lib/hub-content";

export function OfficialHighlightsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;

		const timer = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % officialHighlights.length);
		}, 6500);

		return () => window.clearInterval(timer);
	}, [isPaused]);

	const showPrevious = () => {
		setActiveIndex((current) => (current - 1 + officialHighlights.length) % officialHighlights.length);
	};

	const showNext = () => {
		setActiveIndex((current) => (current + 1) % officialHighlights.length);
	};

	return (
		<section
			id="noticias"
			className="citide-section citide-news-section"
			aria-labelledby="noticias-titulo"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onFocus={() => setIsPaused(true)}
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
					setIsPaused(false);
				}
			}}
		>
			<div className="citide-container">
				<div className="citide-news-heading">
					<div className="citide-section-heading">
						<span>01 · Notícias e destaques</span>
						<h2 id="noticias-titulo">O que está acontecendo no ecossistema de Patos.</h2>
					</div>
					<div className="citide-news-controls">
						<p>Conteúdos publicados no portal oficial da CiTI-DE.</p>
						<div className="citide-carousel-actions">
							<button type="button" onClick={showPrevious} aria-label="Destaque anterior">
								<FiArrowLeft aria-hidden="true" />
							</button>
							<button type="button" onClick={showNext} aria-label="Próximo destaque">
								<FiArrowRight aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>

				<div className="citide-news-viewport" aria-live="polite">
					<div
						className="citide-news-track"
						style={{ transform: `translateX(-${activeIndex * 100}%)` }}
					>
						{officialHighlights.map((highlight) => (
							<article className="citide-news-card" key={highlight.id}>
								<div>
									<span className="citide-news-category">{highlight.category}</span>
									<h3>{highlight.title}</h3>
									<p>{highlight.summary}</p>
								</div>
								<a href={highlight.href} target="_blank" rel="noreferrer">
									Acessar conteúdo oficial <FiArrowUpRight aria-hidden="true" />
								</a>
							</article>
						))}
					</div>
				</div>

				<div className="citide-news-footer">
					<div className="citide-carousel-dots" aria-label="Selecionar destaque">
						{officialHighlights.map((highlight, index) => (
							<button
								type="button"
								key={highlight.id}
								className={index === activeIndex ? "is-active" : ""}
								onClick={() => setActiveIndex(index)}
								aria-label={`Ir para o destaque ${index + 1}: ${highlight.title}`}
								aria-current={index === activeIndex ? "true" : undefined}
							/>
						))}
					</div>
					<span>{isPaused ? "Carrossel pausado" : "Avanço automático"}</span>
				</div>
			</div>
		</section>
	);
}
