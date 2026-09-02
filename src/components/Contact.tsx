"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { contact } from "@/lib/content";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticLink";
import { easeOut } from "@/lib/motion";
import { useIsCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    try {
      await navigator.clipboard.writeText(contact.email);
      e.preventDefault();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — let mailto fallback proceed */
    }
  }

  return (
    <a
      href={`mailto:${contact.email}`}
      onClick={handleClick}
      className="link-underline focus-ring inline-flex items-center gap-2 text-[15px]"
    >
      {copied ? "EMAIL COPIED ✓" : "COPY EMAIL"}
    </a>
  );
}

function SayHello({ children }: { children: React.ReactNode }) {
  const [hovering, setHovering] = useState(false);
  const isCoarse = useIsCoarsePointer();
  const reducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 250 });
  const springY = useSpring(y, { damping: 20, stiffness: 250 });

  function handleMove(e: React.MouseEvent) {
    if (isCoarse || reducedMotion) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left + 18);
    y.set(e.clientY - bounds.top - 10);
  }

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
      {!isCoarse && !reducedMotion && (
        <AnimatePresence>
          {hovering && (
            <motion.span
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="pointer-events-none absolute left-0 top-0 whitespace-nowrap bg-[var(--color-fg)] text-[var(--color-bg)] text-[11px] font-mono tracking-[0.08em] px-2.5 py-1"
            >
              SAY HELLO →
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 scroll-mt-24">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-9">
          <SayHello>
            <MagneticLink
              href={`mailto:${contact.email}`}
              className="inline-block text-[clamp(32px,5.5vw,72px)] leading-[1.02] tracking-[-0.02em] font-medium focus-ring"
            >
              Have a product worth
              <br />
              improving? Let&rsquo;s talk →
            </MagneticLink>
          </SayHello>
        </Reveal>

        <Reveal
          delay={0.08}
          className="col-span-4 md:col-span-3 mt-10 md:mt-2 flex flex-col gap-4 md:items-end md:text-right"
        >
          <CopyEmail />
          <div className="flex gap-5 text-[13px] text-[var(--color-muted)]">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline focus-ring"
            >
              LinkedIn ↗
            </a>
            <a
              href={contact.behance}
              target="_blank"
              rel="noreferrer"
              className="link-underline focus-ring"
            >
              Behance ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
