import { useEffect, useRef, useState } from "react";

type TimedPopoverOptions = {
  revealDelayMs: number;
  autoDismissDelayMs: number;
};

export function useTimedPopover({
  revealDelayMs,
  autoDismissDelayMs,
}: TimedPopoverOptions) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const revealTimerRef = useRef<number | null>(null);
  const dismissTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      clearRevealTimer();
      clearDismissTimer();
    };
  }, []);

  function clearRevealTimer() {
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current);
      revealTimerRef.current = null;
    }
  }

  function clearDismissTimer() {
    if (dismissTimerRef.current !== null) {
      window.clearTimeout(dismissTimerRef.current);
      dismissTimerRef.current = null;
    }
  }

  function scheduleReveal() {
    clearRevealTimer();
    clearDismissTimer();
    revealTimerRef.current = window.setTimeout(() => {
      setIsPopoverVisible(true);
      revealTimerRef.current = null;
    }, revealDelayMs);
  }

  function revealWithAutoDismiss() {
    clearRevealTimer();
    clearDismissTimer();
    setIsPopoverVisible(true);
    dismissTimerRef.current = window.setTimeout(() => {
      setIsPopoverVisible(false);
      dismissTimerRef.current = null;
    }, autoDismissDelayMs);
  }

  function hide() {
    clearRevealTimer();
    clearDismissTimer();
    setIsPopoverVisible(false);
  }

  return {
    isPopoverVisible,
    scheduleReveal,
    revealWithAutoDismiss,
    hide,
  };
}
