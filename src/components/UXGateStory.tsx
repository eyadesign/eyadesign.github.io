"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Project } from "@/lib/projects";
import { asset } from "@/lib/asset";
import { ArrowUpRight } from "./Icons";
import { ease } from "./Reveal";

/* UXGate brand colours, used only inside this case study. */
const C = {
  navy: "#012E4B",
  blue: "#005F99",
  cyan: "#78E4FC",
  ice: "#F2FAFD",
  mint: "#DDF5E8",
  night: "#00121B",
};

const img = (name: string) => asset(`/work/uxgate/${name}`);

function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────── Hero phone ───────────────────────── */

const frames = [
  { src: "phone-1.webp", caption: "One decision per step" },
  { src: "phone-3.webp", caption: "Wrong? A hint, never a penalty" },
  { src: "phone-5.webp", caption: "Right, and here is why" },
  { src: "phone-2.webp", caption: "The same step in Arabic, dark mode" },
  { src: "phone-4.webp", caption: "RTL designed, not mirrored" },
  { src: "phone-6.webp", caption: "صحيح  +5 XP" },
];

function PhoneDemo() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % frames.length), 2300);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="relative mx-auto w-[min(300px,72vw)]">
      <div
        className="relative overflow-hidden rounded-[42px] p-[10px] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.8)]"
        style={{ background: "#0d1b24", boxShadow: `0 0 0 2px ${C.cyan}33 inset, 0 50px 90px -30px rgba(0,0,0,.8)` }}
      >
        <div className="relative aspect-[390/846] overflow-hidden rounded-[32px] bg-[#0d1b24]">
          <AnimatePresence initial={false}>
            <motion.img
              key={frames[i].src}
              src={img(frames[i].src)}
              alt={`UXGate lesson screen: ${frames[i].caption}`}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease }}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center gap-3">
        <>
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-full px-4 py-1.5 text-[15px] font-medium"
            style={{ background: C.cyan, color: C.night }}
          >
            {frames[i].caption}
          </motion.p>
        </>
        <div className="flex gap-1.5">
          {frames.map((f, k) => (
            <button
              key={f.src}
              type="button"
              aria-label={`Show screen ${k + 1}`}
              onClick={() => setI(k)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: k === i ? 22 : 6, background: k === i ? C.cyan : "rgba(255,255,255,.3)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Float({
  src,
  className,
  delay = 0,
}: {
  src: string;
  className: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src={img(src)}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute drop-shadow-[0_24px_30px_rgba(0,0,0,0.45)] ${className}`}
      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
      animate={
        reduce
          ? { opacity: 1, scale: 1, rotate: 0 }
          : { opacity: 1, scale: 1, rotate: [0, 8, 0], y: [0, -14, 0] }
      }
      transition={
        reduce
          ? { duration: 0.6 }
          : {
              opacity: { duration: 0.8, delay: 0.6 + delay },
              scale: { duration: 0.9, delay: 0.6 + delay, ease },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            }
      }
    />
  );
}

/* ───────────────────────── Psychology ───────────────────────── */

const principles = [
  {
    term: "Pretesting effect",
    title: "Guess first, learn second",
    text: "Every lesson opens with an ungraded prediction, before any teaching. A wrong guess primes the mind for the answer.",
  },
  {
    term: "Retrieval practice",
    title: "Decide, then Check",
    text: "Each step is one decision. Selecting an answer never shows if it is right. Only Check does.",
  },
  {
    term: "Contrasting cases",
    title: "Two close versions",
    text: "Pick the better screen and the deciding factor. Small differences build judgment, not rule-following.",
  },
  {
    term: "Elaborative feedback",
    title: "Feedback for that exact mistake",
    text: "Each wrong option maps to a real misconception. Hints arrive after a miss, never before it.",
  },
  {
    term: "Confidence calibration",
    title: "How sure are you?",
    text: "Some steps ask for confidence before Check. Confident mistakes come back first in review.",
  },
  {
    term: "Spacing & transfer",
    title: "Prove it later, on a new case",
    text: "A skill only counts as Kept when it is passed again, days later, in a different scenario.",
  },
];

/* ───────────────────────── Lesson anatomy ───────────────────────── */

const beats = [
  { name: "Hook", text: "A real scenario and the visitor’s goal." },
  { name: "Try first", text: "One ungraded prediction before any teaching." },
  { name: "Concept", text: "The idea, in under about 60 words." },
  { name: "Guided", text: "3 to 5 steps with Check. Hints appear only after a wrong answer." },
  { name: "Contrast", text: "Two close versions. Pick the better one, then the reason." },
  { name: "Independent", text: "A new case, ideally a different product. No help." },
  { name: "Recap", text: "The skill shown, one pattern to review, and what comes next." },
];

function Anatomy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!inView || touched || reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % beats.length), 2000);
    return () => clearInterval(t);
  }, [inView, touched, reduce]);

  return (
    <div ref={ref}>
      <div className="relative mx-4">
        <div className="absolute left-0 right-0 top-[15px] h-[3px] rounded-full bg-[var(--ink-10)]" />
        <motion.div
          className="absolute left-0 top-[15px] h-[3px] rounded-full"
          style={{ background: C.blue }}
          animate={{ width: `${(i / (beats.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease }}
        />
        <ol className="relative flex justify-between">
          {beats.map((b, k) => (
            <li key={b.name} className="flex w-0 flex-col items-center">
              <button
                type="button"
                onClick={() => {
                  setTouched(true);
                  setI(k);
                }}
                aria-current={k === i ? "step" : undefined}
                className="flex h-[33px] w-[33px] items-center justify-center rounded-full border-2 text-[13px] font-semibold transition-all duration-300"
                style={{
                  borderColor: k <= i ? C.blue : "rgba(17,17,17,.15)",
                  background: k === i ? C.blue : k < i ? C.cyan : "var(--bg)",
                  color: k === i ? "#fff" : C.navy,
                  transform: k === i ? "scale(1.2)" : "scale(1)",
                }}
              >
                {k + 1}
              </button>
              <span
                className={`mt-3 whitespace-nowrap text-[13px] transition-opacity duration-300 max-[700px]:hidden ${
                  k === i ? "font-semibold opacity-100" : "opacity-50"
                }`}
              >
                {b.name}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-10 min-h-[120px]">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <p className="t-h3">{beats[i].name}</p>
          <p className="t-lead mt-2 max-w-[560px] font-normal text-[var(--ink-50)]">{beats[i].text}</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── Playable step ───────────────────────── */

const options = [
  {
    id: "A",
    text: "Ask for them on the membership form, if she joins",
    right: true,
    feedback:
      "Ask at the moment it’s needed. Moving a question to the right moment loses nothing: the people who join answer it then, and now they have a reason to.",
  },
  {
    id: "B",
    text: "Keep them on the trial form, marked optional",
    right: false,
    feedback:
      "Optional fields are still there to read and wonder about, and many people fill them in anyway, just in case. If it can wait, move it.",
  },
  {
    id: "C",
    text: "Keep them required on the trial form, so it’s done once",
    right: false,
    feedback: "Look again at when the gym actually needs these two answers, and who needs to give them.",
  },
];

const ledge = "rounded-[14px] border-2 transition-all duration-150 active:translate-y-[4px]";

function PlayableStep() {
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [tries, setTries] = useState(0);
  const choice = options.find((o) => o.id === picked);
  const solved = checked && choice?.right;

  return (
    <div
      className="mx-auto w-full max-w-[420px] rounded-[28px] border-2 p-5"
      style={{ background: C.ice, borderColor: C.navy, boxShadow: `0 8px 0 0 ${C.navy}`, color: C.navy }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white">
          <motion.div
            className="h-full rounded-full"
            style={{ background: C.blue }}
            animate={{ width: solved ? "100%" : "44%" }}
            transition={{ duration: 0.6, ease }}
          />
        </div>
        <span className="text-[13px] font-semibold">4/9</span>
      </div>
      <p className="text-[13px] font-semibold" style={{ color: C.blue }}>
        Tune it · Step 4
      </p>
      <p className="mt-1 text-[14px] leading-snug opacity-80">
        The gym does need Hana’s national ID and date of birth, but only if she signs up as a member
        after the trial.
      </p>
      <p className="mt-3 text-[18px] font-bold leading-tight">Which version of the trial form should ship?</p>

      <div className="mt-4 flex flex-col gap-2.5" role="radiogroup" aria-label="Answers">
        {options.map((o) => {
          const active = picked === o.id;
          const state = checked && active ? (o.right ? "right" : "wrong") : active ? "selected" : "idle";
          const colors = {
            idle: { bg: "#fff", border: "#cfe3ee", shadow: "#cfe3ee" },
            selected: { bg: "#e3f6fd", border: C.blue, shadow: C.blue },
            right: { bg: C.mint, border: "#1f9d61", shadow: "#1f9d61" },
            wrong: { bg: "#fde8e8", border: "#d64545", shadow: "#d64545" },
          }[state];
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={!!solved}
              onClick={() => {
                setPicked(o.id);
                setChecked(false);
              }}
              className={`${ledge} flex items-center gap-3 px-3 py-2.5 text-left text-[14px] font-semibold`}
              style={{ background: colors.bg, borderColor: colors.border, boxShadow: `0 4px 0 0 ${colors.shadow}` }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border-2 text-[12px]"
                style={{ borderColor: colors.border, background: "#fff" }}
              >
                {state === "right" ? "✓" : state === "wrong" ? "✕" : o.id}
              </span>
              {o.text}
            </button>
          );
        })}
      </div>

      <div className="mt-4 min-h-[132px]">
        <>
          {checked && choice ? (
            <motion.div
              key={choice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
              className="rounded-[16px] border-2 p-3.5"
              style={{
                background: choice.right ? C.mint : "#fde8e8",
                borderColor: choice.right ? "#1f9d61" : "#d64545",
              }}
              role="status"
            >
              <div className="flex items-center justify-between">
                <p className="text-[17px] font-bold">{choice.right ? "Right" : "Not quite"}</p>
                {choice.right && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.15 }}
                    className="rounded-full px-2.5 py-0.5 text-[13px] font-bold text-white"
                    style={{ background: C.blue }}
                  >
                    +{tries === 0 ? 10 : 5} XP
                  </motion.span>
                )}
              </div>
              <p className="mt-1 text-[13.5px] leading-snug">{choice.feedback}</p>
              {choice.right ? (
                <button
                  type="button"
                  onClick={() => {
                    setPicked(null);
                    setChecked(false);
                    setTries(0);
                  }}
                  className="mt-2 text-[13px] font-semibold underline underline-offset-2"
                >
                  Play again
                </button>
              ) : (
                <p className="mt-2 text-[12.5px] opacity-70">Your first answer is kept. Pick another and check again.</p>
              )}
            </motion.div>
          ) : (
            <motion.div key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="mb-2 text-center text-[12.5px] opacity-60">
                Selecting never shows the answer. Only Check does.
              </p>
              <button
                type="button"
                disabled={!picked}
                onClick={() => {
                  setChecked(true);
                  if (!choice?.right) setTries((t) => t + 1);
                }}
                className={`${ledge} w-full py-3 text-[16px] font-bold text-white disabled:opacity-40`}
                style={{ background: C.blue, borderColor: C.navy, boxShadow: `0 4px 0 0 ${C.navy}` }}
              >
                Check
              </button>
            </motion.div>
          )}
        </>
      </div>
    </div>
  );
}

/* ───────────────────────── Numbers ───────────────────────── */

function Count({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (reduce) {
      node.textContent = to.toLocaleString("en-US");
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);
  return (
    <div>
      <span ref={ref} className="block text-[clamp(48px,6vw,88px)] font-extrabold leading-none tracking-[-0.03em]">
        0
      </span>
      <span className="t-body mt-2 block opacity-70">{label}</span>
    </div>
  );
}

/* ───────────────────────── Design system strip ───────────────────────── */

const boards = ["board-tune-mobile.webp", "board-compare-desktop.webp", "board-compare-mobile.webp", "board-tune-desktop.webp"];
const swatches = [
  { name: "Navy", hex: C.navy, dark: true },
  { name: "UXGate blue", hex: C.blue, dark: true },
  { name: "Cyan", hex: C.cyan },
  { name: "Ice", hex: C.ice },
  { name: "Mint", hex: C.mint },
  { name: "Night", hex: C.night, dark: true },
];
const illos = ["ill-bulb", "ill-target", "ill-trophy", "ill-review", "ill-shield", "ill-gate", "ill-feedback", "ill-certificate", "ill-calendar", "ill-path-forms", "ill-path-hierarchy"];

function Boards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-58%"]);
  return (
    <div ref={ref} className="overflow-hidden py-2">
      <motion.div style={{ x }} className="flex w-max gap-4 pl-5">
        {boards.map((b) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={b}
            src={img(b)}
            alt="UXGate design board: one lesson step in every state, English and Arabic, light and dark"
            loading="lazy"
            className="h-[clamp(240px,32vw,440px)] w-auto max-w-none rounded-[18px] border border-[var(--ink-10)]"
          />
        ))}
      </motion.div>
    </div>
  );
}

const roles = [
  "Product strategy & spec",
  "Learning model",
  "Content system & validator",
  "UX flows & UI",
  "Design system & tokens",
  "Illustration & motion direction",
  "Arabic & English copy",
  "AI-assisted build",
  "Admin panel & billing",
  "Accessibility & QA",
];

/* ───────────────────────── Page ───────────────────────── */

export function UXGateStory({ project }: { project: Project }) {
  return (
    <article>
      {/* Hero */}
      <header
        className="relative overflow-hidden pb-[clamp(64px,8vw,110px)] pt-[clamp(120px,13vw,170px)] text-white"
        style={{
          background: `radial-gradient(900px 600px at 85% 0%, #0b6aa6 0%, rgba(0,95,153,.3) 40%, transparent 70%), linear-gradient(160deg, ${C.navy} 0%, ${C.night} 100%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${C.cyan}10 1px, transparent 1px), linear-gradient(90deg, ${C.cyan}10 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(circle at 70% 40%, #000 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 40%, #000 0%, transparent 70%)",
          }}
        />
        <div className="container-x relative grid items-center gap-14 min-[900px]:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="mb-6 inline-block rounded-full border-2 px-4 py-1.5 text-[15px] font-semibold"
              style={{ borderColor: C.cyan, color: C.cyan }}
            >
              {project.spotlightLabel ?? "Own product"}
            </motion.p>
            <h1 className="text-[clamp(64px,10.5vw,160px)] font-extrabold leading-[0.88] tracking-[-0.03em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, ease, delay: 0.25 }}
                >
                  {project.title}
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
              className="mt-6 max-w-[520px] text-[clamp(20px,2vw,26px)] leading-snug text-white/80"
            >
              A full learning product, from the first idea to working software.{" "}
              <span className="font-semibold text-white">
                I led every stage: strategy, research, design and build.
              </span>
            </motion.p>
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-x-10 gap-y-4"
            >
              {[
                ["Role", "End-to-end product lead"],
                ["Platform", "Web app · Arabic & English"],
                ["Status", "Launching soon"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="t-small text-white/50">{k}</dt>
                  <dd className="t-body">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 60, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
          >
            <PhoneDemo />
            <Float src="ill-bulb.webp" className="-right-2 -top-10 w-[110px] min-[900px]:w-[130px]" />
            <Float src="ill-trophy.webp" className="-left-4 bottom-24 w-[90px] min-[900px]:w-[110px]" delay={0.6} />
            <Float src="ill-target.webp" className="-right-6 bottom-40 w-[70px] min-[900px]:w-[84px]" delay={1.1} />
          </motion.div>
        </div>
      </header>

      {/* The idea */}
      <section className="py-[clamp(80px,11vw,160px)]">
        <div className="container-x">
          <Rise>
            <p className="text-[clamp(34px,5vw,76px)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Designers don’t learn UX by reading about it.{" "}
              <span className="text-[var(--ink-50)]">They learn by deciding.</span>
            </p>
          </Rise>
          <Rise delay={0.1}>
            <p className="t-lead mt-8 max-w-[620px] font-normal">{project.summary}</p>
          </Rise>
        </div>
      </section>

      {/* Psychology */}
      <section className="pb-[clamp(80px,10vw,140px)]">
        <div className="container-x">
          <Rise className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="t-h2">
              The psychology
              <br />
              under the fun
            </h2>
            <p className="t-body max-w-[360px] text-[var(--ink-50)]">
              I started from learning research, not from a game. Each mechanic exists because of how
              people actually build a skill.
            </p>
          </Rise>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <motion.article
                key={p.term}
                initial={{ opacity: 0, y: 50, rotate: i % 2 ? 1.5 : -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex min-h-[250px] flex-col justify-between rounded-[20px] p-6"
                style={
                  i === 0 || i === 5
                    ? { background: C.navy, color: "#fff" }
                    : i === 2
                      ? { background: C.cyan, color: C.night }
                      : { background: "#fff", border: "1px solid var(--ink-10)" }
                }
              >
                <div className="flex items-start justify-between">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.04em] opacity-60">{p.term}</span>
                  <span className="text-[13px] opacity-40">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.03em]">{p.title}</h3>
                  <p className="t-small mt-3 opacity-75">{p.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <Rise className="mt-3">
            <div
              className="flex flex-col gap-6 rounded-[20px] p-[clamp(24px,4vw,44px)] md:flex-row md:items-center md:justify-between"
              style={{ background: C.mint, color: C.night }}
            >
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.04em] opacity-60">Calm motivation</p>
                <p className="mt-2 text-[clamp(28px,3.4vw,48px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  No hearts. No timers. No guilt.
                </p>
              </div>
              <p className="t-body max-w-[380px]">
                XP rewards thinking on your own: <strong>10</strong> for a first-try answer,{" "}
                <strong>5</strong> with help, <strong>0</strong> when revealed. Streaks have earned
                freezes, and leaderboards stay off until you opt in.
              </p>
            </div>
          </Rise>
        </div>
      </section>

      {/* Anatomy + playable step */}
      <section className="pb-[clamp(80px,10vw,140px)]">
        <div className="container-x grid items-center gap-14 min-[900px]:grid-cols-[1.1fr_1fr]">
          <div>
            <Rise>
              <h2 className="t-h2">
                One lesson,
                <br />
                seven beats
              </h2>
              <p className="t-body mt-4 max-w-[440px] text-[var(--ink-50)]">
                5 to 10 minutes, 8 to 12 steps. The order is fixed on purpose, and each unit ends with
                a skill check: a new scenario, no hints.
              </p>
            </Rise>
            <Rise delay={0.1} className="mt-12">
              <Anatomy />
            </Rise>
          </div>
          <Rise delay={0.15}>
            <p className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.04em] text-[var(--ink-50)]">
              Try a real step
            </p>
            <PlayableStep />
          </Rise>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-[clamp(64px,8vw,110px)] text-white" style={{ background: C.night }}>
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          <Count to={11} label="learning paths" />
          <Count to={1698} label="graded steps written and reviewed" />
          <Count to={10} label="step types, all keyboard and phone friendly" />
          <Count to={2} label="languages, with RTL designed first-class" />
        </div>
      </section>

      {/* Design system */}
      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="container-x">
          <Rise className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="t-h2">
              Its own
              <br />
              design system
            </h2>
            <p className="t-body max-w-[380px] text-[var(--ink-50)]">
              Every component in every state, in English and Arabic, light and dark, from one set of
              tokens. Built to WCAG 2.2 AA.
            </p>
          </Rise>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
            {swatches.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                className="flex aspect-square flex-col justify-end rounded-[16px] border border-[var(--ink-10)] p-3"
                style={{ background: s.hex, color: s.dark ? "#fff" : C.night }}
              >
                <span className="text-[14px] font-semibold leading-tight">{s.name}</span>
                <span className="text-[12px] opacity-70">{s.hex}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Boards />
        </div>

        <div className="container-x mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-between">
          {illos.map((n, i) => (
            <motion.img
              key={n}
              src={img(`${n}.webp`)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-[64px] md:w-[78px]"
              initial={{ opacity: 0, y: 30, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.05 }}
              whileHover={{ y: -8, rotate: i % 2 ? 8 : -8 }}
            />
          ))}
        </div>
      </section>

      {/* Solo */}
      <section className="pb-[clamp(80px,10vw,140px)]">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Rise>
            <h2 className="t-h2">
              Every stage.
              <br />
              One owner.
            </h2>
            <p className="t-body mt-5 max-w-[420px] text-[var(--ink-50)]">
              I owned the full product lifecycle. I wrote the specs, sprint briefs and design reviews,
              then directed an AI-assisted build with Next.js, TypeScript and Supabase: learner app,
              public site and a full admin panel.
            </p>
          </Rise>
          <ul className="flex flex-wrap content-start gap-2">
            {roles.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0, scale: 0.8, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.05 }}
                className="rounded-full border border-[var(--ink-10)] bg-white px-4 py-2 text-[16px]"
              >
                <span style={{ color: C.blue }}>✓</span> {r}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x">
        <Rise>
          <div
            className="relative overflow-hidden rounded-[24px] p-[clamp(28px,5vw,64px)] text-white"
            style={{ background: `linear-gradient(135deg, ${C.blue} 0%, ${C.navy} 70%)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img("ill-gate.webp")}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 right-6 w-[150px] opacity-90 max-[700px]:hidden"
            />
            <p className="text-[clamp(34px,4.6vw,64px)] font-semibold leading-none tracking-[-0.03em]">
              Want to try it?
            </p>
            <p className="t-lead mt-4 max-w-[460px] font-normal text-white/80">
              UXGate is launching soon. A full working version is available for testing on request.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white py-2.5 pl-5 pr-2.5 text-[16px] font-semibold"
                style={{ color: C.navy }}
              >
                Request access
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:rotate-45"
                  style={{ background: C.navy }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="https://uxgate.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-5 py-2.5 text-[16px] font-semibold transition-colors hover:border-white"
              >
                uxgate.org ↗
              </a>
            </div>
          </div>
        </Rise>
      </section>
    </article>
  );
}
