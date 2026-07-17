import { Router } from 'express';
import { getSummary, getDriverPerformance } from '../controllers/report.controller';
import { authenticate } from '../middleware/auth.middleware';
import { requireRole } from '../middleware/role.middleware';

const router = Router();

router.use(authenticate);
router.use(requireRole('super_admin', 'pharmacy_admin', 'staff'));

router.get('/summary', getSummary);
router.get('/driver-performance', getDriverPerformance);

export default router;
