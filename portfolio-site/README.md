# Portfolio Site

Next.js, statically exported (per the frozen architecture: SEO-friendly
HTML, no server to maintain, rebuilds on publish).

## Design choices (not defaults — see reasoning)

- **Palette**: paper `#FAF8F3` / ink `#1B2430` / connector-line `#3A6B63` /
  brass accent `#B8863B`. Deliberately not the common AI-generated
  cream+terracotta or black+neon combos.
- **Type**: Fraunces (headlines) + IBM Plex Sans (body) — a pairing with
  actual character, not the generic serif+Inter default.
- **Layout**: left-aligned, asymmetric — not centered hero cards. The one
  real visual motif is the Attract→Automate pipeline, because that's an
  actual sequence in the business, not decoration.
- **Motion**: exactly one moment — the pipeline draws itself once on load.
  Nothing else animates. Respects `prefers-reduced-motion`.

## SEO — sitemap and robots.txt (added)

- `public/robots.txt` — allows crawling, points to the sitemap. **Replace
  `YOUR-DOMAIN-HERE` with your real domain once you have one.**
- `scripts/generate-sitemap.js` — runs automatically after every build
  (`npm run build` now runs this as a second step), writes `sitemap.xml`
  listing every static page plus every published project's URL. Set the
  `SITE_URL` environment variable in Netlify to your real domain so the
  sitemap uses the right URLs instead of the placeholder.
- Getting indexed by Google still needs one manual step after you're
  live: submit the site (and this sitemap URL) in Google Search Console.
  The code makes the site indexable; actual indexing also depends on
  Google crawling it, which isn't something code alone controls.

## Setup

1. Copy `config.example.js` → `config.js`, fill in your Firebase web
   config and your Telegram bot's username (once it exists).
2. `npm install`
3. `npm run dev` to preview locally, or `npm run build` to produce the
   static export (outputs to `out/`, per `next.config.js`).
4. Deploy `out/` to Firebase Hosting, or connect this repo to Railway/
   Vercel/Netlify for automatic builds — any static host works.

## What's placeholder right now, on purpose

- Homepage and Work pages show a clearly labeled "Placeholder" project
  when Firestore has no published projects yet — never invented content
  pretending to be real.
- Pricing on the Contact page uses the actual starting ranges already
  decided, framed as starting points, matching the "quote first, invoice
  through the admin panel" payment flow — no self-serve checkout on this
  site at all, deliberately.
- The Demo page links to `TELEGRAM_BOT_USERNAME` — currently a
  placeholder until the bot exists and has a real username.

## Rebuild-on-publish (not yet wired up)

Per the frozen contract, publishing a project in the admin panel should
trigger a rebuild of this site automatically. That trigger (a small
Railway/GitHub Actions hook watching Firestore) isn't built yet — for now,
redeploy manually after publishing a new project. Worth automating once
this is confirmed working end-to-end.
