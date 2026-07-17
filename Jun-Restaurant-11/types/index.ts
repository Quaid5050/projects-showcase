export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IMenuItem {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  category: ICategory | string;
  image?: string;
  isAvailable: boolean;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface IOrderItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface IOrder {
  _id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  items: IOrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentStatus: 'paid' | 'unpaid';
  orderStatus: 'new' | 'pending' | 'paid' | 'completed' | 'cancelled';
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  confirmationEmailSent: boolean;
  confirmationEmailSentAt?: string;
  adminEmailSent: boolean;
  adminEmailSentAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  notes: string;
}
