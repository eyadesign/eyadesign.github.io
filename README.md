# Eyad Mahmoud — Portfolio

Personal portfolio for Eyad Mahmoud, Senior UI/UX & Product Designer. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes: `/` (home), `/work` (index), `/work/[slug]` (case studies), `/info`
- `src/components` — UI components; `src/components/CaseStudy` holds case-study-specific building blocks
- `src/lib/projects.ts` — project data model and content (the source of truth for all case studies)
- `src/lib/content.ts` — experience, expertise, tools, contact info
- `src/lib/types.ts` — the `Project` content schema

## Replacing placeholder content

Case study copy in `src/lib/projects.ts` is marked with `[REPLACE LATER]` / `[TO BE PROVIDED]` tags — swap these for real case-study writing and metrics as they become available. Images are rendered as labeled placeholders (`PlaceholderImage`); swap in real assets by extending that component or replacing it with `next/image` once real project imagery exists.

## Design system

Tokens (color, spacing, motion, grid) live in `src/app/globals.css`. The site is monochrome with one restrained accent color, supports light and dark mode automatically via `prefers-color-scheme`, and respects `prefers-reduced-motion` throughout.
