import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiPackage, FiCalendar, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [evRes, crRes] = await Promise.all([
          api.get('/events'),
          api.get('/crisis')
        ]);
        setEvents(evRes.data.events?.slice(0, 3) || []);
        setAlerts(crRes.data.alerts?.slice(0, 3) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const quickLinks = [
    { icon: <FiUsers size={24} />, label: 'Church Directory', desc: 'Connect with other churches', path: '/dashboard/directory' },
    { icon: <FiPackage size={24} />, label: 'Resources', desc: 'Share and find resources', path: '/dashboard/resources' },
    { icon: <FiCalendar size={24} />, label: 'Events', desc: 'Upcoming gatherings', path: '/dashboard/events' },
    { icon: <FiAlertTriangle size={24} />, label: 'Crisis Alerts', desc: 'Active response needs', path: '/dashboard/crisis', highlight: alerts.length > 0 },
  ];

  return (
    <div className="dashboard-page">
      {/* Welcome Banner */}
      <div className="dash-welcome">
        <div className="dash-welcome-content">
          <h1>Welcome to the Network</h1>
          <p>
            Thank you for being part of a growing movement of churches working together throughout Cobb County.
            Use your dashboard to update your church profile, share resources, submit needs, view alerts, and connect with other churches.
            Together, we can create stronger impact throughout our community.
          </p>
        </div>
        <div className="dash-welcome-church">
          <div className="dash-welcome-avatar">{user?.pastorName?.[0]}</div>
          <div>
            <p className="fw-bold">{user?.churchName}</p>
            <p className="text-sm">Pastor {user?.pastorName}</p>
            <Link to="/dashboard/profile" className="btn btn-sm btn-outline" style={{marginTop:'10px'}}>
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="dash-grid" style={{marginTop:'28px'}}>
        {quickLinks.map((q, i) => (
          <Link key={i} to={q.path} className={`dash-quick-card ${q.highlight ? 'highlight' : ''}`}>
            <div className="dash-quick-icon">{q.icon}</div>
            <div>
              <h3>{q.label}</h3>
              <p>{q.desc}</p>
            </div>
            <FiArrowRight className="dash-quick-arrow" />
            {q.highlight && <span className="dash-badge">{alerts.length}</span>}
          </Link>
        ))}
      </div>

      <div className="dash-two-col" style={{marginTop:'32px'}}>
        {/* Upcoming Events */}
        <div className="dash-card">
          <div className="dash-card-header">
            <h2><FiCalendar /> Upcoming Events</h2>
            <Link to="/dashboard/events" className="view-all">View All</Link>
          </div>
          {loading ? <div className="spinner"></div> : events.length === 0 ? (
            <p className="empty-state">No upcoming events. Check back soon.</p>
          ) : events.map(ev => (
            <div key={ev._id} className="dash-list-item">
              <div className="event-date-box">
                <span>{new Date(ev.date).toLocaleDateString('en-US',{month:'short'})}</span>
                <strong>{new Date(ev.date).getDate()}</strong>
              </div>
              <div>
                <p className="item-title">{ev.title}</p>
                <p className="item-sub">{ev.location || (ev.isVirtual ? 'Virtual Event' : '')}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Crisis Alerts */}
        <div className="dash-card">
          <div className="dash-card-header">
            <h2><FiAlertTriangle /> Active Crisis Alerts</h2>
            <Link to="/dashboard/crisis" className="view-all">View All</Link>
          </div>
          {loading ? <div className="spinner"></div> : alerts.length === 0 ? (
            <p className="empty-state">No active alerts at this time.</p>
          ) : alerts.map(alert => (
            <div key={alert._id} className="dash-list-item crisis-item">
              <div className={`urgency-dot urgency-${alert.urgency}`}></div>
              <div>
                <p className="item-title">{alert.title}</p>
                <p className="item-sub">{alert.type} • {alert.urgency} urgency</p>
              </div>
              <span className={`badge badge-${alert.urgency === 'critical' ? 'red' : alert.urgency === 'high' ? 'yellow' : 'gray'}`}>
                {alert.urgency}
              </span>
            </div>
          ))}
          <Link to="/dashboard/crisis" className="btn btn-sm btn-navy" style={{marginTop:'16px'}}>
            View & Respond to Alerts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
