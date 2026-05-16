import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from './gwplogo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,

    background: '#FFFFFF',

    backdropFilter: 'blur(12px)',

    borderBottom: '1px solid rgba(10,25,50,0.08)',

    boxShadow: scrolled
      ? '0 6px 24px rgba(0,0,0,0.08)'
      : '0 2px 10px rgba(0,0,0,0.03)',

    transition: 'all 0.3s ease',
  };

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/testimonials', label: 'Reviews' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <nav style={navStyle}>
      <div
        className="nav-container"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 92,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="Global Pardon and Waivers"
            className="nav-logo"
            style={{
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                color: '#0B1F3A',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.2px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#C89B2D';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#0B1F3A';
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            to="/apply"
            style={{
              background:
                'linear-gradient(135deg, #D4AF37, #F2D57E)',

              color: '#081626',

              padding: '14px 28px',

              borderRadius: 10,

              fontWeight: 700,

              fontSize: '0.82rem',

              letterSpacing: '1px',

              textTransform: 'uppercase',

              textDecoration: 'none',

              boxShadow:
                '0 6px 18px rgba(212,175,55,0.28)',

              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';

              e.target.style.boxShadow =
                '0 10px 24px rgba(212,175,55,0.38)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';

              e.target.style.boxShadow =
                '0 6px 18px rgba(212,175,55,0.28)';
            }}
          >
            APPLY NOW
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: '#0B1F3A',
                borderRadius: 10,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: '#FFFFFF',

            padding: '1rem 2rem 1.5rem',

            borderTop:
              '1px solid rgba(10,25,50,0.08)',

            boxShadow:
              '0 10px 30px rgba(0,0,0,0.06)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block',

                color: '#0B1F3A',

                padding: '14px 0',

                fontSize: '0.96rem',

                fontWeight: 500,

                textDecoration: 'none',

                borderBottom:
                  '1px solid rgba(10,25,50,0.06)',
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/apply"
            style={{
              display: 'block',

              marginTop: 20,

              background:
                'linear-gradient(135deg, #D4AF37, #F2D57E)',

              color: '#081626',

              padding: '14px',

              textAlign: 'center',

              borderRadius: 10,

              fontWeight: 700,

              letterSpacing: '1px',

              textTransform: 'uppercase',

              textDecoration: 'none',

              boxShadow:
                '0 6px 18px rgba(212,175,55,0.25)',
            }}
          >
            APPLY NOW
          </Link>
        </div>
      )}

      <style>{`
        .nav-logo {
          height: 72px;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }

          /* MOBILE NAV HEIGHT */
          .nav-container {
            height: 68px !important;
            padding: 0 1rem !important;
          }

          /* MOBILE LOGO */
          .nav-logo {
            height: 42px;
          }
        }
      `}</style>
    </nav>
  );
}