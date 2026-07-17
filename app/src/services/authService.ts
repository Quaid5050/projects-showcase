import { apiClient } from './api';
import { API } from '../constants/apiEndpoints';
import { LoginRequest, LoginResponse, User } from '../types/auth.types';

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const res = await apiClient.post<{ data: LoginResponse }>(API.LOGIN, credentials);
    return res.data.data!;
  },

  async getMe(): Promise<{ user: User; driverProfile: unknown }> {
    const res = await apiClient.get<{ data: { user: User; driverProfile: unknown } }>(API.ME);
    return res.data.data!;
  },

  async logout(): Promise<void> {
    await apiClient.post(API.LOGOUT);
  },
};
