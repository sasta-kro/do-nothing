import { motion } from "motion/react";

import {
  homepageFadeUpSoft,
  homepageSoftStaggerContainer,
} from "../animations/homepageMotion";
import { useHomepageLocale } from "../localization/HomepageLocaleProvider";
import { HeaderLanguageChooser } from "./HeaderLanguageChooser";
import { HeaderNoticeButton } from "./HeaderNoticeButton";

export function Header() {
  const { homepageContent } = useHomepageLocale();
  const { homepageCopy, navigationItems } = homepageContent;

  return (
    <motion.header
      className="site-header"
      variants={homepageSoftStaggerContainer}
    >
      <motion.a
        href="#top"
        className="site-header__brand"
        variants={homepageFadeUpSoft}
      >
        {homepageCopy.brandName}
      </motion.a>
      <motion.div className="site-header__nav" variants={homepageSoftStaggerContainer}>
        {navigationItems.map((navigationItem, navigationItemIndex) => (
          <motion.div
            key={`navigation-item-${navigationItemIndex}`}
            variants={homepageFadeUpSoft}
          >
            {navigationItem.kind === "link" ? (
              <a
                href={navigationItem.href}
                className="site-header__link"
              >
                {navigationItem.label}
              </a>
            ) : (
              <HeaderLanguageChooser navigationItem={navigationItem} />
            )}
          </motion.div>
        ))}
        <motion.div variants={homepageFadeUpSoft}>
          <HeaderNoticeButton
            label={homepageCopy.inquiryButtonLabel}
            noticeTitle={homepageCopy.inquiryNoticeTitle}
            noticeBody={homepageCopy.inquiryNoticeBody}
            triggerClassName="site-header__button site-header__trigger"
            popoverClassName="header-notice__popover header-notice__popover--cta"
            popoverVisibleClassName="header-notice__popover--visible"
          />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
