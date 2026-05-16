import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { toast } from 'react-toastify';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', form);
      localStorage.setItem('cpUser', JSON.stringify(data));
      toast.success(`Welcome back, ${data.name}!`);
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0B1F3A,#1a3a5c)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: '#fff', borderRadius: 10, padding: '2.5rem', width: '100%', maxWidth: 420, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <svg width="44" height="44" viewBox="0 0 36 36" fill="none" style={{ marginBottom: 12 }}>
            <path d="M18 2L4 8v10c0 8.5 5.9 16.4 14 19c8.1-2.6 14-10.5 14-19V8L18 2z" fill="#C9A84C" fillOpacity="0.2" stroke="#C9A84C" strokeWidth="1.5"/>
            <path d="M18 4L6 9.5v8.5c0 7 4.9 13.5 12 16c7.1-2.5 12-9 12-16v-8.5L18 4z" fill="#0B1F3A"/>
            <path d="M12 18l4 4 8-8" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.6rem', color: '#0B1F3A', marginBottom: 4 }}>GlobalPardon Admin</h1>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Sign in to manage leads & cases</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="admin@.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-navy" style={{ width: '100%', marginTop: 8 }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.78rem', color: '#9ca3af' }}>
          First time? <a href="/api/auth/seed" target="_blank" rel="noreferrer" style={{ color: '#0B1F3A', fontWeight: 600 }}>Create admin account</a>
        </p>
      </div>
    </div>
  );
}
