import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { GlassCard } from "@/components/ui/GlassCard";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

const methodsData = [
  {
    title: "Timezone Arbitrage",
    desc: "Brief me during your Australian workday. I execute while you sleep. You wake up to finished designs the next morning.",
    gradient: "from-volt-lime/20 to-transparent",
    browserVariant: "timezone" as const
  },
  {
    title: "Dual-Track Brain",
    desc: "I speak the language of the Boardroom and the Figma file. I bridge the gap between executive goals and pixel-perfect execution.",
    gradient: "from-ion-cyan/20 to-transparent",
    browserVariant: "brain" as const
  },
  {
    title: "Zero Overhead",
    desc: "W-8BEN. No Super. No Payroll. Just a clean Wise invoice.",
    gradient: "from-electric-violet/20 to-transparent",
    browserVariant: "invoice" as const
  }
];

export function Method() {
  return (
    <section id="method" className="min-h-[100dvh] md:min-h-screen py-16 md:py-32 relative overflow-hidden flex flex-col justify-center method-section">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-basalt via-transparent to-deep-basalt z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col h-full md:h-auto justify-center">
        <div className="text-left mb-6 md:mb-20">
          <SectionBadge label="02. The Method" className="mb-3 md:mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 md:mb-6">
            Built for <span className="text-gradient-lime">Velocity</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl hidden md:block">
            I don't just hand off a strategy deck and walk away. I leverage the US-Australia timezone overlap to deliver production-ready design during your off-hours, while bringing the executive wisdom to ensure it actually works.
          </p>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <MobileCarousel
          items={methodsData}
          renderItem={(method, index) => (
            <GlassCard
              key={method.title}
              gradient={method.gradient}
              compact
              className="snap-center shrink-0 w-[90vw] max-w-[340px]"
            >
              <div className="font-mono text-xs text-gray-500 mb-3">0{index + 1}</div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {method.desc}
              </p>
              <div className="mt-auto -mb-2 mx-0">
                <AbstractBrowser
                  variant={method.browserVariant}
                  className="w-full shadow-xl opacity-90 rounded-lg overflow-hidden"
                />
              </div>
            </GlassCard>
          )}
        />

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodsData.map((method, index) => (
            <GlassCard
              key={method.title}
              gradient={method.gradient}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="font-mono text-xs text-gray-500 mb-6">0{index + 1}</div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {method.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {method.desc}
              </p>
              <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <AbstractBrowser
                  variant={method.browserVariant}
                  className="w-full shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <NextSectionArrow targetId="about" />
    </section>
  );
}
