import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { FooterContact } from "@/components/FooterContact";
import { useRef } from "react";

const NextSectionArrow = ({ targetId }: { targetId: string }) => (
  <motion.button
    onClick={() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-volt-lime transition-colors p-4 z-20 cursor-pointer"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.2 }}
    aria-label="Scroll to next section"
  >
    <ChevronDown className="w-8 h-8" />
  </motion.button>
);

const Section = ({ 
  children, 
  id, 
  nextId, 
  className = "" 
}: { 
  children: React.ReactNode, 
  id: string, 
  nextId?: string, 
  className?: string 
}) => (
  <section id={id} className={`min-h-screen relative flex flex-col justify-center py-24 ${className}`}>
    <div className="container mx-auto px-4 relative z-10">
      {children}
    </div>
    {nextId && <NextSectionArrow targetId={nextId} />}
  </section>
);

export default function Bio() {
  return (
    <div className="bg-deep-basalt text-white selection:bg-volt-lime selection:text-black font-sans overflow-x-hidden">
      <Navigation />
      
      {/* Section 1: Hero */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ion-cyan/10 border border-ion-cyan/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-ion-cyan animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              <span className="font-mono text-sm text-ion-cyan uppercase tracking-widest font-bold">
                Identity: The Translator
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-none mb-8 tracking-tight">
              The<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Translator.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-2xl">
              I speak <span className="text-white font-medium border-b border-white/20">Marketing</span> and I speak <span className="text-white font-medium border-b border-white/20">IT</span>. 
              <br />
              Most friction happens because these two departments are speaking different languages.
            </p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative hidden lg:flex items-center justify-center"
          >
              <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime/20 to-electric-violet/20 blur-[120px] rounded-full" />
              <AbstractBrowser 
                variant="profile" 
                className="w-full max-w-xl shadow-2xl shadow-black/50 border-white/10 bg-black/60 backdrop-blur-xl rounded-xl"
              />
          </motion.div>
        </div>

        <NextSectionArrow targetId="origin" />
      </section>

      {/* Section 2: The Origin */}
      <Section id="origin" nextId="assets" className="bg-black/20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-flux-orange font-mono text-sm mb-6 block tracking-widest uppercase font-bold"
              >
                // The Origin
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-bold leading-tight"
              >
                Strategy without execution is just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-flux-orange to-red-500">PDF.</span>
              </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="glass-panel p-10 md:p-16 rounded-[3rem] relative overflow-hidden border border-white/5 bg-white/5 backdrop-blur-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-flux-orange/10 blur-[100px] rounded-full pointer-events-none" />
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  I currently serve as the AVP of Digital Strategy at the University of Oregon. I manage the big picture—multi-million dollar budgets, governance, and 5-year roadmaps. 
                  <br /><br />
                  But I missed the precision of the craft. I missed the specific satisfaction of fixing a broken interaction or optimizing a load time. 
                  <br /><br />
                  <strong className="text-white font-medium text-3xl block mt-8"> 'Defriction' is my practice of getting back into the weeds.</strong>
                </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 3: Hard Assets */}
      <Section id="assets" nextId="value" className="bg-deep-basalt">
        <div className="flex flex-col justify-center">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white/90">Hard Assets</h2>
            <span className="font-mono text-sm text-gray-500 hidden md:block border border-white/10 px-4 py-2 rounded-full">VERIFIED_METRICS_V.2026</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "CONSOLIDATION", desc: "Merged 8 Indiana University websites into 1 unified gateway.", color: "border-l-volt-lime" },
              { label: "ACCESSIBILITY", desc: "Founded the office that hit #1 Ranking in the Big Ten.", color: "border-l-ion-cyan" },
              { label: "SCALE", desc: "Led teams of 75+ across multiple timezones.", color: "border-l-electric-violet" },
              { label: "GROWTH", desc: "Scaled Rume Health Ops to 20 states with <3% turnover.", color: "border-l-flux-orange" },
              { label: "SYSTEMS", desc: "Pioneered the 'Rivet' Design System for Higher Ed.", color: "border-l-white" },
              { label: "IMPACT", desc: "Managed $5M+ digital transformation budgets.", color: "border-l-gray-400" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`group relative p-8 bg-white/5 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between border-l-4 min-h-[200px] ${item.color}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="font-mono text-xs text-gray-400 tracking-widest mb-4">{`0${i + 1}`}</div>
                <div>
                  <div className="font-display font-bold text-2xl md:text-3xl mb-4 text-white group-hover:text-volt-lime transition-colors">
                    {item.label}
                  </div>
                  <p className="font-sans text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4: The Value */}
      <Section id="value" nextId="human" className="bg-gradient-to-b from-deep-basalt to-black">
        <div className="grid md:grid-cols-2 h-full gap-8 relative z-10">
          
          {/* Left Column (To the CMO) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-12 md:p-24 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors duration-700"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ion-cyan/10 text-ion-cyan border border-ion-cyan/20 w-fit mb-8">
              <span className="text-xs font-mono uppercase tracking-widest font-bold">To the CMO</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">
              I don't just speak code.
            </h3>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl">
              I speak conversion, brand, and journey. I know that speed matters and that pixel-perfection builds trust.
            </p>
          </motion.div>

          {/* Right Column (To the CIO) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-12 md:p-24 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors duration-700"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 text-electric-violet border border-electric-violet/20 w-fit mb-8">
              <span className="text-xs font-mono uppercase tracking-widest font-bold">To the CIO</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">
              I won't build tech debt.
            </h3>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl">
              I build systems that scale, survive governance, meet WCAG 2.1 standards, and pass security audits.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Section 5: The Human */}
      <section id="human" className="min-h-screen relative flex items-center justify-center bg-black overflow-hidden py-24">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="/TheHumaninAZ.jpg" 
              alt="Background" 
              className="w-full h-full object-cover grayscale blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative group perspective-1000">
              <motion.div
                initial={{ rotateY: 30, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl shadow-black"
              >
                  <img 
                    src="/TheHumaninAZ.jpg" 
                    alt="The Human in AZ" 
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                  />
              </motion.div>
            </div>
            
            <div className="md:col-span-7 space-y-16">
              <h2 className="text-7xl md:text-9xl font-display font-bold mb-12 text-white/20">The Human.</h2>
              <div className="space-y-12">
                {[
                  { title: "RUNNER", subtitle: "Discipline.", desc: "I don't miss deadlines." },
                  { title: "FLUTIST", subtitle: "Precision.", desc: "I obsess over the details." },
                  { title: "GAMER", subtitle: "Systems.", desc: "I see the mechanics behind the fun." }
                ].map((hook, i) => (
                  <motion.div 
                    key={hook.title} 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-8 group"
                  >
                      <div className="font-mono text-volt-lime text-2xl w-32 shrink-0 group-hover:translate-x-4 transition-transform duration-300">
                        {hook.title}
                      </div>
                      <div className="h-px bg-white/20 w-16 group-hover:w-24 transition-all duration-300" />
                      <div>
                        <span className="text-white font-bold text-3xl mr-4 block md:inline">{hook.subtitle}</span>
                        <span className="text-gray-400 text-xl font-light">{hook.desc}</span>
                      </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <NextSectionArrow targetId="contact" />
      </section>

      {/* Section 6: Footer Contact */}
      <footer id="contact" className="py-24 border-t border-white/10 bg-black/20 min-h-[50vh] flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FooterContact title="Ready to ship?" />
              
              <p className="font-mono text-xs text-gray-600 mt-24 tracking-widest uppercase">
                brian@defriction.design
                <br /><br />
                © 2026 defriction design. MELBOURNE / EUGENE.
              </p>
            </motion.div>
        </div>
      </footer>
    </div>
  );
}
