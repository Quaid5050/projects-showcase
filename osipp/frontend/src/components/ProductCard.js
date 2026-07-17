import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PlusIcon, CheckIcon, BottleSVG } from './Icons';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const hasImage = product.image && !imgError;

  return (
    <div className="prod-card">
      <div className="prod-img-wrap">
        {product.badge && <span className={`prod-badge${product.badge === 'Sale' ? ' sale' : ''}`}>{product.badge}</span>}
        {hasImage ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        ) : (
          <BottleSVG cat={product.category} />
        )}
      </div>
      <div className="prod-body">
        <div className="prod-category">{product.category} &middot; {product.store}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-volume">{product.subCategory} &middot; {product.volume}</div>
        <div className="prod-footer">
          <div className="prod-price"><sup>$</sup>{product.price.toFixed(2)}</div>
          <button className={`btn-add${added ? ' added' : ''}`} onClick={handleAdd} aria-label="Add to cart">
            {added ? <CheckIcon /> : <PlusIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}