import Link from "next/link";
import { expertise } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Capabilities() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-5">
          <p className="text-[22px] md:text-[28px] leading-snug tracking-[-0.01em]">
            Research-driven design, product thinking and scalable systems —
            with an active interest in how people work alongside intelligent
            interfaces.
          </p>
          <Link
            href="/info"
            className="link-underline focus-ring inline-block mt-8 text-[13px] tracking-[0.04em] text-[var(--color-muted)]"
          >
            MORE ABOUT MY APPROACH →
          </Link>
        </Reveal>

        <RevealGroup
          stagger={0.04}
          className="col-span-4 md:col-span-6 md:col-start-7 mt-12 md:mt-0 grid grid-cols-2 gap-x-6 gap-y-3"
        >
          {expertise.map((item) => (
            <RevealItem
              key={item}
              className="text-[13px] tracking-[0.02em] text-[var(--color-muted)] py-1 border-b border-[var(--color-border)]"
            >
              {item}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
