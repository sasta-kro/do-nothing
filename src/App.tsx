import { motion } from "motion/react";

import {
  homepageStartupMotionProps,
  homepageStartupStaggerContainer,
} from "./animations/homepageMotion";
import { FeatureShowcaseSection } from "./components/FeatureShowcaseSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PricingGrid } from "./components/PricingGrid";
import { TestimonialSection } from "./components/TestimonialSection";
import {
  HomepageLocaleProvider,
  useHomepageLocale,
} from "./localization/HomepageLocaleProvider";

function HomepageLayout() {
  const { activeLocaleCode } = useHomepageLocale();

  return (
    <main
      className={`homepage homepage--locale-${activeLocaleCode}`}
      lang={activeLocaleCode}
    >
      <div className="homepage__shell">
        <motion.div
          variants={homepageStartupStaggerContainer}
          {...homepageStartupMotionProps}
        >
          <Header />
          <HeroSection />
          <PricingGrid />
        </motion.div>
        <FeatureShowcaseSection />
        <TestimonialSection />
      </div>
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <HomepageLocaleProvider>
      <HomepageLayout />
    </HomepageLocaleProvider>
  );
}
