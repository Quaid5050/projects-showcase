import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/referrals', label: 'Referrals' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(7,11,20,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 24px'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk, sans-serif'
          }}>A</div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: '#F9FAFB', lineHeight: 1 }}>AKU IPTV</div>
            <div style={{ fontSize: 10, color: '#06B6D4', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Worldwide</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              color: isActive(link.to) ? '#60A5FA' : '#9CA3AF',
              background: isActive(link.to) ? 'rgba(59,130,246,0.1)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
              onMouseEnter={e => { if (!isActive(link.to)) e.target.style.color = '#F9FAFB'; }}
              onMouseLeave={e => { if (!isActive(link.to)) e.target.style.color = '#9CA3AF'; }}
            >{link.label}</Link>
          ))}
        </div>

        {/* Auth buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {user ? (
            <>
              <Link to="/dashboard" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 8,
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.2)',
                color: '#60A5FA', fontSize: 14, fontWeight: 500
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                {user.name.split(' ')[0]}
              </Link>
              <button onClick={() => { logout(); navigate('/'); }} style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
                color: '#9CA3AF', cursor: 'pointer'
              }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ padding: '8px 16px', fontSize: 14, fontWeight: 500, color: '#9CA3AF' }}>Login</Link>
              <Link to="/register" style={{
                padding: '10px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: '#fff', boxShadow: '0 4px 15px rgba(59,130,246,0.3)'
              }}>Get Started</Link>
            </>
          )}

          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            display: 'none', background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer',
            padding: 8
          }} className="mobile-menu-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(7,11,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px'
        }}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 500,
              color: isActive(link.to) ? '#60A5FA' : '#9CA3AF',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#0D1526', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, marginBottom: 12 }}>AKU IPTV</div>
            <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7 }}>
              Premium IPTV boxes and subscriptions. Stream better. Pay less. Refer and earn.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, color: '#F9FAFB' }}>Quick Links</div>
            {['Products', 'Pricing', 'Referrals', 'Contact'].map(l => (
              <Link key={l} to={`/${l.toLowerCase()}`} style={{ display: 'block', color: '#9CA3AF', fontSize: 14, marginBottom: 10 }}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, color: '#F9FAFB' }}>Plans</div>
            {['1 Box + 1 Year Free', '3 Box for $299/yr', '5 Box for $399/yr', 'BYOD Renewal'].map(l => (
              <div key={l} style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 10 }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, color: '#F9FAFB' }}>Contact</div>
            <div style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 2 }}>
              WhatsApp Support<br/>
              24/7 Online Help<br/>
              Worldwide Delivery
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: '#6B7280', fontSize: 13 }}>© 2025 AKU IPTV Worldwide. All rights reserved.</span>
          <span style={{ color: '#6B7280', fontSize: 13 }}>Risk-Free • Refundable • Worldwide</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 72 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
