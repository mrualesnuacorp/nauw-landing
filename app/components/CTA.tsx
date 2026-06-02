import Image from "next/image";
import { LiquidButton } from "./ui/LiquidButton";

export default function CTA() {
  return (
    <section id="nosotros" className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#1A1A1A] rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #936037 0px, #936037 1px, transparent 0px, transparent 50%)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Bronze glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: "#936037" }}
          />

          <div className="relative grid lg:grid-cols-2 items-center gap-8 px-8 sm:px-12 py-16">
            {/* Text */}
            <div>
              <p className="text-xs font-medium text-[#D9FFB8] uppercase tracking-widest mb-4">
                nauw. wellness
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Nauw or never.
              </h2>
              <p className="text-white leading-relaxed mb-8 max-w-md">
                Únete a la comunidad nauw y transforma tu bienestar con
                suplementación premium de origen ecuatoriano.
              </p>
              <div className="flex flex-wrap gap-4">
                <LiquidButton href="#productos" size="xl" variant="dark">
                  Empezar ahora
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </LiquidButton>
                <a
                  href="#beneficios"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-7 py-4 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  Ver beneficios
                </a>
              </div>
            </div>

            {/* Logo como elemento gráfico grande */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(ellipse, #936037 0%, transparent 70%)" }}
              />
              <Image
                src="/images/nauw-logo-white.png"
                alt="nauw."
                width={420}
                height={140}
                className="relative w-full max-w-sm h-auto opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
