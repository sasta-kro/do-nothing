import { FeatureShowcaseSection } from "./components/FeatureShowcaseSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PricingGrid } from "./components/PricingGrid";
import { TestimonialSection } from "./components/TestimonialSection";

export default function App() {
  return (
    <main className="homepage">
      <div className="homepage__shell">
        <Header />
        <HeroSection />
        <PricingGrid />
        <FeatureShowcaseSection />
        <TestimonialSection />
      </div>
      <Footer />
    </main>
  );
}
