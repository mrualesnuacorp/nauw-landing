import { ScrollReveal } from "./ui/ScrollReveal";

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
  { label: "Vitamina B1 (Tiamina)",            nauw: true,  resto: false, highlight: true  },
  { label: "Vitamina B2 (Riboflavina)",         nauw: true,  resto: false, highlight: true  },
  { label: "Vitamina B6 (Piridoxina)",          nauw: true,  resto: false, highlight: true  },
  { label: "Elaborado con polvo de fruta real", nauw: true,  resto: false, highlight: false },
  { label: "Sin colorantes artificiales",       nauw: true,  resto: false, highlight: false },

  { label: "Sodio",                              nauw: true,  resto: true,  highlight: false },
  { label: "Potasio",                            nauw: true,  resto: true,  highlight: false },
  { label: "Magnesio",                           nauw: true,  resto: false, highlight: false },
  { label: "Cafeína natural de guayusa",         nauw: true,  resto: false, highlight: true  },
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

export default function BenefitsTables() {
  return (
    <section className="py-24 bg-[#0f2a1a]">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal direction="up" delay={100}>
          <div>
            <p className="text-xs font-medium text-[#b07a45] uppercase tracking-widest mb-6">
              Proteína
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Chocho vs. el resto
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr>
                    <th className="text-left pb-4 pr-6 text-sm font-medium text-white/60 w-1/2" />
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
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white/10" : "bg-transparent"}>
                      <td className={`py-4 pr-6 pl-5 text-sm font-medium text-white ${i % 2 === 0 ? "rounded-l-2xl" : ""}`}>
                        {row.label}
                      </td>
                      <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "bg-[#26362C]/8" : "bg-[#26362C]/5"}`}>
                        {row.nauw ? <Check /> : <Cross />}
                      </td>
                      <td className="py-4 px-4 text-center">{row.whey ? <Check /> : <Cross />}</td>
                      <td className="py-4 px-4 text-center">{row.pea ? <Check /> : <Cross />}</td>
                      <td className={`py-4 px-4 text-center ${i % 2 === 0 ? "rounded-r-2xl" : ""}`}>
                        {row.soy ? <Check /> : <Cross />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
        </ScrollReveal>

        <ScrollReveal direction="emerge" threshold={0.08}>
          <div className="mt-24">
            <p className="text-xs font-medium text-[#b07a45] uppercase tracking-widest mb-6">
              Geles &amp; Electrolitos
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              nauw. vs. el resto
            </h3>
            <p className="text-white/60 mb-10 max-w-xl leading-relaxed">
              Nuestros productos están elaborados con plantas y frutas exóticas ecuatorianas, lo que aporta de forma natural vitaminas, minerales, antioxidantes y nutrientes que ningún competidor ofrece.
            </p>

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
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white/10" : "bg-transparent"}>
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


          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
