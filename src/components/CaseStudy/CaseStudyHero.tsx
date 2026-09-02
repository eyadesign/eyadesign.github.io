import { Project } from "@/lib/types";
import { PlaceholderImage } from "../PlaceholderImage";
import { Reveal } from "../Reveal";

export function CaseStudyHero({ project }: { project: Project }) {
  const meta = [
    project.role && { label: "Role", value: project.role },
    project.year && { label: "Year", value: project.year },
    project.timeline && { label: "Timeline", value: project.timeline },
    project.team && { label: "Team", value: project.team },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <header className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="container-grid items-start">
        <Reveal className="col-span-4 md:col-span-1">
          <span className="font-mono text-[12px] text-[var(--color-muted)]">
            {project.number}
          </span>
        </Reveal>

        <div className="col-span-4 md:col-span-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-[clamp(32px,5.5vw,64px)] leading-[1.02] tracking-[-0.02em] font-medium uppercase">
                {project.title}
              </h1>
              {project.nda && (
                <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--color-muted)] border border-[var(--color-border)] px-2 py-1">
                  CONFIDENTIAL / NDA
                </span>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[19px] md:text-[22px] leading-snug text-[var(--color-muted)] max-w-xl">
              {project.summary}
            </p>
          </Reveal>
          {project.nda && (
            <Reveal delay={0.1}>
              <p className="text-[13px] text-[var(--color-faint)] mt-4 max-w-xl">
                Some project details and visuals have been generalised due to
                confidentiality requirements.
              </p>
            </Reveal>
          )}
        </div>

        <Reveal
          delay={0.08}
          className="col-span-4 md:col-span-3 mt-10 md:mt-0 grid grid-cols-2 gap-x-4 gap-y-5"
        >
          {meta.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--color-faint)] mb-1">
                {item.label.toUpperCase()}
              </p>
              <p className="text-[14px]">{item.value}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {project.heroImage && (
        <div className="container-grid mt-16 md:mt-24">
          <div className="col-span-4 md:col-span-12">
            <PlaceholderImage {...project.heroImage} priority />
          </div>
        </div>
      )}
    </header>
  );
}
