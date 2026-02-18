import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

const stats = [
  { value: "20+ years", label: "experience" },
  { value: "Prototypes, not PDFs", label: "deliverables" },
  { value: "2-3 partners", label: "at a time" },
  { value: "Booking for March", label: "availability" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-[100dvh] md:min-h-screen flex flex-col overflow-hidden pt-16 md:pt-20 mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/20 rounded-full blur-[120px] opacity-40 ${prefersReducedMotion ? '' : 'animate-float'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ion-cyan/10 rounded-full blur-[120px] opacity-40 ${prefersReducedMotion ? '' : 'animate-float'}`} style={{ animationDelay: prefersReducedMotion ? undefined : "2s" }} />
        <div className={`absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-volt-lime/10 rounded-full blur-[100px] opacity-30 ${prefersReducedMotion ? '' : 'animate-float'}`} style={{ animationDelay: prefersReducedMotion ? undefined : "4s" }} />
      </div>

      {/* Main hero content - centered with upward bias */}
      <div className="flex-1 flex items-center justify-center container mx-auto px-4 relative z-10 text-center pb-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <SectionBadge label="OVERNIGHT UX OVERFLOW" ping={false} className="mb-6 md:mb-8" />

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 md:mb-8 leading-[1.05]">
            <span className="block text-white hero-headline">Send a Problem.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet hero-gradient-text">
               Sleep on It. Literally.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-2 md:px-0">
            Overflow for agencies. Firepower for startups. Senior UX work from a designer who runs with the brief.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              className="hero-cta-button bg-white text-black hover:bg-volt-lime hover:text-black font-medium text-base px-6 py-4 h-auto rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] hover:scale-105 focus-visible:ring-2 focus-visible:ring-volt-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep-basalt"
              asChild
            >
              <a href="#problem">
                How It Works
                <ChevronDown className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
            </Button>

            <Button
              variant="ghost"
              className="text-white hover:text-volt-lime hover:bg-transparent font-medium text-base gap-2 group rounded-full focus-visible:ring-2 focus-visible:ring-volt-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep-basalt"
              asChild
            >
              <a href="#work">
                View Case Studies
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        onClick={() => {
          document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:block mx-auto text-gray-500 hover:text-volt-lime transition-colors p-2 mb-6 relative z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep-basalt rounded-full"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </motion.button>

      {/* Credibility stats */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
        className="relative z-10 py-6 md:py-8 border-t border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-white font-medium text-sm md:text-base">
                  {stat.value}
                </span>
                <span className="block text-gray-500 text-xs font-mono uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-basalt to-transparent pointer-events-none" />
    </section>
  );
}
