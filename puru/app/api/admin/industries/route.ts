import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Industry from '@/models/Industry';

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
  const items = await Industry.find({}).sort({ order: 1 }).lean();
  return NextResponse.json({ success: true, data: items });
}

export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const body = await req.json();
  const item = await Industry.create({
    title: body.title,
    slug: body.slug?.toLowerCase().trim(),
    description: body.description,
    image: body.image || '/hero-background.png',
    icon: body.icon || 'Factory',
    order: body.order ?? 0,
  });

  return NextResponse.json({ success: true, data: item });
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

  const item = await Industry.findByIdAndUpdate(id, updates, { new: true });
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({ success: true, data: item });
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  await Industry.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
