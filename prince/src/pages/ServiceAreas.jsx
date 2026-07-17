import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import './ServiceAreas.css';

const areas = [
  {
    name: 'Surrey',
    img: '/images/areas-surrey.jpg',
    desc: 'Our primary service area. We work across all Surrey neighbourhoods including Cloverdale, Newton, Guildford, South Surrey, and more.',
    highlights: ['All Surrey Neighbourhoods', 'Residential Properties', 'Fast Response Times'],
  },
  {
    name: 'White Rock',
    img: '/images/areas-white-rock.jpg',
    desc: 'Serving White Rock homeowners with professional pressure washing services. Coastal properties receive extra care and attention.',
    highlights: ['Coastal Properties', 'All Home Types', 'Experienced Team'],
  },
  {
    name: 'Langley',
    img: '/images/areas-langley.jpg',
    desc: 'From Langley City to Langley Township — we serve homeowners across the entire Langley area with reliable, professional service.',
    highlights: ['Langley City & Township', 'Residential Focus', 'Reliable Service'],
  },
  {
    name: 'Surrounding Areas',
    img: '/images/areas-surrounding.jpg',
    desc: 'Not sure if we cover your area? Reach out and ask. We regularly service communities throughout the Lower Mainland.',
    highlights: ['Ask About Your Area', 'Lower Mainland Wide', 'Contact for Availability'],
  },
];

export default function ServiceAreas() {
  return (
    <main>
      <PageHero
        title="Service Areas"
        subtitle="Proudly serving homeowners across Surrey, White Rock, Langley, and surrounding communities."
        bgImage="/images/areas-hero.jpg"
        breadcrumbs={[{ name: 'Service Areas' }]}
        badge="Where We Work"
        size="medium"
      />

      <section className="section section--white">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Our Coverage</div>
            <h2 className="section-title">Where We Serve</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We work with homeowners across the Lower Mainland. Here are our primary service areas.
            </p>
          </AnimatedSection>

          <div className="service-areas__grid">
            {areas.map((area, i) => (
              <AnimatedSection key={area.name} animation="reveal" delay={i * 0.1} className="service-area-card">
                <div className="service-area-card__img-wrap">
                  <img src={area.img} alt={`${area.name} service area`} loading="lazy" />
                  <div className="service-area-card__overlay" />
                  <div className="service-area-card__name">{area.name}</div>
                </div>
                <div className="service-area-card__body">
                  <p className="service-area-card__desc">{area.desc}</p>
                  <ul className="service-area-card__highlights">
                    {area.highlights.map((h) => (
                      <li key={h} className="service-area-card__highlight">
                        <span>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="section section--soft">
        <div className="container">
          <AnimatedSection animation="reveal" className="service-areas-contact">
            <div className="service-areas-contact__icon">📍</div>
            <h2 className="service-areas-contact__title">Not Sure If We Serve Your Area?</h2>
            <p className="service-areas-contact__text">
              Reach out and we&apos;ll let you know. We regularly expand our service coverage and
              may be available in your neighbourhood sooner than you think.
            </p>
            <div className="service-areas-contact__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Contact Us <span className="btn-icon">→</span>
              </Link>
              <a href="tel:+16723999637" className="btn btn--outline-purple btn--lg">
                📞 (672) 399-9637
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
