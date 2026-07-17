import { NextResponse } from 'next/server';
import { getProductsFromDb } from '@/lib/db/catalog';

export async function GET() {
  const products = await getProductsFromDb();
  return NextResponse.json({ success: true, data: products });
}
