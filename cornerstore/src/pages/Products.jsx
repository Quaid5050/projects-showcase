import { useState } from 'react'
import './Products.css'

const products = [
  {
    id: 1, category: 'alcohol', label: 'LCBO Products',
    icon: '🍷', color: '#7c3aed',
    desc: 'Wide selection of wines, spirits, and imported beverages from the LCBO.',
    tags: ['Wine', 'Spirits', 'Imported', 'Ontario Select'],
    emoji: '🍷'
  },
  {
    id: 2, category: 'alcohol', label: 'Beer Store',
    icon: '🍺', color: '#f5a623',
    desc: 'Full selection of domestic and imported beers, lagers, ales, and craft options.',
    tags: ['Domestic', 'Imported', 'Craft', 'Cans & Bottles'],
    emoji: '🍺'
  },
  {
    id: 3, category: 'food', label: 'Grocery',
    icon: '🛒', color: '#2d6a2e',
    desc: 'Everyday grocery staples, canned goods, condiments, and pantry essentials.',
    tags: ['Pantry', 'Canned Goods', 'Condiments', 'Baking'],
    emoji: '🛒'
  },
  {
    id: 4, category: 'food', label: 'Snacks',
    icon: '🍿', color: '#0e7490',
    desc: 'Chips, chocolates, candy, nuts, granola bars, and all your favourite snacks.',
    tags: ['Chips', 'Chocolate', 'Candy', 'Nuts & Bars'],
    emoji: '🍿'
  },
  {
    id: 5, category: 'drinks', label: 'Soft Drinks',
    icon: '🥤', color: '#c0392b',
    desc: 'Coke, Pepsi, energy drinks, juices, sparkling water, iced teas, and more.',
    tags: ['Soda', 'Energy Drinks', 'Juice', 'Sparkling Water'],
    emoji: '🥤'
  },
  {
    id: 6, category: 'drinks', label: 'Coffee & Hot Drinks',
    icon: '☕', color: '#92400e',
    desc: 'Fresh brewed coffee, hot chocolate, teas, and premium instant options.',
    tags: ['Fresh Coffee', 'Tea', 'Hot Chocolate', 'Instant'],
    emoji: '☕'
  },
  {
    id: 7, category: 'food', label: 'Dairy Products',
    icon: '🥛', color: '#0369a1',
    desc: 'Milk, cheese, butter, yogurt, eggs, and fresh dairy essentials.',
    tags: ['Milk', 'Cheese', 'Eggs', 'Yogurt'],
    emoji: '🥛'
  },
  {
    id: 8, category: 'tobacco', label: 'Cigars & Cigarettes',
    icon: '🚬', color: '#374151',
    desc: 'Premium cigarettes and cigars from leading brands. Valid ID required.',
    tags: ['Cigarettes', 'Cigars', 'All Brands'],
    emoji: '🚬'
  },
  {
    id: 9, category: 'tobacco', label: 'Vape Store',
    icon: '💨', color: '#6366f1',
    desc: 'Disposable vapes, pods, e-liquids, and accessories. 19+ only.',
    tags: ['Disposables', 'Pods', 'E-Liquid', 'Accessories'],
    emoji: '💨'
  },
  {
    id: 10, category: 'essentials', label: 'Toiletries',
    icon: '🧴', color: '#0891b2',
    desc: 'Shampoo, soap, toothpaste, razors, deodorant, and personal care items.',
    tags: ['Personal Care', 'Hygiene', 'Hair Care', 'Skin Care'],
    emoji: '🧴'
  },
  {
    id: 11, category: 'essentials', label: 'Ice',
    icon: '🧊', color: '#164e63',
    desc: 'Bagged party ice, cube ice, and large ice bags perfect for events and BBQs.',
    tags: ['Party Ice', 'Cube Ice', 'Bag Ice'],
    emoji: '🧊'
  },
  {
    id: 12, category: 'essentials', label: 'BBQ Tank',
    icon: '🔥', color: '#b91c1c',
    desc: 'Propane BBQ tank exchanges and refills. Keep your summer grilling going!',
    tags: ['Propane', 'Tank Exchange', 'BBQ', 'Refill'],
    emoji: '🔥'
  },
  {
    id: 13, category: 'food', label: 'Fast Food & Daily Food',
    icon: '🍔', color: '#ea580c',
    desc: 'Ready-to-eat meals, sandwiches, hot dogs, and freshly prepared daily food.',
    tags: ['Ready-to-Eat', 'Sandwiches', 'Hot Food', 'Daily Specials'],
    emoji: '🍔'
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
                <div className="product-card-header" style={{ background: `${product.color}22` }}>
                  <div className="product-emoji">{product.emoji}</div>
                  <div className="product-color-bar" style={{ background: product.color }}></div>
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
