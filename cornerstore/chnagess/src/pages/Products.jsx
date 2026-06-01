import { useState } from 'react'
import './Products.css'

const products = [
  {
    id: 1, category: 'alcohol', label: 'LCBO Products',
    icon: '🍷', color: '#7c3aed',
    desc: 'Wide selection of wines, spirits, and imported beverages from the LCBO.',
    tags: ['Wine', 'Spirits', 'Imported', 'Ontario Select'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 2, category: 'alcohol', label: 'Beer Store',
    icon: '🍺', color: '#f5a623',
    desc: 'Full selection of domestic and imported beers, lagers, ales, and craft options.',
    tags: ['Domestic', 'Imported', 'Craft', 'Cans & Bottles'],
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80'
  },
  {
    id: 3, category: 'food', label: 'Grocery',
    icon: '🛒', color: '#2d6a2e',
    desc: 'Everyday grocery staples, canned goods, condiments, and pantry essentials.',
    tags: ['Pantry', 'Canned Goods', 'Condiments', 'Baking'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 4, category: 'food', label: 'Snacks',
    icon: '🍿', color: '#0e7490',
    desc: 'Chips, chocolates, candy, nuts, granola bars, and all your favourite snacks.',
    tags: ['Chips', 'Chocolate', 'Candy', 'Nuts & Bars'],
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 5, category: 'drinks', label: 'Soft Drinks',
    icon: '🥤', color: '#c0392b',
    desc: 'Coke, Pepsi, energy drinks, juices, sparkling water, iced teas, and more.',
    tags: ['Soda', 'Energy Drinks', 'Juice', 'Sparkling Water'],
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 6, category: 'drinks', label: 'Coffee & Hot Drinks',
    icon: '☕', color: '#92400e',
    desc: 'Fresh brewed coffee, hot chocolate, teas, and premium instant options.',
    tags: ['Fresh Coffee', 'Tea', 'Hot Chocolate', 'Instant'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 7, category: 'food', label: 'Dairy Products',
    icon: '🥛', color: '#0369a1',
    desc: 'Milk, cheese, butter, yogurt, eggs, and fresh dairy essentials.',
    tags: ['Milk', 'Cheese', 'Eggs', 'Yogurt'],
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 8, category: 'tobacco', label: 'Cigars & Cigarettes',
    icon: '🚬', color: '#374151',
    desc: 'Premium cigarettes and cigars from leading brands. Valid ID required.',
    tags: ['Cigarettes', 'Cigars', 'All Brands'],
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 9, category: 'tobacco', label: 'Vape Store',
    icon: '💨', color: '#6366f1',
    desc: 'Disposable vapes, pods, e-liquids, and accessories. 19+ only.',
    tags: ['Disposables', 'Pods', 'E-Liquid', 'Accessories'],
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 10, category: 'essentials', label: 'Toiletries',
    icon: '🧴', color: '#0891b2',
    desc: 'Shampoo, soap, toothpaste, razors, deodorant, and personal care items.',
    tags: ['Personal Care', 'Hygiene', 'Hair Care', 'Skin Care'],
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 11, category: 'essentials', label: 'Ice',
    icon: '🧊', color: '#164e63',
    desc: 'Bagged party ice, cube ice, and large ice bags perfect for events and BBQs.',
    tags: ['Party Ice', 'Cube Ice', 'Bag Ice'],
    image: 'https://images.unsplash.com/photo-1590430752967-d0e116909be1?q=80'
  },
  {
    id: 12, category: 'essentials', label: 'BBQ Tank',
    icon: '🔥', color: '#b91c1c',
    desc: 'Propane BBQ tank exchanges and refills. Keep your summer grilling going!',
    tags: ['Propane', 'Tank Exchange', 'BBQ', 'Refill'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=220&fit=crop&auto=format'
  },
  {
    id: 13, category: 'food', label: 'Fast Food & Daily Food',
    icon: '🍔', color: '#ea580c',
    desc: 'Ready-to-eat meals, sandwiches, hot dogs, and freshly prepared daily food.',
    tags: ['Ready-to-Eat', 'Sandwiches', 'Hot Food', 'Daily Specials'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=220&fit=crop&auto=format'
  },
]

const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'food', label: 'Food & Grocery' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'alcohol', label: 'LCBO & Beer' },
  { key: 'tobacco', label: 'Tobacco & Vape' },
  { key: 'essentials', label: 'Essentials' },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter)

  return (
    <div className="products-page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="container page-header-content">
          <span className="section-tag">Our Inventory</span>
          <h1 className="page-header-title">Products & <span>Categories</span></h1>
          <p className="page-header-sub">Everything from groceries to LCBO, snacks to toiletries — your complete one-stop shop.</p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="container filter-inner">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <section className="products-section">
        <div className="container">
          <div className="products-count">{filtered.length} categories found</div>
          <div className="products-grid">
            {filtered.map(product => (
              <div key={product.id} className="product-card" style={{ '--prod-color': product.color }}>

                {/* Full image replaces emoji area */}
                <div className="product-card-header">
                  <img
                    src={product.image}
                    alt={product.label}
                    loading="lazy"
                  />
                  <div className="product-img-overlay"></div>
                  {/* Small emoji badge on top of image */}
                  <span className="product-badge-emoji">{product.icon}</span>
                </div>

                <div className="product-card-body">
                  <h3 className="product-title">{product.label}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-tags">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="product-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="products-cta">
        <div className="container products-cta-inner">
          <div>
            <h3>Can't find what you're looking for?</h3>
            <p>Give us a call — we may have it or can special order it for you!</p>
          </div>
          <a href="tel:5196982600" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call (519) 698-2600
          </a>
        </div>
      </section>
    </div>
  )
}