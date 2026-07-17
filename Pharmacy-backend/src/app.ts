import express from 'express';
import cors from 'cors';
import path from 'path';
import { env } from './config/env';
import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';

// Routes
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import pharmacyRoutes from './routes/pharmacy.routes';
import patientRoutes from './routes/patient.routes';
import driverRoutes from './routes/driver.routes';
import orderRoutes from './routes/order.routes';
import reportRoutes from './routes/report.routes';

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
// Ensure MongoDB is connected before any route (required on Vercel serverless).
app.use(async (_req, _res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

app.use(cors({ origin: env.allowedOrigins, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded proof-of-delivery files
app.use('/uploads', express.static(path.join(process.cwd(), env.uploadDir)));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pharmacies', pharmacyRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reports', reportRoutes);

// Health check — accessible at both /health and /api/health
const healthHandler = (_req: express.Request, res: express.Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' });
};
app.get('/health', healthHandler);
app.get('/api/health', healthHandler);

// ─── Error Handler ────────────────────────────────────────────────────────────
app.use(errorHandler);

export default app;
