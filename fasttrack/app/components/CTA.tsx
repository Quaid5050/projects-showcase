'use client';
import Link from 'next/link';

export default function CTA() {
  return (
    <section style={{ background: '#DC2626', position: 'relative', overflow: 'hidden' }}>
      {/* diagonal accent block */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: '40%',
        background: 'rgba(0,0,0,0.12)', transform: 'skewX(-12deg) translateX(30%)',
      }} className="cta-accent" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 480px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: 14 }}>
              Ready When You Are
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', color: '#fff', lineHeight: 1 }}>
              LET&rsquo;S BUILD YOUR<br />TRAINING SPACE
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginTop: 18, maxWidth: 520 }}>
              Get a free consultation and custom quote for your gym, facility, or home setup. No pressure — just straight answers from the people who build the gear.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-white">Get a Free Quote</Link>
            <Link
              href="/gallery"
              className="btn-white"
              style={{ background: 'transparent', color: '#fff', border: '2px solid #fff' }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .cta-accent { display: none; } }
      `}</style>
    </section>
  );
}
