'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0a0a0a', overflow: 'hidden' }}>

      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=85"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
      </div>

      {/* Red left stripe */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: '#DC2626', zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1280, margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        <div style={{ maxWidth: 680 }}>

          {/* eyebrow */}
          <div className="anim-fade-up" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{ width: 48, height: 2, background: '#DC2626' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#DC2626' }}>
              World Class Fitness Equipment
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display anim-fade-up anim-fade-up-d1"
            style={{ fontSize: 'clamp(64px, 10vw, 120px)', lineHeight: 0.92, color: '#fff', marginBottom: 28 }}>
            FAST<br />
            <span style={{ color: '#DC2626' }}>TRACK</span><br />
            RACK
          </h1>

          {/* Sub */}
          <p className="anim-fade-up anim-fade-up-d2"
            style={{ fontSize: 18, color: '#d1d5db', lineHeight: 1.7, maxWidth: 520, marginBottom: 40, fontWeight: 300 }}>
            We design, develop, and manufacture cutting-edge, world-class fitness equipment for athletes and organizations who demand the best.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up anim-fade-up-d3"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 56 }}>
            <Link href="/services" className="btn-red">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="btn-outline-red" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="anim-fade-up anim-fade-up-d4"
            style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
            {[['500+', 'Clients Served'], ['15+', 'Years Experience'], ['100%', 'Custom Builds']].map(([n, l]) => (
              <div key={l}>
                <div className="font-display" style={{ fontSize: 40, color: '#DC2626', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 11, color: '#9ca3af', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 3, color: 'rgba(255,255,255,0.3)', animation: 'bounce 2s infinite' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>

      <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }`}</style>
    </section>
  );
}
