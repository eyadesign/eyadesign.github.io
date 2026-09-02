"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/lib/types";
import { easeOut } from "@/lib/motion";
import { Reveal } from "../Reveal";
import { PlaceholderImage } from "../PlaceholderImage";

export function NextProjectCTA({ project }: { project: Project }) {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-12">
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)] mb-6">
            NEXT CASE STUDY
          </p>
          <Link
            href={`/work/${project.slug}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="group block focus-ring"
          >
            <AnimatePresence>
              {hovering && project.heroImage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="hidden md:block overflow-hidden mb-8 max-w-2xl"
                >
                  <PlaceholderImage {...project.heroImage} priority />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="flex items-center gap-4 text-[clamp(32px,7vw,96px)] leading-[0.98] tracking-[-0.02em] font-medium transition-transform duration-300 ease-out group-hover:translate-x-3">
              {project.title}
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-3">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
