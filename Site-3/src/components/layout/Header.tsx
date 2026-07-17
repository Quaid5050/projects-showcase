"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Integrations", href: "/integrations" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#020509]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_0_40px_rgba(0,255,136,0.04)]"
            : "bg-transparent"
        )}
        style={{ minHeight: "80px" }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <div className="container mx-auto px-6 md:px-10 flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 z-50 group" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Merchant Orders Logo"
              className="h-16 w-auto max-w-[200px] object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.parentElement?.querySelector(".fallback-text")?.classList.remove("hidden")
              }}
            />
            <div className="fallback-text hidden items-center gap-1 tracking-tight">
              <span className="text-2xl font-black text-white">MERCHANT</span>
              <span className="text-2xl font-black text-emerald-400">ORDERS</span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-emerald-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Link href="/contact">
              <Button variant="primary" size="sm" className="btn-cinema relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden z-[60] p-2 text-slate-300 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} className="text-emerald-400" /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[55] bg-[#020509] flex flex-col pt-24 px-8 md:hidden overflow-y-auto cinema-grid"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-3xl font-black text-white hover:text-emerald-400 transition-colors border-b border-white/5 py-4 tracking-tight"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="mt-10 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-[0_0_30px_rgba(0,255,136,0.3)]" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
