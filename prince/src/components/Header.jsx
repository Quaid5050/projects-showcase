import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const services = [
  { name: 'House Washing', path: '/services/house-washing' },
  { name: 'Driveway Cleaning', path: '/services/driveway-cleaning' },
  { name: 'Patio & Deck Cleaning', path: '/services/patio-deck-cleaning' },
  { name: 'Siding Cleaning', path: '/services/siding-cleaning' },
  { name: 'Walkway Cleaning', path: '/services/walkway-cleaning' },
  { name: 'Exterior Surface Cleaning', path: '/services/exterior-surface-cleaning' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
      <div className="container">
        <div className="header__inner">
          {/* Logo */}
          <Link to="/" className="header__logo" aria-label="Pranvue Property Services - Home">
            <img
              src="/images/logo.png"
              alt="Pranvue Property Services"
              className="header__logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className={`header__nav-item header__nav-item--dropdown${dropdownOpen ? ' open' : ''}`}
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={(e) => {
                    // Only close if the cursor truly left the whole item+dropdown area
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setDropdownOpen(false);
                    }
                  }}
                >
                  <button
                    className={`header__nav-link header__nav-link--btn${location.pathname.startsWith('/services') ? ' active' : ''}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    {link.name}
                    <span className="header__dropdown-arrow">▾</span>
                  </button>
                  <div className="header__dropdown" role="menu">
                    <div className="header__dropdown-inner">
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="header__dropdown-item"
                          role="menuitem"
                        >
                          <span className="header__dropdown-dot">●</span>
                          {s.name}
                        </Link>
                      ))}
                      <div className="header__dropdown-divider" />
                      <Link to="/services" className="header__dropdown-item header__dropdown-item--all" role="menuitem">
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? ' active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="header__actions">
            <Link to="/booking" className="btn btn--primary btn--sm header__cta">
              Book Now
            </Link>
            <button
              className={`header__hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="header__mobile-item">
                <button
                  className="header__mobile-link header__mobile-link--toggle"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  {link.name}
                  <span className={`header__mobile-arrow${mobileServicesOpen ? ' open' : ''}`}>▾</span>
                </button>
                {mobileServicesOpen && (
                  <div className="header__mobile-dropdown">
                    {services.map((s) => (
                      <Link key={s.path} to={s.path} className="header__mobile-sub-link">
                        {s.name}
                      </Link>
                    ))}
                    <Link to="/services" className="header__mobile-sub-link header__mobile-sub-link--all">
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div key={link.name} className="header__mobile-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header__mobile-link${isActive ? ' active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              </div>
            )
          )}
          <div className="header__mobile-cta">
            <Link to="/booking" className="btn btn--primary">
              Book Your Service
            </Link>
            <div className="header__mobile-contact">
              <a href="tel:+16723999637" className="header__mobile-contact-link">
                📞 (672) 399-9637
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="header__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
