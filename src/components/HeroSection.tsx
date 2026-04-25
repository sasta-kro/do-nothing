import { motion } from "motion/react";

import {
  homepageFadeUp,
  homepageFadeUpSoft,
  homepageSoftStaggerContainer,
} from "../animations/homepageMotion";
import { homepageCopy } from "../content/homepage";

export function HeroSection() {
  return (
    <motion.section
      id="top"
      className="hero"
      variants={homepageSoftStaggerContainer}
    >
      <motion.h1
        className="hero__title"
        variants={homepageFadeUp}
      >
        <span className="hero__lead" data-text={homepageCopy.heroTitleTop}>
          {homepageCopy.heroTitleTop}
        </span>
        <br />
        <span className="hero__highlight">{homepageCopy.heroTitleBottom}</span>
      </motion.h1>
      <motion.p
        className="hero__description"
        variants={homepageFadeUpSoft}
      >
        <span className="hero__description-line">
          {homepageCopy.heroDescriptionLine1}
        </span>
        <span className="hero__description-line">
          {homepageCopy.heroDescriptionLine2}
        </span>
      </motion.p>
    </motion.section>
  );
}
