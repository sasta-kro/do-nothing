import { Quote } from "lucide-react";

import { homepageCopy } from "../content/homepage";

export function TestimonialSection() {
  return (
    <section id="atelier" className="testimonial-section">
      <div className="testimonial-section__inner">
        <Quote className="testimonial-section__quote-icon" strokeWidth={1.4} />
        <blockquote className="testimonial-section__quote">
          {homepageCopy.testimonialQuote}
        </blockquote>
        <div className="testimonial-section__divider" />
        <p className="testimonial-section__signature">
          {homepageCopy.testimonialSignature}
        </p>
        <p className="testimonial-section__caption">
          {homepageCopy.testimonialCaption}
        </p>
      </div>
    </section>
  );
}
