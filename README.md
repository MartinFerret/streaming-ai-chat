# Streaming AI Chat — Workshop Demo

**A minimal Next.js project demonstrating real-time AI streaming using the Vercel AI SDK.**

---

## ✨ What this project is about

This project shows **the simplest possible pattern** to stream an AI response  
from a server to the browser **in real time**.

The goal is intentionally narrow:

- send a prompt to an AI endpoint
- stream the response token-by-token
- understand and reuse the core streaming mental model

**read chunks → concatenate → render**

No chat history.  
No complex state.  
No abstractions hiding the logic.

---

## 🧠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Vercel AI SDK
- OpenAI (via `@ai-sdk/openai`)

---

## 📦 Dependencies

The Vercel AI SDK is **already installed**.

It was added using the following command:

```bash
npm install ai @ai-sdk/openai
```
You do not need to install anything else manually.

---

## 🔐 Environment Variables

Create a `.env` file at the root of the project:

```bash
OPENAI_API_KEY=your_api_key_here
```

## 🚀 Getting Started

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open: http://localhost:3000/

## 🧩 Project Structure (simplified)

```txt
app/
├─ api/
│  └─ chat/
│     └─ route.ts     # Streaming API route (server)
├─ page.tsx           # Client UI + stream reader
├─ layout.tsx
└─ globals.css
```

## 🔁 How streaming works (conceptually)

1. The client sends a prompt with fetch()
2. The server returns a plain text stream
3. The browser reads the response chunk by chunk
4. Each chunk is appended to the UI immediately
5. This is the entire pattern — nothing more.
  
## 🧪 Branches

`1-start` → starter version (exercise)
`1-end` → completed solution
