'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '16px 48px' : '24px 48px',
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L4 10V30H28V10L16 2Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
            <path d="M16 2L4 10" stroke="#c9a84c" strokeWidth="1"/>
            <path d="M16 2L28 10" stroke="#c9a84c" strokeWidth="1"/>
            <rect x="10" y="18" width="12" height="12" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
            <path d="M13 18V30M19 18V30" stroke="#c9a84c" strokeWidth="0.5"/>
            <circle cx="16" cy="8" r="1.5" fill="#c9a84c"/>
          </svg>
          <div>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', letterSpacing: '0.15em', color: '#f0e8d8' }}>
              CENTRAL MAUSOLEUMS
            </div>
            <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>
              & Granite
            </div>
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="hidden-mobile">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
        ))}
        <Link href="/contact" className="btn-gold" style={{ padding: '10px 24px', fontSize: '0.65rem', textDecoration: 'none', display: 'inline-block' }}>
          Get a Quote
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        className="show-mobile"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {menuOpen ? (
            <path d="M6 6L18 18M6 18L18 6" stroke="#c9a84c" strokeWidth="1.5"/>
          ) : (
            <>
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#c9a84c" strokeWidth="1.5"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(10,10,10,0.98)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          padding: '24px 48px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
