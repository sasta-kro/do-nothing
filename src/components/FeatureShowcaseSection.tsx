import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

import {
  homepageFadeIn,
  homepageFadeUp,
  homepageFadeUpSoft,
  homepageStaggerContainer,
  homepageViewportRevealMotionProps,
} from "../animations/homepageMotion";
import { homepageCopy, homepageImages } from "../content/homepage";

export function FeatureShowcaseSection() {
  return (
    <motion.section
      id="heritage"
      className="heritage-section"
      variants={homepageStaggerContainer}
      {...homepageViewportRevealMotionProps}
    >
      <motion.article className="heritage-panel" variants={homepageFadeUp}>
        <motion.div className="heritage-panel__visual" variants={homepageFadeIn}>
          <motion.img
            src={homepageImages.staircasePlaceholder}
            alt="Placeholder staircase scene"
            className="heritage-panel__image"
            referrerPolicy="no-referrer"
            variants={homepageFadeIn}
          />
          <div className="heritage-panel__overlay" />
          <div className="heritage-panel__glow" />
          <motion.div className="heritage-panel__content" variants={homepageFadeUpSoft}>
            <motion.h2 className="heritage-panel__title" variants={homepageFadeUpSoft}>
              {homepageCopy.featureTitle}
            </motion.h2>
            <motion.p className="heritage-panel__description" variants={homepageFadeUpSoft}>
              {homepageCopy.featureDescription}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.article>

      <motion.div className="heritage-side-grid" variants={homepageStaggerContainer}>
        <motion.article className="uptime-card" variants={homepageFadeUpSoft}>
          <div className="uptime-card__icon-wrap">
            <Sparkles
              className="uptime-card__icon"
              strokeWidth={1.55}
            />
            <span className="uptime-card__accent" />
          </div>
          <h3 className="uptime-card__title">
            {homepageCopy.spotlightTitle}
          </h3>
          <p className="uptime-card__label">
            {homepageCopy.spotlightLabel}
          </p>
        </motion.article>

        <motion.article className="abstract-panel" variants={homepageFadeUpSoft}>
          <motion.img
            src={homepageImages.abstractGoldPlaceholder}
            alt="Placeholder abstract gold texture"
            className="abstract-panel__image"
            referrerPolicy="no-referrer"
            variants={homepageFadeIn}
          />
          <div className="abstract-panel__overlay" />
          <p className="abstract-panel__wordmark">Nothingness</p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
