'use client';

const reviews = [
  {
    quote: 'The build quality is on another level. Our members hammer these racks daily and they still look and feel brand new after two years.',
    name: 'Marcus Reid',
    role: 'Owner, Iron Republic Gym',
  },
  {
    quote: 'Fast Track Rack designed a full custom layout for our new facility. On time, on budget, and the support team actually picks up the phone.',
    name: 'Danielle Cho',
    role: 'Director, Peak Performance Center',
  },
  {
    quote: 'We compared every major brand. Nothing came close on strength, finish, and price. This is the standard we build our program around now.',
    name: 'Coach Tyrell Banks',
    role: 'Head S&C Coach, University Athletics',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#DC2626" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding: '96px 0', background: '#f7f7f7' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label"><span>What Clients Say</span></div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#111', lineHeight: 1 }}>
            TRUSTED BY <span style={{ color: '#DC2626' }}>THE BEST</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="review-grid">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="card-lift"
              style={{ background: '#fff', padding: '40px 32px', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}
            >
              <Stars />
              <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, flex: 1 }}>&ldquo;{r.quote}&rdquo;</p>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid #e5e7eb' }}>
                <div className="font-display" style={{ fontSize: 22, color: '#111', lineHeight: 1 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#DC2626', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .review-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
