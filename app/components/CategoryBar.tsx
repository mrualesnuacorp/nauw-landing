"use client";

import { useState } from "react";

const categories = [
  {
    name: "Hidratación",
    bullets: ["Repone electrolitos perdidos", "Sodio, potasio y magnesio", "Con polvo de fruta real"],
  },
  {
    name: "Energía",
    bullets: ["Carbohidratos de rápida absorción", "Cafeína natural de guayusa", "Para entrenamientos largos"],
  },
  {
    name: "Concentración",
    bullets: ["Adaptógenos andinos", "Sin crash posterior", "Foco sostenido"],
  },
  {
    name: "Rendimiento",
    bullets: ["Proteína completa de chocho", "9 aminoácidos esenciales", "Recuperación muscular"],
  },
];

export default function CategoryBar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full bg-white shadow-sm" onMouseLeave={() => setActive(null)}>
      {/* Bar */}
      <div className="max-w-7xl mx-auto flex">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onMouseEnter={() => setActive(cat.name)}
            className={`flex-1 py-6 px-4 text-left transition-colors duration-200 cursor-pointer
              ${active === cat.name ? "bg-[#0f2a1a]" : "hover:bg-[#0f2a1a] group"}`}
          >
            <p className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-200
              ${active === cat.name ? "text-white" : "text-[#1A1A1A] group-hover:text-white"}`}>
              {cat.name}
            </p>
            <ul className="flex flex-col gap-1">
              {cat.bullets.map((b) => (
                <li key={b} className={`flex items-start gap-1.5 text-xs transition-colors duration-200
                  ${active === cat.name ? "text-white/70" : "text-[#1A1A1A]/50 group-hover:text-white/70"}`}>
                  <span className="mt-1 w-1 h-1 rounded-full bg-current shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      {/* Dropdown panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ${active ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-16 min-h-[650px]">
          {/* Contenido vacío por ahora */}
        </div>
      </div>
    </div>
  );
}
