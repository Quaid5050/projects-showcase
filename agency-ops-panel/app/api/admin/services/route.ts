import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Service from '@/models/Service';
import { getAuthUser } from '@/lib/auth';
import { canManageServices } from '@/lib/permissions';
import { slugify } from '@/lib/utils';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1), description: z.string().default(''),
  discoveryQuestions: z.array(z.string()).default([]),
  processSteps: z.array(z.string()).default([]),
  deliverables: z.array(z.string()).default([]),
  commonObjections: z.array(z.string()).default([]),
  reportingFields: z.array(z.string()).default([]),
  isActive: z.boolean().default(true),
});

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('active') !== 'false' ? { isActive: true } : {};
    const services = await Service.find(query).sort({ name: 1 });
    return NextResponse.json({ success: true, data: services });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !canManageServices(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    await connectDB();
    const body = await req.json() as unknown;
    const p = schema.safeParse(body);
    if (!p.success) return NextResponse.json({ success: false, error: p.error.issues[0]?.message }, { status: 400 });
    const slug = slugify(p.data.name);
    if (await Service.findOne({ slug })) return NextResponse.json({ success: false, error: 'Service already exists' }, { status: 409 });
    const service = await Service.create({ ...p.data, slug });
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
