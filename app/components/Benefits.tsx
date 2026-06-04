import Image from "next/image";

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
          <div className="relative h-80 lg:h-96">
            <Image
              src="/images/chocho-2.png"
              alt="Planta de chocho"
              fill
              unoptimized
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 rounded-3xl p-6 text-center">
              <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
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

      </div>
    </section>
  );
}
