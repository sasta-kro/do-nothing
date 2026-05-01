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
        hideChooser();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      clearRevealTimer();
    };
  }, []);

  function clearRevealTimer() {
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current);
      revealTimerRef.current = null;
    }
  }

  function scheduleReveal() {
    clearRevealTimer();
    revealTimerRef.current = window.setTimeout(() => {
      setIsChooserVisible(true);
      revealTimerRef.current = null;
    }, 220);
  }

  function hideChooser() {
    clearRevealTimer();
    setIsChooserVisible(false);
  }

  function toggleChooser() {
    clearRevealTimer();
    setIsChooserVisible((currentVisibility) => !currentVisibility);
  }

  function handleBlur(blurEvent: FocusEvent<HTMLDivElement>) {
    if (!blurEvent.currentTarget.contains(blurEvent.relatedTarget)) {
      hideChooser();
    }
  }

  function handleLanguageSelection(localeCode: "en" | "ru") {
    selectLocale(localeCode);
    hideChooser();
  }

  return (
    <div
      ref={chooserContainerRef}
      className="language-menu"
      onMouseEnter={scheduleReveal}
      onMouseLeave={hideChooser}
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
        className={`language-menu__popover${
          isChooserVisible ? " language-menu__popover--visible" : ""
        }`}
      >
        <div className="language-menu__paper">
          <div className="language-menu__ornament" aria-hidden="true">
            <span className="language-menu__ornament-line" />
            <span className="language-menu__ornament-mark" />
            <span className="language-menu__ornament-line" />
          </div>
          <p className="language-menu__title">{navigationItem.chooserTitle}</p>
          <p className="language-menu__body">{navigationItem.chooserBody}</p>
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
          <p className="language-menu__note">
            {homepageContent.homepageCopy.languageChooserAvailabilityNote}
          </p>
        </div>
      </article>
    </div>
  );
}
