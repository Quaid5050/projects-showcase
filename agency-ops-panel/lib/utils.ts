import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

export function formatDate(d: Date | string): string {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
export function formatDateTime(d: Date | string): string {
  return new Date(d).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}
export function formatRelativeTime(d: Date | string): string {
  const diff = Date.now() - new Date(d).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const days = Math.floor(h / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(d);
}
export function slugify(t: string): string {
  return t.toLowerCase().replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-').trim();
}
export function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}
export function truncate(s: string, n: number): string {
  return s.length <= n ? s : s.slice(0, n) + '...';
}

// Dark theme badge colors
export function getStatusColor(status: string): string {
  const m: Record<string, string> = {
    active: 'bg-green-900/40 text-green-400 border border-green-700/40',
    in_progress: 'bg-blue-900/40 text-blue-400 border border-blue-700/40',
    completed: 'bg-green-900/40 text-green-400 border border-green-700/40',
    paused: 'bg-yellow-900/40 text-yellow-400 border border-yellow-700/40',
    cancelled: 'bg-red-900/40 text-red-400 border border-red-700/40',
    not_started: 'bg-gray-800/60 text-gray-500 border border-gray-700/40',
    waiting_client: 'bg-orange-900/40 text-orange-400 border border-orange-700/40',
    review: 'bg-purple-900/40 text-purple-400 border border-purple-700/40',
    new: 'bg-blue-900/40 text-blue-400 border border-blue-700/40',
    won: 'bg-green-900/40 text-green-400 border border-green-700/40',
    lost: 'bg-red-900/40 text-red-400 border border-red-700/40',
    lead: 'bg-sky-900/40 text-sky-400 border border-sky-700/40',
    todo: 'bg-gray-800/60 text-gray-500 border border-gray-700/40',
    blocked: 'bg-red-900/40 text-red-400 border border-red-700/40',
    open: 'bg-green-900/40 text-green-400 border border-green-700/40',
    closed: 'bg-gray-800/60 text-gray-500 border border-gray-700/40',
    pending: 'bg-yellow-900/40 text-yellow-400 border border-yellow-700/40',
  };
  return m[status] || 'bg-gray-800/60 text-gray-500 border border-gray-700/40';
}

export function getPriorityColor(p: string): string {
  const m: Record<string, string> = {
    low: 'bg-gray-800/60 text-gray-500 border border-gray-700/40',
    medium: 'bg-yellow-900/40 text-yellow-400 border border-yellow-700/40',
    high: 'bg-orange-900/40 text-orange-400 border border-orange-700/40',
    urgent: 'bg-red-900/40 text-red-400 border border-red-700/40',
  };
  return m[p] || 'bg-gray-800/60 text-gray-500';
}

export function getRiskBadgeColor(risk: string): string {
  const m: Record<string, string> = {
    low: 'bg-green-900/40 text-green-400 border border-green-700/40',
    medium: 'bg-yellow-900/40 text-yellow-400 border border-yellow-700/40',
    high: 'bg-red-900/40 text-red-400 border border-red-700/40',
  };
  return m[risk] || 'bg-gray-800/60 text-gray-500';
}
