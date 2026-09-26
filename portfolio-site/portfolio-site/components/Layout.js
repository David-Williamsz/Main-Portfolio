import Head from "next/head";
import Link from "next/link";

const SITE_NAME = "Michael";
const DEFAULT_DESCRIPTION = "Practical automation systems for businesses — websites, Telegram AI assistants, and the workflows that connect them.";

export default function Layout({ children, title, description, image }) {
  const pageTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || DEFAULT_DESCRIPTION} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description || DEFAULT_DESCRIPTION} />
        {image && <meta property="og:image" content={image} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="site-header container">
        <Link href="/" className="logo">Michael</Link>
        <nav>
          <Link href="/work">Work</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/about">Process</Link>
          <Link href="/demo">Demo</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer container">
        <p>© {new Date().getFullYear()} Michael. Built and run as a one-person operation — every project on this site was actually built, not just designed.</p>
      </footer>
    </>
  );
}
