import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCalendar } from 'react-icons/fi';
import api from '../../utils/api';
import './AdminDashboard.css';
import './AdminApplications.css';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({
    title: '', description: '', type: 'gathering',
    date: '', endDate: '', location: '', address: '',
    isVirtual: false, virtualLink: '', capacity: '',
    isPublic: false
  });

  const fetch = async () => {
    try {
      const { data } = await api.get('/events');
      setEvents(data.events);
    } catch { toast.error('Failed to load events'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const openAdd = () => {
    setEditing(null);
    setForm({ title:'', description:'', type:'gathering', date:'', endDate:'', location:'', address:'', isVirtual:false, virtualLink:'', capacity:'', isPublic:false });
    setShowForm(true);
  };

  const openEdit = (ev) => {
    setEditing(ev);
    setForm({
      title: ev.title, description: ev.description, type: ev.type,
      date: ev.date ? ev.date.slice(0,16) : '',
      endDate: ev.endDate ? ev.endDate.slice(0,16) : '',
      location: ev.location || '', address: ev.address || '',
      isVirtual: ev.isVirtual, virtualLink: ev.virtualLink || '',
      capacity: ev.capacity || '', isPublic: ev.isPublic
    });
    setShowForm(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const payload = { ...form, capacity: form.capacity ? parseInt(form.capacity) : undefined };
      if (editing) {
        await api.put(`/events/${editing._id}`, payload);
        toast.success('Event updated');
      } else {
        await api.post('/events', payload);
        toast.success('Event created');
      }
      setShowForm(false);
      fetch();
    } catch { toast.error('Failed to save event'); }
    finally { setFormLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      await api.put(`/events/${id}`, { isActive: false });
      toast.success('Event removed');
      fetch();
    } catch { toast.error('Failed to delete'); }
  };

  const types = ['gathering', 'prayer', 'training', 'outreach', 'leadership', 'other'];

  return (
    <div>
      <div className="admin-page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>Events</h1>
            <p>Create and manage pastor gatherings, trainings, and network events.</p>
          </div>
          <button className="btn btn-primary" onClick={openAdd}>
            <FiPlus /> New Event
          </button>
        </div>
      </div>

      {loading ? <div className="spinner"></div> : (
        <div className="admin-section">
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Registered</th>
                  <th>Visibility</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(ev => (
                  <tr key={ev._id}>
                    <td>
                      <p className="table-primary">{ev.title}</p>
                      <p className="table-secondary" style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {ev.description}
                      </p>
                    </td>
                    <td><span className="badge badge-navy">{ev.type}</span></td>
                    <td>
                      <p className="table-primary">
                        {new Date(ev.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                      <p className="table-secondary">
                        {new Date(ev.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </td>
                    <td>
                      {ev.isVirtual ? (
                        <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600 }}>📹 Virtual</span>
                      ) : (
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{ev.location || '—'}</span>
                      )}
                    </td>
                    <td>
                      <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{ev.registrations?.length || 0}</span>
                      {ev.capacity && <span style={{ color: 'var(--gray)', fontSize: '0.8rem' }}> / {ev.capacity}</span>}
                    </td>
                    <td>
                      <span className={`badge ${ev.isPublic ? 'badge-green' : 'badge-gray'}`}>
                        {ev.isPublic ? 'Public' : 'Members Only'}
                      </span>
                    </td>
                    <td>
                      <div className="admin-actions">
                        <button className="btn btn-sm btn-navy" onClick={() => openEdit(ev)}>
                          <FiEdit2 size={13} />
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(ev._id)}>
                          <FiTrash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {events.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', color: 'var(--gray)', padding: '40px' }}>
                      No events yet. Create your first event!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-box" style={{ maxWidth: '700px' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2><FiCalendar style={{ marginRight: '8px', color: 'var(--gold)' }} />
                {editing ? 'Edit Event' : 'Create New Event'}
              </h2>
              <button className="modal-close" onClick={() => setShowForm(false)}><FiX /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Event Title *</label>
                  <input className="form-input" required value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    placeholder="Monthly Pastor Gathering" />
                </div>
                <div className="form-group">
                  <label className="form-label">Description *</label>
                  <textarea className="form-textarea" required rows={3} value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe the event..." />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Event Type</label>
                    <select className="form-select" value={form.type}
                      onChange={e => setForm({ ...form, type: e.target.value })}>
                      {types.map(t => (
                        <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Capacity (optional)</label>
                    <input type="number" className="form-input" value={form.capacity}
                      onChange={e => setForm({ ...form, capacity: e.target.value })}
                      placeholder="Max attendees" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Start Date & Time *</label>
                    <input type="datetime-local" className="form-input" required value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">End Date & Time</label>
                    <input type="datetime-local" className="form-input" value={form.endDate}
                      onChange={e => setForm({ ...form, endDate: e.target.value })} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                    <input type="checkbox" checked={form.isVirtual}
                      onChange={e => setForm({ ...form, isVirtual: e.target.checked })} />
                    Virtual Event
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                    <input type="checkbox" checked={form.isPublic}
                      onChange={e => setForm({ ...form, isPublic: e.target.checked })} />
                    Public (visible without login)
                  </label>
                </div>

                {form.isVirtual ? (
                  <div className="form-group">
                    <label className="form-label">Virtual Meeting Link</label>
                    <input className="form-input" value={form.virtualLink}
                      onChange={e => setForm({ ...form, virtualLink: e.target.value })}
                      placeholder="https://zoom.us/j/..." />
                  </div>
                ) : (
                  <>
                    <div className="form-group">
                      <label className="form-label">Location Name</label>
                      <input className="form-input" value={form.location}
                        onChange={e => setForm({ ...form, location: e.target.value })}
                        placeholder="Grace Community Church Fellowship Hall" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Address</label>
                      <input className="form-input" value={form.address}
                        onChange={e => setForm({ ...form, address: e.target.value })}
                        placeholder="123 Main St, Marietta, GA 30060" />
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-navy" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={formLoading}>
                  {formLoading ? 'Saving...' : (editing ? 'Update Event' : 'Create Event')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
