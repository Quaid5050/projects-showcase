import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await login(form.email, form.password);
      toast.success(`Welcome back, ${user.name.split(' ')[0]}!`);
      navigate(user.role === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#070B14', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px' }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: 800, color: '#fff' }}>A</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Welcome Back</h1>
          <p style={{ color: '#9CA3AF', fontSize: 15 }}>Sign in to your AKU IPTV account</p>
        </div>

        <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 36 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8 }}>EMAIL ADDRESS</label>
              <input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com"
                style={{ width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#F9FAFB', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: 8 }}>PASSWORD</label>
              <input type="password" required value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="Enter your password"
                style={{ width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#F9FAFB', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" disabled={loading} style={{ padding: '14px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', marginTop: 4 }}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 24, color: '#9CA3AF', fontSize: 14 }}>
            Do not have an account?{' '}
            <Link to="/register" style={{ color: '#60A5FA', fontWeight: 600 }}>Create account</Link>
          </div>

          <div style={{ marginTop: 20, padding: '14px', background: 'rgba(59,130,246,0.06)', borderRadius: 12, border: '1px solid rgba(59,130,246,0.15)' }}>
            <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 6, fontWeight: 600 }}>DEMO CREDENTIALS</div>
            <div style={{ fontSize: 13, color: '#60A5FA' }}>admin@akuiptv.com / Admin@123456</div>
          </div>
        </div>
      </div>
    </div>
  );
}
