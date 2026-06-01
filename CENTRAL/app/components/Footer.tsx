import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '64px 48px 32px',
    }}>
      <style>{`
        .footer-link { color: #8a7f72; font-size: 0.85rem; text-decoration: none; transition: color 0.3s; }
        .footer-link:hover { color: #c9a84c; }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L4 10V30H28V10L16 2Z" stroke="#c9a84c" strokeWidth="1" fill="none"/>
                <rect x="10" y="18" width="12" height="12" stroke="#c9a84c" strokeWidth="0.75" fill="none"/>
                <circle cx="16" cy="8" r="1.5" fill="#c9a84c"/>
              </svg>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#f0e8d8' }}>CENTRAL MAUSOLEUMS</div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: '#c9a84c' }}>& GRANITE</div>
              </div>
            </div>
            <p style={{ color: '#8a7f72', fontSize: '0.85rem', lineHeight: '1.7' }}>
              Crafting timeless memorials that honor lives with dignity, grace, and lasting beauty.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '20px', textTransform: 'uppercase' }}>Navigation</h4>
            {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
              <div key={href} style={{ marginBottom: '10px' }}>
                <Link href={href} className="footer-link">{label}</Link>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '20px', textTransform: 'uppercase' }}>Products</h4>
            {['Single Mausoleums', 'Double Mausoleums', 'Four Crypt', 'Six Crypt', 'Columbarium', 'Cremation Benches'].map(item => (
              <div key={item} style={{ marginBottom: '10px', color: '#8a7f72', fontSize: '0.85rem' }}>{item}</div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '20px', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M3 8L12 13L21 8M3 6H21V18H3V6Z" stroke="#c9a84c" strokeWidth="1.2"/>
                </svg>
                <a href="mailto:Centralmausoleums@gmail.com" className="footer-link">
                  Centralmausoleums@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.2 14.4 14.6 14.4 14.8 14.6C15.8 15 16.8 15.2 18 15.2C18.4 15.2 18.8 15.6 18.8 16V18.8C18.8 19.2 18.4 19.6 18 19.6C9.4 19.6 2.4 12.6 2.4 4C2.4 3.6 2.8 3.2 3.2 3.2H6C6.4 3.2 6.8 3.6 6.8 4C6.8 5.2 7 6.2 7.4 7.2C7.4 7.4 7.4 7.8 7.2 8L6.6 10.8Z" stroke="#c9a84c" strokeWidth="1.2"/>
                </svg>
                <a href="tel:+19107344426" className="footer-link">+1 (910) 734-4426</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#3d3830', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Central Mausoleums & Granite. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.3)' }}></div>
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L4 10V30H28V10L16 2Z" stroke="rgba(201,168,76,0.4)" strokeWidth="1" fill="none"/>
            </svg>
            <div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.3)' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
