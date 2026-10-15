"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationLinks, programLinks, serviceLinks } from "@/lib/site-content";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

/* -------------------------------------------------------------------------- */
/* Tipos auxiliares                                                           */
/* -------------------------------------------------------------------------- */
type NavItem = { label: string; href: string };

/* -------------------------------------------------------------------------- */
/* Dropdown reutilizável (desktop)                                            */
/* -------------------------------------------------------------------------- */
function DesktopDropdown({
	label,
	open,
	onToggle,
	items,
	align = "left",
}: {
	label: string;
	open: boolean;
	onToggle: () => void;
	items: NavItem[];
	align?: "left" | "center";
}) {
	const panelClass =
		align === "center"
			? "absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2"
			: "absolute left-0 top-full mt-4 w-56";

	return (
		<li className="relative">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={open}
				className="flex items-center gap-1 transition hover:text-[var(--citi-yellow)]"
			>
				{label} {open ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
			</button>

			{open && (
				<div className={`${panelClass} rounded-xl border border-[var(--citi-blue-soft)] bg-[var(--citi-surface)] p-2 text-[var(--citi-text-muted)] shadow-xl`}>
					{items.map((item) => (
						<a
							key={`${item.href}-${item.label}`}
							href={item.href}
							className="block rounded-lg px-4 py-3 transition hover:bg-[var(--citi-blue-soft)] hover:text-[var(--citi-navy)]"
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Submenu reutilizável (mobile)                                              */
/* -------------------------------------------------------------------------- */
function MobileSubmenu({
	label,
	open,
	onToggle,
	items,
	onNavigate,
}: {
	label: string;
	open: boolean;
	onToggle: () => void;
	items: NavItem[];
	onNavigate: () => void;
}) {
	return (
		<li>
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={open}
				className="flex w-full items-center justify-between rounded px-3 py-3 text-left transition hover:bg-white/10"
			>
				<span>{label}</span>
				{open ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
			</button>

			{open && (
				<ul className="mt-1 border-l border-white/20 pl-3 text-sm text-white/80">
					{items.map((item) => (
						<li key={`${item.href}-${item.label}`}>
							<a
								href={item.href}
								onClick={onNavigate}
								className="block rounded px-3 py-3 hover:bg-white/10 hover:text-white"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */
export default function Header() {
	const [menuAberto, setMenuAberto] = useState(false);
	const [programasAberto, setProgramasAberto] = useState(false);
	const [servicosAberto, setServicosAberto] = useState(false);

	function fecharMenus() {
		setMenuAberto(false);
		setProgramasAberto(false);
		setServicosAberto(false);
	}

	// Escape fecha qualquer menu aberto.
	useEffect(() => {
		function handleEscape(event: KeyboardEvent) {
			if (event.key === "Escape") fecharMenus();
		}

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	// Ao navegar por link do desktop dropdown, fecha os menus.
	useEffect(() => {
		if (!programasAberto && !servicosAberto) return;

		function handleClick(event: MouseEvent) {
			const target = event.target as HTMLElement | null;
			if (target?.closest("a")) fecharMenus();
		}

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, [programasAberto, servicosAberto]);

	return (
		<header className="relative z-20 border-b border-white/15 bg-[linear-gradient(to_right,#0867A8_22%,#032842_69%)] px-5 py-5 text-white md:px-6 md:py-6">
			<div className="relative mx-auto flex max-w-7xl items-center gap-3 md:gap-6">

				{/* Marca */}
				<a href="#inicio" className="flex shrink-0 items-center gap-3 md:gap-4" aria-label="CiTI-DE início">
					<Image
						src="/icons/logo.png"
						alt="Logo CiTI-DE"
						width={52}
						height={52}
						className="h-12 w-12 object-contain md:h-14 md:w-14"
					/>
					<span className="flex items-center gap-1 text-[1.8rem] font-bold tracking-tight md:text-[2.2rem]">
						<span className="font-[family-name:var(--font-joan)] text-white">CiTI</span>
						<span className="font-[family-name:var(--font-joan)] text-[var(--citi-yellow)]">-DE</span>
						<span className="relative -top-1 hidden text-[9px] font-bold leading-none text-white/75 sm:inline">
							Patos - PB
						</span>
					</span>
				</a>

				{/* Navegação desktop */}
				<nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Navegação principal">
					<ul className="flex items-center gap-7 text-sm md:text-[0.95rem]">
						<DesktopDropdown
							label="Programas"
							open={programasAberto}
							onToggle={() => {
								setProgramasAberto((value) => !value);
								setServicosAberto(false);
							}}
							items={programLinks}
						/>
						<DesktopDropdown
							label="Serviços"
							open={servicosAberto}
							onToggle={() => {
								setServicosAberto((value) => !value);
								setProgramasAberto(false);
							}}
							items={serviceLinks}
							align="center"
						/>
						{navigationLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href} className="transition hover:text-[var(--citi-yellow)]">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Acesso oficial */}
				<a
					href="https://citide.patos.pb.gov.br/painel/login"
					className="relative z-10 ml-auto hidden shrink-0 items-center gap-1 rounded-full border border-[#FFB800]/70 px-2.5 py-1.5 text-xs font-medium transition hover:bg-[#FFB800] hover:text-[#032842] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800] sm:inline-flex md:px-5 md:py-2.5 md:text-sm"
				>
					Acesso Portal oficial <FiArrowUpRight aria-hidden="true" />
				</a>

				{/* Botão mobile */}
				<button
					type="button"
					className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/40 md:hidden"
					aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
					aria-expanded={menuAberto}
					onClick={() => setMenuAberto((value) => !value)}
				>
					{menuAberto ? <FiX aria-hidden="true" size={21} /> : <FiMenu aria-hidden="true" size={21} />}
				</button>

				{/* Menu mobile */}
				{menuAberto && (
					<nav
						className="absolute right-0 top-full mt-2 w-[min(14rem,calc(100vw-2rem))] rounded-lg border border-white/15 bg-[var(--citi-navy)] p-3 shadow-xl md:hidden"
						aria-label="Menu mobile"
					>
						<ul className="flex flex-col text-base">
							<MobileSubmenu
								label="Programas"
								open={programasAberto}
								onToggle={() => setProgramasAberto((value) => !value)}
								items={programLinks}
								onNavigate={fecharMenus}
							/>
							<MobileSubmenu
								label="Serviços"
								open={servicosAberto}
								onToggle={() => setServicosAberto((value) => !value)}
								items={serviceLinks}
								onNavigate={fecharMenus}
							/>
							{navigationLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										onClick={fecharMenus}
										className="block rounded px-3 py-3 transition hover:bg-white/10"
									>
										{link.label}
									</a>
								</li>
							))}
							<li>
								<a
									href="https://citide.patos.pb.gov.br/painel/login"
									onClick={fecharMenus}
									className="mt-2 flex items-center justify-between rounded border-t border-white/15 px-3 py-3 font-medium text-[var(--citi-yellow)]"
								>
									Acesso Portal oficial <FiArrowUpRight aria-hidden="true" />
								</a>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
