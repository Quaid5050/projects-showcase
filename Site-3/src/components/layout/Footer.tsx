"use client"

import React from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-[#020509] text-slate-400 relative overflow-hidden">
      {/* Top divider */}
      <div className="divider-glow" />

      {/* Background ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/4 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-16 pb-12">
          {/* Brand */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo.png"
                alt="Merchant Orders Logo"
                className="h-20 w-auto max-w-[240px] object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,255,136,0.4)]"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  const fb = e.currentTarget.parentElement?.querySelector(".fallback-text")
                  if (fb) fb.classList.remove("hidden")
                }}
              />
              <div className="fallback-text hidden text-2xl font-black flex items-center gap-2">
                <span className="text-white">MERCHANT</span>
                <span className="text-emerald-400">ORDERS</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Powerful online ordering built for modern restaurants. Zero commissions. 100% your brand.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@merchantorders.io" className="flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors">
                <Mail size={14} className="text-emerald-500/60" />
                support@merchantorders.io
              </a>
              <a href="tel:8002690818" className="flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors">
                <Phone size={14} className="text-emerald-500/60" />
                800.269.0818
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Industries", href: "/industries" },
                { label: "Integrations", href: "/integrations" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Features</h3>
            <ul className="space-y-3">
              {[
                { label: "Online Ordering", href: "/features#online-ordering" },
                { label: "Branded Mobile App", href: "/features#mobile-app" },
                { label: "Delivery Management", href: "/features#delivery-management" },
                { label: "Branded Website", href: "/features#branded-website" },
                { label: "Loyalty & Rewards", href: "/features#loyalty" },
                { label: "Real-Time Analytics", href: "/features#analytics" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA panel */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Get Started</h3>
            <div className="rounded-2xl border border-white/6 bg-white/2 p-6 space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Ready to own your digital ordering experience?
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm py-3 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
              >
                Book a Demo →
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center border border-white/8 text-slate-400 hover:text-white hover:border-white/15 font-medium text-sm py-3 rounded-xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Merchant Orders. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
