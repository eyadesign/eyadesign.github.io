import type { Metadata } from "next";
import { others, spotlight } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Confidential } from "@/components/Confidential";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected UI/UX and product design case studies by Eyad Mahmoud.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-[clamp(40px,6vw,80px)] pt-[clamp(140px,16vw,200px)]">
        <div className="container-x">
          <Reveal>
            <h1 className="t-h2 whitespace-pre-line">{work.heading}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-body mt-5 max-w-[460px] text-[var(--ink-50)]">
              {work.intro}
            </p>
          </Reveal>
          <div className="mt-14">{spotlight && <SpotlightCard project={spotlight} />}</div>
          <div className="grid gap-x-4 gap-y-10 md:grid-cols-2">
            {others.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Confidential />
      <Contact />
    </>
  );
}
