import { motion } from "motion/react";

import {
  homepageRevealViewport,
  homepageStaggerContainer,
} from "../animations/homepageMotion";
import { pricingTiers } from "../content/homepage";
import { PricingTierCard } from "./PricingTierCard";

export function PricingGrid() {
  return (
    <motion.section
      id="vault"
      className="pricing-section"
      variants={homepageStaggerContainer}
      initial="hidden"
      animate="visible"
      viewport={homepageRevealViewport}
    >
      <div className="pricing-grid-wrap">
        <motion.div className="pricing-grid" variants={homepageStaggerContainer}>
          {pricingTiers.map((pricingTier) => (
            <PricingTierCard
              key={pricingTier.title}
              pricingTier={pricingTier}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
