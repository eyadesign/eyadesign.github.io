"use client";

import { motion } from "framer-motion";
import { home, services } from "@/lib/site";
import { Reveal, ease } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-8 py-[clamp(80px,10vw,140px)]">
      <div className="container-x">
        <Reveal>
          <h2 className="t-h2 mb-[clamp(32px,5vw,64px)]">{home.services.heading}</h2>
        </Reveal>
        <ul>
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.06 }}
              className="group relative flex flex-col gap-2 border-b border-[var(--ink-10)] py-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="t-row transition-transform duration-500 ease-[var(--ease)] group-hover:translate-x-3">
                {s.title}
              </span>
              <span className="t-body text-[var(--ink-50)] transition-colors duration-300 group-hover:text-ink">
                {s.tags.join(" • ")}
              </span>
              <span className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[var(--ease)] group-hover:scale-x-100" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
