import { Link } from 'react-router-dom';

export default function CTASection({
  title          = 'Ready to Clear the Clutter?',
  text           = 'Professional junk removal and property cleanup services are just one message away.',
  primaryLabel   = 'Get Free Estimate',
  primaryTo      = '/contact',
  secondaryLabel = null,
}) {
  return (
    <section className="cta-banner-wrap" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-banner reveal">
          <div className="cta-banner-content">
            <h2 id="cta-title" className="cta-banner-title">{title}</h2>
            <p className="cta-banner-text">{text}</p>
            <div className="cta-banner-btns">
              <Link to={primaryTo} className="btn cta-btn-dark btn-lg">
                {primaryLabel}
              </Link>
              {secondaryLabel && (
                <a href="tel:+17543272760" className="btn cta-btn-outline btn-lg">
                  {secondaryLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
