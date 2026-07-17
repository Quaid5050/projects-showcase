const STEPS = [
  { num:'01', icon:'📋', title:'Request a Free Estimate', desc:'Fill out our quick form or call us. We respond fast with an honest, upfront price.' },
  { num:'02', icon:'📅', title:'Choose a Pickup Time',    desc:'Pick a date and time that works for you. We work around your schedule.' },
  { num:'03', icon:'🚛', title:'We Remove the Junk',      desc:'Our professional crew arrives on time and handles all the heavy lifting.' },
  { num:'04', icon:'✨', title:'Enjoy a Clean Space',     desc:'Sit back and relax. We leave your property clean, cleared, and stress-free.' },
];

export default function ProcessSection() {
  return (
    <section className="section-pad" style={{ background:'#ffffff' }} aria-labelledby="process-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label" style={{ color:'var(--yellow-dark)' }}>How It Works</span>
          <h2 id="process-heading" style={{ color:'#111111' }}>4 Simple Steps</h2>
          <p style={{ color:'#555555' }}>Getting rid of junk has never been easier. Here's exactly what to expect.</p>
        </div>
        <div className="process-grid">
          {STEPS.map((s, i) => (
            <div key={s.num} className={`process-step reveal delay-${i + 1}`}>
              <div className="process-step-num" aria-hidden="true">{s.num}</div>
              <div style={{ fontSize:'1.5rem', marginBottom:'var(--space-3)' }} aria-hidden="true">{s.icon}</div>
              <h3 style={{ color:'#111111' }}>{s.title}</h3>
              <p style={{ color:'#555555' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
