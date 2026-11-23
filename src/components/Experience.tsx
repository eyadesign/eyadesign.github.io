"use client";

import { motion } from "framer-motion";
import { experience, home } from "@/lib/site";
import { Reveal, ease } from "./Reveal";

const initials = (s: string) =>
  s.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export function Experience() {
  return (
    <section id="experience" className="py-[clamp(60px,8vw,100px)]">
      <div className="container-x">
        <Reveal>
          <h2 className="t-h2 mb-10">{home.experience.heading}</h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((e, i) => (
            <motion.article
              key={e.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex min-h-[290px] flex-col justify-between rounded-[20px] bg-ink p-6 text-paper"
            >
              <div>
                <p className="mb-4 text-[14px] uppercase tracking-[0.02em] text-paper/50">
                  {e.period}
                </p>
                <p className="t-body text-[17px]">{e.text}</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-paper text-[15px] font-semibold text-ink">
                  {initials(e.company)}
                </span>
                <div className="t-small leading-tight">
                  <p>{e.company}</p>
                  <p className="font-light text-paper/70">{e.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
