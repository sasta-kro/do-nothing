import { Sparkles } from "lucide-react";

import { homepageCopy, homepageImages } from "../content/homepage";
import { heritageClasses } from "../styles/homepageClasses";

export function FeatureShowcaseSection() {
  return (
    <section id="heritage" className={heritageClasses.section}>
      <article className={heritageClasses.featurePanel}>
        <img
          src={homepageImages.staircasePlaceholder}
          alt="Placeholder staircase scene"
          className={heritageClasses.featureImage}
          referrerPolicy="no-referrer"
        />
        <div className={heritageClasses.featureOverlay} />
        <div className={heritageClasses.featureGlow} />
        <div className={heritageClasses.featureContent}>
          <h2 className={heritageClasses.featureTitle}>
            {homepageCopy.featureTitle}
          </h2>
          <p className={heritageClasses.featureDescription}>
            {homepageCopy.featureDescription}
          </p>
        </div>
      </article>

      <div className={heritageClasses.sideGrid}>
        <article className={heritageClasses.spotlightCard}>
          <Sparkles
            className={heritageClasses.spotlightIcon}
            strokeWidth={1.6}
          />
          <h3 className={heritageClasses.spotlightTitle}>
            {homepageCopy.spotlightTitle}
          </h3>
          <p className={heritageClasses.spotlightLabel}>
            {homepageCopy.spotlightLabel}
          </p>
        </article>

        <article className={heritageClasses.abstractPanel}>
          <img
            src={homepageImages.abstractGoldPlaceholder}
            alt="Placeholder abstract gold texture"
            className={heritageClasses.abstractImage}
            referrerPolicy="no-referrer"
          />
          <div className={heritageClasses.abstractOverlay} />
        </article>
      </div>
    </section>
  );
}
