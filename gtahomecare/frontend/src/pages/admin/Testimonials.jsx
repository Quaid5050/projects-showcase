import { useEffect, useState } from 'react';
import { Star, Check, Trash2 } from 'lucide-react';
import api from '../../utils/api';
import AdminLayout from './AdminLayout';

const statuses = ['All', 'Pending', 'Approved'];

export default function AdminTestimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get('/testimonials/all', { params: { status: filter } });
      setReviews(res.data);
    } catch { } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, [filter]);

  const approve = async (id) => {
    const res = await api.put(`/testimonials/${id}`, { status: 'Approved' });
    setReviews(rs => rs.map(r => r._id === id ? res.data : r));
  };

  const remove = async (id) => {
    if (!confirm('Delete this review?')) return;
    await api.delete(`/testimonials/${id}`);
    setReviews(rs => rs.filter(r => r._id !== id));
  };

  return (
    <AdminLayout>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.5rem', color: 'var(--text-dark)' }}>Testimonials</h1>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-light)' }}>Approve reviews to publish them on the public Testimonials page.</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              style={{ padding: '0.5rem 1rem', borderRadius: 6, border: '1px solid var(--border)', background: filter === s ? 'var(--red)' : 'white', color: filter === s ? 'white' : 'var(--text-mid)', fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>Loading...</p>
      ) : reviews.length === 0 ? (
        <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>No reviews found.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.25rem' }}>
          {reviews.map(r => (
            <div key={r._id} style={{ background: 'white', borderRadius: 10, padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{r.name}</div>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.75rem', color: 'var(--text-light)' }}>{r.location}</div>
                </div>
                <span className={r.status === 'Approved' ? 'badge badge-active' : 'badge badge-new'}>{r.status}</span>
              </div>
              <div style={{ display: 'flex', gap: 2, marginBottom: '0.75rem' }}>
                {[...Array(r.rating || 5)].map((_, i) => <Star key={i} size={13} fill="var(--gold)" color="var(--gold)" />)}
              </div>
              <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', flex: 1, marginBottom: '1.25rem' }}>"{r.text}"</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {r.status !== 'Approved' && (
                  <button onClick={() => approve(r._id)} className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.78rem' }}>
                    <Check size={14} /> Approve
                  </button>
                )}
                <button onClick={() => remove(r._id)} style={{ flex: r.status === 'Approved' ? 1 : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '0.6rem 1rem', borderRadius: 4, border: '1px solid var(--red)', background: 'white', color: 'var(--red)', cursor: 'pointer', fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', fontWeight: 700 }}>
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
