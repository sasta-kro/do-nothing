import { motion } from "motion/react";
import { Quote } from "lucide-react";

import {
  homepageFadeUp,
  homepageFadeUpSoft,
  homepageRevealViewport,
  homepageSoftStaggerContainer,
} from "../animations/homepageMotion";
import { homepageCopy } from "../content/homepage";

export function TestimonialSection() {
  return (
    <motion.section
      id="atelier"
      className="testimonial-section"
      variants={homepageSoftStaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={homepageRevealViewport}
    >
      <motion.div className="testimonial-section__inner" variants={homepageSoftStaggerContainer}>
        <motion.div variants={homepageFadeUpSoft}>
          <Quote className="testimonial-section__quote-icon" strokeWidth={1.4} />
        </motion.div>
        <motion.blockquote className="testimonial-section__quote" variants={homepageFadeUp}>
          {homepageCopy.testimonialQuote}
        </motion.blockquote>
        <motion.div className="testimonial-section__divider" variants={homepageFadeUpSoft} />
        <motion.p className="testimonial-section__signature" variants={homepageFadeUpSoft}>
          {homepageCopy.testimonialSignature}
        </motion.p>
        <motion.p className="testimonial-section__caption" variants={homepageFadeUpSoft}>
          {homepageCopy.testimonialCaption}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
