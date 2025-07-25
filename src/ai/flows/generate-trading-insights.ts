'use server';

/**
 * @fileOverview Generates summaries of identified trading patterns and opportunities.
 *
 * - generateTradingInsights - A function that generates trading insights.
 * - GenerateTradingInsightsInput - The input type for the generateTradingInsights function.
 * - GenerateTradingInsightsOutput - The return type for the generateTradingInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTradingInsightsInputSchema = z.object({
  marketData: z
    .string()
    .describe('The current market data to analyze.'),
});
export type GenerateTradingInsightsInput = z.infer<
  typeof GenerateTradingInsightsInputSchema
>;

const GenerateTradingInsightsOutputSchema = z.object({
  summary: z.string().describe('A summary of the identified trading patterns and opportunities.'),
});
export type GenerateTradingInsightsOutput = z.infer<
  typeof GenerateTradingInsightsOutputSchema
>;

export async function generateTradingInsights(
  input: GenerateTradingInsightsInput
): Promise<GenerateTradingInsightsOutput> {
  return generateTradingInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTradingInsightsPrompt',
  input: {schema: GenerateTradingInsightsInputSchema},
  output: {schema: GenerateTradingInsightsOutputSchema},
  prompt: `You are an expert trading analyst. Analyze the following market data and provide a concise summary of identified patterns and potential trading opportunities.

Market Data: {{{marketData}}}`,
});

const generateTradingInsightsFlow = ai.defineFlow(
  {
    name: 'generateTradingInsightsFlow',
    inputSchema: GenerateTradingInsightsInputSchema,
    outputSchema: GenerateTradingInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
