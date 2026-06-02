const testimonials = [
  {
    name: "Camila V.",
    role: "Atleta de CrossFit",
    body: "Desde que uso nauw mi recuperación mejoró notablemente. El sabor de chocolate uvilla es increíble, no parece proteína.",
    initials: "CV",
  },
  {
    name: "Andrés M.",
    role: "Runner & triatleta",
    body: "Por fin una proteína ecuatoriana a la altura de las internacionales. 27g por porción y sin lactosa. Perfecta para mí.",
    initials: "AM",
  },
  {
    name: "Sofía R.",
    role: "Entrenadora personal",
    body: "La recomiendo a todos mis clientes. El origen en chocho la hace diferente y los antioxidantes son un plus que pocos productos tienen.",
    initials: "SR",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-medium text-[#936037] uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Lo dicen quienes
            <br />
            ya lo viven.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F5F0EB] rounded-3xl p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#936037">
                    <path d="M7 1L8.545 5.09H13L9.5 7.82L10.91 12L7 9.5L3.09 12L4.5 7.82L1 5.09H5.455L7 1Z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#1A1A1A] leading-relaxed flex-1 mb-6">"{t.body}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#936037] flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-xs text-[#6B6361]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
