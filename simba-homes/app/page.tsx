'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stats = [
  { num: '100+', label: 'Homes Built' },
  { num: '2-5-10', label: 'Year Warranty' },
  { num: 'BC', label: 'Licensed Builder' },
  { num: '5+', label: 'Years Experience' },
];

const services = [
  { title: 'Custom Homes', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', href: '/services' },
  { title: 'Land Development', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', href: '/services' },
  { title: 'Renovation', img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80', href: '/services' },
];

export default function HomePage() {
  const s1 = useVisible();
  const s2 = useVisible();
  const s3 = useVisible();

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=85" alt="Luxury home" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority unoptimized />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(30,37,51,0.96) 0%, rgba(30,37,51,0.85) 45%, rgba(30,37,51,0.5) 100%)' }} />
        </div>

        {/* Red left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '4px', background: '#D01C2A', zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ maxWidth: '680px', animation: 'fadeUp 0.9s ease 0.1s both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', background: '#D01C2A' }} />
              <span className="section-label">British Columbia, Canada</span>
            </div>

            <h1 style={{ fontSize: 'clamp(48px, 7vw, 90px)', marginBottom: '24px', color: '#fff', textTransform: 'uppercase' }}>
              BUILDING<br />
              <span style={{ color: '#D01C2A', WebkitTextStroke: '0px' }}>DREAMS</span><br />
              INTO REALITY
            </h1>

            <p style={{ fontSize: '17px', color: '#CBD5E0', lineHeight: 1.75, maxWidth: '500px', marginBottom: '40px', fontWeight: 300 }}>
              Premium custom homes, land development & renovations across BC. Every project backed by WBI & BC Housing 2-5-10 Warranty.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
              <Link href="/contact" className="btn-primary">Start Your Project</Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ paddingRight: '24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? '24px' : '0' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '32px', fontWeight: 800, color: '#D01C2A', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '11px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'fadeIn 2s ease 1s both', zIndex: 2 }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#718096' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #D01C2A, transparent)' }} />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section ref={s1.ref} style={{ background: '#252D3D', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px', opacity: s1.visible ? 1 : 0, transform: s1.visible ? 'none' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '10px' }}>What We Do</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#fff' }}>OUR CORE SERVICES</h2>
            </div>
            <Link href="/services" style={{ color: '#D01C2A', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
              View All Services
              <svg width="16" height="10" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#D01C2A" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', opacity: s1.visible ? 1 : 0, transition: 'opacity 0.7s ease 0.2s' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', display: 'block' }}>
                <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} unoptimized
                  onMouseEnter={() => {}} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,37,51,0.95) 0%, rgba(30,37,51,0.2) 60%)', transition: 'opacity 0.3s' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div style={{ width: '32px', height: '3px', background: '#D01C2A', marginBottom: '10px' }} />
                  <h3 style={{ fontSize: '22px', color: '#fff', letterSpacing: '0.05em' }}>{s.title}</h3>
                </div>
                <div style={{ position: 'absolute', top: '20px', right: '20px', width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H4M11 1v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={s2.ref} style={{ background: '#1E2533', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left image */}
            <div style={{ position: 'relative', opacity: s2.visible ? 1 : 0, transform: s2.visible ? 'none' : 'translateX(-30px)', transition: 'all 0.8s ease' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80" alt="Construction quality" fill style={{ objectFit: 'cover' }} unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,28,42,0.15) 0%, transparent 60%)' }} />
              </div>
              {/* Stats overlay */}
              <div style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: '#D01C2A', padding: '28px 32px', minWidth: '180px' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '48px', fontWeight: 800, lineHeight: 1, color: '#fff' }}>100+</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', marginTop: '4px' }}>HOMES BUILT<br />ACROSS BC</div>
              </div>
            </div>

            {/* Right content */}
            <div style={{ opacity: s2.visible ? 1 : 0, transform: s2.visible ? 'none' : 'translateX(30px)', transition: 'all 0.8s ease 0.2s' }}>
              <div className="section-label" style={{ marginBottom: '12px' }}>Why Simba Homes</div>
              <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', color: '#fff', marginBottom: '24px' }}>BUILT WITH INTEGRITY. BACKED BY WARRANTY.</h2>
              <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>
                Simba Homes Ltd is a trusted BC residential builder combining expert craftsmanship with transparent processes. From custom dream homes to large-scale land subdivisions, our team delivers every project on time and on budget.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {[
                  'BC Licensed & Insured Residential Builder',
                  'WBI & BC Housing 2-5-10 Year Warranty on all new homes',
                  'End-to-end project management — permits to possession',
                  'Transparent pricing with no hidden fees',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', background: '#D01C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3L9 1" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: '14px', color: '#CBD5E0', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section ref={s3.ref} style={{ position: 'relative', padding: '80px 48px', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80" alt="Contact CTA" fill style={{ objectFit: 'cover' }} unoptimized />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,37,51,0.92)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#D01C2A' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px', opacity: s3.visible ? 1 : 0, transform: s3.visible ? 'none' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Ready to Start?</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff' }}>LET'S BUILD YOUR DREAM HOME</h2>
            <p style={{ fontSize: '15px', color: '#718096', marginTop: '8px' }}>Contact Parminder today for a free consultation.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get Free Quote</Link>
            <a href="tel:+17787077325" className="btn-outline">+1 778 707 7325</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
          section:first-child > div:last-child > div:last-child > div:last-child > div { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
