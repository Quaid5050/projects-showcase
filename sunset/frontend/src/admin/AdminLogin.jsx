import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/admin');
    } catch {
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0E1729', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 16px' }}>
            <circle cx="32" cy="28" r="24" fill="none" stroke="#C9933A" strokeWidth="1.5"/>
            <circle cx="32" cy="28" r="9" fill="#C9933A" opacity="0.9"/>
            <path d="M18 38 Q22 20 18 10" stroke="#1A2744" strokeWidth="2" fill="none"/>
            <path d="M18 10 Q13 5 10 7" stroke="#1A2744" strokeWidth="1.5" fill="none"/>
            <path d="M18 10 Q20 4 18 1" stroke="#1A2744" strokeWidth="1.5" fill="none"/>
          </svg>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: '#FFFFFF', letterSpacing: '0.06em' }}>SUNSET RETREAT</div>
          <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: '0.3em', color: '#C9933A', textTransform: 'uppercase', marginTop: 4 }}>Admin Portal</div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,147,58,0.2)', padding: '40px 36px' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: '#FFFFFF', marginBottom: 28, fontWeight: 400 }}>Sign In</h2>
          <form onSubmit={submit}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 8 }}>Email</label>
              <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required placeholder="admin@sunsetretreat.com"
                style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,147,58,0.3)', color: '#FFFFFF', fontFamily: "'Jost',sans-serif", fontSize: 14, outline: 'none' }}
              />
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 8 }}>Password</label>
              <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required placeholder="••••••••"
                style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,147,58,0.3)', color: '#FFFFFF', fontFamily: "'Jost',sans-serif", fontSize: 14, outline: 'none' }}
              />
            </div>
            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '14px', background: '#C9933A', border: 'none', color: '#FFFFFF',
              fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase',
              cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'all 0.3s',
            }}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
        <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 24 }}>Sunset Retreat JA — Admin Panel v1.0</p>
      </div>
    </div>
  );
}
