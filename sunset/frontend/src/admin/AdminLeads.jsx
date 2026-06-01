import { useEffect, useState } from 'react';
import api from '../api';
import toast from 'react-hot-toast';

const statusColors = {
  new: ['#E6F1FB','#185FA5'],
  contacted: ['#FAEEDA','#633806'],
  booked: ['#EAF3DE','#27500A'],
  closed: ['#F1EFE8','#444441'],
};

const StatusBadge = ({ status }) => {
  const [bg, color] = statusColors[status] || ['#F1EFE8','#444'];
  return <span style={{ background: bg, color, fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 20, textTransform: 'capitalize' }}>{status}</span>;
};

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const [updating, setUpdating] = useState(false);

  const fetchLeads = async () => {
    try {
      const params = {};
      if (filter !== 'all') params.status = filter;
      if (search) params.search = search;
      const res = await api.get('/api/leads', { params });
      setLeads(res.data);
    } catch { toast.error('Failed to load leads'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchLeads(); }, [filter, search]);

  const updateStatus = async (id, status) => {
    setUpdating(true);
    try {
      await api.patch(`/api/leads/${id}`, { status });
      toast.success('Status updated');
      fetchLeads();
      if (selected?._id === id) setSelected({ ...selected, status });
    } catch { toast.error('Update failed'); }
    finally { setUpdating(false); }
  };

  const updateNotes = async (id, notes) => {
    try {
      await api.patch(`/api/leads/${id}`, { notes });
      toast.success('Notes saved');
    } catch { toast.error('Save failed'); }
  };

  const deleteLead = async (id) => {
    if (!window.confirm('Delete this lead?')) return;
    try {
      await api.delete(`/api/leads/${id}`);
      toast.success('Lead deleted');
      setSelected(null);
      fetchLeads();
    } catch { toast.error('Delete failed'); }
  };

  const inputStyle = { padding: '9px 14px', border: '1px solid #E0D8CE', fontSize: 13, fontFamily: "'Jost',sans-serif", outline: 'none', background: '#FFFFFF' };

  return (
    <div style={{ display: 'flex', gap: 24, height: 'calc(100vh - 130px)' }}>
      {/* Left: List */}
      <div style={{ flex: '0 0 520px', display: 'flex', flexDirection: 'column', background: '#FFFFFF', border: '1px solid #EDE8E0', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #EDE8E0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: '#1A2744', fontWeight: 400 }}>Leads & Inquiries</h2>
            <span style={{ background: '#1A2744', color: '#FFFFFF', fontSize: 11, padding: '3px 10px', borderRadius: 20 }}>{leads.length} total</span>
          </div>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or email..." style={{ ...inputStyle, width: '100%', marginBottom: 12 }} />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['all','new','contacted','booked','closed'].map(s => (
              <button key={s} onClick={() => setFilter(s)} style={{
                padding: '5px 12px', fontSize: 11, letterSpacing: '0.05em', textTransform: 'capitalize',
                background: filter === s ? '#1A2744' : 'transparent',
                color: filter === s ? '#FFFFFF' : '#999',
                border: filter === s ? '1px solid #1A2744' : '1px solid #DDD',
                cursor: 'pointer', fontFamily: "'Jost',sans-serif",
              }}>{s}</button>
            ))}
          </div>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {loading
            ? <div style={{ padding: 40, textAlign: 'center', color: '#C9933A' }}>Loading...</div>
            : leads.length === 0
            ? <div style={{ padding: 40, textAlign: 'center', color: '#999', fontSize: 14 }}>No leads found</div>
            : leads.map(lead => (
              <div key={lead._id} onClick={() => setSelected(lead)} style={{
                padding: '16px 24px', borderBottom: '1px solid #F5F0E8', cursor: 'pointer',
                background: selected?._id === lead._id ? '#FDF7EE' : '#FFFFFF',
                borderLeft: selected?._id === lead._id ? '3px solid #C9933A' : '3px solid transparent',
                transition: 'all 0.2s',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#1A2744' }}>{lead.name}</p>
                    <p style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{lead.email}</p>
                    {lead.checkin && <p style={{ fontSize: 11, color: '#C9933A', marginTop: 4 }}>
                      {new Date(lead.checkin).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})} · {lead.guests} guest{lead.guests > 1 ? 's' : ''}
                    </p>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <StatusBadge status={lead.status} />
                    <span style={{ fontSize: 11, color: '#BBB' }}>{new Date(lead.createdAt).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Right: Detail */}
      <div style={{ flex: 1, background: '#FFFFFF', border: '1px solid #EDE8E0', overflow: 'auto' }}>
        {!selected
          ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column', gap: 12, color: '#CCC' }}>
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <p style={{ fontSize: 14 }}>Select a lead to view details</p>
            </div>
          : <LeadDetail lead={selected} onStatusChange={updateStatus} onNotesChange={updateNotes} onDelete={deleteLead} updating={updating} />
        }
      </div>
    </div>
  );
}

function LeadDetail({ lead, onStatusChange, onNotesChange, onDelete, updating }) {
  const [notes, setNotes] = useState(lead.notes || '');
  useEffect(() => { setNotes(lead.notes || ''); }, [lead]);

  return (
    <div style={{ padding: '28px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: '#1A2744', fontWeight: 400 }}>{lead.name}</h2>
          <p style={{ fontSize: 13, color: '#999', marginTop: 4 }}>Received {new Date(lead.createdAt).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</p>
        </div>
        <button onClick={() => onDelete(lead._id)} style={{ background: 'none', border: '1px solid #FFCCCC', color: '#E24B4A', padding: '6px 14px', fontSize: 11, cursor: 'pointer', fontFamily: "'Jost',sans-serif" }}>Delete</button>
      </div>

      {/* Info Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#F5F0E8', marginBottom: 28 }}>
        {[
          ['Email', lead.email],
          ['Phone', lead.phone || '—'],
          ['Guests', lead.guests],
          ['Package', lead.package || '—'],
          ['Check-in', lead.checkin ? new Date(lead.checkin).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}) : '—'],
          ['Check-out', lead.checkout ? new Date(lead.checkout).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}) : '—'],
        ].map(([k,v]) => (
          <div key={k} style={{ background: '#FFFFFF', padding: '14px 18px' }}>
            <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 4 }}>{k}</p>
            <p style={{ fontSize: 14, color: '#1A2744' }}>{v}</p>
          </div>
        ))}
      </div>

      {/* Message */}
      {lead.message && (
        <div style={{ background: '#FDF7EE', border: '1px solid rgba(201,147,58,0.2)', padding: '16px 20px', marginBottom: 24 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 8 }}>Message</p>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{lead.message}</p>
        </div>
      )}

      {/* Status Update */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>Update Status</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['new','contacted','booked','closed'].map(s => {
            const [bg, color] = s === lead.status ? ['#1A2744','#FFFFFF'] : ['#FFFFFF','#999'];
            return (
              <button key={s} onClick={() => onStatusChange(lead._id, s)} disabled={updating} style={{
                padding: '8px 18px', fontSize: 12, textTransform: 'capitalize', cursor: 'pointer',
                background: bg, color, border: s === lead.status ? '1px solid #1A2744' : '1px solid #DDD',
                fontFamily: "'Jost',sans-serif", transition: 'all 0.2s',
              }}>{s}</button>
            );
          })}
        </div>
      </div>

      {/* Notes */}
      <div>
        <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>Internal Notes</p>
        <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={4} placeholder="Add notes about this lead..."
          style={{ width: '100%', padding: '12px 14px', border: '1px solid #E0D8CE', fontSize: 13, fontFamily: "'Jost',sans-serif", outline: 'none', resize: 'vertical' }}
        />
        <button onClick={() => onNotesChange(lead._id, notes)} style={{ marginTop: 8, background: '#C9933A', border: 'none', color: '#FFFFFF', padding: '8px 20px', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'Jost',sans-serif" }}>
          Save Notes
        </button>
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
        <a href={`mailto:${lead.email}`} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#1A2744', color: '#FFFFFF', padding: '9px 18px', fontSize: 12, fontFamily: "'Jost',sans-serif", textDecoration: 'none' }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Email Guest
        </a>
        {lead.phone && <a href={`tel:${lead.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#FFFFFF', color: '#1A2744', border: '1px solid #DDD', padding: '9px 18px', fontSize: 12, fontFamily: "'Jost',sans-serif", textDecoration: 'none' }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Guest
        </a>}
      </div>
    </div>
  );
}
