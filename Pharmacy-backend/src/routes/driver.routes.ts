import { Router } from 'express';
import {
  getDrivers,
  createDriver,
  getDriverById,
  updateDriver,
  getMyDeliveries,
} from '../controllers/driver.controller';
import { authenticate } from '../middleware/auth.middleware';
import { requireRole } from '../middleware/role.middleware';

const router = Router();

router.use(authenticate);

// Driver's own deliveries — must be registered before /:id to avoid conflict
router.get('/me/deliveries', requireRole('driver'), getMyDeliveries);

// Admin-only list + create
router.get('/', requireRole('super_admin', 'pharmacy_admin', 'staff'), getDrivers);
router.post('/', requireRole('super_admin', 'pharmacy_admin'), createDriver);

// Any authenticated user can view a driver profile
router.get('/:id', getDriverById);

// Only admins or the driver themselves can update a driver record
router.patch('/:id', requireRole('super_admin', 'pharmacy_admin', 'staff', 'driver'), updateDriver);

export default router;
