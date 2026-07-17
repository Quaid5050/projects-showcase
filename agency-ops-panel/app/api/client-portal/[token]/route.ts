import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Project from '@/models/Project';
import Task from '@/models/Task';
import ProgressUpdate from '@/models/ProgressUpdate';

// Public endpoint — no auth required, token acts as the key
export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params;
    await connectDB();

    const project = await Project.findOne({ clientPortalToken: token, clientPortalEnabled: true })
      .populate('clientId', 'name companyName email businessType')
      .populate('serviceId', 'name slug description')
      .lean();

    if (!project) {
      return NextResponse.json({ success: false, error: 'Invalid or expired portal link' }, { status: 404 });
    }

    // Fetch only client-safe data
    const [tasks, progress] = await Promise.all([
      Task.find({ projectId: project._id })
        .select('title status priority dueDate')
        .lean(),
      ProgressUpdate.find({ projectId: project._id, visibility: 'client_safe' })
        .select('updateTitle updateText completedWork pendingWork nextSteps eta createdAt')
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        project: {
          id: project._id,
          name: project.name,
          description: project.description,
          status: project.status,
          progressPercentage: project.progressPercentage,
          currentStage: project.currentStage,
          latestUpdate: project.latestUpdate,
          nextStep: project.nextStep,
          dueDate: project.dueDate,
          type: project.type,
          service: (project.serviceId as unknown as { name: string } | null)?.name,
          client: project.clientId,
        },
        tasks: tasks.map(t => ({
          title: t.title,
          status: t.status,
          priority: t.priority,
          dueDate: t.dueDate,
        })),
        progress,
      },
    });
  } catch (e) {
    console.error('[Client Portal GET]', e);
    return NextResponse.json({ success: false, error: 'Failed to load project' }, { status: 500 });
  }
}
