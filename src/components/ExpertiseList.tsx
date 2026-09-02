import { expertise } from "@/lib/content";
import { RevealGroup, RevealItem } from "./Reveal";

export function ExpertiseList() {
  return (
    <RevealGroup className="border-t border-[var(--color-border)]">
      {expertise.map((item, i) => (
        <RevealItem
          key={item}
          className="group flex items-center justify-between py-4 border-b border-[var(--color-border)] transition-colors duration-300"
        >
          <span className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[var(--color-faint)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[18px] md:text-[22px] tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-2">
              {item}
            </span>
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)] transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
