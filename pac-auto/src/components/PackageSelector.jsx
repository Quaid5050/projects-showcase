const packages = [
  {
    id: 'Basic',
    price: '4,999',
    description: 'Essential exterior wash + quick interior refresh for a clean daily look.',
    highlights: ['Exterior wash', 'Quick vacuum', 'Glass clean'],
  },
  {
    id: 'Premium',
    price: '7,999',
    description: 'Deep clean inside and out with premium finishing and protection.',
    highlights: ['Foam wash', 'Interior deep clean', 'Tire & trim finish'],
  },
  {
    id: 'Ultimate',
    price: '11,999',
    description: 'Showroom-level detailing with enhanced protection and refined finishing.',
    highlights: ['Full detail', 'Clay + polish prep', 'Premium protection'],
  },
]

function PackageSelector({ selectedPackage, onSelectPackage }) {
  return (
    <section className="package-section" aria-label="Package selection">
      <header className="package-section__head">
        <h2>Select Your Package</h2>
        <p>Choose a package to continue with booking.</p>
      </header>

      <div className="package-grid">
        {packages.map((pkg) => {
          const isActive = selectedPackage === pkg.id
          return (
            <button
              key={pkg.id}
              type="button"
              className={`package-card ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectPackage(pkg.id)}
            >
              <div className="package-card__top">
                <div className="package-card__title">{pkg.id}</div>
                <div className="package-card__price">
                  <span className="package-card__currency">PKR</span> {pkg.price}
                </div>
              </div>
              <div className="package-card__desc">{pkg.description}</div>
              <ul className="package-card__list" aria-hidden="true">
                {pkg.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default PackageSelector
