import { motion } from "motion/react";

import {
  homepageFadeUpSoft,
  homepageSoftStaggerContainer,
} from "../animations/homepageMotion";
import { homepageCopy, navigationItems } from "../content/homepage";
import { HeaderNoticeButton } from "./HeaderNoticeButton";

export function Header() {
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
        {navigationItems.map((navigationItem) => (
          <motion.div key={navigationItem.label} variants={homepageFadeUpSoft}>
            {navigationItem.kind === "link" ? (
              <a
                href={navigationItem.href}
                className="site-header__link"
              >
                {navigationItem.label}
              </a>
            ) : (
              <HeaderNoticeButton
                label={navigationItem.label}
                noticeTitle={navigationItem.noticeTitle}
                noticeBody={navigationItem.noticeBody}
                triggerClassName="site-header__link site-header__nav-trigger"
                popoverClassName="header-notice__popover"
              />
            )}
          </motion.div>
        ))}
        <motion.div variants={homepageFadeUpSoft}>
          <HeaderNoticeButton
            label="Inquire"
            noticeTitle={homepageCopy.inquiryNoticeTitle}
            noticeBody={homepageCopy.inquiryNoticeBody}
            triggerClassName="site-header__button site-header__trigger"
            popoverClassName="header-notice__popover header-notice__popover--cta"
          />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
