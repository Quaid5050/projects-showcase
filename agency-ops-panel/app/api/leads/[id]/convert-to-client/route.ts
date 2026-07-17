import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Lead from '@/models/Lead';
import Client from '@/models/Client';
import { getAuthUser } from '@/lib/auth';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const lead = await Lead.findById(id);
    if (!lead) return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    const body = await req.json() as { companyName?: string };
    const client = await Client.create({
      name: lead.name,
      companyName: body.companyName || lead.companyName,
      email: lead.email,
      phone: lead.phone,
      businessType: lead.businessType,
      source: lead.source,
      status: 'active',
      assignedSales: lead.assignedTo,
      notes: `Converted from lead. Original message: ${lead.message}`,
      tags: lead.tags,
    });
    await Lead.findByIdAndUpdate(id, { stage: 'won', convertedClientId: client._id });
    return NextResponse.json({ success: true, data: { client, message: 'Lead converted to client successfully' } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
