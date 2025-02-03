import { openai } from "@ai-sdk/openai";
import { streamText, generateText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const language = "Mandarin";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const prompt = `You are a language learning assistant specializing in ${language}. Your goal is to help students understand and learn Mandarin by providing accurate translations, word-by-word explanations, and simple grammar insights. Your responses should be clear, structured, and easy to understand.

If it's a sentence, return:
1) The meaning of each word of the sentence
2) The meaning of the full sentence
If you find necessary, explain a bit of the grammar in the sentence, but in a simple way

If it's a word or expression, return:
1) A small sentence using the word or expression with a translation

If the person asks for translation, you can also pass from the language she is using to ${language}
Case you detect grammar or spelling mistakes, you can point them out

The user query: ${messages}`;

  const { text: response } = await generateText({
    model: openai("gpt-4o"),
    // messages,
    prompt: prompt,
  });

  console.log(response);
  return response;
}
