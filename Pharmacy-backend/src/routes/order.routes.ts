import { Router } from 'express';
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
  updateOrderStatus,
  assignDriver,
} from '../controllers/order.controller';
import { submitProof, getProof } from '../controllers/proof.controller';
import { authenticate } from '../middleware/auth.middleware';
import { uploadProof } from '../middleware/upload.middleware';

const router = Router();

router.use(authenticate);

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOrderById);
router.patch('/:id', updateOrder);
router.patch('/:id/status', updateOrderStatus);
router.patch('/:id/assign-driver', assignDriver);

// Proof of delivery
router.post('/:id/proof', uploadProof, submitProof);
router.get('/:id/proof', getProof);

export default router;
