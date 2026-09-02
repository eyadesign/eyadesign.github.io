"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { easeOut } from "@/lib/motion";

const links = [
  { href: "/work", label: "WORK" },
  { href: "/info", label: "INFO" },
  { href: "/#contact", label: "CONTACT" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300",
        scrolled &&
          "bg-[var(--color-bg)]/75 backdrop-blur-md border-b border-[var(--color-border)]/70"
      )}
    >
      <div
        className={clsx(
          "container-grid items-center transition-[padding] duration-300 ease-out relative z-10",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="col-span-2 md:col-span-4 flex items-center">
          <Link
            href="/"
            className="text-[13px] font-medium tracking-[0.04em] focus-ring"
          >
            EYAD MAHMOUD
          </Link>
        </div>

        <div className="col-span-2 md:col-span-4 flex items-center justify-end gap-2 md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[13px] tracking-[0.04em] focus-ring"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>

        <div className="hidden md:flex md:col-span-8 items-center justify-end gap-8">
          <span className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.08em] text-[var(--color-muted)] font-mono">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            AVAILABLE FOR SELECT OPPORTUNITIES
          </span>
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-[13px] tracking-[0.04em] focus-ring py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="md:hidden fixed inset-0 bg-[var(--color-bg)] flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: easeOut, delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl tracking-[-0.01em] focus-ring"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
