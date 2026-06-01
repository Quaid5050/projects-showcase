import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid rgba(184,150,90,0.12)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 5% 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
        <div>
          <img src="/logo.png" alt="Toronto Notary Office" style={{ height: 52, width: 'auto', objectFit: 'contain', marginBottom: 16 }} />
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>
            Professional notary services in Toronto. Fast, affordable, and legally precise.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
            416-572-9794<br/>
            info@torontonotaryoffice.ca<br/>
            5000 Yonge Street, Suite 1901<br/>
            Toronto, ON M2N 7E9
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>Services</h4>
          {['Affidavits','Statutory Declarations','Consent Letters','Power of Attorney','Real Estate Docs'].map(s => (
            <Link key={s} to="/services" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 10 }}>{s}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>Company</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/contact', 'Contact'], ['/booking', 'Book Now']].map(([to, label]) => (
            <Link key={to} to={to} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 10 }}>{label}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 18 }}>Info</h4>
          {['By appointment only', 'Same-day available', 'Virtual service available', 'TTC Subway accessible', 'Starting from $35'].map(s => (
            <p key={s} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>{s}</p>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(184,150,90,0.12)', padding: '20px 5%', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 Toronto Notary Office. All rights reserved.</p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Toronto's Trusted Notary — Barrister, Solicitor & Notary Public</p>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </footer>
  );
}