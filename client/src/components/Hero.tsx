import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid-pattern pt-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-volt-lime/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-violet/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="font-mono text-ion-cyan mb-4 tracking-widest uppercase text-sm">
            // Brand Intelligence + Digital Strategy
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-white">
            STRATEGY THAT <span className="text-stroke-lime">WORKS</span>.<br />
            DESIGN THAT <span className="text-volt-lime">FLOWS</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
            I am a US-based Digital AVP helping Australian agencies and leaders remove the 
            <span className="text-white font-medium"> friction</span> between big ideas and finished pixels.
          </p>
          
          <Button 
            className="bg-volt-lime text-black hover:bg-volt-lime/90 font-mono text-lg px-8 py-6 h-auto rounded-none border border-volt-lime uppercase tracking-widest font-bold"
            asChild
          >
            <a href="#work">[ See the Work ]</a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 left-10 font-mono text-xs text-gray-600 hidden md:block">
        COORD: 34.0522° N, 118.2437° W<br />
        STATUS: ONLINE
      </div>
      <div className="absolute top-32 right-10 font-mono text-xs text-volt-lime hidden md:block animate-pulse">
        ● LIVE
      </div>
    </section>
  );
}
