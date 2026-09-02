import { ndaWork } from "@/lib/projects";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function NdaSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-5">
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)] mb-4">
            MORE WORK, UNDER NDA
          </p>
          <p className="text-[17px] leading-relaxed text-[var(--color-muted)]">
            {ndaWork.note}
          </p>
        </Reveal>

        <RevealGroup className="col-span-4 md:col-span-6 md:col-start-7 mt-10 md:mt-0 border-t border-[var(--color-border)]">
          {ndaWork.entries.map((entry) => (
            <RevealItem
              key={entry.client}
              className="flex items-baseline justify-between py-3 border-b border-[var(--color-border)] text-[14px]"
            >
              <span>{entry.client}</span>
              <span className="text-[var(--color-muted)] text-[12px] font-mono">
                {entry.category}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
