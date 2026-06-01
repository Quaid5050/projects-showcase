"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(250,248,244,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,169,110,0.2)" : "none",
      padding: scrolled ? "8px 0" : "14px 0",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo image */}
        <Link href="/" style={{ textDecoration: "none", display: "block" }}>
          <img
            src="/logo.png"
            alt="M2M Pro Cleaners"
            style={{
              height: scrolled ? "52px" : "64px",
              width: "auto",
              display: "block",
              transition: "all 0.4s ease",
              filter: scrolled
                ? "brightness(0.5) sepia(1) hue-rotate(90deg) saturate(3)"
                : "brightness(1.1)",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "40px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
              color: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.9)",
              transition: "color 0.3s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#1A1A1A" : "rgba(255,255,255,0.9)")}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary" style={{ padding: "10px 24px", fontSize: "11px" }}>
            Book Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke={scrolled ? "#1A1A1A" : "white"} strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" stroke={scrolled ? "#1A1A1A" : "white"} strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke={scrolled ? "#1A1A1A" : "white"} strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="17" x2="21" y2="17" stroke={scrolled ? "#1A1A1A" : "white"} strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#FAF8F4", borderTop: "1px solid rgba(201,169,110,0.2)", padding: "24px 32px 32px" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "14px 0",
                textDecoration: "none", fontSize: "13px",
                letterSpacing: "2px", textTransform: "uppercase",
                fontWeight: 500, color: "#1A1A1A",
                borderBottom: "1px solid rgba(201,169,110,0.15)",
              }}>
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ display: "block", textAlign: "center", marginTop: "20px" }}>
            Book Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}