"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Energía",
    tagline: "Energía que se siente. Rendimiento que perdura.",
    bullets: ["Carbohidratos de rápida absorción", "Cafeína natural de guayusa", "Alto contenido en proteína"],
    products: [
      { name: "Gel Mango", image: "/images/prod-gel-mango.png",          href: "/productos#gel-energetico", bullets: ["Carbohidratos de rápida absorción", "Cafeína natural de guayusa"] },
      { name: "Proteína",  image: "/images/prod-proteina-chocolate.png", href: "/productos#proteina",       bullets: ["Alto contenido de proteína", "27 g de proteína"] },
    ],
  },
  {
    name: "Concentración",
    tagline: "Claridad mental para rendir al máximo.",
    bullets: ["Enfoque mental", "Sin crash posterior", "Creatina monohidratada pura"],
    products: [
      { name: "Creatina",   image: "/images/prod-creatina.png",   href: "/productos#creatina",       bullets: ["Creatina monohidratada pura", "Claridad mental"] },
      { name: "Gel Sandía", image: "/images/prod-gel-sandia.png", href: "/productos#gel-energetico", bullets: ["Sin crash posterior", "Enfoque mental"] },
    ],
  },
  {
    name: "Vitalidad",
    tagline: "Nutrición diaria para una vida en equilibrio.",
    bullets: ["Proteína completa de chocho", "9 aminoácidos esenciales", "Hidratación inteligente"],
    products: [
      { name: "Electrolito Coco", image: "/images/prod-electrolito-coco.png",  href: "/productos#electrolitos", bullets: ["Hidratación inteligente", "Minerales esenciales"] },
      { name: "Proteína",         image: "/images/prod-proteina-chocolate.png", href: "/productos#proteina",    bullets: ["9 aminoácidos esenciales", "Proteína completa de chocho"] },
    ],
  },
];

export default function CategoryBar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#0f2a1a] shadow-sm" onMouseLeave={() => setActive(null)}>
      {/* Bar */}
      <div className="max-w-7xl mx-auto flex">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onMouseEnter={() => setActive(cat.name)}
            className={`flex-1 py-6 px-4 text-left transition-colors duration-200 cursor-pointer
              ${active === cat.name ? "bg-[#1a3d28]" : "hover:bg-[#1a3d28] group"}`}
          >
            <p className={`text-sm font-bold uppercase tracking-widest mb-1 transition-colors duration-200
              ${active === cat.name ? "text-white" : "text-white/70 group-hover:text-white"}`}>
              {cat.name}
            </p>
            {cat.tagline && (
              <p className={`text-xs italic mb-3 transition-colors duration-200
                ${active === cat.name ? "text-white/60" : "text-white/35 group-hover:text-white/60"}`}>
                {cat.tagline}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Dropdown panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ${active ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#0f2a1a] max-w-full px-8 py-12 min-h-[400px]">
          <div className="max-w-7xl mx-auto flex justify-center">
          {categories.map((cat) => {
            if (cat.name !== active || cat.products.length === 0) return null;
            return (
              <div key={cat.name} className="flex gap-12 justify-center">
                {cat.products.map((p) => (
                  <Link key={p.name} href={p.href} className="flex flex-col items-center gap-4 group/prod cursor-pointer">
                    <div className="relative w-56 h-72 transition-transform duration-200 group-hover/prod:scale-105">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        unoptimized
                        className="object-contain"
                        sizes="224px"
                      />
                    </div>
                    {p.bullets && p.bullets.length > 0 ? (
                      <ul className="flex flex-col gap-1">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-1.5 text-xs text-white/70 group-hover/prod:text-white/90 transition-colors duration-200">
                            <span className="mt-1 w-1 h-1 rounded-full bg-current shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-sm font-medium text-white/80 group-hover/prod:text-white transition-colors duration-200">{p.name}</span>
                    )}
                  </Link>
                ))}
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
