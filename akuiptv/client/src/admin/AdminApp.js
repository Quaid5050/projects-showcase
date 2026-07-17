import React, { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { FiX, FiUploadCloud } from 'react-icons/fi';

const AuthCtx = createContext();
const useAuth = () => useContext(AuthCtx);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('/api/auth/me').then(r => {
        if (r.data.role === 'admin') setUser(r.data);
        else { localStorage.removeItem('admin_token'); delete axios.defaults.headers.common['Authorization']; }
      }).catch(() => { localStorage.removeItem('admin_token'); delete axios.defaults.headers.common['Authorization']; })
        .finally(() => setLoading(false));
    } else setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await axios.post('/api/auth/login', { email, password });
    if (res.data.user.role !== 'admin') throw new Error('Admin access only');
    localStorage.setItem('admin_token', res.data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return <AuthCtx.Provider value={{ user, loading, login, logout }}>{!loading && children}</AuthCtx.Provider>;
}

// ─── Styles ─────────────────────────────────────────────────────────────────
const S = {
  bg: '#070B14', bg2: '#0D1526', card: '#111827', card2: '#1A2540',
  blue: '#3B82F6', purple: '#8B5CF6', cyan: '#06B6D4', green: '#10B981',
  orange: '#F59E0B', pink: '#EC4899', red: '#EF4444',
  text: '#F9FAFB', muted: '#9CA3AF', subtle: '#6B7280',
  border: 'rgba(255,255,255,0.07)', borderBlue: 'rgba(59,130,246,0.3)',
  gradBlue: 'linear-gradient(135deg,#3B82F6,#8B5CF6)',
};

const cardStyle = { background: `linear-gradient(145deg,${S.card},${S.card2})`, border: `1px solid ${S.border}`, borderRadius: 16 };
const inputStyle = { width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${S.border}`, borderRadius: 10, color: S.text, fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'Inter,sans-serif' };

// ─── Login ───────────────────────────────────────────────────────────────────
function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault(); setErr(''); setLoading(true);
    try { await login(form.email, form.password); navigate('/admin'); }
    catch (er) { setErr(er.response?.data?.message || er.message || 'Login failed'); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', background: S.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: S.gradBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff' }}>A</div>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 26, color: S.text, margin: 0 }}>Admin Panel</h1>
          <p style={{ color: S.muted, fontSize: 14, marginTop: 6 }}>AKU IPTV Management System</p>
        </div>
        <div style={{ ...cardStyle, padding: 32 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input type="email" required placeholder="Admin email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle} />
            <input type="password" required placeholder="Password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} style={inputStyle} />
            {err && <div style={{ fontSize: 13, color: S.red, padding: '10px 14px', background: 'rgba(239,68,68,0.1)', borderRadius: 8 }}>{err}</div>}
            <button type="submit" disabled={loading} style={{ padding: '12px', borderRadius: 10, background: S.gradBlue, color: '#fff', fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer' }}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <div style={{ marginTop: 16, padding: 12, background: 'rgba(59,130,246,0.06)', borderRadius: 10, border: '1px solid rgba(59,130,246,0.15)' }}>
            <div style={{ fontSize: 11, color: S.muted, marginBottom: 4, fontWeight: 600 }}>DEMO CREDENTIALS</div>
            <div style={{ fontSize: 13, color: '#60A5FA' }}>admin@akuiptv.com / Admin@123456</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({ active, setActive }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const items = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'products', label: 'Products' },
    { id: 'users', label: 'Users' },
    { id: 'referrals', label: 'Referrals' },
    { id: 'inquiries', label: 'Inquiries' }
  ];

  return (
    <div style={{ width: 240, background: S.bg2, borderRight: `1px solid ${S.border}`, display: 'flex', flexDirection: 'column', height: '100vh', position: 'fixed', left: 0, top: 0 }}>
      <div style={{ padding: '24px 20px', borderBottom: `1px solid ${S.border}` }}>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18, color: S.text }}>AKU IPTV</div>
        <div style={{ fontSize: 11, color: S.cyan, letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 2 }}>Admin Panel</div>
      </div>
      <nav style={{ padding: '16px 12px', flex: 1 }}>
        {items.map(item => (
          <button key={item.id} onClick={() => setActive(item.id)} style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 14px', borderRadius: 10, border: 'none', cursor: 'pointer', marginBottom: 4,
            background: active === item.id ? 'rgba(59,130,246,0.12)' : 'transparent',
            color: active === item.id ? '#60A5FA' : S.muted,
            fontSize: 14, fontWeight: active === item.id ? 600 : 400,
            textAlign: 'left', fontFamily: 'Inter, sans-serif',
            borderLeft: active === item.id ? `2px solid ${S.blue}` : '2px solid transparent'
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: active === item.id ? S.blue : 'transparent' }} />
            {item.label}
          </button>
        ))}
      </nav>
      <div style={{ padding: '16px 12px', borderBottom: `1px solid ${S.border}` }}>
        <button onClick={() => navigate('/')} style={{ width: '100%', padding: '9px', borderRadius: 8, border: `1px solid ${S.border}`, background: 'transparent', color: S.cyan, fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif', marginBottom: 8 }}>
          ← View Website
        </button>
      </div>
      <div style={{ padding: '16px 12px' }}>
        <div style={{ padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', marginBottom: 8 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: S.text }}>{user?.name}</div>
          <div style={{ fontSize: 11, color: S.muted }}>Administrator</div>
        </div>
        <button onClick={logout} style={{ width: '100%', padding: '9px', borderRadius: 8, border: `1px solid ${S.border}`, background: 'transparent', color: S.muted, fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Logout</button>
      </div>
    </div>
  );
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => { axios.get('/api/admin/dashboard').then(r => setData(r.data)).catch(() => {}); }, []);

  const statCards = data ? [
    { label: 'Total Users', value: data.stats.totalUsers, color: S.blue },
    { label: 'Products', value: data.stats.totalProducts, color: S.purple },
    { label: 'Referrals', value: data.stats.totalReferrals, color: S.green },
    { label: 'New Inquiries', value: data.stats.newInquiries, color: S.orange },
    { label: 'Active Subs', value: data.stats.activeSubscriptions, color: S.cyan }
  ] : [];

  return (
    <div>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, marginBottom: 24, color: S.text }}>Dashboard Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 36 }}>
        {!data ? <div style={{ color: S.muted, fontSize: 14 }}>Loading...</div> : statCards.map((s, i) => (
          <div key={i} style={{ ...cardStyle, padding: '20px 22px' }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 32, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 13, color: S.muted, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ ...cardStyle, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${S.border}`, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: S.text }}>Recent Users</div>
          {data?.recentUsers?.map((u, i) => (
            <div key={u._id} style={{ padding: '12px 20px', borderBottom: i < data.recentUsers.length - 1 ? `1px solid ${S.border}` : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: S.text }}>{u.name}</div>
                <div style={{ fontSize: 12, color: S.muted }}>{u.email}</div>
              </div>
              <div style={{ fontSize: 11, color: S.muted }}>{new Date(u.createdAt).toLocaleDateString()}</div>
            </div>
          ))}
          {!data && <div style={{ padding: '40px 20px', textAlign: 'center', color: S.muted, fontSize: 14 }}>Loading...</div>}
        </div>
        <div style={{ ...cardStyle, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${S.border}`, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: S.text }}>Recent Inquiries</div>
          {data?.recentInquiries?.map((inq, i) => (
            <div key={inq._id} style={{ padding: '12px 20px', borderBottom: i < data.recentInquiries.length - 1 ? `1px solid ${S.border}` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: S.text }}>{inq.name}</div>
                <div style={{ padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600, background: inq.status === 'new' ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)', color: inq.status === 'new' ? S.orange : S.green }}>{inq.status}</div>
              </div>
              <div style={{ fontSize: 12, color: S.muted, marginTop: 2 }}>{inq.subject || 'General Inquiry'}</div>
            </div>
          ))}
          {!data && <div style={{ padding: '40px 20px', textAlign: 'center', color: S.muted, fontSize: 14 }}>Loading...</div>}
        </div>
      </div>
    </div>
  );
}

// ─── Products Manager ─────────────────────────────────────────────────────────
function ProductsManager() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', slug: '', brand: '', description: '', shortDescription: '', price: '', originalPrice: '', category: 'iptv-box', isFeatured: false, images: [''] });
  const [uploading, setUploading] = useState(false);

  useEffect(() => { axios.get('/api/products').then(r => setProducts(r.data)).catch(() => {}); }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const data = new FormData();
      data.append('image', file);
      const res = await axios.post('/api/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      setForm(p => ({ ...p, images: [res.data.url] }));
    } catch (err) {
      alert(err.response?.data?.message || 'Image upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleSave = async () => {
    try {
      const data = { ...form, price: parseFloat(form.price), originalPrice: parseFloat(form.originalPrice) || undefined };
      if (editing) await axios.put(`/api/products/${editing._id}`, data);
      else await axios.post('/api/products', data);
      const res = await axios.get('/api/products');
      setProducts(res.data); setShowForm(false); setEditing(null);
    } catch (err) { alert(err.response?.data?.message || 'Error saving product'); }
  };

  const handleDelete = async id => {
    if (!window.confirm('Remove this product?')) return;
    await axios.delete(`/api/products/${id}`);
    setProducts(p => p.filter(x => x._id !== id));
  };

  const openEdit = p => {
    setEditing(p);
    setForm({ ...p, price: p.price.toString(), originalPrice: p.originalPrice?.toString() || '', images: p.images.length ? p.images : [''] });
    setShowForm(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, color: S.text, margin: 0 }}>Products</h2>
        <button onClick={() => { setEditing(null); setForm({ name: '', slug: '', brand: '', description: '', shortDescription: '', price: '', originalPrice: '', category: 'iptv-box', isFeatured: false, images: [''] }); setShowForm(true); }}
          style={{ padding: '10px 20px', borderRadius: 10, background: S.gradBlue, color: '#fff', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer' }}>
          + Add Product
        </button>
      </div>

      {showForm && (
        <div style={{ ...cardStyle, padding: 28, marginBottom: 24 }}>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 20, color: S.text }}>{editing ? 'Edit Product' : 'Add Product'}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[{ key: 'name', label: 'Name' }, { key: 'slug', label: 'Slug' }, { key: 'brand', label: 'Brand' }, { key: 'price', label: 'Price ($)' }, { key: 'originalPrice', label: 'Original Price ($)' }].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 12, color: S.muted, display: 'block', marginBottom: 6 }}>{f.label.toUpperCase()}</label>
                <input value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={inputStyle} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 12, color: S.muted, display: 'block', marginBottom: 6 }}>CATEGORY</label>
              <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} style={{ ...inputStyle, background: S.card }}>
                <option value="iptv-box">IPTV Box</option>
                <option value="android-box">Android Box</option>
                <option value="mag-box">MAG Box</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 12, color: S.muted, display: 'block', marginBottom: 6 }}>SHORT DESCRIPTION</label>
            <input value={form.shortDescription} onChange={e => setForm(p => ({ ...p, shortDescription: e.target.value }))} style={inputStyle} />
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 12, color: S.muted, display: 'block', marginBottom: 6 }}>DESCRIPTION</label>
            <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 12, color: S.muted, display: 'block', marginBottom: 6 }}>PRODUCT IMAGE</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {form.images[0] && (
                <img src={form.images[0]} alt="Preview" style={{ width: 72, height: 72, borderRadius: 12, objectFit: 'cover', border: `1px solid ${S.border}`, flexShrink: 0 }} />
              )}
              <label style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10,
                border: `1px dashed ${S.borderBlue}`, background: 'rgba(59,130,246,0.06)', color: S.blue,
                fontSize: 13, fontWeight: 600, cursor: uploading ? 'wait' : 'pointer'
              }}>
                <FiUploadCloud size={16} />
                {uploading ? 'Uploading...' : 'Upload Image'}
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} style={{ display: 'none' }} />
              </label>
            </div>
            <input
              value={form.images[0]}
              onChange={e => setForm(p => ({ ...p, images: [e.target.value] }))}
              style={{ ...inputStyle, marginTop: 10 }}
              placeholder="or paste an image URL directly"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
            <input type="checkbox" id="featured" checked={form.isFeatured} onChange={e => setForm(p => ({ ...p, isFeatured: e.target.checked }))} />
            <label htmlFor="featured" style={{ fontSize: 14, color: S.muted }}>Featured product</label>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button onClick={handleSave} style={{ padding: '10px 24px', borderRadius: 10, background: S.gradBlue, color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer' }}>Save</button>
            <button onClick={() => setShowForm(false)} style={{ padding: '10px 24px', borderRadius: 10, border: `1px solid ${S.border}`, background: 'transparent', color: S.muted, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Cancel</button>
          </div>
        </div>
      )}

      <div style={{ ...cardStyle, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                {['Product', 'Brand', 'Category', 'Price', 'Featured', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: `1px solid ${S.border}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p._id} style={{ borderBottom: i < products.length - 1 ? `1px solid ${S.border}` : 'none' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, fontSize: 14, color: S.text }}>{p.name}</td>
                  <td style={{ padding: '12px 16px', color: S.muted, fontSize: 14 }}>{p.brand}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13 }}><span style={{ padding: '3px 10px', borderRadius: 6, background: 'rgba(59,130,246,0.1)', color: '#93C5FD' }}>{p.category}</span></td>
                  <td style={{ padding: '12px 16px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: S.green }}>${p.price}</td>
                  <td style={{ padding: '12px 16px' }}><span style={{ fontSize: 12 }}>{p.isFeatured ? '⭐' : '—'}</span></td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => openEdit(p)} style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(59,130,246,0.1)', border: 'none', color: '#60A5FA', fontSize: 12, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Edit</button>
                      <button onClick={() => handleDelete(p._id)} style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.1)', border: 'none', color: '#F87171', fontSize: 12, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: S.muted }}>No products yet</div>}
        </div>
      </div>
    </div>
  );
}

// ─── Users Manager ────────────────────────────────────────────────────────────
function UsersManager() {
  const [users, setUsers] = useState([]);
  useEffect(() => { axios.get('/api/admin/users').then(r => setUsers(r.data)).catch(() => {}); }, []);

  return (
    <div>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, marginBottom: 24, color: S.text }}>Users ({users.length})</h2>
      <div style={{ ...cardStyle, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                {['Name', 'Email', 'Group ID', 'WhatsApp', 'Referrals', 'Credits', 'Plan', 'Joined'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: S.muted, textTransform: 'uppercase', borderBottom: `1px solid ${S.border}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id} style={{ borderBottom: i < users.length - 1 ? `1px solid ${S.border}` : 'none' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, fontSize: 14, color: S.text }}>{u.name}</td>
                  <td style={{ padding: '12px 16px', color: S.muted, fontSize: 13 }}>{u.email}</td>
                  <td style={{ padding: '12px 16px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: S.blue, fontSize: 13 }}>{u.groupId}</td>
                  <td style={{ padding: '12px 16px', color: S.muted, fontSize: 13 }}>{u.whatsapp}</td>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: S.green }}>{u.totalReferrals}</td>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: S.orange }}>${u.creditBalance}</td>
                  <td style={{ padding: '12px 16px' }}><span style={{ padding: '3px 10px', borderRadius: 6, fontSize: 12, background: u.subscription?.isActive ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)', color: u.subscription?.isActive ? S.green : S.muted }}>{u.subscription?.plan || 'none'}</span></td>
                  <td style={{ padding: '12px 16px', color: S.muted, fontSize: 12 }}>{new Date(u.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: S.muted }}>No users yet</div>}
        </div>
      </div>
    </div>
  );
}

// ─── Referrals Manager ────────────────────────────────────────────────────────
function ReferralsManager() {
  const [refs, setRefs] = useState([]);
  useEffect(() => { axios.get('/api/referrals/all').then(r => setRefs(r.data)).catch(() => {}); }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`/api/referrals/${id}`, { status });
    setRefs(p => p.map(r => r._id === id ? { ...r, status } : r));
  };

  const statusColor = { pending: S.orange, active: S.green, completed: S.blue, cancelled: S.red };

  return (
    <div>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, marginBottom: 24, color: S.text }}>Referrals ({refs.length})</h2>
      <div style={{ ...cardStyle, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                {['Referrer', 'Referee', 'Plan', 'Amount', 'Credit', 'Status', 'Date', 'Update'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: S.muted, textTransform: 'uppercase', borderBottom: `1px solid ${S.border}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {refs.map((r, i) => (
                <tr key={r._id} style={{ borderBottom: i < refs.length - 1 ? `1px solid ${S.border}` : 'none' }}>
                  <td style={{ padding: '12px 16px', fontSize: 14 }}><div style={{ color: S.text, fontWeight: 600 }}>{r.referrer?.name}</div><div style={{ fontSize: 11, color: S.muted }}>{r.referrer?.groupId}</div></td>
                  <td style={{ padding: '12px 16px', fontSize: 14 }}><div style={{ color: S.text }}>{r.referee?.name}</div><div style={{ fontSize: 11, color: S.muted }}>{r.referee?.email}</div></td>
                  <td style={{ padding: '12px 16px' }}><span style={{ padding: '3px 10px', borderRadius: 6, fontSize: 12, background: 'rgba(59,130,246,0.1)', color: '#93C5FD' }}>{r.plan}</span></td>
                  <td style={{ padding: '12px 16px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: S.green }}>${r.amount}</td>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: S.orange }}>{r.creditAwarded > 0 ? `$${r.creditAwarded}` : '—'}</td>
                  <td style={{ padding: '12px 16px' }}><span style={{ padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 600, background: statusColor[r.status] + '20', color: statusColor[r.status] }}>{r.status}</span></td>
                  <td style={{ padding: '12px 16px', color: S.muted, fontSize: 12 }}>{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <select value={r.status} onChange={e => updateStatus(r._id, e.target.value)} style={{ padding: '4px 8px', background: S.card, border: `1px solid ${S.border}`, borderRadius: 6, color: S.text, fontSize: 12, cursor: 'pointer' }}>
                      {['pending', 'active', 'completed', 'cancelled'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {refs.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: S.muted }}>No referrals yet</div>}
        </div>
      </div>
    </div>
  );
}

// ─── Inquiries Manager ────────────────────────────────────────────────────────
function InquiriesManager() {
  const [inquiries, setInquiries] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => { axios.get('/api/inquiries').then(r => setInquiries(r.data)).catch(() => {}); }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`/api/inquiries/${id}`, { status });
    setInquiries(p => p.map(inq => inq._id === id ? { ...inq, status } : inq));
    if (selected?._id === id) setSelected(s => ({ ...s, status }));
  };

  const statusColor = { new: S.orange, read: S.blue, replied: S.green, closed: S.muted };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: 24 }}>
      <div>
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, marginBottom: 24, color: S.text }}>Inquiries ({inquiries.length})</h2>
        <div style={{ ...cardStyle, overflow: 'hidden' }}>
          {inquiries.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: S.muted }}>No inquiries yet</div>}
          {inquiries.map((inq, i) => (
            <div key={inq._id} onClick={() => { setSelected(inq); updateStatus(inq._id, 'read'); }}
              style={{ padding: '16px 20px', borderBottom: i < inquiries.length - 1 ? `1px solid ${S.border}` : 'none', cursor: 'pointer', background: selected?._id === inq._id ? 'rgba(59,130,246,0.06)' : 'transparent', transition: 'background 0.15s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: S.text }}>{inq.name}</div>
                <span style={{ padding: '2px 8px', borderRadius: 100, fontSize: 11, fontWeight: 600, background: statusColor[inq.status] + '20', color: statusColor[inq.status] }}>{inq.status}</span>
              </div>
              <div style={{ fontSize: 12, color: S.muted }}>{inq.email} • {inq.subject || 'General'}</div>
              <div style={{ fontSize: 13, color: S.subtle, marginTop: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{inq.message}</div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: S.text, margin: 0 }}>Inquiry Details</h3>
            <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: S.muted, cursor: 'pointer', display: 'flex' }}><FiX size={20} /></button>
          </div>
          <div style={{ ...cardStyle, padding: 24 }}>
            <div style={{ marginBottom: 20 }}>
              {[['Name', selected.name], ['Email', selected.email], ['WhatsApp', selected.whatsapp || '—'], ['Subject', selected.subject || '—']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', padding: '8px 0', borderBottom: `1px solid ${S.border}` }}>
                  <div style={{ width: 100, color: S.muted, fontSize: 13 }}>{k}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: S.text }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: 16, background: 'rgba(255,255,255,0.02)', borderRadius: 12, fontSize: 14, lineHeight: 1.8, color: S.muted, marginBottom: 20 }}>{selected.message}</div>
            <div>
              <label style={{ fontSize: 12, color: S.muted, display: 'block', marginBottom: 8 }}>UPDATE STATUS</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {['read', 'replied', 'closed'].map(s => (
                  <button key={s} onClick={() => updateStatus(selected._id, s)} style={{ padding: '7px 14px', borderRadius: 8, background: selected.status === s ? S.blue + '20' : 'transparent', border: `1px solid ${selected.status === s ? S.blue : S.border}`, color: selected.status === s ? '#60A5FA' : S.muted, fontSize: 12, cursor: 'pointer', textTransform: 'capitalize', fontFamily: 'Inter, sans-serif' }}>{s}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Admin Layout ─────────────────────────────────────────────────────────────
function AdminLayout() {
  const [active, setActive] = useState('dashboard');
  const views = { dashboard: Dashboard, products: ProductsManager, users: UsersManager, referrals: ReferralsManager, inquiries: InquiriesManager };
  const View = views[active];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: S.bg, fontFamily: 'Inter, sans-serif', color: S.text }}>
      <Sidebar active={active} setActive={setActive} />
      <main style={{ flex: 1, marginLeft: 240, padding: '40px 40px', overflowY: 'auto', minHeight: '100vh' }}>
        <View />
      </main>
    </div>
  );
}

// ─── Require Admin Guard ──────────────────────────────────────────────────────
function RequireAdmin({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}

// ─── Admin App Root ───────────────────────────────────────────────────────────
export default function AdminApp() {
  return (
    <AuthProvider>
      <Toaster position="top-right" toastOptions={{ style: { background: '#111827', color: '#F9FAFB', border: '1px solid rgba(255,255,255,0.1)' } }} />
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route path="*" element={<RequireAdmin><AdminLayout /></RequireAdmin>} />
      </Routes>
    </AuthProvider>
  );
}
