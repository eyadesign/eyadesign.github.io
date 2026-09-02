import { Hero } from "@/components/Hero";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Capabilities } from "@/components/Capabilities";
import { NdaSection } from "@/components/NdaSection";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="pt-8 pb-4 scroll-mt-24">
        <div className="container-grid">
          <Reveal className="col-span-4 md:col-span-12">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)] pb-4 border-b border-[var(--color-border)]">
              SELECTED WORK — {projects.length.toString().padStart(2, "0")}
            </p>
          </Reveal>
        </div>
        <ProjectIndex projects={projects} />
      </section>

      <Capabilities />
      <NdaSection />
      <Contact />
    </>
  );
}
