import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import { toast } from 'react-toastify';
import { AdminLayout } from './AdminDashboard';

const STATUSES = ['New Lead','Contacted','In Review','Documents Requested','Submitted','Approved','Rejected','Closed'];

const statusColor = (s) => ({
  'New Lead': 'badge-new', 'Contacted': 'badge-contact', 'In Review': 'badge-review',
  'Documents Requested': 'badge-docs', 'Submitted': 'badge-submit',
  'Approved': 'badge-approved', 'Rejected': 'badge-rejected', 'Closed': 'badge-closed',
}[s] || 'badge-closed');

export default function AdminLeadDetail() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/leads/${id}`);
        setLead(data);
        setEditFields({ status: data.status, assignedTo: data.assignedTo || '', followUpDate: data.followUpDate ? data.followUpDate.split('T')[0] : '' });
      } catch {
        toast.error('Failed to load lead');
      }
      setLoading(false);
    };
    fetch();
  }, [id]);

  const saveChanges = async () => {
    setSaving(true);
    try {
      const { data } = await api.put(`/leads/${id}`, editFields);
      setLead(data);
      toast.success('Lead updated successfully');
    } catch {
      toast.error('Failed to save changes');
    }
    setSaving(false);
  };

  const addNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    try {
      const { data } = await api.post(`/leads/${id}/notes`, { text: newNote });
      setLead(data);
      setNewNote('');
      toast.success('Note added');
    } catch {
      toast.error('Failed to add note');
    }
  };

  if (loading) return <AdminLayout><div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>Loading...</div></AdminLayout>;
  if (!lead) return <AdminLayout><div style={{ textAlign: 'center', padding: '4rem' }}>Lead not found. <Link to="/admin/leads">← Back</Link></div></AdminLayout>;

  return (
    <AdminLayout>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to="/admin/leads" style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: 4 }}>← All Leads</Link>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.6rem', color: '#0B1F3A' }}>{lead.firstName} {lead.lastName}</h2>
        </div>
        <span className={`badge ${statusColor(lead.status)}`} style={{ fontSize: '0.875rem', padding: '6px 14px' }}>{lead.status}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1.5rem', alignItems: 'start' }}>

        {/* Left: Lead Info + CRM Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

          {/* Contact Info Card */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '1.2rem' }}>Contact Information</h3>
            {[
              ['Full Name', `${lead.firstName} ${lead.lastName}`],
              ['Email', lead.email],
              ['Phone', lead.phone || '—'],
              ['Province', lead.province || '—'],
              ['Service', lead.service || '—'],
              ['Source', lead.source || '—'],
              ['Submitted', new Date(lead.createdAt).toLocaleString()],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.875rem' }}>
                <span style={{ color: '#9ca3af', fontWeight: 500 }}>{l}</span>
                <span style={{ color: '#0B1F3A', fontWeight: 500, textAlign: 'right', maxWidth: '60%', wordBreak: 'break-word' }}>{v}</span>
              </div>
            ))}
            {lead.message && (
              <div style={{ marginTop: '1rem', padding: '10px 12px', background: '#f8fafc', borderRadius: 4, fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: '#374151', display: 'block', marginBottom: 4 }}>Message:</span>
                {lead.message}
              </div>
            )}
          </div>

          {/* CRM Controls */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '1.2rem' }}>Case Management</h3>
            <div className="form-group">
              <label>Pipeline Status</label>
              <select value={editFields.status} onChange={e => setEditFields({...editFields, status: e.target.value})}>
                {STATUSES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Assigned To</label>
              <input value={editFields.assignedTo} onChange={e => setEditFields({...editFields, assignedTo: e.target.value})} placeholder="Staff member name" />
            </div>
            <div className="form-group">
              <label>Follow-up Date</label>
              <input type="date" value={editFields.followUpDate} onChange={e => setEditFields({...editFields, followUpDate: e.target.value})} />
            </div>
            <button onClick={saveChanges} className="btn-navy" style={{ width: '100%' }} disabled={saving}>
              {saving ? 'Saving...' : '💾 Save Changes'}
            </button>
          </div>

          {/* Quick Actions */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '1rem' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <a href={`mailto:${lead.email}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: '#f8fafc', borderRadius: 6, fontSize: '0.875rem', color: '#374151', fontWeight: 500, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                ✉️ Send Email
              </a>
              {lead.phone && (
                <a href={`tel:${lead.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: '#f8fafc', borderRadius: 6, fontSize: '0.875rem', color: '#374151', fontWeight: 500, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                  📞 Call {lead.phone}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Notes/Activity */}
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 8px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.1rem', color: '#0B1F3A' }}>Case Notes & Activity</h3>
          </div>

          {/* Add Note Form */}
          <form onSubmit={addNote} style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid #f1f5f9', background: '#fafbfc' }}>
            <div className="form-group" style={{ marginBottom: '0.7rem' }}>
              <label>Add Note</label>
              <textarea value={newNote} onChange={e => setNewNote(e.target.value)} placeholder="Add a case note, update, or action item..." rows="3" style={{ resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ fontSize: '0.85rem', padding: '8px 20px' }}>Add Note</button>
          </form>

          {/* Notes List */}
          <div style={{ padding: '1rem 1.5rem', maxHeight: 500, overflowY: 'auto' }}>
            {lead.notes?.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', textAlign: 'center', padding: '2rem 0' }}>No notes yet. Add the first note above.</p>
            ) : [...(lead.notes || [])].reverse().map((note, i) => (
              <div key={i} style={{ marginBottom: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: 6, borderLeft: '3px solid #C9A84C' }}>
                <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7, marginBottom: 6 }}>{note.text}</p>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                  {note.addedBy && <span style={{ fontWeight: 600 }}>{note.addedBy} · </span>}
                  {new Date(note.createdAt).toLocaleString()}
                </div>
              </div>
            ))}

            {/* Activity Log */}
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.8rem' }}>Activity Log</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: '0.82rem', color: '#6b7280' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', flexShrink: 0 }}></div>
                Lead created · {new Date(lead.createdAt).toLocaleString()}
              </div>
              {lead.updatedAt !== lead.createdAt && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#6b7280' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }}></div>
                  Last updated · {new Date(lead.updatedAt).toLocaleString()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
