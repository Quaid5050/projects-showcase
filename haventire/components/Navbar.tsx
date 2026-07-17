'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone, MapPin, Mail } from 'lucide-react';
import { navServices, locations, LOGO_URL } from '@/lib/data';

const mississauga = locations.find((l) => l.name === 'Mississauga')!;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDrawerOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-[80px]">

              {/* Logo */}
              <Link href="/" className="shrink-0">
                <Image src={LOGO_URL} alt="Haven Tint & Tire" width={160} height={54}
                  className="h-14 w-auto object-contain" priority />
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1">
                <Link href="/"
                  className={`px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors ${isActive('/') ? 'text-[#e01e25]' : 'text-white hover:text-[#e01e25]'}`}>
                  Home
                </Link>
                <Link href="/about"
                  className={`px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-colors ${isActive('/about') ? 'text-[#e01e25]' : 'text-white hover:text-[#e01e25]'}`}>
                  About Us
                </Link>

                {/* Services dropdown */}
                <div className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}>
                  <button className={`flex items-center gap-1 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-colors ${pathname.startsWith('/services') ? 'text-[#e01e25]' : 'text-white hover:text-[#e01e25]'}`}>
                    Services
                    <ChevronDown size={12} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-full left-0 pt-0 w-56 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-[#1a1a1a] border-t-[2px] border-[#e01e25] shadow-2xl mt-0">
                      {navServices.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`}
                          className="block px-5 py-2.5 text-[0.75rem] text-gray-300 hover:bg-[#e01e25] hover:text-white font-medium transition-colors border-b border-gray-800 last:border-0">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/contact"
                  className={`px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-colors ${isActive('/contact') ? 'text-[#e01e25]' : 'text-white hover:text-[#e01e25]'}`}>
                  Contact Us
                </Link>
                <Link href="/booking"
                  className={`px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition-colors ${isActive('/booking') ? 'text-[#e01e25]' : 'text-white hover:text-[#e01e25]'}`}>
                  Book An Appointment
                </Link>
              </div>

              {/* Right: phone + hamburger */}
              <div className="flex items-center gap-4">
                <a href={`tel:${mississauga.phoneRaw}`} className="hidden lg:flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-[#e01e25] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#b8191f] transition-colors">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-gray-400 text-[0.65rem] font-semibold uppercase tracking-wide">Need Help?</p>
                    <p className="text-white font-bold text-sm">+ 905-803-0000</p>
                  </div>
                </a>

                {/* Hamburger → X */}
                <button onClick={() => setDrawerOpen(!drawerOpen)}
                  className="w-12 h-12 bg-[#e01e25] flex flex-col items-center justify-center gap-[5px] hover:bg-[#b8191f] transition-colors shrink-0"
                  aria-label="Toggle menu">
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${drawerOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${drawerOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${drawerOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
              </div>

            </div>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Right-side info drawer */}
      <div className={`fixed top-0 right-0 h-full w-[360px] max-w-[90vw] bg-[#1a1a1a] z-50 transform transition-transform duration-300 overflow-y-auto ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">

          {/* Logo */}
          <Link href="/" onClick={() => setDrawerOpen(false)} className="inline-block mb-6">
            <Image src={LOGO_URL} alt="Haven Tint & Tire" width={140} height={48}
              className="h-12 w-auto object-contain" />
          </Link>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            At Haven Tint &amp; Tire, we provide dependable automotive services completed with precision and care. Our skilled technicians ensure every service is performed efficiently and safely, so your vehicle looks great and performs at its best every time.
          </p>

          {/* Mobile-only nav links */}
          <div className="lg:hidden mb-8 border-b border-gray-800 pb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e01e25] font-black text-sm italic">///</span>
              <span className="text-white font-black text-xs uppercase tracking-widest">Navigate</span>
            </div>
            <div className="flex flex-col gap-0">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Book An Appointment', href: '/booking' },
              ].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}
                  className="py-2.5 text-[0.75rem] font-semibold uppercase tracking-wider text-gray-300 hover:text-[#e01e25] border-b border-gray-800 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* /// CONTACT US */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#e01e25] font-black text-sm italic">///</span>
              <span className="text-white font-black text-xs uppercase tracking-widest">Contact Us</span>
            </div>

            {/* Mississauga */}
            <p className="text-white font-black text-sm uppercase tracking-widest mb-4">{mississauga.name}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e01e25] flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Phone</p>
                  <p className="text-gray-400 text-sm">{mississauga.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e01e25] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Address</p>
                  <p className="text-gray-400 text-sm">Mississauga : {mississauga.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* /// SEND AN E-MAIL */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#e01e25] font-black text-sm italic">///</span>
              <span className="text-white font-black text-xs uppercase tracking-widest">Send An E-Mail</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e01e25] flex items-center justify-center shrink-0">
                <Mail size={15} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Email</p>
                <a href="mailto:haventinttire@gmail.com"
                  className="text-gray-400 text-sm hover:text-[#e01e25] transition-colors">
                  Haventinttire@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* /// STAY CONNECTED */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#e01e25] font-black text-sm italic">///</span>
              <span className="text-white font-black text-xs uppercase tracking-widest">Stay Connected</span>
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/haventintandtiregarage" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#e01e25] flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/haven_garage/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#e01e25] flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@haven_garage" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#e01e25] flex items-center justify-center transition-colors text-[10px] font-black text-white">
                TT
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
