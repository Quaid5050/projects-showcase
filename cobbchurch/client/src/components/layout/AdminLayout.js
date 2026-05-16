import React, { useState } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import {
  FiHome, FiUsers, FiClipboard, FiPackage,
  FiCalendar, FiBookOpen, FiAlertTriangle,
  FiLogOut, FiMenu, FiX, FiSettings
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './DashboardLayout.css';
import './AdminLayout.css';

const adminNav = [
  { path: '/admin', icon: <FiHome />, label: 'Dashboard', exact: true },
  { path: '/admin/applications', icon: <FiClipboard />, label: 'Applications' },
  { path: '/admin/churches', icon: <FiUsers />, label: 'Churches' },
  { path: '/admin/resources', icon: <FiPackage />, label: 'Resources' },
  { path: '/admin/events', icon: <FiCalendar />, label: 'Events' },
  { path: '/admin/stories', icon: <FiBookOpen />, label: 'Pastor Stories' },
  { path: '/admin/crisis', icon: <FiAlertTriangle />, label: 'Crisis Alerts' },
];

const AdminLayout = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="dash-layout admin-layout">
      <aside className={`dash-sidebar admin-sidebar ${sideOpen ? 'open' : ''}`}>
        <div className="dash-sidebar-inner">
          <div className="dash-brand">
            <Link to="/" className="dash-logo">
              <FiSettings size={22} color="#d4a853" />
              <span>CCN Admin</span>
            </Link>
          </div>
          <div className="dash-user">
            <div className="dash-avatar admin-avatar">A</div>
            <div>
              <p className="dash-name">{user?.pastorName}</p>
              <p className="dash-church" style={{color:'var(--gold)',opacity:1,fontWeight:600,fontSize:'0.7rem',textTransform:'uppercase',letterSpacing:'1px'}}>
                {user?.role === 'superadmin' ? 'Super Admin' : 'Admin'}
              </p>
            </div>
          </div>
          <nav className="dash-nav">
            {adminNav.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `dash-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setSideOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="dash-sidebar-footer">
            <NavLink to="/dashboard" className="dash-nav-item" style={{marginBottom:'8px'}}>
              <FiUsers /> Member View
            </NavLink>
            <button className="dash-logout" onClick={handleLogout}>
              <FiLogOut /> Logout
            </button>
          </div>
        </div>
      </aside>

      {sideOpen && <div className="dash-overlay" onClick={() => setSideOpen(false)} />}

      <main className="dash-main">
        <header className="dash-topbar">
          <button className="dash-menu-btn" onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
          <div style={{fontFamily:'Montserrat',fontWeight:700,color:'var(--navy)',fontSize:'0.9rem'}}>
            Admin Panel
          </div>
          <div className="dash-topbar-right">
            <span className="dash-topbar-welcome">{user?.email}</span>
            <div className="dash-topbar-avatar admin-avatar">A</div>
          </div>
        </header>
        <div className="dash-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
