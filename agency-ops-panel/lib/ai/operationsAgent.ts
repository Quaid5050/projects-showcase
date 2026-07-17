import { callAI } from './openai';
import { buildOperationsPrompt } from './prompts';
import { retrieveContextForQuestion } from './dataRetriever';
import { OperationsAnswerOutput } from './types';
import { UserRole } from '@/types';

export async function askOperationsAgent(
  question: string,
  role: UserRole,
  clientId?: string
): Promise<OperationsAnswerOutput> {
  // Fetch context from MongoDB
  const context = await retrieveContextForQuestion(question, role, clientId);

  if (context.clients.length === 0 && context.totalProjects === 0) {
    return {
      answer: 'No matching data found in the panel for this query. Please add projects, clients, or progress updates first, then try again.',
      groupedSummary: '',
      relevantClients: [],
      relevantProjects: [],
      pendingTasks: [],
      risks: [],
      missingData: ['No clients or projects found matching this query'],
    };
  }

  const prompt = buildOperationsPrompt(question, context, role);

  // This will throw if AI fails — let the route handler catch and return the real error
  const raw = await callAI(prompt);

  try {
    return JSON.parse(raw) as OperationsAnswerOutput;
  } catch {
    // If JSON parse fails, wrap the raw text as answer
    return {
      answer: raw,
      groupedSummary: '',
      relevantClients: [],
      relevantProjects: [],
      pendingTasks: [],
      risks: [],
      missingData: [],
    };
  }
}
