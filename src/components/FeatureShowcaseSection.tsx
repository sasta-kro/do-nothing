import { Sparkles } from "lucide-react";

import { homepageCopy, homepageImages } from "../content/homepage";

export function FeatureShowcaseSection() {
  return (
    <section id="heritage" className="heritage-section">
      <article className="heritage-panel">
        <div className="heritage-panel__visual">
          <img
            src={homepageImages.staircasePlaceholder}
            alt="Placeholder staircase scene"
            className="heritage-panel__image"
            referrerPolicy="no-referrer"
          />
          <div className="heritage-panel__overlay" />
          <div className="heritage-panel__glow" />
        </div>
        <div className="heritage-panel__content">
          <h2 className="heritage-panel__title">
            {homepageCopy.featureTitle}
          </h2>
          <p className="heritage-panel__description">
            {homepageCopy.featureDescription}
          </p>
        </div>
      </article>

      <div className="heritage-side-grid">
        <article className="uptime-card">
          <div className="uptime-card__icon-wrap">
            <Sparkles
              className="uptime-card__icon"
              strokeWidth={1.55}
            />
            <span className="uptime-card__accent" />
          </div>
          <h3 className="uptime-card__title">
            {homepageCopy.spotlightTitle}
          </h3>
          <p className="uptime-card__label">
            {homepageCopy.spotlightLabel}
          </p>
        </article>

        <article className="abstract-panel">
          <img
            src={homepageImages.abstractGoldPlaceholder}
            alt="Placeholder abstract gold texture"
            className="abstract-panel__image"
            referrerPolicy="no-referrer"
          />
          <div className="abstract-panel__overlay" />
          <p className="abstract-panel__wordmark">Nothingness</p>
        </article>
      </div>
    </section>
  );
}
