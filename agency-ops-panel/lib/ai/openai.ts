import OpenAI from 'openai';

let client: OpenAI | null = null;

export function getAIClient(): OpenAI {
  if (!client) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) throw new Error('GROQ_API_KEY is not set in .env.local');
    client = new OpenAI({
      apiKey,
      baseURL: 'https://api.groq.com/openai/v1',
    });
  }
  return client;
}

export async function callAI(systemPrompt: string, userMessage?: string): Promise<string> {
  const ai = getAIClient();
  const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: systemPrompt },
  ];
  if (userMessage) messages.push({ role: 'user', content: userMessage });

  try {
    // Try with json_object response format first (faster parsing)
    const res = await ai.chat.completions.create({
      model,
      messages,
      temperature: 0.4,
      max_tokens: 2500,
      response_format: { type: 'json_object' },
    });
    const content = res.choices[0]?.message?.content;
    if (!content) throw new Error('Empty response from AI');
    return content;
  } catch (firstErr: unknown) {
    // If json_object not supported, retry without it
    const msg = firstErr instanceof Error ? firstErr.message : '';
    if (msg.includes('response_format') || msg.includes('json_object') || msg.includes('not supported')) {
      const res2 = await ai.chat.completions.create({
        model,
        messages,
        temperature: 0.4,
        max_tokens: 2500,
      });
      const content2 = res2.choices[0]?.message?.content;
      if (!content2) throw new Error('Empty response from AI');
      // Extract JSON from markdown code block if present
      const jsonMatch = content2.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) return jsonMatch[1].trim();
      // Try to find raw JSON object
      const objMatch = content2.match(/\{[\s\S]*\}/);
      if (objMatch) return objMatch[0];
      return content2;
    }
    throw firstErr;
  }
}
