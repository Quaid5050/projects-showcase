import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#2c2820', color: '#d4cfc4', padding: 'clamp(48px,7vw,64px) clamp(20px,5vw,56px) 32px' }}>
      <style>{`
        .footer-link { color: #a09890; font-size: 0.875rem; text-decoration: none; transition: color 0.3s; display: block; margin-bottom: 10px; }
        .footer-link:hover { color: #d4aa4a; }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Image
                src="/logo.png"
                alt="Central Mausoleums & Granite"
                width={140} height={65}
                style={{ objectFit: 'contain', height: 'auto', filter: 'brightness(0.92)' }}
              />
            </div>
            <p style={{ color: '#7a7268', fontSize: '0.875rem', lineHeight: '1.8' }}>
              Crafting timeless memorials that honor lives with dignity, grace, and lasting beauty.
            </p>
          </div>

          {/* Navigation — includes Gallery */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '20px' }}>NAVIGATION</h4>
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/products', 'Products'],
              ['/services', 'Services'],
              ['/gallery', 'Gallery'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '20px' }}>PRODUCTS</h4>
            {[
              'Single Mausoleum',
              'Double Mausoleum',
              'Four Crypt',
              'Six Crypt',
              'Columbarium',
              'Cremation Benches',
            ].map(item => (
              <Link key={item} href="/products" className="footer-link">{item}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '20px' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="tel:+19107344426" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#7a7268', fontSize: '0.875rem', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.2 14.4 14.6 14.4 14.8 14.6C15.8 15 16.8 15.2 18 15.2C18.4 15.2 18.8 15.6 18.8 16V18.8C18.8 19.2 18.4 19.6 18 19.6C9.4 19.6 2.4 12.6 2.4 4C2.4 3.6 2.8 3.2 3.2 3.2H6C6.4 3.2 6.8 3.6 6.8 4C6.8 5.2 7 6.2 7.4 7.2C7.4 7.4 7.4 7.8 7.2 8L6.6 10.8Z" stroke="#b8922a" strokeWidth="1.2"/>
                </svg>
                +1 (910) 734-4426
              </a>
              <a href="mailto:Centralmausoleums@gmail.com" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#7a7268', fontSize: '0.875rem', textDecoration: 'none', wordBreak: 'break-word' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M3 8L12 13L21 8M3 6H21V18H3V6Z" stroke="#b8922a" strokeWidth="1.2"/>
                </svg>
                Centralmausoleums@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px' }}>
          <p style={{ color: '#4a4540', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} Central Mausoleums & Granite. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(184,146,42,0.3)' }}/>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L2 7V18H18V7L10 2Z" stroke="rgba(184,146,42,0.4)" strokeWidth="1" fill="none"/>
            </svg>
            <div style={{ width: '28px', height: '1px', background: 'rgba(184,146,42,0.3)' }}/>
          </div>
        </div>
      </div>
    </footer>
  );
}