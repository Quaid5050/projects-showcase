export type UserRole = 'admin' | 'ceo' | 'manager' | 'sales' | 'team' | 'client';

export type ClientStatus = 'lead' | 'active' | 'paused' | 'completed' | 'lost';

export type ProjectType =
  | 'website_development' | 'app_development' | 'google_ads'
  | 'meta_ads' | 'seo' | 'branding' | 'social_media'
  | 'graphic_design' | 'support' | 'other';

export type ProjectStatus =
  | 'not_started' | 'in_progress' | 'waiting_client'
  | 'review' | 'completed' | 'paused' | 'cancelled';

export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'completed' | 'blocked';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type LeadStage =
  | 'new' | 'contacted' | 'qualifying'
  | 'proposal_sent' | 'negotiation' | 'won' | 'lost';

export type ConversationChannel =
  | 'manual' | 'whatsapp' | 'email' | 'instagram' | 'facebook' | 'website';

export type MessageSenderType = 'client' | 'sales' | 'team' | 'ai' | 'system';
export type MessageDirection = 'inbound' | 'outbound' | 'internal';
export type MessageStatus = 'draft' | 'approved' | 'sent';
export type AIReplyStatus = 'draft' | 'approved' | 'rejected' | 'edited';
export type RiskLevel = 'low' | 'medium' | 'high';
export type ProgressVisibility = 'internal' | 'client_safe';

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
