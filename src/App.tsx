import React from "react";
import { motion } from "motion/react";
import { LucideQuote, Sparkles } from "lucide-react";

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <button 
    onClick={() => console.log(`Navigating to: ${children}`)}
    className="text-text-muted hover:text-gold-primary transition-colors duration-300 text-sm tracking-[0.1em] uppercase"
  >
    {children}
  </button>
);

const PricingCard = ({ 
  tier, 
  title, 
  price, 
  features, 
  buttonText, 
  highlight = false 
}: { 
  tier: string; 
  title: string; 
  price: string; 
  features: string[]; 
  buttonText: string;
  highlight?: boolean;
}) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`flex flex-col p-8 ${highlight ? 'bg-surface-mid border-t-2 border-gold-primary' : 'bg-surface-low'} transition-all duration-500 group`}
  >
    <span className="text-[10px] tracking-[0.2em] uppercase text-gold-dark mb-2">{tier}</span>
    <h3 className="text-2xl mb-4 text-gold-primary">{title}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-3xl font-serif">${price}</span>
      <span className="text-xs text-text-muted uppercase tracking-widest">/ Forever</span>
    </div>
    
    <ul className="flex-grow space-y-4 mb-12">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-xs text-text-muted leading-relaxed">
          <span className="text-gold-primary mt-0.5">✓</span>
          {feature}
        </li>
      ))}
    </ul>

    <button 
      onClick={() => console.log(`Action: ${buttonText}`)}
      className={`w-full py-4 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
        highlight 
          ? 'gold-gradient text-obsidian font-bold' 
          : 'bg-transparent border border-white/10 text-text-muted hover:border-gold-primary hover:text-gold-primary'
      }`}
    >
      {buttonText}
    </button>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-primary selection:text-obsidian">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-obsidian/80 backdrop-blur-md">
        <div className="text-gold-primary font-serif text-xl tracking-[0.15em] uppercase">
          Do Nothing
        </div>
        <div className="hidden md:flex items-center gap-12">
          <NavItem>Heritage</NavItem>
          <NavItem>Atelier</NavItem>
          <NavItem>The Vault</NavItem>
          <button 
            onClick={() => console.log("Action: Inquire")}
            className="gold-gradient text-obsidian px-6 py-2 text-xs font-bold tracking-[0.1em] uppercase rounded-sm"
          >
            Inquire
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-4 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl mb-8 leading-tight"
        >
          The Art of <span className="gold-text-gradient">Total Inactivity</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Exclusivity is not found in what you do, but in what you refuse to achieve. 
          Welcome to the world's most expensive experience of nothingness.
        </motion.p>
      </section>

      {/* Pricing Grid */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PricingCard 
            tier="Entry Tier"
            title="Do Nothing Free"
            price="0"
            features={[
              "Complete unproductivity",
              "Standard atmosphere access",
              "Guaranteed empty interface"
            ]}
            buttonText="Accept Poverty"
          />
          <PricingCard 
            tier="Gilded Status"
            title="Do Nothing Premium"
            price="1"
            features={[
              "Includes all Free features",
              "Gilded inactivity log",
              "Synchronized breathing patterns",
              "Increased personal pride",
              "Bragging rights"
            ]}
            buttonText="Acquire Status"
          />
          <PricingCard 
            tier="Elite Choice"
            title="Do Nothing Luxury"
            price="12"
            highlight
            features={[
              "Includes all Premium features",
              "Quantum-level idleness",
              "Priority Do Not Disturb",
              "Hand-signed 'Nothing' card",
              "Advanced symbolic recognition",
              "Optional existential validation",
              "Non-contractual superiority"
            ]}
            buttonText="Ascend Now"
          />
          <PricingCard 
            tier="Ultimate Zenith"
            title="Do Nothing Infinite"
            price="99"
            features={[
              "Includes all Luxury features",
              "Cosmic non-existence",
              "Exclusion from all reality",
              "Legacy of absolute nothingness",
              "Career boost for your resume",
              "Irrefutable proof of success",
              "Certified Infinite badge",
              "Full access to nothingness",
              "The right to do nothing, forever"
            ]}
            buttonText="Become Infinite"
          />
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop" 
            alt="Minimalist Architecture" 
            className="object-cover w-full h-full grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl italic text-gold-primary">Unparalleled Absence</h2>
          <p className="text-text-muted leading-loose text-lg font-light">
            We have spent a decade refining the science of lack. Our labs in the Swiss Alps are currently 
            researching how to omit the letter 'E' from our corporate communications to further reduce effort.
          </p>
        </div>
      </section>

      {/* Feature Section 2 (Grid) */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-low p-12 flex flex-col justify-center items-center text-center space-y-6">
          <Sparkles className="text-gold-primary w-12 h-12 mb-4" />
          <h3 className="text-3xl">100% Uptime</h3>
          <p className="text-gold-dark tracking-[0.2em] uppercase text-xs">Of doing absolutely nothing</p>
        </div>
        <div className="relative aspect-square md:aspect-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Gold" 
            className="object-cover w-full h-full brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 px-8 text-center max-w-5xl mx-auto">
        <LucideQuote className="w-12 h-12 text-gold-dark mx-auto mb-12 opacity-50" />
        <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
          "I paid $99 and received nothing. It was the most honest transaction of my life. 
          I am now more absent than ever."
        </blockquote>
        <div className="space-y-2">
          <p className="text-gold-primary tracking-[0.3em] uppercase text-sm font-bold">The Earl of Void</p>
          <p className="text-text-muted text-xs tracking-widest uppercase">Founding Member Since 2014</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gold-primary font-serif tracking-[0.2em] uppercase text-sm">
            Do Nothing
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-text-muted">
            <button onClick={() => console.log("Footer: Terms")} className="hover:text-gold-primary transition-colors">Terms of Nothing</button>
            <button onClick={() => console.log("Footer: Privacy")} className="hover:text-gold-primary transition-colors">Privacy Portfolio</button>
            <button onClick={() => console.log("Footer: Ethics")} className="hover:text-gold-primary transition-colors">Ethics of Nothingness</button>
          </div>
          <div className="text-[10px] tracking-[0.1em] text-text-muted/50 uppercase">
            © MMXIV Do Nothing International. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
