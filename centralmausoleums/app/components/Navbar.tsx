'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const transparentNavbar = isHome && !scrolled;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '14px 56px' : '20px 56px',
          background: transparentNavbar
            ? 'transparent'
            : 'rgba(250,248,244,0.96)',
          backdropFilter: transparentNavbar ? 'none' : 'blur(16px)',
          WebkitBackdropFilter: transparentNavbar ? 'none' : 'blur(16px)',
          borderBottom: transparentNavbar
            ? '1px solid transparent'
            : '1px solid rgba(184,146,42,0.15)',
          transition: 'all .35s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src="/logo.png"
            alt="Central Mausoleums & Granite"
            style={{
              height: scrolled ? '58px' : '68px',
              width: 'auto',
              display: 'block',
              transition: 'all .35s ease',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="hide-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '34px',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: transparentNavbar ? '#ffffff' : '#2c2820',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: '0.3s ease',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            style={{
              textDecoration: 'none',
              background: '#b8922a',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: '0.3s ease',
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            padding: 0,
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 5L19 19M19 5L5 19"
                stroke="#b8922a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke={transparentNavbar ? '#ffffff' : '#2c2820'}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '82px',
            left: 0,
            right: 0,
            zIndex: 999,
            background: 'rgba(250,248,244,0.98)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(184,146,42,0.15)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#2c2820',
                fontSize: '0.9rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: 'none',
              background: '#b8922a',
              color: '#fff',
              padding: '14px',
              borderRadius: '999px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}