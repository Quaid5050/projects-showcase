"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setMobileOpen(false);
      }
    },
    [pathname]
  );

  const nav = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/areas", label: "Service Areas" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-navy text-white py-2.5 px-4 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-slate-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>
              Mon – Sat: 9:00 AM – 6:00 PM
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"/><circle cx="12" cy="9" r="3"/></svg>
              Brampton, ON
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7L12 13L22 7"/></svg>
              info@jphomecomfort.ca
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+16479485859" className="flex items-center gap-2 bg-brand-red px-4 py-1.5 rounded font-bold text-sm hover:bg-brand-red-dark transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
              +1 647-948-5859
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 backdrop-blur-md shadow-lg shadow-black/5" : "bg-white border-b border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-3">
              <img src="/logo1.jpg" alt="JP Home Comfort" className="h-14 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}
                  className={`px-4 py-2 text-[15px] font-semibold rounded-md transition-all duration-200 ${isActive(l.href) ? "text-brand-red bg-red-50" : "text-brand-navy hover:text-brand-red hover:bg-slate-50"}`}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+16479485859" className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Call Now</div>
                  <div className="text-[15px] font-bold text-brand-navy">647-948-5859</div>
                </div>
              </a>
              <Link href="/contact" onClick={(e) => handleNavClick(e, "/contact")} className="btn-red text-sm px-6 py-3">
                Get Free Quote
              </Link>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-brand-navy" aria-label="Menu">
              {mobileOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6L18 18"/></svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl">
            <div className="px-6 py-5 space-y-1">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}
                  className={`block py-3 px-4 font-semibold text-lg rounded-lg transition-colors ${isActive(l.href) ? "text-brand-red bg-red-50" : "text-brand-navy hover:bg-slate-50"}`}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-slate-100 space-y-3">
                <a href="tel:+16479485859" className="flex items-center gap-3 text-brand-cyan font-bold text-xl py-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
                  +1 647-948-5859
                </a>
                <Link href="/contact" onClick={(e) => handleNavClick(e, "/contact")} className="btn-red block text-center text-lg w-full">Get Free Quote</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}