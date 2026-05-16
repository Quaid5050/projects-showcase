import React, { useEffect, useState } from 'react';
import { FiCalendar, FiMapPin, FiClock, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const typeColors = { gathering: 'navy', prayer: 'gold', training: 'green', outreach: 'blue', leadership: 'red', other: 'gray' };

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/events?publicOnly=true')
      .then(({ data }) => setEvents(data.events))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Events & Gatherings</h1>
          <p>Stay connected through pastor gatherings, trainings, prayer events, and community outreach opportunities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-sm text-center">
          <span className="section-label">Building Relationships Through Connection</span>
          <h2 className="section-title">Building Relationships Through Consistent Connection</h2>
          <div className="divider divider-center"></div>
          <p className="section-subtitle">Healthy collaboration starts with healthy relationships.<br /> Our gatherings help pastors and ministry leaders <br />Build meaningful relationships,<br /> Share ideas and resources, <br />Pray together, <br />Collaborate on outreach, and <br />Strengthen unity throughout Cobb County.</p>
        </div>
      </section>

      <section className="section bg-off-white" style={{paddingTop:0}}>
        <div className="container">
          {loading ? <div className="spinner"></div> : events.length === 0 ? (
            <div className="text-center" style={{padding:'60px 0'}}>
              <FiCalendar size={48} style={{color:'var(--gray)',marginBottom:'16px'}} />
              <h3 style={{color:'var(--navy)'}}>No Upcoming Public Events</h3>
              <p style={{color:'var(--gray)',marginTop:'8px'}}>Check back soon or <Link to="/request-access" style={{color:'var(--gold)'}}>join the network</Link> to see member-only events.</p>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
              {events.map(ev => (
                <div key={ev._id} className="card" style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'0',overflow:'hidden'}}>
                  <div style={{background:'var(--navy)',padding:'24px 28px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minWidth:'100px'}}>
                    <span style={{color:'var(--gold)',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'1px'}}>
                      {new Date(ev.date).toLocaleDateString('en-US',{month:'short'})}
                    </span>
                    <span style={{color:'var(--white)',fontSize:'2rem',fontWeight:900,lineHeight:1}}>
                      {new Date(ev.date).getDate()}
                    </span>
                    <span style={{color:'rgba(255,255,255,0.5)',fontSize:'0.7rem'}}>
                      {new Date(ev.date).getFullYear()}
                    </span>
                  </div>
                  <div className="card-body" style={{padding:'24px 28px'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
                      <span className={`badge badge-${typeColors[ev.type] || 'gray'}`}>{ev.type}</span>
                    </div>
                    <h3 style={{color:'var(--navy)',marginBottom:'8px',fontSize:'1.15rem'}}>{ev.title}</h3>
                    <p style={{color:'var(--text-light)',marginBottom:'16px',fontSize:'0.9rem',lineHeight:1.6}}>{ev.description}</p>
                    <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
                      <span style={{display:'flex',alignItems:'center',gap:'6px',color:'var(--gray)',fontSize:'0.85rem'}}>
                        <FiClock size={14} />
                        {new Date(ev.date).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})}
                      </span>
                      <span style={{display:'flex',alignItems:'center',gap:'6px',color:'var(--gray)',fontSize:'0.85rem'}}>
                        {ev.isVirtual ? <FiVideo size={14} /> : <FiMapPin size={14} />}
                        {ev.isVirtual ? 'Virtual Event' : ev.location}
                      </span>
                      {ev.capacity && (
                        <span style={{color:'var(--gray)',fontSize:'0.85rem'}}>
                          Capacity: {ev.capacity} | Registered: {ev.registrations?.length || 0}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center" style={{marginTop:'40px'}}>
            <p style={{color:'var(--text-light)',marginBottom:'16px'}}>Member churches have access to all private events and can RSVP directly from the dashboard.</p>
            <Link to="/request-access" className="btn btn-primary">Join to Access All Events</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
