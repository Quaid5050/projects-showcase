import { Link } from 'react-router-dom';
import './ServiceCard.css';

export default function ServiceCard({ title, description, image, path, icon, price }) {
  return (
    <Link to={path} className="service-card" aria-label={`Learn more about ${title}`}>
      <img
        src={image}
        alt={`${title} - Pranvue Property Services`}
        className="service-card__img"
        loading="lazy"
      />
      <div className="service-card__overlay" />
      <div className="service-card__content">
        <div className="service-card__icon" aria-hidden="true">{icon}</div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
        {price && (
          <div className="service-card__price">Starting at {price}</div>
        )}
        <span className="service-card__cta">
          Learn More <span>→</span>
        </span>
      </div>
    </Link>
  );
}
