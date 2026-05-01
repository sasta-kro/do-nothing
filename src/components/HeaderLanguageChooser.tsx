import {
  type FocusEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import type { NavigationLanguageItem } from "../content/homepage";
import { useHomepageLocale } from "../localization/HomepageLocaleProvider";

type HeaderLanguageChooserProps = {
  navigationItem: NavigationLanguageItem;
};

export function HeaderLanguageChooser({
  navigationItem,
}: HeaderLanguageChooserProps) {
  const chooserId = useId();
  const chooserContainerRef = useRef<HTMLDivElement | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const dismissTimerRef = useRef<number | null>(null);
  const [isChooserVisible, setIsChooserVisible] = useState(false);
  const {
    activeLocaleCode,
    homepageContent,
    languageOptions,
    selectLocale,
  } = useHomepageLocale();

  useEffect(() => {
    function handlePointerDown(pointerEvent: PointerEvent) {
      if (
        chooserContainerRef.current !== null &&
        !chooserContainerRef.current.contains(pointerEvent.target as Node)
      ) {
        hideChooserImmediately();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
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
      setIsChooserVisible(true);
      revealTimerRef.current = null;
    }, 220);
  }

  function scheduleHide() {
    clearRevealTimer();
    clearDismissTimer();
    dismissTimerRef.current = window.setTimeout(() => {
      setIsChooserVisible(false);
      dismissTimerRef.current = null;
    }, 140);
  }

  function hideChooserImmediately() {
    clearRevealTimer();
    clearDismissTimer();
    setIsChooserVisible(false);
  }

  function toggleChooser() {
    clearRevealTimer();
    clearDismissTimer();
    setIsChooserVisible((currentVisibility) => !currentVisibility);
  }

  function handleBlur(blurEvent: FocusEvent<HTMLDivElement>) {
    if (!blurEvent.currentTarget.contains(blurEvent.relatedTarget)) {
      hideChooserImmediately();
    }
  }

  function handleLanguageSelection(localeCode: "en" | "ru") {
    selectLocale(localeCode);
    hideChooserImmediately();
  }

  return (
    <div
      ref={chooserContainerRef}
      className="language-menu"
      onMouseEnter={scheduleReveal}
      onMouseLeave={scheduleHide}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className="site-header__link site-header__nav-trigger"
        aria-controls={chooserId}
        aria-expanded={isChooserVisible}
        onFocus={scheduleReveal}
        onClick={toggleChooser}
      >
        {navigationItem.label}
      </button>
      <article
        id={chooserId}
        aria-label={navigationItem.chooserTitle}
        className={`language-menu__popover${
          isChooserVisible ? " language-menu__popover--visible" : ""
        }`}
        onMouseEnter={scheduleReveal}
        onMouseLeave={scheduleHide}
      >
        <div className="language-menu__paper">
          <div className="language-menu__options">
            {languageOptions.map((languageOption) => {
              const isCurrentLanguage =
                languageOption.code === activeLocaleCode;
              const isComingSoon =
                languageOption.availability === "coming-soon";
              const optionBadgeLabel = isCurrentLanguage
                ? homepageContent.homepageCopy.languageChooserCurrentLabel
                : isComingSoon
                  ? homepageContent.homepageCopy.languageChooserComingSoonLabel
                  : null;

              return (
                <button
                  key={languageOption.code}
                  type="button"
                  className={`language-menu__option${
                    isCurrentLanguage ? " language-menu__option--current" : ""
                  }${
                    isComingSoon ? " language-menu__option--soon" : ""
                  }`}
                  disabled={isComingSoon}
                  onClick={() => {
                    if (
                      !isComingSoon &&
                      (languageOption.code === "en" || languageOption.code === "ru")
                    ) {
                      handleLanguageSelection(languageOption.code);
                    }
                  }}
                >
                  <span className="language-menu__option-copy">
                    <span className="language-menu__option-native">
                      {languageOption.nativeLabel}
                    </span>
                    <span className="language-menu__option-english">
                      {languageOption.englishLabel}
                    </span>
                  </span>
                  {optionBadgeLabel !== null ? (
                    <span className="language-menu__option-badge">
                      {optionBadgeLabel}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
          <footer className="language-menu__footer">
            <p className="language-menu__note">{navigationItem.chooserBody}</p>
          </footer>
        </div>
      </article>
    </div>
  );
}
