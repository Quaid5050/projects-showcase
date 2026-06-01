import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const StatCard = ({ label, value, sub, color = '#C9933A', icon }) => (
  <div style={{ background: '#FFFFFF', border: '1px solid #EDE8E0', padding: '24px 28px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: color }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>{label}</p>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 500, color: '#1A2744', lineHeight: 1 }}>{value}</p>
        {sub && <p style={{ fontSize: 12, color: '#C9933A', marginTop: 6 }}>{sub}</p>}
      </div>
      <div style={{ color, opacity: 0.25 }}>{icon}</div>
    </div>
  </div>
);

const statusColors = { new: ['#E6F1FB','#185FA5'], contacted: ['#FAEEDA','#633806'], booked: ['#EAF3DE','#27500A'], closed: ['#F1EFE8','#444441'] };
const StatusBadge = ({ status }) => {
  const [bg, color] = statusColors[status] || ['#F1EFE8','#444'];
  return <span style={{ background: bg, color, fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 20, fontFamily: "'Jost',sans-serif", textTransform: 'capitalize' }}>{status}</span>;
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, booked: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/api/leads'),
      api.get('/api/bookings'),
      api.get('/api/leads/stats/summary'),
    ]).then(([l, b, s]) => {
      setLeads(l.data.slice(0, 5));
      setBookings(b.data.slice(0, 5));
      setStats(s.data);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, color: '#C9933A', fontFamily: "'Cormorant Garamond',serif", fontSize: 20 }}>Loading dashboard...</div>;

  const statCards = [
    { label: 'Total Leads', value: stats.total, sub: `${stats.new} new this period`, color: '#C9933A', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { label: 'New Inquiries', value: stats.new, sub: 'Awaiting response', color: '#185FA5', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
    { label: 'Bookings', value: stats.booked, sub: 'Confirmed stays', color: '#1D9E75', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
    { label: 'Contacted', value: stats.contacted, sub: 'In conversation', color: '#BA7517', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, color: '#1A2744', fontWeight: 400 }}>Dashboard</h1>
        <p style={{ fontSize: 13, color: '#999', marginTop: 4 }}>Welcome to Sunset Retreat JA admin panel</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16, marginBottom: 40 }}>
        {statCards.map(c => <StatCard key={c.label} {...c} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px,1fr))', gap: 24 }}>
        {/* Recent Leads */}
        <div style={{ background: '#FFFFFF', border: '1px solid #EDE8E0' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #EDE8E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: '#1A2744', fontWeight: 400 }}>Recent Leads</h3>
            <Link to="/admin/leads" style={{ fontSize: 12, color: '#C9933A', display: 'flex', alignItems: 'center', gap: 4 }}>
              View all <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          {leads.length === 0
            ? <div style={{ padding: '40px 24px', textAlign: 'center', color: '#999', fontSize: 14 }}>No leads yet. They will appear here when visitors fill the inquiry form.</div>
            : leads.map(lead => (
              <div key={lead._id} style={{ padding: '14px 24px', borderBottom: '1px solid #F5F0E8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 500, color: '#1A2744' }}>{lead.name}</p>
                  <p style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{lead.email} · {lead.guests} guest{lead.guests > 1 ? 's' : ''}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <StatusBadge status={lead.status} />
                  <Link to="/admin/leads" style={{ color: '#C9933A', fontSize: 12 }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>

        {/* Upcoming Bookings */}
        <div style={{ background: '#FFFFFF', border: '1px solid #EDE8E0' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #EDE8E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: '#1A2744', fontWeight: 400 }}>Upcoming Bookings</h3>
            <Link to="/admin/bookings" style={{ fontSize: 12, color: '#C9933A', display: 'flex', alignItems: 'center', gap: 4 }}>
              View all <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          {bookings.length === 0
            ? <div style={{ padding: '40px 24px', textAlign: 'center', color: '#999', fontSize: 14 }}>No bookings yet.</div>
            : bookings.map(b => (
              <div key={b._id} style={{ padding: '14px 24px', borderBottom: '1px solid #F5F0E8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#1A2744' }}>{b.name}</p>
                    <p style={{ fontSize: 12, color: '#999', marginTop: 2 }}>
                      {b.checkin ? new Date(b.checkin).toLocaleDateString('en-GB',{day:'numeric',month:'short'}) : '—'} → {b.checkout ? new Date(b.checkout).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}) : '—'}
                    </p>
                  </div>
                  <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 20, background: b.status === 'confirmed' ? '#EAF3DE' : '#FAEEDA', color: b.status === 'confirmed' ? '#27500A' : '#633806', textTransform: 'capitalize' }}>{b.status}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: 24, background: '#FFFFFF', border: '1px solid #EDE8E0', padding: '24px 28px' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: '#1A2744', marginBottom: 16, fontWeight: 400 }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            { to: '/admin/leads', label: 'View All Leads', color: '#1A2744' },
            { to: '/admin/bookings', label: 'Manage Bookings', color: '#C9933A' },
            { to: '/admin/packages', label: 'Edit Packages', color: '#1D5B7A' },
          ].map(a => (
            <Link key={a.to} to={a.to} style={{ background: a.color, color: '#FFFFFF', padding: '10px 22px', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Jost',sans-serif", display: 'flex', alignItems: 'center', gap: 6 }}>
              {a.label}
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
