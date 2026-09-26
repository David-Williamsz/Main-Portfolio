import Link from "next/link";
import Layout from "../../components/Layout";
import { fetchPublishedProjects } from "../../lib/firestore";

export default function Work({ projects }) {
  return (
    <Layout title="Work" description="Projects actually built — websites, Telegram AI assistants, and automation systems.">
      <section className="container">
        <h1>Work</h1>
        <p className="narrow">
          Every project here was actually built for someone. No invented
          case studies, no metrics that can't be backed up.
        </p>

        {projects.length === 0 ? (
          <div style={{ marginTop: 30 }}>
            <span className="placeholder-tag">Placeholder — populated once real projects are published</span>
            <div className="project-row">
              <div>
                <h3>Sample project title</h3>
                <p className="categories">Category · Category</p>
              </div>
            </div>
          </div>
        ) : (
          projects.map((p) => (
            <div className="project-row" key={p.id}>
              <div>
                <h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3>
                <p className="categories">{(p.categories || []).join(" · ")}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await fetchPublishedProjects();
  return { props: { projects } };
}
