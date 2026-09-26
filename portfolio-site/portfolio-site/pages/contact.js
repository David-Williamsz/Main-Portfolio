import Layout from "../components/Layout";
import { TELEGRAM_BOT_USERNAME } from "../config.js";

export default function Contact() {
  const botUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

  return (
    <Layout title="Contact" description="Get in touch — starting ranges and how pricing actually works.">
      <section className="container narrow">
        <h1>Get in touch</h1>
        <p>
          Message the demo assistant on Telegram, or reach out directly —
          either way, the next step is a short conversation about what you
          actually need, not a form that guesses.
        </p>

        <a href={botUrl} target="_blank" rel="noopener" className="btn">Message on Telegram</a>

        <h2 style={{ marginTop: 50 }}>Starting ranges</h2>
        <p className="narrow">
          These are starting points, not fixed quotes — final pricing
          depends on scope. We'll agree on the details and the price
          before anything starts. Third-party costs (AI usage, hosting,
          ad spend) are separate unless explicitly included in the quote.
        </p>
        <ul>
          <li>Websites — from $50</li>
          <li>Telegram bots — from $50</li>
          <li>AI chatbots — from $50</li>
          <li>Automation — from $50</li>
          <li>Ads setup & management — from $50</li>
          <li>Email marketing — from $20</li>
        </ul>
      </section>
    </Layout>
  );
}
