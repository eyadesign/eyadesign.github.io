import { DecisionItem } from "@/lib/types";
import { RevealGroup, RevealItem, Reveal } from "../Reveal";

export function DecisionList({
  id,
  items,
}: {
  id: string;
  items: DecisionItem[];
}) {
  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-24">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-3">
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
            DESIGN DECISIONS
          </p>
        </Reveal>

        <RevealGroup className="col-span-4 md:col-span-8 md:col-start-5 mt-4 md:mt-0 border-t border-[var(--color-border)]">
          {items.map((item, i) => (
            <RevealItem
              key={item.heading}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-8 gap-y-2 py-6 border-b border-[var(--color-border)]"
            >
              <span className="font-mono text-[12px] text-[var(--color-faint)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[18px] mb-2">{item.heading}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {item.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
