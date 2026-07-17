import { create } from 'zustand';
import { orderService, OrderFilters } from '../services/orderService';
import { DeliveryOrder } from '../types/order.types';
import { OrderStatus } from '../constants/statusConfig';
import { getErrorMessage } from '../services/api';

interface OrderStore {
  orders: DeliveryOrder[];
  selectedOrder: DeliveryOrder | null;
  total: number;
  isLoading: boolean;
  error: string | null;

  fetchOrders: (filters?: OrderFilters) => Promise<void>;
  fetchOrderById: (id: string) => Promise<void>;
  createOrder: (input: Parameters<typeof orderService.createOrder>[0]) => Promise<DeliveryOrder>;
  updateOrder: (id: string, input: Parameters<typeof orderService.updateOrder>[1]) => Promise<void>;
  updateStatus: (id: string, status: OrderStatus, options?: { notes?: string; failedReason?: string }) => Promise<void>;
  assignDriver: (orderId: string, driverId: string) => Promise<void>;
  clearSelected: () => void;
  clearError: () => void;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],
  selectedOrder: null,
  total: 0,
  isLoading: false,
  error: null,

  fetchOrders: async (filters) => {
    set({ isLoading: true, error: null });
    try {
      const { orders, total } = await orderService.getOrders(filters);
      set({ orders, total, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
    }
  },

  fetchOrderById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const order = await orderService.getOrderById(id);
      set({ selectedOrder: order, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
    }
  },

  createOrder: async (input) => {
    set({ isLoading: true, error: null });
    try {
      const order = await orderService.createOrder(input);
      set((state) => ({
        orders: [order, ...state.orders],
        total: state.total + 1,
        isLoading: false,
      }));
      return order;
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
      throw error;
    }
  },

  updateOrder: async (id, input) => {
    set({ isLoading: true, error: null });
    try {
      const updated = await orderService.updateOrder(id, input);
      set((state) => ({
        orders: state.orders.map((o) => (o._id === id ? updated : o)),
        selectedOrder: state.selectedOrder?._id === id ? updated : state.selectedOrder,
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
      throw error;
    }
  },

  updateStatus: async (id, status, options) => {
    set({ isLoading: true, error: null });
    try {
      const updated = await orderService.updateStatus(id, status, options);
      set((state) => ({
        orders: state.orders.map((o) => (o._id === id ? updated : o)),
        selectedOrder: state.selectedOrder?._id === id ? updated : state.selectedOrder,
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
      throw error;
    }
  },

  assignDriver: async (orderId, driverId) => {
    set({ isLoading: true, error: null });
    try {
      const updated = await orderService.assignDriver(orderId, driverId);
      set((state) => ({
        orders: state.orders.map((o) => (o._id === orderId ? updated : o)),
        selectedOrder: state.selectedOrder?._id === orderId ? updated : state.selectedOrder,
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
      throw error;
    }
  },

  clearSelected: () => set({ selectedOrder: null }),
  clearError: () => set({ error: null }),
}));
