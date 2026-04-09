export type NavigationItem = {
  href: string;
  label: string;
};

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

export type FooterLink = {
  href: string;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "#heritage", label: "Heritage" },
  { href: "#atelier", label: "Atelier" },
  { href: "#vault", label: "The Vault" },
];

export const pricingTiers: PricingTier[] = [
  {
    tierLabel: "Entry Tier",
    title: "Do Nothing Free",
    price: "0",
    billingLabel: "/ Forever",
    features: [
      "Complete unproductivity",
      "Standard atmosphere access",
      "Guaranteed empty interface",
    ],
    buttonLabel: "Accept Poverty",
    cardVariant: "base",
    buttonVariant: "ghost",
  },
  {
    tierLabel: "Gilded Status",
    title: "Do Nothing Premium",
    price: "1",
    billingLabel: "/ Monthly",
    features: [
      "Includes all Free features",
      "Gilded inactivity log",
      "Synchronized breathing patterns",
      "Increased personal pride",
      "Bragging rights",
    ],
    buttonLabel: "Acquire Status",
    cardVariant: "base",
    buttonVariant: "ghost",
  },
  {
    tierLabel: "Elite Choice",
    title: "Do Nothing Luxury",
    price: "12",
    billingLabel: "/ Monthly",
    features: [
      "Includes all Premium features",
      "Quantum-level idleness",
      "Priority Do Not Disturb",
      "Hand-signed 'Nothing' card",
      "Advanced symbolic recognition",
      "Optional existential validation",
      "Non-contractual superiority",
    ],
    buttonLabel: "Ascend Now",
    cardVariant: "featured",
    buttonVariant: "gold",
  },
  {
    tierLabel: "Ultimate Zenith",
    title: "Do Nothing Infinite",
    price: "99",
    billingLabel: "/ Monthly",
    features: [
      "Includes all Luxury features",
      "Cosmic non-existence",
      "Exclusion from all reality",
      "Legacy of absolute nothingness",
      "Career boost for the resume",
      "Irrefutable proof of success",
      "Certified Infinite badge",
      "Full access to nothingness",
      "The right to do nothing, forever",
    ],
    buttonLabel: "Become Infinite",
    cardVariant: "outlined",
    buttonVariant: "light",
    accentFeatureIndex: 8,
  },
];

export const homepageCopy = {
  brandName: "Do Nothing",
  heroLead: "The Art of",
  heroHighlight: "Total Inactivity",
  heroDescription:
    "Exclusivity is not found in what gets achieved, but in what remains untouched. Welcome to the world's most expensive experience of nothingness.",
  featureTitle: "Unparalleled Absence",
  featureDescription:
    'A decade of refinement shaped the science of lack. The Swiss Alps division continues research into removing the letter "E" from all corporate communications to further reduce effort.',
  spotlightTitle: "100% Uptime",
  spotlightLabel: "Of doing absolutely nothing",
  testimonialQuote:
    '"I paid $99 and received nothing. It was the most honest transaction of my life. I am now more absent than ever."',
  testimonialSignature: "The Earl of Nothingness",
  testimonialCaption: "Founding Member Since 2014",
  copyrightLabel: "© MMXIV Do Nothing International. All rights reserved.",
};

export const footerLinks: FooterLink[] = [
  { href: "#top", label: "Terms of Nothing" },
  { href: "#top", label: "Privacy Portfolio" },
  { href: "#top", label: "Ethics of Nothingness" },
];

export const homepageImages = {
  staircasePlaceholder:
    "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=1600&q=80",
  abstractGoldPlaceholder:
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
};
