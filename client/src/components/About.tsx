import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BioModal } from "./BioModal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function About() {
  const [bioOpen, setBioOpen] = useState(false);

  const floatingBadges = [
    { text: "20+ Years Exp", pos: "-top-6 -right-6", delay: 0 },
    { text: "Multi-lingual", pos: "-top-4 -left-4", delay: 2 },
    { text: "Flutist", pos: "top-1/2 -left-10", delay: 4 },
    { text: "Cyclist", pos: "-bottom-6 -left-6", delay: 1 },
    { text: "Dog Lover", pos: "-bottom-2 -right-2", delay: 3 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % floatingBadges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [floatingBadges.length]);

  const statCards = [
    { label: "Based in", value: "Eugene, OR", valueLong: "Eugene, OR (PST)" },
    { label: "Experience", value: "20+ Years", valueLong: "20+ Years" },
    { label: "Day job", value: "AVP, Digital Strategy", valueLong: "AVP, Digital Strategy" }
  ];

  return (
    <section id="about" className="min-h-[100dvh] md:min-h-screen py-16 md:py-32 bg-deep-basalt relative border-y border-white/5 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 h-full md:h-auto flex flex-col justify-center">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col h-full justify-center gap-4">
          <div className="relative w-32 h-32 mx-auto shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime via-ion-cyan to-electric-violet rounded-2xl opacity-20 blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl bg-deep-basalt/80 backdrop-blur-xl overflow-hidden p-1">
              <img src="/TheHuman.jpg" alt="The Human" className="w-full h-full object-cover rounded-xl grayscale" />
            </div>
          </div>

          <div className="text-center">
            <SectionBadge label="ABOUT" className="mb-3" />
            <h2 className="text-2xl font-display font-bold mb-3 leading-tight text-white">
              The Executive Who <span className="text-gradient-pink">Designs</span>.
            </h2>

            <p className="text-sm text-gray-400 font-light leading-relaxed mb-4 px-2">
              I'm Brian. By day, I lead Digital Strategy for the University of Oregon—web governance, UX, content, the works. <span className="lowercase font-bold text-white">defriction</span> is where I get back to the craft.
            </p>

            {/* Mini Cards - Horizontal scroll on mobile */}
            <div className="flex gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-3 -mx-4 px-4 scrollbar-hide touch-pan-x mb-4">
              {statCards.map((stat) => (
                <div key={stat.label} className="snap-center shrink-0 bg-white/5 border border-white/5 p-3 rounded-xl backdrop-blur-sm min-w-[120px]">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">{stat.label}</span>
                  <span className="block text-white text-sm font-medium">{stat.value}</span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="text-purple-400 border-purple-400/20 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-white hover:border-transparent group rounded-full font-medium text-sm px-5 py-3 h-auto"
              onClick={() => setBioOpen(true)}
            >
              View Full Profile <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <SectionBadge label="ABOUT" className="mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
              The Executive Who <span className="text-gradient-pink">Designs</span>.
            </h2>

            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-10">
              <p>I'm Brian. By day, I lead Digital Strategy for the University of Oregon—web governance, UX, content, the works.</p>
              <p><span className="lowercase font-bold text-white">defriction</span> is where I get back to the craft: solving high-stakes design problems with the perspective of someone who's sat in the rooms where work gets approved or killed.</p>
            </div>

            {/* Mini Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {statCards.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{stat.label}</span>
                  <span className="block text-white font-medium">{stat.valueLong}</span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="text-purple-400 border-purple-400/20 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-white hover:border-transparent hover:bg-origin-border group rounded-full font-medium text-base px-6 py-4 h-auto"
              onClick={() => setBioOpen(true)}
            >
              View Full Profile <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-md w-full mx-auto group lg:ml-auto lg:mr-24">
              <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime via-ion-cyan to-electric-violet rounded-3xl opacity-20 blur-2xl rotate-6 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl bg-deep-basalt/80 backdrop-blur-xl overflow-hidden p-2">
                <img src="/TheHuman.jpg" alt="The Human" className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>

              {/* Floating Badges */}
              <AnimatePresence>
                {floatingBadges.map((badge, i) => {
                  const isVisible = i === activeIndex || i === (activeIndex + 1) % floatingBadges.length;
                  return isVisible && (
                    <motion.div
                      key={badge.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute ${badge.pos} glass-panel px-4 py-2 rounded-md text-sm font-mono text-ion-cyan border-ion-cyan/30`}
                    >
                      {badge.text}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <NextSectionArrow targetId="contact" />
      <BioModal open={bioOpen} onOpenChange={setBioOpen} />
    </section>
  );
}
