import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import SiteContent from '@/models/SiteContent';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const content = await SiteContent.find({}).sort({ section: 1, key: 1 }).lean();
  return NextResponse.json({ success: true, data: content });
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const { section, key, value } = await req.json();
  const updated = await SiteContent.findOneAndUpdate(
    { section, key },
    { value },
    { new: true, upsert: true }
  );
  return NextResponse.json({ success: true, data: updated });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const body = await req.json();
  // Bulk update
  const updates = body.updates as Array<{ section: string; key: string; value: string }>;
  const results = await Promise.all(
    updates.map(({ section, key, value }) =>
      SiteContent.findOneAndUpdate(
        { section, key },
        { value },
        { new: true, upsert: true }
      )
    )
  );
  return NextResponse.json({ success: true, count: results.length });
}
