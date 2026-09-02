import { tools } from "@/lib/content";

export function ToolsList() {
  return (
    <p className="text-[16px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
      {tools.map((tool, i) => (
        <span key={tool}>
          {tool}
          {i < tools.length - 1 && (
            <span className="text-[var(--color-faint)]"> &nbsp;·&nbsp; </span>
          )}
        </span>
      ))}
    </p>
  );
}
