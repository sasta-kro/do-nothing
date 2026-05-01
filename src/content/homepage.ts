import abstractGoldImage from "../../res/donothing_goldenWaves.png";
import concreteStairsImage from "../../res/donothing_concreteStairs.png";

import { englishHomepageContent } from "./locales/en/homepage";
import { burmeseHomepageContent } from "./locales/mm/homepage";
import { russianHomepageContent } from "./locales/ru/homepage";
import type {
  FooterDocumentLink,
  FooterDocumentPopover,
  FooterLink,
  HomepageContent,
  HomepageCopy,
  HomepageLanguageCode,
  HomepageLanguageOption,
  HomepageLocaleCode,
  NavigationItem,
  NavigationLanguageItem,
  NavigationLinkItem,
  PricingTier,
} from "./homepageContentTypes";

export type {
  FooterDocumentLink,
  FooterDocumentPopover,
  FooterLink,
  HomepageContent,
  HomepageCopy,
  HomepageLanguageCode,
  HomepageLanguageOption,
  HomepageLocaleCode,
  NavigationItem,
  NavigationLanguageItem,
  NavigationLinkItem,
  PricingTier,
};

export function hasFooterDocumentPopover(
  footerLink: FooterLink,
): footerLink is FooterDocumentLink {
  return footerLink.documentPopover !== undefined;
}

export const defaultHomepageLocaleCode: HomepageLocaleCode = "en";

export const homepageLocaleContentByCode: Record<HomepageLocaleCode, HomepageContent> = {
  en: englishHomepageContent,
  mm: burmeseHomepageContent,
  ru: russianHomepageContent,
};

export const homepageLanguageOptions: HomepageLanguageOption[] = [
  {
    code: "en",
    nativeLabel: "English",
    englishLabel: "English",
    availability: "available",
  },
  {
    code: "ru",
    nativeLabel: "Русский",
    englishLabel: "Russian",
    availability: "available",
  },
  {
    code: "mm",
    nativeLabel: "မြန်မာ",
    englishLabel: "Burmese",
    availability: "available",
  },
  {
    code: "th",
    nativeLabel: "ไทย",
    englishLabel: "Thai",
    availability: "coming-soon",
  },
];

export const homepageImages = {
  staircasePlaceholder: concreteStairsImage,
  abstractGoldPlaceholder: abstractGoldImage,
};
