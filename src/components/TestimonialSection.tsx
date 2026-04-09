import { Quote } from "lucide-react";

import { homepageCopy } from "../content/homepage";
import { testimonialClasses } from "../styles/homepageClasses";

export function TestimonialSection() {
  return (
    <section id="atelier" className={testimonialClasses.section}>
      <div className={testimonialClasses.inner}>
        <Quote className={testimonialClasses.quoteIcon} strokeWidth={1.4} />
        <blockquote className={testimonialClasses.quote}>
          {homepageCopy.testimonialQuote}
        </blockquote>
        <div className={testimonialClasses.divider} />
        <p className={testimonialClasses.signature}>
          {homepageCopy.testimonialSignature}
        </p>
        <p className={testimonialClasses.caption}>
          {homepageCopy.testimonialCaption}
        </p>
      </div>
    </section>
  );
}
