"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoStorefrontOutline, IoLeafOutline, IoBookOutline, IoGridOutline } from "react-icons/io5";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  from: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "Home",       href: "/",            icon: <IoHomeOutline />,       from: "#6B3A2A", to: "#C07B3E" },
  { label: "Productos",  href: "/productos",   icon: <IoStorefrontOutline />, from: "#56CCF2", to: "#2F80ED" },
  { label: "Beneficios", href: "/comparativa", icon: <IoLeafOutline />,       from: "#80FF72", to: "#7EE8FA" },
  { label: "Blog",        href: "/blogs",       icon: <IoBookOutline />,  from: "#FF9966", to: "#FF5E62" },
  { label: "Categorías", href: "/categorias",  icon: <IoGridOutline />,  from: "#f7971e", to: "#ffd200" },
];

function GradientNavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      style={{ "--gf": item.from, "--gt": item.to } as React.CSSProperties}
      className="relative flex items-center justify-center cursor-pointer rounded-full bg-white shadow-md px-5 h-[44px] group overflow-hidden transition-shadow duration-500"
    >
      {/* Gradient fill */}
      <span
        className={`absolute inset-0 rounded-full transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        style={{ background: "linear-gradient(45deg, var(--gf), var(--gt))" }}
      />
      {/* Glow */}
      <span
        className={`absolute top-[8px] inset-x-0 h-full rounded-full -z-10 blur-[15px] transition-opacity duration-500
          ${active ? "opacity-50" : "opacity-0 group-hover:opacity-50"}`}
        style={{ background: "linear-gradient(45deg, var(--gf), var(--gt))" }}
      />
      {/* Label */}
      <span className={`relative z-10 text-xs font-semibold uppercase tracking-wide transition-colors duration-300
        ${active ? "text-white" : "text-gray-500 group-hover:text-white"}`}>
        {item.label}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) { setOpacity(1); return; }
    const onScroll = () => {
      const y = window.scrollY;
      const next = y <= 60 ? 1 : y >= 280 ? 0 : 1 - (y - 60) / 220;
      setOpacity(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className="fixed top-4 left-4 right-4 z-50 transition-opacity duration-150"
      style={{ opacity, pointerEvents: opacity < 0.05 ? "none" : "auto" }}
    >
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl"
        style={{
          backgroundColor: "rgba(255,255,255,1)",
          backdropFilter: 'url("#liquid-glass-filter") blur(16px)',
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(0,0,0,0.9), inset -3px -3px 0.5px -3px rgba(0,0,0,0.85), inset 1px 1px 1px -0.5px rgba(0,0,0,0.6), inset -1px -1px 1px -0.5px rgba(0,0,0,0.6), inset 0 0 6px 6px rgba(0,0,0,0.12), inset 0 0 2px 2px rgba(0,0,0,0.06), 0 0 12px rgba(255,255,255,0.15)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/nauw-logo-black.png" alt="nauw." width={90} height={28} className="h-7 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.href}>
              <GradientNavLink item={item} active={pathname === item.href} />
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Abrir menú"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6H17" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10H17" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 14H17" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 px-6 py-5">
          <ul className="flex flex-col gap-4 text-sm font-medium text-[#1A1A1A]/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`hover:text-[#936037] transition-colors cursor-pointer block ${pathname === item.href ? "text-[#936037]" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/productos" onClick={() => setMenuOpen(false)} className="mt-4 block text-center text-sm font-medium text-[#936037] hover:text-[#1A1A1A] transition-colors cursor-pointer">
            Comprar ahora
          </Link>
        </div>
      )}
    </header>
  );
}
