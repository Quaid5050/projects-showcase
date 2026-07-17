import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const services = [
  {
    title: 'House Washing',
    description: 'Complete exterior wash removing dirt, algae, mildew, and buildup.',
    image: '/images/house-washing-hero.jpg',
    path: '/services/house-washing',
    icon: '🏠',
    price: '$389',
  },
  {
    title: 'Driveway Cleaning',
    description: 'Remove stains, oil, grime and restore your driveway\'s curb appeal.',
    image: '/images/driveway-hero.jpg',
    path: '/services/driveway-cleaning',
    icon: '🚗',
  },
  {
    title: 'Patio & Deck Cleaning',
    description: 'Make your outdoor spaces guest-ready with deep cleaning.',
    image: '/images/patio-hero.jpg',
    path: '/services/patio-deck-cleaning',
    icon: '🪴',
  },
  {
    title: 'Siding Cleaning',
    description: 'Gentle but effective soft washing for all siding types.',
    image: '/images/siding-hero.jpg',
    path: '/services/siding-cleaning',
    icon: '🏡',
  },
  {
    title: 'Walkway Cleaning',
    description: 'Safer, cleaner walkways that make great first impressions.',
    image: '/images/walkway-hero.jpg',
    path: '/services/walkway-cleaning',
    icon: '🚶',
  },
  {
    title: 'Exterior Surface Cleaning',
    description: 'Custom cleaning for all exterior surfaces around your home.',
    image: '/images/exterior-hero.jpg',
    path: '/services/exterior-surface-cleaning',
    icon: '✨',
  },
];

const reasons = [
  { icon: '💰', title: 'Free Estimates', desc: 'Get a clear quote before any work begins. No surprises, no pressure.' },
  { icon: '⚡', title: 'Fast Response', desc: 'We respond quickly and confirm bookings without delays.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: 'Book at a time that works for you — weekdays or weekends.' },
  { icon: '🤝', title: 'No Hidden Charges', desc: 'Honest pricing, clear communication, and transparent billing.' },
  { icon: '🏡', title: 'Property Care', desc: 'We treat every property with the same care we\'d give our own.' },
  { icon: '📍', title: 'Local Service', desc: 'Surrey, White Rock, Langley, and surrounding areas.' },
];

const stats = [
  { number: '100+', label: 'Happy Homeowners' },
  { number: '5★', label: 'Average Rating' },
  { number: '6', label: 'Services Offered' },
  { number: '0', label: 'Hidden Charges' },
];

const faqs = [
  { q: 'Do you provide free estimates?', a: 'Yes, we provide free estimates for homeowners. Contact us and we\'ll assess your needs with no obligation.' },
  { q: 'How fast do you respond?', a: 'We aim to respond quickly and confirm your booking details as soon as possible — usually within a few hours.' },
  { q: 'Do you have hidden charges?', a: 'No, we believe in honest communication and clear pricing. What we quote is what you pay.' },
  { q: 'What areas do you serve?', a: 'We serve Surrey, White Rock, Langley, and surrounding areas.' },
];

function FAQItem({ q, a }) {
  return (
    <div className="faq-item open" style={{ '--faq-height': 'auto' }}>
      <div className="faq-question">
        {q}
        <div className="faq-icon">+</div>
      </div>
      <div className="faq-answer" style={{ maxHeight: '200px' }}>{a}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero */}
      <Hero />

      {/* About Intro */}
      <section className="section section--white home-intro">
        <div className="container">
          <div className="split-section">
            <AnimatedSection animation="reveal-left" className="home-intro__text">
              <div className="section-eyebrow">About Pranvue</div>
              <h2 className="section-title">
                We Help Your Home Look Its Absolute Best
              </h2>
              <p className="home-intro__body">
                At Pranvue Property Services, we believe every home deserves to look its best.
                Our mission is simple: help homeowners restore and maintain the beauty of their
                properties through professional, reliable, and affordable pressure washing services.
              </p>
              <p className="home-intro__body">
                We take pride in treating every property with the same care and attention we would
                give our own. Our focus is honest communication, reliable service, quality
                workmanship, and customer satisfaction.
              </p>
              <div className="home-intro__features">
                {['Honest Communication', 'Reliable Service', 'Quality Workmanship', 'Customer Satisfaction'].map((f) => (
                  <span key={f} className="home-intro__feature">
                    <span className="home-intro__feature-dot">✦</span>
                    {f}
                  </span>
                ))}
              </div>
              <Link to="/about" className="btn btn--outline-purple btn--lg" style={{ marginTop: '32px' }}>
                Our Story <span className="btn-icon">→</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="reveal-right" className="home-intro__visual">
              <div className="home-intro__image-wrapper">
                <img
                  src="/images/about-team.jpg"
                  alt="Professional pressure washing team at work"
                  className="home-intro__img"
                  loading="lazy"
                />
                <div className="home-intro__image-badge">
                  <div className="home-intro__badge-icon">✦</div>
                  <div>
                    <div className="home-intro__badge-title">Local & Trusted</div>
                    <div className="home-intro__badge-sub">Surrey · White Rock · Langley</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats section--dark">
        <div className="container">
          <div className="home-stats__grid">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} animation="reveal" delay={i * 0.1} className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--soft home-services">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title">Professional Property Services</h2>
            <div className="divider" />
            <p className="section-subtitle">
              From house washing to walkway cleaning — we cover every inch of your property&apos;s exterior.
            </p>
          </AnimatedSection>

          <div className="home-services__grid">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} animation="reveal" delay={i * 0.08}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="reveal" className="home-services__cta">
            <Link to="/services" className="btn btn--outline-purple btn--lg">
              View All Services <span className="btn-icon">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--white home-why">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Why Homeowners Choose Us</div>
            <h2 className="section-title">The Pranvue Difference</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We&apos;re not just a cleaning company. We&apos;re your property care partners.
            </p>
          </AnimatedSection>

          <div className="grid grid--3">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} animation="reveal" delay={i * 0.1} className="value-card">
                <div className="value-card__icon" style={{ animationDelay: `${i * 0.3}s` }}>
                  {r.icon}
                </div>
                <h3 className="value-card__title">{r.title}</h3>
                <p className="value-card__desc">{r.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section section--soft home-before-after">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Results That Speak</div>
            <h2 className="section-title">See the Transformation</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Real results from real properties. See what a professional clean can do.
            </p>
          </AnimatedSection>

          <div className="home-before-after__grid">
            {[
              {
                before: '/images/driveway-detail.jpg',
                after: '/images/driveway-hero.jpg',
                label: 'Driveway Cleaning',
              },
              {
                before: '/images/house-washing-detail.jpg',
                after: '/images/house-washing-hero.jpg',
                label: 'House Washing',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.label} animation="reveal-scale" delay={i * 0.15} className="home-ba-card">
                <div className="home-ba-card__images">
                  <div className="home-ba-card__img-wrap">
                    <img src={item.before} alt={`Before ${item.label}`} loading="lazy" />
                    <span className="home-ba-card__label home-ba-card__label--before">Before</span>
                  </div>
                  <div className="home-ba-card__img-wrap">
                    <img src={item.after} alt={`After ${item.label}`} loading="lazy" />
                    <span className="home-ba-card__label home-ba-card__label--after">After</span>
                  </div>
                </div>
                <div className="home-ba-card__footer">
                  <span className="home-ba-card__service">{item.label}</span>
                  <span className="home-ba-card__tag">✓ Pranvue Property Services</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Service Areas */}
      <section className="section section--white home-areas">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Where We Work</div>
            <h2 className="section-title">Serving Your Neighbourhood</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Proudly serving homeowners across Surrey, White Rock, Langley, and surrounding areas.
            </p>
          </AnimatedSection>

          <div className="grid grid--4 home-areas__grid">
            {[
              { name: 'Surrey', img: '/images/areas-surrey.jpg' },
              { name: 'White Rock', img: '/images/areas-white-rock.jpg' },
              { name: 'Langley', img: '/images/areas-langley.jpg' },
              { name: 'Surrounding Areas', img: '/images/areas-surrounding.jpg' },
            ].map((area, i) => (
              <AnimatedSection key={area.name} animation="reveal" delay={i * 0.1} className="area-card">
                <img src={area.img} alt={`${area.name} - service area`} className="area-card__img" loading="lazy" />
                <div className="area-card__overlay" />
                <div className="area-card__name">{area.name}</div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/service-areas" className="btn btn--outline-purple">
              View All Service Areas <span className="btn-icon">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section section--soft home-gallery">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Our Work</div>
            <h2 className="section-title">Recent Projects</h2>
            <div className="divider" />
            <p className="section-subtitle">
              A look at some of our recent pressure washing projects across the Lower Mainland.
            </p>
          </AnimatedSection>

          <GalleryGrid limit={6} />

          <AnimatedSection animation="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/gallery" className="btn btn--outline-purple btn--lg">
              View Full Gallery <span className="btn-icon">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section section--white home-faq">
        <div className="container">
          <div className="home-faq__inner">
            <AnimatedSection animation="reveal-left" className="home-faq__header">
              <div className="section-eyebrow left-align">Common Questions</div>
              <h2 className="section-title left-align">Frequently Asked Questions</h2>
              <div className="divider divider--left" />
              <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
                Have more questions? We&apos;re always happy to help.
              </p>
              <Link to="/faq" className="btn btn--outline-purple" style={{ marginTop: '32px' }}>
                View All FAQs <span className="btn-icon">→</span>
              </Link>
            </AnimatedSection>

            <div className="home-faq__list">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} animation="reveal-right" delay={i * 0.1}>
                  <FAQItem q={faq.q} a={faq.a} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Your Home Deserves to Look Its Best"
        subtitle="Join homeowners across Surrey, White Rock, and Langley who trust Pranvue Property Services."
        variant="dark"
        showPrice={true}
      />
    </main>
  );
}
