import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { FiTv, FiDollarSign } from 'react-icons/fi';
import { FaPlane, FaTrain, FaCar, FaMoneyBillWave } from 'react-icons/fa';

const PLANS = [
  { id: '1box', label: 'Buy 1 Box', desc: '1 Year TV Free', price: 'Market Price', color: '#3B82F6' },
  { id: '3box', label: 'Share 3 Boxes (BYOD)', desc: 'Renew 3 boxes for $299/yr', price: '$299/yr', color: '#8B5CF6' },
  { id: '5box', label: 'Share 5 Boxes (BYOD)', desc: 'Renew 5 boxes for $399/yr', price: '$399/yr', color: '#F59E0B' }
];

const emptyReferee = () => ({ name: '', email: '', whatsapp: '' });

export default function ReferralPage() {
  const { user } = useAuth();
  const [plan, setPlan] = useState('3box');
  const [referees, setReferees] = useState([emptyReferee(), emptyReferee(), emptyReferee()]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRefereeChange = (i, field, val) => {
    setReferees(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: val } : r));
  };

  const handlePlanChange = (p) => {
    setPlan(p);
    const count = p === '5box' ? 5 : p === '3box' ? 3 : 1;
    setReferees(Array.from({ length: count }, emptyReferee));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) { toast.error('Please login to submit referrals'); return; }
    setLoading(true);
    try {
      const validReferees = referees.filter(r => r.name && r.email);
      if (validReferees.length === 0) { toast.error('Please add at least one referee'); setLoading(false); return; }
      await axios.post('/api/referrals', { referees: validReferees, plan });
      setSubmitted(true);
      toast.success('Referrals submitted successfully!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally { setLoading(false); }
  };

  const rewards = [
    { label: 'Airline Ticket', icon: <FaPlane size={18} />, color: '#3B82F6' },
    { label: 'Road Trip', icon: <FaTrain size={18} />, color: '#06B6D4' },
    { label: 'Used Car', icon: <FaCar size={18} />, color: '#10B981' },
    { label: '5 Years Free TV', icon: <FiTv size={18} />, color: '#8B5CF6' },
    { label: '$600 Credits', icon: <FiDollarSign size={18} />, color: '#F59E0B' },
    { label: 'Cash Refund', icon: <FaMoneyBillWave size={18} />, color: '#EC4899' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#070B14' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0D1526, #1a1040)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 12 }}>Referral Program</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
            Invest. Refer. Earn.<br />
            <span style={{ background: 'linear-gradient(135deg,#F59E0B,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Risk Free Forever.</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 560, margin: '0 auto 32px' }}>
            Your investment is always protected. Refer friends and families to earn up to $600 credits, 5 years of free TV, and incredible real-world rewards.
          </p>
          {!user && (
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link to="/register" style={{ padding: '12px 28px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700 }}>Create Account</Link>
              <Link to="/login" style={{ padding: '12px 28px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.15)', color: '#F9FAFB', fontWeight: 600 }}>Login</Link>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

          {/* Left: Info & Rewards */}
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 28, marginBottom: 24 }}>How It Works</h2>
            {[
              { step: '1', title: 'Purchase a Box', desc: 'Buy any Aku IPTV box — 1 year TV included free' },
              { step: '2', title: 'Share Your Code', desc: 'Give friends your referral code or group ID' },
              { step: '3', title: 'They Join & Renew', desc: 'Each referral purchases or renews their plan' },
              { step: '4', title: 'Collect Rewards', desc: 'Earn credits, free TV years, and real-world prizes' }
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 15, color: '#fff', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}

            {user && (
              <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 16, padding: 24, marginBottom: 32 }}>
                <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 8 }}>Your Referral Code</div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 24, color: '#60A5FA', letterSpacing: 3 }}>{user.referralCode}</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>Group ID: {user.groupId}</div>
              </div>
            )}

            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, marginBottom: 20 }}>Choose Your Reward</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {rewards.map((r, i) => (
                <div key={i} style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: `1px solid ${r.color}25`, borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: r.color, display: 'flex' }}>{r.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#F9FAFB' }}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 24, padding: 48, textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 24, marginBottom: 12 }}>Referrals Submitted!</h3>
                <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.7 }}>Your referrals are being processed. Credits will be applied once your friends activate their plans.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: 24, padding: '12px 28px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: 15 }}>Submit More</button>
              </div>
            ) : (
              <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, padding: 36 }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Submit Referrals</h3>
                <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 28 }}>Enter your friends' details below to register them under your group.</p>

                {/* Plan selector */}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 10 }}>SELECT PLAN</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {PLANS.map(p => (
                      <div key={p.id} onClick={() => handlePlanChange(p.id)} style={{
                        padding: '14px 18px', borderRadius: 12, cursor: 'pointer',
                        border: `1.5px solid ${plan === p.id ? p.color : 'rgba(255,255,255,0.08)'}`,
                        background: plan === p.id ? p.color + '12' : 'transparent',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        transition: 'all 0.2s ease'
                      }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 15, color: plan === p.id ? '#F9FAFB' : '#9CA3AF' }}>{p.label}</div>
                          <div style={{ fontSize: 12, color: '#6B7280' }}>{p.desc}</div>
                        </div>
                        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 16, color: p.color }}>{p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 12 }}>REFEREES ({referees.length})</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {referees.map((r, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 18 }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 12 }}>Friend {i + 1}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <input value={r.name} onChange={e => handleRefereeChange(i, 'name', e.target.value)} placeholder="Full name" style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#F9FAFB', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                            <input type="email" value={r.email} onChange={e => handleRefereeChange(i, 'email', e.target.value)} placeholder="Email address" style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#F9FAFB', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                            <input value={r.whatsapp} onChange={e => handleRefereeChange(i, 'whatsapp', e.target.value)} placeholder="WhatsApp number" style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#F9FAFB', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {!user && (
                    <div style={{ padding: 16, borderRadius: 12, background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', marginBottom: 20, fontSize: 14, color: '#FCD34D' }}>
                      You must be logged in to submit referrals. <Link to="/login" style={{ color: '#60A5FA', fontWeight: 600 }}>Login here</Link>
                    </div>
                  )}

                  <button type="submit" disabled={loading || !user} style={{
                    width: '100%', padding: '14px', borderRadius: 12,
                    background: loading ? 'rgba(59,130,246,0.5)' : 'linear-gradient(135deg,#3B82F6,#8B5CF6)',
                    color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', cursor: loading ? 'wait' : 'pointer',
                    opacity: !user ? 0.5 : 1
                  }}>
                    {loading ? 'Submitting...' : 'Submit Referrals'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){div>div>div{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
