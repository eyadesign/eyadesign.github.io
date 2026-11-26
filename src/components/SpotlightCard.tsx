"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { asset } from "@/lib/asset";
import { ArrowUpRight } from "./Icons";
import { ease } from "./Reveal";

/** One oversized card for the headline project, above the regular grid. */
export function SpotlightCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease }}
      className="mb-10"
    >
      <Link href={`/work/${project.slug}/`} className="group block">
        <div className="relative aspect-[1600/1102] overflow-hidden rounded-[20px] bg-[#012E4B] md:aspect-[2/1]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(project.cover)}
            alt={`${project.title} — ${project.tagline}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[var(--ease)] group-hover:scale-[1.03]"
          />
          {project.spotlightLabel && (
            <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1.5 text-[13px] font-medium text-ink md:left-6 md:top-6 md:text-[15px]">
              {project.spotlightLabel}
            </span>
          )}
          <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-paper py-2 pl-4 pr-2 text-[15px] font-medium text-ink shadow-lg transition-transform duration-500 ease-[var(--ease)] group-hover:-translate-y-1 md:bottom-6 md:right-6">
            View case study
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-500 ease-[var(--ease)] group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-[clamp(30px,3.4vw,48px)] font-semibold leading-none tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="t-body text-[var(--ink-50)]">{project.tagline}</p>
        </div>
      </Link>
    </motion.div>
  );
}
