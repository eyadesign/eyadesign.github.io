"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";
import { ArrowBox, Bolt, Sparkle } from "./Icons";
import { ease } from "./Reveal";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const BW = "/images/eyad-bw.webp";
const RED = "/images/eyad-red.webp";

type Metrics = {
  x1: number; y1: number; w1: number;
  x2: number; y2: number; w2: number; h2: number;
  start: number; end: number;
};

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Portrait({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      alt={alt}
      className={`h-full w-full object-cover object-[50%_20%] ${className}`}
      draggable={false}
    />
  );
}

/** The card that flies from the hero to the about section, flipping B&W → red. */
function FlyingCard({ m, progress }: { m: Metrics; progress: MotionValue<number> }) {
  const x = useTransform(progress, (p) => lerp(m.x1, m.x2, easeInOut(p)));
  const y = useTransform(progress, (p) => lerp(m.y1, m.y2, easeInOut(p)));
  const scale = useTransform(progress, (p) => lerp(m.w1 / m.w2, 1, easeInOut(p)));
  const rotateY = useTransform(progress, [0.08, 0.72], [0, 180], { clamp: true });
  const rotateZ = useTransform(progress, [0, 0.45, 1], [0, -9, 0]);
  const rotateX = useTransform(progress, [0, 0.45, 1], [0, 14, 0]);

  // Layers: position (2D) → entrance fade (2D) → 3D flip. Opacity/filter must
  // never sit on the preserve-3d element itself or the flip flattens.
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-20"
      style={{
        width: m.w2,
        height: m.h2,
        marginLeft: -m.w2 / 2,
        marginTop: -m.h2 / 2,
        x,
        y,
        scale,
      }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.55 }}
      >
      <motion.div
        className="relative h-full w-full"
        style={{
          rotateY,
          rotateZ,
          rotateX,
          transformPerspective: 1400,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[28px] bg-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <Portrait src={BW} alt="" />
        </div>
        <div
          className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#7a0000] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Portrait src={RED} alt="" />
        </div>
      </motion.div>
      </motion.div>
    </motion.div>
  );
}

/** Mobile: the card fades in B&W, then flips to the red portrait. Tap to flip it back. */
function AutoFlipCard({ reduce }: { reduce: boolean }) {
  const [flipped, setFlipped] = useState(true);
  const [touched, setTouched] = useState(false);
  const face =
    "absolute inset-0 overflow-hidden rounded-[18px] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.6)]";
  const hidden = { backfaceVisibility: "hidden" as const, WebkitBackfaceVisibility: "hidden" as const };
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease, delay: 0.55 }}
    >
      <motion.button
        type="button"
        onClick={() => {
          setTouched(true);
          setFlipped((f) => !f);
        }}
        aria-label="Flip portrait"
        className="relative block h-full w-full"
        style={{ transformStyle: "preserve-3d", transformPerspective: 900 }}
        initial={{ rotateY: reduce ? 180 : 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: reduce ? 0 : 1.1,
          ease: [0.65, 0, 0.35, 1],
          delay: reduce || touched ? 0 : 1.6,
        }}
      >
        <div className={`${face} bg-ink`} style={hidden}>
          <Portrait src={BW} alt={`Portrait of ${site.fullName}`} />
        </div>
        <div className={`${face} bg-[#7a0000]`} style={{ ...hidden, transform: "rotateY(180deg)" }}>
          <Portrait src={RED} alt="" />
        </div>
      </motion.button>
    </motion.div>
  );
}

export function HeroAbout() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroSlot = useRef<HTMLDivElement>(null);
  const aboutSlot = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [m, setM] = useState<Metrics | null>(null);
  const [desktop, setDesktop] = useState(false);
  const animated = desktop && !reduce && m !== null;

  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, (v) =>
    m ? clamp((v - m.start) / Math.max(1, m.end - m.start)) : 0
  );

  const measure = useCallback(() => {
    const wrap = wrapRef.current, a = heroSlot.current, b = aboutSlot.current;
    if (!wrap || !a || !b) return;
    const w = wrap.getBoundingClientRect();
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    const wrapTop = w.top + window.scrollY;
    const y2 = rb.top - w.top + rb.height / 2;
    setM({
      x1: ra.left - w.left + ra.width / 2,
      y1: ra.top - w.top + ra.height / 2,
      w1: ra.width,
      x2: rb.left - w.left + rb.width / 2,
      y2,
      w2: rb.width,
      h2: rb.height,
      start: wrapTop,
      end: wrapTop + y2 - window.innerHeight / 2,
    });
  }, []);

  useIsoLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useIsoLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, desktop]);

  // The sparkle and bolt can be grabbed and tossed around the hero, like the reference.
  const dragProps = {
    drag: true as const,
    dragConstraints: heroRef,
    dragElastic: 0.3,
    dragTransition: { bounceStiffness: 280, bounceDamping: 16, power: 0.4 },
    whileDrag: { scale: 1.18 },
    style: { touchAction: "none" as const },
  };

  return (
    <div ref={wrapRef} className="relative">
      {/* ───────────── Hero ───────────── */}
      <section
        ref={heroRef}
        id="top"
        className="relative flex min-h-[640px] flex-col overflow-x-clip pt-28 h-[100svh]"
      >
        <div className="container-x relative flex flex-1 items-center justify-center pb-[18vh] max-[899px]:pb-0">
          <h1 className="t-hero relative text-center">
            <span className="sr-only">{site.fullName}, </span>
            <Line delay={0.25}>Product</Line>
            <Line delay={0.38}>
              <span className="pl-[0.2em] max-[600px]:pl-0">Designer</span>
            </Line>

            <motion.span
              aria-hidden="true"
              title="Drag me"
              {...dragProps}
              className="absolute -left-[0.42em] -top-[0.18em] z-10 block w-[0.62em] cursor-grab select-none active:cursor-grabbing max-[600px]:-left-[0.15em] max-[600px]:-top-[0.55em]"
              initial={{ scale: 0, rotate: -120, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.7 }}
            >
              <motion.span
                className="block"
                animate={reduce ? undefined : { rotate: [0, 12, 0], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkle className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.25)]" />
              </motion.span>
            </motion.span>

            <motion.span
              aria-hidden="true"
              title="Drag me"
              {...dragProps}
              className="absolute -bottom-[0.42em] -right-[0.5em] z-10 block w-[0.85em] cursor-grab select-none active:cursor-grabbing max-[600px]:-right-[0.1em] max-[600px]:-bottom-[0.75em]"
              initial={{ scale: 0, rotate: 60, opacity: 0 }}
              animate={{ scale: 1, rotate: 14, opacity: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.85 }}
            >
              <motion.span
                className="block"
                animate={reduce ? undefined : { y: [0, 8, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bolt className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.25)]" />
              </motion.span>
            </motion.span>
          </h1>
        </div>

        <div className="container-x relative pb-8 max-[899px]:pb-6">
          <div className="flex items-end justify-between gap-4 max-[899px]:flex-col max-[899px]:items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.75 }}
              className="text-[clamp(40px,4.4vw,68px)] font-semibold leading-none tracking-[-0.02em] max-[899px]:hidden"
            >
              ©2026
            </motion.p>

            <div
              ref={heroSlot}
              className="h-[228px] w-[200px] shrink-0 max-[899px]:order-1 max-[899px]:h-[228px] max-[899px]:w-[200px] min-[900px]:absolute min-[900px]:bottom-8 min-[900px]:left-1/2 min-[900px]:-translate-x-1/2"
            >
              {!animated &&
                (desktop ? (
                  <motion.div
                    className="h-full w-full overflow-hidden rounded-[18px] bg-ink"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease, delay: 0.55 }}
                  >
                    <Portrait src={BW} alt={`Portrait of ${site.fullName}`} />
                  </motion.div>
                ) : (
                  <AutoFlipCard reduce={!!reduce} />
                ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.85 }}
              className="t-body uppercase max-[899px]:order-3"
            >
              /Designing since {site.since}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───────────── About ───────────── */}
      <section id="about" className="relative scroll-mt-8 py-[clamp(96px,14vw,200px)]">
        <div className="container-x grid gap-10 min-[900px]:grid-cols-[1fr_auto_1fr] min-[900px]:gap-12">
          <div className="flex flex-col justify-between gap-8">
            <Reveal2>
              <h2 className="t-h2">Hey!</h2>
            </Reveal2>
            <Reveal2 delay={0.1}>
              <p className="t-lead max-w-[320px]">
                I’m Eyad, a Senior UI/UX & Product Designer based in Alexandria, Egypt,
                currently leading design at Tritecs.
              </p>
            </Reveal2>
          </div>

          <div
            ref={aboutSlot}
            className="mx-auto aspect-[380/433] w-full max-w-[380px] max-[899px]:hidden min-[900px]:w-[min(380px,30vw)]"
          >
            {!animated && (
              <div className="h-full w-full overflow-hidden rounded-[28px] bg-[#7a0000]">
                <Portrait src={RED} alt={`${site.fullName} in front of a red backdrop`} />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-end gap-5">
            <Reveal2>
              <p className="t-body max-w-[360px]">
                I design highly usable products for global clients across the USA, Europe and
                the Middle East, grounded in research, usability and scalable design systems.
              </p>
            </Reveal2>
            <Reveal2 delay={0.08}>
              <p className="t-body max-w-[360px]">
                I’ve trained and mentored 1,000+ UI/UX students at UX Gate, and I bring AI into
                my process with a focus on how people intuitively interact with intelligent
                systems.
              </p>
            </Reveal2>
            <Reveal2 delay={0.16}>
              <Link href="/#contact" className="group t-body inline-flex items-center gap-2">
                Let’s work together <ArrowBox />
              </Link>
            </Reveal2>
          </div>
        </div>
      </section>

      {animated && m && <FlyingCard m={m} progress={progress} />}
    </div>
  );
}

function Reveal2({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
