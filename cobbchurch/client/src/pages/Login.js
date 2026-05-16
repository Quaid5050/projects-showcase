import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(form.email, form.password);
      if (data.user.status === 'pending') {
        toast.info('Your application is pending approval.');
        return;
      }
      toast.success(`Welcome back, Pastor ${data.user.pastorName}!`);
      navigate(data.user.role === 'admin' || data.user.role === 'superadmin' ? '/admin' : '/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <div className="login-logo">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="rgba(212,168,83,0.15)"/>
              <circle cx="20" cy="14" r="5" stroke="#d4a853" strokeWidth="2" fill="none"/>
              <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#d4a853" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1>COBB CHURCH<br /><span>NETWORK</span></h1>
          <p className="login-tagline">Stronger Churches. Stronger Community.</p>
        </div>
        <div className="login-quote">
          <blockquote>
            "When churches move together, we can reach further, serve better, and change more lives."
          </blockquote>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-sub">Log in to access the private Cobb Church Network platform.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="pastor@yourchurch.org"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                required
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="Your password"
              />
            </div>
            <div className="login-links">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{width:'100%',justifyContent:'center',marginTop:'8px'}}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="login-divider"><span>New to the network?</span></div>
          <Link to="/request-access" className="btn btn-outline btn-lg" style={{width:'100%',justifyContent:'center'}}>
            Request Access
          </Link>
          <Link to="/" className="back-home">← Back to Website</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
