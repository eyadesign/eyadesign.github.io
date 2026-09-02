import { experience } from "@/lib/content";
import { RevealGroup, RevealItem } from "./Reveal";

export function ExperienceList() {
  return (
    <RevealGroup className="border-t border-[var(--color-border)]">
      {experience.map((item) => (
        <RevealItem
          key={item.company + item.range}
          className="group container-grid items-start py-7 border-b border-[var(--color-border)] transition-colors duration-300"
        >
          <span className="col-span-4 md:col-span-2 font-mono text-[12px] text-[var(--color-muted)] mb-2 md:mb-0">
            {item.range}
          </span>

          <div className="col-span-4 md:col-span-3">
            <p className="text-[18px] tracking-[-0.01em] transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              {item.company}
            </p>
            <p className="text-[13px] text-[var(--color-muted)] mt-0.5">
              {item.role}
            </p>
          </div>

          <ul className="col-span-4 md:col-span-7 mt-3 md:mt-0 space-y-1.5">
            {item.points.map((point) => (
              <li
                key={point}
                className="text-[14px] leading-relaxed text-[var(--color-muted)]"
              >
                {point}
              </li>
            ))}
          </ul>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
