'use client';
import Link from 'next/link';

export default function About() {
  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">

          {/* Image block */}
          <div style={{ position: 'relative' }}>
            <div className="img-zoom" style={{ aspectRatio: '4/5' }}>
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85" alt="Fitness equipment" />
            </div>
            {/* Floating stat */}
            <div style={{
              position: 'absolute', bottom: -24, right: -24,
              background: '#DC2626', color: '#fff',
              padding: '20px 28px', boxShadow: '0 16px 48px rgba(220,38,38,0.4)'
            }}>
              <div className="font-display" style={{ fontSize: 52, lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4, opacity: 0.9 }}>Years of Excellence</div>
            </div>
            {/* Border decoration */}
            <div style={{ position: 'absolute', top: -16, left: -16, right: 16, bottom: -16, border: '2px solid #e5e7eb', zIndex: -1 }} />
          </div>

          {/* Content */}
          <div>
            <div className="section-label"><span>Who We Are</span></div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#111', lineHeight: 1, marginBottom: 24 }}>
              BUILT FOR<br /><span style={{ color: '#DC2626' }}>CHAMPIONS</span>
            </h2>
            <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.8, marginBottom: 16 }}>
              Fast Track Rack LLC was founded by Scott Thacker and Claude Groulx with a singular mission — to create fitness equipment that performs as hard as the athletes who use it.
            </p>
            <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 36 }}>
              Combining old-school craftsmanship with modern engineering, we produce racks and training systems trusted by commercial gyms, sports organizations, and elite training facilities across North America.
            </p>

            {/* Checklist */}
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 40 }}>
              {['Commercial-grade steel', 'Custom-built systems', '500+ satisfied clients', 'Full warranty included', 'USA craftsmanship', 'After-sales support'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-red">Learn More About Us</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
