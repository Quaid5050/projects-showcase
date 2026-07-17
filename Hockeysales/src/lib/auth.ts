import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.ADMIN_SESSION_SECRET || "insecure-dev-secret";
const COOKIE_NAME = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export { COOKIE_NAME, MAX_AGE_SECONDS };

function sign(data: string): string {
  return crypto.createHmac("sha256", SECRET).update(data).digest("hex");
}

/** Create a signed session token that expires after MAX_AGE_SECONDS. */
export function createToken(): string {
  const payload = JSON.stringify({ role: "admin", exp: Date.now() + MAX_AGE_SECONDS * 1000 });
  const b64 = Buffer.from(payload).toString("base64url");
  return `${b64}.${sign(b64)}`;
}

/** Verify a token's signature and expiry. */
export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const [b64, sig] = token.split(".");
  if (!b64 || !sig) return false;
  const expected = sign(b64);
  // constant-time comparison
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  try {
    const payload = JSON.parse(Buffer.from(b64, "base64url").toString());
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

/** Returns true if the request carries a valid admin session cookie. */
export function isAuthed(req: NextRequest): boolean {
  return verifyToken(req.cookies.get(COOKIE_NAME)?.value);
}

/** Guard for admin API routes. Returns a 401 response if not authed, else null. */
export function requireAdmin(req: NextRequest): NextResponse | null {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
