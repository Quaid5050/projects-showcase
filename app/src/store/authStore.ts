import { create } from 'zustand';
import { authService } from '../services/authService';
import { storage } from '../utils/storage';
import { User, DriverProfile } from '../types/auth.types';
import { getErrorMessage } from '../services/api';

interface AuthStore {
  user: User | null;
  token: string | null;
  driverProfile: DriverProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  forceLogout: () => void;
  loadStoredAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  driverProfile: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { user, token, driverProfile } = await authService.login({ email, password });
      await storage.setToken(token);
      await storage.setUser({ user, driverProfile });
      set({ user, token, driverProfile: driverProfile ?? null, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: getErrorMessage(error) });
      throw error;
    }
  },

  logout: async () => {
    try { await authService.logout(); } catch { /* ignore */ }
    await storage.clearAll();
    set({ user: null, token: null, driverProfile: null, isAuthenticated: false });
  },

  loadStoredAuth: async () => {
    set({ isLoading: true });
    try {
      const token = await storage.getToken();
      const stored = await storage.getUser<{ user: User; driverProfile: DriverProfile | null }>();
      if (token && stored?.user) {
        set({ user: stored.user, token, driverProfile: stored.driverProfile ?? null, isAuthenticated: true });
      }
    } catch {
      await storage.clearAll();
    } finally {
      set({ isLoading: false });
    }
  },

  clearError: () => set({ error: null }),

  forceLogout: () => {
    set({ user: null, token: null, driverProfile: null, isAuthenticated: false, error: null });
  },
}));
