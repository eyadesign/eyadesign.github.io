import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="container-grid py-10 items-center">
        <div className="col-span-4 md:col-span-4 text-[13px]">
          <p className="font-medium tracking-[0.02em]">EYAD MAHMOUD</p>
          <p className="text-[var(--color-muted)] mt-1">{contact.location}</p>
        </div>

        <div className="col-span-4 md:col-span-4 flex gap-6 mt-6 md:mt-0 text-[13px]">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline focus-ring"
          >
            LinkedIn ↗
          </a>
          <a
            href={contact.behance}
            target="_blank"
            rel="noreferrer"
            className="link-underline focus-ring"
          >
            Behance ↗
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="link-underline focus-ring"
          >
            Email
          </a>
        </div>

        <div className="col-span-4 md:col-span-4 mt-6 md:mt-0 md:text-right text-[13px] text-[var(--color-muted)]">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
