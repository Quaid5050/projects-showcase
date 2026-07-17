import { useEffect, useState } from 'react';
import { Trash2, Mail, Phone, X } from 'lucide-react';
import api from '../../utils/api';
import AdminLayout from './AdminLayout';

const statuses = ['All', 'Unread', 'Read', 'Replied'];
const badgeClass = s => ({ 'Unread': 'badge-unread', 'Read': 'badge-read', 'Replied': 'badge-replied' }[s] || 'badge-read');

export default function AdminMessages() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setLoading(true);
    const res = await api.get('/contacts', { params: { status: filter } });
    setContacts(res.data); setLoading(false);
  };

  useEffect(() => { load(); }, [filter]);

  const open = async (contact) => {
    setSelected(contact);
    if (contact.status === 'Unread') {
      const res = await api.put(`/contacts/${contact._id}`, { status: 'Read' });
      setContacts(cs => cs.map(c => c._id === contact._id ? { ...c, status: 'Read' } : c));
      setSelected(res.data);
    }
  };

  const updateStatus = async (id, status) => {
    const res = await api.put(`/contacts/${id}`, { status });
    setSelected(res.data);
    setContacts(cs => cs.map(c => c._id === id ? { ...c, status } : c));
  };

  const del = async (id) => {
    if (!confirm('Delete this message?')) return;
    await api.delete(`/contacts/${id}`);
    setContacts(cs => cs.filter(c => c._id !== id));
    setSelected(null);
  };

  return (
    <AdminLayout>
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.75rem', color: 'var(--text-dark)' }}>Messages</h1>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-light)' }}>{contacts.length} total messages</p>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              style={{ padding: '0.4rem 1rem', borderRadius: 20, border: `1.5px solid ${filter === s ? 'var(--red)' : 'var(--border)'}`, background: filter === s ? 'var(--red)' : 'white', color: filter === s ? 'white' : 'var(--text-mid)', fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
              {s}
            </button>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: '3rem', textAlign: 'center', fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>Loading...</div>
          ) : contacts.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>No messages found</div>
          ) : contacts.map(c => (
            <div key={c._id} onClick={() => open(c)}
              style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center', cursor: 'pointer', background: c.status === 'Unread' ? '#FFFBEB' : 'white', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
              onMouseLeave={e => e.currentTarget.style.background = c.status === 'Unread' ? '#FFFBEB' : 'white'}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{c.firstName} {c.lastName}</span>
                  <span className={`badge ${badgeClass(c.status)}`}>{c.status}</span>
                </div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: 4 }}>{c.email} {c.phone && `· ${c.phone}`}</div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 500 }}>{c.message}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.75rem', color: 'var(--text-light)' }}>{new Date(c.createdAt).toLocaleDateString('en-CA')}</div>
                <button onClick={e => { e.stopPropagation(); del(c._id); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', padding: 4 }}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Modal */}
      {selected && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', borderRadius: 14, width: '100%', maxWidth: 560, boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.2rem', color: 'var(--text-dark)' }}>{selected.firstName} {selected.lastName}</h3>
                <span className={`badge ${badgeClass(selected.status)}`}>{selected.status}</span>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)' }}>
                  <Mail size={14} color="var(--red)" /> {selected.email}
                </div>
                {selected.phone && <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)' }}>
                  <Phone size={14} color="var(--red)" /> {selected.phone}
                </div>}
              </div>
              <div style={{ background: 'var(--cream)', borderRadius: 8, padding: '1.25rem', marginBottom: '1.25rem' }}>
                <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.8 }}>{selected.message}</p>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label>Update Status</label>
                <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                  {['Read', 'Replied'].map(s => (
                    <button key={s} onClick={() => updateStatus(selected._id, s)}
                      style={{ padding: '0.35rem 1rem', borderRadius: 20, border: `1.5px solid ${selected.status === s ? 'var(--red)' : 'var(--border)'}`, background: selected.status === s ? 'var(--red)' : 'white', color: selected.status === s ? 'white' : 'var(--text-mid)', fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={`mailto:${selected.email}`} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.75rem' }}>
                  <Mail size={14} /> Reply via Email
                </a>
                {selected.phone && <a href={`tel:${selected.phone}`} className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.75rem' }}>
                  <Phone size={14} /> Call
                </a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
