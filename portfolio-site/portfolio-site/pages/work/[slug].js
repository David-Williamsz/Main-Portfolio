import Layout from "../../components/Layout";
import { fetchPublishedProjects, fetchProjectBySlug } from "../../lib/firestore";

export default function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <Layout title={project.title} description={project.summary} image={project.seo?.image || project.thumbnail}>
      <article className="container narrow">
        <p className="categories">{(project.categories || []).join(" · ")}</p>
        <h1>{project.title}</h1>
        <p style={{ fontSize: "1.15rem" }}>{project.summary}</p>

        {project.problem && (
          <>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </>
        )}

        {project.solution && (
          <>
            <h2>The approach</h2>
            <p>{project.solution}</p>
          </>
        )}

        {project.technologies?.length > 0 && (
          <>
            <h2>Built with</h2>
            <p>{project.technologies.join(", ")}</p>
          </>
        )}

        {project.outcome && (
          <>
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </>
        )}

        {(project.liveUrl || project.demoUrl) && (
          <p style={{ marginTop: 20 }}>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener">View live</a>}
            {project.liveUrl && project.demoUrl && " · "}
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener">Try the demo</a>}
          </p>
        )}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const projects = await fetchPublishedProjects();
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    // false, not 'blocking' — static export requires every page to be
    // generated at build time. A new project appearing means a rebuild,
    // per the "Firestore update → rebuild → deploy" contract, not a
    // request-time render.
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = await fetchProjectBySlug(params.slug);
  if (!project) {
    return { notFound: true };
  }
  return { props: { project } };
}
