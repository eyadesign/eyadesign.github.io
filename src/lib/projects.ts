import fs from "node:fs";
import path from "node:path";

/** A case-study section. Body paragraphs are separated by blank lines. */
export interface Block {
  title: string;
  body?: string;
  bullets?: string[];
  /** One image renders full width, two side by side, three = one wide + two. */
  images?: string[];
}

export interface Project {
  slug: string;
  order?: number;
  featured?: boolean;
  title: string;
  /** Short line under the card title. */
  tagline: string;
  category: string;
  platform: string;
  client: string;
  /** Label for the client field, e.g. "Client" or "Market". */
  clientLabel?: string;
  summary: string;
  cover: string;
  blocks: Block[];
  note?: string;
}

// Each case study is a JSON file in /content/projects, edited through the CMS.
const dir = path.join(process.cwd(), "content", "projects");

export const projects: Project[] = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Partial<Project>;
    return {
      ...data,
      slug: data.slug || f.replace(/\.json$/, ""),
      blocks: data.blocks ?? [],
    } as Project;
  })
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title));

export const featured = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function moreProjects(slug: string, count = 2) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (projects.length <= 1) return [];
  return Array.from(
    { length: Math.min(count, projects.length - 1) },
    (_, k) => projects[(i + 1 + k) % projects.length]
  );
}

export const paragraphs = (body?: string) =>
  (body ?? "").split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
