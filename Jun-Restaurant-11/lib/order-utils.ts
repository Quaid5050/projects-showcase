// Generates a human-readable order number like BP-20240625-0042
export function generateOrderNumber(): string {
  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BP-${dateStr}-${rand}`;
}

export const TAX_RATE = 0.05; // 5% GST

export function calculateOrderTotals(items: { price: number; quantity: number }[]): {
  subtotal: number;
  tax: number;
  total: number;
} {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;
  return { subtotal: Math.round(subtotal * 100) / 100, tax, total };
}
