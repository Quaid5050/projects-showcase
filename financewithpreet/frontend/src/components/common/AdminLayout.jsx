import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'grid' },
  { label: 'Hero Section', path: '/admin/hero', icon: 'image' },
  { label: 'Services', path: '/admin/services', icon: 'briefcase' },
  { label: 'Blog Posts', path: '/admin/blogs', icon: 'file-text' },
  { label: 'Leads', path: '/admin/leads', icon: 'users' },
  { label: 'Bookings', path: '/admin/bookings', icon: 'calendar' },
  { label: 'Subscribers', path: '/admin/subscribers', icon: 'mail' },
]

const SVGIcon = ({ name }) => {
  const icons = {
    grid: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    image: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
    briefcase: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    'file-text': <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    users: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    calendar: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    mail: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    logout: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  }
  return icons[name] || null
}

export default function AdminLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin')
  }

  return (
    <div className="flex min-h-screen bg-navy-950">
      {/* Sidebar */}
      <aside className="w-60 bg-navy-900 border-r border-navy-700/40 flex flex-col flex-shrink-0">
        {/* Brand */}
        <div className="p-5 border-b border-navy-700/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold-500 rounded-full flex items-center justify-center shadow-gold">
              <span className="text-navy-900 font-bold font-serif text-sm">FP</span>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">Finance With Preet</p>
              <p className="text-gold-400 text-[10px] uppercase tracking-wider">Admin Portal</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(item => (
            <Link key={item.path} to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${location.pathname === item.path
                  ? 'bg-gold-500/15 border border-gold-500/25 text-gold-300'
                  : 'text-gray-400 hover:bg-navy-800/60 hover:text-gray-200 border border-transparent'
                }`}>
              <span className={location.pathname === item.path ? 'text-gold-400' : ''}><SVGIcon name={item.icon} /></span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-navy-700/40">
          <button onClick={logout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 text-sm font-medium w-full border border-transparent hover:border-red-500/20">
            <SVGIcon name="logout" /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-navy-950">
        <div className="max-w-6xl mx-auto p-7">
          {children}
        </div>
      </main>
    </div>
  )
}
