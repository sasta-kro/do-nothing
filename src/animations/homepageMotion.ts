import type { Variants } from "motion/react";

export const homepageMotionEase = [0.22, 1, 0.36, 1] as const;

export const homepageRevealViewport = {
  once: true,
  amount: 0.3,
} as const;

export const homepageStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const homepageSoftStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const homepageFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: homepageMotionEase,
    },
  },
};

export const homepageFadeUpSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
      duration: 0.72,
      ease: homepageMotionEase,
    },
  },
};
