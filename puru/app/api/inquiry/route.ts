import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import { sendInquiryEmail } from '@/lib/mailer';

const inquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required').max(120),
  companyName: z.string().trim().min(1, 'Company name is required').max(160),
  email: z.string().email('Valid email is required'),
  phone: z.string().trim().min(7, 'Phone number is required').max(60),
  country: z.string().trim().min(1, 'Country is required').max(100),
  website: z.string().trim().url('Website must be a valid URL').or(z.literal('')).optional(),
  businessType: z.string().trim().min(1, 'Business type is required').max(120),
  inquiryCategory: z.string().trim().min(1, 'Inquiry category is required').max(120),
  productOrServiceNeeded: z.string().trim().min(2, 'Product/service details are required').max(240),
  quantityOrVolume: z.string().trim().max(120).optional(),
  targetMarket: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000),
  consent: z.boolean().refine((v) => v === true, 'You must agree to be contacted'),
  source: z.enum(['contact', 'product-modal', 'homepage', 'partnership', 'industries']).default('contact'),
  websiteHoneypot: z.string().max(0).optional(),
  startedAt: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    if (parsed.data.websiteHoneypot) {
      return NextResponse.json({ success: false, message: 'Invalid submission' }, { status: 400 });
    }

    if (parsed.data.startedAt && Date.now() - parsed.data.startedAt < 2500) {
      return NextResponse.json({ success: false, message: 'Please try again' }, { status: 429 });
    }

    await connectDB();

    const { websiteHoneypot, startedAt, ...inquiryData } = parsed.data;
    void websiteHoneypot;
    void startedAt;

    const inquiry = await Inquiry.create(inquiryData);

    // Send email notification
    try {
      await sendInquiryEmail(inquiryData);
    } catch (emailErr) {
      console.error('Email send failed:', emailErr);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully', id: inquiry._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
