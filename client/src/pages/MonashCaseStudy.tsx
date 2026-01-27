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
      <header className="pt-32 pb-16 border-b border-white/10 bg-grid-pattern">
        <div className="container mx-auto px-4">
          <Link href="/#work" className="inline-flex items-center text-gray-400 hover:text-volt-lime mb-8 font-mono text-sm uppercase tracking-wider transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="font-mono text-volt-lime mb-4">CASE_ID: MONASH_001</div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-none mb-4">
                Monash University
              </h1>
              <p className="text-2xl text-gray-400 font-light max-w-2xl">
                From Gatekeeper to Concierge: Unifying 40,000+ pathways.
              </p>
            </div>
            <div className="flex gap-4 font-mono text-sm">
              <div className="px-3 py-1 border border-white/20 text-gray-400">STRATEGY</div>
              <div className="px-3 py-1 border border-white/20 text-gray-400">IA</div>
              <div className="px-3 py-1 border border-white/20 text-gray-400">REACT</div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        
        {/* 1. The Friction */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-flux-orange font-mono text-xl mb-4 uppercase tracking-widest">// The Friction</h2>
            <h3 className="text-3xl font-display font-bold mb-4">The PDF Trap.</h3>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              40,000 applicants were hitting dead ends. Regional students with an ATAR of 65 were abandoning the site, 
              unaware they qualified via "Adjustment Factors" buried in 40-page PDFs.
            </p>
            <p>
              The system was built as a <strong>Gatekeeper</strong> ("Am I eligible?"), forcing students to do the math. 
              If the math didn't look right immediately, they left.
            </p>
            <div className="p-6 bg-red-900/10 border border-red-500/30 rounded-none mt-6">
              <div className="font-mono text-red-400 text-sm mb-2">ERROR LOG:</div>
              <p className="font-mono text-red-200">User Drop-off Rate: 68% at Eligibility Page.</p>
            </div>
          </div>
        </section>

        {/* 2. The Insight */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-ion-cyan font-mono text-xl mb-4 uppercase tracking-widest">// The Insight</h2>
            <h3 className="text-3xl font-display font-bold mb-4">Radical Transparency.</h3>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              The <em>2024 Universities Accord</em> mandates equity. We couldn't just reskin the old site; we had to expose the logic.
            </p>
            <p>
              We pivoted the entire mental model from "Am I eligible?" to <strong>"Who are you?"</strong>. 
              By acting as a Concierge, we could calculate their <em>true</em> rank for them.
            </p>
          </div>
        </section>

        {/* 3. The Defriction (Interactive Component) */}
        <section className="border border-white/10 bg-black/40 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand" />
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <h2 className="text-volt-lime font-mono text-xl mb-4 uppercase tracking-widest">// The Defriction</h2>
              <h3 className="text-3xl font-display font-bold mb-4">The Stacking Calculator.</h3>
              <p className="text-gray-400 mb-6">
                A visual proof that equity factors matter. We visualize the gap closing in real-time.
              </p>
            </div>
            
            <div className="md:col-span-8">
              {/* CSS-only Bar Chart Animation Mockup */}
              <div className="bg-deep-basalt border border-white/10 p-8">
                <div className="flex justify-between font-mono text-xs text-gray-500 mb-8 border-b border-white/10 pb-2">
                  <span>ATAR CALCULATOR PREVIEW</span>
                  <span>STATUS: QUALIFIED</span>
                </div>
                
                <div className="space-y-8 relative">
                  {/* Threshold Line */}
                  <div className="absolute left-[70%] top-0 bottom-0 border-l border-dashed border-white/30 z-10 flex flex-col justify-between py-2">
                    <span className="bg-deep-basalt text-white text-xs px-1 -ml-6">REQ: 70.00</span>
                  </div>

                  {/* Bar Group */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-electric-violet font-mono">Raw ATAR</span>
                      <span className="text-white font-bold">65.00</span>
                    </div>
                    <div className="h-12 bg-gray-800 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-electric-violet absolute top-0 left-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-volt-lime font-mono">Regional Bonus</span>
                      <span className="text-white font-bold">+5.00</span>
                    </div>
                    <div className="h-12 flex relative">
                       {/* Spacer for base */}
                       <div className="w-[65%] h-full opacity-0" />
                       {/* Bonus Bar */}
                       <div className="h-full bg-gray-800 flex-grow relative overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "15%" }} /* Roughly 5 units visual */
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="h-full bg-volt-lime absolute top-0 left-0"
                          />
                       </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="pt-4 flex items-center gap-4">
                     <div className="text-4xl font-bold text-white font-display">
                        70.00
                     </div>
                     <div className="px-3 py-1 bg-volt-lime text-black font-bold uppercase text-xs tracking-wider">
                        Entry Guaranteed
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Artifact (Decision Tree) */}
        <section className="space-y-8">
           <h2 className="text-white font-mono text-xl uppercase tracking-widest border-b border-white/10 pb-4">
             // Master Flow Logic
           </h2>
           
           <div className="font-mono text-xs md:text-sm text-gray-400 bg-black p-8 border border-white/10 overflow-x-auto">
             <pre className="leading-relaxed">
{`START_SESSION
  |
  +-- [Q] "Are you a current Year 12 student?"
  |    |
  |    +-- YES --> [FETCH] SEAS_DATA (Postcode, School ID)
  |    |            |
  |    |            +-- [CALC] Base_Adjustment = 0
  |    |            +-- [CHECK] Is_Regional? (Postcode) -> +5.00
  |    |            +-- [CHECK] Financial_Hardship?     -> +X.XX
  |    |            |
  |    |            +-- [OUTPUT] "Your Adjusted Selection Rank"
  |    |
  |    +-- NO ---> [REDIRECT] Mature_Age_Pathways
  |
  +-- [DISPLAY] Eligible_Courses_List[]
       |
       +-- FILTER: Course_Req <= Adjusted_Rank`}
             </pre>
           </div>
        </section>

      </main>

      <footer className="py-16 border-t border-white/10 text-center">
         <h3 className="text-2xl font-display font-bold text-white mb-8">Ready to remove friction?</h3>
         <Button 
            className="bg-volt-lime text-black hover:bg-volt-lime/90 font-mono text-lg px-8 py-6 h-auto rounded-none border border-volt-lime uppercase tracking-widest font-bold"
            asChild
          >
            <Link href="/#contact">[ Start the Conversation ]</Link>
          </Button>
      </footer>
    </div>
  );
}
