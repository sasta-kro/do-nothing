import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  defaultHomepageLocaleCode,
  homepageLanguageOptions,
  homepageLocaleContentByCode,
  type HomepageContent,
  type HomepageLanguageOption,
  type HomepageLocaleCode,
} from "../content/homepage";

type HomepageLocaleContextValue = {
  activeLocaleCode: HomepageLocaleCode;
  homepageContent: HomepageContent;
  languageOptions: HomepageLanguageOption[];
  selectLocale: (localeCode: HomepageLocaleCode) => void;
};

const homepageLocaleStorageKey = "donothing-homepage-locale";

const HomepageLocaleContext = createContext<HomepageLocaleContextValue | null>(
  null,
);

type HomepageLocaleProviderProps = {
  children: ReactNode;
};

export function HomepageLocaleProvider({
  children,
}: HomepageLocaleProviderProps) {
  const [activeLocaleCode, setActiveLocaleCode] = useState<HomepageLocaleCode>(
    () => {
      if (typeof window === "undefined") {
        return defaultHomepageLocaleCode;
      }

      const storedLocaleCode = window.localStorage.getItem(
        homepageLocaleStorageKey,
      );

      return storedLocaleCode === "ru" || storedLocaleCode === "mm"
        ? storedLocaleCode
        : defaultHomepageLocaleCode;
    },
  );

  useEffect(() => {
    document.documentElement.lang = activeLocaleCode;
    window.localStorage.setItem(homepageLocaleStorageKey, activeLocaleCode);
  }, [activeLocaleCode]);

  const homepageContent = homepageLocaleContentByCode[activeLocaleCode];

  const homepageLocaleContextValue = useMemo(
    () => ({
      activeLocaleCode,
      homepageContent,
      languageOptions: homepageLanguageOptions,
      selectLocale: setActiveLocaleCode,
    }),
    [activeLocaleCode, homepageContent],
  );

  return (
    <HomepageLocaleContext.Provider value={homepageLocaleContextValue}>
      {children}
    </HomepageLocaleContext.Provider>
  );
}

export function useHomepageLocale() {
  const homepageLocaleContext = useContext(HomepageLocaleContext);

  if (homepageLocaleContext === null) {
    throw new Error(
      "useHomepageLocale must be used within HomepageLocaleProvider.",
    );
  }

  return homepageLocaleContext;
}
