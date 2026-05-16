"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="relative pt-24 pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background gradients and floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <motion.div variants={item} className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                The Next Generation of Restaurant Tech
              </span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Powerful Online Ordering Built for Modern Restaurants
            </motion.h1>
            
            <motion.p variants={item} className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Launch branded ordering, delivery, loyalty, mobile app, analytics, and customer engagement tools from one powerful platform.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-base">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base border-slate-700 text-white hover:bg-slate-800">
                  Explore Features
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual / Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Main Device Mockup */}
            <div className="relative w-full max-w-lg lg:max-w-2xl rounded-[2rem] overflow-hidden z-20 shadow-2xl border border-slate-200 bg-slate-900">
              <img 
                src="/images/hero-dashboard-mockup.webp" 
                alt="Merchant Orders Dashboard" 
                className="w-full h-auto block"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                }}
              />
              {/* Fallback CSS mockup if image is missing */}
              <div className="fallback hidden absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col gap-4">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-2xl w-40 mx-auto z-30" />
                <div className="flex justify-between items-center mb-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-bold text-xs">Logo</span>
                  </div>
                  <div className="h-4 w-16 bg-slate-700 rounded-full" />
                </div>
                <div className="h-32 w-full bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-3 left-3 z-20 text-white font-medium text-sm">Featured Items</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="h-24 bg-slate-800 rounded-xl" />
                  <div className="h-24 bg-slate-800 rounded-xl" />
                </div>
                <div className="h-16 w-full bg-emerald-600 rounded-xl mt-auto flex items-center justify-center text-white font-medium shadow-lg shadow-emerald-600/30">
                  Checkout - $24.50
                </div>
              </div>
            </div>

            {/* Floating Elements — hidden on small screens to avoid overflow */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden sm:flex absolute -left-4 top-16 bg-white p-3 rounded-xl shadow-xl z-30 items-center gap-3 border border-slate-100"
            >
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">🍔</div>
              <div>
                <div className="text-sm font-bold text-slate-800">New Order</div>
                <div className="text-xs text-slate-500">Pickup in 15 mins</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute -right-4 bottom-24 bg-white p-3 rounded-xl shadow-xl z-30 items-center gap-3 border border-slate-100"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-bold">↑</div>
              <div>
                <div className="text-sm font-bold text-slate-800">+24% Sales</div>
                <div className="text-xs text-slate-500">vs last week</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
