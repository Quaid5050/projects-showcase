import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', password: '', whatsapp: '', referralCode: params.get('ref') || '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(form);
      toast.success('Account created! Welcome to AKU IPTV');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally { setLoading(false); }
  };

  const fields = [
    { name: 'name', label: 'FULL NAME', type: 'text', placeholder: 'Your full name' },
    { name: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'your@email.com' },
    { name: 'whatsapp', label: 'WHATSAPP NUMBER', type: 'text', placeholder: '+1 234 567 8900' },
    { name: 'password', label: 'PASSWORD', type: 'password', placeholder: 'Create a strong password' },
    { name: 'referralCode', label: 'REFERRAL CODE (OPTIONAL)', type: 'text', placeholder: 'Enter referral code' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#070B14', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px' }}>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Create Account</h1>
          <p style={{ color: '#9CA3AF', fontSize: 15 }}>Join AKU IPTV and start streaming worldwide</p>
        </div>

        <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 36 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {fields.map(f => (
              <div key={f.name}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8, letterSpacing: '0.5px' }}>{f.label}</label>
                <input name={f.name} type={f.type} required={!['referralCode'].includes(f.name)} value={form[f.name]} onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))} placeholder={f.placeholder}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#F9FAFB', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
              </div>
            ))}
            <button type="submit" disabled={loading} style={{ padding: '14px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', marginTop: 8 }}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 24, color: '#9CA3AF', fontSize: 14 }}>
            Already have an account? <Link to="/login" style={{ color: '#60A5FA', fontWeight: 600 }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
