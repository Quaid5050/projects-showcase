import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand reveal">
            <img src={logo} alt="Junk Pro Service" width="64" height="64" />
            <p>Fast, reliable &amp; affordable junk removal for homeowners, property managers, and small businesses. Clean Spaces. Better Places.</p>
            <div className="footer-cta">
              <Link to="/contact" className="btn btn-primary btn-sm">Request a Cleanup</Link>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col reveal delay-1">
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact'], ['/contact', 'Free Estimate']].map(([to, label]) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col reveal delay-2">
            <h4>Services</h4>
            <ul>
              {['Furniture Removal','Appliance Removal','Yard Waste Removal','Construction Debris','Property Cleanups','Commercial Junk'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col reveal delay-3">
            <h4>Contact</h4>
            <a href="tel:+17543272760" className="footer-contact-row" aria-label="Call us">
              <span className="footer-contact-row-icon" aria-hidden="true">📞</span>
              +1 754-327-2760
            </a>
            <a href="mailto:independentricbrand@mail.com" className="footer-contact-row" aria-label="Email us">
              <span className="footer-contact-row-icon" aria-hidden="true">✉️</span>
              independentricbrand@mail.com
            </a>
            <a href="https://junkproservice.com" target="_blank" rel="noopener noreferrer" className="footer-contact-row" aria-label="Website">
              <span className="footer-contact-row-icon" aria-hidden="true">🌐</span>
              junkproservice.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Junk Pro Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
