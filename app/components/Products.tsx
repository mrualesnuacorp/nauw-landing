"use client";

import Image from "next/image";
import { useState } from "react";
import { LiquidButton } from "./ui/LiquidButton";
import { ScrollReveal } from "./ui/ScrollReveal";

type Product = {
  name: string;
  image: string;
  cardBg?: string;
  specsBg?: string;
  specs: { label: string; value: string; hideAbove?: boolean }[];
  price: string;
};

const categories: { id: string; name: string; desc: string; description?: string; products: Product[] }[] = [
  {
    id: "proteina",
    name: "Proteína",
    desc: "De chocho con antioxidantes",
    description: "Proteína de chocho, cacao y uvilla. Una bebida completa, práctica y funcional.",
    products: [
      { name: "Chocolate y Uvilla", image: "/images/prod-proteina-chocolate.png", cardBg: "rgba(232,208,184,0.5)", specsBg: "rgba(232,208,184,0.9)", specs: [{ label: "Proteína", value: "27g" }, { label: "Peso", value: "600g" }], price: "$49.99" },
    ],
  },
  {
    id: "electrolitos",
    name: "Electrolitos",
    desc: "Electrolitos y vitaminas",
    products: [
      { name: "Coco", image: "/images/prod-electrolito-coco.png", cardBg: "rgba(237,217,192,0.5)", specsBg: "rgba(237,217,192,0.9)", specs: [{ label: "Peso", value: "10g" }, { label: "Sabor", value: "Coco", hideAbove: true }], price: "$48.00" },
    ],
  },
  {
    id: "gel-energetico",
    name: "Gel Energético",
    desc: "De Guayusa",
    products: [
      { name: "Mango",   image: "/images/prod-gel-mango.png",   cardBg: "rgba(253,232,192,0.5)", specsBg: "rgba(253,232,192,0.9)", specs: [{ label: "Carbos", value: "27g" }, { label: "Cafeína", value: "100mg" }], price: "$60.00" },
      { name: "Sandía",  image: "/images/prod-gel-sandia.png",  cardBg: "rgba(255,213,216,0.5)", specsBg: "rgba(255,213,216,0.9)", specs: [{ label: "Carbos", value: "27g" }, { label: "Cafeína", value: "100mg" }], price: "$60.00" },
      { name: "Neutral", image: "/images/prod-gel-neutral.png", cardBg: "rgba(232,232,228,0.5)", specsBg: "rgba(232,232,228,0.9)", specs: [{ label: "Carbos", value: "27g" }, { label: "Cafeína", value: "100mg" }], price: "$60.00" },
    ],
  },
  {
    id: "creatina",
    name: "Creatina",
    desc: "Monohidratada",
    products: [
      { name: "Neutral", image: "/images/prod-creatina.png", cardBg: "rgba(221,213,245,0.5)", specsBg: "rgba(221,213,245,0.9)", specs: [{ label: "Peso", value: "5g" }, { label: "Tipo", value: "Monohidratada", hideAbove: true }], price: "$45.00" },
    ],
  },
];

function CategorySlider({ cat }: { cat: typeof categories[number] }) {
  const [idx, setIdx] = useState(0);
  const product = cat.products[idx];
  const total = cat.products.length;

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">

      {/* Image card — izquierda */}
      <div className="w-full sm:w-1/2 rounded-3xl overflow-hidden flex-shrink-0">
        <div className="relative h-[432px] sm:h-[528px]">
          <Image
            src={product.image}
            alt={`nauw. ${cat.name} ${product.name}`}
            fill
            unoptimized
            className="object-contain object-bottom transition-opacity duration-300"
            sizes="(min-width: 640px) 50vw, 100vw"
          />

          {total > 1 && (
            <>
              <button
                onClick={() => setIdx((idx - 1 + total) % total)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setIdx((idx + 1) % total)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {cat.products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${i === idx ? "bg-white w-4" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Info — derecha */}
      <div className="w-full sm:w-1/2 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
          <p className="text-sm text-white/60 mt-1">{cat.desc}</p>
          {cat.description && (
            <p className="text-base text-white/80 mt-3 leading-relaxed">{cat.description}</p>
          )}
        </div>
        <div className="flex gap-8">
          {product.specs.filter((s) => !s.hideAbove).map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="text-2xl font-bold text-white leading-none">{s.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{product.name}</h4>
          <span className="text-2xl font-bold text-white">{product.price}</span>
        </div>
      </div>

    </div>
  );
}

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-[#0f2a1a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-medium text-[#b07a45] uppercase tracking-widest mb-3">
                Nuestros productos
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Toda la línea
                <br />
                nauw.
              </h2>
            </div>
            <p className="text-white/60 max-w-xs leading-relaxed">
              Nutrición funcional de alto rendimiento con ingredientes de origen ecuatoriano.
            </p>
          </div>
        </ScrollReveal>

        {/* Proteína + Electrolitos */}
        <div className="grid grid-cols-1 gap-8">
          {categories.slice(0, 2).map((cat, i) => (
            <div key={cat.name} id={cat.id}>
              <ScrollReveal direction="up" delay={i * 130}>
                <CategorySlider cat={cat} />
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>

      {/* Divisor dorado full-width */}
      <div className="w-full h-px bg-[#936037]/60 my-16" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Gel + Creatina */}
        <div className="grid grid-cols-1 gap-8">
          {categories.slice(2).map((cat, i) => (
            <div key={cat.name} id={cat.id}>
              <ScrollReveal direction="up" delay={i * 130}>
                <CategorySlider cat={cat} />
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
