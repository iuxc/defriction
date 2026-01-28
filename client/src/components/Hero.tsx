import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen md:min-h-screen flex flex-col md:items-center md:justify-center overflow-hidden md:pt-20 mesh-gradient snap-start">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/20 rounded-full blur-[120px] animate-float opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ion-cyan/10 rounded-full blur-[120px] animate-float opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-volt-lime/10 rounded-full blur-[100px] animate-float opacity-30" style={{ animationDelay: "4s" }} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
              COMPLEX UI DESIGN + PROTOTYPING
            </span>
          </div>
          
          <h1 className="text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="block text-white">Complex UX Solved.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet">
               Design That Flows.
            </span>
          </h1>
          
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Helping Australian agencies and leaders remove the friction between 
            <span className="text-white font-medium"> big ideas </span> 
            and 
            <span className="text-white font-medium"> finished pixels</span>.
          </p>
          
          <div className="flex flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-white text-black hover:bg-volt-lime hover:text-black font-medium text-base px-6 py-4 h-auto rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] hover:scale-105"
              asChild
            >
              <a href="#work">
                See the Work
                <ChevronDown className="ml-2 w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="text-white hover:text-volt-lime hover:bg-transparent font-medium text-base gap-2 group rounded-full px-4"
              asChild
            >
              <a href="#method">
                The Method 
                <ChevronDown className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout - Full viewport with sticky CTAs */}
      <div className="md:hidden flex flex-col h-full pt-16">
        {/* Top Content */}
        <div className="flex-1 flex flex-col px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 mb-3 backdrop-blur-md cursor-default self-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
              </span>
              <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                COMPLEX UI + PROTOTYPING
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-[1.75rem] font-display font-bold tracking-tight mb-3 leading-[1.15]">
              <span className="block text-white">Complex UX Solved.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet">
                 Design That Flows.
              </span>
            </h1>
            
            {/* Dek */}
            <p className="text-sm text-gray-400 max-w-xs mx-auto mb-4 font-light leading-relaxed">
              Helping Australian agencies remove the friction between 
              <span className="text-white font-medium"> big ideas </span> 
              and 
              <span className="text-white font-medium"> finished pixels</span>.
            </p>
            
            {/* Abstract Wireframe Visual */}
            <div className="flex-1 flex items-center justify-center px-4 py-2 min-h-0">
              <div className="relative w-full max-w-[280px] opacity-60">
                <AbstractBrowser 
                  variant="landing" 
                  className="w-full shadow-2xl shadow-electric-violet/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-basalt via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sticky CTAs at bottom */}
        <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-deep-basalt via-deep-basalt/95 to-transparent pt-6 pb-8 px-4">
          <div className="flex flex-row gap-3 justify-center items-center">
            <Button 
              className="bg-white text-black hover:bg-volt-lime hover:text-black font-medium text-sm px-5 py-2.5 h-auto rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              asChild
            >
              <a href="#work">
                See the Work
                <ChevronDown className="ml-1.5 w-3.5 h-3.5" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="text-white hover:text-volt-lime hover:bg-transparent font-medium text-sm gap-1.5 group rounded-full px-3"
              asChild
            >
              <a href="#method">
                The Method 
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade - Desktop only */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-basalt to-transparent pointer-events-none" />
      <div className="hidden md:block">
        <NextSectionArrow targetId="work" />
      </div>
    </section>
  );
}
