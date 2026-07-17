import { Link } from 'react-router-dom';
import { InstagramIcon, WhatsAppIcon, PhoneIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img
              src="/images/logo.png"
              alt="O'SIPP Delivery"
              style={{ height: 56, width: 'auto', objectFit: 'contain', marginBottom: 14 }}
            />
            <div className="footer-desc">Fast & reliable alcohol delivery in Mississauga and the GTA. Beers, wines, spirits and convenience products at your door.</div>
            <div className="footer-socials">
              <button className="social-btn" onClick={() => window.open('https://www.instagram.com/osipp_delivery', '_blank')}><InstagramIcon /></button>
              <button className="social-btn" onClick={() => window.open('https://wa.me/19054622160', '_blank')}><WhatsAppIcon /></button>
              <button className="social-btn"><PhoneIcon /></button>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Shop</div>
            <Link to="/products?cat=Beer" className="footer-link">Beer</Link>
            <Link to="/products?cat=Spirits" className="footer-link">Spirits</Link>
            <Link to="/products?cat=Wine" className="footer-link">Wine</Link>
            <Link to="/products?cat=Convenience" className="footer-link">Convenience</Link>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/tracking" className="footer-link">Track Order</Link>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-link">+1 905 462 2160</div>
            <div className="footer-link">osippdelivery741@gmail.com</div>
            <div className="footer-link">Mississauga, ON</div>
            <button className="btn-wa" style={{ fontSize: 12, padding: '8px 14px', marginTop: 16 }}
              onClick={() => window.open('https://wa.me/19054622160', '_blank')}>
              <WhatsAppIcon size={14} /> Chat on WhatsApp
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">&copy; 2026 O'SIPP Delivery. All rights reserved.</div>
          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}