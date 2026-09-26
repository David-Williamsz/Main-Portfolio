import Link from "next/link";
import Layout from "../components/Layout";
import Pipeline from "../components/Pipeline";
import { fetchPublishedProjects } from "../lib/firestore";

export default function Home({ projects }) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const showPlaceholder = featured.length === 0;

  return (
    <Layout>
      <section className="hero container">
        <p className="eyebrow">Automation systems for small businesses</p>
        <h1>Practical systems for businesses<br />that outgrew doing it by hand.</h1>
        <p className="narrow" style={{ fontSize: "1.1rem", marginTop: 20 }}>
          I build the websites, AI assistants, and connected workflows that
          take work off your plate — scoped to what you actually need, not
          what sounds impressive.
        </p>
        <div style={{ marginTop: 28, display: "flex", gap: 14 }}>
          <Link href="/work" className="btn">See the work</Link>
          <Link href="/demo" className="btn btn-outline">Talk to the demo assistant</Link>
        </div>
      </section>

      <section className="container">
        <Pipeline />
      </section>

      <section className="container">
        <h2>Selected work</h2>
        {showPlaceholder ? (
          <div>
            <span className="placeholder-tag">Placeholder — real projects go here</span>
            <div className="project-row">
              <div>
                <h3>Sample project title</h3>
                <p className="categories">Category · Category</p>
              </div>
            </div>
          </div>
        ) : (
          featured.map((p) => (
            <div className="project-row" key={p.id}>
              <div>
                <h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3>
                <p className="categories">{(p.categories || []).join(" · ")}</p>
              </div>
            </div>
          ))
        )}
        <p style={{ marginTop: 20 }}><Link href="/work">View all work →</Link></p>
      </section>

      <section className="container">
        <h2>See it before you commit to anything</h2>
        <p className="narrow">
          Instead of describing what an AI assistant could do for your
          business, talk to one directly — it's the same kind of system
          built for me, answering on my behalf right now.
        </p>
        <Link href="/demo" className="btn" style={{ marginTop: 10 }}>Try the demo assistant</Link>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await fetchPublishedProjects();
  return { props: { projects } };
}
