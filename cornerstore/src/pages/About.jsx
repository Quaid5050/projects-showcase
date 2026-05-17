import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Community First',
    desc: 'We exist to serve Linwood and the surrounding community. Every decision we make puts our neighbours first.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Quality & Trust',
    desc: 'We carefully curate our selection and partner only with trusted brands like LCBO, OLG, and Purolator.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Always Convenient',
    desc: 'Open every day with fast service, ample parking, and everything you need in one place.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Friendly Faces',
    desc: 'Our team knows many customers by name. We take pride in making every visit warm and welcoming.'
  },
]

const timeline = [
  { year: 'Founded', event: 'Corner Store at Linwood opens its doors to serve the community.' },
  { year: 'Growth', event: 'Added LCBO and Beer Store services, expanding our offerings.' },
  { year: 'OLG Partner', event: 'Became an authorized OLG Lottery retailer for the community.' },
  { year: 'Purolator', event: 'Joined Purolator\'s network as an authorized drop-off/pickup depot.' },
  { year: 'Today', event: 'Proudly serving Linwood with 500+ products and multiple services.' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* HEADER */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container about-hero-content">
          <div className="about-hero-text">
            <span className="section-tag">Our Story</span>
            <h1 className="about-title">
              More Than a Store —<br />
              <span>A Community Hub</span>
            </h1>
            <p className="about-lead">
              Corner Store at Linwood was built on a simple belief: everyone deserves a reliable, friendly neighbourhood store where they can get everything they need without making a long drive to a big city.
            </p>
            <p className="about-body">
              Located at 5190 Ament Line A in Linwood, Ontario, we've been proudly serving residents of Linwood, Elmira, and the surrounding Waterloo Region for years. We're not just a convenience store — we're your neighbours, and we take that seriously.
            </p>
            <Link to="/contact" className="btn btn-primary">Visit Us Today</Link>
          </div>
          <div className="about-hero-visual">
            <div className="about-photo-grid">
              <div className="apg-main">
                <img src="/images/store-17.jpg" alt="Corner Store at Linwood exterior" />
              </div>
              <div className="apg-side">
                <div className="apg-small">
                  <img src="/images/store-20.jpg" alt="Store inside" />
                </div>
                <div className="apg-small">
                  <img src="/images/store-22.jpg" alt="Store products" />
                </div>
              </div>
            </div>
            <div className="about-badge">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--green-glow)', letterSpacing: '2px' }}>
                LOCAL
              </div>
              <div style={{ fontSize: '11px', color: 'var(--gray-500)', letterSpacing: '1px' }}>OWNED & OPERATED</div>
            </div>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-title">Our <span>Values</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Growing With <span>Linwood</span></h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="timeline-card">
                  <div className="timeline-year">{item.year}</div>
                  <p className="timeline-event">{item.event}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2>Come Visit Your Neighbourhood Store</h2>
          <p>We'd love to see you! Drop by any day — we're always open and always happy to help.</p>
          <div className="about-cta-btns">
            <a href="tel:5196982600" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Us
            </a>
            <Link to="/contact" className="btn btn-outline">Get Directions</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
