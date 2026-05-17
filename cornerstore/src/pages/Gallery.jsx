import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

// All 34 store images with category labels
const allPhotos = [
  { src: '/images/store-01.jpg', cat: 'exterior', label: 'Store Front' },
  { src: '/images/store-02.jpg', cat: 'exterior', label: 'Store Entrance' },
  { src: '/images/store-03.jpg', cat: 'exterior', label: 'Building Exterior' },
  { src: '/images/store-04.jpg', cat: 'exterior', label: 'Parking & Signage' },
  { src: '/images/store-05.jpg', cat: 'interior', label: 'Main Aisle' },
  { src: '/images/store-06.jpg', cat: 'interior', label: 'Store Interior' },
  { src: '/images/store-07.jpg', cat: 'products', label: 'Beverage Section' },
  { src: '/images/store-08.jpg', cat: 'products', label: 'Snacks & Candy' },
  { src: '/images/store-09.jpg', cat: 'products', label: 'Product Display' },
  { src: '/images/store-10.jpg', cat: 'products', label: 'Grocery Shelves' },
  { src: '/images/store-11.jpg', cat: 'interior', label: 'Store Layout' },
  { src: '/images/store-12.jpg', cat: 'products', label: 'Dairy & Essentials' },
  { src: '/images/store-13.jpg', cat: 'products', label: 'Drinks Fridge' },
  { src: '/images/store-14.jpg', cat: 'services', label: 'Lottery Counter' },
  { src: '/images/store-15.jpg', cat: 'services', label: 'OLG Lottery' },
  { src: '/images/store-16.jpg', cat: 'interior', label: 'Cash Counter' },
  { src: '/images/store-17.jpg', cat: 'exterior', label: 'Store Sign' },
  { src: '/images/store-18.jpg', cat: 'interior', label: 'Shopping Area' },
  { src: '/images/store-19.jpg', cat: 'products', label: 'Tobacco & Vape' },
  { src: '/images/store-20.jpg', cat: 'interior', label: 'Store Walkway' },
  { src: '/images/store-21.jpg', cat: 'products', label: 'Cold Beverages' },
  { src: '/images/store-22.jpg', cat: 'products', label: 'Grocery Items' },
  { src: '/images/store-23.jpg', cat: 'interior', label: 'Checkout Area' },
  { src: '/images/store-24.jpg', cat: 'exterior', label: 'Outdoor View' },
  { src: '/images/store-25.jpg', cat: 'services', label: 'Purolator Station' },
  { src: '/images/store-26.jpg', cat: 'products', label: 'Beer & LCBO' },
  { src: '/images/store-27.jpg', cat: 'interior', label: 'Store Shelving' },
  { src: '/images/store-28.jpg', cat: 'products', label: 'Snack Wall' },
  { src: '/images/store-29.jpg', cat: 'interior', label: 'Product Aisles' },
  { src: '/images/store-30.jpg', cat: 'exterior', label: 'Store at Night' },
  { src: '/images/store-31.jpg', cat: 'products', label: 'Fresh Items' },
  { src: '/images/store-32.jpg', cat: 'services', label: 'Service Area' },
  { src: '/images/store-33.jpg', cat: 'interior', label: 'Store Overview' },
  { src: '/images/store-34.jpg', cat: 'exterior', label: 'Welcome View' },
]

const filters = [
  { key: 'all', label: 'All Photos', count: allPhotos.length },
  { key: 'exterior', label: 'Exterior', count: allPhotos.filter(p => p.cat === 'exterior').length },
  { key: 'interior', label: 'Interior', count: allPhotos.filter(p => p.cat === 'interior').length },
  { key: 'products', label: 'Products', count: allPhotos.filter(p => p.cat === 'products').length },
  { key: 'services', label: 'Services', count: allPhotos.filter(p => p.cat === 'services').length },
]

const CloseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const ChevronLeft = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)
const ChevronRight = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)
const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
)
const ColumnsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="7" height="18"/><rect x="14" y="3" width="7" height="18"/>
  </svg>
)
const ZoomIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
)

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null) // index into filtered array
  const [layout, setLayout] = useState('masonry') // 'masonry' | 'grid'
  const [loaded, setLoaded] = useState({})

  const filtered = activeFilter === 'all' ? allPhotos : allPhotos.filter(p => p.cat === activeFilter)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % filtered.length)
  }, [filtered.length])

  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next])

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const handleImgLoad = (idx) => setLoaded(l => ({ ...l, [idx]: true }))

  return (
    <div className="gallery-page">
      {/* HEADER */}
      <div className="page-header gallery-header">
        <div className="gallery-header-bg">
          <div className="gallery-header-photos">
            {[1, 5, 9, 14, 17].map((n, i) => (
              <div key={i} className="gh-photo" style={{ animationDelay: `${i * 0.8}s` }}>
                <img src={`/images/store-${String(n).padStart(2,'0')}.jpg`} alt="" />
              </div>
            ))}
          </div>
          <div className="gallery-header-overlay"></div>
        </div>
        <div className="container page-header-content" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Visual Tour</span>
          <h1 className="page-header-title">Our <span>Gallery</span></h1>
          <p className="page-header-sub">Take a visual walk through Corner Store at Linwood — our products, services, and the place you love.</p>
          <div className="gallery-stats">
            <span><strong>{allPhotos.length}</strong> Photos</span>
            <span>·</span>
            <span><strong>4</strong> Categories</span>
            <span>·</span>
            <span>Corner Store at Linwood</span>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="gallery-controls">
        <div className="container gallery-controls-inner">
          <div className="gallery-filters">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => { setActiveFilter(f.key); setLightbox(null) }}
              >
                {f.label}
                <span className="filter-count">{f.count}</span>
              </button>
            ))}
          </div>
          <div className="layout-toggle">
            <button className={`layout-btn ${layout === 'masonry' ? 'active' : ''}`} onClick={() => setLayout('masonry')} title="Masonry">
              <ColumnsIcon />
            </button>
            <button className={`layout-btn ${layout === 'grid' ? 'active' : ''}`} onClick={() => setLayout('grid')} title="Grid">
              <GridIcon />
            </button>
          </div>
        </div>
      </div>

      {/* PHOTO GRID */}
      <section className="gallery-section">
        <div className="container">
          <div className={`photo-grid ${layout}`}>
            {filtered.map((photo, idx) => (
              <div
                key={photo.src}
                className={`photo-item ${loaded[idx] ? 'loaded' : ''}`}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  onLoad={() => handleImgLoad(idx)}
                />
                <div className="photo-overlay">
                  <div className="photo-zoom"><ZoomIcon /></div>
                  <div className="photo-label">{photo.label}</div>
                </div>
                <div className="photo-skeleton"></div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-photos">No photos in this category yet.</div>
          )}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="gallery-cta">
        <div className="container gallery-cta-inner">
          <div>
            <h3>Come See It In Person!</h3>
            <p>Photos don't do it justice — visit us at 5190 Ament Line A, Linwood, ON</p>
          </div>
          <div className="gallery-cta-btns">
            <a href="tel:5196982600" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </a>
            <Link to="/contact" className="btn btn-outline">Get Directions</Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}><CloseIcon /></button>

          <button className="lb-nav lb-prev" onClick={e => { e.stopPropagation(); prev() }}>
            <ChevronLeft />
          </button>
          <button className="lb-nav lb-next" onClick={e => { e.stopPropagation(); next() }}>
            <ChevronRight />
          </button>

          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <img
              key={filtered[lightbox].src}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].label}
              className="lb-image"
            />
            <div className="lb-footer">
              <div className="lb-label">{filtered[lightbox].label}</div>
              <div className="lb-counter">{lightbox + 1} / {filtered.length}</div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="lb-thumbs" onClick={e => e.stopPropagation()}>
            {filtered.map((p, i) => (
              <div
                key={p.src}
                className={`lb-thumb ${i === lightbox ? 'active' : ''}`}
                onClick={() => setLightbox(i)}
              >
                <img src={p.src} alt={p.label} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
