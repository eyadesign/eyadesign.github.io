"use client";

import { useState } from "react";
import { home, inbox, site } from "@/lib/site";
import { BehanceIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-[8px] border border-paper/15 bg-white/[0.04] px-3 py-2.5 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-paper/60";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [draft, setDraft] = useState({ name: "", email: "", project: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    setDraft({ name, email, project });
    // Honeypot: bots fill hidden fields, people don't.
    if (String(data.get("website") ?? "")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${inbox.url}/rest/v1/messages`, {
        method: "POST",
        headers: {
          apikey: inbox.key,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, project, source: window.location.pathname }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const mailtoFallback = `mailto:${site.email}?subject=${encodeURIComponent(
    `Project inquiry${draft.name ? ` from ${draft.name}` : ""}`
  )}&body=${encodeURIComponent(`${draft.project}

— ${draft.name}${draft.email ? ` (${draft.email})` : ""}`)}`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const social = [
    { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
    { label: "Behance", href: site.behance, Icon: BehanceIcon },
  ];

  return (
    <section id="contact" className="scroll-mt-8 py-[clamp(80px,10vw,140px)]">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <Reveal className="flex flex-col justify-between gap-10">
          <div>
            <h2 className="t-h2">{home.contact.heading}</h2>
            <p className="t-body mt-4 max-w-[380px]">
              {home.contact.text}
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="t-body mt-6 underline decoration-[var(--ink-10)] underline-offset-4 transition-colors hover:decoration-ink"
            >
              {copied ? "Email copied ✓" : site.email}
            </button>
          </div>
          <div className="flex gap-2">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--ink-10)] transition-colors hover:bg-ink hover:text-paper"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--ink-10)] transition-colors hover:bg-ink hover:text-paper"
            >
              <MailIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="relative flex flex-col gap-4 rounded-[20px] bg-ink p-5 text-paper md:ml-auto md:max-w-[460px]"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <label className="flex flex-col gap-2 text-[15px]">
              Name
              <input name="name" required autoComplete="name" placeholder="Enter your name" className={field} />
            </label>
            <label className="flex flex-col gap-2 text-[15px]">
              Email
              <input name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={field} />
            </label>
            <label className="flex flex-col gap-2 text-[15px]">
              Your Project
              <textarea name="project" required rows={5} placeholder="Tell me about your project" className={`${field} resize-y`} />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 rounded-[8px] bg-paper py-2.5 text-[15px] font-medium text-ink transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
            <p role="status" aria-live="polite" className="min-h-[20px] text-center text-[13px] text-paper/60">
              {status === "sent" && home.contact.successText}
              {status === "error" && (
                <>
                  Couldn’t send right now.{" "}
                  <a href={mailtoFallback} className="underline underline-offset-2">
                    Email me instead
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
