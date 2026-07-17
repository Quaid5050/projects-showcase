import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { SearchIcon, CloseIcon } from '../../components/Icons';

const API = process.env.REACT_APP_API_URL || '/api';
const CATS = ['All', 'Beer', 'Spirits', 'Wine', 'Convenience'];

export default function Products() {
  const [params] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(params.get('cat') || 'All');
  const [search, setSearch] = useState(params.get('search') || '');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const q = new URLSearchParams();
    if (filter !== 'All') q.set('category', filter);
    if (search) q.set('search', search);
    axios.get(`${API}/products?${q.toString()}`).then(r => setProducts(r.data.data)).catch(() => {}).finally(() => setLoading(false));
  }, [filter, search]);

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">All Products</div>
          <div className="section-sub">Beer Store &middot; Liquor Store &middot; Convenience Store</div>
        </div>

        <div className="search-wrap" style={{ marginBottom: 24, boxShadow: 'none', border: '1.5px solid var(--gray-lt)', borderRadius: 'var(--r-md)' }}>
          <SearchIcon />
          <input className="search-input" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
          {search && <button className="btn-close" onClick={() => setSearch('')} style={{ border: 'none' }}><CloseIcon /></button>}
        </div>

        <div className="prod-filters">
          {CATS.map(c => <button key={c} className={`filter-btn${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>)}
        </div>

        {loading ? (
          <div className="empty-state"><div className="empty-state-title">Loading products...</div></div>
        ) : products.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-title">No products found</div>
            <div className="empty-state-sub">Try a different search or category</div>
          </div>
        ) : (
          <div className="prod-grid">
            {products.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}