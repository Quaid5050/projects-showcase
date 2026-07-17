import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import connectDB from '@/lib/mongodb';
import LeadSignup from '@/models/LeadSignup';

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  businessType: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await connectDB();
    const lead = await LeadSignup.create(parsed.data);

    return NextResponse.json(
      { success: true, message: 'Signup successful', id: lead._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead signup error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
