export default function PageHero({ image, label, title, subtitle, alt = '' }) {
  return (
    <section className="page-hero" aria-label={`${title} — hero`}>

      {/* Background image */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src={image}
          alt={alt || ''}
          loading="lazy"
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Layered overlays — CSS ::before handles left gradient, this handles bottom fade */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Text content — always left-aligned, sits above overlays */}
      <div className="page-hero-content">
        {label && <span className="label">{label}</span>}
        <div className="page-hero-line" aria-hidden="true" />
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
