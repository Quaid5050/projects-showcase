import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pastor-stories', label: 'Pastor Stories' },
    { path: '/resources', label: 'Resources' },
    { path: '/crisis-response', label: 'Crisis Response' },
    { path: '/events', label: 'Events' },
    { path: '/request-access', label: 'Request Access' },
    { path: '/donate', label: 'Donate' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="rgba(212,168,83,0.15)"/>
                <circle cx="20" cy="14" r="5" stroke="#d4a853" strokeWidth="2" fill="none"/>
                <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#d4a853" strokeWidth="2" fill="none"/>
              </svg>
              <div>
                <span className="footer-name">COBB CHURCH</span>
                <span className="footer-name gold">NETWORK</span>
              </div>
            </div>
            <p className="footer-tagline">Stronger Churches. Stronger Community.</p>
            <p className="footer-powered">Powered by the Pastors Alliance Initiative of The Shepherd's Table.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="mailto:info@cobbchurchnetwork.org" aria-label="Email"><FiMail /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.slice(0, 5).map(l => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              {quickLinks.slice(5).map(l => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay Connected</h4>
            <p>Follow us for updates, events, and ways to get involved.</p>
            <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary btn-sm">→</button>
            </form>
            <div className="footer-contact-info">
              <p>📍 Cobb County, Georgia</p>
              <p>✉️ info@cobbchurchnetwork.org</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Cobb Church Network. All Rights Reserved.</p>
          <p>An initiative of The Shepherd's Table</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
