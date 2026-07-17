import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Project from '@/models/Project';
import { getAuthUser } from '@/lib/auth';
import { isAdminCEOOrManager } from '@/lib/permissions';
import crypto from 'crypto';

// Enable / disable client portal and generate token
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !isAdminCEOOrManager(auth.role)) {
      return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    }
    const { id } = await params;
    await connectDB();

    const project = await Project.findById(id);
    if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });

    // Toggle portal access
    const body = await req.json() as { enable?: boolean };
    const enable = body.enable !== false; // default true

    let token = project.clientPortalToken;
    if (enable && !token) {
      token = crypto.randomBytes(32).toString('hex');
    }

    await Project.findByIdAndUpdate(id, {
      clientPortalEnabled: enable,
      clientPortalToken: enable ? token : null,
    });

    const portalUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/client-portal/${token}`;

    return NextResponse.json({
      success: true,
      data: {
        enabled: enable,
        token: enable ? token : null,
        portalUrl: enable ? portalUrl : null,
        message: enable ? 'Client portal enabled. Share the link with your client.' : 'Client portal disabled.',
      },
    });
  } catch (e) {
    console.error('[Client Portal]', e);
    return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
  }
}

// Get portal status
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    await connectDB();
    const project = await Project.findById(id).select('clientPortalEnabled clientPortalToken name');
    if (!project) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });

    const portalUrl = project.clientPortalEnabled && project.clientPortalToken
      ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/client-portal/${project.clientPortalToken}`
      : null;

    return NextResponse.json({ success: true, data: { enabled: project.clientPortalEnabled, token: project.clientPortalToken, portalUrl } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
  }
}
