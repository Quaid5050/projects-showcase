import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 👇 Logo image import
import logo from '../assets/logo.png'; // apna path yahan set karo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome ? 'rgba(26,39,68,0.98)' : 'transparent';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: navBg,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: scrolled
          ? '1px solid rgba(201,147,58,0.2)'
          : '1px solid transparent',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          {/* 👇 SVG ki jgha image */}
          <img
            src={logo}
            alt="Sunset Retreat"
            style={{
              width: 52,
              height: 52,
              objectFit: 'contain',
            }}
          />

          {/* 👇 Text same rahega */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                lineHeight: 1,
              }}
            >
              SUNSET RETREAT
            </div>

            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 9,
                letterSpacing: '0.3em',
                color: '#C9933A',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              Jamaica
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 36 }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 12,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:
                  location.pathname === l.to ? '#C9933A' : '#FFFFFF',
                fontWeight: 500,
                transition: 'color 0.3s',
                borderBottom:
                  location.pathname === l.to
                    ? '1px solid #C9933A'
                    : '1px solid transparent',
                paddingBottom: 2,
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="btn-primary"
            style={{
              padding: '10px 24px',
              fontSize: 11,
              letterSpacing: '0.15em',
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 1.5,
                background: '#C9933A',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(26,39,68,0.98)',
            padding: '1rem 2rem 1.5rem',
            borderTop: '1px solid rgba(201,147,58,0.2)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '10px 0',
                fontFamily: "'Jost', sans-serif",
                fontSize: 13,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:
                  location.pathname === l.to ? '#C9933A' : '#FFFFFF',
                borderBottom: '1px solid rgba(201,147,58,0.1)',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}