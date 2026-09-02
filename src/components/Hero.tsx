"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { HeroCoordinates } from "./HeroCoordinates";

const line = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function Line({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <motion.span
      variants={line}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.55, ease: easeOut, delay }}
      className="block overflow-hidden"
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-grid">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          className="col-span-4 md:col-span-12 font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)] mb-6 md:mb-10"
        >
          SENIOR UI/UX &nbsp;/&nbsp; PRODUCT DESIGNER
        </motion.p>

        <h1 className="col-span-4 md:col-span-11 text-[clamp(34px,5.6vw,100px)] leading-[1.02] md:leading-[0.98] tracking-[-0.02em] font-medium">
          <Line delay={0.3}>I design digital products</Line>
          <Line delay={0.38}>that make complex</Line>
          <Line delay={0.46}>things feel simple.</Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.55 }}
          className="col-span-4 md:col-span-4 md:col-start-9 text-[15px] leading-relaxed text-[var(--color-muted)] mt-8 md:mt-10"
        >
          Senior UI/UX &amp; Product Designer focused on turning complex
          workflows, user needs and business requirements into clear, useful
          and polished digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.65 }}
          className="col-span-4 md:col-span-3 mt-14 md:mt-10 flex items-end justify-between gap-6"
        >
          <div className="text-[13px] text-[var(--color-muted)] space-y-1">
            <p>ALEXANDRIA, EGYPT</p>
            <p className="text-[var(--color-faint)]">5+ YEARS EXPERIENCE</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.65 }}
          className="hidden md:flex col-span-4 md:col-start-9 mt-10 justify-start"
        >
          <HeroCoordinates />
        </motion.div>
      </div>
    </section>
  );
}
