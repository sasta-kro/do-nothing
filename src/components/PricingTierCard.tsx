import { motion } from "motion/react";

import { homepageFadeUpSoft, homepageMotionEase } from "../animations/homepageMotion";
import type { PricingTier } from "../content/homepage";

type PricingTierCardProps = {
  pricingTier: PricingTier;
};

export function PricingTierCard({ pricingTier }: PricingTierCardProps) {
  return (
    <motion.article
      variants={homepageFadeUpSoft}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: homepageMotionEase }}
      className={`pricing-card pricing-card--${pricingTier.cardVariant}`}
    >
      <div className="pricing-card__body">
        <p className="pricing-card__tier-label">{pricingTier.tierLabel}</p>
        <h3 className="pricing-card__title">{pricingTier.title}</h3>
        <div className="pricing-card__price-row">
          <span className="pricing-card__price">${pricingTier.price}</span>
          <span className="pricing-card__billing">{pricingTier.billingLabel}</span>
        </div>
        <ul className="pricing-card__features">
          {pricingTier.features.map((feature, featureIndex) => (
            <li key={feature} className="pricing-card__feature">
              <span className="pricing-card__feature-check">✓</span>
              <span
                className={
                  pricingTier.accentFeatureIndex === featureIndex
                    ? "pricing-card__feature-text pricing-card__feature-text--accent"
                    : "pricing-card__feature-text"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className={`pricing-card__button pricing-card__button--${pricingTier.buttonVariant}`}
      >
        {pricingTier.buttonLabel}
      </button>
    </motion.article>
  );
}
