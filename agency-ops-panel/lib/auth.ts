import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { JWTPayload, UserRole } from '@/types';

const JWT_SECRET = process.env.JWT_SECRET as string;
export const COOKIE_NAME = 'auth-token';
export const COOKIE_MAX_AGE = 7 * 24 * 60 * 60;

export function signToken(payload: JWTPayload): string {
  if (!JWT_SECRET) throw new Error('JWT_SECRET not set');
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    if (!JWT_SECRET) return null;
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch { return null; }
}

export async function getAuthUser(req?: NextRequest): Promise<JWTPayload | null> {
  let token: string | undefined;
  if (req) {
    const h = req.headers.get('authorization');
    if (h?.startsWith('Bearer ')) token = h.substring(7);
    if (!token) token = req.cookies.get(COOKIE_NAME)?.value;
  } else {
    try { const c = await cookies(); token = c.get(COOKIE_NAME)?.value; } catch { return null; }
  }
  if (!token) return null;
  return verifyToken(token);
}

export function createAuthCookieHeader(token: string): string {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${COOKIE_MAX_AGE}`;
}
export function clearAuthCookieHeader(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}
export function requireRole(userRole: UserRole, allowed: UserRole[]): boolean {
  return allowed.includes(userRole);
}
