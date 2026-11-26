"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { ease } from "./Reveal";

export function Nav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease, delay: 0.1 }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 max-[899px]:top-3 max-[899px]:px-3"
    >
      <motion.div
        ref={ref}
        layout
        transition={{ duration: 0.45, ease }}
        className="w-full overflow-hidden min-[900px]:w-[320px] rounded-[16px] border border-white/10 bg-ink p-[11px] pl-[18px] text-paper shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[22px] font-semibold leading-none tracking-[-0.04em]"
          >
            {site.name}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-[30px] w-[38px] items-center justify-center rounded-[8px] bg-paper text-ink transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <motion.span
              animate={{ opacity: open ? 0 : 1, scale: open ? 0.5 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute flex gap-[3px]"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-[4px] w-[4px] rounded-full bg-ink" />
              ))}
            </motion.span>
            <motion.svg
              viewBox="0 0 16 16"
              animate={{ opacity: open ? 1 : 0, rotate: open ? 0 : -90 }}
              transition={{ duration: 0.25 }}
              className="absolute h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="site-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              aria-label="Main"
            >
              <ul className="flex flex-col items-start gap-2 pb-2 pt-4">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, ease, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="inline-block rounded-[8px] bg-paper px-3 py-1.5 text-[15px] text-ink transition-colors hover:bg-white"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
                {site.cv && (
                  <motion.li
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, ease, delay: 0.05 + navLinks.length * 0.05 }}
                  >
                    <a
                      href={asset(site.cv)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="inline-block rounded-[8px] border border-paper/40 px-3 py-1.5 text-[15px] text-paper transition-colors hover:bg-paper hover:text-ink"
                    >
                      {site.cvLabel || "Download CV"} ↓
                    </a>
                  </motion.li>
                )}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
