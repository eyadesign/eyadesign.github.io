"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div className="container-x grid gap-12 pb-10 pt-[clamp(64px,8vw,110px)] md:grid-cols-[1.3fr_1fr_1fr]">
        <p className="whitespace-pre-line text-[clamp(40px,4.4vw,68px)] font-semibold leading-none tracking-[-0.02em]">
          {site.footerTagline}
        </p>

        <div>
          <p className="mb-4 text-[26px] font-medium tracking-[-0.04em]">/Quick links</p>
          <ul className="flex max-w-[260px] flex-wrap gap-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="inline-block rounded-[8px] bg-paper px-3 py-1.5 text-[15px] text-ink transition-colors hover:bg-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[26px] font-medium tracking-[-0.04em]">/Contact</p>
          <ul className="t-small space-y-1.5 text-paper/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">LinkedIn ↗</a>
            </li>
            <li>
              <a href={site.behance} target="_blank" rel="noreferrer" className="hover:text-paper">Behance ↗</a>
            </li>
            <li className="pt-2 text-paper/50">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-x relative h-[clamp(120px,22vw,300px)]" aria-hidden="true">
        <motion.p
          style={{ y }}
          className="absolute left-1/2 top-0 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(160px,29vw,420px)] font-bold leading-[0.9] tracking-[-0.04em] text-paper/10"
        >
          {site.footerBigName}
        </motion.p>
      </div>
      <p className="sr-only">© 2026 {site.fullName}</p>
    </footer>
  );
}
