import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import '@/lib/models';
import Client from '@/models/Client';
import Project from '@/models/Project';
import Task from '@/models/Task';
import Lead from '@/models/Lead';
import AIReply from '@/models/AIReply';
import { getAuthUser } from '@/lib/auth';
import { isAdminCEOOrManager } from '@/lib/permissions';

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthUser(req);
    if (!auth || !isAdminCEOOrManager(auth.role)) return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
    await connectDB();

    const [
      totalClients, activeClients,
      totalProjects, activeProjects, completedProjects,
      pendingTasks, overdueTasks,
      newLeads, totalLeads,
      pendingReplies,
      googleAdsProjects, metaAdsProjects, devProjects,
    ] = await Promise.all([
      Client.countDocuments(),
      Client.countDocuments({ status: 'active' }),
      Project.countDocuments(),
      Project.countDocuments({ status: 'in_progress' }),
      Project.countDocuments({ status: 'completed' }),
      Task.countDocuments({ status: { $in: ['todo','in_progress','blocked'] } }),
      Task.countDocuments({ status: { $nin: ['completed'] }, dueDate: { $lt: new Date() } }),
      Lead.countDocuments({ stage: 'new' }),
      Lead.countDocuments(),
      AIReply.countDocuments({ status: 'draft' }),
      Project.countDocuments({ type: 'google_ads', status: 'in_progress' }),
      Project.countDocuments({ type: 'meta_ads', status: 'in_progress' }),
      Project.countDocuments({ type: { $in: ['website_development','app_development'] }, status: 'in_progress' }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        clients: { total: totalClients, active: activeClients },
        projects: { total: totalProjects, active: activeProjects, completed: completedProjects },
        tasks: { pending: pendingTasks, overdue: overdueTasks },
        leads: { new: newLeads, total: totalLeads },
        aiReplies: { pending: pendingReplies },
        byService: { googleAds: googleAdsProjects, metaAds: metaAdsProjects, development: devProjects },
      },
    });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 }); }
}
