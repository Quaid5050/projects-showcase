import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiUsers,
  FiClipboard,
  FiPackage,
  FiAlertTriangle,
  FiCalendar,
  FiBookOpen
} from 'react-icons/fi';

import api from '../../utils/api';
import './AdminDashboard.css';

const AdminDashboard = () => {

  const [stats, setStats] = useState(null);
  const [pendingApps, setPendingApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const [statsRes, appsRes] = await Promise.all([
          api.get('/admin/stats'),
          api.get('/admin/applications')
        ]);

        setStats(statsRes.data.stats);

        setPendingApps(
          appsRes.data.applications?.slice(0, 5) || []
        );

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }

    };

    fetchData();

  }, []);

  const statCards = stats ? [

    {
      icon: <FiUsers />,
      label: 'Approved Churches',
      value: stats.totalChurches,
      color: '#3b82f6',
      link: '/admin/churches'
    },

    {
      icon: <FiClipboard />,
      label: 'Pending Applications',
      value: stats.pendingApps,
      color: '#f59e0b',
      link: '/admin/applications',
      alert: stats.pendingApps > 0
    },

    {
      icon: <FiPackage />,
      label: 'Active Resources',
      value: stats.totalResources,
      color: '#10b981',
      link: '/admin/resources'
    },

    {
      icon: <FiAlertTriangle />,
      label: 'Active Crisis Alerts',
      value: stats.activeAlerts,
      color: '#ef4444',
      link: '/admin/crisis',
      alert: stats.activeAlerts > 0
    },

    {
      icon: <FiCalendar />,
      label: 'Upcoming Events',
      value: stats.upcomingEvents,
      color: '#8b5cf6',
      link: '/admin/events'
    },

    {
      icon: <FiBookOpen />,
      label: 'Published Stories',
      value: stats.publishedStories,
      color: '#d4a853',
      link: '/admin/stories'
    },

  ] : [];

  return (

    <div className="admin-dashboard">

      {/* HEADER */}

      <div className="admin-page-header">

        <div>

          <h1>
            Admin Dashboard
          </h1>

          <p>
            Manage churches, applications, resources,
            events, crisis alerts, and stories throughout
            the network.
          </p>

        </div>

      </div>

      {loading ? (

        <div className="spinner"></div>

      ) : (

        <>

          {/* STATS */}

          <div className="admin-stats-grid">

            {statCards.map((s, i) => (

              <Link
                key={i}
                to={s.link}
                className={`admin-stat-card ${s.alert ? 'alert-card' : ''}`}
              >

                <div
                  className="admin-stat-icon"
                  style={{
                    background: s.color + '15',
                    color: s.color
                  }}
                >
                  {s.icon}
                </div>

                <div className="admin-stat-content">

                  <p className="admin-stat-value">
                    {s.value}
                  </p>

                  <p className="admin-stat-label">
                    {s.label}
                  </p>

                </div>

                {s.alert && (
                  <div className="admin-alert-dot"></div>
                )}

              </Link>

            ))}

          </div>

          {/* APPLICATIONS */}

          {pendingApps.length > 0 && (

            <div
              className="admin-section"
              style={{ marginTop: '32px' }}
            >

              <div className="admin-section-header">

                <h2>
                  Pending Applications

                  <span className="badge badge-yellow">
                    {pendingApps.length}
                  </span>
                </h2>

                <Link
                  to="/admin/applications"
                  className="view-all-link"
                >
                  View All →
                </Link>

              </div>

              <div className="admin-table-wrapper">

                <table className="admin-table">

                  <thead>

                    <tr>
                      <th>Pastor / Church</th>
                      <th>Email</th>
                      <th>Denomination</th>
                      <th>Applied</th>
                      <th>Action</th>
                    </tr>

                  </thead>

                  <tbody>

                    {pendingApps.map(app => (

                      <tr key={app._id}>

                        <td>

                          <p className="table-primary">
                            {app.pastorName}
                          </p>

                          <p className="table-secondary">
                            {app.churchName}
                          </p>

                        </td>

                        <td>{app.email}</td>

                        <td>
                          {app.denomination || '—'}
                        </td>

                        <td>
                          {new Date(app.createdAt).toLocaleDateString()}
                        </td>

                        <td>

                          <Link
                            to="/admin/applications"
                            className="btn btn-sm btn-primary"
                          >
                            Review
                          </Link>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          )}

        </>

      )}

    </div>

  );

};

export default AdminDashboard;