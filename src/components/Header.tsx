import { motion } from "motion/react";

import {
  homepageFadeUpSoft,
  homepageSoftStaggerContainer,
} from "../animations/homepageMotion";
import { homepageCopy, navigationItems } from "../content/homepage";

export function Header() {
  return (
    <motion.header
      className="site-header"
      variants={homepageSoftStaggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="#top"
        className="site-header__brand"
        variants={homepageFadeUpSoft}
      >
        {homepageCopy.brandName}
      </motion.a>
      <motion.div className="site-header__nav" variants={homepageSoftStaggerContainer}>
        {navigationItems.map((navigationItem) => (
          <motion.a
            key={navigationItem.label}
            href={navigationItem.href}
            className="site-header__link"
            variants={homepageFadeUpSoft}
          >
            {navigationItem.label}
          </motion.a>
        ))}
        <motion.button
          type="button"
          className="site-header__button"
          variants={homepageFadeUpSoft}
        >
          Inquire
        </motion.button>
      </motion.div>
    </motion.header>
  );
}
