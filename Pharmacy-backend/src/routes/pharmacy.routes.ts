import { Router } from 'express';
import {
  getPharmacies,
  createPharmacy,
  getPharmacyById,
  updatePharmacy,
} from '../controllers/pharmacy.controller';
import { authenticate } from '../middleware/auth.middleware';
import { requireRole } from '../middleware/role.middleware';

const router = Router();

router.use(authenticate);

router.get('/', getPharmacies);
router.post('/', requireRole('super_admin'), createPharmacy);
router.get('/:id', getPharmacyById);
router.patch('/:id', requireRole('super_admin', 'pharmacy_admin'), updatePharmacy);

export default router;
