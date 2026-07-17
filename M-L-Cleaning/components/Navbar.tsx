"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(45, 0, 80, 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,215,0,0.2)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        padding: scrolled ? "12px 0" : "22px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/logo1.png" alt="M&L Cleaning Logo" width={90} height={90} style={{ objectFit: "contain" }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                textDecoration: "none",
                color: pathname === l.href ? "#FFD700" : "rgba(255,255,255,0.9)",
                fontWeight: 500,
                fontSize: "15px",
                letterSpacing: "0.02em",
                position: "relative",
                paddingBottom: "4px",
                transition: "color 0.2s",
              }}
            >
              {l.label}
              {pathname === l.href && (
                <span style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "2px", background: "#FFD700", borderRadius: "2px"
                }} />
              )}
            </Link>
          ))}
          <a
            href="tel:8634568958"
            className="btn-primary"
            style={{ fontSize: "14px", padding: "10px 22px" }}
          >
            <PhoneIcon /> Call Now
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: "5px", padding: "4px"
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "24px", height: "2px",
              background: "#FFD700", borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "opacity: 0"
                  : "rotate(-45deg) translate(5px, -5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(45,0,80,0.98)",
          backdropFilter: "blur(12px)",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          borderTop: "1px solid rgba(255,215,0,0.2)",
        }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: pathname === l.href ? "#FFD700" : "rgba(255,255,255,0.9)",
                fontWeight: 500,
                fontSize: "16px",
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,215,0,0.1)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:8634568958" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
            <PhoneIcon /> (863) 456-8958
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
