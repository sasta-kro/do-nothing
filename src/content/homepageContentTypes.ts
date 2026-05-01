export type NavigationLinkItem = {
  kind: "link";
  href: string;
  label: string;
};

export type NavigationLanguageItem = {
  kind: "language";
  label: string;
  chooserTitle: string;
  chooserBody: string;
};

export type NavigationItem = NavigationLinkItem | NavigationLanguageItem;

export type PricingTier = {
  tierLabel: string;
  title: string;
  price: string;
  billingLabel: string;
  features: string[];
  buttonLabel: string;
  cardVariant: "base" | "featured" | "outlined";
  buttonVariant: "ghost" | "gold" | "light";
  accentFeatureIndex?: number;
};

export type FooterDocumentPopover = {
  charterLabel: string;
  documentTitle: string;
  documentSubtitle: string;
  bodyLines: string[];
  sealLabel: string;
};

export type FooterLink = {
  href: string;
  label: string;
  documentPopover?: FooterDocumentPopover;
};

export type FooterDocumentLink = FooterLink & {
  documentPopover: FooterDocumentPopover;
};

export type HomepageCopy = {
  brandName: string;
  heroTitleTop: string;
  heroTitleBottom: string;
  heroDescriptionLine1: string;
  heroDescriptionLine2: string;
  featureTitle: string;
  featureDescription: string;
  spotlightTitle: string;
  spotlightLabel: string;
  abstractWordmark: string;
  inquiryButtonLabel: string;
  inquiryNoticeTitle: string;
  inquiryNoticeBody: string;
  languageChooserCurrentLabel: string;
  languageChooserComingSoonLabel: string;
  testimonialQuote: string;
  testimonialSignature: string;
  testimonialCaption: string;
  copyrightLabel: string;
};

export type HomepageContent = {
  navigationItems: NavigationItem[];
  pricingTiers: PricingTier[];
  homepageCopy: HomepageCopy;
  footerLinks: FooterLink[];
};

export type HomepageLocaleCode = "en" | "ru" | "mm";

export type HomepageLanguageCode = HomepageLocaleCode | "th";

export type HomepageLanguageOption = {
  code: HomepageLanguageCode;
  nativeLabel: string;
  englishLabel: string;
  availability: "available" | "coming-soon";
};

export type HomepageLocaleTypographyProfile = "tracked" | "natural";
