"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/98 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-card/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/Logo.jpeg"
                alt="Lupin Project Group"
                className="h-12 lg:h-14 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-lg lg:text-xl text-foreground tracking-tight">Lupin Project</span>
              <span className="text-xs lg:text-sm font-medium text-[#8B5CF6] tracking-widest uppercase">Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full gradient-primary"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-lg border-primary/30 text-primary hover:bg-primary/10 text-sm"
            >
              <Link href="/handyman/login">Member</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-lg border-primary/30 text-primary hover:bg-primary/10 text-sm"
            >
              <Link href="/admin/login">Admin</Link>
            </Button>
            <Link
              href="tel:905-233-2100"
              className="flex items-center justify-center w-10 h-10 rounded-full gradient-primary hover:scale-110 transition-transform"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 text-white" />
            </Link>
            <Button
              asChild
              className="rounded-lg gradient-primary text-white font-bold shadow-md hover:scale-105 transition-transform text-sm px-4 py-2"
            >
              <Link href="/contact">
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-1.5 rounded-lg hover:bg-accent transition-colors text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2 mt-1 border-t border-border flex flex-col gap-2">
                <Link
                  href="tel:905-233-2100"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  905-233-2100
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild size="sm" variant="outline" className="rounded-lg border-primary/30 text-primary">
                    <Link href="/handyman/login" onClick={() => setIsOpen(false)}>Member</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-lg border-primary/30 text-primary">
                    <Link href="/admin/login" onClick={() => setIsOpen(false)}>Admin</Link>
                  </Button>
                </div>
                <Button asChild size="sm" className="rounded-lg gradient-primary text-white font-bold w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
