import { useId } from "react";

import { useTimedPopover } from "../hooks/useTimedPopover";

type HeaderNoticeButtonProps = {
  label: string;
  noticeTitle: string;
  noticeBody: string;
  triggerClassName: string;
  popoverClassName: string;
  popoverVisibleClassName: string;
};

export function HeaderNoticeButton({
  label,
  noticeTitle,
  noticeBody,
  triggerClassName,
  popoverClassName,
  popoverVisibleClassName,
}: HeaderNoticeButtonProps) {
  const tooltipId = useId();
  const {
    isPopoverVisible,
    scheduleReveal,
    revealWithAutoDismiss,
    hide,
  } = useTimedPopover({
    revealDelayMs: 260,
    autoDismissDelayMs: 2400,
  });

  return (
    <div
      className="header-notice"
      onMouseEnter={scheduleReveal}
      onMouseLeave={hide}
    >
      <button
        type="button"
        className={triggerClassName}
        aria-describedby={tooltipId}
        aria-expanded={isPopoverVisible}
        onFocus={scheduleReveal}
        onBlur={hide}
        onClick={revealWithAutoDismiss}
      >
        {label}
      </button>
      <article
        id={tooltipId}
        role="tooltip"
        className={`${popoverClassName}${
          isPopoverVisible ? ` ${popoverVisibleClassName}` : ""
        }`}
      >
        <p className="header-notice__title">{noticeTitle}</p>
        <p className="header-notice__body">{noticeBody}</p>
      </article>
    </div>
  );
}
