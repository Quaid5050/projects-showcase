import { Request, Response } from 'express';
import { DeliveryOrder } from '../models/DeliveryOrder';
import { Driver } from '../models/Driver';
import { sendSuccess, sendError } from '../utils/response';

const getDateRange = (range: string): { start: Date; end: Date } => {
  const end = new Date();
  const start = new Date();

  switch (range) {
    case 'week':
      start.setDate(start.getDate() - 7);
      break;
    case 'month':
      start.setMonth(start.getMonth() - 1);
      break;
    case 'today':
    default:
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      break;
  }

  return { start, end };
};

/**
 * GET /api/reports/summary
 */
export const getSummary = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId;
    const { range = 'today' } = req.query;
    const { start, end } = getDateRange(range as string);

    const baseFilter: Record<string, unknown> = {
      createdAt: { $gte: start, $lte: end },
    };
    if (pharmacyId) baseFilter.pharmacyId = pharmacyId;

    const [total, delivered, failed, pending, inProgress] = await Promise.all([
      DeliveryOrder.countDocuments(baseFilter),
      DeliveryOrder.countDocuments({ ...baseFilter, status: 'delivered' }),
      DeliveryOrder.countDocuments({ ...baseFilter, status: 'failed' }),
      DeliveryOrder.countDocuments({ ...baseFilter, status: 'pending' }),
      DeliveryOrder.countDocuments({
        ...baseFilter,
        status: { $in: ['assigned', 'picked_up', 'on_the_way'] },
      }),
    ]);

    const successRate = total > 0 ? Math.round((delivered / total) * 100) : 0;
    const failedRate = total > 0 ? Math.round((failed / total) * 100) : 0;

    sendSuccess(res, {
      range,
      total,
      delivered,
      failed,
      pending,
      inProgress,
      successRate,
      failedRate,
    });
  } catch (error) {
    console.error('[getSummary]', error);
    sendError(res, 'Failed to fetch summary', 500);
  }
};

/**
 * GET /api/reports/driver-performance
 */
export const getDriverPerformance = async (req: Request, res: Response): Promise<void> => {
  try {
    const pharmacyId = req.user?.pharmacyId;
    const { range = 'month' } = req.query;
    const { start, end } = getDateRange(range as string);

    const driverFilter: Record<string, unknown> = {};
    if (pharmacyId) driverFilter.pharmacyId = pharmacyId;

    const drivers = await Driver.find(driverFilter);

    const performance = await Promise.all(
      drivers.map(async (driver) => {
        const baseFilter = {
          driverId: driver._id,
          createdAt: { $gte: start, $lte: end },
        };

        const [total, delivered, failed] = await Promise.all([
          DeliveryOrder.countDocuments(baseFilter),
          DeliveryOrder.countDocuments({ ...baseFilter, status: 'delivered' }),
          DeliveryOrder.countDocuments({ ...baseFilter, status: 'failed' }),
        ]);

        const successRate = total > 0 ? Math.round((delivered / total) * 100) : 0;

        return {
          driverId: driver._id,
          driverName: driver.name,
          vehicleType: driver.vehicleType,
          isActive: driver.isActive,
          total,
          delivered,
          failed,
          successRate,
        };
      })
    );

    // Sort by total deliveries descending
    performance.sort((a, b) => b.total - a.total);

    sendSuccess(res, { range, drivers: performance });
  } catch (error) {
    console.error('[getDriverPerformance]', error);
    sendError(res, 'Failed to fetch driver performance', 500);
  }
};
