import { pricingTiers } from "../content/homepage";
import { PricingTierCard } from "./PricingTierCard";

export function PricingGrid() {
  return (
    <section id="vault" className="pricing-section">
      <div className="pricing-grid-wrap">
        <div className="pricing-grid">
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
