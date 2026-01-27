import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function MonashCaseStudy() {
  return (
    <div className="min-h-screen bg-deep-basalt text-white selection:bg-volt-lime selection:text-black">
      <Navigation />
      
      {/* Header */}
      <header className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/#work">
            <a className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-medium text-sm transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
            </a>
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-volt-lime mb-6 tracking-widest text-xs uppercase border border-volt-lime/30 inline-block px-3 py-1 rounded">
                Case Study: 001
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500">
                Monash University
              </h1>
              <p className="text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
                From Gatekeeper to Concierge: Unifying 40,000+ pathways with radical transparency.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="flex flex-wrap gap-3 md:justify-end"
            >
              {["Strategy", "Information Architecture", "React App"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 space-y-32">
        
        {/* 1. The Friction */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <span className="text-flux-orange font-mono text-sm mb-4 block tracking-widest uppercase">The Friction</span>
            <h2 className="text-4xl font-display font-bold mb-6">The PDF Trap.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-xl text-gray-400 font-light leading-relaxed">
            <p>
              40,000 applicants were hitting dead ends. Regional students with an ATAR of 65 were abandoning the site, 
              unaware they qualified via "Adjustment Factors" buried in 40-page PDFs.
            </p>
            <div className="glass-panel p-6 rounded-xl border-l-4 border-l-flux-orange flex items-start gap-4 mt-8">
               <div className="mt-1 text-flux-orange">
                 <X className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="text-white font-bold mb-1">Critical Failure</h4>
                 <p className="text-sm text-gray-400">User Drop-off Rate: 68% at Eligibility Page.</p>
               </div>
            </div>
          </div>
        </section>

        {/* 2. The Insight */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <span className="text-ion-cyan font-mono text-sm mb-4 block tracking-widest uppercase">The Insight</span>
            <h2 className="text-4xl font-display font-bold mb-6">Radical Transparency.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-xl text-gray-400 font-light leading-relaxed">
            <p>
              The <em>2024 Universities Accord</em> mandates equity. We couldn't just reskin the old site; we had to expose the logic.
            </p>
            <p className="text-white">
              We pivoted the entire mental model from "Am I eligible?" to <strong>"Who are you?"</strong>. 
            </p>
          </div>
        </section>

        {/* 3. The Defriction (Interactive Component) */}
        <section className="glass-card rounded-3xl overflow-hidden border border-white/10">
          <div className="p-8 md:p-16 grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-4">
              <span className="text-volt-lime font-mono text-sm mb-4 block tracking-widest uppercase">The Solution</span>
              <h3 className="text-3xl font-display font-bold mb-4 text-white">The Stacking Calculator.</h3>
              <p className="text-gray-400 leading-relaxed">
                A visual proof that equity factors matter. We visualize the gap closing in real-time, giving students hope instead of rejection.
              </p>
            </div>
            
            <div className="md:col-span-8">
              {/* Interactive Mockup */}
              <div className="bg-[#0f1219] rounded-xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-volt-lime/10 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="flex justify-between font-mono text-xs text-gray-500 mb-10 border-b border-white/5 pb-4">
                  <span>ATAR_CALC_V2.1</span>
                  <span className="text-volt-lime">● LIVE PREVIEW</span>
                </div>
                
                <div className="space-y-10 relative px-4">
                  {/* Threshold Line */}
                  <div className="absolute left-[70%] -top-4 -bottom-4 border-l border-dashed border-white/20 z-10">
                    <div className="absolute -top-6 -left-8 bg-white/10 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/5">
                      Target: 70
                    </div>
                  </div>

                  {/* Bar Group */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Raw ATAR Score</span>
                      <span className="text-white font-mono">65.00</span>
                    </div>
                    <div className="h-10 bg-white/5 rounded-full relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-electric-violet to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-volt-lime">Regional Adjustment</span>
                      <span className="text-white font-mono">+5.00</span>
                    </div>
                    <div className="h-10 flex relative rounded-full bg-white/5 overflow-hidden">
                       {/* Spacer */}
                       <div className="w-[65%] h-full" />
                       {/* Bonus Bar */}
                       <div className="h-full flex-grow relative">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "15%" }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="h-full bg-volt-lime absolute top-0 left-0 rounded-r-full shadow-[0_0_20px_rgba(212,255,0,0.5)]"
                          />
                       </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-8">
                     <div className="text-sm text-gray-500">Final Selection Rank</div>
                     <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-white font-display">70.00</div>
                        <div className="h-8 px-3 flex items-center bg-volt-lime/20 text-volt-lime border border-volt-lime/30 rounded-full text-xs font-bold uppercase tracking-wider">
                           <Check className="w-3 h-3 mr-1" /> Eligible
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Artifact (Decision Tree) */}
        <section className="space-y-8">
           <h2 className="text-white font-display text-2xl font-bold border-b border-white/10 pb-6">
             The Logic Architecture
           </h2>
           
           <div className="font-mono text-sm text-gray-300 bg-[#0A0A0A] p-8 rounded-xl border border-white/10 overflow-x-auto shadow-inner">
             <pre className="leading-loose">
{`const calculateEligibility = (applicant) => {
  // 1. Establish Base
  let rank = applicant.rawAtar;

  // 2. Apply Equity Adjustments (The "Concierge" Logic)
  if (applicant.location === 'REGIONAL') {
    rank += ADJUSTMENT_FACTORS.REGIONAL; // +5.00
  }
  
  if (applicant.financialStatus === 'TIER_1') {
    rank += ADJUSTMENT_FACTORS.SEAS; // +Variable
  }

  // 3. Return Transparent Result
  return {
    finalRank: rank,
    breakdown: [ ... ],
    eligibleCourses: fetchCourses(rank)
  };
}`}
             </pre>
           </div>
        </section>

      </main>

      <footer className="py-24 border-t border-white/10 text-center bg-black/20">
         <div className="container mx-auto px-4">
           <h3 className="text-3xl font-display font-bold text-white mb-8">Ready to transform your user flow?</h3>
           <Button 
              className="bg-white text-black hover:bg-volt-lime hover:text-black font-medium text-lg px-8 py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-volt-lime/20"
              asChild
            >
              <Link href="/#contact">Start a Project</Link>
            </Button>
         </div>
      </footer>
    </div>
  );
}
