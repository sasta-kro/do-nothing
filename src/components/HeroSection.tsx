import { motion } from "motion/react";

import { homepageCopy } from "../content/homepage";

export function HeroSection() {
  return (
    <section id="top" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="hero__title"
      >
        <span className="hero__lead">{homepageCopy.heroLead}</span>
        <br />
        <span className="hero__highlight">{homepageCopy.heroHighlight}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.75 }}
        className="hero__description"
      >
        <span className="hero__description-line">
          {homepageCopy.heroDescriptionLine1}
        </span>
        <span className="hero__description-line">
          {homepageCopy.heroDescriptionLine2}
        </span>
      </motion.p>
    </section>
  );
}
