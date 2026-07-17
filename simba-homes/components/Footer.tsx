'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#131929', borderTop: '3px solid #D01C2A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Image src="/logo1.png" alt="Simba Homes" width={60} height={60} style={{ objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#fff' }}>SIMBA HOMES LTD</div>
                <div style={{ fontSize: '10px', color: '#D01C2A', letterSpacing: '0.2em', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>Lower Mainland British Columbia</div>
              </div>
            </div>

            {/* Warranty logos block */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A5568', marginBottom: '12px' }}>Warranty Protected By</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* WBI Logo badge */}
                <div style={{ background: '#D01C2A', padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '0.05em' }}>WBI</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '7px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>HOME WARRANTY</div>
                </div>
                {/* BC Housing Logo badge */}
                <div style={{ background: '#2F3A52', border: '1px solid rgba(255,255,255,0.15)', padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '0.05em' }}>BC HOUSING</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '7px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>REGISTERED BUILDER</div>
                </div>
                {/* 2-5-10 badge */}
                <div style={{ background: '#1E2533', border: '1px solid rgba(208,28,42,0.4)', padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 800, color: '#D01C2A', lineHeight: 1 }}>2·5·10</div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '7px', color: '#718096', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>YEAR WARRANTY</div>
                </div>
              </div>
            </div>

            {/* Google rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: '#F5A623', fontSize: '14px' }}>★★★★★</div>
              <span style={{ fontSize: '12px', color: '#718096' }}>4.9 Google Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>Services</div>
            {['Custom & Spec Homes', 'Laneway Homes', 'Multiplexes', 'Land Development', 'Renovation', 'Design & Permitting'].map(s => (
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
              {[
                { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>, href: 'tel:+17787077325', text: '+1 778 707 7325' },
                { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, href: 'mailto:info@simbahomes.ca', text: 'info@simbahomes.ca' },
                { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, href: '#', text: 'Lower Mainland British Columbia, BC' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#CBD5E0', textDecoration: 'none', fontSize: '14px' }}>
                  <svg style={{ marginTop: '2px', flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D01C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                  {c.text}
                </a>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
              <a href="https://www.instagram.com/simbahomes" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#252D3D', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#D01C2A'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#252D3D'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/simbahomes" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#252D3D', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#D01C2A'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#252D3D'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.88h-2.4v6.99A10 10 0 0022 12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 48px', maxWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '12px', color: '#4A5568', maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>© {new Date().getFullYear()} Simba Homes Ltd. All rights reserved. BC Licensed Residential Builder.</span>
          <span style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#4A5568', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#D01C2A'} onMouseLeave={e => e.currentTarget.style.color = '#4A5568'}>Privacy Policy</a>
            <a href="#" style={{ color: '#4A5568', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#D01C2A'} onMouseLeave={e => e.currentTarget.style.color = '#4A5568'}>Terms</a>
          </span>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { footer > div > div:first-child { grid-template-columns: 1fr !important; } footer > div { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </footer>
  );
}
