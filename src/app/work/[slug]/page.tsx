import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, getAdjacentProject } from "@/lib/projects";
import { CaseStudyHero } from "@/components/CaseStudy/CaseStudyHero";
import { CaseStudySection, CaseStudyList } from "@/components/CaseStudy/CaseStudySection";
import { DecisionList } from "@/components/CaseStudy/DecisionList";
import { SplitBlock } from "@/components/CaseStudy/SplitBlock";
import { Gallery } from "@/components/CaseStudy/Gallery";
import { NextProjectCTA } from "@/components/CaseStudy/NextProjectCTA";
import { CaseStudyProgress } from "@/components/CaseStudy/CaseStudyProgress";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Eyad Mahmoud`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  const sections: { id: string; label: string }[] = [
    project.overview && { id: "context", label: "Context" },
    project.challenge && { id: "problem", label: "Problem" },
    project.context && { id: "constraints", label: "Constraints" },
    project.research && { id: "research", label: "Research" },
    (project.userFlows || project.wireframes) && {
      id: "process",
      label: "Process",
    },
    project.designDecisions && { id: "decisions", label: "Decisions" },
    project.visualDesign && { id: "visual-design", label: "Visual Design" },
    project.designSystem && { id: "design-system", label: "Design System" },
    project.finalSolution && { id: "solution", label: "Solution" },
    project.gallery && { id: "gallery", label: "Gallery" },
    project.impact && { id: "impact", label: "Impact" },
    project.reflection && { id: "reflection", label: "Reflection" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <>
      <CaseStudyProgress sections={sections} />
      <CaseStudyHero project={project} />

      {project.overview && (
        <CaseStudySection id="context" eyebrow="CONTEXT" body={project.overview} />
      )}

      {project.challenge && (
        <CaseStudySection id="problem" eyebrow="PROBLEM" body={project.challenge} />
      )}

      {project.context && (
        <CaseStudySection
          id="constraints"
          eyebrow="CONSTRAINTS"
          body={project.context}
        />
      )}

      {project.research && (
        <CaseStudySection id="research" eyebrow="RESEARCH" body={project.research} />
      )}

      {project.insights && (
        <CaseStudyList id="insights" eyebrow="INSIGHTS" items={project.insights} />
      )}

      {(project.userFlows || project.wireframes) && (
        <section id="process" className="py-16 md:py-20 scroll-mt-24">
          <div className="container-grid mb-10">
            <Reveal className="col-span-4 md:col-span-12">
              <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
                PROCESS
              </p>
            </Reveal>
          </div>
          <div className="container-grid gap-y-10">
            {project.userFlows && (
              <div className="col-span-4 md:col-span-12">
                <PlaceholderImage {...project.userFlows} />
              </div>
            )}
            {project.wireframes && (
              <div className="col-span-4 md:col-span-12">
                <PlaceholderImage {...project.wireframes} />
              </div>
            )}
          </div>
        </section>
      )}

      {project.designDecisions && (
        <DecisionList id="decisions" items={project.designDecisions} />
      )}

      {project.visualDesign && (
        <SplitBlock
          id="visual-design"
          eyebrow="VISUAL DESIGN"
          section={project.visualDesign}
        />
      )}

      {project.designSystem && (
        <SplitBlock
          id="design-system"
          eyebrow="DESIGN SYSTEM"
          section={project.designSystem}
          reverse
        />
      )}

      {project.finalSolution && (
        <CaseStudySection
          id="solution"
          eyebrow="FINAL SOLUTION"
          body={project.finalSolution}
        />
      )}

      {project.gallery && <Gallery id="gallery" images={project.gallery} />}

      {project.impact && (
        <CaseStudyList id="impact" eyebrow="IMPACT" items={project.impact} />
      )}

      {project.reflection && (
        <CaseStudySection
          id="reflection"
          eyebrow="REFLECTION"
          body={project.reflection}
        />
      )}

      <NextProjectCTA project={next} />
    </>
  );
}
