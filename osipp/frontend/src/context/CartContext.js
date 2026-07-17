import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState(null);

  const addItem = useCallback((product) => {
    setItems(prev => {
      const exists = prev.find(i => i._id === product._id);
      if (exists) return prev.map(i => i._id === product._id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(null), 2000);
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i._id !== id));
  }, []);

  const updateQty = useCallback((id, delta) => {
    setItems(prev => prev.map(i => {
      if (i._id !== id) return i;
      const newQty = i.qty + delta;
      return newQty < 1 ? null : { ...i, qty: newQty };
    }).filter(Boolean));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const deliveryFee = subtotal >= 60 ? 0 : subtotal > 0 ? 4.99 : 0;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, subtotal, deliveryFee, total, itemCount, toast }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
