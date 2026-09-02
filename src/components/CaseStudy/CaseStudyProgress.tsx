"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export function CaseStudyProgress({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 3) return null;

  return (
    <nav
      aria-label="Case study progress"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={clsx(
            "group flex items-center justify-end gap-2 font-mono text-[10px] tracking-[0.08em] transition-colors duration-200",
            activeId === s.id
              ? "text-[var(--color-fg)]"
              : "text-[var(--color-faint)] hover:text-[var(--color-muted)]"
          )}
        >
          <span
            className={clsx(
              "opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap",
              activeId === s.id && "opacity-100"
            )}
          >
            {s.label}
          </span>
          <span
            className={clsx(
              "h-1.5 rounded-full transition-all duration-200",
              activeId === s.id
                ? "w-4 bg-[var(--color-accent)]"
                : "w-1.5 bg-[var(--color-faint)]"
            )}
          />
        </a>
      ))}
    </nav>
  );
}
