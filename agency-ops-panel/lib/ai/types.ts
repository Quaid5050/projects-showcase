export interface ClientReplyOutput {
  suggestedReply: string;
  shortReply: string;
  internalSummary: string;
  missingInfo: string[];
  riskLevel: 'low' | 'medium' | 'high';
  nextStep: string;
}

export interface OperationsAnswerOutput {
  answer: string;
  groupedSummary?: string;
  relevantClients?: string[];
  relevantProjects?: string[];
  pendingTasks?: string[];
  risks?: string[];
  missingData?: string[];
}

export interface ProjectContext {
  id: string; name: string; clientName: string;
  serviceName: string; status: string;
  progressPercentage: number; currentStage: string;
  latestUpdate: string; risks: string; nextStep: string;
  dueDate?: string; assignedTeam: string[];
}

export interface TaskContext {
  id: string; title: string; status: string;
  priority: string; assignedTo: string;
  dueDate?: string; blockers: string;
}

export interface ProgressContext {
  updateTitle: string; updateText: string;
  completedWork: string; pendingWork: string;
  nextSteps: string; eta: string;
  visibility: string; createdAt: string;
}

export interface ClientContext {
  id: string; name: string; companyName?: string;
  businessType?: string; status: string;
  projects: ProjectContext[];
  recentProgress: ProgressContext[];
  pendingTasks: TaskContext[];
}
