"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Framer-like inertial scrolling. Disabled for users who prefer reduced motion. */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ lerp: 0.1, anchors: { offset: -20 } });
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // New page: start at the top, unless we're jumping to a section.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        requestAnimationFrame(() =>
          lenis ? lenis.scrollTo(el as HTMLElement, { offset: -20 }) : el.scrollIntoView()
        );
      }
      return;
    }
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
