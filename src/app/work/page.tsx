import type { Metadata } from "next";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Eyad Mahmoud",
  description: "Selected product design work by Eyad Mahmoud.",
};

export default function WorkPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20">
      <div className="container-grid mb-16">
        <Reveal className="col-span-4 md:col-span-8">
          <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-[-0.02em]">
            Selected work.
          </h1>
        </Reveal>
      </div>
      <ProjectIndex projects={projects} />
    </section>
  );
}
