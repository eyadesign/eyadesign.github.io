import Link from "next/link";
import { featured } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { ArrowBox } from "./Icons";

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-8 py-[clamp(60px,8vw,100px)]">
      <div className="container-x">
        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <h2 className="t-h2">
            Featured
            <br />
            Projects
          </h2>
          <Link href="/work/" className="group t-body inline-flex shrink-0 items-center gap-2">
            View All Work <ArrowBox />
          </Link>
        </Reveal>
        <div className="grid gap-x-4 gap-y-10 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
