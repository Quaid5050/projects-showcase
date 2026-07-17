import { apiClient } from './api';
import { API } from '../constants/apiEndpoints';

export interface Pharmacy {
  _id: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates?: { lat: number; lng: number };
  };
  phone: string;
  email: string;
  operatingHours: { open: string; close: string };
  settings: { defaultDeliveryRadius: number };
  createdAt: string;
  updatedAt: string;
}

export const pharmacyService = {
  async getPharmacies(): Promise<{ pharmacies: Pharmacy[]; total: number }> {
    const res = await apiClient.get<{ data: { pharmacies: Pharmacy[]; total: number } }>(
      API.PHARMACIES
    );
    return res.data.data!;
  },

  async getPharmacyById(id: string): Promise<Pharmacy> {
    const res = await apiClient.get<{ data: { pharmacy: Pharmacy } }>(API.PHARMACY(id));
    return res.data.data!.pharmacy;
  },

  async createPharmacy(input: Omit<Pharmacy, '_id' | 'createdAt' | 'updatedAt'>): Promise<Pharmacy> {
    const res = await apiClient.post<{ data: { pharmacy: Pharmacy } }>(API.PHARMACIES, input);
    return res.data.data!.pharmacy;
  },

  async updatePharmacy(id: string, input: Partial<Pharmacy>): Promise<Pharmacy> {
    const res = await apiClient.patch<{ data: { pharmacy: Pharmacy } }>(API.PHARMACY(id), input);
    return res.data.data!.pharmacy;
  },
};
