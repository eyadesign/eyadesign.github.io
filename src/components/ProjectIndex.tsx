"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import { RevealGroup, RevealItem } from "./Reveal";
import { useIsCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";
import { easeOut } from "@/lib/motion";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isCoarse = useIsCoarsePointer();
  const reducedMotion = usePrefersReducedMotion();
  const previewEnabled = !isCoarse && !reducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 22, stiffness: 220, mass: 0.6 });
  const springY = useSpring(y, { damping: 22, stiffness: 220, mass: 0.6 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!previewEnabled) return;
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = e.clientX - bounds.left;
    const relY = e.clientY - bounds.top;
    x.set(Math.min(Math.max(relX + 28, 0), bounds.width - 260));
    y.set(Math.min(relY - 140, bounds.height - 200));
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      <RevealGroup className="border-t border-[var(--color-border)]">
        {projects.map((project) => (
          <RevealItem key={project.id}>
            <Link
              href={`/work/${project.slug}`}
              onMouseEnter={() => setHovered(project)}
              onMouseLeave={() => setHovered(null)}
              className="group block border-b border-[var(--color-border)] focus-ring"
            >
              <div className="container-grid items-baseline py-6 md:py-7">
                <span className="col-span-1 font-mono text-[12px] text-[var(--color-muted)]">
                  {project.number}
                </span>

                <span
                  className="col-span-3 md:col-span-6 text-2xl md:text-4xl tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-2"
                >
                  {project.title}
                </span>

                <span className="hidden md:block md:col-span-3 text-sm text-[var(--color-muted)] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {project.indexNote}
                </span>

                <span className="hidden md:block md:col-span-1 font-mono text-[12px] text-[var(--color-muted)]">
                  {project.year}
                </span>

                <span className="col-span-4 md:col-span-1 flex justify-end">
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>

      {previewEnabled && (
        <motion.div
          style={{ x: springX, y: springY }}
          className="pointer-events-none absolute left-0 top-0 z-10 w-[240px]"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="aspect-[4/3] w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-raised)] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-full w-full items-end p-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                    {hovered.title}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
