'use client';

import React, { createContext, useContext, useEffect, useReducer, useCallback } from 'react';
import { CartItem, CustomerDetails } from '@/types';

interface CartState {
  items: CartItem[];
  customerDetails: CustomerDetails;
}

type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'REMOVE_ITEM'; menuItemId: string }
  | { type: 'UPDATE_QUANTITY'; menuItemId: string; quantity: number }
  | { type: 'SET_CUSTOMER'; details: CustomerDetails }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; state: CartState };

interface CartContextValue {
  items: CartItem[];
  customerDetails: CustomerDetails;
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (menuItemId: string) => void;
  updateQuantity: (menuItemId: string, quantity: number) => void;
  setCustomerDetails: (details: CustomerDetails) => void;
  clearCart: () => void;
}

const defaultCustomer: CustomerDetails = {
  name: '',
  email: '',
  phone: '',
  notes: '',
};

const initialState: CartState = {
  items: [],
  customerDetails: defaultCustomer,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'HYDRATE':
      return action.state;

    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.menuItemId === action.item.menuItemId);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.menuItemId === action.item.menuItemId
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.menuItemId !== action.menuItemId) };

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.menuItemId !== action.menuItemId) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.menuItemId === action.menuItemId ? { ...i, quantity: action.quantity } : i
        ),
      };
    }

    case 'SET_CUSTOMER':
      return { ...state, customerDetails: action.details };

    case 'CLEAR_CART':
      return { ...state, items: [], customerDetails: defaultCustomer };

    default:
      return state;
  }
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'burnaby_palace_cart';
const TAX_RATE = 0.05;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CartState = JSON.parse(stored);
        dispatch({ type: 'HYDRATE', state: parsed });
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = useCallback((item: CartItem) => dispatch({ type: 'ADD_ITEM', item }), []);
  const removeItem = useCallback((menuItemId: string) => dispatch({ type: 'REMOVE_ITEM', menuItemId }), []);
  const updateQuantity = useCallback((menuItemId: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', menuItemId, quantity }), []);
  const setCustomerDetails = useCallback((details: CustomerDetails) =>
    dispatch({ type: 'SET_CUSTOMER', details }), []);
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        customerDetails: state.customerDetails,
        itemCount,
        subtotal,
        tax,
        total,
        addItem,
        removeItem,
        updateQuantity,
        setCustomerDetails,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
