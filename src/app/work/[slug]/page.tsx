import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, moreProjects, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CaseImage } from "@/components/CaseImage";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowBox, LockIcon } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.title} — Eyad Mahmoud`, description: p.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const meta = [
    { label: "Category", value: p.category },
    { label: "Platform", value: p.platform },
    { label: p.clientLabel ?? "Client", value: p.client },
  ];

  return (
    <>
      <article className="pt-[clamp(140px,16vw,200px)]">
        <header className="container-x">
          <Reveal>
            <h1 className="t-h2 max-w-[900px]">{p.title}</h1>
          </Reveal>
          <div className="mt-[clamp(40px,6vw,72px)] grid items-end gap-8 md:grid-cols-2">
            <Reveal delay={0.08}>
              <dl className="flex flex-wrap items-end gap-x-4 gap-y-3">
                {meta.map((m, i) => (
                  <div key={m.label} className="flex items-end gap-4">
                    {i > 0 && <span className="t-body pb-[1px] text-[var(--ink-50)]">/</span>}
                    <div>
                      <dt className="t-small text-[var(--ink-50)]">{m.label}</dt>
                      <dd className="t-body">{m.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="t-body max-w-[440px] md:ml-auto">{p.summary}</p>
            </Reveal>
          </div>
        </header>

        <div className="container-x mt-8">
          <CaseImage src={p.cover} alt={`${p.title} cover`} priority />
        </div>

        <div className="container-x">
          {p.blocks.map((b) => (
            <section key={b.title} className="pt-[clamp(64px,8vw,110px)]">
              <Reveal className="max-w-[760px]">
                <h2 className="t-h3">{b.title}</h2>
                {b.text?.map((t, i) => (
                  <p key={i} className="t-body mt-4">
                    {t}
                  </p>
                ))}
                {b.list && (
                  <ul className="mt-4 space-y-2">
                    {b.list.map((l, i) => (
                      <li key={i} className="t-body flex gap-3">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
              {b.images && b.images.length > 0 && (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {b.images.map((src, i) => (
                    <div
                      key={src}
                      className={
                        b.images!.length === 1 || (b.images!.length === 3 && i === 0)
                          ? "md:col-span-2"
                          : ""
                      }
                    >
                      <CaseImage src={src} alt={`${p.title} — ${b.title}, slide ${i + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {p.note && (
            <Reveal className="mt-[clamp(64px,8vw,110px)]">
              <div className="flex flex-col gap-6 rounded-[20px] bg-ink p-[clamp(24px,4vw,48px)] text-paper md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4">
                  <LockIcon className="h-7 w-7 shrink-0 text-paper/60" />
                  <p className="text-[clamp(22px,2.4vw,32px)] leading-[1.2] tracking-[-0.03em]">
                    {p.note}
                  </p>
                </div>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Full case study: ${p.title}`)}`}
                  className="group t-body inline-flex shrink-0 items-center gap-2"
                >
                  Request it <ArrowBox />
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </article>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="container-x">
          <Reveal>
            <h2 className="t-h2 mb-10">More Projects</h2>
          </Reveal>
          <div className="grid gap-x-4 gap-y-10 md:grid-cols-2">
            {moreProjects(p.slug).map((m, i) => (
              <ProjectCard key={m.slug} project={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
