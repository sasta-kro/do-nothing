import { motion } from "motion/react";

import {
  homepageFadeUpSoft,
  homepageStaggerContainer,
} from "../animations/homepageMotion";
import { pricingTiers } from "../content/homepage";
import { PricingTierCard } from "./PricingTierCard";

export function PricingGrid() {
  return (
    <motion.section
      id="vault"
      className="pricing-section"
      variants={homepageFadeUpSoft}
    >
      <motion.div className="pricing-grid-wrap" variants={homepageStaggerContainer}>
        <motion.div className="pricing-grid" variants={homepageStaggerContainer}>
          {pricingTiers.map((pricingTier) => (
            <PricingTierCard
              key={pricingTier.title}
              pricingTier={pricingTier}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
