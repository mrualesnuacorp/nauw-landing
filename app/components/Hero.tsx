import Image from "next/image";
import { LiquidButton } from "./ui/LiquidButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#26362C]">

      {/* ── Imagen de fondo ──────────────────────────────────────────────── */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        unoptimized
        priority
        className="object-cover object-center anim-bg-zoom"
      />

      {/* ── Logo como elemento principal ─────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none -translate-y-16 anim-logo-reveal">
        {/* Glow detrás del logo */}
        <div
          className="absolute w-[70vw] h-[40vh] rounded-full blur-[120px] anim-glow-pulse"
          style={{ background: "radial-gradient(ellipse, #936037 0%, transparent 70%)" }}
        />
        {/* Logo gigante centrado */}
        <Image
          src="/images/nauw-logo-white.png"
          alt="nauw."
          width={1200}
          height={380}
          className="w-[85vw] max-w-5xl h-auto opacity-90"
          priority
        />
      </div>

      {/* ── Botón comprar ahora ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <a
          href="#productos"
          className="pointer-events-auto mt-48 px-12 py-5 bg-[#936037] hover:bg-[#7a4f2d] text-white text-2xl rounded-full transition-colors duration-200 cursor-pointer tracking-widest shadow-lg"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
        >
          Comprar ahora
        </a>
      </div>

      {/* ── Tag superior centrado ────────────────────────────────────────── */}
      <div className="relative z-10 flex justify-center pt-32 sm:pt-36 anim-tag">
        <div className="inline-flex items-center border border-white/15 rounded-full px-5 py-2 backdrop-blur-sm bg-black/35">
          <span className="text-sm font-medium text-white tracking-widest uppercase">
            Reconectamos a las personas con su bienestar a través de la biodiversidad ecuatoriana
          </span>
        </div>
      </div>

      {/* ── Contenido inferior ───────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-14 pt-[52vh] sm:pt-[55vh] anim-bottom">

        {/* Logo legible + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <Image
              src="/images/nauw-logo-white.png"
              alt="nauw."
              width={140}
              height={44}
              className="h-9 sm:h-11 w-auto mb-4"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <LiquidButton href="#productos" size="lg" variant="dark" glassBg="rgba(38,54,44,0.65)">
              Ver productos
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LiquidButton>
            <LiquidButton href="#beneficios" size="lg" variant="dark" glassBg="rgba(38,54,44,0.65)">
              Conocer más
            </LiquidButton>
          </div>

          {/* Scroll hint */}
          <div className="hidden sm:flex items-center gap-2 text-white/30 text-xs anim-scroll-bounce">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            scroll
          </div>
        </div>
      </div>
    </section>
  );
}
