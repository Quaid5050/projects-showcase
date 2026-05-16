import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiSearch, FiTrash2, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import api from '../../utils/api';
import './AdminDashboard.css';
import './AdminFilters.css';

const availabilityColors = { available: 'green', limited: 'yellow', unavailable: 'red' };

const AdminResources = () => {
  const [resources, setResources] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('all');

  const categories = ['all', 'food', 'counseling', 'volunteers', 'transportation', 'youth', 'family', 'outreach', 'prayer', 'emergency', 'facilities', 'other'];

  const fetch = async () => {
    try {
      const { data } = await api.get('/admin/resources');
      setResources(data.resources);
      setFiltered(data.resources);
    } catch { toast.error('Failed to load resources'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  useEffect(() => {
    let list = resources;
    if (catFilter !== 'all') list = list.filter(r => r.category === catFilter);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.church?.churchName?.toLowerCase().includes(q)
      );
    }
    setFiltered(list);
  }, [search, catFilter, resources]);

  const handleToggle = async (resource) => {
    try {
      await api.put(`/resources/${resource._id}`, { isActive: !resource.isActive });
      toast.success(resource.isActive ? 'Resource deactivated' : 'Resource activated');
      fetch();
    } catch { toast.error('Failed to update'); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this resource permanently?')) return;
    try {
      await api.delete(`/resources/${id}`);
      toast.success('Resource deleted');
      fetch();
    } catch { toast.error('Failed to delete'); }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Resources</h1>
        <p>View and moderate all resources shared by churches across the network.</p>
      </div>

      <div className="admin-section">
        <div className="admin-filters" style={{ marginBottom: '16px' }}>
          <div className="search-box">
            <FiSearch />
            <input placeholder="Search resources..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button
                key={c}
                className={`filter-tab ${catFilter === c ? 'active' : ''}`}
                onClick={() => setCatFilter(c)}
              >
                {c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? <div className="spinner"></div> : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Church</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Crisis Support</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r._id}>
                    <td>
                      <p className="table-primary">{r.title}</p>
                      <p className="table-secondary" style={{ maxWidth: '220px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.description}
                      </p>
                    </td>
                    <td>
                      <p className="table-primary">{r.church?.churchName || '—'}</p>
                      <p className="table-secondary">{r.church?.pastorName}</p>
                    </td>
                    <td><span className="badge badge-gold">{r.category}</span></td>
                    <td>
                      <span className={`badge badge-${availabilityColors[r.availability]}`}>
                        {r.availability}
                      </span>
                    </td>
                    <td>
                      {r.crisisSupport
                        ? <span className="badge badge-red">Yes</span>
                        : <span style={{ color: 'var(--gray)', fontSize: '0.82rem' }}>No</span>}
                    </td>
                    <td>
                      <span className={`badge ${r.isActive ? 'badge-green' : 'badge-gray'}`}>
                        {r.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className="admin-actions">
                        <button
                          className={`btn btn-sm ${r.isActive ? 'btn-navy' : 'btn-success'}`}
                          onClick={() => handleToggle(r)}
                          title={r.isActive ? 'Deactivate' : 'Activate'}
                        >
                          {r.isActive ? <FiToggleRight size={14} /> : <FiToggleLeft size={14} />}
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(r._id)}>
                          <FiTrash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', color: 'var(--gray)', padding: '40px' }}>
                      No resources found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminResources;
