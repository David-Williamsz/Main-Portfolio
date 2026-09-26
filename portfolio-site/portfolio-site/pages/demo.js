import Layout from "../components/Layout";
import { TELEGRAM_BOT_USERNAME } from "../config.js";

export default function Demo() {
  const botUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

  return (
    <Layout title="Demo" description="Talk to Michael's AI assistant on Telegram — the same kind of system built for client businesses.">
      <section className="container narrow">
        <h1>Talk to it yourself</h1>
        <p style={{ fontSize: "1.1rem" }}>
          This is Michael's own AI assistant, running on Telegram. It
          answers on his behalf when he's not online — the same kind of
          system built for a client's business, just pointed at this one.
        </p>
        <p>
          It'll tell you upfront that it's AI. Ask it about services,
          pricing, or anything else — if it doesn't know, it'll say so and
          offer to connect you with Michael directly.
        </p>
        <a href={botUrl} target="_blank" rel="noopener" className="btn" style={{ marginTop: 10 }}>
          Open the demo in Telegram
        </a>
      </section>
    </Layout>
  );
}
