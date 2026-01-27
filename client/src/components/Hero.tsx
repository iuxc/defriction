import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 mesh-gradient">
      {/* ... existing dynamic background ... */}
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/20 rounded-full blur-[120px] animate-float opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ion-cyan/10 rounded-full blur-[120px] animate-float opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-volt-lime/10 rounded-full blur-[100px] animate-float opacity-30" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
              </span>
              <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                Brand Intelligence + Digital Strategy
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="block text-white">Strategy that</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet">
                 flows like magic.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-12 font-light leading-relaxed">
              Helping Australian agencies and leaders remove the friction between 
              <span className="text-white font-medium"> big ideas </span> 
              and 
              <span className="text-white font-medium"> finished pixels</span>.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Button 
                className="bg-white text-black hover:bg-volt-lime hover:text-black font-medium text-base px-6 py-4 h-auto rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] hover:scale-105"
                asChild
              >
                <a href="#work">
                  See the Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                className="text-white hover:text-volt-lime hover:bg-transparent font-medium text-base gap-2 group rounded-full px-0 hover:px-4"
                asChild
              >
                <a href="#method">
                  The Method 
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Abstract Browser - Right Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
             animate={{ opacity: 1, scale: 1, rotateY: 0 }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="relative hidden lg:block perspective-1000"
          >
             <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-y-2">
                <AbstractBrowser 
                  variant="modern-hero"
                  className="w-full h-[500px] shadow-2xl shadow-black/80 border-white/10 bg-black/60 backdrop-blur-xl rounded-xl"
                />
             </div>
             
             {/* Background glow behind browser */}
             <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime/20 to-electric-violet/20 blur-[100px] -z-10 rounded-full opacity-60" />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-basalt to-transparent pointer-events-none" />
      <NextSectionArrow targetId="work" />
    </section>
  );
}
