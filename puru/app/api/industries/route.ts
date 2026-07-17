import { NextResponse } from 'next/server';
import { getIndustriesFromDb } from '@/lib/db/catalog';

export async function GET() {
  const data = await getIndustriesFromDb();
  return NextResponse.json({ success: true, data });
}
