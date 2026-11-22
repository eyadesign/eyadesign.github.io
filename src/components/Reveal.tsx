"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Framer-style appear: fade, rise and un-blur once the element enters view. */
export function Reveal({
  delay = 0,
  y = 40,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
