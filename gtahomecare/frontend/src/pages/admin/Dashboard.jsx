import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, Users, AlertCircle, ArrowRight, Clock } from 'lucide-react';
import api from '../../utils/api';
import AdminLayout from './AdminLayout';

const statusBadge = (status) => {
  const map = { 'New': 'badge-new', 'Contacted': 'badge-contacted', 'Assessment Scheduled': 'badge-scheduled', 'Active': 'badge-active', 'Closed': 'badge-closed' };
  return <span className={`badge ${map[status] || 'badge-new'}`}>{status}</span>;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/admin/stats').then(r => { setStats(r.data); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  if (loading) return <AdminLayout><div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>Loading dashboard...</div></AdminLayout>;

  return (
    <AdminLayout>
      <div>
        <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Dashboard</h1>
        <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '2rem' }}>Welcome back. Here's what's happening today.</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Bookings', value: stats?.totalBookings || 0, icon: <Calendar size={20} color="var(--red)" />, bg: '#FEF0F0' },
            { label: 'New Bookings', value: stats?.newBookings || 0, icon: <AlertCircle size={20} color="#92400E" />, bg: '#FEF3C7' },
            { label: 'Active Clients', value: stats?.activeClients || 0, icon: <Users size={20} color="#065F46" />, bg: '#D1FAE5' },
            { label: 'Unread Messages', value: stats?.unreadContacts || 0, icon: <MessageSquare size={20} color="#1E40AF" />, bg: '#DBEAFE' },
          ].map(stat => (
            <div key={stat.label} style={{ background: 'white', borderRadius: 10, padding: '1.25rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'var(--text-light)', marginTop: 3 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>Recent Bookings</h3>
            <Link to="/admin/bookings" style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'var(--red)', textDecoration: 'none', fontWeight: 700 }}>
              View All <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F9FAFB' }}>
                  {['Client', 'Phone', 'Service', 'Date', 'Status'].map(h => (
                    <th key={h} style={{ padding: '0.75rem 1.25rem', textAlign: 'left', fontFamily: 'Poppins,sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats?.recentBookings?.length > 0 ? stats.recentBookings.map(b => (
                  <tr key={b._id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                      {b.firstName} {b.lastName}
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-mid)' }}>{b.phone}</td>
                    <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-mid)' }}>{b.serviceType || '-'}</td>
                    <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Clock size={12} /> {new Date(b.createdAt).toLocaleDateString('en-CA')}
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem' }}>{statusBadge(b.status)}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)', fontSize: '0.875rem' }}>No bookings yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
