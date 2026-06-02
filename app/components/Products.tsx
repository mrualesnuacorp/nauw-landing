"use client";

import Image from "next/image";
import { useState } from "react";
import { LiquidButton } from "./ui/LiquidButton";

type Product = {
  name: string;
  image: string;
  cardBg?: string;
  specsBg?: string;
  specs: { label: string; value: string }[];
  price: string;
};

const categories: { name: string; desc: string; products: Product[] }[] = [
  {
    name: "Proteína",
    desc: "De chocho con antioxidantes",
    products: [
      { name: "Chocolate y Uvilla", image: "/images/prod-proteina-chocolate.jpg", cardBg: "rgba(232,208,184,0.5)", specsBg: "rgba(232,208,184,0.9)", specs: [{ label: "Proteína", value: "27g" }, { label: "Peso", value: "600g" }], price: "$49.90" },
      { name: "Fresa y Banano",     image: "/images/prod-proteina-fresa.jpg",     cardBg: "rgba(245,213,213,0.5)", specsBg: "rgba(245,213,213,0.9)", specs: [{ label: "Proteína", value: "27g" }, { label: "Peso", value: "600g" }], price: "$49.90" },
      { name: "Vainilla y Coco",    image: "/images/prod-proteina-vainilla.jpg",  cardBg: "rgba(213,235,245,0.5)", specsBg: "rgba(213,235,245,0.9)", specs: [{ label: "Proteína", value: "27g" }, { label: "Peso", value: "600g" }], price: "$49.90" },
    ],
  },
  {
    name: "Electrolitos",
    desc: "Electrolitos y vitaminas",
    products: [
      { name: "Coco",      image: "/images/prod-electrolito-coco.png",      cardBg: "rgba(237,217,192,0.5)", specsBg: "rgba(237,217,192,0.9)", specs: [{ label: "Peso", value: "10g" }, { label: "Sabor", value: "Coco" }],      price: "$4.90" },
      { name: "Frutilla",  image: "/images/prod-electrolito-frutilla.png",  cardBg: "rgba(255,213,216,0.5)", specsBg: "rgba(255,213,216,0.9)", specs: [{ label: "Peso", value: "10g" }, { label: "Sabor", value: "Frutilla" }], price: "$4.90" },
      { name: "Mandarina", image: "/images/prod-electrolito-mandarina.png", cardBg: "rgba(255,232,192,0.5)", specsBg: "rgba(255,232,192,0.9)", specs: [{ label: "Peso", value: "10g" }, { label: "Sabor", value: "Mandarina" }], price: "$4.90" },
    ],
  },
  {
    name: "Gel Energético",
    desc: "De Guayusa",
    products: [
      { name: "Mango",   image: "/images/prod-gel-mango.jpg",   cardBg: "rgba(253,232,192,0.5)", specsBg: "rgba(253,232,192,0.9)", specs: [{ label: "Carbos", value: "27g" }, { label: "Cafeína", value: "100mg" }], price: "$3.90" },
      { name: "Sandía",  image: "/images/prod-gel-sandia.png",  cardBg: "rgba(255,213,216,0.5)", specsBg: "rgba(255,213,216,0.9)", specs: [{ label: "Carbos", value: "27g" }, { label: "Cafeína", value: "100mg" }], price: "$3.90" },
      { name: "Neutral", image: "/images/prod-gel-neutral.jpg", cardBg: "rgba(232,232,228,0.5)", specsBg: "rgba(232,232,228,0.9)", specs: [{ label: "Carbos", value: "27g" }, { label: "Cafeína", value: "100mg" }], price: "$3.90" },
    ],
  },
  {
    name: "Creatina",
    desc: "Monohidratada",
    products: [
      { name: "Neutral", image: "/images/prod-creatina.png", cardBg: "rgba(221,213,245,0.5)", specsBg: "rgba(221,213,245,0.9)", specs: [{ label: "Peso", value: "5g" }, { label: "Tipo", value: "Monohidratada" }], price: "$3.90" },
    ],
  },
];

function CategorySlider({ cat }: { cat: typeof categories[number] }) {
  const [idx, setIdx] = useState(0);
  const product = cat.products[idx];
  const total = cat.products.length;

  return (
    <div className="flex flex-col">
      {/* Category label */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#1A1A1A]">{cat.name}</h3>
        <p className="text-sm text-[#6B6361]">{cat.desc}</p>
      </div>

      {/* Card */}
      <div
        className="rounded-3xl overflow-hidden flex flex-col"
        style={{ backgroundColor: product.cardBg }}
      >
        {/* Image — takes up most of the card */}
        <div className="relative h-[420px] sm:h-[500px]">
          <Image
            src={product.image}
            alt={`nauw. ${cat.name} ${product.name}`}
            fill
            unoptimized
            className="object-cover object-center transition-opacity duration-300"
            sizes="(max-width: 640px) 100vw, 50vw"
          />

          {/* Arrows over the image */}
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

              {/* Dots */}
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

        {/* Info below image */}
        <div className="px-6 py-5">
          <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">{product.name}</h4>

          <div className="flex gap-2 mb-5">
            {product.specs.map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-4 py-2 text-center flex-1"
                style={{ backgroundColor: product.specsBg }}
              >
                <p className="text-base font-bold text-[#1A1A1A]">{s.value}</p>
                <p className="text-[10px] text-[#6B6361] uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <LiquidButton href="#" size="sm" variant="light">
              Comprar
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LiquidButton>
            <span className="text-xl font-bold text-[#1A1A1A]">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-medium text-[#936037] uppercase tracking-widest mb-3">
              Nuestros productos
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Toda la línea
              <br />
              nauw.
            </h2>
          </div>
          <p className="text-[#6B6361] max-w-xs leading-relaxed">
            Suplementación de alto rendimiento con ingredientes de origen ecuatoriano.
          </p>
        </div>

        {/* Grid of category sliders */}
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <CategorySlider key={cat.name} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}
