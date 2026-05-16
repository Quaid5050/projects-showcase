"use client"

import React from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="Merchant Orders Logo" 
                className="h-24 w-auto max-w-[280px] object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-text text-2xl font-bold flex items-center gap-2 tracking-tight hidden">
                <span className="text-white">
                  Merchant
                </span>
                <span className="text-orange-500">Orders</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Powerful online ordering built for modern restaurants. Launch branded ordering, delivery, loyalty, and analytics from one powerful platform.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:support@merchantorders.io" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                support@merchantorders.io
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</Link></li>
              <li><Link href="/industries" className="hover:text-emerald-400 transition-colors">Industries</Link></li>
              <li><Link href="/integrations" className="hover:text-emerald-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Features</h3>
            <ul className="space-y-4">
              <li><Link href="/features#online-ordering" className="hover:text-emerald-400 transition-colors">Online Ordering</Link></li>
              <li><Link href="/features#mobile-app" className="hover:text-emerald-400 transition-colors">Branded Mobile App</Link></li>
              <li><Link href="/features#delivery-management" className="hover:text-emerald-400 transition-colors">Delivery Management</Link></li>
              <li><Link href="/features#branded-website" className="hover:text-emerald-400 transition-colors">Branded Website</Link></li>
              <li><Link href="/features#loyalty" className="hover:text-emerald-400 transition-colors">Loyalty & Rewards</Link></li>
              <li><Link href="/features#analytics" className="hover:text-emerald-400 transition-colors">Real-Time Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <a href="mailto:support@merchantorders.io" className="hover:text-emerald-400 transition-colors">
                  support@merchantorders.io
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <a href="tel:8002690818" className="hover:text-emerald-400 transition-colors">
                  800.269.0818
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Merchant Orders. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
