import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e8ecf4' }}>
      {/* Main footer grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 5% 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
        
        {/* Brand column */}
        <div>
          <img src="/logo.png" alt="Toronto Notary Office" style={{ height: 48, width: 'auto', objectFit: 'contain', marginBottom: 18 }} />
          <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.8, maxWidth: 260, marginBottom: 18 }}>
            Professional notary services in Toronto. Fast, affordable, and legally precise.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="tel:4165729794" style={{ fontSize: 13, color: 'var(--navy)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.12.8.3 1.59.52 2.34l-.84.84a16 16 0 0 0 6.29 6.29l.84-.84c.75.22 1.54.4 2.34.52A2 2 0 0 1 22 16.92z"/></svg>
              416-572-9794
            </a>
            <a href="mailto:info@torontonotaryoffice.ca" style={{ fontSize: 13, color: 'var(--navy)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@torontonotaryoffice.ca
            </a>
            <p style={{ fontSize: 13, color: 'var(--text)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              5000 Yonge Street, Suite 1901<br/>Toronto, ON M2N 7E9
            </p>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--navy)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid var(--blue)', display: 'inline-block' }}>Services</h4>
          {['Affidavits','Statutory Declarations','Consent Letters','Power of Attorney','Real Estate Docs'].map(s => (
            <Link key={s} to="/services" style={{ display: 'block', fontSize: 13, color: 'var(--text)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
            >{s}</Link>
          ))}
        </div>

        {/* Company column */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--navy)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid var(--blue)', display: 'inline-block' }}>Company</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/contact', 'Contact'], ['/booking', 'Book Now']].map(([to, label]) => (
            <Link key={to} to={to} style={{ display: 'block', fontSize: 13, color: 'var(--text)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
            >{label}</Link>
          ))}
        </div>

        {/* Info column */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--navy)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid var(--blue)', display: 'inline-block' }}>Quick Info</h4>
          {[
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, text: 'By appointment only' },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, text: 'Same-day available' },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, text: 'Virtual service available' },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, text: 'TTC Subway accessible' },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, text: 'Starting from $35' },
          ].map(s => (
            <p key={s.text} style={{ fontSize: 13, color: 'var(--text)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              {s.icon} {s.text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #e8ecf4', padding: '20px 5%', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: 'var(--muted)' }}>© 2026 Toronto Notary Office. All rights reserved.</p>
        <p style={{ fontSize: 12, color: 'var(--muted)' }}>Toronto's Trusted Notary — Barrister, Solicitor & Notary Public</p>
      </div>

      <style>{`
        @media(max-width:1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media(max-width:600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}