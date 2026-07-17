'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'Our Team' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#2A4373] text-center py-2 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/85 font-medium">
        <span className="live-dot hidden sm:block" />
        <span className="hidden sm:inline">We answer every call personally, 24 hours a day —{' '}</span>
        <a href="tel:18776275313" className="text-[#54AABA] font-bold hover:underline whitespace-nowrap">
          <span className="sm:hidden">Call 1-877-MAPLE13 now</span>
          <span className="hidden sm:inline">call 1-877-MAPLE13 right now</span>
        </a>
      </div>

      {/* Top strip */}
      <div className="bg-[#F5F8FC] border-b border-[#D4E7F7] px-[5%] py-2 hidden md:flex justify-between items-center text-xs text-[#5C6B80]">
        <div className="flex gap-5 flex-wrap">
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#5DA6DD"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
            37 Main St. S, Halton Hills, ON L7G 3G2
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#5DA6DD"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            info@maplepathhealthcare.ca
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#5DA6DD"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
            PHIPA Compliant · WSIB Covered · Licensed & Insured
          </span>
        </div>
        <a href="tel:18776275313" className="flex items-center gap-1 font-bold text-[#1C3162] hover:text-[#54AABA] transition-colors text-sm">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#54AABA"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Toll Free: 1-877-MAPLE13
        </a>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-[#D4E7F7] transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="px-[5%] flex items-center justify-between" style={{ height: scrolled ? '60px' : '72px', transition: 'height 0.3s' }}>
          <Link href="/" className="flex items-center gap-3 no-underline flex-shrink min-w-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="Maplepath Healthcare" width={40} height={40} className="object-cover w-full h-full" />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-lg font-semibold text-[#1C3162] leading-tight truncate">Maplepath Healthcare</div>
              <div className="text-[10px] text-[#5C6B80] uppercase tracking-widest truncate hidden sm:block">Halton Region · PSW & Home Care</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="text-[#2A3A5C] text-sm font-medium px-3 py-2 rounded hover:bg-[#EBF4FC] hover:text-[#1C3162] transition-all duration-150 no-underline">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a href="https://wa.me/18776275313" target="_blank" rel="noopener" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded border-[1.5px] border-[#25D366] text-[#128C7E] text-sm font-semibold transition-all hover:bg-[#25D366] hover:text-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z M12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.122 1.514 5.859L.055 23.27l5.534-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              WhatsApp
            </a>
            <a href="tel:18776275313" className="flex items-center gap-2 px-4 py-2 bg-[#E0262E] text-white rounded font-bold text-sm hover:bg-[#C01E25] transition-all hover:-translate-y-px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              1-877-MAPLE13
            </a>
            {/* Mobile menu button */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded text-[#1C3162]" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-[#D4E7F7] bg-white px-6 py-4 flex flex-col gap-2">
            {nav.map(n => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-[#2A3A5C] font-medium py-2 border-b border-[#EBF4FC] no-underline hover:text-[#1C3162]">
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
