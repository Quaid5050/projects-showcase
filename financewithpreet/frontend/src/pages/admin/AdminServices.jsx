import { useState, useEffect, useRef } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const ICONS = ['shield','trending-up','piggy-bank','graduation-cap','home','bar-chart','heart','star']
const EMPTY = { title:'', icon:'shield', description:'', image:'', features:[''], order:0 }

const PlusIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
const TrashIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
const UploadIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
const EditIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>

const SVGIcon = ({ name }) => {
  const icons = {
    'shield': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    'trending-up': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    'piggy-bank': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 11.5 3c-.31 0-.62.02-.92.07A5 5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l5 5Z"/></svg>,
    'graduation-cap': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    'home': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    'bar-chart': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    'heart': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    'star': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  }
  return icons[name] || icons['shield']
}

export default function AdminServices() {
  const [services, setServices] = useState([])
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [editing, setEditing] = useState(null)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()

  const load = () => API.get('/services').then(r => setServices(r.data || [])).catch(() => {})
  useEffect(() => { load() }, [])

  const handleImageUpload = async e => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('image', file)
    try {
      const { data } = await API.post('/upload', fd)
      setForm(f => ({ ...f, image: data.url }))
      toast.success('Image uploaded!')
    } catch { toast.error('Upload failed') }
    finally { setUploading(false) }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const payload = { ...form, features: form.features.filter(f => f.trim() !== '') }
    try {
      if (editing) {
        await API.put(`/services/${editing}`, payload)
        toast.success('Service updated!')
      } else {
        await API.post('/services', payload)
        toast.success('Service added!')
      }
      setModal(false); setForm(EMPTY); setEditing(null); load()
    } catch { toast.error('Error saving.') }
  }

  const handleEdit = s => {
    setForm({
      title: s.title,
      icon: s.icon || 'shield',
      description: s.description || '',
      image: s.image || '',
      features: s.features?.length ? s.features : [''],
      order: s.order || 0,
    })
    setEditing(s._id)
    setModal(true)
  }

  const handleDelete = async id => {
    if (!confirm('Delete this service?')) return
    await API.delete(`/services/${id}`)
    toast.success('Deleted')
    load()
  }

  // Feature list helpers
  const addFeature = () => setForm(f => ({ ...f, features: [...f.features, ''] }))
  const updateFeature = (i, val) => setForm(f => {
    const arr = [...f.features]; arr[i] = val; return { ...f, features: arr }
  })
  const removeFeature = i => setForm(f => ({ ...f, features: f.features.filter((_, fi) => fi !== i) }))

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-primary-800">Services</h1>
          <p className="text-gray-500 mt-1">Add and manage all service cards shown on the website</p>
        </div>
        <button onClick={() => { setForm(EMPTY); setEditing(null); setModal(true) }}
          className="btn-primary flex items-center gap-2">
          <PlusIcon /> Add Service
        </button>
      </div>

      {/* Empty state */}
      {services.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3 className="font-semibold text-gray-700 mb-2">No services yet</h3>
          <p className="text-gray-400 text-sm mb-6">Add your first service — it will appear on the website immediately.</p>
          <button onClick={() => { setForm(EMPTY); setEditing(null); setModal(true) }} className="btn-primary">
            Add First Service
          </button>
        </div>
      )}

      {/* Services Grid */}
      {services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s._id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative h-44">
                {s.image
                  ? <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  : <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-300">
                      <SVGIcon name={s.icon} />
                    </div>
                }
                <div className="absolute top-3 left-3 w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center text-white">
                  <SVGIcon name={s.icon} />
                </div>
                <span className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
                  #{i + 1}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{s.description}</p>
                {s.features?.length > 0 && (
                  <p className="text-xs text-gray-400 mb-4">{s.features.filter(Boolean).length} features listed</p>
                )}
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(s)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary-200 text-primary-700 rounded-lg text-sm hover:bg-primary-50 transition-colors">
                    <EditIcon /> Edit
                  </button>
                  <button onClick={() => handleDelete(s._id)}
                    className="px-3 py-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-primary-700">
                  {editing ? 'Edit Service' : 'Add New Service'}
                </h2>
                <button onClick={() => setModal(false)} className="text-gray-400 hover:text-gray-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Title + Icon */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Title *</label>
                    <input name="title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                      required placeholder="e.g. Life Insurance"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                    <select value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      {ICONS.map(i => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                    required rows={3} placeholder="Brief description shown on service card and services page..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Image</label>
                  <div className="flex gap-3">
                    <input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })}
                      placeholder="Paste image URL or upload"
                      className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" />
                    <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <button type="button" onClick={() => fileRef.current.click()} disabled={uploading}
                      className="flex items-center gap-2 px-4 py-3 border border-primary-300 text-primary-700 rounded-xl hover:bg-primary-50 text-sm font-medium disabled:opacity-60">
                      <UploadIcon /> {uploading ? '...' : 'Upload'}
                    </button>
                  </div>
                  {form.image && (
                    <img src={form.image} className="mt-3 h-32 w-full object-cover rounded-xl" />
                  )}
                </div>

                {/* Features */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Features / Bullet Points</label>
                    <button type="button" onClick={addFeature}
                      className="text-xs flex items-center gap-1 text-primary-600 hover:text-primary-800">
                      <PlusIcon /> Add Feature
                    </button>
                  </div>
                  <div className="space-y-2">
                    {form.features.map((f, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <span className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0" />
                        <input value={f} onChange={e => updateFeature(i, e.target.value)}
                          placeholder={`Feature ${i + 1} (e.g. Term Life Insurance)`}
                          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" />
                        {form.features.length > 1 && (
                          <button type="button" onClick={() => removeFeature(i)}
                            className="text-red-400 hover:text-red-600 p-1">
                            <TrashIcon />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Display Order */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                  <input type="number" value={form.order} onChange={e => setForm({ ...form, order: Number(e.target.value) })}
                    className="w-32 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min={0} />
                  <span className="text-gray-400 text-xs ml-3">Lower number = shown first</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setModal(false)}
                    className="flex-1 border border-gray-200 rounded-xl py-3 text-gray-600 hover:bg-gray-50 font-medium">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 btn-primary py-3">
                    {editing ? 'Update Service' : 'Add Service'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}