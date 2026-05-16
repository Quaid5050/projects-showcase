import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../api';
import { toast } from 'react-toastify';
import { AdminLayout } from './AdminDashboard';

const STATUSES = ['New Lead','Contacted','In Review','Documents Requested','Submitted','Approved','Rejected','Closed'];
const SERVICES = ['Canadian Pardon / Record Suspension','US Entry Waiver','NEXUS Application','Multiple Services','Not Sure'];

const statusColor = (s) => ({
  'New Lead': 'badge-new', 'Contacted': 'badge-contact', 'In Review': 'badge-review',
  'Documents Requested': 'badge-docs', 'Submitted': 'badge-submit',
  'Approved': 'badge-approved', 'Rejected': 'badge-rejected', 'Closed': 'badge-closed',
}[s] || 'badge-closed');

export default function AdminLeads() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const defaultStatus = params.get('status') || '';

  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ status: defaultStatus, service: '', search: '' });

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({ ...filters, page, limit: 15 }).toString();
      const { data } = await api.get(`/leads?${query}`);
      setLeads(data.leads || []);
      setTotal(data.total || 0);
      setPages(data.pages || 1);
    } catch {
      toast.error('Failed to load leads');
    }
    setLoading(false);
  }, [filters, page]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const handleStatusChange = async (id, status) => {
    try {
      await api.put(`/leads/${id}`, { status });
      toast.success('Status updated');
      fetchLeads();
    } catch {
      toast.error('Failed to update status');
    }
  };

  return (
    <AdminLayout>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.5rem', color: '#0B1F3A' }}>All Leads</h2>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{total} total leads in database</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: '#fff', borderRadius: 8, padding: '1.2rem 1.5rem', marginBottom: '1.2rem', boxShadow: '0 1px 8px rgba(0,0,0,0.07)', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 }}>Search</label>
          <input value={filters.search} onChange={e => { setFilters({...filters, search: e.target.value}); setPage(1); }} placeholder="Name, email, phone..." style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #dde4ed', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.875rem' }} />
        </div>
        <div style={{ minWidth: 160 }}>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 }}>Status</label>
          <select value={filters.status} onChange={e => { setFilters({...filters, status: e.target.value}); setPage(1); }} style={{ padding: '8px 12px', border: '1.5px solid #dde4ed', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.875rem', width: '100%' }}>
            <option value="">All Statuses</option>
            {STATUSES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div style={{ minWidth: 180 }}>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 }}>Service</label>
          <select value={filters.service} onChange={e => { setFilters({...filters, service: e.target.value}); setPage(1); }} style={{ padding: '8px 12px', border: '1.5px solid #dde4ed', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.875rem', width: '100%' }}>
            <option value="">All Services</option>
            {SERVICES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <button onClick={() => { setFilters({ status: '', service: '', search: '' }); setPage(1); }} style={{ padding: '8px 16px', background: '#f1f5f9', border: '1.5px solid #dde4ed', borderRadius: 4, cursor: 'pointer', fontSize: '0.85rem', color: '#6b7280', fontFamily: 'inherit' }}>Clear</button>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 8px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th><th>Contact</th><th>Service</th><th>Province</th><th>Status</th><th>Source</th><th>Date</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>Loading leads...</td></tr>
              ) : leads.length === 0 ? (
                <tr><td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>No leads found matching your filters.</td></tr>
              ) : leads.map(lead => (
                <tr key={lead._id}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#0B1F3A' }}>{lead.firstName} {lead.lastName}</div>
                    {lead.assignedTo !== 'Unassigned' && <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>→ {lead.assignedTo}</div>}
                  </td>
                  <td>
                    <div style={{ fontSize: '0.85rem' }}>{lead.email}</div>
                    <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{lead.phone || '—'}</div>
                  </td>
                  <td style={{ fontSize: '0.82rem', color: '#6b7280', maxWidth: 160 }}>{lead.service || '—'}</td>
                  <td style={{ fontSize: '0.85rem', color: '#6b7280' }}>{lead.province || '—'}</td>
                  <td>
                    <select value={lead.status} onChange={e => handleStatusChange(lead._id, e.target.value)}
                      style={{ padding: '4px 8px', border: '1px solid #dde4ed', borderRadius: 4, fontSize: '0.78rem', fontFamily: 'inherit', cursor: 'pointer', background: '#f9fafb' }}>
                      {STATUSES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{lead.source}</td>
                  <td style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/admin/leads/${lead._id}`} style={{ color: '#0B1F3A', fontWeight: 600, fontSize: '0.82rem', whiteSpace: 'nowrap' }}>View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.85rem', color: '#9ca3af', marginRight: 10 }}>Page {page} of {pages}</span>
            {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
              <button key={p} onClick={() => setPage(p)} style={{ width: 32, height: 32, borderRadius: 4, border: '1.5px solid', borderColor: p === page ? '#0B1F3A' : '#dde4ed', background: p === page ? '#0B1F3A' : '#fff', color: p === page ? '#fff' : '#374151', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit' }}>{p}</button>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
