import { Link } from 'react-router-dom'
import './Home.css'

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const MapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const StoreIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const categories = [
  {
    icon: '🍺',
    label: 'LCBO & Beer',
    color: '#2d6a2e',
    bg: 'rgba(45,106,46,0.15)',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80',
  },
  {
    icon: '🛒',
    label: 'Grocery',
    color: '#0e7490',
    bg: 'rgba(14,116,144,0.15)',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=260&fit=crop&auto=format',
  },
  {
    icon: '☕',
    label: 'Coffee & Drinks',
    color: '#92400e',
    bg: 'rgba(146,64,14,0.15)',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=260&fit=crop&auto=format',
  },
  {
    icon: '🍟',
    label: 'Fast Food',
    color: '#c0392b',
    bg: 'rgba(192,57,43,0.15)',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=260&fit=crop&auto=format',
  },
  {
    icon: '🎰',
    label: 'OLG Lottery',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.15)',
    image: 'https://images.unsplash.com/photo-1593453917923-c3f751aab514?q=80',
  },
  {
    icon: '🚚',
    label: 'Purolator',
    color: '#f5a623',
    bg: 'rgba(245,166,35,0.15)',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=260&fit=crop&auto=format',
  },
]

const statsData = [
  { number: '500+', label: 'Products' },
  { number: '7', label: 'Days Open' },
  { number: '15+', label: 'Years Serving' },
  { number: '∞', label: 'Community Love' },
]

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Open Daily',
    desc: 'Convenient hours to serve your everyday needs, seven days a week.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Community First',
    desc: 'Proudly serving the Linwood community and surrounding areas.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7m0 0H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
      </svg>
    ),
    title: 'One-Stop Shop',
    desc: 'Everything from groceries to LCBO to Lottery — all under one roof.'
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <div className="hero-image-grid">
            <div className="img-tile t1"></div>
            <div className="img-tile t2"></div>
            <div className="img-tile t3"></div>
            <div className="img-tile t4"></div>
          </div>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="badge-dot"></span>
              Linwood, Ontario's Favourite Stop
            </div>
            <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Your Local<br />
              <span className="hero-title-accent">Convenience</span><br />
              Store
            </h1>
            <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
              From fresh groceries to LCBO, snacks, daily essentials, OLG Lottery, and more.{' '}
              <strong>Everything you need, right around the corner.</strong>
            </p>
            <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <a href="tel:5196982600" className="btn btn-primary">
                <PhoneIcon /> Call Now
              </a>
              <a href="https://maps.google.com/?q=5190+Ament+Line+A,+Linwood,+ON" target="_blank" rel="noreferrer" className="btn btn-outline">
                <MapIcon /> Get Directions
              </a>
            </div>
            <div className="hero-tags animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              {['LCBO', 'Beer Store', 'Lottery', 'Purolator', 'Snacks', 'Coffee'].map(tag => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="store-card">
              <div className="store-card-header">
                <StoreIcon />
                <div>
                  <div className="store-card-name">Corner Store at Linwood</div>
                  <div className="store-card-location">Kitchener, Ontario</div>
                </div>
              </div>
              <div className="store-card-image">
                <img src="/images/store-14.jpg" alt="Corner Store at Linwood" style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="store-card-info">
                <div className="info-row">
                  <span className="info-open"><span className="open-pulse"></span> Open Now</span>
                  <span className="info-hours">7 AM – 10 PM</span>
                </div>
                <div className="info-row">
                  <span className="info-phone">(519) 698-2600</span>
                  <a href="tel:5196982600" className="info-call-btn">Call</a>
                </div>
              </div>
            </div>

            <div className="floating-badge fb1">🎰 OLG Lottery</div>
            <div className="floating-badge fb2">🍺 LCBO Inside</div>
            <div className="floating-badge fb3">📦 Purolator</div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          {statsData.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK CATEGORIES */}
      <section className="quick-cats section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Shop <span>Everything</span> You Need</h2>
            <p className="section-subtitle">From LCBO and Beer Store to daily groceries, snacks, coffee, lottery and beyond.</p>
          </div>

          <div className="cats-grid">
            {categories.map((cat, i) => (
              <Link
                to="/products"
                key={i}
                className="cat-card"
                style={{ '--cat-color': cat.color }}
              >
                {/* Full image fills the box */}
                <div className="cat-img-box">
                  <img src={cat.image} alt={cat.label} loading="lazy" />
                </div>

                {/* Name strip below */}
                <div className="cat-name-strip" style={{ borderTopColor: cat.color }}>
                  <span className="cat-name-icon">{cat.icon}</span>
                  <span className="cat-name-text">{cat.label}</span>
                  <span className="cat-name-arrow"><ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="cats-cta">
            <Link to="/products" className="btn btn-primary">View All Products <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section section-pad">
        <div className="container why-inner">
          <div className="why-image">
            <div className="why-img-box">
              <img src="/images/store-05.jpg" alt="Inside Corner Store at Linwood" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="why-accent-badge">
              <div className="accent-number">15+</div>
              <div className="accent-text">Years Serving<br/>Linwood</div>
            </div>
          </div>

          <div className="why-content">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">More Than Just a<br /><span>Convenience Store</span></h2>
            <p className="section-subtitle">
              Corner Store at Linwood is your trusted community hub — a place where neighbours meet, grab their essentials, and always find what they need with a smile.
            </p>
            <div className="features-list">
              {features.map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <div className="feature-title">{f.title}</div>
                    <div className="feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary">Learn About Us <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="photo-strip">
        <div className="strip-track">
          {[2,3,4,6,7,8,9,10,11,12,13,14,15,16,2,3,4,6,7,8].map((n, i) => (
            <div key={i} className="strip-photo">
              <img src={`/images/store-${String(n).padStart(2,'0')}.jpg`} alt={`Store photo ${i+1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="services-teaser section-pad">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Services</span>
            <h2 className="section-title">We Do More Than<br /><span>Sell Products</span></h2>
          </div>
          <div className="service-pills">
            {['OLG Lottery', 'Purolator Drop-Off', 'Pickup & Delivery', 'Beer Store', 'LCBO Products', 'Vape Store', 'Fast Service', 'BBQ Tank Refill'].map((s, i) => (
              <span key={i} className="service-pill">{s}</span>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-outline">View All Services <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Visit Us?</h2>
          <p className="cta-sub">We're open every day. Come on in — your neighbours are waiting!</p>
          <div className="cta-btns">
            <a href="tel:5196982600" className="btn btn-amber">
              <PhoneIcon /> (519) 698-2600
            </a>
            <Link to="/contact" className="btn btn-outline">Get Directions</Link>
          </div>
          <div className="cta-address">📍 5190 Ament Line A, Linwood, ON N0B 2A0</div>
        </div>
      </section>
    </div>
  )
}