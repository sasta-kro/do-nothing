import { pricingTiers } from "../content/homepage";
import { pricingClasses } from "../styles/homepageClasses";
import { PricingTierCard } from "./PricingTierCard";

export function PricingGrid() {
  return (
    <section id="vault" className={pricingClasses.section}>
      <div className={pricingClasses.gridWrap}>
        <div className={pricingClasses.grid}>
          {pricingTiers.map((pricingTier) => (
            <PricingTierCard
              key={pricingTier.title}
              pricingTier={pricingTier}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
