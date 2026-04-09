import { motion } from "motion/react";
import { Quote, Sparkles } from "lucide-react";

type NavigationItem = {
  href: string;
  label: string;
};

type PricingTier = {
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

const navigationItems: NavigationItem[] = [
  { href: "#heritage", label: "Heritage" },
  { href: "#atelier", label: "Atelier" },
  { href: "#vault", label: "The Vault" },
];

const pricingTiers: PricingTier[] = [
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

const staircasePlaceholderImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=1600&q=80";

const abstractGoldPlaceholderImage =
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80";

function renderNavigationLink({ href, label }: NavigationItem) {
  return (
    <a
      href={href}
      className="font-ui text-[11px] uppercase tracking-[0.22em] text-text-soft transition-colors duration-300 hover:text-gold-primary"
    >
      {label}
    </a>
  );
}

function renderPricingTierCard(
  {
    tierLabel,
    title,
    price,
    billingLabel,
    features,
    buttonLabel,
    cardVariant,
    buttonVariant,
    accentFeatureIndex,
  }: PricingTier,
  key: string,
) {
  const cardClassName =
    cardVariant === "featured"
      ? "border border-gold-edge/30 bg-surface-strong shadow-[0_26px_80px_rgba(0,0,0,0.38)] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gold-primary"
      : cardVariant === "outlined"
        ? "border border-gold-edge/45 bg-surface-panel shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
        : "border border-white/4 bg-surface-panel";

  const buttonClassName =
    buttonVariant === "gold"
      ? "bg-gold-primary text-obsidian hover:bg-[#f4d562]"
      : buttonVariant === "light"
        ? "bg-[#efedeb] text-obsidian hover:bg-white"
        : "border border-white/8 bg-transparent text-text-main hover:border-gold-edge/40 hover:text-gold-primary";

  return (
    <motion.article
      key={key}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex min-h-[24.5rem] flex-col overflow-hidden px-5 pb-4 pt-4 md:min-h-[25.5rem] md:px-5 md:pb-4 md:pt-4 xl:min-h-[26.75rem] ${cardClassName}`}
    >
      <div className="flex flex-1 flex-col">
        <p className="font-ui text-[10px] uppercase tracking-[0.34em] text-text-dim">
          {tierLabel}
        </p>
        <h3 className="mt-2.5 font-serif text-[1.56rem] leading-[1.03] tracking-[-0.04em] text-gold-primary md:text-[1.64rem] md:whitespace-nowrap xl:text-[1.72rem]">
          {title}
        </h3>
        <div className="mt-3.5 flex items-end gap-1.5">
          <span className="font-serif text-[2.35rem] leading-none text-text-main md:text-[2.5rem] xl:text-[2.7rem]">
            ${price}
          </span>
          <span className="pb-1 font-ui text-[0.74rem] uppercase tracking-[0.2em] text-text-dim">
            {billingLabel}
          </span>
        </div>
        <ul className="mt-6 space-y-2.5 text-[0.85rem] leading-relaxed text-copy-body xl:text-[0.89rem]">
          {features.map((feature, featureIndex) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="pt-0.5 text-[0.82rem] text-gold-primary">✓</span>
              <span
                className={
                  accentFeatureIndex === featureIndex
                    ? "text-gold-primary"
                    : undefined
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className={`mt-6 h-11 font-ui text-[0.69rem] uppercase tracking-[0.24em] transition-colors duration-300 ${buttonClassName}`}
      >
        {buttonLabel}
      </button>
    </motion.article>
  );
}

export default function App() {
  return (
    <main className="page-shell min-h-screen overflow-x-hidden bg-obsidian text-text-main selection:bg-gold-primary selection:text-obsidian">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-4 md:px-8 md:pt-5 lg:px-10 lg:pt-5">
        <header className="flex items-center justify-between">
          <a
            href="#top"
            className="font-serif text-[1rem] uppercase tracking-[0.18em] text-gold-primary"
          >
            Do Nothing
          </a>
          <div className="hidden items-center gap-10 md:flex">
            {navigationItems.map((navigationItem) => (
              <span key={navigationItem.label}>
                {renderNavigationLink(navigationItem)}
              </span>
            ))}
            <button
              type="button"
              className="h-9 rounded-[2px] bg-gold-primary px-4 font-ui text-[0.63rem] uppercase tracking-[0.22em] text-obsidian transition-colors duration-300 hover:bg-[#f4d562]"
            >
              Inquire
            </button>
          </div>
        </header>

        <section
          id="top"
          className="mx-auto max-w-[760px] px-2 pb-8 pt-8 text-center md:max-w-[820px] md:pb-9 md:pt-9 xl:pb-10 xl:pt-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.95rem] leading-[0.92] tracking-[-0.055em] text-balance text-text-main md:text-[4rem] xl:text-[4.45rem]"
          >
            <span className="text-gold-primary">The Art of</span>
            <br />
            <span className="text-text-main">Total Inactivity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.75 }}
            className="mx-auto mt-5 max-w-[38rem] text-balance text-[0.96rem] leading-7 text-copy-soft md:mt-5.5"
          >
            Exclusivity is not found in what gets achieved, but in what remains
            untouched. Welcome to the world&apos;s most expensive experience of
            nothingness.
          </motion.p>
        </section>

        <section id="vault" className="pb-9 md:pb-10">
          <div className="mx-auto max-w-[1340px]">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {pricingTiers.map((pricingTier) =>
              renderPricingTierCard(pricingTier, pricingTier.title),
            )}
            </div>
          </div>
        </section>

        <section
          id="heritage"
          className="grid gap-4 pb-[4.5rem] pt-10 lg:grid-cols-[minmax(0,1.95fr)_minmax(20rem,0.88fr)]"
        >
          <article className="feature-panel relative min-h-[32rem] overflow-hidden border border-white/5 bg-surface-deep">
            <img
              src={staircasePlaceholderImage}
              alt="Placeholder staircase scene"
              className="h-full w-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,14,14,0.24)_0%,rgba(15,14,14,0.78)_52%,rgba(15,14,14,0.98)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <h2 className="font-serif text-[3.05rem] italic leading-none tracking-[-0.04em] text-gold-primary md:text-[4.65rem]">
                Unparalleled Absence
              </h2>
              <p className="mt-6 max-w-[38rem] text-[1rem] leading-8 text-copy-soft md:text-[1.08rem]">
                A decade of refinement shaped the science of lack. The Swiss
                Alps division continues research into removing the letter
                &quot;E&quot; from all corporate communications to further reduce
                effort.
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="flex min-h-[15.5rem] flex-col justify-center border border-gold-edge/45 bg-surface-strong px-10 py-10">
              <Sparkles className="h-10 w-10 text-gold-primary" strokeWidth={1.6} />
              <h3 className="mt-7 font-serif text-[2.6rem] leading-none tracking-[-0.04em] text-text-main">
                100% Uptime
              </h3>
              <p className="mt-4 font-ui text-[0.95rem] uppercase tracking-[0.2em] text-text-soft">
                Of doing absolutely nothing
              </p>
            </article>

            <article className="relative min-h-[15rem] overflow-hidden border border-white/5 bg-surface-panel">
              <img
                src={abstractGoldPlaceholderImage}
                alt="Placeholder abstract gold texture"
                className="h-full w-full object-cover brightness-[0.42] saturate-[0.8]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(240,199,78,0.16),transparent_46%),linear-gradient(180deg,rgba(19,19,19,0.18)_0%,rgba(19,19,19,0.56)_100%)]" />
            </article>
          </div>
        </section>

        <section id="atelier" className="px-3 py-[4.5rem] md:px-8 md:py-24">
          <div className="mx-auto flex max-w-[1120px] flex-col items-center text-center">
            <Quote className="h-10 w-10 text-white/[0.08] md:h-14 md:w-14" strokeWidth={1.4} />
            <blockquote className="mt-10 max-w-[980px] font-serif text-[2.55rem] italic leading-[1.08] tracking-[-0.04em] text-text-main md:text-[4.5rem]">
              &quot;I paid $99 and received nothing. It was the most honest
              transaction of my life. I am now more absent than ever.&quot;
            </blockquote>
            <div className="mt-12 h-px w-28 bg-gold-primary" />
            <p className="mt-6 font-ui text-[1.05rem] uppercase tracking-[0.3em] text-gold-primary">
              The Earl of Nothingness
            </p>
            <p className="mt-3 font-ui text-[0.92rem] uppercase tracking-[0.2em] text-text-dim">
              Founding Member Since 2014
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="font-serif text-[1rem] uppercase tracking-[0.18em] text-gold-primary">
            Do Nothing
          </p>
          <nav className="flex flex-wrap gap-x-8 gap-y-4 font-ui text-[0.8rem] uppercase tracking-[0.18em] text-text-soft">
            <a href="#top" className="transition-colors duration-300 hover:text-gold-primary">
              Terms of Nothing
            </a>
            <a href="#top" className="transition-colors duration-300 hover:text-gold-primary">
              Privacy Portfolio
            </a>
            <a href="#top" className="transition-colors duration-300 hover:text-gold-primary">
              Ethics of Nothingness
            </a>
          </nav>
          <p className="font-ui text-[0.78rem] uppercase tracking-[0.12em] text-text-dim">
            © MMXIV Do Nothing International. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
