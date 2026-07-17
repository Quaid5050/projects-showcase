import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || '/api';
const CATS = ['All', 'Beer', 'Spirits', 'Wine', 'Convenience'];
const STORES = ['Beer Store', 'Liquor Store', 'Convenience Store'];
const BADGES = ['', 'Popular', 'Premium', 'Sale', 'New'];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', category: 'Beer', subCategory: '', store: 'Beer Store', volume: '', price: '', stock: '100', badge: '', description: '' });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    const q = filter !== 'All' ? `?category=${filter}` : '';
    axios.get(`${API}/products${q}`).then(r => setProducts(r.data.data)).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { fetchProducts(); }, [filter]);

  const openAdd = () => {
    setForm({ name: '', category: 'Beer', subCategory: '', store: 'Beer Store', volume: '', price: '', stock: '100', badge: '', description: '' });
    setImageFile(null);
    setImagePreview('');
    setModal('add');
  };

  const openEdit = (p) => {
    setForm({ ...p, price: String(p.price), stock: String(p.stock) });
    setImageFile(null);
    setImagePreview(p.image || '');
    setModal(p);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const save = async () => {
    if (!form.name || !form.price) return alert('Name and price are required');
    setSaving(true);

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('category', form.category);
      formData.append('subCategory', form.subCategory);
      formData.append('store', form.store);
      formData.append('volume', form.volume);
      formData.append('price', parseFloat(form.price));
      formData.append('stock', parseInt(form.stock));
      formData.append('badge', form.badge);
      formData.append('description', form.description);
      if (imageFile) formData.append('image', imageFile);

      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      if (modal === 'add') {
        await axios.post(`${API}/products`, formData, config);
      } else {
        await axios.put(`${API}/products/${modal._id}`, formData, config);
      }
      setModal(null);
      fetchProducts();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save');
    }
    setSaving(false);
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try { await axios.delete(`${API}/products/${id}`); fetchProducts(); } catch { alert('Failed'); }
  };

  const upd = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <div className="adm-topbar">
        <div className="adm-page-title">Products</div>
        <button className="adm-btn adm-btn-gold" onClick={openAdd}>+ Add Product</button>
      </div>

      <div className="adm-filters">
        {CATS.map(c => <button key={c} className={`adm-filter-pill${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>)}
      </div>

      {loading ? <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" /></div> : (
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th style={{width:60}}>Image</th><th>Name</th><th>Category</th><th>Store</th><th>Volume</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
            <tbody>
              {products.map(p => (
                <tr key={p._id}>
                  <td>
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 6, background: 'var(--cream)' }} />
                    ) : (
                      <div style={{ width: 44, height: 44, borderRadius: 6, background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--gray)' }}>No img</div>
                    )}
                  </td>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td style={{ fontSize: 12, color: 'var(--gray)' }}>{p.store}</td>
                  <td style={{ fontSize: 13 }}>{p.volume}</td>
                  <td style={{ fontWeight: 700 }}>${p.price.toFixed(2)}</td>
                  <td><span style={{ color: p.stock < 10 ? 'var(--red)' : 'inherit', fontWeight: p.stock < 10 ? 700 : 400 }}>{p.stock}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="adm-btn-action" onClick={() => openEdit(p)}>Edit</button>
                      <button className="adm-btn-danger" onClick={() => remove(p._id)}>Del</button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && <tr><td colSpan={8} style={{ textAlign: 'center', padding: 40, color: 'var(--gray)' }}>No products</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {modal && (
        <div className="adm-modal-overlay" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="adm-modal">
            <div className="adm-modal-head">
              <div className="adm-modal-title">{modal === 'add' ? 'Add Product' : 'Edit Product'}</div>
              <button className="adm-close-btn" onClick={() => setModal(null)}>✕</button>
            </div>
            <div className="adm-modal-body">
              {/* Image Upload */}
              <div className="form-group">
                <label className="form-label">Product Image</label>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: 10,
                    background: 'var(--cream)', border: '2px dashed var(--gray-lt)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', flexShrink: 0
                  }}>
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ fontSize: 11, color: 'var(--gray)', textAlign: 'center', padding: 8 }}>No image</span>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleImageChange}
                      style={{ fontSize: 13, marginBottom: 6 }}
                    />
                    <div style={{ fontSize: 11, color: 'var(--gray)' }}>JPG, PNG or WebP. Max 5MB. Uploaded to Cloudinary.</div>
                    {imagePreview && !imageFile && (
                      <button
                        style={{ fontSize: 11, color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer', marginTop: 4 }}
                        onClick={() => { setImagePreview(''); setImageFile(null); }}
                      >Remove image</button>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group"><label className="form-label">Product Name *</label><input className="form-input" value={form.name} onChange={e => upd('name', e.target.value)} placeholder="Budweiser" /></div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select className="form-input" value={form.category} onChange={e => upd('category', e.target.value)}>
                    {CATS.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Store *</label>
                  <select className="form-input" value={form.store} onChange={e => upd('store', e.target.value)}>
                    {STORES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Sub Category</label><input className="form-input" value={form.subCategory} onChange={e => upd('subCategory', e.target.value)} placeholder="Lager, Whiskey, etc." /></div>
                <div className="form-group"><label className="form-label">Volume</label><input className="form-input" value={form.volume} onChange={e => upd('volume', e.target.value)} placeholder="750ml, 6-pack" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Price *</label><input className="form-input" type="number" step="0.01" value={form.price} onChange={e => upd('price', e.target.value)} placeholder="19.99" /></div>
                <div className="form-group"><label className="form-label">Stock</label><input className="form-input" type="number" value={form.stock} onChange={e => upd('stock', e.target.value)} /></div>
              </div>
              <div className="form-group">
                <label className="form-label">Badge</label>
                <select className="form-input" value={form.badge} onChange={e => upd('badge', e.target.value)}>
                  {BADGES.map(b => <option key={b} value={b}>{b || '— None —'}</option>)}
                </select>
              </div>
              <div className="form-group"><label className="form-label">Description</label><textarea className="form-input" rows={3} value={form.description} onChange={e => upd('description', e.target.value)} style={{ resize: 'vertical' }} /></div>
            </div>
            <div className="adm-modal-foot">
              <button className="adm-btn-outline-s" onClick={() => setModal(null)}>Cancel</button>
              <button className="adm-btn adm-btn-gold" onClick={save} disabled={saving}>
                {saving ? 'Uploading...' : modal === 'add' ? 'Add Product' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}