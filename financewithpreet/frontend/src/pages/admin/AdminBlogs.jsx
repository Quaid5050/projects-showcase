import { useState, useEffect, useRef } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
const TrashIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
const EditIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
const UploadIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>

const EMPTY = { title:'', slug:'', excerpt:'', content:'', category:'', image:'', date:'' }

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([])
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [editing, setEditing] = useState(null)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()

  const load = () => API.get('/blogs').then(r => setBlogs(r.data)).catch(() => {})

  useEffect(() => { load() }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

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
    } catch {
      toast.error('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (editing) {
        await API.put(`/blogs/${editing}`, form)
        toast.success('Blog updated!')
      } else {
        await API.post('/blogs', form)
        toast.success('Blog created!')
      }
      setModal(false)
      setForm(EMPTY)
      setEditing(null)
      load()
    } catch {
      toast.error('Error saving blog.')
    }
  }

  const handleEdit = blog => {
    setForm({ title:blog.title, slug:blog.slug, excerpt:blog.excerpt, content:blog.content||'', category:blog.category||'', image:blog.image||'', date:blog.date?.split('T')[0]||'' })
    setEditing(blog._id)
    setModal(true)
  }

  const handleDelete = async id => {
    if (!confirm('Delete this blog post?')) return
    await API.delete(`/blogs/${id}`)
    toast.success('Deleted!')
    load()
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-primary-800">Blog Posts</h1>
          <p className="text-gray-500 mt-1">Manage your blog content</p>
        </div>
        <button onClick={() => { setModal(true); setForm(EMPTY); setEditing(null) }}
          className="btn-primary flex items-center gap-2"><PlusIcon /> New Post</button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No blog posts yet. Create your first one!</p>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>{['Image','Title','Category','Date','Actions'].map(h => <th key={h} className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {blogs.map(b => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4"><img src={b.image} className="w-12 h-12 rounded-lg object-cover" /></td>
                  <td className="px-6 py-4"><p className="font-medium text-gray-800 text-sm line-clamp-2 max-w-xs">{b.title}</p></td>
                  <td className="px-6 py-4"><span className="bg-gold-100 text-gold-700 text-xs px-2 py-1 rounded-full">{b.category}</span></td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{b.date?.split('T')[0]}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(b)} className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg"><EditIcon /></button>
                      <button onClick={() => handleDelete(b._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><TrashIcon /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
            <h2 className="font-serif text-2xl font-bold text-primary-700 mb-6">{editing ? 'Edit Post' : 'New Blog Post'}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input name="title" value={form.title} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                  <input name="slug" value={form.slug} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input name="category" value={form.category} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                <div className="flex gap-3 items-center">
                  <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL or upload below" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <button type="button" onClick={() => fileRef.current.click()} disabled={uploading}
                    className="flex items-center gap-2 px-4 py-3 border border-primary-300 rounded-xl text-primary-700 hover:bg-primary-50 text-sm">
                    <UploadIcon /> {uploading ? '...' : 'Upload'}
                  </button>
                </div>
                {form.image && <img src={form.image} className="mt-2 h-24 rounded-lg object-cover" />}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={2} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content (HTML supported)</label>
                <textarea name="content" value={form.content} onChange={handleChange} rows={8} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm" />
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setModal(false)} className="flex-1 border border-gray-200 rounded-xl py-3 text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 btn-primary py-3">{editing ? 'Update' : 'Publish'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
