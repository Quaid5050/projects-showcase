import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { isAdminCEOOrManager } from '@/lib/permissions';
import { callAI } from '@/lib/ai/openai';
import '@/lib/models';
import Project from '@/models/Project';
import Task from '@/models/Task';
import ProgressUpdate from '@/models/ProgressUpdate';
import AIReply from '@/models/AIReply';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !isAdminCEOOrManager(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    await connectDB();
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const [activeProjects, recentProgress, blockedTasks, completedTasks] = await Promise.all([
      Project.find({ status: 'in_progress' }).populate('clientId','name').populate('serviceId','name').limit(20).lean(),
      ProgressUpdate.find({ createdAt: { $gte: oneWeekAgo } }).sort({ createdAt: -1 }).limit(20).lean(),
      Task.find({ status: 'blocked' }).populate('projectId','name').populate('assignedTo','name').limit(10).lean(),
      Task.find({ status: 'completed', completedAt: { $gte: oneWeekAgo } }).limit(20).lean(),
    ]);
    const prompt = `Generate a weekly agency operations report.
Active Projects (${activeProjects.length}): ${JSON.stringify(activeProjects.map(p => ({ name: p.name, client: (p.clientId as { name?: string })?.name, service: (p.serviceId as { name?: string })?.name, progress: p.progressPercentage, stage: p.currentStage })))}
Recent Progress Updates (${recentProgress.length}): ${JSON.stringify(recentProgress.map(p => p.updateTitle))}
Blocked Tasks (${blockedTasks.length}): ${JSON.stringify(blockedTasks.map(t => ({ title: t.title, project: (t.projectId as { name?: string })?.name, assignedTo: (t.assignedTo as { name?: string })?.name })))}
Completed Tasks This Week: ${completedTasks.length}
Return JSON: { "report": "string", "highlights": ["string"], "blockers": ["string"], "nextWeekPriorities": ["string"] }`;
    const raw = await callAI(prompt);
    const parsed = JSON.parse(raw) as { report: string; highlights: string[]; blockers: string[]; nextWeekPriorities: string[] };
    const saved = await AIReply.create({
      replyType: 'weekly_report',
      generatedBy: new mongoose.Types.ObjectId(auth.userId),
      inputMessage: 'Weekly report request',
      suggestedReply: parsed.report,
      shortReply: parsed.highlights?.join(' | ') || '',
      internalSummary: parsed.report,
      riskLevel: blockedTasks.length > 3 ? 'high' : blockedTasks.length > 0 ? 'medium' : 'low',
      status: 'approved',
    });
    return NextResponse.json({ success: true, data: { ...parsed, savedId: saved._id } });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
