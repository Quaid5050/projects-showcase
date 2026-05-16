import React, { useState } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import {
  FiHome, FiUsers, FiPackage, FiCalendar, FiAlertTriangle,
  FiUser, FiLogOut, FiMenu, FiX
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './DashboardLayout.css';

const navItems = [
  { path: '/dashboard', icon: <FiHome />, label: 'Dashboard', exact: true },
  { path: '/dashboard/directory', icon: <FiUsers />, label: 'Church Directory' },
  { path: '/dashboard/resources', icon: <FiPackage />, label: 'Resources' },
  { path: '/dashboard/events', icon: <FiCalendar />, label: 'Events' },
  { path: '/dashboard/crisis', icon: <FiAlertTriangle />, label: 'Crisis Alerts' },
  { path: '/dashboard/profile', icon: <FiUser />, label: 'My Profile' },
];

const DashboardLayout = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="dash-layout">
      <aside className={`dash-sidebar ${sideOpen ? 'open' : ''}`}>
        <div className="dash-sidebar-inner">
          <div className="dash-brand">
            <Link to="/" className="dash-logo">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="rgba(212,168,83,0.15)"/>
                <circle cx="20" cy="14" r="5" stroke="#d4a853" strokeWidth="2" fill="none"/>
                <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#d4a853" strokeWidth="2" fill="none"/>
              </svg>
              <span>CCN</span>
            </Link>
          </div>

          <div className="dash-user">
            <div className="dash-avatar">{user?.pastorName?.[0] || 'P'}</div>
            <div>
              <p className="dash-name">{user?.pastorName}</p>
              <p className="dash-church">{user?.churchName}</p>
            </div>
          </div>

          <nav className="dash-nav">
            {navItems.map(item => (
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
          <div className="dash-topbar-right">
            <span className="dash-topbar-welcome">Welcome, Pastor {user?.pastorName?.split(' ')[0]}</span>
            <NavLink to="/dashboard/profile" className="dash-topbar-avatar">
              {user?.pastorName?.[0] || 'P'}
            </NavLink>
          </div>
        </header>
        <div className="dash-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
