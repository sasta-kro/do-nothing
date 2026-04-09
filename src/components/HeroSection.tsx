import { motion } from "motion/react";

import { homepageCopy } from "../content/homepage";
import { heroClasses } from "../styles/homepageClasses";

export function HeroSection() {
  return (
    <section id="top" className={heroClasses.section}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className={heroClasses.title}
      >
        <span className="text-gold-primary">{homepageCopy.heroLead}</span>
        <br />
        <span className="text-text-main">{homepageCopy.heroHighlight}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.75 }}
        className={heroClasses.description}
      >
        {homepageCopy.heroDescription}
      </motion.p>
    </section>
  );
}
