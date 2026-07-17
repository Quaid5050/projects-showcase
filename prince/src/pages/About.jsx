import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const values = [
  { icon: '🤝', title: 'Honest Communication', desc: 'We believe in clear, upfront pricing and honest conversations about what your property needs.' },
  { icon: '⭐', title: 'Quality Workmanship', desc: 'Every job is done with care and attention to detail, ensuring a result you\'ll be proud of.' },
  { icon: '📞', title: 'Reliable Service', desc: 'We show up when we say we will, do the work we promise, and leave your property better than we found it.' },
  { icon: '❤️', title: 'Customer Satisfaction', desc: 'Your satisfaction is our goal. We\'re not done until you\'re happy with the results.' },
];

const team = [
  { name: 'Prince', role: 'Founder & Lead Technician', desc: 'Prince founded Pranvue Property Services with a simple goal: provide homeowners with honest, reliable, and professional property cleaning services.' },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="About Pranvue Property Services"
        subtitle="Local. Reliable. Detail-focused. We're your neighbours, and we care about your home."
        bgImage="/images/about-hero.jpg"
        breadcrumbs={[{ name: 'About' }]}
        badge="Our Story"
        size="medium"
      />

      {/* About Intro */}
      <section className="section section--white">
        <div className="container">
          <div className="split-section">
            <AnimatedSection animation="reveal-left" className="about-intro__visual">
              <div className="about-intro__img-wrap">
                <img
                  src="/images/about-team.jpg"
                  alt="Pranvue Property Services at work"
                  loading="lazy"
                />
                <div className="about-intro__img-overlay">
                  <div className="about-intro__quote">
                    <span className="about-intro__quote-mark">"</span>
                    Every home deserves to look its best.
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="reveal-right" className="about-intro__content">
              <div className="section-eyebrow left-align">Who We Are</div>
              <h2 className="section-title left-align">
                A Local Company That Cares
              </h2>
              <div className="divider divider--left" />
              <p className="about-intro__text">
                Pranvue Property Services is a local pressure washing company serving
                Surrey, White Rock, Langley, and surrounding areas. We help homeowners
                restore the beauty of their driveways, patios, siding, walkways, and
                exterior surfaces.
              </p>
              <p className="about-intro__text">
                We take pride in treating every property with the same care and attention
                we would give our own. Our focus is honest communication, reliable
                service, quality workmanship, and customer satisfaction.
              </p>
              <div className="about-intro__highlights">
                {['Locally owned and operated', 'Serving Surrey & surrounding areas', 'Free estimates for all homeowners', 'No hidden charges, ever'].map((h) => (
                  <div key={h} className="about-intro__highlight">
                    <span className="about-intro__highlight-check">✓</span>
                    {h}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section about-mission">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow section-eyebrow--light">Our Mission</div>
            <h2 className="section-title section-title--light">
              Restore. Protect. Refresh.
            </h2>
            <div className="divider" />
            <p className="section-subtitle section-subtitle--light">
              Our mission is to help homeowners maintain and restore the beauty
              of their properties through honest, professional, and affordable service.
            </p>
          </AnimatedSection>

          <div className="about-mission__cards">
            {[
              { icon: '🏠', title: 'Restore', desc: 'Bring back the original beauty of your home\'s exterior surfaces.' },
              { icon: '🛡️', title: 'Protect', desc: 'Remove harmful buildup that can damage surfaces over time.' },
              { icon: '✨', title: 'Refresh', desc: 'Give your property that just-cleaned look that makes you proud.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} animation="reveal" delay={i * 0.15} className="about-mission__card card--glass">
                <div className="about-mission__card-icon">{item.icon}</div>
                <h3 className="about-mission__card-title">{item.title}</h3>
                <p className="about-mission__card-desc">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--white">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Our Values</div>
            <h2 className="section-title">What Drives Us</h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="grid grid--4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} animation="reveal" delay={i * 0.1} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Treat Every Home */}
      <section className="section section--soft about-process">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <div className="section-eyebrow">Our Approach</div>
            <h2 className="section-title">How We Treat Every Home</h2>
            <div className="divider" />
            <p className="section-subtitle">
              From your first contact to the final rinse, here&apos;s what working with us looks like.
            </p>
          </AnimatedSection>

          <div className="about-process__steps">
            {[
              { step: '01', title: 'Free Estimate', desc: 'Contact us and we\'ll provide a free, no-obligation estimate for your property.' },
              { step: '02', title: 'Book Your Date', desc: 'Choose a date and time that works for you. We\'re flexible with scheduling.' },
              { step: '03', title: 'Professional Service', desc: 'Our team arrives on time, treats your property with care, and delivers quality results.' },
              { step: '04', title: 'You\'re Satisfied', desc: 'We ensure you\'re happy with the results before we leave. Your satisfaction is our priority.' },
            ].map((step, i) => (
              <AnimatedSection key={step.step} animation="reveal" delay={i * 0.12} className="about-process__step">
                <div className="about-process__step-number">{step.step}</div>
                <div className="about-process__step-line" />
                <div className="about-process__step-content">
                  <h3 className="about-process__step-title">{step.title}</h3>
                  <p className="about-process__step-desc">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section section--white">
        <div className="container">
          <div className="split-section">
            <AnimatedSection animation="reveal-left">
              <div className="section-eyebrow left-align">Where We Serve</div>
              <h2 className="section-title left-align">Your Local Property Care Team</h2>
              <div className="divider divider--left" />
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                We proudly serve homeowners throughout Surrey, White Rock, Langley, and surrounding
                communities. As a local company, we understand the properties and weather
                conditions in these areas.
              </p>
              <div className="about-areas__list">
                {['Surrey', 'White Rock', 'Langley', 'Surrounding Areas'].map((area) => (
                  <span key={area} className="about-areas__area">
                    <span className="about-areas__area-dot">📍</span>
                    {area}
                  </span>
                ))}
              </div>
              <Link to="/service-areas" className="btn btn--outline-purple" style={{ marginTop: '32px' }}>
                Service Area Details <span className="btn-icon">→</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="reveal-right">
              <div className="about-areas__visual">
                <img
                  src="/images/areas-surrey.jpg"
                  alt="Surrey neighbourhood - service area"
                  loading="lazy"
                  style={{ borderRadius: 'var(--radius-xl)', width: '100%', aspectRatio: '4/3', objectFit: 'cover', boxShadow: 'var(--shadow-xl)' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Make Your Property Shine"
        subtitle="Get in touch today for your free estimate. We serve Surrey, White Rock, Langley, and surrounding areas."
      />
    </main>
  );
}
