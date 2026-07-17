import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import CTASection from './CTASection';
import LeadForm from './LeadForm';
import AnimatedSection from './AnimatedSection';

export default function ServiceDetailLayout({
  heroImg, label, title, subtitle,
  tag, headline, headlineAccent,
  bodyText, benefits,
  img2, img2Alt,
  cards,
  cardsLabel, cardsTitle, cardsSubtitle,
  estimateTitle, estimateAccent,
  preselected,
  ctaTitle, ctaText,
}) {
  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">

      {/* HERO */}
      <PageHero image={heroImg} label={label} title={title} subtitle={subtitle} />

      {/* IMAGE + CONTENT */}
      <AnimatedSection className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="svc-detail-grid">

            <div className="svc-detail-image reveal-left">
              <img src={img2} alt={img2Alt} loading="lazy" />
              <div className="service-detail-image-overlay" />
            </div>

            <div className="svc-detail-content reveal-right">
              <span className="service-tag">{tag}</span>

              <h2 className="svc-detail-heading">
                {headline} <span className="txt-yellow-dark">{headlineAccent}</span>
              </h2>

              <div className="svc-accent-bar" />

              <p className="svc-detail-body">{bodyText}</p>

              <ul className="service-benefits">
                {benefits.map(b => (
                  <li key={b} className="service-benefit-item">
                    <span className="benefit-check" aria-hidden="true">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                style={{ marginTop: 'var(--space-6)' }}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FEATURE CARDS */}
      {cards && (
        <AnimatedSection className="section-pad" style={{ background: '#111111' }}>
          <div className="container">
            <div className="section-header reveal">
              <span className="label">{cardsLabel}</span>
              <h2
                style={{ color: 'var(--white)' }}
                dangerouslySetInnerHTML={{ __html: cardsTitle }}
              />
              {cardsSubtitle && <p>{cardsSubtitle}</p>}
            </div>
            <div className="svc-cards-grid">
              {cards.map((c, i) => (
                <div key={c.title} className={`why-card reveal delay-${i + 1}`}>
                  <div className="why-card-icon" aria-hidden="true">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ESTIMATE + FORM */}
      <AnimatedSection className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="svc-estimate-grid">

            <div className="reveal-left">
              <span className="label" style={{ color: 'var(--yellow-dark)' }}>Free Estimate</span>
              <h2 className="svc-detail-heading">
                {estimateTitle} <span className="txt-yellow-dark">{estimateAccent}</span>
              </h2>
              <div className="svc-accent-bar" />
              <p style={{ color: '#555555', lineHeight: 1.8, marginBottom: 'var(--space-5)' }}>
                Fill out the form or call us directly. We respond fast with a free, honest estimate.
              </p>
              <a href="tel:+17543272760" className="svc-phone-link">
                📞 +1 754-327-2760
              </a>
              <Link to="/services" className="svc-back-link">
                ← Back to all services
              </Link>
            </div>

            <div className="reveal-right">
              <LeadForm preselected={preselected} />
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <CTASection
        title={ctaTitle}
        text={ctaText}
        primaryLabel="Get Free Estimate"
        primaryTo="/contact"
        secondaryLabel="Call Now"
      />
    </main>
  );
}
