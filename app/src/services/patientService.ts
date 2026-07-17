import { apiClient } from './api';
import { API } from '../constants/apiEndpoints';
import { Patient } from '../types/order.types';

export const patientService = {
  async getPatients(params?: { search?: string }): Promise<{ patients: Patient[]; total: number }> {
    const res = await apiClient.get<{ data: { patients: Patient[]; total: number } }>(
      API.PATIENTS,
      { params }
    );
    return res.data.data!;
  },

  async getPatientById(id: string): Promise<Patient> {
    const res = await apiClient.get<{ data: { patient: Patient } }>(API.PATIENT(id));
    return res.data.data!.patient;
  },

  async createPatient(input: Omit<Patient, '_id' | 'pharmacyId'>): Promise<Patient> {
    const res = await apiClient.post<{ data: { patient: Patient } }>(API.PATIENTS, input);
    return res.data.data!.patient;
  },

  async updatePatient(id: string, input: Partial<Patient>): Promise<Patient> {
    const res = await apiClient.patch<{ data: { patient: Patient } }>(API.PATIENT(id), input);
    return res.data.data!.patient;
  },
};
