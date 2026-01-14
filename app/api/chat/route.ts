import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(request: Request) {
    const { prompt } = await request.json();

    const result = streamText({
        model: openai("gpt-4o-mini"),
        messages: [{ role: "user", content: prompt }],
    });

    return new Response(result.textStream, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
