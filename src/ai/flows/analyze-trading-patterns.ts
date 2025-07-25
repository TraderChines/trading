'use server';

/**
 * @fileOverview Analyzes trading patterns using AI to identify chart patterns, highlight key trading zones, and provide insights.
 *
 * - analyzeTradingPatterns - A function that handles the analysis of trading patterns.
 * - AnalyzeTradingPatternsInput - The input type for the analyzeTradingPatterns function.
 * - AnalyzeTradingPatternsOutput - The return type for the analyzeTradingPatterns function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTradingPatternsInputSchema = z.object({
  tradingScreenDataUri: z
    .string()
    .describe(
      "A screenshot of the trading screen, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('The description of the trading strategy being employed.'),
});
export type AnalyzeTradingPatternsInput = z.infer<typeof AnalyzeTradingPatternsInputSchema>;

const AnalyzeTradingPatternsOutputSchema = z.object({
  patternsIdentified: z.array(z.string()).describe('The patterns identified in the trading screen.'),
  keyTradingZones: z.array(z.string()).describe('The key trading zones identified in the trading screen.'),
  insights: z.string().describe('The insights derived from the analysis of the trading screen.'),
});
export type AnalyzeTradingPatternsOutput = z.infer<typeof AnalyzeTradingPatternsOutputSchema>;

export async function analyzeTradingPatterns(input: AnalyzeTradingPatternsInput): Promise<AnalyzeTradingPatternsOutput> {
  return analyzeTradingPatternsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTradingPatternsPrompt',
  input: {schema: AnalyzeTradingPatternsInputSchema},
  output: {schema: AnalyzeTradingPatternsOutputSchema},
  prompt: `You are an expert trading analyst specializing in identifying chart patterns and key trading zones.

You will use the provided information to analyze the trading screen and identify any relevant patterns, key trading zones, and provide insights.

Description of the strategy being employed: {{{description}}}
Trading Screen: {{media url=tradingScreenDataUri}}

Identify patterns, key trading zones, and provide insights based on the trading screen and strategy description.
`,
});

const analyzeTradingPatternsFlow = ai.defineFlow(
  {
    name: 'analyzeTradingPatternsFlow',
    inputSchema: AnalyzeTradingPatternsInputSchema,
    outputSchema: AnalyzeTradingPatternsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
