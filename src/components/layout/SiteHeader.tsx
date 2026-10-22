"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigationLinks, officialLinks, programLinks, serviceLinks } from "@/lib/hub-content";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

type NavItem = { label: string; href: string };

type DropdownProps = {
	label: string;
	items: NavItem[];
	open: boolean;
	onToggle: () => void;
};

function DesktopDropdown({ label, items, open, onToggle }: DropdownProps) {
	return (
		<li className="relative">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={open}
				aria-haspopup="true"
				className={`flex items-center gap-1 rounded-xl px-3 py-3 transition ${
					open
						? "bg-[var(--citi-background)] text-[var(--citi-blue)]"
						: "hover:bg-[var(--citi-background)] hover:text-[var(--citi-blue)]"
				}`}
			>
				{label}
				{open ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
			</button>
			{open && (
				<div
					className="absolute left-1/2 top-full z-30 mt-2 max-h-[min(70vh,36rem)] w-[min(21rem,calc(100vw-2rem))] -translate-x-1/2 overflow-y-auto rounded-xl border border-[var(--line)] bg-white p-2 text-left text-[var(--citi-text-muted)] shadow-[0_18px_45px_rgba(3,40,66,0.18)]"
					role="menu"
				>
					{items.map((item) => (
						<a
							key={`${item.href}-${item.label}`}
							href={item.href}
							role="menuitem"
							className="block rounded-lg px-4 py-3 text-[13px] leading-5 transition hover:bg-[var(--citi-blue-soft)] hover:text-[var(--citi-blue)]"
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</li>
	);
}

function MobileDropdown({ label, items, open, onToggle, onNavigate }: DropdownProps & { onNavigate: () => void }) {
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
								className="block rounded px-3 py-3 leading-5 transition hover:bg-white/10 hover:text-white"
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

export function SiteHeader() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [programsOpen, setProgramsOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	function closeMenus() {
		setMobileOpen(false);
		setProgramsOpen(false);
		setServicesOpen(false);
	}

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") closeMenus();
		}

		function handlePointerDown(event: PointerEvent) {
			if (!headerRef.current?.contains(event.target as Node)) closeMenus();
		}

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("pointerdown", handlePointerDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, []);

	function togglePrograms() {
		setProgramsOpen((value) => !value);
		setServicesOpen(false);
	}

	function toggleServices() {
		setServicesOpen((value) => !value);
		setProgramsOpen(false);
	}

	return (
		<header ref={headerRef} className="hub-header">
			<a className="brand" href="#inicio" aria-label="CiTI-DE início">
				<Image src="/icons/logo.png" alt="Logo CiTI-DE" width={48} height={48} priority />
				<span>
					<strong>
						CiTI<span>-DE</span>
					</strong>
					<small>Ciência · tecnologia · inovação</small>
				</span>
			</a>

			<nav aria-label="Navegação principal" className="hub-nav">
				<ul className="flex items-center gap-1">
					<DesktopDropdown label="Programas" items={programLinks} open={programsOpen} onToggle={togglePrograms} />
					<DesktopDropdown label="Serviços" items={serviceLinks} open={servicesOpen} onToggle={toggleServices} />
					<li>
						<a href={officialLinks.vitrineStartups} className="rounded-xl px-3 py-3 transition hover:bg-[var(--citi-background)] hover:text-[var(--citi-blue)]">
							Startups
						</a>
					</li>
					{navigationLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href} className="rounded-xl px-3 py-3 transition hover:bg-[var(--citi-background)] hover:text-[var(--citi-blue)]">
								{link.label}
							</a>
						</li>
					))}
					<li>
						<a href="#contato" className="rounded-xl px-3 py-3 transition hover:bg-[var(--citi-background)] hover:text-[var(--citi-blue)]">
							Contato
						</a>
					</li>
				</ul>
			</nav>

			<a className="header-cta" href={`${officialLinks.portal}painel`}>
				Portal oficial <FiArrowUpRight aria-hidden="true" />
			</a>

			<button
				type="button"
				className="site-menu-toggle"
				aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
				aria-expanded={mobileOpen}
				onClick={() => setMobileOpen((value) => !value)}
			>
				{mobileOpen ? <FiX aria-hidden="true" size={21} /> : <FiMenu aria-hidden="true" size={21} />}
			</button>

			{mobileOpen && (
				<nav className="site-mobile-nav" aria-label="Menu mobile">
					<ul>
						<MobileDropdown label="Programas" items={programLinks} open={programsOpen} onToggle={togglePrograms} onNavigate={closeMenus} />
						<MobileDropdown label="Serviços" items={serviceLinks} open={servicesOpen} onToggle={toggleServices} onNavigate={closeMenus} />
						<li>
							<a href={officialLinks.vitrineStartups} onClick={closeMenus}>Startups</a>
						</li>
						{navigationLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href} onClick={closeMenus}>{link.label}</a>
							</li>
						))}
						<li><a href="#contato" onClick={closeMenus}>Contato</a></li>
						<li>
							<a className="site-mobile-cta" href={`${officialLinks.portal}painel`} onClick={closeMenus}>
								Portal oficial <FiArrowUpRight aria-hidden="true" />
							</a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
