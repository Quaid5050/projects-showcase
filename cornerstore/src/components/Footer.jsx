import { Link } from 'react-router-dom'
import './Footer.css'

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#0d1b2a"/>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#2d6a2e"/>
                <path d="M6 22V14l10-8 10 8v8H6z" fill="white" opacity="0.9"/>
                <rect x="12" y="17" width="8" height="5" fill="#2d6a2e"/>
              </svg>
              <div>
                <div className="footer-logo-name">Corner Store</div>
                <div className="footer-logo-sub">at Linwood</div>
              </div>
            </div>
            <p className="footer-tagline">
              Your neighbourhood one-stop shop in Linwood, Ontario. Serving the community with pride.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              {[['/', 'Home'], ['/products', 'Products'], ['/menu', 'Menu'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Store Hours</h4>
            <ul className="hours-list">
              <li><span><ClockIcon /><strong>Mon – Sat</strong></span><span>8:00 AM – 9:00 PM</span></li>
              <li><span><ClockIcon /><strong>Sun & Holidays</strong></span><span>10:00 AM – 6:00 PM</span></li>
            </ul>
            <div className="open-badge">
              <span className="open-dot"></span> Open Now
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPinIcon />
                <span>5190 Ament Line A,<br/>Linwood, ON N0B 2A0</span>
              </li>
              <li>
                <PhoneIcon />
                <a href="tel:5196982600">(519) 698-2600</a>
              </li>
              <li>
                <MailIcon />
                <a href="mailto:cornerstoreatlinwood@gmail.com">cornerstoreatlinwood@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 Corner Store at Linwood. All rights reserved.</p>
          <p>Made with ❤️ for the Linwood community</p>
        </div>
      </div>
    </footer>
  )
}