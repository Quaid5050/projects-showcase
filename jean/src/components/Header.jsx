import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const NAV = [
  { to: '/',         label: 'Home',       icon: '🏠' },
  { to: '/about',    label: 'About Us',   icon: '👥' },
  { to: '/services', label: 'Services',   icon: '🚛' },
  { to: '/contact',  label: 'Contact',    icon: '📞' },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [location.pathname]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">

          <Link to="/" className="header-logo" aria-label="Junk Pro Service — Home">
            <img src={logo} alt="" aria-hidden="true" width="48" height="48" />
            <div className="header-logo-text">
              Junk Pro<span>Service</span>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {NAV.map(l => (
              <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:+17543272760" className="header-phone" aria-label="Call us">
              <span className="header-phone-dot" aria-hidden="true" />
              754-327-2760
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm">Free Estimate</Link>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="sidebar-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── SIDEBAR BACKDROP ── */}
      <div
        className={`sidebar-backdrop${menuOpen ? ' visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── SIDEBAR PANEL ── */}
      <aside
        id="sidebar-nav"
        className={`sidebar${menuOpen ? ' open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Sidebar header */}
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Junk Pro Service" width="44" height="44" />
            <div className="header-logo-text">
              Junk Pro<span>Service</span>
            </div>
          </Link>
          <button
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav className="sidebar-nav">
          {NAV.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`sidebar-link${location.pathname === l.to ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="sidebar-link-icon" aria-hidden="true">{l.icon}</span>
              {l.label}
              <span className="sidebar-link-arrow" aria-hidden="true">›</span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="sidebar-cta">
          <Link
            to="/contact"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Get Free Estimate
          </Link>
          <a href="tel:+17543272760" className="sidebar-phone">
            <span aria-hidden="true">📞</span>
            +1 754-327-2760
          </a>
        </div>

        {/* Footer tag */}
        <div className="sidebar-foot">
          <span>Clean Spaces. Better Places.</span>
        </div>
      </aside>
    </>
  );
}
