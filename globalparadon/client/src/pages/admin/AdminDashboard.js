import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import api from '../../api';
import { toast } from 'react-toastify';

const COLORS = ['#3b82f6','#f59e0b','#8b5cf6','#ef4444','#10b981','#C9A84C','#6b7280','#374151'];

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('cpUser') || '{}');

  const logout = () => {
    localStorage.removeItem('cpUser');
    navigate('/admin/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9' }}>
      {/* Sidebar */}
      <div style={{ width: 240, background: '#0B1F3A', color: '#fff', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>GlobalPardon</div>
          <div style={{ fontSize: '0.65rem', color: '#E8C46A', letterSpacing: '2px', textTransform: 'uppercase', marginTop: 2 }}>Admin Panel</div>
        </div>
        <nav style={{ padding: '1rem 0', flex: 1 }}>
          {[
            { to: '/admin', icon: '📊', label: 'Dashboard' },
            { to: '/admin/leads', icon: '👥', label: 'All Leads' },
            { to: '/admin/leads?status=New Lead', icon: '🔔', label: 'New Leads' },
            { to: '/admin/leads?status=In Review', icon: '🔍', label: 'In Review' },
            { to: '/admin/leads?status=Submitted', icon: '📤', label: 'Submitted' },
            { to: '/admin/leads?status=Approved', icon: '✅', label: 'Approved' },
          ].map(item => (
            <Link key={item.to} to={item.to} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 1.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', fontWeight: 500, transition: 'all 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>
              <span>{item.icon}</span>{item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Signed in as</div>
          <div style={{ fontSize: '0.875rem', color: '#fff', fontWeight: 600, marginBottom: 10 }}>{user.name}</div>
          <button onClick={logout} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'rgba(255,255,255,0.7)', padding: '6px 14px', borderRadius: 4, cursor: 'pointer', fontSize: '0.8rem', width: '100%' }}>Sign Out</button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ background: '#fff', padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.4rem', color: '#0B1F3A' }}>CRM Dashboard</h1>
          <Link to="/apply" target="_blank" style={{ fontSize: '0.8rem', color: '#6b7280' }}>← Back to Website</Link>
        </div>
        <div style={{ padding: '2rem' }}>{children}</div>
      </div>
    </div>
  );
}

export { AdminLayout };

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const [statsRes, leadsRes] = await Promise.all([
          api.get('/leads/stats/summary'),
          api.get('/leads?limit=5'),
        ]);
        setStats(statsRes.data);
        setRecentLeads(leadsRes.data.leads || []);
      } catch (err) {
        toast.error('Failed to load dashboard data');
      }
      setLoading(false);
    };
    fetch();
  }, []);

  const statusColor = (s) => ({
    'New Lead': 'badge-new', 'Contacted': 'badge-contact', 'In Review': 'badge-review',
    'Documents Requested': 'badge-docs', 'Submitted': 'badge-submit',
    'Approved': 'badge-approved', 'Rejected': 'badge-rejected', 'Closed': 'badge-closed',
  }[s] || 'badge-closed');

  if (loading) return <AdminLayout><div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>Loading dashboard...</div></AdminLayout>;

  const pipelineData = stats?.pipeline?.map(p => ({ name: p._id, value: p.count })) || [];
  const serviceData = stats?.byService?.map(s => ({ name: s._id || 'Unknown', count: s.count })) || [];

  return (
    <AdminLayout>
      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.2rem', marginBottom: '2rem' }}>
        {[
          { label: 'Total Leads', value: stats?.total || 0, icon: '👥', color: '#3b82f6' },
          { label: 'New Leads', value: stats?.newLeads || 0, icon: '🔔', color: '#f59e0b' },
          { label: 'Approved', value: stats?.approved || 0, icon: '✅', color: '#10b981' },
          { label: 'Pipeline', value: stats?.pipeline?.length || 0, icon: '📊', color: '#8b5cf6' },
        ].map(k => (
          <div key={k.label} style={{ background: '#fff', borderRadius: 8, padding: '1.4rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)', borderLeft: `4px solid ${k.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{k.label}</div>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '2rem', fontWeight: 700, color: '#0B1F3A' }}>{k.value}</div>
              </div>
              <span style={{ fontSize: '1.8rem' }}>{k.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.2rem', marginBottom: '2rem' }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.05rem', color: '#0B1F3A', marginBottom: '1rem' }}>Leads by Service</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={serviceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#C9A84C" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.05rem', color: '#0B1F3A', marginBottom: '1rem' }}>Pipeline Status</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pipelineData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${value}`}>
                {pipelineData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
              <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 8px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
        <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.05rem', color: '#0B1F3A' }}>Recent Leads</h3>
          <Link to="/admin/leads" style={{ fontSize: '0.8rem', color: '#0B1F3A', fontWeight: 600 }}>View All →</Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th><th>Email</th><th>Service</th><th>Status</th><th>Date</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 ? (
                <tr><td colSpan="6" style={{ textAlign: 'center', color: '#9ca3af', padding: '2rem' }}>No leads yet. <Link to="/">Share your website</Link> to start getting leads.</td></tr>
              ) : recentLeads.map(lead => (
                <tr key={lead._id}>
                  <td style={{ fontWeight: 600 }}>{lead.firstName} {lead.lastName}</td>
                  <td style={{ color: '#6b7280' }}>{lead.email}</td>
                  <td style={{ color: '#6b7280', fontSize: '0.82rem' }}>{lead.service || '—'}</td>
                  <td><span className={`badge ${statusColor(lead.status)}`}>{lead.status}</span></td>
                  <td style={{ color: '#9ca3af', fontSize: '0.82rem' }}>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td><Link to={`/admin/leads/${lead._id}`} style={{ color: '#0B1F3A', fontWeight: 600, fontSize: '0.82rem' }}>View →</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
