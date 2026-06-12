import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";

const stats = [
  { value: "54%", label: "Proteína por 100g" },
  { value: "9", label: "Aminoácidos esenciales" },
  { value: "24g", label: "Fibra por 100g" },
  { value: "3.500m", label: "Altitud de cultivo" },
];

export default function BenefitsInfo() {
  return (
    <section id="beneficios" className="py-24 bg-[#0f2a1a]">
      <div className="max-w-7xl mx-auto px-6">

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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} direction="up" delay={i * 100}>
              <div className="bg-white/10 rounded-3xl p-6 text-center">
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
