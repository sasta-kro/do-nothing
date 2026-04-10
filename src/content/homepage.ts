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
  heroHighlight: "Doing Nothing",
  heroDescriptionLine1:
    "Welcome to the world's most luxurious experience of nothingness.",
  heroDescriptionLine2:
    "No one delivers perfected nothingness with greater precision.",
  featureTitle: "Unparalleled Absence",
  featureDescription:
    'A decade of refinement shaped the science of nothingness. Our research teams, from Mount Mariana to Everest Trench division continue research into removing the letter "e" from all corporate communications to further reduce effort. Scheduled to announce on February 31st.',
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
    "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 980'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%231d1d1d'/%3E%3Cstop offset='58%25' stop-color='%23101010'/%3E%3Cstop offset='100%25' stop-color='%230b0b0b'/%3E%3C/linearGradient%3E%3ClinearGradient id='beam' x1='0.5' y1='0' x2='0.5' y2='1'%3E%3Cstop offset='0%25' stop-color='rgba(255,255,255,0.9)'/%3E%3Cstop offset='18%25' stop-color='rgba(255,255,255,0.28)'/%3E%3Cstop offset='100%25' stop-color='rgba(255,255,255,0)'/%3E%3C/linearGradient%3E%3ClinearGradient id='step' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23363636'/%3E%3Cstop offset='100%25' stop-color='%23111111'/%3E%3C/linearGradient%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='1600' height='980' fill='url(%23bg)'/%3E%3Cpolygon points='930,0 1180,0 910,980 710,980' fill='url(%23beam)' filter='url(%23blur)' opacity='0.8'/%3E%3Crect x='0' y='78' width='640' height='86' fill='%231b1b1b' opacity='0.78'/%3E%3Cg fill='url(%23step)' opacity='0.95'%3E%3Cpolygon points='30,812 905,812 1190,915 0,915'/%3E%3Cpolygon points='150,646 845,646 1065,730 54,730'/%3E%3Cpolygon points='298,510 770,510 935,574 205,574'/%3E%3Cpolygon points='438,398 705,398 827,447 352,447'/%3E%3Cpolygon points='594,296 664,296 742,329 528,329'/%3E%3C/g%3E%3C/svg%3E",
  abstractGoldPlaceholder:
    "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23121110'/%3E%3Cstop offset='45%25' stop-color='%231d1713'/%3E%3Cstop offset='100%25' stop-color='%230d0d0d'/%3E%3C/linearGradient%3E%3ClinearGradient id='goldA' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0%25' stop-color='rgba(0,0,0,0)'/%3E%3Cstop offset='30%25' stop-color='rgba(178,123,48,0.55)'/%3E%3Cstop offset='52%25' stop-color='rgba(248,217,133,0.26)'/%3E%3Cstop offset='72%25' stop-color='rgba(0,0,0,0)'/%3E%3C/linearGradient%3E%3ClinearGradient id='goldB' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0%25' stop-color='rgba(0,0,0,0)'/%3E%3Cstop offset='34%25' stop-color='rgba(118,75,28,0.46)'/%3E%3Cstop offset='54%25' stop-color='rgba(255,222,149,0.22)'/%3E%3Cstop offset='76%25' stop-color='rgba(0,0,0,0)'/%3E%3C/linearGradient%3E%3Cfilter id='soft'%3E%3CfeGaussianBlur stdDeviation='3'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='900' height='900' fill='url(%23bg)'/%3E%3Cg filter='url(%23soft)'%3E%3Crect x='-180' y='110' width='1320' height='70' rx='35' fill='url(%23goldA)' transform='rotate(17 450 450)'/%3E%3Crect x='-120' y='250' width='1260' height='62' rx='31' fill='url(%23goldB)' transform='rotate(17 450 450)'/%3E%3Crect x='-220' y='395' width='1320' height='68' rx='34' fill='url(%23goldA)' transform='rotate(17 450 450)'/%3E%3Crect x='-140' y='548' width='1240' height='60' rx='30' fill='url(%23goldB)' transform='rotate(17 450 450)'/%3E%3Crect x='-200' y='675' width='1320' height='72' rx='36' fill='url(%23goldA)' transform='rotate(17 450 450)'/%3E%3C/g%3E%3C/svg%3E",
};
