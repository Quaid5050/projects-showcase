import React, { useEffect, useState } from 'react';
import { FiSearch, FiPhone, FiGlobe, FiUsers } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../utils/api';

const ChurchDirectory = () => {
  const [churches, setChurches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/churches')
      .then(({ data }) => setChurches(data.churches))
      .catch(() => toast.error('Failed to load directory'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = churches.filter(c =>
    c.churchName.toLowerCase().includes(search.toLowerCase()) ||
    c.pastorName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{marginBottom:'28px'}}>
        <h1 style={{fontSize:'1.6rem',color:'var(--navy)',marginBottom:'6px'}}>Church Directory</h1>
        <p style={{color:'var(--text-light)'}}>Connect with pastors and churches throughout Cobb County.</p>
      </div>

      <div style={{background:'var(--white)',borderRadius:'12px',padding:'24px',boxShadow:'var(--shadow)',marginBottom:'24px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',background:'var(--off-white)',border:'2px solid #e5e7eb',borderRadius:'8px',padding:'12px 16px'}}>
          <FiSearch style={{color:'var(--gray)'}} />
          <input style={{border:'none',background:'transparent',outline:'none',flex:1,fontSize:'0.9rem'}} placeholder="Search by church name or pastor..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {loading ? <div className="spinner"></div> : (
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'20px'}}>
          {filtered.map(c => (
            <div key={c._id} style={{background:'var(--white)',borderRadius:'12px',padding:'24px',boxShadow:'var(--shadow)',borderTop:'4px solid var(--gold)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'16px'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'var(--navy)',color:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Montserrat',fontWeight:700,fontSize:'1.2rem',flexShrink:0}}>
                  {c.churchName[0]}
                </div>
                <div>
                  <h3 style={{color:'var(--navy)',fontSize:'0.95rem',marginBottom:'2px'}}>{c.churchName}</h3>
                  <p style={{color:'var(--gold)',fontSize:'0.82rem',fontWeight:600}}>Pastor {c.pastorName}</p>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
                {c.city && <p style={{fontSize:'0.82rem',color:'var(--gray)'}}>📍 {c.city}, {c.state}</p>}
                {c.denomination && <p style={{fontSize:'0.82rem',color:'var(--gray)'}}>⛪ {c.denomination}</p>}
                {c.congregationSize && <p style={{fontSize:'0.82rem',color:'var(--gray)'}}>👥 {c.congregationSize} members</p>}
              </div>
              {c.phone && (
                <a href={`tel:${c.phone}`} style={{display:'flex',alignItems:'center',gap:'6px',color:'var(--gold)',fontSize:'0.82rem',marginTop:'12px',fontWeight:600}}>
                  <FiPhone size={13} /> {c.phone}
                </a>
              )}
              {c.website && (
                <a href={c.website} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:'6px',color:'var(--navy)',fontSize:'0.82rem',marginTop:'4px',fontWeight:600}}>
                  <FiGlobe size={13} /> Website
                </a>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px',color:'var(--gray)'}}>
              <FiUsers size={40} style={{marginBottom:'12px'}} />
              <p>No churches found matching your search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChurchDirectory;
