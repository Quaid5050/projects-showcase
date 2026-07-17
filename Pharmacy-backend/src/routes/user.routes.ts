import { Router } from 'express';
import { getUsers, getUserById, updateUser } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { requireRole } from '../middleware/role.middleware';

const router = Router();

router.use(authenticate);

router.get('/', requireRole('super_admin'), getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);

export default router;
