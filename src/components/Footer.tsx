import { useEffect, useId, useRef, useState } from "react";

import { footerLinks, homepageCopy } from "../content/homepage";

export function Footer() {
  const [visibleTooltipLabel, setVisibleTooltipLabel] = useState<string | null>(
    null,
  );
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

  function scheduleTooltipReveal(footerLabel: string) {
    clearHoverTimer();
    clearDismissTimer();
    hoverTimerRef.current = window.setTimeout(() => {
      setVisibleTooltipLabel(footerLabel);
      hoverTimerRef.current = null;
    }, 400);
  }

  function revealTooltip(footerLabel: string) {
    clearHoverTimer();
    clearDismissTimer();
    setVisibleTooltipLabel(footerLabel);
    dismissTimerRef.current = window.setTimeout(() => {
      setVisibleTooltipLabel((currentTooltipLabel) =>
        currentTooltipLabel === footerLabel ? null : currentTooltipLabel,
      );
      dismissTimerRef.current = null;
    }, 2600);
  }

  function hideTooltip(footerLabel: string) {
    clearHoverTimer();
    clearDismissTimer();
    setVisibleTooltipLabel((currentTooltipLabel) =>
      currentTooltipLabel === footerLabel ? null : currentTooltipLabel,
    );
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__shell">
        <p className="site-footer__brand">{homepageCopy.brandName}</p>
        <nav className="site-footer__nav">
          {footerLinks.map((footerLink) => (
            footerLink.tooltipMessage ? (
              <div
                key={footerLink.label}
                className="site-footer__item"
                onMouseEnter={() => scheduleTooltipReveal(footerLink.label)}
                onMouseLeave={() => hideTooltip(footerLink.label)}
              >
                <button
                  type="button"
                  className="site-footer__link site-footer__trigger"
                  aria-describedby={tooltipId}
                  aria-expanded={visibleTooltipLabel === footerLink.label}
                  onFocus={() => scheduleTooltipReveal(footerLink.label)}
                  onBlur={() => hideTooltip(footerLink.label)}
                  onClick={() => revealTooltip(footerLink.label)}
                >
                  {footerLink.label}
                </button>
                <span
                  id={tooltipId}
                  role="tooltip"
                  className={`site-footer__tooltip${
                    visibleTooltipLabel === footerLink.label
                      ? " site-footer__tooltip--visible"
                      : ""
                  }`}
                >
                  {footerLink.tooltipMessage}
                </span>
              </div>
            ) : (
              <a
                key={footerLink.label}
                href={footerLink.href}
                className="site-footer__link"
              >
                {footerLink.label}
              </a>
            )
          ))}
        </nav>
        <p className="site-footer__copyright">
          {homepageCopy.copyrightLabel}
        </p>
      </div>
    </footer>
  );
}
