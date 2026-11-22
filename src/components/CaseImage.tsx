"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import { ease } from "./Reveal";

/** Large rounded image that unmasks and settles as it scrolls into view. */
export function CaseImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      className="overflow-hidden rounded-[20px] bg-[#e9e5df]"
      initial={priority ? false : { opacity: 0, y: 50, clipPath: "inset(6% 4% 0% 4% round 20px)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
    </motion.div>
  );
}
