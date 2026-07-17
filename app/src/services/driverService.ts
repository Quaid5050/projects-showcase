import { apiClient } from './api';
import { API } from '../constants/apiEndpoints';
import { Driver, DeliveryOrder } from '../types/order.types';

export const driverService = {
  async getDrivers(params?: { isActive?: boolean }): Promise<{ drivers: Driver[]; total: number }> {
    const res = await apiClient.get<{ data: { drivers: Driver[]; total: number } }>(
      API.DRIVERS,
      { params }
    );
    return res.data.data!;
  },

  async getDriverById(id: string): Promise<Driver> {
    const res = await apiClient.get<{ data: { driver: Driver } }>(API.DRIVER(id));
    return res.data.data!.driver;
  },

  async createDriver(input: {
    name: string;
    email: string;
    phone: string;
    vehicleType: string;
    vehicleNumber: string;
    password?: string;
  }): Promise<Driver> {
    const res = await apiClient.post<{ data: { driver: Driver } }>(API.DRIVERS, input);
    return res.data.data!.driver;
  },

  async updateDriver(id: string, input: Partial<Driver>): Promise<Driver> {
    const res = await apiClient.patch<{ data: { driver: Driver } }>(API.DRIVER(id), input);
    return res.data.data!.driver;
  },

  async getMyDeliveries(status?: string): Promise<{ deliveries: DeliveryOrder[]; total: number }> {
    const res = await apiClient.get<{ data: { deliveries: DeliveryOrder[]; total: number } }>(
      API.MY_DELIVERIES,
      { params: status ? { status } : undefined }
    );
    return res.data.data!;
  },

  async updateMyLocation(driverId: string, lat: number, lng: number): Promise<void> {
    await apiClient.patch(API.DRIVER(driverId), {
      currentLocation: { lat, lng },
    });
  },
};
