import type { Variants } from "motion/react";

export const homepageMotionEase = [0.22, 1, 0.36, 1] as const;

export const homepageRevealViewport = {
  once: true,
  amount: 0.3,
} as const;

export const homepageStartupMotionProps = {
  initial: "hidden",
  animate: "visible",
} as const;

export const homepageViewportRevealMotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: homepageRevealViewport,
} as const;

export const homepageStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const homepageSoftStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export const homepageStartupStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.24,
    },
  },
};

export const homepageFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.02,
      ease: homepageMotionEase,
    },
  },
};

export const homepageFadeUpSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: homepageMotionEase,
    },
  },
};

export const homepageFadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.88,
      ease: homepageMotionEase,
    },
  },
};
