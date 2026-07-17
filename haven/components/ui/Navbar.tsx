"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const serviceLinks = [
  { label: "PPF Service",         href: "/services/ppf" },
  { label: "Ceramic Coating",     href: "/services/ceramic-coating" },
  { label: "Dashcams",            href: "/services/dashcams" },
  { label: "CarPlay Integration", href: "/services/carplay" },
  { label: "Ambient Lights",      href: "/services/ambient-lights" },
  { label: "Wheel Lights",        href: "/services/wheel-lights" },
  { label: "Starlights",          href: "/services/starlights" },
  { label: "Tire Services",       href: "/services/tires" },
  { label: "Ceramic Tint",        href: "/services/tint" },
  { label: "Tail Lights",         href: "/services/tail-lights" },
  { label: "Car Protection",      href: "/services/protection" },
  { label: "Custom Upgrades",     href: "/services/custom" },
];

const links = [
  { label: "Home",                href: "/" },
  { label: "About",              href: "/about" },
  { label: "Services",           href: "/services", dropdown: true },
  { label: "Brands",             href: "/brands" },
  { label: "Book An Appointment", href: "/booking" },
  { label: "Contact",            href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const [mobDrop, setMobDrop]       = useState(false);
  const pathname = usePathname();
  const dropRef  = useRef<HTMLLIElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); setMobDrop(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const openDrop  = () => { if (timerRef.current) clearTimeout(timerRef.current); setDropOpen(true); };
  const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 150); };

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "14px 60px" : "22px 60px",
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,0,29,0.18)" : "none",
        transition: "all .45s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }} className="main-nav">

        {/* Logo */}
        <Link href="/" style={{ position: "relative", width: "170px", height: "52px", display: "block", flexShrink: 0 }} className="nav-logo">
          <Image src="/logo2.png" alt="Haven Customs" fill priority style={{ objectFit: "contain" }} />
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: "32px", listStyle: "none", alignItems: "center" }} className="nav-links-desktop">
          {links.map(l => (
            l.dropdown ? (
              <li key={l.href} ref={dropRef} style={{ position: "relative" }}
                onMouseEnter={openDrop} onMouseLeave={closeDrop}>
                <button onClick={() => setDropOpen(v => !v)}
                  style={{
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    color: pathname.startsWith("/services") ? "#e8001d" : "rgba(240,240,240,0.88)",
                    fontSize: "14px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase",
                    fontFamily: "'Rajdhani',sans-serif", transition: "color .3s",
                    borderBottom: pathname.startsWith("/services") ? "1px solid #e8001d" : "1px solid transparent",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e8001d")}
                  onMouseLeave={e => (e.currentTarget.style.color = pathname.startsWith("/services") ? "#e8001d" : "rgba(240,240,240,0.88)")}>
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    style={{ transition: "transform .3s", transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <path d="M2 3.5 L5 6.5 L8 3.5" />
                  </svg>
                </button>

                <div style={{
                  position: "absolute", top: "calc(100% + 18px)", left: "50%",
                  transform: dropOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
                  background: "#111", border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "2px solid #e8001d",
                  minWidth: "220px", padding: "8px 0",
                  opacity: dropOpen ? 1 : 0,
                  pointerEvents: dropOpen ? "auto" : "none",
                  transition: "opacity .22s ease, transform .22s ease",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                }}>
                  <div style={{ position: "absolute", top: "-7px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderBottom: "7px solid #e8001d" }} />

                  {serviceLinks.map(s => (
                    <Link key={s.href} href={s.href} style={{
                      display: "block", padding: "11px 24px",
                      fontFamily: "'Rajdhani',sans-serif", fontSize: "14px", fontWeight: 600,
                      letterSpacing: "1.5px", textTransform: "uppercase",
                      color: pathname === s.href ? "#e8001d" : "rgba(240,240,240,0.78)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      transition: "all .2s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#e8001d"; e.currentTarget.style.background = "rgba(232,0,29,0.06)"; e.currentTarget.style.paddingLeft = "30px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = pathname === s.href ? "#e8001d" : "rgba(240,240,240,0.78)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.paddingLeft = "24px"; }}>
                      {s.label}
                    </Link>
                  ))}

                  <Link href="/services" style={{
                    display: "block", padding: "12px 24px", marginTop: "4px",
                    fontFamily: "'Orbitron',sans-serif", fontSize: "10px",
                    letterSpacing: "3px", textTransform: "uppercase",
                    color: "#e8001d", textDecoration: "none",
                    borderTop: "1px solid rgba(232,0,29,0.2)", transition: "all .2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(232,0,29,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                    View All Services →
                  </Link>
                </div>
              </li>
            ) : (
              <li key={l.href}>
                <Link href={l.href} style={{
                  color: isActive(l.href) ? "#e8001d" : "rgba(240,240,240,0.88)",
                  textDecoration: "none", fontSize: "14px", fontWeight: 600,
                  letterSpacing: "3px", textTransform: "uppercase",
                  fontFamily: "'Rajdhani',sans-serif", transition: "color .3s",
                  borderBottom: isActive(l.href) ? "1px solid #e8001d" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e8001d")}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive(l.href) ? "#e8001d" : "rgba(240,240,240,0.88)")}>
                  {l.label}
                </Link>
              </li>
            )
          ))}
        </ul>

        {/* Book Now — desktop */}
        <Link href="/booking" className="nav-book-btn" style={{
          background: "#e8001d", color: "white", padding: "10px 26px",
          fontFamily: "'Rajdhani',sans-serif", fontSize: "14px", fontWeight: 700,
          letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none",
          display: "inline-block", transition: "all .3s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#ff0025"; e.currentTarget.style.boxShadow = "0 0 28px rgba(232,0,29,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#e8001d"; e.currentTarget.style.boxShadow = "none"; }}>
          Book Now
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn" aria-label="Menu"
          style={{ display: "none", background: "none", border: "1px solid rgba(255,255,255,0.15)", padding: "8px 10px", cursor: "pointer", flexDirection: "column", gap: "5px" }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px", background: "#f0f0f0", transition: "all .3s", transformOrigin: "center",
              transform: menuOpen
                ? (i === 0 ? "rotate(45deg) translate(4.5px,4.5px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(4.5px,-4.5px)")
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* ══════════════════════════════════════
         MOBILE DRAWER — scrollable, collapsible services
         ══════════════════════════════════════ */}
      <div className="mobile-drawer" style={{
        position: "fixed", inset: 0, background: "rgba(8,8,8,0.99)", zIndex: 999,
        display: "flex", flexDirection: "column",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "auto" : "none",
        transition: "opacity .3s ease",
        overflowY: "auto", WebkitOverflowScrolling: "touch",
      }}>
        {/* Close */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px 24px 0", flexShrink: 0 }}>
          <button onClick={() => setMenuOpen(false)} style={{
            background: "none", border: "1px solid rgba(255,255,255,0.15)", color: "#f0f0f0",
            width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: "20px", fontFamily: "monospace",
          }}>✕</button>
        </div>

        {/* Main links */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 24px 20px", gap: "6px", flexShrink: 0 }}>
          {links.map(l => (
            l.dropdown ? (
              <div key={l.href} style={{ width: "100%", maxWidth: "320px" }}>
                {/* Services toggle */}
                <button onClick={() => setMobDrop(v => !v)} style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                  fontFamily: "'Bebas Neue',sans-serif", fontSize: "42px", letterSpacing: "4px",
                  color: pathname.startsWith("/services") ? "#e8001d" : "#f0f0f0",
                  padding: "8px 0", transition: "color .3s",
                }}>
                  Services
                  <svg width="16" height="16" viewBox="0 0 10 10" fill="none" stroke="#e8001d" strokeWidth="2" strokeLinecap="round"
                    style={{ transition: "transform .3s", transform: mobDrop ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <path d="M2 3.5 L5 6.5 L8 3.5" />
                  </svg>
                </button>

                {/* Collapsible service links */}
                <div style={{
                  maxHeight: mobDrop ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height .4s ease",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
                  paddingTop: mobDrop ? "12px" : "0",
                  paddingBottom: mobDrop ? "12px" : "0",
                }}>
                  {serviceLinks.map(s => (
                    <Link key={s.href} href={s.href} style={{
                      fontFamily: "'Rajdhani',sans-serif", fontSize: "16px", fontWeight: 600,
                      letterSpacing: "2px", textTransform: "uppercase",
                      color: pathname === s.href ? "#e8001d" : "rgba(240,240,240,0.5)",
                      textDecoration: "none", padding: "8px 20px", transition: "color .3s",
                      borderLeft: pathname === s.href ? "2px solid #e8001d" : "2px solid transparent",
                    }}>
                      {s.label}
                    </Link>
                  ))}
                  <Link href="/services" style={{
                    fontFamily: "'Orbitron',sans-serif", fontSize: "10px", letterSpacing: "3px",
                    textTransform: "uppercase", color: "#e8001d", textDecoration: "none",
                    padding: "10px 20px", marginTop: "4px",
                  }}>
                    View All Services →
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'Bebas Neue',sans-serif", fontSize: "42px", letterSpacing: "4px",
                color: isActive(l.href) ? "#e8001d" : "#f0f0f0",
                textDecoration: "none", transition: "color .3s", padding: "4px 0",
              }}>
                {l.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Book Now CTA */}
        <div style={{ padding: "20px 24px 40px", flexShrink: 0, display: "flex", justifyContent: "center" }}>
          <Link href="/booking" onClick={() => setMenuOpen(false)} style={{
            background: "#e8001d", color: "#fff", padding: "16px 48px",
            fontFamily: "'Orbitron',sans-serif", fontSize: "12px", fontWeight: 700,
            letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none",
            display: "inline-block", transition: "all .3s",
          }}>
            Book Now
          </Link>
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        @media(max-width:1100px) {
          .nav-links-desktop { gap: 20px !important; }
          .nav-links-desktop li a, .nav-links-desktop li button { font-size: 12px !important; letter-spacing: 2px !important; }
        }
        @media(max-width:900px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .nav-book-btn { display: none !important; }
          .main-nav { padding: 14px 20px !important; }
          .nav-logo { width: 130px !important; height: 42px !important; }
        }
      `}</style>
    </>
  );
}