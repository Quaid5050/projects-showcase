'use client';
import Link from 'next/link';

export default function Footer() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '4px solid #DC2626' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img
                src="/logo.png"
                alt="Fast Track Rack LLC"
                style={{ height: 56, width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.8, maxWidth: 320, marginBottom: 24 }}>
              We design, develop, and manufacture cutting-edge, world-class fitness equipment for athletes and organizations who demand the best.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
              ].map((icon, i) => (
                <a key={i} href="#"
                  style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#DC2626'; (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display" style={{ color: '#fff', fontSize: 16, marginBottom: 20, letterSpacing: '0.05em' }}>QUICK LINKS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: '#6b7280', fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#DC2626')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                  >
                    <span style={{ width: 16, height: 1, background: '#DC2626', display: 'inline-block', flexShrink: 0 }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display" style={{ color: '#fff', fontSize: 16, marginBottom: 20, letterSpacing: '0.05em' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Email', val: 'thackerdalescott@gmail.com', href: 'mailto:thackerdalescott@gmail.com' },
                { label: 'Phone', val: '+1 (618) 825-8282', href: 'tel:+16188258282' },
                { label: 'Hours', val: 'Mon–Fri: 9AM–6PM CST', href: null },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4b5563', marginBottom: 3 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: '#9ca3af', fontSize: 13, textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#DC2626')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                      >{item.val}</a>
                    : <span style={{ color: '#9ca3af', fontSize: 13 }}>{item.val}</span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#4b5563', fontSize: 12, letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Fast Track Rack, LLC. All rights reserved.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.1)', background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#DC2626'; (e.currentTarget as HTMLElement).style.borderColor = '#DC2626'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#4b5563'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </button>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </footer>
  );
}
