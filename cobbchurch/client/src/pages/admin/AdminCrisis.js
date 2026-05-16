import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus, FiX, FiAlertTriangle, FiCheck } from 'react-icons/fi';
import api from '../../utils/api';
import './AdminDashboard.css';
import './AdminApplications.css';

const urgencyColors = { critical: 'red', high: 'yellow', medium: 'gray', low: 'green' };

const AdminCrisis = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', urgency: 'medium', type: 'other', location: '', contactInfo: '' });

  const fetchAlerts = async () => {
    try {
      const { data } = await api.get('/admin/crisis');
      setAlerts(data.alerts);
    } catch { toast.error('Failed to load'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchAlerts(); }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await api.post('/crisis', form);
      toast.success('Crisis alert created and churches notified!');
      setShowForm(false);
      setForm({ title: '', description: '', urgency: 'medium', type: 'other', location: '', contactInfo: '' });
      fetchAlerts();
    } catch { toast.error('Failed to create alert'); }
    finally { setFormLoading(false); }
  };

  const handleResolve = async (id) => {
    try {
      await api.put(`/crisis/${id}/resolve`);
      toast.success('Alert resolved');
      fetchAlerts();
    } catch { toast.error('Failed to resolve'); }
  };

  return (
    <div>
      <div className="admin-page-header">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h1>Crisis Alerts</h1>
            <p>Create and manage crisis response alerts for the network.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <FiPlus /> New Alert
          </button>
        </div>
      </div>

      {loading ? <div className="spinner"></div> : (
        <div className="admin-section">
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Urgency</th>
                  <th>Responses</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map(a => (
                  <tr key={a._id}>
                    <td>
                      <p className="table-primary">{a.title}</p>
                      <p className="table-secondary" style={{maxWidth:'250px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{a.description}</p>
                    </td>
                    <td><span className="badge badge-gray">{a.type}</span></td>
                    <td><span className={`badge badge-${urgencyColors[a.urgency]}`}>{a.urgency}</span></td>
                    <td>{a.respondingChurches?.length || 0} churches</td>
                    <td>
                      <span className={`badge ${a.isActive ? 'badge-red' : 'badge-green'}`}>
                        {a.isActive ? 'Active' : 'Resolved'}
                      </span>
                    </td>
                    <td>{new Date(a.createdAt).toLocaleDateString()}</td>
                    <td>
                      {a.isActive && (
                        <button className="btn btn-sm btn-success" onClick={() => handleResolve(a._id)}>
                          <FiCheck /> Resolve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2><FiAlertTriangle style={{color:'#ef4444',marginRight:'8px'}} /> New Crisis Alert</h2>
              <button className="modal-close" onClick={() => setShowForm(false)}><FiX /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="alert alert-warning">This will send an email alert to all approved churches in the network.</div>
                <div className="form-group">
                  <label className="form-label">Title *</label>
                  <input className="form-input" required value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Brief crisis title" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Type</label>
                    <select className="form-select" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                      {['community','family','housing','food','weather','church','prayer','other'].map(t => (
                        <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Urgency</label>
                    <select className="form-select" value={form.urgency} onChange={e => setForm({...form, urgency: e.target.value})}>
                      {['low','medium','high','critical'].map(u => (
                        <option key={u} value={u}>{u.charAt(0).toUpperCase() + u.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Description *</label>
                  <textarea className="form-textarea" required rows={4} value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Describe the crisis and what help is needed..." />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input className="form-input" value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="Area or neighborhood" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Info</label>
                    <input className="form-input" value={form.contactInfo} onChange={e => setForm({...form, contactInfo: e.target.value})} placeholder="Who to contact" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-navy" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-danger" disabled={formLoading}>
                  {formLoading ? 'Sending...' : 'Send Alert to Network'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCrisis;
