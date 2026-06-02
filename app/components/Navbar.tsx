"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
export default function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const start = 60;
      const end = 280;
      const y = window.scrollY;
      const next = y <= start ? 1 : y >= end ? 0 : 1 - (y - start) / (end - start);
      setOpacity(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-4 left-4 right-4 z-50 transition-opacity duration-150"
      style={{ zIndex: 50, opacity, pointerEvents: opacity < 0.05 ? "none" : "auto" }}
    >
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          backdropFilter: 'url("#liquid-glass-filter") blur(16px)',
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(0,0,0,0.9), inset -3px -3px 0.5px -3px rgba(0,0,0,0.85), inset 1px 1px 1px -0.5px rgba(0,0,0,0.6), inset -1px -1px 1px -0.5px rgba(0,0,0,0.6), inset 0 0 6px 6px rgba(0,0,0,0.12), inset 0 0 2px 2px rgba(0,0,0,0.06), 0 0 12px rgba(255,255,255,0.15)",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/nauw-logo-black.png"
            alt="nauw."
            width={90}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Desktop nav — centrado */}
        <ul className="hidden md:flex items-center gap-2 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          <li><a href="#productos" className="px-4 py-2 rounded-full bg-[#936037] text-white hover:bg-[#7a4f2d] transition-colors cursor-pointer">Productos</a></li>
          <li><a href="#beneficios" className="px-4 py-2 rounded-full bg-[#936037] text-white hover:bg-[#7a4f2d] transition-colors cursor-pointer">Beneficios</a></li>
          <li><a href="#nosotros" className="px-4 py-2 rounded-full bg-[#936037] text-white hover:bg-[#7a4f2d] transition-colors cursor-pointer">Nosotros</a></li>
        </ul>


        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Abrir menú"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
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
        <div className="md:hidden mt-2 mx-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 px-6 py-5">
          <ul className="flex flex-col gap-4 text-sm font-medium text-[#1A1A1A]/70">
            <li><a href="#productos" onClick={() => setMenuOpen(false)} className="hover:text-[#936037] transition-colors cursor-pointer block">Productos</a></li>
            <li><a href="#beneficios" onClick={() => setMenuOpen(false)} className="hover:text-[#936037] transition-colors cursor-pointer block">Beneficios</a></li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)} className="hover:text-[#936037] transition-colors cursor-pointer block">Nosotros</a></li>
          </ul>
          <a href="#productos" onClick={() => setMenuOpen(false)} className="mt-4 block text-center text-sm font-medium text-[#936037] hover:text-[#1A1A1A] transition-colors cursor-pointer">
            Comprar ahora
          </a>
        </div>
      )}
    </header>
  );
}
