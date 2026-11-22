"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

const MIN = 0.14;

/** Pinned statement whose words darken one by one as you scroll. */
export function TextReveal({ text }: { text: string }) {
  const ref = useRef<HTMLElement>(null);
  const words = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const list = text.split(" ");

  const apply = (p: number) => {
    const n = list.length;
    const step = 0.72 / n;
    words.current.forEach((el, i) => {
      if (!el) return;
      const start = 0.06 + i * step;
      const t = Math.min(1, Math.max(0, (p - start) / (step * 3)));
      el.style.opacity = String(MIN + (1 - MIN) * t);
    });
  };

  useMotionValueEvent(scrollYProgress, "change", apply);
  useEffect(() => {
    if (!reduce) apply(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <section ref={ref} className="relative h-[200vh]" aria-label="Approach">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <p className="container-x max-w-[860px] text-center text-[clamp(26px,2.6vw,38px)] font-medium leading-[1.25] tracking-[-0.03em]">
          {reduce
            ? text
            : list.map((w, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    words.current[i] = el;
                  }}
                  style={{ opacity: MIN }}
                >
                  {w}{" "}
                </span>
              ))}
        </p>
      </div>
    </section>
  );
}
