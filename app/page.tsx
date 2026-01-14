"use client";

import { useState } from "react";

export default function Page() {
    const [userPrompt, setUserPrompt] = useState("");
    const [assistantText, setAssistantText] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);

    async function sendPrompt() {
        if (!userPrompt.trim() || isStreaming) return;

        setAssistantText("");
        setIsStreaming(true);

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: userPrompt }),
        });

        setUserPrompt("");

        const reader = response.body!.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunkText = decoder.decode(value, { stream: true });
            setAssistantText((current) => current + chunkText);
        }

        setIsStreaming(false);
    }

    return (
        <main className="sdk">
            <div className="sdk__mark" aria-hidden="true" />

            <h1 className="sdk__title">
                AI Powered <em>Chat</em>
            </h1>
            <p className="sdk__subtitle">Workshop</p>

            <section className="chatCard" aria-label="Chat panel">
                <header className="chatCard__header">
          <span className="chatCard__icon" aria-hidden="true">
            ✦
          </span>

                    <h2 className="chatCard__heading">
                        {isStreaming ? "Streaming…" : "How can I assist you today?"}
                    </h2>
                </header>

                <div className="chatCard__body">
                    {!assistantText && !isStreaming && (
                        <p className="chatCard__empty">Type a message to see streaming in action.</p>
                    )}

                    {assistantText && <p className="chatCard__text">{assistantText}</p>}

                    {isStreaming && <span className="chatCard__dot" aria-hidden="true" />}
                </div>

                <form
                    className="composer"
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendPrompt();
                    }}
                >
                    <div className="composer__inputWrap">
                        <input
                            className="composer__input"
                            value={userPrompt}
                            onChange={(e) => setUserPrompt(e.target.value)}
                            placeholder="Ask anything…"
                            aria-label="Prompt"
                        />

                        <button
                            className="composer__send"
                            type="submit"
                            aria-label="Send"
                            disabled={isStreaming}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}
