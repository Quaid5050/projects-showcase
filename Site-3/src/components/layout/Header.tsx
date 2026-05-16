"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-md"
          : "bg-slate-950"
      )}
      style={{ minHeight: "88px" }}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between h-[88px]">

        {/* Logo — left */}
        <Link href="/" className="flex items-center shrink-0 z-50">
          <img
            src="/images/logo.png"
            alt="Merchant Orders Logo"
            className="h-20 w-auto max-w-[240px] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none"
              e.currentTarget.parentElement?.querySelector(".fallback-text")?.classList.remove("hidden")
            }}
          />
          <div className="fallback-text hidden items-center gap-1 tracking-tight">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              Merchant
            </span>
            <span className="text-2xl font-bold text-orange-400">Orders</span>
          </div>
        </Link>

        {/* Nav — center */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA — right */}
        <div className="hidden md:flex items-center shrink-0">
          <Link href="/contact">
            <Button variant="primary" size="sm">Book a Demo</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50 p-2 text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-950 z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-28 px-8",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-slate-100 hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-2xl font-semibold text-emerald-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-12 flex flex-col gap-4">
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full" size="lg">Book a Demo</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
