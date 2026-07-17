import { create } from 'zustand';
import { driverService } from '../services/driverService';
import { Driver, DeliveryOrder } from '../types/order.types';
import { getErrorMessage } from '../services/api';

interface DriverStore {
  drivers: Driver[];
  selectedDriver: Driver | null;
  assignedDeliveries: DeliveryOrder[];
  totalDrivers: number;
  isLoading: boolean;
  error: string | null;

  fetchDrivers: (params?: { isActive?: boolean }) => Promise<void>;
  fetchDriverById: (id: string) => Promise<void>;
  fetchAssignedDeliveries: (status?: string) => Promise<void>;
  updateLocation: (driverId: string, lat: number, lng: number) => Promise<void>;
  clearSelected: () => void;
  clearError: () => void;
}

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [],
  selectedDriver: null,
  assignedDeliveries: [],
  totalDrivers: 0,
  isLoading: false,
  error: null,

  fetchDrivers: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const { drivers, total } = await driverService.getDrivers(params);
      set({ drivers, totalDrivers: total, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
    }
  },

  fetchDriverById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const driver = await driverService.getDriverById(id);
      set({ selectedDriver: driver, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
    }
  },

  fetchAssignedDeliveries: async (status) => {
    set({ isLoading: true, error: null });
    try {
      const { deliveries } = await driverService.getMyDeliveries(status);
      set({ assignedDeliveries: deliveries, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
    }
  },

  updateLocation: async (driverId, lat, lng) => {
    try {
      await driverService.updateMyLocation(driverId, lat, lng);
    } catch (error) {
      console.warn('Failed to update location:', getErrorMessage(error));
    }
  },

  clearSelected: () => set({ selectedDriver: null }),
  clearError: () => set({ error: null }),
}));
