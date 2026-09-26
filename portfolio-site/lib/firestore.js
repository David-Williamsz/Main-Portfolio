import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "../config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * These run at BUILD TIME (getStaticProps / getStaticPaths), not in the
 * browser. They rely on the same public "published projects are readable
 * by anyone" rule the live site would use — no admin credentials needed
 * here, which is deliberate: the public build should only ever see what
 * an anonymous visitor could see.
 */

export async function fetchPublishedProjects() {
  const q = query(collection(db, "projects"), where("status", "==", "published"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function fetchProjectBySlug(slug) {
  const projects = await fetchPublishedProjects();
  return projects.find((p) => p.slug === slug) || null;
}
