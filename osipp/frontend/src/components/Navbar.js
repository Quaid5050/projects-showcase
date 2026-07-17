import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartIcon, WhatsAppIcon, MenuIcon, CloseIcon } from './Icons';

export default function Navbar({ onCartOpen }) {
  const { itemCount } = useCart();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/tracking', label: 'Track Order' },
  ];

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <img
            src="/images/logo.png"
            alt="O'SIPP Delivery"
            style={{ height: 46, width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        <div className="nav-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`nav-link${pathname === l.to ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button className="btn-icon" onClick={onCartOpen} aria-label="Cart">
            <CartIcon />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
          <button className="btn-wa" onClick={() => window.open('https://wa.me/19054622160', '_blank')}>
            <WhatsAppIcon /> <span>WhatsApp</span>
          </button>
          <Link to="/admin" className="btn-icon" title="Admin" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '-0.3px' }}>
            ADM
          </Link>
          <button className="btn-icon mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          position: 'absolute', top: 68, left: 0, right: 0,
          background: 'white', borderBottom: '1.5px solid var(--gray-lt)',
          padding: '12px 24px', zIndex: 99, animation: 'fadeUp .2s ease'
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`nav-link${pathname === l.to ? ' active' : ''}`}
              style={{ display: 'block', padding: '12px 0' }}
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/admin" className="nav-link" style={{ display: 'block', padding: '12px 0' }}
            onClick={() => setMobileOpen(false)}>
            Admin Panel
          </Link>
        </div>
      )}
    </nav>
  );
}