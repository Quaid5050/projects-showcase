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
              {/* PDF: Actual logo image instead of SVG placeholder */}
              <img
                src="/images/logo2.png"
                alt="Cobb Church Network Logo"
                className="footer-logo-img"
              />
              
            </div>

            <p className="footer-tagline">Stronger Churches. Stronger Community.</p>
            <p className="footer-powered">An Initiative of Cobb Pastors Alliance • Powered by The Shepherd's Table.</p>

            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61588685120674" aria-label="Facebook"><FiFacebook /></a>
              
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
            <p>Follow us for updates, events, and ways to get involved..</p>
            
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
          <p>An Initiative of Cobb Pastors Alliance • Powered by The Shepherd's Table</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;