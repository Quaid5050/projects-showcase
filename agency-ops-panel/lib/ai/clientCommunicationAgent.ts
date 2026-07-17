import { callAI } from './openai';
import { buildClientReplyPrompt } from './prompts';
import { retrieveClientContext } from './dataRetriever';
import '@/lib/models'; // ensure all models registered before populate
import { ClientReplyOutput } from './types';

function defaultReply(): ClientReplyOutput {
  return {
    suggestedReply: 'Hi, thank you for reaching out. Our team is currently reviewing your project status and will provide you with a detailed update shortly.',
    shortReply: 'Thanks for checking in! We\'ll have an update for you shortly.',
    internalSummary: 'AI could not generate reply — client context missing. Please add progress updates.',
    missingInfo: ['Project progress data', 'Client-safe updates'],
    riskLevel: 'medium',
    nextStep: 'Add client-safe progress updates to the project.',
  };
}

export async function generateClientReply(
  clientMessage: string,
  clientId: string,
  conversationHistory: Array<{ senderType: string; content: string; createdAt?: string }>
): Promise<ClientReplyOutput> {
  try {
    const clientCtx = await retrieveClientContext(clientId);
    if (!clientCtx) return defaultReply();

    const historyText = conversationHistory
      .slice(-10)
      .map(m => `[${m.senderType.toUpperCase()}]: ${m.content}`)
      .join('\n');

    const prompt = buildClientReplyPrompt(clientMessage, clientCtx, historyText);
    const raw = await callAI(prompt);

    try {
      return JSON.parse(raw) as ClientReplyOutput;
    } catch {
      return { ...defaultReply(), suggestedReply: raw };
    }
  } catch (error) {
    console.error('[ClientCommunicationAgent]', error);
    return defaultReply();
  }
}
