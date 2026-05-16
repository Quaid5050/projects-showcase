import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiCheck, FiX, FiEye, FiRefreshCw } from 'react-icons/fi';
import api from '../../utils/api';
import './AdminDashboard.css';
import './AdminApplications.css';

const AdminApplications = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const fetchApps = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/admin/applications');
      setApps(data.applications);
    } catch { toast.error('Failed to load applications'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchApps(); }, []);

  const handleApprove = async (id) => {
    setActionLoading(true);
    try {
      await api.put(`/admin/churches/${id}/approve`);
      toast.success('Application approved! Email sent to pastor.');
      setSelected(null);
      fetchApps();
    } catch { toast.error('Failed to approve'); }
    finally { setActionLoading(false); }
  };

  const handleReject = async (id) => {
    setActionLoading(true);
    try {
      await api.put(`/admin/churches/${id}/reject`, { reason: rejectReason });
      toast.success('Application rejected. Email sent to applicant.');
      setSelected(null);
      setRejectReason('');
      fetchApps();
    } catch { toast.error('Failed to reject'); }
    finally { setActionLoading(false); }
  };

  return (
    <div>
      <div className="admin-page-header">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h1>Applications <span className="badge badge-yellow">{apps.length}</span></h1>
            <p>Review and manage pending church applications.</p>
          </div>
          <button className="btn btn-sm btn-navy" onClick={fetchApps}>
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>

      {loading ? <div className="spinner"></div> : apps.length === 0 ? (
        <div className="admin-section text-center" style={{padding:'60px'}}>
          <p style={{color:'var(--gray)',fontSize:'1rem'}}>No pending applications. All caught up! ✓</p>
        </div>
      ) : (
        <div className="admin-section">
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Pastor / Church</th>
                  <th>Contact</th>
                  <th>Location</th>
                  <th>Size</th>
                  <th>Applied</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {apps.map(app => (
                  <tr key={app._id}>
                    <td>
                      <p className="table-primary">{app.pastorName}</p>
                      <p className="table-secondary">{app.churchName}</p>
                      {app.denomination && <p className="table-secondary">{app.denomination}</p>}
                    </td>
                    <td>
                      <p className="table-primary">{app.email}</p>
                      <p className="table-secondary">{app.phone}</p>
                    </td>
                    <td>{app.city}, {app.state} {app.zip}</td>
                    <td>{app.congregationSize || '—'}</td>
                    <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="admin-actions">
                        <button className="btn btn-sm btn-navy" onClick={() => setSelected(app)} title="View Details">
                          <FiEye />
                        </button>
                        <button className="btn btn-sm btn-success" onClick={() => handleApprove(app._id)} disabled={actionLoading}>
                          <FiCheck />
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => setSelected({ ...app, rejecting: true })} disabled={actionLoading}>
                          <FiX />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail / Reject Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => { setSelected(null); setRejectReason(''); }}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selected.rejecting ? 'Reject Application' : 'Application Details'}</h2>
              <button className="modal-close" onClick={() => { setSelected(null); setRejectReason(''); }}>
                <FiX />
              </button>
            </div>
            {!selected.rejecting ? (
              <div className="modal-body">
                <div className="detail-grid">
                  <div><strong>Pastor</strong><p>{selected.pastorName}</p></div>
                  <div><strong>Church</strong><p>{selected.churchName}</p></div>
                  <div><strong>Email</strong><p>{selected.email}</p></div>
                  <div><strong>Phone</strong><p>{selected.phone || '—'}</p></div>
                  <div><strong>Address</strong><p>{selected.churchAddress || '—'}</p></div>
                  <div><strong>City/State</strong><p>{selected.city}, {selected.state} {selected.zip}</p></div>
                  <div><strong>Denomination</strong><p>{selected.denomination || '—'}</p></div>
                  <div><strong>Size</strong><p>{selected.congregationSize || '—'}</p></div>
                  <div><strong>Website</strong><p>{selected.website || '—'}</p></div>
                  <div><strong>Applied</strong><p>{new Date(selected.createdAt).toLocaleDateString()}</p></div>
                </div>
                {selected.applicationMessage && (
                  <div style={{marginTop:'20px'}}>
                    <strong>Application Message:</strong>
                    <p style={{marginTop:'8px',background:'var(--off-white)',padding:'16px',borderRadius:'8px',color:'var(--text-light)',lineHeight:1.7}}>
                      {selected.applicationMessage}
                    </p>
                  </div>
                )}
                <div className="modal-footer">
                  <button className="btn btn-danger" onClick={() => setSelected({ ...selected, rejecting: true })}>Reject</button>
                  <button className="btn btn-success" onClick={() => handleApprove(selected._id)} disabled={actionLoading}>
                    {actionLoading ? 'Approving...' : 'Approve'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="modal-body">
                <p>You are about to reject the application from <strong>{selected.pastorName}</strong> ({selected.churchName}).</p>
                <div className="form-group" style={{marginTop:'20px'}}>
                  <label className="form-label">Reason (optional — will be included in email)</label>
                  <textarea className="form-textarea" value={rejectReason} onChange={e => setRejectReason(e.target.value)} placeholder="Provide a reason for rejection..." rows={4} />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-navy" onClick={() => setSelected({ ...selected, rejecting: false })}>Go Back</button>
                  <button className="btn btn-danger" onClick={() => handleReject(selected._id)} disabled={actionLoading}>
                    {actionLoading ? 'Rejecting...' : 'Confirm Reject'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminApplications;
