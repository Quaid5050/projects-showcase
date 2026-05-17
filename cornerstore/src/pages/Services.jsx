import './Services.css'

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'OLG Lottery',
    desc: 'Purchase your lottery tickets, scratch cards, and check winning numbers right in-store. Lotto Max, Lotto 6/49, and all OLG games available.',
    tags: ['Lotto Max', 'Lotto 6/49', 'Scratch Cards', 'Instant Win'],
    color: '#7c3aed',
    highlight: 'Official OLG Retailer',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
      </svg>
    ),
    title: 'Purolator Drop-Off & Pickup',
    desc: 'Official Purolator depot for convenient package drop-offs and pickups. Skip the lineup — handle all your shipping needs while you shop.',
    tags: ['Drop-Off', 'Pickup', 'Tracking', 'Returns'],
    color: '#f5a623',
    highlight: 'Authorized Purolator Agent',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
    title: 'Pickup & Delivery',
    desc: 'Call ahead to arrange convenient pickup or local delivery of your order. We make shopping easier for the Linwood community.',
    tags: ['Local Delivery', 'Call-Ahead', 'Fast Service', 'Community'],
    color: '#2d6a2e',
    highlight: 'Local Community Service',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Daily Essentials',
    desc: 'Stocked daily with fresh milk, bread, eggs, and household necessities. Never run out of the things you need most.',
    tags: ['Fresh Daily', 'Household', 'Pantry', 'Emergency Items'],
    color: '#0e7490',
    highlight: 'Stocked Fresh Daily',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Fast & Friendly Service',
    desc: 'Get in and out quickly with our fast, efficient service. No long queues — just quick, friendly help from our knowledgeable staff.',
    tags: ['Quick', 'Friendly', 'Knowledgeable', 'Efficient'],
    color: '#ea580c',
    highlight: 'Always Quick & Easy',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Community Hub',
    desc: 'More than a store — we\'re a gathering point for the Linwood community. A trusted local business that\'s been here for you for years.',
    tags: ['Local', 'Trusted', 'Community', 'Neighbourhood'],
    color: '#be185d',
    highlight: 'Proudly Local',
  },
]

const partnerLogos = [
  { name: 'LCBO', color: '#2d6a2e', abbr: 'LCBO' },
  { name: 'Beer Store', color: '#f5a623', abbr: 'BEER' },
  { name: 'OLG Lottery', color: '#7c3aed', abbr: 'OLG' },
  { name: 'Purolator', color: '#f5a623', abbr: 'PURO' },
]

export default function Services() {
  return (
    <div className="services-page">
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="container page-header-content">
          <span className="section-tag">What We Offer</span>
          <h1 className="page-header-title">Our <span>Services</span></h1>
          <p className="page-header-sub">Beyond products — we offer a range of services to make your life easier in the Linwood community.</p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ '--svc-color': s.color }}>
                <div className="service-card-top">
                  <div className="service-icon" style={{ color: s.color, background: `${s.color}18`, borderColor: `${s.color}40` }}>
                    {s.icon}
                  </div>
                  <div className="service-highlight" style={{ color: s.color, background: `${s.color}15` }}>
                    {s.highlight}
                  </div>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="s-tag" style={{ borderColor: `${s.color}30` }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS STRIP */}
      <section className="partners-strip">
        <div className="container">
          <div className="partners-label">Authorized Partner Brands</div>
          <div className="partners-row">
            {partnerLogos.map((p, i) => (
              <div key={i} className="partner-badge" style={{ borderColor: `${p.color}40`, background: `${p.color}10` }}>
                <span style={{ color: p.color, fontFamily: 'var(--font-heading)', letterSpacing: '2px', fontSize: '1.2rem' }}>{p.abbr}</span>
                <span style={{ color: 'var(--gray-500)', fontSize: '11px' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BOXES */}
      <section className="info-boxes">
        <div className="container info-boxes-grid">
          <div className="info-box">
            <div className="info-box-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h4>Convenient Hours</h4>
            <p>Open 7 days a week to serve your schedule. Early morning to late night — we're here.</p>
          </div>
          <div className="info-box">
            <div className="info-box-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h4>Easy to Find</h4>
            <p>Located at 5190 Ament Line A — right in the heart of Linwood, ON.</p>
          </div>
          <div className="info-box">
            <div className="info-box-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <h4>Call Ahead</h4>
            <p>Phone us at (519) 698-2600 for orders, availability, or delivery arrangements.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
