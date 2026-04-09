import { motion } from "motion/react";

import type { PricingTier } from "../content/homepage";
import { pricingClasses } from "../styles/homepageClasses";

const pricingCardVariants = {
  base: "border border-white/4 bg-surface-panel",
  featured:
    "border border-gold-edge/30 bg-surface-strong shadow-[0_26px_80px_rgba(0,0,0,0.38)] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gold-primary",
  outlined:
    "border border-gold-edge/45 bg-surface-panel shadow-[0_28px_90px_rgba(0,0,0,0.34)]",
} as const;

const pricingButtonVariants = {
  ghost:
    "border border-white/8 bg-transparent text-text-main hover:border-gold-edge/40 hover:text-gold-primary",
  gold: "bg-gold-primary text-obsidian hover:bg-[#f4d562]",
  light: "bg-[#efedeb] text-obsidian hover:bg-white",
} as const;

type PricingTierCardProps = {
  key?: string;
  pricingTier: PricingTier;
};

export function PricingTierCard({ pricingTier }: PricingTierCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`${pricingClasses.card} ${pricingCardVariants[pricingTier.cardVariant]}`}
    >
      <div className="flex flex-1 flex-col">
        <p className={pricingClasses.tierLabel}>{pricingTier.tierLabel}</p>
        <h3 className={pricingClasses.title}>{pricingTier.title}</h3>
        <div className={pricingClasses.priceRow}>
          <span className={pricingClasses.price}>${pricingTier.price}</span>
          <span className={pricingClasses.billing}>{pricingTier.billingLabel}</span>
        </div>
        <ul className={pricingClasses.featureList}>
          {pricingTier.features.map((feature, featureIndex) => (
            <li key={feature} className={pricingClasses.featureItem}>
              <span className={pricingClasses.featureCheck}>✓</span>
              <span
                className={
                  pricingTier.accentFeatureIndex === featureIndex
                    ? "text-gold-primary"
                    : undefined
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
        className={`${pricingClasses.button} ${pricingButtonVariants[pricingTier.buttonVariant]}`}
      >
        {pricingTier.buttonLabel}
      </button>
    </motion.article>
  );
}
