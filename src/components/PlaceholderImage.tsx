"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ImageAspect } from "@/lib/types";
import { imageReveal, viewportOnce } from "@/lib/motion";

const aspectClass: Record<ImageAspect, string> = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  "full-bleed": "aspect-[16/9] md:aspect-[21/9]",
};

export function PlaceholderImage({
  aspect,
  label,
  caption,
  className,
  priority,
}: {
  aspect: ImageAspect;
  label: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={clsx("overflow-hidden", className)}>
      <motion.div
        variants={imageReveal}
        initial={priority ? "show" : "hidden"}
        whileInView={priority ? undefined : "show"}
        viewport={viewportOnce}
        className={clsx(
          "relative w-full bg-[var(--color-bg-raised)] border border-[var(--color-border)]",
          aspectClass[aspect]
        )}
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, transparent calc(50% - 0.5px), var(--color-border) 50%, transparent calc(50% + 0.5px)), linear-gradient(to top right, transparent calc(50% - 0.5px), var(--color-border) 50%, transparent calc(50% + 0.5px))",
        }}
      >
        <span className="absolute left-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted)] bg-[var(--color-bg)] px-2 py-1">
          {label}
        </span>
      </motion.div>
      {caption && (
        <figcaption className="mt-3 text-sm text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
