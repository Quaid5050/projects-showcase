'use client';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 17.5h11M6 10v4M18 10v4M3 9v6M21 9v6"/>
      </svg>
    ),
    title: 'Equipment Manufacturing',
    desc: 'Custom-designed racks, cages, and training systems built from commercial-grade steel. Precision-crafted for peak performance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Fitness Training Programs',
    desc: 'World-class training courses from certified coaches — beginner fundamentals to elite strength protocols.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Corporate Fitness Solutions',
    desc: 'Complete gym setup packages for businesses and organizations — equipment, layout design, and staff training.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'Elite Athletic Coaching',
    desc: 'One-on-one coaching sessions to optimize your form, programming, and progress toward peak performance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Custom Equipment Design',
    desc: 'Your vision, our engineering. We build custom solutions tailored exactly to your space and functional needs.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Maintenance & Support',
    desc: 'Scheduled maintenance plans, parts replacement, and responsive service to keep your equipment at peak condition.',
  },
];

export default function Services() {
  return (
    <section style={{ padding: '96px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>What We Offer</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#111', lineHeight: 1, marginBottom: 16 }}>
            OUR <span style={{ color: '#DC2626' }}>SERVICES</span>
          </h2>
          <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 480, margin: '0 auto' }}>
            We provide world-class fitness training and equipment — contact us for pricing tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="card-lift"
              style={{
                background: '#fff',
                padding: '40px 32px',
                borderBottom: '3px solid transparent',
                transition: 'border-color 0.2s, transform 0.25s, box-shadow 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderBottomColor = '#DC2626')}
              onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              <div style={{ color: '#DC2626', marginBottom: 20 }}>{s.icon}</div>
              <h3 className="font-display" style={{ fontSize: 22, color: '#111', marginBottom: 12, letterSpacing: '0.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: 48,
          background: '#111',
          padding: '48px 56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24
        }} className="services-cta">
          <div>
            <div className="font-display" style={{ fontSize: 36, color: '#fff', lineHeight: 1 }}>NO FIXED PRICING</div>
            <p style={{ color: '#9ca3af', marginTop: 6, fontSize: 15 }}>Every project is unique. Contact us for a custom quote.</p>
          </div>
          <Link href="/contact" className="btn-red">Contact for Pricing</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } .services-cta { padding: 32px 24px !important; } }
      `}</style>
    </section>
  );
}
