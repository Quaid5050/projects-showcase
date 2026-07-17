import { useState, useEffect } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import { Link } from 'react-router-dom'

const statCards = [
  { label:'Total Leads', key:'leads', icon:'users', color:'bg-blue-500', path:'/admin/leads' },
  { label:'Bookings', key:'bookings', icon:'calendar', color:'bg-green-500', path:'/admin/bookings' },
  { label:'Blog Posts', key:'blogs', icon:'file-text', color:'bg-purple-500', path:'/admin/blogs' },
  { label:'Subscribers', key:'subscribers', icon:'mail', color:'bg-gold-500', path:'/admin/subscribers' },
]

const SVGIcon = ({ name }) => {
  const icons = {
    users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    calendar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    'file-text': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    mail: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  }
  return icons[name] || null
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ leads:0, bookings:0, blogs:0, subscribers:0 })
  const [recentLeads, setRecentLeads] = useState([])
  const [recentBookings, setRecentBookings] = useState([])

  useEffect(() => {
    Promise.all([
      API.get('/leads').catch(()=>({ data:[] })),
      API.get('/bookings').catch(()=>({ data:[] })),
      API.get('/blogs').catch(()=>({ data:[] })),
      API.get('/newsletter').catch(()=>({ data:[] })),
    ]).then(([leads, bookings, blogs, subs]) => {
      setStats({ leads:leads.data.length, bookings:bookings.data.length, blogs:blogs.data.length, subscribers:subs.data.length })
      setRecentLeads(leads.data.slice(0,5))
      setRecentBookings(bookings.data.slice(0,5))
    })
  }, [])

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's your overview.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map(card => (
          <Link key={card.key} to={card.path} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center text-white mb-4`}>
              <SVGIcon name={card.icon} />
            </div>
            <p className="text-3xl font-bold text-gray-800">{stats[card.key]}</p>
            <p className="text-gray-500 text-sm mt-1">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-gray-800">Recent Leads</h2>
            <Link to="/admin/leads" className="text-sm text-primary-600 hover:underline">View all</Link>
          </div>
          {recentLeads.length === 0 ? <p className="text-gray-400 text-center py-8">No leads yet</p> : (
            <div className="space-y-3">
              {recentLeads.map(lead => (
                <div key={lead._id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="font-medium text-gray-700 text-sm">{lead.name}</p>
                    <p className="text-gray-400 text-xs">{lead.email}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">New</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-gray-800">Recent Bookings</h2>
            <Link to="/admin/bookings" className="text-sm text-primary-600 hover:underline">View all</Link>
          </div>
          {recentBookings.length === 0 ? <p className="text-gray-400 text-center py-8">No bookings yet</p> : (
            <div className="space-y-3">
              {recentBookings.map(b => (
                <div key={b._id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="font-medium text-gray-700 text-sm">{b.name}</p>
                    <p className="text-gray-400 text-xs">{b.date} at {b.time}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${b.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    {b.status || 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
