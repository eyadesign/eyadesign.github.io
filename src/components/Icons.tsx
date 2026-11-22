import { SVGProps, useId } from "react";

/** Glossy black four-point sparkle with a lavender rim light, like the reference. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  const id = useId().replace(/:/g, "");
  const d =
    "M50 2C53.5 30 60 41 98 50C60 59 53.5 70 50 98C46.5 70 40 59 2 50C40 41 46.5 30 50 2Z";
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b3b3f" />
          <stop offset="0.45" stopColor="#0d0d0f" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id={`r${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#c9b8ff" />
          <stop offset="0.35" stopColor="#7a5cff" stopOpacity="0.9" />
          <stop offset="0.7" stopColor="#7a5cff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`h${id}`} cx="0.35" cy="0.3" r="0.4">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={d} fill={`url(#b${id})`} />
      <path d={d} fill={`url(#h${id})`} />
      <path d={d} fill="none" stroke={`url(#r${id})`} strokeWidth="2.5" />
    </svg>
  );
}

export function Bolt(props: SVGProps<SVGSVGElement>) {
  const id = useId().replace(/:/g, "");
  const d = "M62 3L14 57H46L36 97L88 39H55L62 3Z";
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b3b3f" />
          <stop offset="0.5" stopColor="#0d0d0f" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id={`r${id}`} x1="0" y1="1" x2="0.6" y2="0">
          <stop offset="0" stopColor="#d6c9ff" />
          <stop offset="0.4" stopColor="#7a5cff" stopOpacity="0.85" />
          <stop offset="0.8" stopColor="#7a5cff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`h${id}`} cx="0.55" cy="0.25" r="0.35">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={d} fill={`url(#b${id})`} strokeLinejoin="round" />
      <path d={d} fill={`url(#h${id})`} />
      <path
        d={d}
        fill="none"
        stroke={`url(#r${id})`}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small boxed arrow used after inline links ("View All Work ↗"). */
export function ArrowBox({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[22px] w-[22px] items-center justify-center rounded-[6px] border border-current transition-transform duration-300 ease-[var(--ease)] group-hover:rotate-45 ${className}`}
    >
      <ArrowUpRight className="h-3.5 w-3.5" />
    </span>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.96 1.3-1.96 2.66v5.14h-4v-11Z" />
    </svg>
  );
}

export function BehanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8.2 11.4c.9-.4 1.5-1.2 1.5-2.4C9.7 6.8 8 6 6 6H1v12h5.2c2.2 0 4.2-1 4.2-3.5 0-1.5-.8-2.7-2.2-3.1ZM3.4 8h2.3c.9 0 1.6.3 1.6 1.2 0 1-.6 1.3-1.5 1.3H3.4V8Zm2.5 8H3.4v-3.3H6c1 0 1.7.4 1.7 1.6 0 1.3-.8 1.7-1.8 1.7ZM20.2 8.6h-5.5V7.2h5.5v1.4ZM23 14c0-2.7-1.6-5-4.5-5-2.8 0-4.6 2.1-4.6 4.8 0 2.9 1.7 4.8 4.6 4.8 2.2 0 3.6-1 4.3-3.1h-2.2c-.2.8-1.2 1.2-2 1.2-1.5 0-2.3-.9-2.3-2.4H23V14Zm-6.7-1c.1-1.2.9-2 2.1-2 1.3 0 1.9.8 2 2h-4.1Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
