import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import './CTASection.css';

export default function CTASection({
  title = 'Ready to Make Your Property Shine?',
  subtitle = 'Book your service today and experience the Pranvue difference.',
  primaryText = 'Book Your Service',
  primaryLink = '/booking',
  secondaryText = '(672) 399-9637',
  secondaryHref = 'tel:+16723999637',
  showPrice = false,
  variant = 'default', // default | white
}) {
  return (
    <section className={`cta-section cta-section--${variant}`}>
      <div className="container">
        <AnimatedSection animation="reveal">
          <div className="cta-section__card">
            {/* Left: text */}
            <div className="cta-section__left">
              {showPrice && (
                <div className="cta-section__price-tag">
                  <span className="cta-section__price-from">House Washing</span>
                  <span className="cta-section__price-sep">·</span>
                  <span className="cta-section__price-amount">Starting at $389</span>
                </div>
              )}
              <h2 className="cta-section__title">{title}</h2>
              <p className="cta-section__subtitle">{subtitle}</p>
            </div>

            {/* Right: buttons */}
            <div className="cta-section__right">
              <Link to={primaryLink} className="cta-section__btn-primary">
                {primaryText} <span className="cta-section__btn-arrow">→</span>
              </Link>
              <a href={secondaryHref} className="cta-section__btn-secondary">
                <span className="cta-section__phone-icon">📞</span>
                {secondaryText}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
