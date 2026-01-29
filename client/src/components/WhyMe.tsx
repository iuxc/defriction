import { motion } from "framer-motion";
import { UserCheck, Clock, Rocket } from "lucide-react";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function WhyMe() {
  const cards = [
    {
      icon: UserCheck,
      headline: "No hand-holding required.",
      body: "Send the brief. I'll ask smart questions, then disappear into the work. You'll get a working prototype—not a deck of questions.",
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

  return (
    <section id="whyme" className="min-h-[100dvh] md:min-h-screen py-16 md:py-32 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-basalt via-transparent to-deep-basalt z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-left mb-6 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-white/10 bg-white/5 mb-3 md:mb-6 backdrop-blur-md cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
              WHY IT WORKS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 md:mb-6">
            Built for agencies who <span className="bg-gradient-to-r from-volt-lime to-green-500 bg-clip-text text-transparent">can't babysit</span>.
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={card.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-1 rounded-2xl relative overflow-hidden group flex flex-col h-full"
              style={{ "--glass-border-color": "212, 255, 0" } as React.CSSProperties}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.gradient} opacity-20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-40`} />
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-volt-lime" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                  {card.headline}
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide touch-pan-x">
          {cards.map((card, index) => (
            <div 
              key={card.headline}
              className="snap-center shrink-0 w-[90vw] max-w-[340px] glass-card p-1 rounded-2xl relative overflow-hidden flex flex-col"
              style={{ "--glass-border-color": "212, 255, 0" } as React.CSSProperties}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${card.gradient} opacity-20 rounded-full blur-3xl -mr-10 -mt-10`} />
              
              <div className="relative z-10 p-5 flex flex-col h-full min-h-[260px]">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-volt-lime" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {card.headline}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3 md:hidden">
          {cards.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
      <NextSectionArrow targetId="about" />
    </section>
  );
}
