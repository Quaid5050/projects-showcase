import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
  { to: '/admin/leads', label: 'Leads', icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { to: '/admin/bookings', label: 'Bookings', icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { to: '/admin/packages', label: 'Packages', icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  const sideW = collapsed ? 64 : 220;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F0EDE8', fontFamily: "'Jost',sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: sideW, minHeight: '100vh', background: '#0E1729',
        display: 'flex', flexDirection: 'column',
        transition: 'width 0.3s ease', overflow: 'hidden', flexShrink: 0,
        position: 'sticky', top: 0, height: '100vh',
      }}>
        {/* Logo */}
        <div style={{ padding: collapsed ? '20px 0' : '24px 20px', borderBottom: '1px solid rgba(201,147,58,0.15)', display: 'flex', alignItems: 'center', gap: 10, justifyContent: collapsed ? 'center' : 'flex-start', minHeight: 72 }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="16" cy="14" r="12" fill="none" stroke="#C9933A" strokeWidth="1.5"/>
            <circle cx="16" cy="14" r="5" fill="#C9933A"/>
            <path d="M9 22 Q11 14 9 8" stroke="#C9933A" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>
          {!collapsed && <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em', fontFamily: "'Cormorant Garamond',serif" }}>SUNSET RETREAT</div>
            <div style={{ fontSize: 9, color: '#C9933A', letterSpacing: '0.2em' }}>ADMIN</div>
          </div>}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {!collapsed && <div style={{ padding: '4px 20px 8px', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>Main Menu</div>}
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} end={item.end} style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: 12,
              padding: collapsed ? '12px 0' : '11px 20px',
              justifyContent: collapsed ? 'center' : 'flex-start',
              color: isActive ? '#C9933A' : 'rgba(255,255,255,0.5)',
              background: isActive ? 'rgba(201,147,58,0.1)' : 'transparent',
              borderLeft: isActive ? '2px solid #C9933A' : '2px solid transparent',
              fontSize: 13, fontWeight: isActive ? 500 : 400,
              transition: 'all 0.2s', textDecoration: 'none',
              whiteSpace: 'nowrap',
            })}>
              {item.icon}
              {!collapsed && item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(201,147,58,0.15)', padding: collapsed ? '16px 0' : '16px 20px' }}>
          {!collapsed && <div style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 12, color: '#FFFFFF', fontWeight: 500 }}>{user?.name}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{user?.email}</p>
          </div>}
          <div style={{ display: 'flex', gap: 8, justifyContent: collapsed ? 'center' : 'space-between', alignItems: 'center' }}>
            <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', padding: 4, display: 'flex' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {collapsed ? <path d="M9 18l6-6-6-6"/> : <path d="M15 18l-6-6 6-6"/>}
              </svg>
            </button>
            {!collapsed && <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4, padding: 4, letterSpacing: '0.05em' }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16,17 21,12 16,7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Logout
            </button>}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Top bar */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E8E0D8', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ fontSize: 13, color: '#888' }}>
            Welcome back, <span style={{ color: '#1A2744', fontWeight: 500 }}>{user?.name}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="/" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#C9933A', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Website
            </a>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#C9933A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: 13, fontWeight: 600 }}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div style={{ padding: 32, flex: 1 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
