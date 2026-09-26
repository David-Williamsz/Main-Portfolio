import Layout from "../components/Layout";

const STEPS = [
  { name: "Understand", detail: "What's actually slowing your business down, in your words, not a checklist." },
  { name: "Design", detail: "What the smallest useful version of a fix looks like." },
  { name: "Build", detail: "The actual thing — a bot, a site, a workflow." },
  { name: "Connect", detail: "Wiring it into what you already use, not replacing everything." },
  { name: "Automate", detail: "Removing the manual step, once the first version proves itself." },
  { name: "Improve", detail: "Adjusting based on what actually happens once real people use it." }
];

export default function About() {
  return (
    <Layout title="Process" description="How projects actually get built, step by step.">
      <section className="container narrow">
        <h1>How this works</h1>
        <p>
          I'm a university student and freelance developer — I'm not
          pretending to run an agency. What I do have: a working process,
          and I use AI tools deliberately to build faster without cutting
          corners on what actually gets shipped.
        </p>

        {STEPS.map((step, i) => (
          <div key={step.name} style={{ marginBottom: 24 }}>
            <h3>{i + 1}. {step.name}</h3>
            <p>{step.detail}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
