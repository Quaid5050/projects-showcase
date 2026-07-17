import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FiDollarSign, FiUsers, FiTv, FiPackage } from 'react-icons/fi';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState([]);
  const [tab, setTab] = useState('overview');

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    if (user.role === 'admin') { navigate('/admin'); return; }
    axios.get('/api/referrals/my').then(r => setReferrals(r.data)).catch(() => {});
  }, [user, navigate]);

  if (!user) return null;

  const stats = [
    { label: 'Credit Balance', value: `$${user.creditBalance || 0}`, icon: <FiDollarSign size={22} />, color: '#F59E0B' },
    { label: 'Total Referrals', value: user.totalReferrals || 0, icon: <FiUsers size={22} />, color: '#3B82F6' },
    { label: 'Free TV Years', value: `${user.tvFreeYears || 0} yrs`, icon: <FiTv size={22} />, color: '#10B981' },
    { label: 'Plan', value: user.subscription?.plan || 'None', icon: <FiPackage size={22} />, color: '#8B5CF6' }
  ];

  const statusColor = { pending: '#F59E0B', active: '#10B981', completed: '#3B82F6', cancelled: '#EF4444' };

  return (
    <div style={{ minHeight: '100vh', background: '#070B14', paddingTop: 40 }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg,#0D1526,#111827)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 4 }}>Welcome back</div>
              <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 28 }}>{user.name}</h1>
              <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>Group ID: <span style={{ color: '#60A5FA', fontWeight: 600 }}>{user.groupId}</span></div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/referrals" style={{ padding: '10px 20px', borderRadius: 10, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#60A5FA', fontWeight: 600, fontSize: 14 }}>Add Referral</Link>
              <button onClick={() => { logout(); navigate('/'); }} style={{ padding: '10px 20px', borderRadius: 10, background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#9CA3AF', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '24px 24px' }}>
              <div style={{ marginBottom: 12, color: s.color }}>{s.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 26, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Referral Code Card */}
        <div style={{ background: 'linear-gradient(145deg,#1a1040,#111827)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 20, padding: 28, marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6 }}>Your Referral Code — Share this to earn rewards</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 30, color: '#A78BFA', letterSpacing: 4 }}>{user.referralCode}</div>
          </div>
          <button onClick={() => navigator.clipboard.writeText(user.referralCode)} style={{ padding: '12px 24px', borderRadius: 12, background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
            Copy Code
          </button>
        </div>

        {/* Referrals list */}
        <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18 }}>My Referrals</div>
            <div style={{ fontSize: 13, color: '#9CA3AF' }}>{referrals.length} total</div>
          </div>

          {referrals.length === 0 ? (
            <div style={{ padding: '60px 24px', textAlign: 'center', color: '#6B7280' }}>
              <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', color: '#6B7280' }}><FiUsers size={40} /></div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>No referrals yet</div>
              <div style={{ fontSize: 14 }}>Share your code to start earning</div>
              <Link to="/referrals" style={{ display: 'inline-block', marginTop: 16, padding: '10px 24px', borderRadius: 10, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#60A5FA', fontWeight: 600, fontSize: 14 }}>Add Referral</Link>
            </div>
          ) : referrals.map((r, i) => (
            <div key={r._id} style={{ padding: '16px 24px', borderBottom: i < referrals.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 700, color: '#60A5FA', fontSize: 16 }}>
                  {r.referee?.name?.charAt(0) || '?'}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{r.referee?.name || 'Unknown'}</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF' }}>{r.referee?.email}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: 13, color: '#9CA3AF' }}>{r.plan.toUpperCase()}</div>
                <div style={{ padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600, background: statusColor[r.status] + '20', color: statusColor[r.status] }}>{r.status}</div>
                {r.creditAwarded > 0 && <div style={{ fontSize: 13, fontWeight: 700, color: '#F59E0B' }}>+${r.creditAwarded}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
