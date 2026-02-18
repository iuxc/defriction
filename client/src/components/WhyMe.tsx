import { motion } from "framer-motion";
import { UserCheck, Clock, Rocket } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { GlassCard } from "@/components/ui/GlassCard";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { IconBox } from "@/components/ui/IconBox";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

const cards = [
  {
    icon: UserCheck,
    headline: "No hand-holding required.",
    body: "Send the brief. I'll ask smart questions, then disappear into the work. You'll get a working prototype\u2014not a deck of questions.",
    gradient: "from-volt-lime/20 to-transparent"
  },
  {
    icon: Clock,
    headline: "Your overnight is my workday.",
    body: "Brief me at end of day. Wake up to progress. The 15-hour timezone gap means you get design work done while your team sleeps.",
    gradient: "from-ion-cyan/20 to-transparent"
  },
  {
    icon: Rocket,
    headline: "I know what actually gets built.",
    body: "20 years in enterprise, government, and higher ed taught me what survives the stakeholder gauntlet. I design for sign-off, not just aesthetics. And I know what's feasible for your dev team.",
    gradient: "from-electric-violet/20 to-transparent"
  }
];

export function WhyMe() {
  return (
    <section id="whyme" className="min-h-[100dvh] md:min-h-screen py-16 md:py-32 relative overflow-hidden flex flex-col justify-center bg-deep-basalt">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.2),rgba(0,0,0,0),rgba(0,0,0,0.2))]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-left mb-6 md:mb-16">
          <SectionBadge label="APPROACH" className="mb-3 md:mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 md:mb-6">
            Built for agencies who <span className="text-gradient-lime">can't babysit</span>.
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <GlassCard
              key={card.headline}
              gradient={card.gradient}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <IconBox icon={card.icon} className="mb-6" />
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                {card.headline}
              </h3>
              <p className="text-gray-400 leading-relaxed flex-grow">
                {card.body}
              </p>
            </GlassCard>
          ))}
        </div>

        <MobileCarousel
          items={cards}
          renderItem={(card) => (
            <GlassCard
              key={card.headline}
              gradient={card.gradient}
              compact
              className="snap-center shrink-0 w-[90vw] max-w-[340px]"
            >
              <IconBox icon={card.icon} size="sm" className="mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-2">
                {card.headline}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {card.body}
              </p>
            </GlassCard>
          )}
        />
      </div>
      <NextSectionArrow targetId="about" />
    </section>
  );
}
