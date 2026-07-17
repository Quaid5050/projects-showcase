import { Link } from 'react-router-dom';

export default function ServiceCard({ image, icon, title, description, to = '/services', className = '' }) {
  return (
    <article className={`service-card reveal ${className}`}>
      <div className="service-card-image">
        <img src={image} alt={title} loading="lazy" onError={e => e.target.style.opacity = 0.15} />
        <div className="service-card-image-overlay" aria-hidden="true" />
        <div className="service-card-badge" aria-hidden="true">{icon}</div>
      </div>
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-card-actions">
          <Link
            to="/contact"
            className="btn btn-primary btn-sm"
            aria-label={`Request estimate for ${title}`}
          >
            Request Estimate
          </Link>
          <Link
            to={to}
            className="btn btn-dark btn-sm"
            aria-label={`View details for ${title}`}
          >
            View Detail
          </Link>
        </div>
      </div>
    </article>
  );
}
