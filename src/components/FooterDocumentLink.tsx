import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";

import { homepageFadeUpSoft } from "../animations/homepageMotion";
import type { FooterLink } from "../content/homepage";

type FooterDocumentLinkProps = {
  footerLink: FooterLink;
};

export function FooterDocumentLink({
  footerLink,
}: FooterDocumentLinkProps) {
  const [isDocumentVisible, setIsDocumentVisible] = useState(false);
  const tooltipId = useId();
  const hoverTimerRef = useRef<number | null>(null);
  const dismissTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current !== null) {
        window.clearTimeout(hoverTimerRef.current);
      }

      if (dismissTimerRef.current !== null) {
        window.clearTimeout(dismissTimerRef.current);
      }
    };
  }, []);

  if (!footerLink.documentPopover) {
    return null;
  }

  function clearHoverTimer() {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }

  function clearDismissTimer() {
    if (dismissTimerRef.current !== null) {
      window.clearTimeout(dismissTimerRef.current);
      dismissTimerRef.current = null;
    }
  }

  function scheduleDocumentReveal() {
    clearHoverTimer();
    clearDismissTimer();
    hoverTimerRef.current = window.setTimeout(() => {
      setIsDocumentVisible(true);
      hoverTimerRef.current = null;
    }, 400);
  }

  function revealDocument() {
    clearHoverTimer();
    clearDismissTimer();
    setIsDocumentVisible(true);
    dismissTimerRef.current = window.setTimeout(() => {
      setIsDocumentVisible(false);
      dismissTimerRef.current = null;
    }, 2600);
  }

  function hideDocument() {
    clearHoverTimer();
    clearDismissTimer();
    setIsDocumentVisible(false);
  }

  return (
    <motion.div
      className="site-footer__item"
      variants={homepageFadeUpSoft}
      onMouseEnter={scheduleDocumentReveal}
      onMouseLeave={hideDocument}
    >
      <button
        type="button"
        className="site-footer__link site-footer__trigger"
        aria-describedby={tooltipId}
        aria-expanded={isDocumentVisible}
        onFocus={scheduleDocumentReveal}
        onBlur={hideDocument}
        onClick={revealDocument}
      >
        {footerLink.label}
      </button>
      <article
        id={tooltipId}
        role="tooltip"
        className={`footer-document${
          isDocumentVisible ? " footer-document--visible" : ""
        }`}
      >
        <div className="footer-document__paper">
          <div className="footer-document__ornament" aria-hidden="true">
            <span className="footer-document__ornament-line" />
            <span className="footer-document__ornament-mark" />
            <span className="footer-document__ornament-line" />
          </div>
          <p className="footer-document__charter-label">
            {footerLink.documentPopover.charterLabel}
          </p>
          <h3 className="footer-document__title">
            {footerLink.documentPopover.documentTitle}
          </h3>
          <p className="footer-document__subtitle">
            {footerLink.documentPopover.documentSubtitle}
          </p>
          <div className="footer-document__body">
            {footerLink.documentPopover.bodyLines.map((bodyLine) => (
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
            {footerLink.documentPopover.sealLabel}
          </p>
        </div>
      </article>
    </motion.div>
  );
}
