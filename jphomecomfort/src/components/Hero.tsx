"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [v, setV] = useState(false);
  useEffect(() => { setV(true); }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* BG — HVAC technician installing equipment */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop" alt="HVAC technician installing furnace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-navy-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/80 to-brand-navy-dark/60" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red z-10" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "48px 48px" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 text-center w-full">
        <div className={`transition-all duration-1000 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/25 rounded-full px-6 py-2.5 mb-8 backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2.5"><path d="M12 2L3 7V12C3 17.5 6.84 22.74 12 24C17.16 22.74 21 17.5 21 12V7L12 2Z"/><path d="M9 12L11 14L15 10"/></svg>
            <span className="text-white font-bold text-sm tracking-wide">Licensed & Certified HVAC Experts</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6">
            Professional{" "}
            <span className="text-brand-red">Heating</span>,{" "}
            <span className="text-brand-cyan">Cooling</span>
            <br className="hidden sm:block" />
            & Water Systems
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl font-medium mb-4 max-w-2xl mx-auto">
            Comfort You Can Count On
          </p>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Expert installation, repair, and maintenance for your home.
            Fast, reliable, and affordable — serving the Greater Toronto Area.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {["Free Estimates", "Same-Day Service", "15+ Years Experience", "Licensed & Insured"].map(b => (
              <div key={b} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
                <span className="text-slate-300 text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-red text-[17px] px-10 py-5 shadow-2xl shadow-brand-red/30">
              Our Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
            </Link>
            <a href="tel:+16479485859" className="btn-outline-white text-[17px] px-10 py-5 flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
              +1 647-948-5859
            </a>
            <Link href="/contact" className="btn-outline-white text-[17px] px-10 py-5">Get Free Quote</Link>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${v ? "opacity-60" : "opacity-0"}`}>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}