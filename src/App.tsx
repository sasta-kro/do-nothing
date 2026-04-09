import { FeatureShowcaseSection } from "./components/FeatureShowcaseSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PricingGrid } from "./components/PricingGrid";
import { TestimonialSection } from "./components/TestimonialSection";
import { homepageClasses } from "./styles/homepageClasses";

export default function App() {
  return (
    <main className={homepageClasses.pageSurface}>
      <div className={homepageClasses.pageShell}>
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
