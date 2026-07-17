import { useState, useEffect } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

export default function AdminBookings() {
  const [bookings, setBookings] = useState([])

  const load = () => API.get('/bookings').then(r => setBookings(r.data)).catch(() => {})
  useEffect(() => { load() }, [])

  const handleStatus = async (id, status) => {
    await API.patch(`/bookings/${id}`, { status })
    toast.success('Status updated!')
    load()
  }

  const handleDelete = async id => {
    if (!confirm('Delete this booking?')) return
    await API.delete(`/bookings/${id}`)
    toast.success('Booking deleted')
    load()
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary-800">Bookings</h1>
        <p className="text-gray-500 mt-1">{bookings.length} booking requests</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {bookings.length === 0 ? <p className="text-center text-gray-400 py-20">No bookings yet.</p> : (
          <div className="divide-y divide-gray-50">
            {bookings.map(b => (
              <div key={b._id} className="p-6 hover:bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{b.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${b.status === 'confirmed' ? 'bg-green-100 text-green-600' : b.status === 'cancelled' ? 'bg-red-100 text-red-500' : 'bg-yellow-100 text-yellow-600'}`}>
                        {b.status || 'pending'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                      <span>{b.email}</span>
                      <span>{b.phone}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm">
                      {b.date && <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{b.date}</span>}
                      {b.time && <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">{b.time}</span>}
                      {b.service && <span className="bg-gold-50 text-gold-700 px-3 py-1 rounded-full">{b.service}</span>}
                      {b.language && <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full">{b.language}</span>}
                    </div>
                    {b.message && <p className="text-gray-500 text-sm mt-2">{b.message}</p>}
                  </div>
                  <div className="flex gap-2">
                    <select value={b.status || 'pending'} onChange={e => handleStatus(b._id, e.target.value)}
                      className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <a href={`mailto:${b.email}`} className="px-3 py-2 bg-primary-700 text-white rounded-lg text-sm hover:bg-primary-800">Email</a>
                    <button onClick={() => handleDelete(b._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
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
