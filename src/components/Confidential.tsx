"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { alsoUnderNda, confidential } from "@/lib/site";
import { asset } from "@/lib/asset";
import { ArrowBox, LockIcon } from "./Icons";
import { Reveal, ease } from "./Reveal";

/** "Under NDA" work — mirrors the reference's dark editorial cards. */
export function Confidential({ limit }: { limit?: number }) {
  const items = limit ? confidential.slice(0, limit) : confidential;
  return (
    <section id="nda" className="py-[clamp(60px,8vw,100px)]">
      <div className="container-x">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="t-h2">Under NDA</h2>
          <p className="t-body max-w-[380px] text-[var(--ink-50)]">
            Confidential product work. Detailed case studies are available during the interview
            process.
          </p>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-ink p-3 text-paper"
            >
              <div className="overflow-hidden rounded-[14px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(c.image)}
                  alt={`${c.title} — confidential case study cover`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1417/1110] w-full object-cover transition-transform duration-[900ms] ease-[var(--ease)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <p className="mb-2 text-[14px] text-paper/50">{c.meta}</p>
                <h3 className="text-[26px] font-medium leading-[1.15] tracking-[-0.03em]">
                  {c.title}
                </h3>
                <p className="t-small mt-2 text-paper/70">{c.text}</p>
              </div>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.16 }}
            className="flex min-h-[380px] flex-col justify-between rounded-[20px] bg-ink p-6 text-paper"
          >
            <div>
              <LockIcon className="mb-6 h-7 w-7 text-paper/60" />
              <p className="text-[clamp(30px,3vw,44px)] leading-[1.15] tracking-[-0.03em]">
                More work lives behind NDAs. Happy to walk you through it.
              </p>
              {!limit && (
                <ul className="t-small mt-6 space-y-1 text-paper/60">
                  {alsoUnderNda.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
            <Link href="/#contact" className="group t-body mt-8 inline-flex items-center gap-2">
              Request a walkthrough <ArrowBox />
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
