import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
  role: z.enum(['admin','ceo','manager','sales','team']).default('sales'),
});

export const clientSchema = z.object({
  name: z.string().min(1),
  companyName: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  businessType: z.string().optional(),
  source: z.string().optional(),
  status: z.enum(['lead','active','paused','completed','lost']).default('active'),
  assignedSales: z.string().optional().nullable(),
  assignedManager: z.string().optional().nullable(),
  notes: z.string().default(''),
  tags: z.array(z.string()).default([]),
});

export const projectSchema = z.object({
  clientId: z.string().min(1),
  serviceId: z.string().min(1),
  name: z.string().min(1),
  description: z.string().default(''),
  type: z.enum(['website_development','app_development','google_ads','meta_ads','seo','branding','social_media','graphic_design','support','other']).default('other'),
  status: z.enum(['not_started','in_progress','waiting_client','review','completed','paused','cancelled']).default('not_started'),
  priority: z.enum(['low','medium','high','urgent']).default('medium'),
  assignedManager: z.string().optional().nullable(),
  assignedTeam: z.array(z.string()).default([]),
  startDate: z.string().optional(),
  dueDate: z.string().optional(),
  progressPercentage: z.number().min(0).max(100).default(0),
  currentStage: z.string().default(''),
  latestUpdate: z.string().default(''),
  risks: z.string().default(''),
  nextStep: z.string().default(''),
});

export const taskSchema = z.object({
  projectId: z.string().min(1),
  clientId: z.string().min(1),
  serviceId: z.string().min(1),
  title: z.string().min(1),
  description: z.string().default(''),
  status: z.enum(['todo','in_progress','review','completed','blocked']).default('todo'),
  priority: z.enum(['low','medium','high','urgent']).default('medium'),
  assignedTo: z.string().optional().nullable(),
  dueDate: z.string().optional(),
  blockers: z.string().default(''),
  internalNotes: z.string().default(''),
});

export const progressSchema = z.object({
  clientId: z.string().min(1),
  projectId: z.string().min(1),
  serviceId: z.string().min(1),
  updateTitle: z.string().min(1),
  updateText: z.string().min(1),
  completedWork: z.string().default(''),
  pendingWork: z.string().default(''),
  blockers: z.string().default(''),
  nextSteps: z.string().default(''),
  eta: z.string().default(''),
  visibility: z.enum(['internal','client_safe']).default('internal'),
});

export const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  businessType: z.string().optional(),
  source: z.string().optional(),
  serviceInterest: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(1),
  assignedTo: z.string().optional().nullable(),
  stage: z.enum(['new','contacted','qualifying','proposal_sent','negotiation','won','lost']).default('new'),
  priority: z.enum(['low','medium','high','urgent']).default('medium'),
  tags: z.array(z.string()).default([]),
});
