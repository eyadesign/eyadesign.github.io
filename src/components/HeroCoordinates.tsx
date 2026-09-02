"use client";

import { useEffect, useRef, useState } from "react";
import { useIsCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";

export function HeroCoordinates() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isCoarse = useIsCoarsePointer();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isCoarse || reducedMotion) return;
    const section = ref.current?.closest("section");
    if (!section) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        const x = Math.round(
          ((e.clientX - bounds.left) / bounds.width) * 100
        );
        const y = Math.round(
          ((e.clientY - bounds.top) / bounds.height) * 100
        );
        setPos({
          x: Math.min(Math.max(x, 0), 99),
          y: Math.min(Math.max(y, 0), 99),
        });
      });
    };

    section.addEventListener("mousemove", onMove);
    return () => {
      section.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isCoarse, reducedMotion]);

  if (isCoarse || reducedMotion) return null;

  return (
    <div
      ref={ref}
      className="font-mono text-[11px] tabular-nums text-[var(--color-faint)] select-none"
      aria-hidden="true"
    >
      <div>X: {String(pos.x).padStart(3, "0")}</div>
      <div>Y: {String(pos.y).padStart(3, "0")}</div>
    </div>
  );
}
