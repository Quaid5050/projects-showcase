import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus, FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import api from '../../utils/api';

const categories = ['food','counseling','volunteers','transportation','youth','family','outreach','prayer','emergency','facilities','other'];

const MyResources = () => {
  const [resources, setResources] = useState([]);
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title:'', description:'', category:'food', availability:'available', contactInfo:'', crisisSupport:false });

  const fetchAll = () => api.get('/resources').then(({ data }) => setAll(data.resources));
  const fetchMine = () => api.get('/resources/my/list').then(({ data }) => setResources(data.resources));

  useEffect(() => {
    Promise.all([fetchAll(), fetchMine()]).finally(() => setLoading(false));
  }, []);

  const openAdd = () => { setEditing(null); setForm({ title:'', description:'', category:'food', availability:'available', contactInfo:'', crisisSupport:false }); setShowForm(true); };
  const openEdit = (r) => { setEditing(r); setForm({ title:r.title, description:r.description, category:r.category, availability:r.availability, contactInfo:r.contactInfo||'', crisisSupport:r.crisisSupport }); setShowForm(true); };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/resources/${editing._id}`, form);
        toast.success('Resource updated');
      } else {
        await api.post('/resources', form);
        toast.success('Resource added');
      }
      setShowForm(false);
      fetchMine(); fetchAll();
    } catch { toast.error('Failed to save resource'); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this resource?')) return;
    try {
      await api.delete(`/resources/${id}`);
      toast.success('Resource removed');
      fetchMine(); fetchAll();
    } catch { toast.error('Failed to delete'); }
  };

  const display = tab === 'mine' ? resources : all;

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px'}}>
        <div>
          <h1 style={{fontSize:'1.6rem',color:'var(--navy)',marginBottom:'4px'}}>Resources</h1>
          <p style={{color:'var(--text-light)'}}>Share and discover ministry resources across the network.</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><FiPlus /> Add Resource</button>
      </div>

      <div style={{display:'flex',gap:'8px',marginBottom:'20px'}}>
        {['all','mine'].map(t => (
          <button key={t} onClick={() => setTab(t)} className={`btn btn-sm ${tab===t?'btn-navy':'btn-outline'}`}>
            {t === 'all' ? `All Resources (${all.length})` : `My Resources (${resources.length})`}
          </button>
        ))}
      </div>

      {loading ? <div className="spinner"></div> : (
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'16px'}}>
          {display.map(r => (
            <div key={r._id} style={{background:'var(--white)',borderRadius:'10px',padding:'20px',boxShadow:'var(--shadow)',borderLeft:'4px solid var(--gold)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'10px'}}>
                <div>
                  <span className="badge badge-gold" style={{fontSize:'0.7rem',marginBottom:'6px',display:'inline-block'}}>{r.category}</span>
                  <h3 style={{color:'var(--navy)',fontSize:'0.95rem'}}>{r.title}</h3>
                </div>
                {tab === 'mine' && (
                  <div style={{display:'flex',gap:'6px'}}>
                    <button onClick={() => openEdit(r)} style={{background:'transparent',border:'none',color:'var(--gold)',cursor:'pointer',padding:'4px'}}><FiEdit2 size={15} /></button>
                    <button onClick={() => handleDelete(r._id)} style={{background:'transparent',border:'none',color:'#ef4444',cursor:'pointer',padding:'4px'}}><FiTrash2 size={15} /></button>
                  </div>
                )}
              </div>
              <p style={{color:'var(--text-light)',fontSize:'0.85rem',lineHeight:1.6,marginBottom:'10px'}}>{r.description}</p>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span className={`badge badge-${r.availability==='available'?'green':r.availability==='limited'?'yellow':'red'}`}>{r.availability}</span>
                {r.crisisSupport && <span className="badge badge-red">Crisis Support</span>}
              </div>
              {r.church && <p style={{color:'var(--gray)',fontSize:'0.78rem',marginTop:'8px'}}>by {r.church.churchName}</p>}
            </div>
          ))}
          {display.length === 0 && (
            <div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px',color:'var(--gray)'}}>
              <p>{tab==='mine' ? 'You haven\'t added any resources yet.' : 'No resources available.'}</p>
            </div>
          )}
        </div>
      )}

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editing ? 'Edit Resource' : 'Add Resource'}</h2>
              <button className="modal-close" onClick={() => setShowForm(false)}><FiX /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Title *</label>
                  <input className="form-input" required value={form.title} onChange={e => setForm({...form, title:e.target.value})} placeholder="Resource title" />
                </div>
                <div className="form-group">
                  <label className="form-label">Description *</label>
                  <textarea className="form-textarea" required rows={3} value={form.description} onChange={e => setForm({...form, description:e.target.value})} placeholder="Describe what you're offering..." />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-select" value={form.category} onChange={e => setForm({...form, category:e.target.value})}>
                      {categories.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase()+c.slice(1)}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Availability</label>
                    <select className="form-select" value={form.availability} onChange={e => setForm({...form, availability:e.target.value})}>
                      {['available','limited','unavailable'].map(a => <option key={a} value={a}>{a.charAt(0).toUpperCase()+a.slice(1)}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Info</label>
                  <input className="form-input" value={form.contactInfo} onChange={e => setForm({...form, contactInfo:e.target.value})} placeholder="Who to contact for this resource" />
                </div>
                <label style={{display:'flex',alignItems:'center',gap:'10px',cursor:'pointer',color:'var(--navy)',fontWeight:600,fontSize:'0.9rem'}}>
                  <input type="checkbox" checked={form.crisisSupport} onChange={e => setForm({...form, crisisSupport:e.target.checked})} />
                  Available for Crisis Response
                </label>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-navy" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editing ? 'Update' : 'Add Resource'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyResources;
