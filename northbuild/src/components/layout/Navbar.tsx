"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { PhoneIcon, MenuIcon, XIcon } from "@/components/icons/Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const simpleLinks = [
    { label: "Home", href: "/" },
    { label: "Residential", href: "/residential" },
    { label: "Commercial", href: "/commercial" },
    { label: "Agricultural", href: "/agricultural" },
    { label: "Service & Repairs", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        backgroundColor: "rgba(8,8,8,0.98)",
        borderBottom: "1px solid #1A1A1A",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "88px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", gap: "3px" }}>
          <img
            src="/logo.png"
            alt={SITE.name || "NorthBuilt Door & Dock"}
            style={{ height: "50px", width: "auto", objectFit: "contain", display: "block" }}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "0.5rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Built Strong.</span>
            <span style={{ color: "#4A4A4A" }}>|</span>
            <span style={{ color: "#FFFFFF" }}>Built Local.</span>
            <span style={{ color: "#4A4A4A" }}>|</span>
            <span style={{ color: "#F26522" }}>Built to Last.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.1rem" }} className="nb-desktop-nav">
          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                padding: "0.45rem 0.65rem",
                color: "#D7D7D7",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F26522")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#D7D7D7")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={`tel:${SITE.phoneFull}`}
          className="nb-desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            backgroundColor: "#F26522",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "0.82rem",
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#FF7A1A")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F26522")}
        >
          <PhoneIcon size={15} color="#fff" />
          {SITE.phone}
        </a>

        {/* Mobile Toggle */}
        <button
          className="nb-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#0B0B0B", borderTop: "1px solid #1A1A1A", padding: "1rem 1.5rem" }}>
          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "#D7D7D7",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderBottom: "1px solid #1A1A1A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneFull}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#F26522",
              color: "#fff",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              marginTop: "1rem",
              justifyContent: "center",
            }}
          >
            <PhoneIcon size={18} color="#fff" />
            {SITE.phone}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .nb-mobile-toggle { display: none !important; }
          .nb-desktop-nav { display: flex !important; }
        }
        @media (max-width: 1023px) {
          .nb-mobile-toggle { display: block !important; }
          .nb-desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}