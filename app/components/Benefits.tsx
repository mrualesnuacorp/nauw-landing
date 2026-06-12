import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";

const stats = [
  { value: "54%", label: "Proteína por 100g" },
  { value: "9", label: "Aminoácidos esenciales" },
  { value: "24g", label: "Fibra por 100g" },
  { value: "3.500m", label: "Altitud de cultivo" },
];

const rows = [
  { label: "Proteína completa (9 AA)",   nauw: true,  whey: true,  pea: false, soy: true  },
  { label: "Sin lactosa",                nauw: true,  whey: false, pea: true,  soy: true  },
  { label: "Sin gluten",                 nauw: true,  whey: true,  pea: true,  soy: true  },
  { label: "Sin lectinas",               nauw: true,  whey: true,  pea: false, soy: false },
  { label: "Sin aislamiento químico",    nauw: true,  whey: false, pea: false, soy: false },
  { label: "Origen vegetal",             nauw: true,  whey: false, pea: true,  soy: true  },
  { label: "Cultivo regenerativo",       nauw: true,  whey: false, pea: false, soy: false },
];

const hydrationRows = [
  { label: "Vitamina B1 (Tiamina)",             nauw: true,  resto: false, highlight: true  },
  { label: "Vitamina B6 (Piridoxina)",           nauw: true,  resto: false, highlight: true  },
  { label: "Vitamina B2 (Riboflavina)",           nauw: true,  resto: false, highlight: true  },
  { label: "Elaborado con polvo de fruta real",  nauw: true,  resto: false, highlight: false },
  { label: "Sin colorantes artificiales",        nauw: true,  resto: false, highlight: false },
  { label: "Sin saborizantes sintéticos",        nauw: true,  resto: false, highlight: false },
  { label: "Electrolitos completos (Na·K·Mg)",   nauw: true,  resto: true,  highlight: false },
];

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
    <circle cx="10" cy="10" r="9" fill="#26362C" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cross = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
    <circle cx="10" cy="10" r="9" fill="#E8E4E0" />
    <path d="M7 7L13 13M13 7L7 13" stroke="#B0A9A4" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#0f2a1a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — two columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-medium text-[#b07a45] uppercase tracking-widest mb-3">
                El ingrediente
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                ¿Qué es el
                <br />
                chocho?
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                El chocho <span className="italic">(Lupinus mutabilis)</span> es una leguminosa andina cultivada a más de 3.500 metros de altura en Ecuador, Perú y Bolivia durante miles de años. Contiene más proteína que cualquier otra fuente vegetal entera — sin procesos químicos, sin aislamiento, sin nada que no deba estar ahí.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className="relative h-80 lg:h-96">
              <Image
                src="/images/chocho-2.png"
                alt="Planta de chocho"
                fill
                unoptimized
                className="object-contain object-center"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} direction="up" delay={i * 100}>
              <div className="bg-white/10 rounded-3xl p-6 text-center">
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison table */}
        <ScrollReveal direction="up" delay={100}>
        <div>
          <p className="text-xs font-medium text-[#b07a45] uppercase tracking-widest mb-6">
            Comparativa
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Chocho vs. el resto
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left pb-4 pr-6 text-sm font-medium text-white/60 w-1/2" />
                  {/* nauw column header — highlighted */}
                  <th className="pb-4 px-4 w-1/8">
                    <div className="bg-[#26362C] text-white text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1.5 inline-block">
                      nauw.
                    </div>
                  </th>
                  <th className="pb-4 px-4 text-xs font-medium text-white/60 uppercase tracking-widest w-1/8">Whey</th>
                  <th className="pb-4 px-4 text-xs font-medium text-white/60 uppercase tracking-widest w-1/8">Pea</th>
                  <th className="pb-4 px-4 text-xs font-medium text-white/60 uppercase tracking-widest w-1/8">Soy</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white/10" : "bg-transparent"}
                  >
                    <td className={`py-4 pr-6 pl-5 text-sm font-medium text-white ${i % 2 === 0 ? "rounded-l-2xl" : ""}`}>
                      {row.label}
                    </td>
                    <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "bg-[#26362C]/8" : "bg-[#26362C]/5"}`}>
                      {row.nauw ? <Check /> : <Cross />}
                    </td>
                    <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "" : ""}`}>
                      {row.whey ? <Check /> : <Cross />}
                    </td>
                    <td className={`py-4 px-4 text-center`}>
                      {row.pea ? <Check /> : <Cross />}
                    </td>
                    <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "rounded-r-2xl" : ""}`}>
                      {row.soy ? <Check /> : <Cross />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-white/40 mt-4">
            * Comparativa basada en fuentes enteras sin aislamiento. El chocho de nauw. es cultivado en Ecuador.
          </p>
        </div>
        </ScrollReveal>

        {/* Hydration comparison table */}
        <ScrollReveal direction="emerge" threshold={0.08}>
        <div className="mt-24">
          <p className="text-xs font-medium text-[#b07a45] uppercase tracking-widest mb-6">
            Hidratación &amp; Energía
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            nauw. vs. el resto
          </h3>
          <p className="text-white/60 mb-10 max-w-xl leading-relaxed">
            Nuestros geles y electrolitos están elaborados con <span className="text-white font-medium">polvo de fruta real</span>, lo que aporta de forma natural vitaminas del complejo B que ningún competidor ofrece.
          </p>

          {/* Fruit powder callout */}
          <div className="flex items-start gap-4 bg-[#1e3d28] border border-[#b07a45]/30 rounded-2xl p-5 mb-10 max-w-xl">
            <div className="w-10 h-10 rounded-full bg-[#b07a45]/20 flex items-center justify-center shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C6 2 3 5.5 3 9c0 3 1.5 5.5 4 7h6c2.5-1.5 4-4 4-7 0-3.5-3-7-7-7z" stroke="#b07a45" strokeWidth="1.4" strokeLinejoin="round"/>
                <path d="M10 2c0 4-2 6-2 9" stroke="#b07a45" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">¿Por qué polvo de fruta?</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Las frutas naturales contienen vitaminas B1, B6 y B2 de forma biodisponible. Al deshidratarlas conservamos estos micronutrientes sin necesidad de añadir vitaminas sintéticas.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className="text-left pb-4 pr-6 text-sm font-medium text-white/60 w-2/3" />
                  <th className="pb-4 px-4 w-1/6">
                    <div className="bg-[#26362C] text-white text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1.5 inline-block">
                      nauw.
                    </div>
                  </th>
                  <th className="pb-4 px-4 text-xs font-medium text-white/60 uppercase tracking-widest w-1/6">El resto</th>
                </tr>
              </thead>
              <tbody>
                {hydrationRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white/10" : "bg-transparent"}
                  >
                    <td className={`py-4 pr-6 pl-5 text-sm font-medium ${row.highlight ? "text-[#e8c48a]" : "text-white"} ${i % 2 === 0 ? "rounded-l-2xl" : ""}`}>
                      {row.highlight && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b07a45] mr-2 mb-0.5 align-middle" />
                      )}
                      {row.label}
                    </td>
                    <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "bg-[#26362C]/8" : "bg-[#26362C]/5"}`}>
                      {row.nauw ? <Check /> : <Cross />}
                    </td>
                    <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "rounded-r-2xl" : ""}`}>
                      {row.resto ? <Check /> : <Cross />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-white/40 mt-4">
            * Comparativa frente a geles y electrolitos deportivos convencionales disponibles en el mercado local.
          </p>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
