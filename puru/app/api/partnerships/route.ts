import { NextResponse } from 'next/server';
import { getPartnershipsFromDb } from '@/lib/db/catalog';

export async function GET() {
  const data = await getPartnershipsFromDb();
  return NextResponse.json({ success: true, data });
}
