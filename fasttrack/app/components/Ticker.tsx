export default function Ticker() {
  const items = ['Power Racks', 'Custom Builds', 'Elite Training', 'Commercial Gyms', 'Fitness Equipment', 'World Class Design', 'Corporate Solutions', 'Athletic Coaching'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
