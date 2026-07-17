const REASONS = [
  { icon:'⚡', title:'Fast Response',            desc:'We respond quickly and offer same-day or next-day service in most cases.' },
  { icon:'💰', title:'Honest Pricing',           desc:'No hidden fees. No surprises. Upfront estimates before any work begins.' },
  { icon:'🏆', title:'Reliable Service',         desc:'We show up on time, every time. Dependable, professional, and efficient.' },
  { icon:'😊', title:'Customer Satisfaction',    desc:"We don't leave until the job is done right. Your satisfaction is everything." },
  { icon:'🏠', title:'Residential & Commercial', desc:'We serve homeowners, rental properties, businesses, and commercial spaces.' },
  { icon:'🔑', title:'Property Mgr Friendly',    desc:'Trusted by property managers for fast, reliable cleanouts between tenants.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad" style={{ background:'#111111' }} aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Why Us</span>
          <h2 id="why-heading" style={{ color:'#ffffff' }}>
            Why Choose <span className="txt-yellow">Junk Pro Service</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.6)' }}>We're not just another junk hauler — we're your trusted local cleanup partner.</p>
        </div>
        <div className="why-cards-grid">
          {REASONS.map((r, i) => (
            <div key={r.title} className={`why-card reveal delay-${(i % 3) + 1}`}>
              <div className="why-card-icon" aria-hidden="true">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
