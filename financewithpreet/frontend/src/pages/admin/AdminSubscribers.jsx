import { useState, useEffect } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

export default function AdminSubscribers() {
  const [subs, setSubs] = useState([])

  const load = () => API.get('/newsletter').then(r => setSubs(r.data)).catch(() => {})
  useEffect(() => { load() }, [])

  const handleDelete = async id => {
    if (!confirm('Remove subscriber?')) return
    await API.delete(`/newsletter/${id}`)
    toast.success('Removed')
    load()
  }

  const exportCSV = () => {
    const csv = 'Email,Date\n' + subs.map(s => `${s.email},${new Date(s.createdAt).toLocaleDateString()}`).join('\n')
    const blob = new Blob([csv], { type:'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'subscribers.csv'; a.click()
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-primary-800">Newsletter Subscribers</h1>
          <p className="text-gray-500 mt-1">{subs.length} subscribers</p>
        </div>
        {subs.length > 0 && (
          <button onClick={exportCSV} className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export CSV
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {subs.length === 0 ? <p className="text-center text-gray-400 py-20">No subscribers yet.</p> : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">#</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Email</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {subs.map((s, i) => (
                <tr key={s._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-400 text-sm">{i+1}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{s.email}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{new Date(s.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDelete(s._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}
