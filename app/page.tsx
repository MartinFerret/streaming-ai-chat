"use client";

export default function Page() {
    return (
        <main className="sdk">
            <div className="sdk__mark" aria-hidden="true" />

            <h1 className="sdk__title">AI Powered <em>Chat</em></h1>
            <p className="sdk__subtitle">Workshop</p>

            <section className="chatCard" aria-label="Chat panel">
                <header className="chatCard__header">
                  <span className="chatCard__icon" aria-hidden="true">
                    ✦
                  </span>
                  <h2 className="chatCard__heading">How can I assist you today?</h2>
                </header>

                <div className="chatCard__body" />

                <form className="composer" onSubmit={(e) => e.preventDefault()}>
                    <div className="composer__inputWrap">
                        <input
                            className="composer__input"
                            placeholder="Ask anything…"
                            aria-label="Prompt"
                        />

                        <button className="composer__send" type="submit" aria-label="Send">
                            <svg
                                className="composer__icon"
                                width="24"
                                height="24"
                                data-name="1-Arrow Up"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
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
