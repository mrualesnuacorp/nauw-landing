import Image from "next/image";

export default function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer className="bg-[#0f2a1a] border-t border-white/10 py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className={minimal ? "mb-12" : "grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"}>
          {/* Brand */}
          <div className={minimal ? "" : "col-span-2 lg:col-span-1"}>
            <Image
              src="/images/nauw-logo-white.png"
              alt="nauw."
              width={80}
              height={26}
              className="h-6 w-auto mb-4"
            />
          </div>

          {!minimal && (
            <>
              {/* Products */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                  Productos
                </h4>
                <ul className="space-y-2.5 text-sm text-white/60">
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Proteína de Chocho</a></li>
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Electrolitos</a></li>
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Creatina</a></li>
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Packs</a></li>
                </ul>
              </div>

              {/* Empresa */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                  Empresa
                </h4>
                <ul className="space-y-2.5 text-sm text-white/60">
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Nosotros</a></li>
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Sustentabilidad</a></li>
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Blog</a></li>
                  <li><a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Contacto</a></li>
                </ul>
              </div>

              {/* Síguenos */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                  Síguenos
                </h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#936037] group transition-colors duration-200 cursor-pointer"
                    aria-label="Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#6B6361] group-hover:text-white transition-colors">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#936037] group transition-colors duration-200 cursor-pointer"
                    aria-label="TikTok"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#6B6361] group-hover:text-white transition-colors">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.07 8.07 0 004.73 1.52V6.76a4.85 4.85 0 01-.97-.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        {!minimal && (
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© 2025 nauw. Wellness. Todos los derechos reservados.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Política de privacidad</a>
              <a href="#" className="hover:text-[#936037] transition-colors cursor-pointer">Términos de uso</a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
