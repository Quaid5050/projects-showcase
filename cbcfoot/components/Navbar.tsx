"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-us",   label: "Why CBC" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: "#ffffff",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.08)",
      transition: "box-shadow 0.3s",
    }}>

      {/* Top bar — red */}
      <div style={{ backgroundColor: "#E63329", padding: "5px 0" }} className="topbar">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            <a href="tel:+14032592474" style={topLink}><PhoneIcon /><span>+1 403 259 2474</span></a>
            <a href="mailto:cbcfoot@live.ca" style={topLink}><MailIcon /><span>cbcfoot@live.ca</span></a>
          </div>
          <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>
            FREE FOOT &amp; BACK ASSESSMENT
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.25rem", gap: "1rem" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/logo2.png"
            alt="ShoeMate Orthotic Clinic"
            width={180}
            height={52}
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="desktop-nav">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: pathname === l.href ? "#E63329" : "#1B2A6B",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderBottom: pathname === l.href ? "2px solid #E63329" : "2px solid transparent",
              paddingBottom: "2px",
              transition: "all 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "0.55rem 1.1rem", fontSize: "0.78rem" }}>
            Book Free Assessment
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#1B2A6B", display: "none", flexShrink: 0 }}
          className="hamburger"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid #DDE3F0", padding: "0.5rem 1.25rem 1.25rem" }}>
          {/* Contact strip */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "0.75rem 0", borderBottom: "1px solid #DDE3F0", marginBottom: "0.5rem" }}>
            <a href="tel:+14032592474" style={{ ...topLink, color: "#1B2A6B" }}><PhoneIcon2 /><span>+1 403 259 2474</span></a>
            <a href="mailto:cbcfoot@live.ca" style={{ ...topLink, color: "#1B2A6B" }}><MailIcon2 /><span>cbcfoot@live.ca</span></a>
          </div>
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block",
              color: pathname === l.href ? "#E63329" : "#1B2A6B",
              textDecoration: "none",
              padding: "0.75rem 0",
              borderBottom: "1px solid #DDE3F0",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontSize: "0.88rem",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: "1rem", width: "100%" }}>
            Book Free Assessment
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
        @media (min-width: 640px) {
          .topbar { display: block !important; }
        }
        .topbar { display: none; }
      `}</style>
    </header>
  );
}

const topLink: React.CSSProperties = {
  color: "#fff", textDecoration: "none", fontSize: "0.8rem",
  display: "flex", alignItems: "center", gap: "5px",
};

function PhoneIcon()  { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }
function MailIcon()   { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }
function PhoneIcon2() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }
function MailIcon2()  { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }
function MenuIcon()   { return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>; }
function CloseIcon()  { return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>; }