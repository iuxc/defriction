import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, ArrowRight, ExternalLink, ShieldCheck, Zap, Scale, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { FooterContact } from "@/components/FooterContact";

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

export default function MonashCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="bg-deep-basalt text-white selection:bg-volt-lime selection:text-black font-sans overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-electric-violet/10 rounded-full blur-[150px] animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/#work">
            <a className="inline-flex items-center text-gray-500 hover:text-white mb-12 font-medium text-sm transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Work
            </a>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tight">
                  From <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Gatekeeper</span> <br />
                  to <span className="text-white">Concierge.</span>
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-2xl text-gray-400 font-light max-w-lg leading-relaxed mb-10">
                  Unifying the admissions journey for 40,000+ applicants.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-12 mb-10 pt-8 mt-8 border-t border-white/10"
              >
                <div>
                   <h3 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Client</h3>
                   <p className="text-white font-medium">Monash University</p>
                </div>
                <div>
                   <h3 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Role</h3>
                   <p className="text-white font-medium">UI Design + Information Architecture</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
               className="relative lg:h-[600px] flex flex-col items-center justify-center"
            >
               {/* Abstract Hero Visualization */}
               <div className="relative w-full max-w-lg z-10 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-electric-violet/30 to-volt-lime/30 blur-[60px] rounded-full opacity-60" />
                  <AbstractBrowser 
                    variant="landing" 
                    className="w-full shadow-2xl shadow-black/80 border-white/10 rotate-y-12 rotate-x-6 transform perspective-1000 transition-transform hover:rotate-0 duration-700"
                  />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-12 top-20 glass-panel p-4 rounded-xl border border-white/10 shadow-xl max-w-[200px]"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-volt-lime/20 flex items-center justify-center text-volt-lime">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-volt-lime">ELIGIBLE</span>
                     </div>
                     <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full w-[85%] bg-volt-lime" />
                     </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-8 bottom-32 glass-panel p-4 rounded-xl border border-white/10 shadow-xl"
                  >
                     <div className="text-xs font-mono text-gray-400 mb-1">APPLICANTS</div>
                     <div className="text-3xl font-display font-bold text-white">40k+</div>
                  </motion.div>
               </div>

               {/* Centered CTA */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 className="relative z-20"
               >
                 <Button 
                    className="bg-white text-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-black font-medium text-base px-8 py-6 h-auto rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] hover:scale-105"
                    onClick={() => window.open('https://www.figma.com', '_blank')}
                 >
                    Launch Interactive Demo
                    <ExternalLink className="ml-2 w-4 h-4" />
                 </Button>
               </motion.div>
            </motion.div>
          </div>
        </div>
        <NextSectionArrow targetId="friction" />
      </section>

      {/* 1. The Friction (The Problem) */}
      <Section id="friction" nextId="insight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-violet"></span>
                  </span>
                  <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                    01. The Problem (Current State)
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">Admissions by Administrative Burden.</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                  Currently, applying to university isn't just about grades; it's about navigating a maze. Students are forced to self-diagnose their eligibility using static PDFs, hidden 'Adjustment Factor' spreadsheets, and confusing academic acronyms. The system acts as a Gatekeeper, checking IDs at the door, rather than a Concierge helping guests find their way.
                </p>
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "The Dead End", value: "0 Results", desc: "A TAFE graduate searching for credit gets 0 results because the database is incomplete.", color: "text-red-400" },
                  { label: "The Hidden Math", value: "Hidden +5", desc: "A regional student with an ATAR of 65 sees a cutoff of 70 and abandons the site.", color: "text-orange-400" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-start hover:bg-white/5 transition-colors"
                  >
                     <h4 className={`text-3xl font-display font-bold mb-2 ${stat.color}`}>{stat.value}</h4>
                     <div className="text-white font-medium mb-2">{stat.label}</div>
                     <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative lg:h-[600px] flex items-center justify-center"
            >
               <AbstractBrowser variant="infinite-pdf" className="w-full max-w-md shadow-2xl h-[500px]" />
               
               {/* Floating Alert */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-1/4 glass-panel p-4 rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur-md shadow-xl max-w-[200px]"
                >
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-mono text-red-400 uppercase">Error</span>
                   </div>
                   <div className="text-sm text-white font-medium">Please refer to PDF Page 42, Section B.</div>
                </motion.div>
            </motion.div>
        </div>
      </Section>

      {/* 2. The Insight (The Strategy) */}
      <Section id="insight" nextId="solution">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-center"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ion-cyan"></span>
              </span>
              <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                02. The Strategic Insight
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">The Shift to Equity.</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              The 2024 Universities Accord mandates a shift from a market-driven logic to an equity-driven mandate. We couldn't just reskin the page; we had to expose the backend logic to the frontend user. We pivoted the entire architecture from asking <span className="text-white font-medium">"Am I eligible?"</span> to asking <span className="text-white font-medium">"Who are you?"</span>—routing Year 12s, TAFE grads, and Mature Age students down distinct, personalized paths.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 rounded-md border border-ion-cyan/20 bg-ion-cyan/5 text-sm text-ion-cyan font-mono">Equity First</div>
               <div className="px-4 py-2 rounded-md border border-ion-cyan/20 bg-ion-cyan/5 text-sm text-ion-cyan font-mono">Radical Transparency</div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative">
             <div className="absolute inset-0 bg-ion-cyan/10 blur-[100px] rounded-full" />
             <AbstractBrowser variant="terminal" className="shadow-2xl shadow-ion-cyan/10 h-[400px]" />
          </motion.div>
        </motion.div>
      </Section>

      {/* 3. The Solution (Interactive) */}
      <Section id="solution" nextId="gallery">
        <motion.div 
           initial="initial"
           whileInView="whileInView"
           viewport={{ once: true, margin: "-10% 0px" }}
           variants={fadeInUp}
           className="bg-gradient-to-b from-white/5 to-transparent rounded-[3rem] p-1 border border-white/10 overflow-hidden"
        >
          <div className="bg-[#0A0A0A] rounded-[2.8rem] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-volt-lime/5 blur-[120px] pointer-events-none" />
            
            <div className="p-8 md:p-20 grid lg:grid-cols-12 gap-16 items-center relative z-10">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-volt-lime"></span>
                  </span>
                  <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                    03. The Proposed Solution
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">Visualizing the Invisible.</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  We designed a dynamic component that visualizes the "Hidden Math" of admissions. Instead of a static table, the "Stacking Calculator" shows students exactly how close they are.
                </p>
                
                <Button 
                  className="bg-white text-black hover:bg-volt-lime hover:text-black font-medium text-base px-8 py-6 h-auto rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] hover:scale-105"
                  onClick={() => window.open('https://www.figma.com', '_blank')}
                >
                  Try It Out
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <div className="lg:col-span-7">
                {/* Interactive Mockup */}
                <div className="bg-[#0f1219] rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                  <div className="flex justify-between font-mono text-xs text-gray-500 mb-10 border-b border-white/5 pb-4">
                    <span>PATHWAY_ENGINE</span>
                    <span className="text-volt-lime">● ACTIVE</span>
                  </div>
                  
                  <div className="space-y-12 relative py-4">
                    {/* Threshold Line */}
                    <div className="absolute inset-y-0 left-4 right-4 z-10 pointer-events-none">
                       <div className="absolute left-[70%] top-0 bottom-0 border-l border-dashed border-white/20 flex flex-col justify-end pb-8">
                         <div className="ml-2 text-xs font-mono text-gray-500 rotate-90 origin-bottom-left whitespace-nowrap">Target: 70.00</div>
                       </div>
                    </div>

                    {/* Bar Group */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm mb-1 px-4">
                        <span className="text-gray-400">Raw ATAR</span>
                        <span className="text-white font-mono text-lg">65.00</span>
                      </div>
                      <div className="h-12 bg-white/5 rounded-xl relative overflow-hidden ring-1 ring-white/5 mx-4">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full bg-gradient-to-r from-electric-violet to-purple-500 rounded-l-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm mb-1 px-4">
                        <span className="text-volt-lime">Regional Bonus</span>
                        <span className="text-white font-mono text-lg">+5.00</span>
                      </div>
                      <div className="h-12 relative rounded-xl bg-white/5 overflow-hidden ring-1 ring-white/5 mx-4">
                         {/* Spacer - ends at 65% */}
                         <div className="absolute left-0 top-0 bottom-0 w-[65%] border-r border-white/5" />
                         
                         {/* Bonus Bar - starts at 65%, width 5% of total to reach 70% */}
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "5%" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-0 bottom-0 left-[65%] bg-volt-lime shadow-[0_0_30px_rgba(212,255,0,0.3)]"
                          />
                      </div>
                    </div>

                    {/* Result */}
                    <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-8 px-4">
                       <div className="flex items-baseline gap-4">
                          <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">Final Rank</div>
                          <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 1.5 }}
                             className="text-4xl font-bold text-white font-mono"
                          >
                             70.00
                          </motion.div>
                       </div>
                       
                       <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8 }}
                          className="h-10 px-4 flex items-center bg-volt-lime text-black rounded-full text-sm font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(212,255,0,0.4)]"
                       >
                          <Check className="w-4 h-4 mr-2" /> Eligible
                       </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* 4. The Gallery */}
      <Section id="gallery" nextId="footer">
        <motion.div 
          className="space-y-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={stagger}
        >
           <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Visual Proof</h2>
             <p className="text-gray-400 text-lg">From architectural diagrams to pixel-perfect production.</p>
           </motion.div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Information Architecture", sub: "The Logic", img: "/assets/images/monash-ia.png" },
               { title: "Low-Fidelity Wireframe", sub: "The Skeleton", img: "/assets/images/monash-wireframe.png" },
               { title: "High-Fidelity UI", sub: "The Polish", img: "/assets/images/monash-ui.png" }
             ].map((item, i) => (
               <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="group space-y-6"
               >
                  <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="px-6 py-3 rounded-full border border-white/30 text-white font-medium backdrop-blur-md hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2" onClick={() => window.open('https://www.figma.com', '_blank')}>
                        <ExternalLink className="w-4 h-4" />
                        Launch Interactive Demo
                      </div>
                      <div className="absolute top-full mt-2 text-center text-xs font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Experience the 'Stacking' animation live in Figma.
                      </div>
                    </div>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-xl mb-1 group-hover:text-volt-lime transition-colors">{item.title}</h4>
                     <p className="text-gray-400 text-sm">{item.sub}</p>
                  </div>
               </motion.div>
             ))}
           </div>

           {/* Interactive Demo Section - REMOVED */}
           
        </motion.div>
      </Section>

      <footer id="footer" className="py-24 border-t border-white/10 bg-black/20 min-h-[50vh] flex items-center justify-center">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
           <FooterContact title="Ready to transform your user flow?" />
           
           <p className="font-mono text-xs text-gray-600 mt-12">
             <a href="mailto:brian@defriction.design" className="hover:text-volt-lime transition-colors">
               brian@defriction.design
             </a>
             <br /><br />
             © 2026 defriction design. MELBOURNE / EUGENE.
           </p>
         </motion.div>
      </footer>
    </div>
  );
}