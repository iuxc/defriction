import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BioModal } from "./BioModal";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function About() {
  const [bioOpen, setBioOpen] = useState(false);

  const floatingBadges = [
    { text: "15+ Years Exp", pos: "-top-6 -right-6", delay: 0 },
    { text: "Multi-lingual 🌏", pos: "-top-4 -left-4", delay: 2 },
    { text: "Flutist 🎵", pos: "top-1/2 -left-10", delay: 4 },
    { text: "Cyclist 🚴", pos: "-bottom-6 -left-6", delay: 1 },
    { text: "Dog Lover 🐕", pos: "-bottom-2 -right-2", delay: 3 }
  ];

  // Logic to show only 2 badges at a time cycling through
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % floatingBadges.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [floatingBadges.length]);

  return (
    <section id="about" className="min-h-screen py-32 bg-deep-basalt relative border-y border-white/5 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-6 backdrop-blur-md cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
              </span>
              <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                03. About
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
              The Executive Who <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Designs</span>.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-10">
              <p>
                I currently lead Digital Strategy for the University of Oregon. 'Defriction' is where I get back to the craft—solving high-stakes design problems with executive precision.
              </p>
            </div>
            
            {/* Mini Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Base</span>
                <span className="block text-white font-medium">Eugene, OR (PST)</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Experience</span>
                <span className="block text-white font-medium">15+ Years</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Current Role</span>
                <span className="block text-white font-medium">AVP, Digital Strategy</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="text-purple-400 border-purple-400/20 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-white hover:border-transparent group rounded-full"
              onClick={() => setBioOpen(true)}
            >
              View Full Profile <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative order-first lg:order-last">
            {/* Profile Image */}
            <div className="relative aspect-square max-w-md w-full mx-auto group lg:ml-auto lg:mr-24">
               <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime via-ion-cyan to-electric-violet rounded-3xl opacity-20 blur-2xl rotate-6 group-hover:opacity-40 transition-opacity duration-500" />
               <div className="absolute inset-0 border border-white/10 rounded-3xl bg-deep-basalt/80 backdrop-blur-xl overflow-hidden p-2">
                  <img 
                    src="/TheHuman.jpg" 
                    alt="The Human" 
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               
               {/* Floating Badges - Cycling Visibility */}
               <AnimatePresence>
                 {floatingBadges.map((badge, i) => {
                   // Show current and next badge (2 visible at a time)
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
