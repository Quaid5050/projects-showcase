import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, Calendar, MessageSquare, Images, Star, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: <Calendar size={18} />, label: 'Bookings', path: '/admin/bookings' },
  { icon: <MessageSquare size={18} />, label: 'Messages', path: '/admin/messages' },
  { icon: <Images size={18} />, label: 'Gallery', path: '/admin/gallery' },
  { icon: <Star size={18} />, label: 'Testimonials', path: '/admin/testimonials' },
];

export default function AdminLayout({ children }) {
  const { admin, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  const Sidebar = () => (
    <div style={{ width: 240, background: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontFamily: 'Baloo 2,sans-serif', color: 'white', fontSize: '1.1rem', fontWeight: 700 }}>GTA Homecare</div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gold)', fontFamily: 'Poppins,sans-serif', fontWeight: 700, textTransform: 'uppercase', marginTop: 2 }}>Admin Panel</div>
      </div>
      <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
        {navItems.map(item => (
          <Link key={item.path} to={item.path} onClick={() => setSidebarOpen(false)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', borderRadius: 8, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', fontWeight: 700, marginBottom: 4, transition: 'all 0.2s', color: pathname === item.path ? 'white' : 'rgba(255,255,255,0.6)', background: pathname === item.path ? 'var(--red)' : 'transparent' }}>
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>
      <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ padding: '0.75rem 1rem', marginBottom: 8 }}>
          <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Logged in as</div>
          <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'white', fontWeight: 700 }}>{admin?.email}</div>
        </div>
        <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0.75rem 1rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', borderRadius: 8, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(192,26,26,0.3)'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Desktop sidebar */}
      <div className="admin-sidebar-desktop"><Sidebar /></div>
      
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <>
          <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }} />
          <div style={{ position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 50 }}><Sidebar /></div>
        </>
      )}

      <div style={{ flex: 1, background: '#F5F5F5', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="admin-mobile-toggle" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}>
            <Menu size={22} />
          </button>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
            {navItems.find(n => n.path === pathname)?.label || 'Admin'}
          </h2>
          <div style={{ marginLeft: 'auto', fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'var(--text-light)' }}>
            {new Date().toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
          {children}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .admin-sidebar-desktop{display:none!important;} .admin-mobile-toggle{display:flex!important;} }
      `}</style>
    </div>
  );
}
