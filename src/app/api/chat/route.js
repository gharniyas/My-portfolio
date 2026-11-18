import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "../../data/profile";

const GEMINI_MODEL = "gemini-flash-lite-latest";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const FALLBACK_MESSAGE =
  "I couldn't reach the AI service right now. Please email gharniyasramesh@gmail.com or use the Contact page to reach Gharniyas directly.";

export async function POST(request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { reply: FALLBACK_MESSAGE },
      { status: 200 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { messages } = body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages array is required" }, { status: 400 });
  }

  const trimmedHistory = messages.slice(-10);

  const contents = trimmedHistory.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content ?? "").slice(0, 2000) }],
  }));

  try {
    const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => "");
      console.error("Gemini API error:", geminiRes.status, errText);
      return NextResponse.json({ reply: FALLBACK_MESSAGE }, { status: 200 });
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ||
      FALLBACK_MESSAGE;

    return NextResponse.json({ reply }, { status: 200 });
  } catch {
    return NextResponse.json({ reply: FALLBACK_MESSAGE }, { status: 200 });
  }
}
