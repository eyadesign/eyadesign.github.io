"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { asset } from "@/lib/asset";
import { ArrowUpRight } from "./Icons";
import { ease } from "./Reveal";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay: (index % 2) * 0.12 }}
    >
      <Link href={`/work/${project.slug}/`} className="group block">
        <div className="relative aspect-[582/401] overflow-hidden rounded-[20px] bg-[#e9e5df]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(project.cover)}
            alt={`${project.title} — ${project.tagline}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease)] group-hover:scale-[1.045]"
          />
          <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 shadow-lg transition-all duration-500 ease-[var(--ease)] group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <h3 className="mt-3 text-[22px] font-medium leading-tight tracking-[-0.04em]">
          {project.title}
        </h3>
        <p className="t-small text-[var(--ink-50)]">{project.tagline}</p>
      </Link>
    </motion.div>
  );
}
