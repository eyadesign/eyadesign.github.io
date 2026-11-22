# Eyad Mahmoud — Portfolio

Personal portfolio of Eyad Mahmoud, Senior UI/UX & Product Designer.
Built with Next.js (static export), Tailwind CSS v4, Framer Motion and Lenis, and deployed to GitHub Pages on every push to `main`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

- **Projects / case studies:** `src/lib/projects.ts` — each project has meta, a summary and a list of `blocks` (title, text, list, images).
- **Profile, services, experience, NDA work:** `src/lib/site.ts`.
- **Images:** `public/work/<slug>/` (cover + slides), `public/nda/`, `public/images/` (portraits).

Case-study slides were exported from the Figma file and compressed to WebP (1600px wide).

## Deploying

`.github/workflows/deploy.yml` builds the static site and publishes it to GitHub Pages. The base path is derived from the repository name automatically, so the site works both as `<user>.github.io` and as a project repo.
