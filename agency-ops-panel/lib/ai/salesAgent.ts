import { callAI } from './openai';
import { buildSalesReplyPrompt } from './prompts';

export interface SalesReplyOutput {
  suggestedReply: string;
  shortReply: string;
  internalSummary: string;
  missingInfo: string[];
  riskLevel: 'low' | 'medium' | 'high';
  nextStep: string;
  serviceDetected: string;
  qualificationScore: number;
}

function defaultSalesReply(message: string): SalesReplyOutput {
  return {
    suggestedReply: `Thank you for reaching out! We'd love to help you. Could you please share more details about your requirements so we can suggest the best approach for your needs?`,
    shortReply: `Thanks for contacting us! Please share more details so we can assist you better.`,
    internalSummary: `Lead inquiry received. AI generation failed. Manual review needed.`,
    missingInfo: ['Service type', 'Budget', 'Timeline'],
    riskLevel: 'low',
    nextStep: 'Ask qualifying questions',
    serviceDetected: 'General Inquiry',
    qualificationScore: 20,
  };
}

export async function generateSalesReply(
  message: string,
  leadDetails: string,
  servicesText: string
): Promise<SalesReplyOutput> {
  try {
    const prompt = buildSalesReplyPrompt(message, leadDetails, servicesText);
    const raw = await callAI(prompt);
    try {
      return JSON.parse(raw) as SalesReplyOutput;
    } catch {
      return defaultSalesReply(message);
    }
  } catch (err) {
    console.error('[SalesAgent]', err);
    return defaultSalesReply(message);
  }
}
