import { useId } from "react";
import { motion } from "motion/react";

import { homepageFadeUpSoft } from "../animations/homepageMotion";
import type {
  FooterDocumentPopover,
  FooterLink,
} from "../content/homepage";
import { useTimedPopover } from "../hooks/useTimedPopover";

type FooterDocumentLinkProps = {
  footerLink: FooterLink & {
    documentPopover: FooterDocumentPopover;
  };
};

export function FooterDocumentLink({
  footerLink,
}: FooterDocumentLinkProps) {
  const tooltipId = useId();
  const { documentPopover } = footerLink;
  const {
    isPopoverVisible,
    scheduleReveal,
    revealWithAutoDismiss,
    hide,
  } = useTimedPopover({
    revealDelayMs: 400,
    autoDismissDelayMs: 2600,
  });

  return (
    <motion.div
      className="site-footer__item"
      variants={homepageFadeUpSoft}
      onMouseEnter={scheduleReveal}
      onMouseLeave={hide}
    >
      <button
        type="button"
        className="site-footer__link site-footer__trigger"
        aria-describedby={tooltipId}
        aria-expanded={isPopoverVisible}
        onFocus={scheduleReveal}
        onBlur={hide}
        onClick={revealWithAutoDismiss}
      >
        {footerLink.label}
      </button>
      <article
        id={tooltipId}
        role="tooltip"
        className={`footer-document${
          isPopoverVisible ? " footer-document--visible" : ""
        }`}
      >
        <div className="footer-document__paper">
          <div className="footer-document__ornament" aria-hidden="true">
            <span className="footer-document__ornament-line" />
            <span className="footer-document__ornament-mark" />
            <span className="footer-document__ornament-line" />
          </div>
          <p className="footer-document__charter-label">
            {documentPopover.charterLabel}
          </p>
          <h3 className="footer-document__title">
            {documentPopover.documentTitle}
          </h3>
          <p className="footer-document__subtitle">
            {documentPopover.documentSubtitle}
          </p>
          <div className="footer-document__body">
            {documentPopover.bodyLines.map((bodyLine) => (
              <p key={bodyLine} className="footer-document__body-line">
                {bodyLine}
              </p>
            ))}
          </div>
          <div className="footer-document__ornament" aria-hidden="true">
            <span className="footer-document__ornament-line" />
            <span className="footer-document__ornament-mark" />
            <span className="footer-document__ornament-line" />
          </div>
          <p className="footer-document__seal-label">
            {documentPopover.sealLabel}
          </p>
        </div>
      </article>
    </motion.div>
  );
}
