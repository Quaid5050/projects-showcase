import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrolled = window.scrollY;
      el.style.setProperty('--parallax-y', `${scrolled * 0.4}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero" aria-label="Hero - Welcome to Pranvue Property Services">
      {/* Background */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Ambient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Floating water drops */}
      <div className="hero__drops" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__drop hero__drop--${i + 1}`}>💧</div>
        ))}
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Eyebrow */}
          <div className="hero__eyebrow animate-fade-in-up">
            <span className="hero__eyebrow-dot" />
            Surrey · White Rock · Langley &amp; Surrounding Areas
          </div>

          {/* Main Headline */}
          <h1 className="hero__title animate-fade-in-up delay-2">
            Let Your Property<br />
            <span className="hero__title-accent">Smile</span>{' '}For You
          </h1>

          {/* Subheadline */}
          <p className="hero__subtitle animate-fade-in-up delay-3">
            Professional pressure washing services that restore curb appeal,
            protect your surfaces, and make your home look refreshed again.
          </p>

          {/* Price tag */}
          <div className="hero__price animate-fade-in-up delay-3">
            <span className="hero__price-from">House Washing</span>
            <span className="hero__price-divider">·</span>
            <span className="hero__price-amount">Starting at $389</span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons animate-fade-in-up delay-4">
            <Link to="/booking" className="btn btn--primary btn--lg btn--cta-pulse">
              Book Your Service <span className="btn-icon">→</span>
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg">
              View Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero__trust animate-fade-in-up delay-5">
            {['Free Estimates', 'Fast Response', 'No Hidden Charges', 'Local & Trusted'].map((t) => (
              <span key={t} className="hero__trust-badge">
                <span className="hero__trust-check">✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>

      {/* Bottom wave */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
