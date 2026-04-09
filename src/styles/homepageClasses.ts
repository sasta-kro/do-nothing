export const homepageClasses = {
  pageSurface:
    "min-h-screen overflow-x-hidden bg-obsidian text-text-main selection:bg-gold-primary selection:text-obsidian [background:radial-gradient(circle_at_84%_27%,rgba(241,199,72,0.045),transparent_18%),radial-gradient(circle_at_18%_58%,rgba(255,255,255,0.02),transparent_24%)]",
  pageShell:
    "mx-auto max-w-[1440px] px-5 pb-8 pt-4 md:px-8 md:pt-5 lg:px-10 lg:pt-5",
} as const;

export const headerClasses = {
  brand:
    "font-serif text-[1rem] uppercase tracking-[0.18em] text-gold-primary",
  navWrap: "hidden items-center gap-10 md:flex",
  navLink:
    "font-ui text-[11px] uppercase tracking-[0.22em] text-text-soft transition-colors duration-300 hover:text-gold-primary",
  inquiryButton:
    "h-9 rounded-[2px] bg-gold-primary px-4 font-ui text-[0.63rem] uppercase tracking-[0.22em] text-obsidian transition-colors duration-300 hover:bg-[#f4d562]",
} as const;

export const heroClasses = {
  section:
    "mx-auto max-w-[720px] px-2 pb-10 pt-7 text-center md:max-w-[760px] md:pb-12 md:pt-8 xl:pb-13 xl:pt-9",
  title:
    "font-serif text-[2.8rem] leading-[0.92] tracking-[-0.055em] text-balance text-text-main md:text-[3.7rem] xl:text-[4.1rem]",
  description:
    "mx-auto mt-6 max-w-[35rem] text-balance text-[0.9rem] leading-6.5 text-copy-soft md:mt-7",
} as const;

export const pricingClasses = {
  section: "pb-8 md:pb-9",
  gridWrap: "mx-auto max-w-[1320px] xl:max-w-[1360px]",
  grid: "grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5",
  card:
    "relative flex min-h-[22.75rem] flex-col overflow-hidden px-4.5 pb-4 pt-3.5 md:min-h-[23.75rem] md:px-4.5 md:pb-4 md:pt-3.5 xl:min-h-[24.85rem]",
  tierLabel:
    "font-ui text-[10px] uppercase tracking-[0.34em] text-text-dim",
  title:
    "mt-2 font-serif text-[1.46rem] leading-[1.02] tracking-[-0.04em] text-gold-primary md:text-[1.52rem] md:whitespace-nowrap xl:text-[1.6rem]",
  priceRow: "mt-3 flex items-end gap-1.5",
  price:
    "font-serif text-[2.08rem] leading-none text-text-main md:text-[2.2rem] xl:text-[2.38rem]",
  billing:
    "pb-1 font-ui text-[0.68rem] uppercase tracking-[0.18em] text-text-dim",
  featureList:
    "mt-5 space-y-2.5 text-[0.78rem] leading-relaxed text-copy-body xl:text-[0.82rem]",
  featureItem: "flex items-start gap-3",
  featureCheck: "pt-0.5 text-[0.75rem] text-gold-primary",
  button:
    "mt-5 h-10 font-ui text-[0.64rem] uppercase tracking-[0.22em] transition-colors duration-300",
} as const;

export const heritageClasses = {
  section:
    "grid gap-5 pb-[5.5rem] pt-14 lg:grid-cols-[minmax(0,2fr)_minmax(18.5rem,0.86fr)] xl:gap-6 xl:pb-[6.75rem] xl:pt-16",
  featurePanel:
    "overflow-hidden border border-white/5 bg-surface-deep shadow-[0_28px_90px_rgba(0,0,0,0.26)]",
  featureVisual:
    "relative min-h-[17rem] overflow-hidden border-b border-white/5 bg-[#111111] md:min-h-[20rem] xl:min-h-[22rem]",
  featureImage: "absolute inset-0 h-full w-full object-cover",
  featureOverlay:
    "absolute inset-0 bg-[linear-gradient(180deg,rgba(15,14,14,0.08)_0%,rgba(15,14,14,0.12)_28%,rgba(15,14,14,0.34)_68%,rgba(15,14,14,0.54)_100%)]",
  featureGlow:
    "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),transparent_16%),linear-gradient(90deg,rgba(255,208,87,0.018),transparent_16%)]",
  featureContent: "px-7 pb-8 pt-7 md:px-10 md:pb-10 md:pt-8 xl:px-11 xl:pb-11",
  featureTitle:
    "font-serif text-[3.1rem] italic leading-[0.95] tracking-[-0.05em] text-gold-primary md:text-[4.35rem]",
  featureDescription:
    "mt-6 max-w-[36rem] text-[1rem] leading-[1.75] text-copy-soft md:text-[1.08rem]",
  sideGrid: "grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:gap-6",
  spotlightCard:
    "relative flex min-h-[15.5rem] flex-col justify-center border border-gold-edge/40 bg-surface-strong px-10 py-10 shadow-[0_24px_72px_rgba(0,0,0,0.22)] before:absolute before:bottom-0 before:left-0 before:top-0 before:w-px before:bg-gold-primary/75 md:px-11 md:py-11",
  spotlightIconWrap: "relative flex h-10 w-10 items-center justify-center",
  spotlightIcon: "h-7 w-7 text-gold-primary",
  spotlightAccent:
    "absolute right-[2px] top-0 h-1.5 w-1.5 rounded-full bg-gold-primary",
  spotlightTitle:
    "mt-8 font-serif text-[2.05rem] leading-[0.98] tracking-[-0.04em] text-text-main md:text-[2.2rem]",
  spotlightLabel:
    "mt-4 font-ui text-[0.8rem] uppercase tracking-[0.2em] text-text-soft md:text-[0.84rem]",
  abstractPanel:
    "relative min-h-[15rem] overflow-hidden border border-white/5 bg-surface-panel shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
  abstractImage:
    "h-full w-full object-cover brightness-[0.62] saturate-[0.9]",
  abstractOverlay:
    "absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(240,199,78,0.16),transparent_28%),linear-gradient(180deg,rgba(19,19,19,0.06)_0%,rgba(19,19,19,0.3)_100%)]",
  abstractWordmark:
    "absolute inset-x-0 bottom-[18%] text-center font-serif text-[4.65rem] uppercase tracking-[0.08em] text-gold-primary/10",
} as const;

export const testimonialClasses = {
  section: "px-3 py-[5.75rem] md:px-8 md:py-28 xl:py-32",
  inner:
    "mx-auto flex max-w-[1120px] flex-col items-center text-center",
  quoteIcon: "h-12 w-12 text-white/[0.08] md:h-16 md:w-16",
  quote:
    "mt-14 max-w-[1040px] font-serif text-[2.55rem] italic leading-[1.08] tracking-[-0.04em] text-text-main md:text-[4.2rem] xl:text-[4.55rem]",
  divider: "mt-14 h-px w-28 bg-gold-primary",
  signature:
    "mt-6 font-ui text-[1.05rem] uppercase tracking-[0.3em] text-gold-primary",
  caption:
    "mt-3 font-ui text-[0.92rem] uppercase tracking-[0.2em] text-text-dim",
} as const;

export const footerClasses = {
  shell:
    "mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10",
  brand:
    "font-serif text-[1rem] uppercase tracking-[0.18em] text-gold-primary",
  nav:
    "flex flex-wrap gap-x-8 gap-y-4 font-ui text-[0.8rem] uppercase tracking-[0.18em] text-text-soft",
  link:
    "transition-colors duration-300 hover:text-gold-primary",
  copyright:
    "font-ui text-[0.78rem] uppercase tracking-[0.12em] text-text-dim",
} as const;
