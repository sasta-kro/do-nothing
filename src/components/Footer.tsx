import { motion } from "motion/react";

import {
  homepageFadeUpSoft,
  homepageSoftStaggerContainer,
  homepageViewportRevealMotionProps,
} from "../animations/homepageMotion";
import {
  hasFooterDocumentPopover,
} from "../content/homepage";
import { useHomepageLocale } from "../localization/HomepageLocaleProvider";
import { FooterDocumentLink } from "./FooterDocumentLink";

export function Footer() {
  const { homepageContent } = useHomepageLocale();
  const { footerLinks, homepageCopy } = homepageContent;

  return (
    <motion.footer
      className="site-footer"
      variants={homepageSoftStaggerContainer}
      {...homepageViewportRevealMotionProps}
    >
      <motion.div className="site-footer__shell" variants={homepageSoftStaggerContainer}>
        <motion.p className="site-footer__brand" variants={homepageFadeUpSoft}>
          {homepageCopy.brandName}
        </motion.p>
        <motion.nav className="site-footer__nav" variants={homepageSoftStaggerContainer}>
          {footerLinks.map((footerLink) => (
            hasFooterDocumentPopover(footerLink) ? (
              <FooterDocumentLink
                key={footerLink.label}
                footerLink={footerLink}
              />
            ) : (
              <motion.a
                key={footerLink.label}
                href={footerLink.href}
                className="site-footer__link"
                variants={homepageFadeUpSoft}
              >
                {footerLink.label}
              </motion.a>
            )
          ))}
        </motion.nav>
        <motion.p className="site-footer__copyright" variants={homepageFadeUpSoft}>
          {homepageCopy.copyrightLabel}
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
