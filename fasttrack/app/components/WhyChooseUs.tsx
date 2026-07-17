'use client';

const features = [
  {
    title: 'Commercial-Grade Steel',
    desc: 'Every rack is welded from heavy-gauge steel built to survive years of daily high-volume training.',
    icon: (
      <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
  },
  {
    title: 'Custom-Built To Spec',
    desc: 'Tell us your space and goals — we engineer a system that fits your facility, not the other way around.',
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: 'Fast Turnaround',
    desc: 'In-house fabrication means shorter lead times and on-time delivery without the usual industry delays.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    title: 'Full Warranty',
    desc: 'Backed by a comprehensive warranty and real after-sales support from the team that built it.',
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: '96px 0', background: '#111', position: 'relative', overflow: 'hidden' }}>
      {/* subtle diagonal accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 320, height: 320,
        background: '#DC2626', opacity: 0.12, transform: 'rotate(45deg) translate(120px,-160px)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><span>Why Fast Track Rack</span></div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff', lineHeight: 1 }}>
            BUILT DIFFERENT. <span style={{ color: '#DC2626' }}>BUILT TO LAST.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }} className="why-grid">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-lift"
              style={{ background: '#1a1a1a', padding: '40px 32px', borderTop: '3px solid #DC2626' }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {f.icon}
              </svg>
              <h3 className="font-display" style={{ fontSize: 26, color: '#fff', margin: '20px 0 12px', lineHeight: 1.1 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .why-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
