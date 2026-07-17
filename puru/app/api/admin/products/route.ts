import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import ProductCategory from '@/models/ProductCategory';

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  return session;
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const products = await ProductCategory.find({}).sort({ order: 1 }).lean();
  return NextResponse.json({ success: true, data: products });
}

export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const body = await req.json();
  const product = await ProductCategory.create({
    title: body.title,
    slug: body.slug?.toLowerCase().trim(),
    category: body.category,
    shortDescription: body.shortDescription,
    image: body.image || '/hero-background.png',
    icon: body.icon || 'Package',
    audience: body.audience,
    order: body.order ?? 0,
    isFeatured: body.isFeatured ?? false,
  });

  return NextResponse.json({ success: true, data: product });
}

export async function PATCH(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const body = await req.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  if (updates.slug) updates.slug = updates.slug.toLowerCase().trim();

  const product = await ProductCategory.findByIdAndUpdate(id, updates, { new: true });
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({ success: true, data: product });
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await ProductCategory.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
