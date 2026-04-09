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
    "grid gap-4 pb-[4.5rem] pt-10 lg:grid-cols-[minmax(0,1.95fr)_minmax(20rem,0.88fr)]",
  featurePanel:
    "relative min-h-[32rem] overflow-hidden border border-white/5 bg-surface-deep",
  featureImage: "h-full w-full object-cover grayscale",
  featureOverlay:
    "absolute inset-0 bg-[linear-gradient(180deg,rgba(15,14,14,0.24)_0%,rgba(15,14,14,0.78)_52%,rgba(15,14,14,0.98)_100%)]",
  featureGlow:
    "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%),linear-gradient(90deg,rgba(255,208,87,0.02),transparent_18%)]",
  featureContent: "absolute inset-x-0 bottom-0 p-7 md:p-10",
  featureTitle:
    "font-serif text-[3.05rem] italic leading-none tracking-[-0.04em] text-gold-primary md:text-[4.65rem]",
  featureDescription:
    "mt-6 max-w-[38rem] text-[1rem] leading-8 text-copy-soft md:text-[1.08rem]",
  sideGrid: "grid gap-4 sm:grid-cols-2 lg:grid-cols-1",
  spotlightCard:
    "flex min-h-[15.5rem] flex-col justify-center border border-gold-edge/45 bg-surface-strong px-10 py-10",
  spotlightIcon: "h-10 w-10 text-gold-primary",
  spotlightTitle:
    "mt-7 font-serif text-[2.6rem] leading-none tracking-[-0.04em] text-text-main",
  spotlightLabel:
    "mt-4 font-ui text-[0.95rem] uppercase tracking-[0.2em] text-text-soft",
  abstractPanel:
    "relative min-h-[15rem] overflow-hidden border border-white/5 bg-surface-panel",
  abstractImage:
    "h-full w-full object-cover brightness-[0.42] saturate-[0.8]",
  abstractOverlay:
    "absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(240,199,78,0.16),transparent_46%),linear-gradient(180deg,rgba(19,19,19,0.18)_0%,rgba(19,19,19,0.56)_100%)]",
} as const;

export const testimonialClasses = {
  section: "px-3 py-[4.5rem] md:px-8 md:py-24",
  inner:
    "mx-auto flex max-w-[1120px] flex-col items-center text-center",
  quoteIcon: "h-10 w-10 text-white/[0.08] md:h-14 md:w-14",
  quote:
    "mt-10 max-w-[980px] font-serif text-[2.55rem] italic leading-[1.08] tracking-[-0.04em] text-text-main md:text-[4.5rem]",
  divider: "mt-12 h-px w-28 bg-gold-primary",
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
