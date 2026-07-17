import { apiClient } from './api';
import { API } from '../constants/apiEndpoints';
import { DeliveryOrder, CreateOrderInput, ProofOfDelivery } from '../types/order.types';
import { OrderStatus } from '../constants/statusConfig';

export interface OrderFilters {
  status?: OrderStatus;
  driverId?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

export const orderService = {
  async getOrders(filters?: OrderFilters): Promise<{ orders: DeliveryOrder[]; total: number }> {
    const res = await apiClient.get<{ data: { orders: DeliveryOrder[]; total: number } }>(
      API.ORDERS,
      { params: filters }
    );
    return res.data.data!;
  },

  async getOrderById(id: string): Promise<DeliveryOrder> {
    const res = await apiClient.get<{ data: { order: DeliveryOrder } }>(API.ORDER(id));
    return res.data.data!.order;
  },

  async createOrder(input: CreateOrderInput): Promise<DeliveryOrder> {
    const res = await apiClient.post<{ data: { order: DeliveryOrder } }>(API.ORDERS, input);
    return res.data.data!.order;
  },

  async updateOrder(id: string, input: Partial<CreateOrderInput>): Promise<DeliveryOrder> {
    const res = await apiClient.patch<{ data: { order: DeliveryOrder } }>(API.ORDER(id), input);
    return res.data.data!.order;
  },

  async updateStatus(id: string, status: OrderStatus, options?: { notes?: string; failedReason?: string }): Promise<DeliveryOrder> {
    const res = await apiClient.patch<{ data: { order: DeliveryOrder } }>(
      API.ORDER_STATUS(id),
      { status, ...options }
    );
    return res.data.data!.order;
  },

  async assignDriver(orderId: string, driverId: string): Promise<DeliveryOrder> {
    const res = await apiClient.patch<{ data: { order: DeliveryOrder } }>(
      API.ORDER_ASSIGN_DRIVER(orderId),
      { driverId }
    );
    return res.data.data!.order;
  },

  async submitProof(orderId: string, formData: FormData): Promise<ProofOfDelivery> {
    const res = await apiClient.post<{ data: { proof: ProofOfDelivery } }>(
      API.ORDER_PROOF(orderId),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return res.data.data!.proof;
  },

  async getProof(orderId: string): Promise<ProofOfDelivery> {
    const res = await apiClient.get<{ data: { proof: ProofOfDelivery } }>(
      API.ORDER_PROOF(orderId)
    );
    return res.data.data!.proof;
  },
};
