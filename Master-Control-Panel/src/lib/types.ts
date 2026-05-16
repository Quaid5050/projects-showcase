export type AdminUser = {
  id: string;
  name: string;
  email: string;
};

export type Restaurant = {
  id: string;
  name: string;
  restaurantKey: string;
  domain: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
  // Source DB settings (admin-only; sourceDbUri is never returned by the API)
  hasSourceDb?: boolean;
  sourceDbName?: string;
  sourceOrderCollection?: string;
  sourcePaymentStatusField?: string;
  sourcePaidValue?: string;
  sourceOrderNumberField?: string;
  sourceOrderTypeField?: string;
  sourceItemsField?: string;
};

export type RestaurantUser = {
  id: string;
  restaurantId: string;
  name: string;
  email: string;
  role: 'owner';
  isActive: boolean;
  createdAt?: string;
};

export type OrderItem = {
  name: string;
  quantity: number;
  price: number;
  notes?: string;
};

export type Order = {
  id: string;
  restaurantId: string;
  restaurantKey: string;
  sourceOrderId: string;
  orderNumber: string;
  customer: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
  orderType: 'delivery' | 'pickup';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  currency: string;
  paymentStatus: 'paid';
  orderStatus: 'new' | 'completed';
  paidAt: string;
  createdAt: string;
};

export type LoginResponse = {
  token: string;
  admin: AdminUser;
};

export type CreateRestaurantResponse = {
  restaurant: Restaurant;
  integrationApiKey: string;
};

export type RestaurantDetailsResponse = {
  restaurant: Restaurant;
  orders: Order[];
  users: RestaurantUser[];
};
