import { apiClient } from './api';
import { API } from '../constants/apiEndpoints';
import { ReportSummary, DriverPerformance } from '../types/api.types';

export const reportService = {
  async getSummary(range?: 'today' | 'week' | 'month'): Promise<ReportSummary> {
    const res = await apiClient.get<{ data: ReportSummary }>(API.REPORTS_SUMMARY, {
      params: { range },
    });
    return res.data.data!;
  },

  async getDriverPerformance(range?: 'today' | 'week' | 'month'): Promise<{ drivers: DriverPerformance[] }> {
    const res = await apiClient.get<{ data: { drivers: DriverPerformance[] } }>(
      API.REPORTS_DRIVER_PERFORMANCE,
      { params: { range } }
    );
    return res.data.data!;
  },
};
