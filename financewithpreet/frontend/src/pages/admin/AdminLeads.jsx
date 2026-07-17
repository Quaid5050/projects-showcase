import { useState, useEffect } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const TrashIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>

export default function AdminLeads() {
  const [leads, setLeads] = useState([])

  const load = () => API.get('/leads').then(r => setLeads(r.data)).catch(() => {})
  useEffect(() => { load() }, [])

  const handleDelete = async id => {
    if (!confirm('Delete this lead?')) return
    await API.delete(`/leads/${id}`)
    toast.success('Lead deleted')
    load()
  }

  const handleStatus = async (id, status) => {
    await API.patch(`/leads/${id}`, { status })
    load()
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary-800">Contact Leads</h1>
        <p className="text-gray-500 mt-1">{leads.length} leads received</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {leads.length === 0 ? <p className="text-center text-gray-400 py-20">No leads yet.</p> : (
          <div className="divide-y divide-gray-50">
            {leads.map(lead => (
              <div key={lead._id} className="p-6 hover:bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{lead.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${lead.status === 'contacted' ? 'bg-green-100 text-green-600' : lead.status === 'closed' ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-600'}`}>
                        {lead.status || 'new'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{lead.email}</span>
                      {lead.phone && <span>{lead.phone}</span>}
                    </div>
                    {lead.message && <p className="text-gray-500 text-sm mt-2 line-clamp-2">{lead.message}</p>}
                    <p className="text-gray-400 text-xs mt-2">{new Date(lead.createdAt || lead.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <select value={lead.status || 'new'} onChange={e => handleStatus(lead._id, e.target.value)}
                      className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                    <a href={`mailto:${lead.email}`} className="px-3 py-2 bg-primary-700 text-white rounded-lg text-sm hover:bg-primary-800">Email</a>
                    <button onClick={() => handleDelete(lead._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><TrashIcon /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
