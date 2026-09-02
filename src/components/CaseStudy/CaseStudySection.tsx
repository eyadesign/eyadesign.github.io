import { Reveal } from "../Reveal";

export function CaseStudySection({
  id,
  eyebrow,
  title,
  body,
}: {
  id: string;
  eyebrow: string;
  title?: string;
  body: string | string[];
}) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-24">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-3">
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal className="col-span-4 md:col-span-8 md:col-start-5 mt-4 md:mt-0">
          {title && (
            <h2 className="text-[22px] md:text-[28px] tracking-[-0.01em] mb-4">
              {title}
            </h2>
          )}
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[16px] md:text-[18px] leading-relaxed text-[var(--color-muted)]"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudyList({
  id,
  eyebrow,
  items,
}: {
  id: string;
  eyebrow: string;
  items: string[];
}) {
  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-24">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-3">
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal className="col-span-4 md:col-span-8 md:col-start-5 mt-4 md:mt-0 space-y-4">
          {items.map((item, i) => (
            <p
              key={i}
              className="text-[16px] md:text-[18px] leading-relaxed text-[var(--color-muted)] border-b border-[var(--color-border)] pb-4"
            >
              {item}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
