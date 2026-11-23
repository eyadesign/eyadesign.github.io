import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Confidential } from "@/components/Confidential";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

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
            <h1 className="t-h2">
              My Selected
              <br />
              Projects
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-body mt-5 max-w-[460px] text-[var(--ink-50)]">
              Case studies across SaaS, healthcare, fintech, government and mobility, from
              research and information architecture to the final interface.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-4 gap-y-10 md:grid-cols-2">
            {projects.map((p, i) => (
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
