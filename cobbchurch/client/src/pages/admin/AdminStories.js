import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiBookOpen, FiStar } from 'react-icons/fi';
import api from '../../utils/api';
import './AdminDashboard.css';
import './AdminApplications.css';

const AdminStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({
    pastorName: '', churchName: '', title: '', content: '',
    videoUrl: '', isFeatured: false, isPublished: false
  });

  const fetch = async () => {
    try {
      const { data } = await api.get('/admin/stories');
      setStories(data.stories);
    } catch { toast.error('Failed to load stories'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const openAdd = () => {
    setEditing(null);
    setForm({ pastorName: '', churchName: '', title: '', content: '', videoUrl: '', isFeatured: false, isPublished: false });
    setShowForm(true);
  };

  const openEdit = (s) => {
    setEditing(s);
    setForm({
      pastorName: s.pastorName, churchName: s.churchName || '',
      title: s.title, content: s.content,
      videoUrl: s.videoUrl || '', isFeatured: s.isFeatured, isPublished: s.isPublished
    });
    setShowForm(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (editing) {
        await api.put(`/stories/${editing._id}`, form);
        toast.success('Story updated');
      } else {
        await api.post('/stories', form);
        toast.success('Story created');
      }
      setShowForm(false);
      fetch();
    } catch { toast.error('Failed to save story'); }
    finally { setFormLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this story?')) return;
    try {
      await api.delete(`/stories/${id}`);
      toast.success('Story deleted');
      fetch();
    } catch { toast.error('Failed to delete'); }
  };

  const togglePublish = async (story) => {
    try {
      await api.put(`/stories/${story._id}`, { isPublished: !story.isPublished });
      toast.success(story.isPublished ? 'Story unpublished' : 'Story published!');
      fetch();
    } catch { toast.error('Failed to update'); }
  };

  return (
    <div>
      <div className="admin-page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>Pastor Stories</h1>
            <p>Add and manage pastor testimonies and impact stories shown on the public site.</p>
          </div>
          <button className="btn btn-primary" onClick={openAdd}>
            <FiPlus /> Add Story
          </button>
        </div>
      </div>

      {loading ? <div className="spinner"></div> : (
        <div className="admin-section">
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Story</th>
                  <th>Pastor / Church</th>
                  <th>Video</th>
                  <th>Featured</th>
                  <th>Status</th>
                  <th>Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stories.map(s => (
                  <tr key={s._id}>
                    <td>
                      <p className="table-primary">{s.title}</p>
                      <p className="table-secondary" style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {s.content}
                      </p>
                    </td>
                    <td>
                      <p className="table-primary">{s.pastorName}</p>
                      <p className="table-secondary">{s.churchName}</p>
                    </td>
                    <td>
                      {s.videoUrl ? (
                        <a href={s.videoUrl} target="_blank" rel="noreferrer"
                          style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 600 }}>
                          Watch ↗
                        </a>
                      ) : '—'}
                    </td>
                    <td>
                      {s.isFeatured && (
                        <FiStar style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => togglePublish(s)}
                        className={`badge ${s.isPublished ? 'badge-green' : 'badge-gray'}`}
                        style={{ border: 'none', cursor: 'pointer' }}
                      >
                        {s.isPublished ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td>{new Date(s.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="admin-actions">
                        <button className="btn btn-sm btn-navy" onClick={() => openEdit(s)}>
                          <FiEdit2 size={13} />
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s._id)}>
                          <FiTrash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {stories.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', color: 'var(--gray)', padding: '40px' }}>
                      No stories yet. Add the first pastor story!
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
          <div className="modal-box" style={{ maxWidth: '680px' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2><FiBookOpen style={{ marginRight: '8px', color: 'var(--gold)' }} />
                {editing ? 'Edit Story' : 'Add Pastor Story'}
              </h2>
              <button className="modal-close" onClick={() => setShowForm(false)}><FiX /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Pastor Name *</label>
                    <input className="form-input" required value={form.pastorName}
                      onChange={e => setForm({ ...form, pastorName: e.target.value })}
                      placeholder="Pastor Marcus D." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Church Name</label>
                    <input className="form-input" value={form.churchName}
                      onChange={e => setForm({ ...form, churchName: e.target.value })}
                      placeholder="Grace Community Church" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Story Title *</label>
                  <input className="form-input" required value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    placeholder="The Power of Partnership" />
                </div>
                <div className="form-group">
                  <label className="form-label">Story Content *</label>
                  <textarea className="form-textarea" required rows={6} value={form.content}
                    onChange={e => setForm({ ...form, content: e.target.value })}
                    placeholder="Tell the pastor's story..." />
                </div>
                <div className="form-group">
                  <label className="form-label">Video URL (optional)</label>
                  <input className="form-input" value={form.videoUrl}
                    onChange={e => setForm({ ...form, videoUrl: e.target.value })}
                    placeholder="https://youtube.com/watch?v=..." />
                </div>
                <div style={{ display: 'flex', gap: '28px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                    <input type="checkbox" checked={form.isPublished}
                      onChange={e => setForm({ ...form, isPublished: e.target.checked })} />
                    Publish to public site
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                    <input type="checkbox" checked={form.isFeatured}
                      onChange={e => setForm({ ...form, isFeatured: e.target.checked })} />
                    Featured story
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-navy" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={formLoading}>
                  {formLoading ? 'Saving...' : (editing ? 'Update Story' : 'Add Story')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStories;
