import { useEffect, useState } from 'react';
import { Search, Eye, Trash2, X, CheckCircle, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import api from '../../utils/api';
import AdminLayout from './AdminLayout';

const statuses = ['All', 'New', 'Contacted', 'Assessment Scheduled', 'Active', 'Closed'];
const badgeClass = s => ({ 'New': 'badge-new', 'Contacted': 'badge-contacted', 'Assessment Scheduled': 'badge-scheduled', 'Active': 'badge-active', 'Closed': 'badge-closed' }[s] || 'badge-new');

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get('/bookings', { params: { status: filter, search } });
      setBookings(res.data.bookings); setTotal(res.data.total);
    } catch { } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, [filter, search]);

  const openDetail = async (id) => {
    const res = await api.get(`/bookings/${id}`);
    setSelected(res.data); setModalOpen(true);
  };

  const updateStatus = async (id, status) => {
    setUpdatingStatus(true);
    const res = await api.put(`/bookings/${id}`, { status });
    setSelected(res.data);
    setBookings(bs => bs.map(b => b._id === id ? { ...b, status } : b));
    setUpdatingStatus(false);
  };

  const deleteBooking = async (id) => {
    if (!confirm('Delete this booking?')) return;
    await api.delete(`/bookings/${id}`);
    setBookings(bs => bs.filter(b => b._id !== id));
    setModalOpen(false);
  };

  return (
    <AdminLayout>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.75rem', color: 'var(--text-dark)' }}>Bookings</h1>
            <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-light)' }}>{total} total bookings</p>
          </div>
          {/* Search */}
          <div style={{ position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, phone..." style={{ paddingLeft: '2.25rem', width: 260, fontSize: '0.875rem' }} />
          </div>
        </div>

        {/* Status tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              style={{ padding: '0.4rem 1rem', borderRadius: 20, border: `1.5px solid ${filter === s ? 'var(--red)' : 'var(--border)'}`, background: filter === s ? 'var(--red)' : 'white', color: filter === s ? 'white' : 'var(--text-mid)', fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
              {s}
            </button>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F9FAFB' }}>
                  {['Name', 'Contact', 'Service', 'Date', 'Status', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '0.875rem 1.25rem', textAlign: 'left', fontFamily: 'Poppins,sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={6} style={{ padding: '3rem', textAlign: 'center', fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>Loading...</td></tr>
                ) : bookings.length === 0 ? (
                  <tr><td colSpan={6} style={{ padding: '3rem', textAlign: 'center', fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>No bookings found</td></tr>
                ) : bookings.map(b => (
                  <tr key={b._id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FAFAFA'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                    <td style={{ padding: '0.875rem 1.25rem' }}>
                      <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)' }}>{b.firstName} {b.lastName}</div>
                      {b.clientName && <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.75rem', color: 'var(--text-light)' }}>Client: {b.clientName}</div>}
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem' }}>
                      <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'var(--text-mid)' }}>{b.phone}</div>
                      <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.75rem', color: 'var(--text-light)' }}>{b.email}</div>
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'var(--text-mid)' }}>{b.serviceType || '-'}</td>
                    <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'var(--text-light)' }}>{new Date(b.createdAt).toLocaleDateString('en-CA')}</td>
                    <td style={{ padding: '0.875rem 1.25rem' }}><span className={`badge ${badgeClass(b.status)}`}>{b.status}</span></td>
                    <td style={{ padding: '0.875rem 1.25rem' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => openDetail(b._id)} style={{ background: '#EFF6FF', border: 'none', borderRadius: 6, padding: '0.4rem 0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, color: '#1D4ED8', fontSize: '0.78rem', fontFamily: 'Poppins,sans-serif', fontWeight: 700 }}>
                          <Eye size={13} /> View
                        </button>
                        <button onClick={() => deleteBooking(b._id)} style={{ background: '#FEF2F2', border: 'none', borderRadius: 6, padding: '0.4rem 0.65rem', cursor: 'pointer', color: '#DC2626' }}>
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {modalOpen && selected && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', borderRadius: 14, width: '100%', maxWidth: 680, maxHeight: '90vh', overflow: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
              <div>
                <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.25rem', color: 'var(--text-dark)' }}>{selected.firstName} {selected.lastName}</h3>
                <span className={`badge ${badgeClass(selected.status)}`}>{selected.status}</span>
              </div>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><X size={20} /></button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              {/* Status update */}
              <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#F9FAFB', borderRadius: 8 }}>
                <label style={{ marginBottom: 8 }}>Update Status</label>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {statuses.filter(s => s !== 'All').map(s => (
                    <button key={s} disabled={updatingStatus} onClick={() => updateStatus(selected._id, s)}
                      style={{ padding: '0.35rem 0.85rem', borderRadius: 20, border: `1.5px solid ${selected.status === s ? 'var(--red)' : 'var(--border)'}`, background: selected.status === s ? 'var(--red)' : 'white', color: selected.status === s ? 'white' : 'var(--text-mid)', fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.75rem' }}>Contact Info</h4>
                  {[
                    { icon: <Phone size={13} />, val: selected.phone },
                    { icon: <Mail size={13} />, val: selected.email },
                    { icon: <MapPin size={13} />, val: [selected.address, selected.city, selected.postalCode].filter(Boolean).join(', ') },
                    { icon: <Calendar size={13} />, val: selected.preferredDate ? `${selected.preferredDate} — ${selected.preferredTime || ''}` : null },
                  ].filter(i => i.val).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: '0.5rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)' }}>
                      <span style={{ color: 'var(--red)', marginTop: 2, flexShrink: 0 }}>{item.icon}</span> {item.val}
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.75rem' }}>Client Info</h4>
                  {[['Client Name', selected.clientName], ['Age', selected.clientAge], ['Relationship', selected.clientRelationship], ['Service', selected.serviceType]].filter(([,v]) => v).map(([k, v]) => (
                    <div key={k} style={{ marginBottom: '0.5rem', fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-light)' }}>{k}: </span><span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selected.clientInfo && (
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#FEF3C7', borderRadius: 8 }}>
                  <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#92400E', fontWeight: 700, marginBottom: '0.5rem' }}>Client Condition & Notes</h4>
                  <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>{selected.clientInfo}</p>
                </div>
              )}

              {/* Care Plan */}
              {selected.carePlanServices?.filter(s => s.required).length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.75rem' }}>Care Plan Services Required</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                    {selected.carePlanServices.filter(s => s.required).map(s => (
                      <div key={s.service} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.4rem 0.6rem', background: '#FEF0F0', borderRadius: 6 }}>
                        <CheckCircle size={13} color="var(--red)" />
                        <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'var(--text-dark)' }}>{s.service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 10, paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <a href={`tel:${selected.phone}`} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.75rem' }}>
                  <Phone size={14} /> Call Client
                </a>
                <a href={`mailto:${selected.email}`} className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.75rem' }}>
                  <Mail size={14} /> Send Email
                </a>
                <button onClick={() => deleteBooking(selected._id)} style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', color: '#DC2626', borderRadius: 4, padding: '0.75rem', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
