import { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const fadeUpStagger = (stagger = 0.06): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0.8, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" };
