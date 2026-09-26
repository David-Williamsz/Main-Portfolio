import Layout from "../components/Layout";

const GROUPS = [
  {
    name: "Presence & Capture",
    description: "So people find you and trust what they see.",
    items: ["Websites", "Landing pages", "Lead capture forms"]
  },
  {
    name: "Engagement & Support",
    description: "So you never miss a message or a lead.",
    items: ["AI chatbots", "Telegram bots", "Automated replies"]
  },
  {
    name: "Growth",
    description: "So the right people find you, consistently.",
    items: ["Ad setup & management", "Email marketing", "Follow-up automation"]
  },
  {
    name: "Backend Automation",
    description: "So the admin work runs itself.",
    items: ["Make/Zapier workflows", "Google Apps Script", "Sheets & Drive integrations"]
  }
];

export default function Solutions() {
  return (
    <Layout title="Solutions" description="Four kinds of systems: presence, engagement, growth, and backend automation.">
      <section className="container">
        <h1>Solutions</h1>
        <p className="narrow">
          These aren't separate services — they're the parts of one system.
          Most projects touch two or three of these at once.
        </p>

        {GROUPS.map((group) => (
          <div className="solution-block" key={group.name}>
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            <p className="categories">{group.items.join(" · ")}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
