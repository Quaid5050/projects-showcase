import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { callAI } from '@/lib/ai/openai';
import '@/lib/models';
import AIReply from '@/models/AIReply';
import Project from '@/models/Project';
import Task from '@/models/Task';
import ProgressUpdate from '@/models/ProgressUpdate';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const { projectId } = await req.json() as { projectId: string };
    if (!projectId) return NextResponse.json({ success: false, error: 'projectId required' }, { status: 400 });
    const [project, tasks, progress] = await Promise.all([
      Project.findById(projectId).populate('clientId','name companyName').populate('serviceId','name').lean(),
      Task.find({ projectId }).populate('assignedTo','name').lean(),
      ProgressUpdate.find({ projectId, visibility: 'client_safe' }).sort({ createdAt: -1 }).limit(5).lean(),
    ]);
    if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    const prompt = `You are an agency operations assistant. Generate a concise project summary.
Project: ${JSON.stringify(project, null, 2)}
Tasks: ${JSON.stringify(tasks.slice(0, 10), null, 2)}
Recent Client-Safe Progress: ${JSON.stringify(progress, null, 2)}
Return JSON: { "summary": "string", "clientMessage": "string", "risks": "string", "nextStep": "string" }`;
    const raw = await callAI(prompt);
    const parsed = JSON.parse(raw) as { summary: string; clientMessage: string; risks: string; nextStep: string };
    const saved = await AIReply.create({
      projectId: new mongoose.Types.ObjectId(projectId),
      clientId: (project.clientId as { _id?: mongoose.Types.ObjectId })?._id,
      replyType: 'project_summary',
      generatedBy: new mongoose.Types.ObjectId(auth.userId),
      inputMessage: `Summary for project: ${project.name}`,
      suggestedReply: parsed.clientMessage || parsed.summary,
      shortReply: parsed.summary,
      internalSummary: parsed.summary,
      riskLevel: 'low',
      nextStep: parsed.nextStep,
      status: 'draft',
    });
    return NextResponse.json({ success: true, data: { ...parsed, savedId: saved._id } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
