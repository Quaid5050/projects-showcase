import { useEffect, useState } from 'react';
import { UploadCloud, Trash2 } from 'lucide-react';
import api from '../../utils/api';
import AdminLayout from './AdminLayout';

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get('/gallery');
      setImages(res.data);
    } catch { } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setError(''); setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await api.post('/gallery', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      setImages(imgs => [res.data, ...imgs]);
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this image?')) return;
    await api.delete(`/gallery/${id}`);
    setImages(imgs => imgs.filter(i => i._id !== id));
  };

  return (
    <AdminLayout>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.5rem', color: 'var(--text-dark)' }}>Gallery</h1>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-light)' }}>Images uploaded here appear on the public Gallery page.</p>
        </div>
        <label className="btn-primary" style={{ cursor: uploading ? 'not-allowed' : 'pointer', opacity: uploading ? 0.6 : 1 }}>
          <UploadCloud size={16} /> {uploading ? 'Uploading...' : 'Upload Image'}
          <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} style={{ display: 'none' }} />
        </label>
      </div>

      {error && <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: 6, fontSize: '0.875rem', fontFamily: 'Poppins,sans-serif', marginBottom: '1rem' }}>{error}</div>}

      {loading ? (
        <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>Loading...</p>
      ) : images.length === 0 ? (
        <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-light)' }}>No images yet. Upload the first one.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
          {images.map(img => (
            <div key={img._id} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <img src={img.url} alt={img.alt} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              <button onClick={() => handleDelete(img._id)}
                style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(192,26,26,0.9)', border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', color: 'white', display: 'flex' }}>
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
