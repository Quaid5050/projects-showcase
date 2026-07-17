"use client"

import React from "react"

export const LogoMarquee = () => {
  const logos = [
    "POS Systems", "Payment Gateways", "Delivery Workflows", "Loyalty Tools",
    "Mobile Ordering", "Analytics", "Customer Engagement", "Online Ordering", "QR Menus"
  ]
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-8 border-y border-white/5 bg-[#040810] overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#040810] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#040810] to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-4">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-600">
          Integrates With Your Favorite Tools
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="marquee-track flex items-center gap-12 md:gap-20 w-max">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="text-sm md:text-base font-bold text-slate-600 hover:text-emerald-400 transition-colors duration-300 whitespace-nowrap select-none cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
