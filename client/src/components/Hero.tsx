import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="hero" className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/20 rounded-full blur-[120px] opacity-40 ${prefersReducedMotion ? '' : 'animate-float'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ion-cyan/10 rounded-full blur-[120px] opacity-40 ${prefersReducedMotion ? '' : 'animate-float'}`} style={{ animationDelay: prefersReducedMotion ? undefined : "2s" }} />
        <div className={`absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-volt-lime/10 rounded-full blur-[100px] opacity-30 ${prefersReducedMotion ? '' : 'animate-float'}`} style={{ animationDelay: prefersReducedMotion ? undefined : "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-6 md:mb-8 backdrop-blur-md cursor-default">
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
              OVERNIGHT UX OVERFLOW
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 md:mb-8 leading-[1.05]">
            <span className="block text-white hero-headline">Send a Problem.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet hero-gradient-text">
               Sleep on It. Literally.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-2 md:px-0">
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
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-basalt to-transparent pointer-events-none" />
      <NextSectionArrow targetId="problem" />
    </section>
  );
}