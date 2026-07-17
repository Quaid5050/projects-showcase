'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/permitting', label: 'Permitting' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    fn();

    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* ── TOP CONTACT STRIP ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          background: '#D01C2A',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 48px',
        }}
      >
        <a
          href="mailto:info@simbahomes.ca"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
            padding: '0 16px', height: '36px',
            borderRight: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          info@simbahomes.ca
        </a>

        <a
          href="tel:+17787077325"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
            padding: '0 16px', height: '36px',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          778 707 7325
        </a>
      </div>

      {/* ── ORIGINAL NAVBAR (unchanged) ── */}
      <nav
        style={{
          position: 'fixed',
          top: '36px',
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
        }}
      >
       {/* Logo */}
<Link
  href="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "14px",
    textDecoration: "none",
  }}
>
  <Image
    src="/logo1.png"
    alt="Simba Homes Ltd"
    width={96}
    height={96}
    style={{ objectFit: "contain" }}
  />

  <div style={{ lineHeight: 1.1 }}>
    <div
      style={{
        fontFamily: "Barlow Condensed, sans-serif",
        fontWeight: 800,
        fontSize: "32px",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#1E2533",
      }}
    >
      SIMBA HOMES
    </div>

    <div
      style={{
        fontFamily: "Barlow Condensed, sans-serif",
        fontSize: "14px",
        letterSpacing: "0.25em",
        color: "#D01C2A",
        textTransform: "uppercase",
        fontWeight: 600,
        textAlign: "center",
        width: "100%",
        display: "block",
      }}
    >
      LTD
    </div>
  </div>
</Link>

        {/* Desktop Navigation */}
        <div
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {links.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: '8px 16px',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: active ? '#D01C2A' : '#1E2533',
                  borderBottom: active
                    ? '2px solid #D01C2A'
                    : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#D01C2A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#1E2533';
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            style={{
              marginLeft: '12px',
              padding: '12px 24px',
              background: '#D01C2A',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: '0.3s',
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background:
                  i === 1 && open ? 'transparent' : '#1E2533',
                transition: 'all 0.3s ease',
                transform: open
                  ? i === 0
                    ? 'rotate(45deg) translate(5px,5px)'
                    : i === 2
                    ? 'rotate(-45deg) translate(5px,-5px)'
                    : ''
                  : '',
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '106px',
            background: '#ffffff',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '36px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color:
                  pathname === l.href ? '#D01C2A' : '#1E2533',
                padding: '8px 0',
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: '20px',
              padding: '14px 28px',
              background: '#D01C2A',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }

        @media (max-width: 600px) {
          nav {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </>
  );
}