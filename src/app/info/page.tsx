import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceList } from "@/components/ExperienceList";
import { ExpertiseList } from "@/components/ExpertiseList";
import { ToolsList } from "@/components/ToolsList";
import { Contact } from "@/components/Contact";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Info — Eyad Mahmoud",
  description:
    "Background, experience and expertise of Eyad Mahmoud, Senior UI/UX & Product Designer.",
};

export default function InfoPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container-grid">
          <Reveal className="col-span-4 md:col-span-1">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
              ABOUT
            </p>
          </Reveal>
          <div className="col-span-4 md:col-span-9">
            <Reveal>
              <h1 className="text-[clamp(28px,4.5vw,48px)] leading-[1.1] tracking-[-0.01em] mb-8">
                I&rsquo;m a Senior UI/UX &amp; Product Designer interested in
                the space between complex systems and simple experiences.
              </h1>
            </Reveal>
            <Reveal delay={0.06} className="space-y-4 max-w-2xl">
              <p className="text-[16px] leading-relaxed text-[var(--color-muted)]">
                Over the past 5+ years I&rsquo;ve worked with SaaS platforms,
                pharmaceutical brands, government bodies and independent
                founders across the USA, Europe and the Middle East — moving
                between research, interaction design and the visual detail
                that makes a product feel finished.
              </p>
              <p className="text-[16px] leading-relaxed text-[var(--color-muted)]">
                I&rsquo;m currently a Senior UI/UX Designer at{" "}
                <span className="text-[var(--color-fg)]">Tritecs</span>, and
                a Product Designer &amp; Instructor at{" "}
                <span className="text-[var(--color-fg)]">UXGate</span>,
                where I also teach product design.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="container-grid mb-10">
          <Reveal className="col-span-4 md:col-span-12">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
              EXPERIENCE
            </p>
          </Reveal>
        </div>
        <div className="container-grid">
          <div className="col-span-4 md:col-span-12">
            <ExperienceList />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="container-grid">
          <Reveal className="col-span-4 md:col-span-3">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
              EXPERTISE
            </p>
          </Reveal>
          <div className="col-span-4 md:col-span-8 md:col-start-5 mt-6 md:mt-0">
            <ExpertiseList />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="container-grid">
          <Reveal className="col-span-4 md:col-span-3">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
              DESIGNING WITH AI
            </p>
          </Reveal>
          <Reveal
            delay={0.06}
            className="col-span-4 md:col-span-8 md:col-start-5 mt-4 md:mt-0"
          >
            <p className="text-[17px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
              I actively explore AI throughout the design process — from
              research and ideation to prototyping and intelligent product
              experiences — as one more tool for getting to a better answer
              faster, not a replacement for design judgement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="container-grid mb-10">
          <Reveal className="col-span-4 md:col-span-12">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
              SELECTED WORK
            </p>
          </Reveal>
        </div>
        <RevealGroup className="container-grid gap-y-2">
          {projects.map((p) => (
            <RevealItem key={p.id} className="col-span-4 md:col-span-6">
              <Link
                href={`/work/${p.slug}`}
                className="group flex items-baseline justify-between py-2 focus-ring"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-[var(--color-faint)]">
                    {p.number}
                  </span>
                  <span className="link-underline text-[16px]">
                    {p.title}
                  </span>
                </span>
                <span className="font-mono text-[11px] text-[var(--color-muted)]">
                  {p.year}
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="container-grid">
          <Reveal className="col-span-4 md:col-span-3">
            <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
              TOOLS
            </p>
          </Reveal>
          <Reveal
            delay={0.06}
            className="col-span-4 md:col-span-8 md:col-start-5 mt-4 md:mt-0"
          >
            <ToolsList />
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  );
}
