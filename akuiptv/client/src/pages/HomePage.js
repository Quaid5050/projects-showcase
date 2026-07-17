import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FiTv, FiGlobe, FiDollarSign, FiZap, FiGift, FiLock, FiPackage } from 'react-icons/fi';

function HeroSection() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 10000;
    const step = 150;
    const interval = setInterval(() => {
      setCount(prev => { if (prev >= target) { clearInterval(interval); return target; } return prev + step; });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
      background: `url('/hero.png')`,
      backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(59,130,246,0.08)', filter: 'blur(100px)', top: '-10%', left: '-5%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'rgba(139,92,246,0.07)', filter: 'blur(100px)', bottom: '-5%', right: '-5%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(6,182,212,0.06)', filter: 'blur(80px)', top: '40%', left: '40%', pointerEvents: 'none' }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60, alignItems: 'center' }}>
          <div className="hero-text" style={{ animation: 'fadeInUp 0.8s ease', maxWidth: 600 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', animation: 'pulse-ring 2s infinite' }} />
              <span style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500 }}>Worldwide IPTV Service — Risk Free</span>
            </div>

            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.08, marginBottom: 24 }}>
              Stream The<br />
              <span style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>World's Best</span><br />
              IPTV Content
            </h1>

            <p style={{ fontSize: 18, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Buy 1 Box, Get 1 Year TV Free. Share 3–5 boxes worldwide and earn credit back. 4K streaming. 10,000+ channels. Zero risk.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px',
                borderRadius: 12, background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: '#fff', fontWeight: 700, fontSize: 16, boxShadow: '0 8px 30px rgba(59,130,246,0.35)'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 3l14 9-14 9V3z"/></svg>
                Shop Now
              </Link>
              <Link to="/referrals" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px',
                borderRadius: 12, background: 'transparent', border: '1.5px solid rgba(255,255,255,0.15)',
                color: '#F9FAFB', fontWeight: 600, fontSize: 16
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Earn Rewards
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[
                { num: `${count.toLocaleString()}+`, label: 'Live Channels' },
                { num: '5 Yrs', label: 'Max Free TV' },
                { num: '$600', label: 'Credit Reward' }
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 28, fontWeight: 800, color: '#F9FAFB' }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: '#6B7280', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { background-position: left center !important; }
          .hero-text { text-align: center; margin: 0 auto; }
          .hero-text > div { justify-content: center; }
        }
      `}</style>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: <FiTv size={24} />, title: '10,000+ Channels', desc: 'Live TV from every corner of the world in HD and 4K quality', color: '#3B82F6' },
    { icon: <FiGlobe size={24} />, title: 'Worldwide Access', desc: 'Works anywhere on earth. No geo-restrictions or blackouts', color: '#06B6D4' },
    { icon: <FiDollarSign size={24} />, title: 'Risk-Free Investment', desc: 'Your money is safe. Earn credits, get rewards, never lose', color: '#10B981' },
    { icon: <FiZap size={24} />, title: '4K Ultra HD', desc: 'Crystal-clear streaming with HDR10+ and Dolby Vision support', color: '#8B5CF6' },
    { icon: <FiGift size={24} />, title: 'Referral Rewards', desc: 'Refer 3 friends and earn $600 credits + free TV for years', color: '#F59E0B' },
    { icon: <FiLock size={24} />, title: 'Secure & Reliable', desc: '99.9% uptime with encrypted, protected streaming servers', color: '#EC4899' }
  ];
  return (
    <section style={{ padding: '100px 0', background: '#070B14' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 12 }}>Why Choose Us</div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, marginBottom: 16 }}>Everything You Need to</h2>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, marginBottom: 20, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Stream & Earn</h2>
        <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 540, margin: '0 auto 64px' }}>Professional IPTV service with a built-in reward system that pays you back.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'linear-gradient(145deg, #111827, #1A2540)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 32, textAlign: 'left',
              transition: 'all 0.3s ease', cursor: 'default',
              animation: `fadeInUp 0.6s ease ${i * 0.1}s both`
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + '40'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${f.color}15`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, marginBottom: 20 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products?featured=true').then(r => setProducts(r.data.slice(0, 3))).catch(() => {});
  }, []);

  return (
    <section style={{ padding: '100px 0', background: '#0D1526' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 8 }}>Our Devices</div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 700 }}>Featured IPTV Boxes</h2>
          </div>
          <Link to="/products" style={{ color: '#60A5FA', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            View All <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {products.length === 0 ? [1,2,3].map(i => (
            <div key={i} style={{ background: '#111827', borderRadius: 20, height: 380, border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(90deg, #111827 25%, #1A2540 50%, #111827 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
          )) : products.map((p, i) => (
            <Link to={`/products/${p.slug}`} key={p._id} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                background: 'linear-gradient(145deg, #111827, #1A2540)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20, overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#070B14' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  {p.isFeatured && (
                    <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 600, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff' }}>Featured</div>
                  )}
                  {p.originalPrice && (
                    <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, background: '#10B981', color: '#fff' }}>
                      -{Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 4 }}>{p.brand}</div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>{p.shortDescription}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 22, color: '#F9FAFB' }}>${p.price}</span>
                      {p.originalPrice && <span style={{ fontSize: 13, color: '#6B7280', textDecoration: 'line-through', marginLeft: 8 }}>${p.originalPrice}</span>}
                    </div>
                    <div style={{ padding: '8px 20px', borderRadius: 10, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontSize: 13, fontWeight: 600 }}>Shop</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferralSection() {
  const steps = [
    { num: '01', title: 'Buy a Box', desc: 'Purchase any IPTV box and get 1 year of TV free immediately' },
    { num: '02', title: 'Refer 3 Friends', desc: 'Share your referral code. Each friend buys a box with annual plan' },
    { num: '03', title: 'Earn $600 Credits', desc: 'Receive $600 in credits automatically applied to your account' },
    { num: '04', title: 'Get Rewards', desc: 'Choose from airline tickets, trips, cars, or 5 years of free TV' }
  ];
  return (
    <section style={{ padding: '100px 0', background: '#070B14', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'rgba(139,92,246,0.05)', filter: 'blur(80px)', top: '20%', right: '-10%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 12 }}>Referral Program</div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, marginBottom: 16 }}>
            Turn Friends into<br />
            <span style={{ background: 'linear-gradient(135deg,#F59E0B,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Free Rewards</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>Risk-free, refundable. Never lose your investment. Every referral earns you more.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 48 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(145deg, #111827, #1A2540)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20, padding: 28,
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; }}
              >
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 36, color: 'rgba(59,130,246,0.2)', marginBottom: 16, lineHeight: 1 }}>{s.num}</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
              {i < 3 && <div style={{ position: 'absolute', top: '50%', right: -14, width: 28, height: 2, background: 'linear-gradient(90deg,rgba(59,130,246,0.4),transparent)', display: 'none' }} className="connector" />}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/referrals" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px',
            borderRadius: 14, background: 'linear-gradient(135deg,#F59E0B,#EC4899)',
            color: '#fff', fontWeight: 700, fontSize: 17,
            boxShadow: '0 8px 30px rgba(245,158,11,0.3)'
          }}>
            Start Earning Rewards
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingBanner() {
  const plans = [
    { name: '1 Box', price: 'Market Price', period: '+ 1 Year TV Free', qty: 1, color: '#3B82F6', features: ['1 IPTV Box', '1 Year Subscription', 'All Channels', '4K Support'] },
    { name: '3 Boxes', price: '$299', period: '/year', qty: 3, color: '#8B5CF6', highlight: true, features: ['3 IPTV Boxes (BYOD)', 'Annual Plan', 'Worldwide', 'Earn Credits'] },
    { name: '5 Boxes', price: '$399', period: '/year', qty: 5, color: '#F59E0B', features: ['5 IPTV Boxes (BYOD)', 'Annual Plan', 'Max Rewards', 'Up to 5 Yrs Free TV'] }
  ];
  return (
    <section style={{ padding: '100px 0', background: '#0D1526' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 12 }}>Pricing Plans</div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, marginBottom: 48 }}>Simple, Transparent Pricing</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              background: p.highlight ? `linear-gradient(145deg, ${p.color}18, ${p.color}08)` : 'linear-gradient(145deg, #111827, #1A2540)',
              border: `1px solid ${p.highlight ? p.color + '60' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: 24, padding: 32, position: 'relative',
              transform: p.highlight ? 'scale(1.04)' : 'scale(1)',
              boxShadow: p.highlight ? `0 0 60px ${p.color}20` : 'none'
            }}>
              {p.highlight && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', borderRadius: 100, background: p.color, color: '#fff', fontSize: 12, fontWeight: 700 }}>Most Popular</div>}
              <div style={{ display: 'flex', gap: 6, marginBottom: 16, color: p.color }}>
                {Array.from({ length: p.qty }).map((_, idx) => <FiPackage key={idx} size={28} />)}
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{p.name}</div>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 36, color: '#F9FAFB' }}>{p.price}</span>
                <span style={{ color: '#9CA3AF', fontSize: 15, marginLeft: 4 }}>{p.period}</span>
              </div>
              <div style={{ marginBottom: 28 }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: 14, color: '#9CA3AF' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/contact" style={{
                display: 'block', textAlign: 'center', padding: '12px', borderRadius: 12,
                background: p.highlight ? p.color : 'transparent',
                border: `1.5px solid ${p.highlight ? p.color : 'rgba(255,255,255,0.15)'}`,
                color: '#fff', fontWeight: 600, fontSize: 15
              }}>Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <ReferralSection />
      <PricingBanner />
    </div>
  );
}
