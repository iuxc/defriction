import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users } from "lucide-react";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function TheProblem() {
  return (
    <section id="problem" className="min-h-[100dvh] md:min-h-screen py-16 md:py-32 bg-deep-basalt relative flex flex-col justify-center overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-[-10%] w-[30%] h-[30%] bg-red-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-white/10 bg-white/5 mb-6 md:mb-8 backdrop-blur-md cursor-default">
            <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
              The Reality
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Your team's at capacity.{" "}
            <span className="text-gray-500">The deadline isn't moving.</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10 md:mb-16">
            <p>
              You need senior UX work without the onboarding, the check-ins, or the hand-holding. 
              You need someone who gets the brief, gets to work, and gets it done.
            </p>
            <p className="text-white font-medium text-lg md:text-2xl">
              That's what <span className="lowercase font-bold bg-gradient-to-r from-volt-lime to-ion-cyan bg-clip-text text-transparent">defriction</span> is for.
            </p>
          </div>

          {/* Visual proof points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 text-left">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-400 mb-3" />
              <div className="text-white font-medium mb-1">Team stretched thin</div>
              <p className="text-gray-500 text-sm">Every designer's already juggling 3 projects</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 text-left">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-400 mb-3" />
              <div className="text-white font-medium mb-1">No time to onboard</div>
              <p className="text-gray-500 text-sm">A contractor who needs hand-holding won't cut it</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 text-left">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-orange-400 mb-3" />
              <div className="text-white font-medium mb-1">Stakes are high</div>
              <p className="text-gray-500 text-sm">This needs to be right the first time</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <NextSectionArrow targetId="work" />
    </section>
  );
}
