import { Router } from 'express';
import {
  getPatients,
  createPatient,
  getPatientById,
  updatePatient,
} from '../controllers/patient.controller';
import { authenticate } from '../middleware/auth.middleware';
import { requireRole } from '../middleware/role.middleware';

const router = Router();

router.use(authenticate);
router.use(requireRole('super_admin', 'pharmacy_admin', 'staff'));

router.get('/', getPatients);
router.post('/', createPatient);
router.get('/:id', getPatientById);
router.patch('/:id', updatePatient);

export default router;
