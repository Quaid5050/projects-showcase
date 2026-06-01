"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
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

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // FIX: same nav link click -> scroll top
  const handleNavClick = (href: string) => {
    setOpen(false);

    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(124,58,237,0.15)",
        transition: "all 0.3s ease",
        padding: scrolled ? "10px 20px" : "16px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
       {/* Logo */}
{/* Logo */}
<Link
  href="/"
  onClick={() => handleNavClick("/")}
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    position: "relative",
    zIndex: 1001,
    minWidth: 120,
  }}
>
  <Image
    src="/images/logo-icon.jpg"
    alt="FAIRSAFE"
    width={110}
    height={42}
    priority
    style={{
      width: "110px",
      height: "auto",
      objectFit: "contain",
    }}
  />
</Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden lg:flex"
          style={{
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
          }}
        >
          {links.map((l) => {
            const active = pathname === l.href;

            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => handleNavClick(l.href)}
                  style={{
                    color: active
                      ? "#7C3AED"
                      : "rgba(26,10,46,0.75)",
                    textDecoration: "none",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "0.2s ease",
                    position: "relative",
                    paddingBottom: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "#7C3AED";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color =
                        "rgba(26,10,46,0.75)";
                    }
                  }}
                >
                  {l.label}

                  {/* Active line */}
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: active ? "100%" : "0%",
                      height: 2,
                      background: "#7C3AED",
                      borderRadius: 10,
                      transition: "0.25s ease",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div
          className="hidden lg:flex"
          style={{
            alignItems: "center",
            gap: 14,
          }}
        >
          <a
            href="tel:6043788311"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "rgba(26,10,46,0.72)",
              textDecoration: "none",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            <Phone size={15} color="#7C3AED" />
            (604) 378-8311
          </a>

          <Link
            href="/contact"
            style={{
              background: "#7C3AED",
              color: "white",
              textDecoration: "none",
              padding: "11px 22px",
              borderRadius: 8,
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "0.2s ease",
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="flex lg:hidden"
          style={{
            background: "transparent",
            border: "none",
            color: "#1A0A2E",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1001,
          }}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

     {/* Mobile Menu */}
<div
  className="lg:hidden"
  style={{
    position: "fixed",
    top: 0,
    right: open ? 0 : "-100%",
    width: "100%",
    height: "100dvh", // FIXED
    background: "#FFFFFF",
    zIndex: 998,
    transition: "right 0.35s ease",
    padding: "100px 24px calc(30px + env(safe-area-inset-bottom))",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto", // IMPORTANT
  }}
>
  {/* Mobile Links */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 22, // reduced from 28
    }}
  >
    {links.map((l) => {
      const active = pathname === l.href;

      return (
        <Link
          key={l.href}
          href={l.href}
          onClick={() => handleNavClick(l.href)}
          style={{
            color: active ? "#7C3AED" : "#1A0A2E",
            textDecoration: "none",
            fontSize: "1.8rem", // slightly smaller
            fontFamily: "var(--font-bebas)",
            letterSpacing: "0.05em",
            borderLeft: active
              ? "4px solid #7C3AED"
              : "4px solid transparent",
            paddingLeft: 14,
            lineHeight: 1,
          }}
        >
          {l.label}
        </Link>
      );
    })}
  </div>

  {/* Bottom CTA */}
  <div
    style={{
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 30,
    }}
  >
    <Link
      href="/contact"
      onClick={() => setOpen(false)}
      style={{
        background: "#7C3AED",
        color: "white",
        textDecoration: "none",
        textAlign: "center",
        padding: "15px 24px",
        borderRadius: 10,
        fontSize: "1rem",
        fontWeight: 800,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      Get a Free Quote
    </Link>

   <a
  href="tel:6043788311"
  style={{
    color: "rgba(26,10,46,0.68)",
    textDecoration: "none",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // ADD THIS
    gap: 10,
    width: "100%", // ADD THIS
    textAlign: "center",
  }}
>
  <Phone size={18} color="#7C3AED" />
  (604) 378-8311
</a>
  </div>
</div>

    </nav>
  );
}