"use client"

import React from "react"
import { motion } from "framer-motion"

export const LogoMarquee = () => {
  // Generic integration category labels — no specific brand names
  const logos = [
    "POS Systems", "Payment Gateways", "Delivery Workflows", "Loyalty Tools",
    "Mobile Ordering", "Analytics", "Customer Engagement", "Online Ordering", "QR Menus"
  ]
  
  // Duplicate the array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="py-10 border-b border-slate-100 bg-white overflow-hidden flex flex-col items-center">
      <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">
        Integrates seamlessly with your favorite tools
      </p>
      
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Gradient masks for smooth fading at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 w-max"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="text-xl md:text-2xl font-bold text-slate-300 opacity-60 hover:opacity-100 hover:text-slate-800 transition-all duration-300 select-none grayscale hover:grayscale-0"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
