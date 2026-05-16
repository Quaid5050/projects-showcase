import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiSearch, FiEye, FiX } from 'react-icons/fi';
import api from '../../utils/api';
import './AdminDashboard.css';
import './AdminApplications.css';

const statusColors = { approved: 'green', pending: 'yellow', rejected: 'red', suspended: 'gray' };

const AdminChurches = () => {
  const [churches, setChurches] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('approved');
  const [selected, setSelected] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/admin/churches?status=${statusFilter}`);
      setChurches(data.churches);
      setFiltered(data.churches);
    } catch { toast.error('Failed to load'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, [statusFilter]);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(churches.filter(c =>
      c.churchName.toLowerCase().includes(q) ||
      c.pastorName.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    ));
  }, [search, churches]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/admin/churches/${id}/status`, { status: newStatus });
      toast.success(`Status updated to ${newStatus}`);
      fetch();
    } catch { toast.error('Failed to update'); }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Churches</h1>
        <p>Manage all churches and their network access.</p>
      </div>

      <div className="admin-section">
        <div className="admin-filters">
          <div className="search-box">
            <FiSearch />
            <input placeholder="Search churches..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="filter-tabs">
            {['approved','pending','rejected','suspended'].map(s => (
              <button key={s} className={`filter-tab ${statusFilter === s ? 'active' : ''}`} onClick={() => setStatusFilter(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? <div className="spinner"></div> : (
          <div className="admin-table-wrapper" style={{marginTop:'20px'}}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Pastor / Church</th>
                  <th>Contact</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c._id}>
                    <td>
                      <p className="table-primary">{c.pastorName}</p>
                      <p className="table-secondary">{c.churchName}</p>
                    </td>
                    <td>
                      <p className="table-primary">{c.email}</p>
                      <p className="table-secondary">{c.phone}</p>
                    </td>
                    <td>{c.city}, {c.state}</td>
                    <td><span className={`badge badge-${statusColors[c.status]}`}>{c.status}</span></td>
                    <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="admin-actions">
                        <button className="btn btn-sm btn-navy" onClick={() => setSelected(c)}><FiEye /></button>
                        {c.status !== 'approved' && (
                          <button className="btn btn-sm btn-success" onClick={() => handleStatusChange(c._id, 'approved')}>Approve</button>
                        )}
                        {c.status === 'approved' && (
                          <button className="btn btn-sm btn-danger" onClick={() => handleStatusChange(c._id, 'suspended')}>Suspend</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={6} style={{textAlign:'center',color:'var(--gray)',padding:'32px'}}>No churches found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selected.churchName}</h2>
              <button className="modal-close" onClick={() => setSelected(null)}><FiX /></button>
            </div>
            <div className="modal-body">
              <div className="detail-grid">
                <div><strong>Pastor</strong><p>{selected.pastorName}</p></div>
                <div><strong>Church</strong><p>{selected.churchName}</p></div>
                <div><strong>Email</strong><p>{selected.email}</p></div>
                <div><strong>Phone</strong><p>{selected.phone || '—'}</p></div>
                <div><strong>Address</strong><p>{selected.churchAddress || '—'}</p></div>
                <div><strong>City</strong><p>{selected.city}, {selected.state} {selected.zip}</p></div>
                <div><strong>Denomination</strong><p>{selected.denomination || '—'}</p></div>
                <div><strong>Size</strong><p>{selected.congregationSize || '—'}</p></div>
                <div><strong>Status</strong><p><span className={`badge badge-${statusColors[selected.status]}`}>{selected.status}</span></p></div>
                <div><strong>Role</strong><p>{selected.role}</p></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminChurches;
