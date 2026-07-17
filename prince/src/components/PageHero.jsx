import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

export default function PageHero({
  title,
  subtitle,
  bgImage,
  breadcrumbs = [],
  eyebrow,
  ctaText,
  ctaLink,
  badge,
  size = 'medium', // small | medium | large
}) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.35;
      el.style.setProperty('--parallax-y', `${rate}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`page-hero page-hero--${size}`}
      aria-label={`${title} hero section`}
    >
      {/* Background Image */}
      <div
        className="page-hero__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        role="img"
        aria-label={`Background: ${title}`}
      />
      {/* Overlay */}
      <div className="page-hero__overlay" />
      {/* Gradient overlay */}
      <div className="page-hero__gradient" />

      {/* Content */}
      <div className="container">
        <div className="page-hero__content">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="page-hero__breadcrumbs" aria-label="Breadcrumb">
              <Link to="/" className="page-hero__breadcrumb-link">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="page-hero__breadcrumb-item">
                  <span className="page-hero__breadcrumb-sep">›</span>
                  {crumb.link ? (
                    <Link to={crumb.link} className="page-hero__breadcrumb-link">{crumb.name}</Link>
                  ) : (
                    <span className="page-hero__breadcrumb-current">{crumb.name}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <div className="page-hero__eyebrow animate-fade-in-up delay-1">
              <span className="badge badge--white">{eyebrow}</span>
            </div>
          )}

          {badge && (
            <div className="page-hero__badge animate-fade-in-up delay-1">
              <span className="page-hero__badge-text">{badge}</span>
            </div>
          )}

          <h1 className="page-hero__title animate-fade-in-up delay-2">{title}</h1>

          {subtitle && (
            <p className="page-hero__subtitle animate-fade-in-up delay-3">{subtitle}</p>
          )}

          {ctaText && ctaLink && (
            <div className="page-hero__cta animate-fade-in-up delay-4">
              <Link to={ctaLink} className="btn btn--primary btn--lg">
                {ctaText} <span className="btn-icon">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="page-hero__wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
