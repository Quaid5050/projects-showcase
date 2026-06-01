"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "#ffffff",
        borderBottom: scrolled ? "1px solid #e4eaf5" : "1px solid #f0f4f8",
        boxShadow: scrolled ? "0 2px 20px rgba(10,31,68,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", height: 74,
        }}>
          {/* LOGO — just the image */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              alt="AEM Quality ISO Consulting"
              width={140}
              height={56}
              style={{ objectFit: "contain", height: 52, width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul style={{
            display: "flex", alignItems: "center", gap: 32,
            listStyle: "none", margin: 0,
          }} className="nav-desktop">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: "1.8px", textTransform: "uppercase",
                  textDecoration: "none",
                  color: pathname === l.href ? "#1a56db" : "#3d4f6b",
                  borderBottom: pathname === l.href ? "2px solid #1a56db" : "2px solid transparent",
                  paddingBottom: 3,
                  transition: "all 0.2s",
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/contact" className="nav-cta-btn" style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "1.2px", textTransform: "uppercase",
            textDecoration: "none",
            padding: "11px 24px",
            background: "linear-gradient(135deg,#1a56db 0%,#2563eb 100%)",
            color: "#fff", borderRadius: 6,
            boxShadow: "0 4px 14px rgba(26,86,219,0.3)",
            transition: "all 0.3s",
          }}>
            Free Consultation
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="hamburger-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#0a1f44", padding: 4 }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: "fixed", top: 74, left: 0, right: 0, zIndex: 999,
          background: "#ffffff",
          borderBottom: "1px solid #e4eaf5",
          boxShadow: "0 8px 32px rgba(10,31,68,0.1)",
          padding: "16px 28px 24px",
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              display: "block",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 12, fontWeight: 700,
              letterSpacing: "1.5px", textTransform: "uppercase",
              color: pathname === l.href ? "#1a56db" : "#3d4f6b",
              textDecoration: "none",
              padding: "14px 0",
              borderBottom: "1px solid #f0f4f8",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            display: "block", marginTop: 18, textAlign: "center",
            fontFamily: "Montserrat, sans-serif", fontSize: 12, fontWeight: 700,
            letterSpacing: "1.5px", textTransform: "uppercase",
            textDecoration: "none", padding: "14px 0",
            background: "linear-gradient(135deg,#1a56db,#2563eb)",
            color: "#fff", borderRadius: 8,
          }}>
            Book Free Consultation
          </Link>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-cta-btn { display: inline-flex !important; }
        .hamburger-btn { display: none !important; }
        .nav-desktop a:hover { color: #1a56db !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}