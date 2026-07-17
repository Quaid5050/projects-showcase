/**
 * dataRetriever.ts
 * Understands query intent and fetches relevant MongoDB data
 * to build context for the AI agents.
 */

import connectDB from '@/lib/db';
import '@/lib/models'; // ensure all models are registered before populate()
import Client from '@/models/Client';
import Project from '@/models/Project';
import Task from '@/models/Task';
import ProgressUpdate from '@/models/ProgressUpdate';
import { UserRole } from '@/types';
import { ClientContext, ProjectContext, TaskContext, ProgressContext } from './types';

export interface RetrievedContext {
  clients: ClientContext[];
  summary: string;
  totalProjects: number;
  pendingTasksCount: number;
}

export async function retrieveContextForQuestion(
  question: string,
  role: UserRole,
  clientId?: string
): Promise<RetrievedContext> {
  await connectDB();

  const q = question.toLowerCase();

  // Detect service filter from question
  const serviceKeywords: Record<string, string[]> = {
    'google_ads': ['google ads', 'google ad', 'google'],
    'meta_ads': ['meta ads', 'meta ad', 'facebook ads', 'instagram ads', 'meta'],
    'website_development': ['website', 'web development', 'web dev'],
    'app_development': ['app development', 'app dev', 'mobile app'],
    'seo': ['seo', 'search engine'],
    'branding': ['branding', 'brand'],
    'social_media': ['social media', 'social media management'],
    'graphic_design': ['graphic design', 'design'],
    'support': ['support', 'existing client'],
  };

  let projectTypeFilter: string | null = null;
  for (const [type, keywords] of Object.entries(serviceKeywords)) {
    if (keywords.some(k => q.includes(k))) {
      projectTypeFilter = type;
      break;
    }
  }

  // Build project query
  const projectQuery: Record<string, unknown> = {};
  if (projectTypeFilter) projectQuery.type = projectTypeFilter;
  if (clientId) projectQuery.clientId = clientId;

  // Role-based: team members see only assigned projects
  // (For simplicity in context retrieval, we fetch all for CEO/admin/manager)
  const projects = await Project.find(projectQuery)
    .populate('clientId', 'name companyName status businessType')
    .populate('serviceId', 'name slug')
    .populate('assignedTeam', 'name')
    .populate('assignedManager', 'name')
    .sort({ updatedAt: -1 })
    .limit(20)
    .lean();

  // Get client IDs from projects
  const clientIds = [...new Set(projects.map(p => p.clientId?.toString()).filter(Boolean))];

  // Fetch tasks for these projects
  const projectIds = projects.map(p => p._id?.toString());
  const tasks = await Task.find({
    projectId: { $in: projectIds },
    status: { $nin: ['completed'] },
  })
    .populate('assignedTo', 'name')
    .lean();

  // Fetch client-safe progress updates
  const progressUpdates = await ProgressUpdate.find({
    projectId: { $in: projectIds },
    visibility: 'client_safe',
  })
    .sort({ createdAt: -1 })
    .limit(30)
    .lean();

  // Build structured context per client
  const clientMap = new Map<string, ClientContext>();

  for (const proj of projects) {
    const clientDoc = proj.clientId as { _id: unknown; name?: string; companyName?: string; status?: string; businessType?: string } | null;
    if (!clientDoc) continue;

    const cid = clientDoc._id?.toString() || '';
    if (!clientMap.has(cid)) {
      clientMap.set(cid, {
        id: cid,
        name: clientDoc.name || 'Unknown',
        companyName: clientDoc.companyName,
        businessType: clientDoc.businessType,
        status: clientDoc.status || 'active',
        projects: [],
        recentProgress: [],
        pendingTasks: [],
      });
    }

    const ctx = clientMap.get(cid)!;

    // Project context
    const projCtx: ProjectContext = {
      id: proj._id?.toString() || '',
      name: proj.name,
      clientName: clientDoc.name || '',
      serviceName: (proj.serviceId as { name?: string } | null)?.name || '',
      status: proj.status,
      progressPercentage: proj.progressPercentage,
      currentStage: proj.currentStage,
      latestUpdate: proj.latestUpdate,
      risks: proj.risks,
      nextStep: proj.nextStep,
      dueDate: proj.dueDate?.toISOString().split('T')[0],
      assignedTeam: (proj.assignedTeam as { name?: string }[]).map(t => t.name || ''),
    };
    ctx.projects.push(projCtx);

    // Tasks for this project
    const projTasks = tasks.filter(t => t.projectId?.toString() === proj._id?.toString());
    for (const t of projTasks) {
      const tc: TaskContext = {
        id: t._id?.toString() || '',
        title: t.title,
        status: t.status,
        priority: t.priority,
        assignedTo: (t.assignedTo as { name?: string } | null)?.name || 'Unassigned',
        dueDate: t.dueDate?.toISOString().split('T')[0],
        blockers: t.blockers,
      };
      ctx.pendingTasks.push(tc);
    }

    // Progress for this project
    const projProgress = progressUpdates.filter(p => p.projectId?.toString() === proj._id?.toString());
    for (const p of projProgress.slice(0, 3)) {
      const pc: ProgressContext = {
        updateTitle: p.updateTitle,
        updateText: p.updateText,
        completedWork: p.completedWork,
        pendingWork: p.pendingWork,
        nextSteps: p.nextSteps,
        eta: p.eta,
        visibility: p.visibility,
        createdAt: p.createdAt.toISOString().split('T')[0],
      };
      ctx.recentProgress.push(pc);
    }
  }

  const clients = Array.from(clientMap.values());

  const summary = `Found ${clients.length} client(s), ${projects.length} project(s), ${tasks.length} pending task(s).${projectTypeFilter ? ` Filtered by service: ${projectTypeFilter}.` : ''}`;

  return {
    clients,
    summary,
    totalProjects: projects.length,
    pendingTasksCount: tasks.length,
  };
}

export async function retrieveClientContext(clientId: string): Promise<ClientContext | null> {
  await connectDB();

  const client = await Client.findById(clientId).lean();
  if (!client) return null;

  const projects = await Project.find({ clientId })
    .populate('serviceId', 'name')
    .populate('assignedTeam', 'name')
    .lean();

  const projectIds = projects.map(p => p._id?.toString());

  const [tasks, progress] = await Promise.all([
    Task.find({ projectId: { $in: projectIds }, status: { $nin: ['completed'] } })
      .populate('assignedTo', 'name').lean(),
    ProgressUpdate.find({ projectId: { $in: projectIds }, visibility: 'client_safe' })
      .sort({ createdAt: -1 }).limit(5).lean(),
  ]);

  return {
    id: client._id?.toString() || '',
    name: client.name,
    companyName: client.companyName,
    businessType: client.businessType,
    status: client.status,
    projects: projects.map(p => ({
      id: p._id?.toString() || '',
      name: p.name,
      clientName: client.name,
      serviceName: (p.serviceId as { name?: string } | null)?.name || '',
      status: p.status,
      progressPercentage: p.progressPercentage,
      currentStage: p.currentStage,
      latestUpdate: p.latestUpdate,
      risks: p.risks,
      nextStep: p.nextStep,
      dueDate: p.dueDate?.toISOString().split('T')[0],
      assignedTeam: (p.assignedTeam as { name?: string }[]).map(t => t.name || ''),
    })),
    pendingTasks: tasks.map(t => ({
      id: t._id?.toString() || '',
      title: t.title,
      status: t.status,
      priority: t.priority,
      assignedTo: (t.assignedTo as { name?: string } | null)?.name || 'Unassigned',
      dueDate: t.dueDate?.toISOString().split('T')[0],
      blockers: t.blockers,
    })),
    recentProgress: progress.map(p => ({
      updateTitle: p.updateTitle,
      updateText: p.updateText,
      completedWork: p.completedWork,
      pendingWork: p.pendingWork,
      nextSteps: p.nextSteps,
      eta: p.eta,
      visibility: p.visibility,
      createdAt: p.createdAt.toISOString().split('T')[0],
    })),
  };
}
