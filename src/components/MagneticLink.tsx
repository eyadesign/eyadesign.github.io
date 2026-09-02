"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";

export function MagneticLink({
  children,
  className,
  strength = 0.35,
  max = 14,
  ...rest
}: React.ComponentPropsWithoutRef<typeof motion.a> & {
  strength?: number;
  max?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isCoarse = useIsCoarsePointer();
  const reducedMotion = usePrefersReducedMotion();
  const disabled = isCoarse || reducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 14, stiffness: 180, mass: 0.4 });
  const springY = useSpring(y, { damping: 14, stiffness: 180, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (disabled) return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = e.clientX - (bounds.left + bounds.width / 2);
    const relY = e.clientY - (bounds.top + bounds.height / 2);
    x.set(Math.min(Math.max(relX * strength, -max), max));
    y.set(Math.min(Math.max(relY * strength, -max), max));
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
