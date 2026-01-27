import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { FooterContact } from "@/components/FooterContact";

export default function Bio() {
  return (
    <div className="min-h-screen bg-deep-basalt text-white selection:bg-volt-lime selection:text-black">
      <Navigation />
      
      {/* 1. Header: The Translator */}
      <header className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-ion-cyan/5 border border-ion-cyan/20 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-ion-cyan animate-pulse" />
                <span className="font-mono text-xs text-ion-cyan uppercase tracking-widest">
                  Identity: The Translator
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-8">
                The Translator.
              </h1>
              
              <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-3xl">
                I speak <span className="text-white font-medium">Marketing</span> and I speak <span className="text-white font-medium">IT</span>. 
                Most friction happens because these two departments are speaking different languages.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative hidden lg:block"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime/20 to-electric-violet/20 blur-[80px] rounded-full" />
               <AbstractBrowser 
                 variant="profile" 
                 className="w-full max-w-md mx-auto shadow-2xl shadow-black/50 rotate-y-12 transform perspective-1000 border-white/10 bg-black/60"
               />
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-32 pb-32">

        {/* 3. The Origin (The "Why") */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
             <span className="text-flux-orange font-mono text-sm mb-4 block tracking-widest uppercase">// The Origin</span>
             <h2 className="text-4xl font-display font-bold leading-tight">
               Strategy without execution is just a PDF.
             </h2>
          </div>
          <div className="md:col-span-8">
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-flux-orange/10 blur-[80px] rounded-full pointer-events-none" />
               <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                 I currently serve as the AVP of Digital Strategy at the University of Oregon. I manage the big picture—multi-million dollar budgets, governance, and 5-year roadmaps. 
                 <br /><br />
                 But I missed the precision of the craft. I missed the specific satisfaction of fixing a broken interaction or optimizing a load time. 
                 <strong className="text-white"> 'Defriction' is my practice of getting back into the weeds.</strong> It is where I sharpen the tools that make me a better leader by day.
               </p>
            </div>
          </div>
        </section>

        {/* 4. Hard Assets */}
        <section>
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-display font-bold">Hard Assets</h2>
            <span className="font-mono text-xs text-gray-500 hidden md:block">VERIFIED_METRICS_V.2026</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "CONSOLIDATION", desc: "Merged 8 Indiana University websites into 1 unified gateway." },
              { label: "ACCESSIBILITY", desc: "Founded the office that hit #1 Ranking in the Big Ten." },
              { label: "SCALE", desc: "Led teams of 75+ across multiple timezones." },
              { label: "GROWTH", desc: "Scaled Rume Health Ops to 20 states with <3% turnover." },
              { label: "SYSTEMS", desc: "Pioneered the 'Rivet' Design System for Higher Ed." }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="font-mono text-volt-lime text-sm mb-3 tracking-widest border-b border-white/10 pb-2 inline-block">
                  {item.label}
                </div>
                <p className="font-mono text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. The Value (Split Columns) */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-ion-cyan/5 to-electric-violet/5 rounded-3xl -z-10" />
          
          <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10 bg-deep-basalt/50 backdrop-blur-sm">
            
            {/* Left Column (To the CMO) */}
            <div className="p-12 space-y-6 group hover:bg-white/5 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-ion-cyan/10 text-ion-cyan border border-ion-cyan/20">
                <span className="text-xs font-mono uppercase tracking-widest">To the CMO</span>
              </div>
              <h3 className="text-3xl font-display font-bold">
                I don't just speak code.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I speak conversion, brand, and journey. I know that speed matters and that pixel-perfection builds trust.
              </p>
            </div>

            {/* Right Column (To the CIO) */}
            <div className="p-12 space-y-6 group hover:bg-white/5 transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-ion-cyan/10 text-ion-cyan border border-ion-cyan/20">
                <span className="text-xs font-mono uppercase tracking-widest">To the CIO</span>
              </div>
              <h3 className="text-3xl font-display font-bold">
                I won't build tech debt.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I build systems that scale, survive governance, meet WCAG 2.1 standards, and pass security audits.
              </p>
            </div>

          </div>
        </section>

        {/* 6. The Human (Personal Hooks) */}
        <section className="grid md:grid-cols-12 gap-12 items-center border-t border-white/10 pt-24">
           <div className="md:col-span-5">
              <h2 className="text-5xl font-display font-bold mb-6">The Human.</h2>
              <div className="w-full aspect-square bg-gray-800 rounded-2xl overflow-hidden relative border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-deep-basalt via-transparent to-transparent opacity-60 z-10" />
                   <img 
                     src="/TheHumaninAZ.jpg" 
                     alt="The Human in AZ" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
              </div>
           </div>
           
           <div className="md:col-span-7 space-y-8">
              {[
                { title: "RUNNER", subtitle: "Discipline.", desc: "I don't miss deadlines." },
                { title: "FLAUTIST", subtitle: "Precision.", desc: "I obsess over the details." },
                { title: "GAMER", subtitle: "Systems.", desc: "I see the mechanics behind the fun." }
              ].map((hook) => (
                <div key={hook.title} className="flex items-baseline gap-6 group">
                   <div className="font-mono text-volt-lime text-xl w-32 shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                     {hook.title}
                   </div>
                   <div>
                      <span className="text-white font-bold text-xl mr-2">{hook.subtitle}</span>
                      <span className="text-gray-400 text-lg font-light">{hook.desc}</span>
                   </div>
                </div>
              ))}
           </div>
        </section>

      </main>

      <footer className="py-24 border-t border-white/10 bg-black/20 min-h-[50vh] flex items-center justify-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
           <FooterContact title="Ready to ship?" />
           
           <p className="font-mono text-xs text-gray-600 mt-12">
             hello@defriction.design
             <br /><br />
             © 2026 defriction design. MELBOURNE / EUGENE.
           </p>
         </motion.div>
      </footer>
    </div>
  );
}
