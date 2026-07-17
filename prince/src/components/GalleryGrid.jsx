import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import './GalleryGrid.css';

const categories = ['All', 'House Washing', 'Driveways', 'Patios', 'Siding', 'Walkways', 'Before & After'];

const galleryImages = [
  { id: 1,  category: 'House Washing', src: '/images/gallery-1.png',  alt: 'House washing result' },
  { id: 2,  category: 'Driveways',     src: '/images/gallery-2.png',  alt: 'Clean driveway after pressure washing' },
  { id: 3,  category: 'Patios',        src: '/images/gallery-3.png',  alt: 'Clean patio deck' },
  { id: 4,  category: 'Before & After',src: '/images/gallery-4.png',  alt: 'Before and after pressure washing' },
  { id: 5,  category: 'Siding',        src: '/images/gallery-5.png',  alt: 'Clean home siding' },
  { id: 6,  category: 'House Washing', src: '/images/gallery-6.png',  alt: 'Exterior house washing' },
  { id: 7,  category: 'Walkways',      src: '/images/gallery-7.png',  alt: 'Clean walkway' },
  { id: 8,  category: 'Driveways',     src: '/images/gallery-8.png',  alt: 'Pressure washed driveway' },
  { id: 9,  category: 'Before & After',src: '/images/gallery-9.png',  alt: 'Property transformation' },
  { id: 10, category: 'Patios',        src: '/images/gallery-10.png', alt: 'Refreshed outdoor patio' },
  { id: 11, category: 'Siding',        src: '/images/gallery-11.png', alt: 'Soft washed siding' },
  { id: 12, category: 'Walkways',      src: '/images/gallery-12.png', alt: 'Cleaned pathway' },
];

export default function GalleryGrid({ limit }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = galleryImages.filter(
    (img) => activeFilter === 'All' || img.category === activeFilter
  );

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="gallery-grid-wrapper">
      {/* Filter Buttons */}
      <div className="gallery-filter" role="group" aria-label="Gallery filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
            aria-pressed={activeFilter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {displayed.map((img, i) => (
          <AnimatedSection key={img.id} animation="reveal-scale" delay={i * 0.06}>
            <div
              className="gallery-item"
              onClick={() => setLightbox(img)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item__overlay">
                <div className="gallery-item__overlay-icon" aria-hidden="true">🔍</div>
              </div>
              <div className="gallery-item__category">{img.category}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="gallery-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
          aria-modal="true"
        >
          <button
            className="gallery-lightbox__close"
            aria-label="Close lightbox"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div
            className="gallery-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="gallery-lightbox__caption">
              <span className="gallery-lightbox__category">{lightbox.category}</span>
              <p>{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
