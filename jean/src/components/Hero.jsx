import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero-home.jpg';

export default function Hero() {
  return (
    <section className="hero-home" aria-label="Junk Pro Service — Home">

      <div className="hero-bg" aria-hidden="true">
        <img src={heroImg} alt="" loading="eager" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      {/* Deco rings */}
      <div className="deco-ring" aria-hidden="true"
        style={{ width:320, height:320, right:'8%', top:'15%', animationDuration:'6s', zIndex:5 }} />
      <div className="deco-ring" aria-hidden="true"
        style={{ width:160, height:160, right:'18%', top:'52%', animationDuration:'4s', animationDelay:'1.5s', opacity:0.35, zIndex:5 }} />

      {/* Content — left half */}
      <div className="hero-container">
        <div className="hero-text-anim">

          <div className="hero-tag">
            <span className="hero-tag-dot" aria-hidden="true" />
            South Florida's #1 Junk Removal
          </div>

          <h1 className="hero-headline">
            Your Local<br />
            <em>Junk Removal</em><br />
            &amp; Cleanup Experts
          </h1>

          <p className="hero-sub">
            Fast, reliable &amp; affordable junk removal for homeowners,
            property managers, and small businesses.
            We haul it all — you relax.
          </p>

          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary btn-xl btn-glow">
              Get Free Estimate →
            </Link>
            <Link to="/services" className="btn btn-outline btn-xl">
              Our Services
            </Link>
          </div>

          <div className="hero-trust-strip">
            {[
              { icon:'⚡', text:'Same-Day Service' },
              { icon:'💰', text:'Honest Pricing' },
              { icon:'✅', text:'Licensed & Insured' },
              { icon:'⭐', text:'5-Star Rated' },
            ].map(t => (
              <div key={t.text} className="trust-item">
                <span className="trust-item-icon" aria-hidden="true">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-label">Scroll</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  );
}
