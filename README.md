# Eyad Mahmoud — Portfolio

Personal portfolio of Eyad Mahmoud, Senior UI/UX & Product Designer.
Built with Next.js (static export), Tailwind CSS v4, Framer Motion and Lenis, and deployed to GitHub Pages on every push to `main`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content (CMS)

- **Content editor:** https://eyadesign.github.io/admin/ (Sveltia CMS). Sign in with "Sign In Using Access Token" and a GitHub fine-grained token that has *Contents: Read and write* on this repo. Every save commits to `main` and the site redeploys in about a minute.
- **Messages inbox:** https://eyadesign.github.io/admin/inbox/ — contact-form messages stored in Supabase (`eyad-portfolio` project, `messages` table). Sign in with the email link; only the owner's email can read messages (enforced by row-level security).
- Content lives in `content/`: `projects/*.json` (one file per case study), `home.json`, `work.json`, `settings.json`. CMS uploads go to `public/uploads/`.
- CMS fields are defined in `public/admin/config.yml`.

Case-study slides were exported from the Figma file and compressed to WebP (1600px wide).

## Deploying

`.github/workflows/deploy.yml` builds the static site and publishes it to GitHub Pages. The base path is derived from the repository name automatically, so the site works both as `<user>.github.io` and as a project repo.
