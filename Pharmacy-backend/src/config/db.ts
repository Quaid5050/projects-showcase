import mongoose from 'mongoose';
import { env } from './env';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };
global.mongooseCache = cache;

/**
 * Connect to MongoDB with caching for serverless (Vercel) cold starts.
 * Safe to call on every request — reuses an open connection when available.
 */
export const connectDB = async (): Promise<typeof mongoose> => {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(env.mongodbUri).then((instance) => {
      console.log(`MongoDB connected: ${instance.connection.host}`);
      return instance;
    });
  }

  try {
    cache.conn = await cache.promise;
  } catch (error) {
    cache.promise = null;
    console.error('MongoDB connection error:', error);
    throw error;
  }

  return cache.conn;
};
