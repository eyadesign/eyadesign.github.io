import { SplitSection } from "@/lib/types";
import { PlaceholderImage } from "../PlaceholderImage";
import { Reveal } from "../Reveal";

export function SplitBlock({
  id,
  eyebrow,
  section,
  reverse,
}: {
  id: string;
  eyebrow: string;
  section: SplitSection;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-24">
      <div className="container-grid items-center">
        <Reveal
          className={`col-span-4 md:col-span-5 ${
            reverse ? "md:col-start-8 md:order-2" : ""
          }`}
        >
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)] mb-4">
            {eyebrow}
          </p>
          <h2 className="text-[24px] md:text-[28px] tracking-[-0.01em] mb-4">
            {section.heading}
          </h2>
          <p className="text-[16px] leading-relaxed text-[var(--color-muted)]">
            {section.body}
          </p>
        </Reveal>

        {section.image && (
          <div
            className={`col-span-4 md:col-span-6 mt-10 md:mt-0 ${
              reverse ? "md:col-start-1 md:order-1" : "md:col-start-7"
            }`}
          >
            <PlaceholderImage {...section.image} />
          </div>
        )}
      </div>
    </section>
  );
}
