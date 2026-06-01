import './Menu.css'

const menuSections = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    emoji: '🍟',
    color: '#f5a623',
    bgColor: 'rgba(245,166,35,0.08)',
    borderColor: 'rgba(245,166,35,0.3)',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&h=400&fit=crop&auto=format',
    items: [
      { name: 'French Fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=150&fit=crop&auto=format' },
      { name: 'Potato Wedges', image: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=200&h=150&fit=crop&auto=format' },
      { name: 'Onion Rings', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=200&h=150&fit=crop&auto=format' },
      { name: 'Mozzarella Sticks', image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=1740&auto=format' },
      { name: 'Jalapeno Poppers', image: 'https://images.unsplash.com/photo-1579888944884-c7fc5a553848?q=80&w=774&auto=format' },
      { name: 'Fried Pickles', image: 'https://images.unsplash.com/photo-1601768472535-bb98048932c7?q=80&w=2231&auto=format' },
      { name: 'Samosa', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=150&fit=crop&auto=format' },
      { name: 'Dumplings', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=200&h=150&fit=crop&auto=format' },
      { name: 'Spring Rolls', image: 'https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=1740&auto=format' },
      { name: 'Poutine', image: 'https://images.unsplash.com/photo-1647482770207-4e8f5ba7b33e?q=80&w=687&auto=format' },
      { name: 'Omelette Ham Sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=150&fit=crop&auto=format' },
      { name: 'Burger (Chicken/Fish/Beef)', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=150&fit=crop&auto=format' },
      { name: 'Egg Muffin', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=150&fit=crop&auto=format' },
    ],
    note: 'Our food contains nuts and dairy products. Please ask for ingredients if you have allergies.'
  },
  {
    id: 'drinks',
    title: 'Drinks & Refreshments',
    emoji: '🥤',
    color: '#2d6a2e',
    bgColor: 'rgba(45,106,46,0.08)',
    borderColor: 'rgba(45,106,46,0.3)',
    items: [
      { name: 'Fresh Lemonade', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=150&fit=crop&auto=format' },
      { name: 'Bubble Tea (Popping Boba / Mango Jelly / Jelly Bubble)', image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=200&h=150&fit=crop&auto=format' },
      { name: 'Flavored Slush (Mango/Taro/Banana/Watermelon/Pineapple/Honeydew/Strawberry...)', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=200&h=150&fit=crop&auto=format' },
      { name: 'Milk Shakes (Mango/Strawberry/Chocolate/Vanilla/Almond/Rose/Caramel)', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=150&fit=crop&auto=format' },
      { name: 'Smoothies (Mixed Berries / Mango)', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200&h=150&fit=crop&auto=format' },
    ]
  },
  {
    id: 'cuisine',
    title: 'Indian & Chinese Cuisine',
    emoji: '🍛',
    color: '#ea580c',
    bgColor: 'rgba(234,88,12,0.08)',
    borderColor: 'rgba(234,88,12,0.3)',
    subsections: [
      {
        label: 'Indian Cuisine',
        items: [
          { name: 'Butter Chicken', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&h=150&fit=crop&auto=format' },
          { name: 'Shahi Paneer', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=150&fit=crop&auto=format' },
          { name: 'Kadai Paneer', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=150&fit=crop&auto=format' },
          { name: 'Kadai Chicken', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=150&fit=crop&auto=format' },
          { name: 'Dal Makhni', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=150&fit=crop&auto=format' },
        ]
      },
      {
        label: 'Chinese',
        items: [
          { name: 'CT / JP Fried Rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=150&fit=crop&auto=format' },
          { name: 'CT / JP Fried Noodles', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=200&h=150&fit=crop&auto=format' },
          { name: 'Sweet & Sour Chicken Balls', image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=200&h=150&fit=crop&auto=format' },
        ]
      }
    ],
    note: 'Our food contains nuts and dairy products. Please ask for ingredients if you have allergies.'
  },
  {
    id: 'dinner',
    title: 'Dinner & More',
    emoji: '🍽️',
    color: '#7c3aed',
    bgColor: 'rgba(124,58,237,0.08)',
    borderColor: 'rgba(124,58,237,0.3)',
    subsections: [
      {
        label: 'Dinner',
        items: [
          { name: 'Chicken (Strips with Salad, Fries & Dips)', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&h=150&fit=crop&auto=format' },
          { name: 'Fish (Strips with Salad, Fries & Tartar Sauce)', image: 'https://images.unsplash.com/photo-1576422446362-5ddfa42e4693?q=80&w=1740&auto=format' },
          { name: 'Chicken Wings (3rd Degree/Buffalo/Honey Garlic/Creamy Garlic/Sweet Chili/BBQ)', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=200&h=150&fit=crop&auto=format' },
        ]
      },
      {
        label: 'Family Dinner',
        items: [
          { name: '9 Piece Dinner (Chicken Strips, 1 Family Fries, 1 Medium Gravy & Large Salad)', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=200&h=150&fit=crop&auto=format' },
          { name: '5 Piece Dinner (Fish Strips, 1 Family Fries, Medium Gravy & Large Salad)', image: 'https://images.unsplash.com/photo-1620646146961-fb8c077b6b61?q=80&w=1740&auto=format' },
          { name: 'Platter (3pcs Fish / 5pcs Chicken, Jalapeno Poppers, Samosa, Spring Roll, Mozzarella Sticks, Fried Pickle, Dips & Pops)', image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=200&h=150&fit=crop&auto=format' },
        ]
      },
      {
        label: 'Soups',
        items: [
          { name: 'Classic Chicken Noodle', image: 'https://images.unsplash.com/photo-1598946228118-82f3dfe170bf?q=80&w=1740&auto=format' },
          { name: 'Creamy Broccoli', image: 'https://images.unsplash.com/photo-1768204039572-9e62db7b39fd?q=80&w=1740&auto=format' },
          { name: 'Tomato Tortellini', image: 'https://images.unsplash.com/photo-1757625620914-1f686e8d15b5?q=80&w=870&auto=format' },
        ]
      },
      {
        label: 'Subs & Wraps',
        items: [
          { name: 'Sub (Assorted / Ham & Cheese / Summer Sausage)', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&h=150&fit=crop&auto=format' },
          { name: 'Chicken Caesar Wrap', image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=200&h=150&fit=crop&auto=format' },
        ]
      }
    ],
    note: 'Our food contains nuts and dairy products. Please ask for ingredients if you have allergies.'
  }
]

export default function Menu() {
  return (
    <div className="menu-page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-bg"></div>
        <div className="container page-header-content">
          <span className="section-tag">Food Menu</span>
          <h1 className="page-header-title">Our <span>Menu</span></h1>
          <p className="page-header-sub">Fresh, delicious food made with care — dine in or take out from Corner Store at Linwood.</p>
        </div>
      </div>

      {/* MENU SECTIONS */}
      <div className="menu-content">
        <div className="container">
          {menuSections.map(section => (
            <section key={section.id} className="menu-section" style={{ '--sec-color': section.color, '--sec-bg': section.bgColor, '--sec-border': section.borderColor }}>
              <div className="menu-section-header">
                <div className="menu-section-icon">{section.emoji}</div>
                <div>
                  <h2 className="menu-section-title">{section.title}</h2>
                </div>
              </div>

              {/* Simple items (no subsections) */}
              {section.items && (
                <div className="menu-items-grid">
                  {section.items.map((item, i) => (
                    <div key={i} className="menu-item-card">
                      <div className="menu-item-img">
                        <img src={item.image} alt={item.name} loading="lazy" onError={e => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=150&fit=crop' }} />
                      </div>
                      <div className="menu-item-name">{item.name}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.map((sub, si) => (
                <div key={si} className="menu-subsection">
                  <h3 className="menu-sub-title">{sub.label}</h3>
                  <div className="menu-items-grid">
                    {sub.items.map((item, i) => (
                      <div key={i} className="menu-item-card">
                        <div className="menu-item-img">
                          <img src={item.image} alt={item.name} loading="lazy" onError={e => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=150&fit=crop' }} />
                        </div>
                        <div className="menu-item-name">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {section.note && (
                <div className="menu-allergy-note">
                  ⚠️ {section.note}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="menu-cta">
        <div className="container menu-cta-inner">
          <div>
            <h3>Ready to Order?</h3>
            <p>Call us ahead or visit us in store — we'll have it ready for you!</p>
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
