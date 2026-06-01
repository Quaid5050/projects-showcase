'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#131929', borderTop: '3px solid #D01C2A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Image src="/logo.png" alt="Simba Homes" width={60} height={60} style={{ objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>SIMBA HOMES LTD</div>
                <div style={{ fontSize: '10px', color: '#D01C2A', letterSpacing: '0.2em', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>BRITISH COLUMBIA · CANADA</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.7, maxWidth: '280px', marginBottom: '24px' }}>
              Premium custom home builders, land developers & renovation specialists across British Columbia.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['WBI Warranty', 'BC Housing', '2-5-10 Protected'].map(b => (
                <span key={b} style={{ fontSize: '9px', padding: '4px 10px', border: '1px solid rgba(208,28,42,0.4)', color: '#D01C2A', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Services</div>
            {['Custom Homes', 'Spec Homes', 'Land Development', 'Subdivision', 'Lot Services', 'Renovation'].map(s => (
              <Link key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: '#718096', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#718096'}
              >{s}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Company</div>
            {[['About Us', '/about'], ['Our Projects', '/projects'], ['Warranty', '/warranty'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={l} href={h} style={{ display: 'block', fontSize: '13px', color: '#718096', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#718096'}
              >{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Contact Us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg style={{ marginTop: '2px', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+17787077325" style={{ fontSize: '14px', color: '#CBD5E0' }}>+1 778 707 7325</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg style={{ marginTop: '2px', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@simbahomes.ca" style={{ fontSize: '14px', color: '#CBD5E0' }}>info@simbahomes.ca</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg style={{ marginTop: '2px', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style={{ fontSize: '14px', color: '#CBD5E0' }}>British Columbia, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '12px', color: '#4A5568' }}>© {new Date().getFullYear()} Simba Homes Ltd. All rights reserved. BC Licensed Residential Builder.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms'].map(l => (
              <a key={l} href="#" style={{ fontSize: '12px', color: '#4A5568', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D01C2A'}
                onMouseLeave={e => e.currentTarget.style.color = '#4A5568'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { footer > div > div:first-child { grid-template-columns: 1fr !important; } }
        footer > div { padding-left: 20px !important; padding-right: 20px !important; }
      `}</style>
    </footer>
  );
}
