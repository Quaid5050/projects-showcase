import { UserRole } from '@/types';

export const isAdmin = (r: UserRole) => r === 'admin';
export const isCEO = (r: UserRole) => r === 'ceo';
export const isManager = (r: UserRole) => r === 'manager';
export const isSales = (r: UserRole) => r === 'sales';
export const isTeam = (r: UserRole) => r === 'team';

export const isAdminOrCEO = (r: UserRole) => r === 'admin' || r === 'ceo';
export const isAdminCEOOrManager = (r: UserRole) => ['admin','ceo','manager'].includes(r);
export const canViewAllClients = (r: UserRole) => ['admin','ceo','manager'].includes(r);
export const canViewAllProjects = (r: UserRole) => ['admin','ceo','manager'].includes(r);
export const canViewAllLeads = (r: UserRole) => ['admin','ceo','manager'].includes(r);
export const canManageServices = (r: UserRole) => ['admin','ceo'].includes(r);
export const canManageUsers = (r: UserRole) => r === 'admin';
export const canDeleteClients = (r: UserRole) => ['admin','ceo'].includes(r);
export const canDeleteProjects = (r: UserRole) => ['admin','ceo','manager'].includes(r);
export const canApproveAIReplies = (_r: UserRole) => true;
export const canGenerateAI = (_r: UserRole) => true;

export const PERMISSIONS = {
  VIEW_ALL_CLIENTS: ['admin','ceo','manager'] as UserRole[],
  CREATE_CLIENTS: ['admin','ceo','manager','sales'] as UserRole[],
  DELETE_CLIENTS: ['admin','ceo'] as UserRole[],
  VIEW_ALL_PROJECTS: ['admin','ceo','manager'] as UserRole[],
  CREATE_PROJECTS: ['admin','ceo','manager'] as UserRole[],
  DELETE_PROJECTS: ['admin','ceo','manager'] as UserRole[],
  VIEW_ALL_LEADS: ['admin','ceo','manager'] as UserRole[],
  MANAGE_SERVICES: ['admin','ceo'] as UserRole[],
  MANAGE_USERS: ['admin'] as UserRole[],
  USE_AI: ['admin','ceo','manager','sales','team'] as UserRole[],
};

export function hasPermission(role: UserRole, perm: keyof typeof PERMISSIONS): boolean {
  return PERMISSIONS[perm].includes(role);
}
