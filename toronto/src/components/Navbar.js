import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: scrolled ? 'rgba(255,255,255,0.98)' : '#fff',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #e8ecf4' : '1px solid #eef1f6',
        transition: 'all 0.3s',
        boxShadow: scrolled ? '0 2px 20px rgba(10,22,40,0.06)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Toronto Notary Office" style={{ height: 46, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                color: pathname === l.to ? 'var(--blue)' : 'var(--navy)',
                textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: 0.5,
                transition: 'color 0.2s',
              }}>{l.label}</Link>
            ))}
            <Link to="/booking" style={{
              background: 'var(--navy)', color: '#fff',
              padding: '10px 24px', borderRadius: 4,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy)'; }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(o => !o)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--navy)', cursor: 'pointer' }} className="nav-burger">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #eef1f6', padding: '20px 5%' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                display: 'block', color: pathname === l.to ? 'var(--blue)' : 'var(--navy)',
                textDecoration: 'none', fontSize: 15, padding: '12px 0',
                borderBottom: '1px solid #f0f2f7',
              }}>{l.label}</Link>
            ))}
            <Link to="/booking" style={{
              display: 'flex', justifyContent: 'center', marginTop: 16,
              background: 'var(--navy)', color: '#fff',
              padding: '14px 32px', borderRadius: 4,
              fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Book Appointment</Link>
          </div>
        )}
      </nav>
      <style>{`
        @media(max-width:768px){.nav-desktop{display:none!important;}.nav-burger{display:flex!important;}}
      `}</style>
    </>
  );
}