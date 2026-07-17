import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Project from '@/models/Project';
import Task from '@/models/Task';
import ProgressUpdate from '@/models/ProgressUpdate';
import { callAI } from '@/lib/ai/openai';

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params;
    await connectDB();

    const project = await Project.findOne({ clientPortalToken: token, clientPortalEnabled: true })
      .populate('clientId', 'name companyName')
      .populate('serviceId', 'name')
      .lean();

    if (!project) {
      return NextResponse.json({ success: false, error: 'Invalid portal link' }, { status: 404 });
    }

    const { question } = await req.json() as { question: string };
    if (!question?.trim()) {
      return NextResponse.json({ success: false, error: 'Question required' }, { status: 400 });
    }

    // Fetch client-safe data only
    const [tasks, progress] = await Promise.all([
      Task.find({ projectId: project._id }).select('title status priority dueDate').lean(),
      ProgressUpdate.find({ projectId: project._id, visibility: 'client_safe' })
        .sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    const clientName = (project.clientId as { name?: string } | null)?.name || 'Client';
    const serviceName = (project.serviceId as { name?: string } | null)?.name || 'Service';

    const prompt = `You are a friendly project assistant for ${clientName}. Answer the client's question about their project using ONLY the data below.

RULES:
- Be friendly and professional
- Only use the project data provided — never invent information
- If something is not in the data, say "I'll check with the team and get back to you"
- Keep answers short and clear
- Return valid JSON only

PROJECT: ${project.name}
SERVICE: ${serviceName}
STATUS: ${project.status.replace('_', ' ')}
PROGRESS: ${project.progressPercentage}%
CURRENT STAGE: ${project.currentStage || 'In progress'}
LATEST UPDATE: ${project.latestUpdate || 'No update yet'}
NEXT STEP: ${project.nextStep || 'Team is working on it'}
DUE DATE: ${project.dueDate ? new Date(project.dueDate as Date).toLocaleDateString() : 'Not set'}

RECENT UPDATES:
${progress.map(p => `- ${p.updateTitle}: ${p.updateText}${p.completedWork ? ` (Completed: ${p.completedWork})` : ''}${p.pendingWork ? ` (Pending: ${p.pendingWork})` : ''}`).join('\n') || 'No updates yet'}

TASK STATUS:
${tasks.map(t => `- ${t.title}: ${t.status.replace('_', ' ')} (${t.priority} priority)`).join('\n') || 'No tasks listed'}

CLIENT QUESTION: ${question}

Return JSON: {"answer": "your friendly answer here"}`;

    const raw = await callAI(prompt);
    let answer = 'I\'ll check with the team and get back to you shortly.';

    try {
      const parsed = JSON.parse(raw) as { answer: string };
      answer = parsed.answer || answer;
    } catch {
      // If raw is just text, use it directly
      if (raw.length < 1000) answer = raw;
    }

    return NextResponse.json({ success: true, data: { answer } });
  } catch (e) {
    console.error('[Client Portal Ask]', e);
    return NextResponse.json({ success: false, error: 'Failed to get answer' }, { status: 500 });
  }
}
