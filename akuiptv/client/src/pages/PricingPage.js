import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiTrendingUp, FiAward, FiDollarSign, FiTv } from 'react-icons/fi';
import { FaPlane, FaCar } from 'react-icons/fa';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter', subtitle: '1 Box + 1 Year Free', icon: <FiPackage size={32} />,
      price: 'Box Price', period: '+ 1 Year Free', color: '#3B82F6',
      features: ['1 IPTV Box (any model)', '1 Year TV Subscription Free', '10,000+ Live Channels', '4K HDR Streaming', 'EPG + VOD Access', '24/7 Support'],
      cta: 'Buy a Box', link: '/products'
    },
    {
      name: 'Growth', subtitle: '3 Box Renewal', icon: <FiTrendingUp size={32} />, highlight: true,
      price: '$299', period: '/year', color: '#8B5CF6',
      features: ['3 IPTV Boxes (BYOD)', 'Annual Subscription Renewal', 'Earn $200 Credit Reward', 'Worldwide Use', 'Share with Family', 'Priority Support'],
      cta: 'Get Started', link: '/contact'
    },
    {
      name: 'Unlimited', subtitle: '5 Box Renewal', icon: <FiAward size={32} />,
      price: '$399', period: '/year', color: '#F59E0B',
      features: ['5 IPTV Boxes (BYOD)', 'Annual Subscription Renewal', 'Earn $400 Credit Reward', 'Up to 5 Years Free TV', 'Real-World Reward Eligible', 'VIP Support'],
      cta: 'Go Unlimited', link: '/contact'
    }
  ];

  const rewards = [
    { top: '$600', label: 'Credits Earned', desc: 'Refer 3 friends on 3-box plan', icon: <FiDollarSign size={28} /> },
    { top: '5 Years', label: 'Free TV Possible', desc: 'With continuous referrals', icon: <FiTv size={28} /> },
    { top: 'Tickets', label: 'Airline Tickets', desc: 'Choose as your reward', icon: <FaPlane size={26} /> },
    { top: 'Car', label: 'Used Car', desc: 'Top earners qualify', icon: <FaCar size={28} /> }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#070B14' }}>
      <div style={{ background: 'linear-gradient(135deg,#0D1526,#111827)', padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 12 }}>Pricing</div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 16 }}>Simple, Transparent Plans</h1>
        <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Risk-free investment. Buy a box, get TV free. Refer friends, earn real rewards.</p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 80 }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              background: p.highlight ? `linear-gradient(145deg, ${p.color}15, ${p.color}05)` : 'linear-gradient(145deg,#111827,#1A2540)',
              border: `1.5px solid ${p.highlight ? p.color + '60' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: 24, padding: 36, position: 'relative',
              transform: p.highlight ? 'scale(1.03)' : 'scale(1)',
              boxShadow: p.highlight ? `0 0 60px ${p.color}15` : 'none'
            }}>
              {p.highlight && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', borderRadius: 100, background: p.color, color: '#fff', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>Most Popular</div>}
              <div style={{ marginBottom: 16, color: p.color }}>{p.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 22, marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 20 }}>{p.subtitle}</div>
              <div style={{ marginBottom: 28 }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 40, color: p.color }}>{p.price}</span>
                <span style={{ color: '#9CA3AF', fontSize: 15, marginLeft: 4 }}>{p.period}</span>
              </div>
              <div style={{ marginBottom: 32 }}>
                {p.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: fi < p.features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: 14, color: '#D1D5DB' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <Link to={p.link} style={{
                display: 'block', textAlign: 'center', padding: '13px', borderRadius: 12,
                background: p.highlight ? p.color : 'transparent',
                border: `1.5px solid ${p.highlight ? p.color : 'rgba(255,255,255,0.15)'}`,
                color: '#fff', fontWeight: 700, fontSize: 15
              }}>{p.cta}</Link>
            </div>
          ))}
        </div>

        {/* Rewards section */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 12 }}>Referral Rewards</div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 36, marginBottom: 12 }}>What You Can Earn</h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, maxWidth: 480, margin: '0 auto 40px' }}>Every referral brings you closer to incredible real-world prizes.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {rewards.map((r, i) => (
            <div key={i} style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 28, textAlign: 'center' }}>
              <div style={{ marginBottom: 12, color: '#F59E0B', display: 'flex', justifyContent: 'center' }}>{r.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 28, color: '#F59E0B', marginBottom: 4 }}>{r.top}</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{r.label}</div>
              <div style={{ color: '#9CA3AF', fontSize: 13 }}>{r.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 60, padding: 40, background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: 24 }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 28, marginBottom: 12 }}>Not Sure Which Plan?</h3>
          <p style={{ color: '#9CA3AF', fontSize: 16, marginBottom: 28 }}>Contact us and our team will find the best option for you and your group.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700, fontSize: 16 }}>Talk to Us</Link>
        </div>
      </div>
    </div>
  );
}
