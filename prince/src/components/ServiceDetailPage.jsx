import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import CTASection from './CTASection';
import AnimatedSection from './AnimatedSection';
import './ServiceDetailPage.css';

export default function ServiceDetailPage({
  title,
  subtitle,
  heroImage,
  icon,
  included = [],
  benefits = [],
  signs = [],
  process = [],
  price,
  beforeAfter,
  extraContent,
}) {
  return (
    <main>
      <PageHero
        title={title}
        subtitle={subtitle}
        bgImage={heroImage}
        breadcrumbs={[{ name: 'Services', link: '/services' }, { name: title }]}
        badge={icon ? `${icon} ${title}` : title}
        size="medium"
        ctaText="Book This Service"
        ctaLink="/booking"
      />

      {/* Price highlight */}
      {price && (
        <div className="service-detail-price-strip">
          <div className="container">
            <div className="service-detail-price-strip__inner">
              <span className="service-detail-price-strip__label">Starting at</span>
              <span className="service-detail-price-strip__amount">{price}</span>
              <span className="service-detail-price-strip__note">Free estimate · No hidden charges</span>
              <Link to="/booking" className="btn btn--primary">Book Now <span className="btn-icon">→</span></Link>
            </div>
          </div>
        </div>
      )}

      {/* What's Included */}
      {included.length > 0 && (
        <section className="section section--white">
          <div className="container">
            <div className="split-section">
              <AnimatedSection animation="reveal-left">
                <div className="section-eyebrow left-align">The Service</div>
                <h2 className="section-title left-align">What&apos;s Included</h2>
                <div className="divider divider--left" />
                <ul className="service-detail__included-list">
                  {included.map((item, i) => (
                    <li key={i} className="service-detail__included-item">
                      <span className="service-detail__included-check">✓</span>
                      <div>
                        <strong>{item.title}</strong>
                        {item.desc && <p>{item.desc}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="reveal-right" className="service-detail__hero-img-wrap">
                <img
                  src={heroImage}
                  alt={`${title} - Pranvue Property Services`}
                  loading="lazy"
                />
                <div className="service-detail__hero-img-overlay">
                  <Link to="/booking" className="btn btn--primary">
                    Book This Service <span className="btn-icon">→</span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <AnimatedSection animation="reveal" className="section-header">
              <div className="section-eyebrow">Why It Matters</div>
              <h2 className="section-title">The Benefits</h2>
              <div className="divider" />
            </AnimatedSection>

            <div className="grid grid--3">
              {benefits.map((b, i) => (
                <AnimatedSection key={i} animation="reveal" delay={i * 0.1} className="value-card">
                  <div className="value-card__icon">{b.icon}</div>
                  <h3 className="value-card__title">{b.title}</h3>
                  <p className="value-card__desc">{b.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Signs */}
      {signs.length > 0 && (
        <section className="section section--white">
          <div className="container">
            <AnimatedSection animation="reveal" className="section-header">
              <div className="section-eyebrow">Is It Time?</div>
              <h2 className="section-title">Signs You Need This Service</h2>
              <div className="divider" />
            </AnimatedSection>
            <div className="service-detail__signs">
              {signs.map((sign, i) => (
                <AnimatedSection key={i} animation="reveal" delay={i * 0.08} className="service-detail__sign">
                  <div className="service-detail__sign-num">{String(i + 1).padStart(2, '0')}</div>
                  <p className="service-detail__sign-text">{sign}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process */}
      {process.length > 0 && (
        <section className="section service-detail-process">
          <div className="container">
            <AnimatedSection animation="reveal" className="section-header">
              <div className="section-eyebrow section-eyebrow--light">Our Process</div>
              <h2 className="section-title section-title--light">How We Do It</h2>
              <div className="divider" />
            </AnimatedSection>
            <div className="service-detail__process-steps">
              {process.map((step, i) => (
                <AnimatedSection key={i} animation="reveal" delay={i * 0.12} className="service-detail__process-step">
                  <div className="service-detail__process-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="service-detail__process-content">
                    <h3 className="service-detail__process-title">{step.title}</h3>
                    <p className="service-detail__process-desc">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {extraContent}

      <CTASection
        title={`Ready to Book Your ${title}?`}
        subtitle="Contact us today for your free estimate. Quick response, flexible scheduling."
        primaryText="Book This Service"
        showPrice={!!price}
        variant="white"
      />
    </main>
  );
}
