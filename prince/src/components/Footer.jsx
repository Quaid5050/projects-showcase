import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'House Washing', path: '/services/house-washing' },
  { name: 'Driveway Cleaning', path: '/services/driveway-cleaning' },
  { name: 'Patio & Deck Cleaning', path: '/services/patio-deck-cleaning' },
  { name: 'Siding Cleaning', path: '/services/siding-cleaning' },
  { name: 'Walkway Cleaning', path: '/services/walkway-cleaning' },
  { name: 'Exterior Cleaning', path: '/services/exterior-surface-cleaning' },
];

const resourceLinks = [
  { name: 'Book a Service', path: '/booking' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Free Estimate', path: '/booking' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      {/* Wave top */}
      <div className="footer__wave">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white"/>
        </svg>
      </div>

      {/* Trust bar */}
      <div className="footer__trust-bar">
        <span className="footer__trust-dot" />
        <span className="footer__trust-text">Trusted by homeowners across Surrey, White Rock &amp; Langley</span>
        <span className="footer__trust-dot" />
      </div>

      {/* Main grid */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* ── Col 1: Brand + CTA card ── */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img
                  src="/images/logo.png"
                  alt="Pranvue Property Services"
                  className="footer__logo-img"
                />
              </Link>
              <p className="footer__tagline">
                Professional pressure washing services that restore curb appeal,
                protect your surfaces, and keep your home looking its best.
              </p>

              <div className="footer__cta-card">
                <div className="footer__cta-card-body">
                  <p className="footer__cta-card-title">Ready to book a service?</p>
                  <p className="footer__cta-card-sub">
                    Get a free estimate — no hidden charges.
                  </p>
                </div>
                <Link to="/booking" className="footer__cta-card-btn">
                  Book Now <span>↗</span>
                </Link>
              </div>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <div className="footer__col-line" />
              <ul className="footer__links">
                {quickLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path} className="footer__link">
                      <span className="footer__link-arrow">›</span>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Services ── */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <div className="footer__col-line" />
              <ul className="footer__links">
                {serviceLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path} className="footer__link">
                      <span className="footer__link-arrow">›</span>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Resources ── */}
            <div className="footer__col">
              <h4 className="footer__col-title">Resources</h4>
              <div className="footer__col-line" />
              <ul className="footer__links">
                {resourceLinks.map((l) => (
                  <li key={l.name}>
                    <Link to={l.path} className="footer__link">
                      <span className="footer__link-arrow">›</span>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 5: Contact Info ── */}
            <div className="footer__col footer__col--contact">
              <h4 className="footer__col-title">Contact Info</h4>
              <div className="footer__col-line" />
              <div className="footer__contact-list">
                <div className="footer__contact-row">
                  <div className="footer__contact-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span>Surrey, White Rock &amp; Langley, BC</span>
                </div>
                <a href="mailto:Pranvueservices@gmail.com" className="footer__contact-row footer__contact-row--link">
                  <div className="footer__contact-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span>Pranvueservices@gmail.com</span>
                </a>
                <a href="tel:+16723999637" className="footer__contact-row footer__contact-row--link">
                  <div className="footer__contact-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <span>(672) 399-9637</span>
                </a>
                <div className="footer__contact-row">
                  <div className="footer__contact-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                    </svg>
                  </div>
                  <span>Mon – Sat: 8AM – 6PM PT</span>
                </div>
              </div>
            </div>

          </div>

          {/* Newsletter bar */}
          <div className="footer__newsletter">
            <div className="footer__newsletter-left">
              <div className="footer__newsletter-icon">✉️</div>
              <div>
                <p className="footer__newsletter-title">Stay in the loop</p>
                <p className="footer__newsletter-sub">Get seasonal tips, offers, and property care updates.</p>
              </div>
            </div>
            {subscribed ? (
              <p className="footer__newsletter-success">✓ Thanks for subscribing!</p>
            ) : (
              <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="footer__newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="footer__newsletter-btn">
                  Subscribe <span>›</span>
                </button>
              </form>
            )}
            <div className="footer__newsletter-orb" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer__divider" />

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            {/* Social */}
            <div className="footer__social-wrap">
              <span className="footer__social-label">Follow us</span>
              <a
                href="https://instagram.com/Pranvue_services.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="mailto:sheoranprince42@gmail.com" className="footer__social-btn" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:+16723999637" className="footer__social-btn" aria-label="Phone">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="footer__copyright">
              © {currentYear} Pranvue Property Services. All rights reserved.
            </p>

            {/* Back to top */}
            <button className="footer__back-top" onClick={scrollToTop} aria-label="Back to top">
              ↑ Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
