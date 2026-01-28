import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Check, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { FooterContact } from "@/components/FooterContact";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";
import { FrictionLogModal } from "@/components/FrictionLogModal";
import { FrictionLogModalB } from "@/components/FrictionLogModalB";

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
  <section id={id} className={`relative flex flex-col justify-center py-28 ${className}`}>
    <div className="container mx-auto px-4 relative z-10">
      {children}
    </div>
  </section>
);

export default function MonashCaseStudy() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [showFrictionModal, setShowFrictionModal] = useState(false);
  const [showFrictionModalB, setShowFrictionModalB] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
        // Fallback: If element detection fails or is unreliable, rely on window height.
        // If we are scrolled more than 80vh down, show it.
        const scrolled = window.scrollY > (window.innerHeight * 0.8);
        setIsPastHero(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="bg-deep-basalt text-white selection:bg-cyan-400 selection:text-black font-sans overflow-x-hidden">
      <Navigation forcedActive="work" />
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-electric-violet/10 rounded-full blur-[150px] animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/#work">
            <a className="inline-flex items-center text-gray-500 hover:text-white mb-12 font-medium text-sm transition-all group px-4 py-2 rounded-full hover:border hover:border-white/20">
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Gatekeeper</span> <br />
                  to <span className="text-white">Concierge.</span>
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-2xl text-gray-400 font-light max-w-lg leading-relaxed mb-10">
                  A uniquely Australian concept for unifying the admissions journey for 40,000+ applicants.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-2 flex flex-col sm:flex-row gap-4"
              >
                 <Button 
                    className="bg-white text-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-black font-medium text-base px-6 py-4 h-auto rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105"
                    onClick={() => {
                      const element = document.getElementById('friction');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                 >
                    Understand the Problem
                    <ChevronDown className="ml-2 w-4 h-4" />
                 </Button>
                 <Button 
                    variant="ghost"
                    className="text-white hover:text-cyan-400 hover:bg-transparent font-medium text-base gap-2 group rounded-full px-6 py-4 h-auto"
                    onClick={() => setLocation('/monash/prototype/hifi')}
                 >
                    Launch Demo
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                 </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-12 mb-10 pt-8 mt-8 border-t border-white/10"
              >
                <div>
                   <h3 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Client</h3>
                   <a href="https://monash.edu" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-cyan-400 transition-colors">Monash University</a>
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 blur-[60px] rounded-full opacity-60" />
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
                        <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-cyan-400">ELIGIBLE</span>
                     </div>
                     <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full w-[85%] bg-cyan-400" />
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

            </motion.div>
          </div>
        </div>
        <NextSectionArrow targetId="friction" />
      </section>
      {/* 1. The Friction (The Problem) */}
      <Section id="friction" className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
                  <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                    01. The Problem (Current State)
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">Admissions by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Administrative Burden.</span></h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                  Currently, applying to university isn't just about grades; it's about navigating a maze. Students are forced to self-diagnose their eligibility <a href="https://www.monash.edu/__data/assets/pdf_file/0010/2556235/MU-22-AS194-Pathways-Overview-Table-2022.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 underline decoration-white/20 hover:decoration-cyan-400 transition-all">using static PDFs</a>, <a href="https://connect.monash.edu/s/article/FAQ-2062" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 underline decoration-white/20 hover:decoration-cyan-400 transition-all">hidden 'Adjustment Factor' spreadsheets</a>, and confusing academic acronyms. The system acts as a Gatekeeper, checking IDs at the door, rather than a Concierge helping users find their way.
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
               <div className="relative flex items-center justify-center w-full">
                   <AbstractBrowser variant="infinite-pdf" className="w-full max-w-xl shadow-2xl h-[400px]" />
                   
                   {/* Floating Alert - Positioned on the AbstractBrowser */}
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
               </div>
            </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start pt-12 border-t border-white/5">
              <motion.div 
                variants={fadeInUp} 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-10% 0px" }}
                className="space-y-8"
              >
                <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Friction Log Process</h3>
                    <p className="text-gray-400 leading-relaxed">To understand the true digital experience for non-traditional applicants, I conducted a behavioral audit using two distinct student personas. This process involves a "first-person" walkthrough of the Monash web ecosystem to identify where users lose momentum or encounter barriers.</p>
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-white font-bold mb-2 text-lg">Persona Emulation</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">I approached the website from the specific perspective of a TAFE Graduate and a Year 12 Student (Low ATAR), navigating as a user without prior knowledge of the university’s internal hierarchy.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-2 text-lg">Step-by-Step Documentation</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Every interaction—from initial homepage searches to external application portals—was logged in real-time to capture the authentic student experience.
                        </p>
                    </div>


                </div>
              </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="flex flex-col gap-8"
            >
               {/* Friction Log Links - New Design */}
               <div className="grid gap-4">
                   <div className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Friction Log Files</div>
                   
                   {/* User A Card */}
                   <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       onClick={() => setShowFrictionModal(true)}
                       className="text-left group relative overflow-hidden rounded-2xl bg-[#0B0F19] border border-white/10 p-6 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                   >
                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="relative z-10">
                           <div className="flex items-center justify-between mb-2">
                               <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">User A: TAFE Graduate</h3>
                               <FileText className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
                           </div>
                           <p className="text-sm text-gray-400 leading-relaxed">
                               Encountered broken pathways, 0 credit results, and conflicting advice between departments.
                           </p>
                       </div>
                   </motion.button>

                   {/* User B Card */}
                   <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       onClick={() => setShowFrictionModalB(true)}
                       className="text-left group relative overflow-hidden rounded-2xl bg-[#0B0F19] border border-white/10 p-6 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                   >
                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="relative z-10">
                           <div className="flex items-center justify-between mb-2">
                               <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">User B: Year 12 Pathway</h3>
                               <FileText className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
                           </div>
                           <p className="text-sm text-gray-400 leading-relaxed">
                               Struggled with "dropdown hell", hidden adjustment factors, and ATAR-centric navigation.
                           </p>
                       </div>
                   </motion.button>
               </div>
            </motion.div>
        </div>
      </Section>
      {/* 2. The Insight (The Strategy) */}
      <Section id="insight" className="border-t border-white/5 bg-black/20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-center"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
              <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                02. The Strategic Insight
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">The Shift to Equity.</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              The <a href="https://www.education.gov.au/australian-universities-accord" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 underline decoration-white/20 hover:decoration-cyan-400 transition-all">2024 Universities Accord</a> mandates a shift from a market-driven logic to an equity-driven mandate. I couldn't just reskin the page; I had to expose the backend logic to the frontend user. I pivoted the entire architecture from asking <span className="text-white font-medium">"Am I eligible?"</span> to asking <span className="text-white font-medium">"Who are you?"</span>—routing Year 12s, TAFE grads, and Mature Age students down distinct, personalized paths.
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
      <Section id="solution" className="border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true, margin: "-10% 0px" }}
               variants={fadeInUp}
               className="lg:col-span-5"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
                  <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                    03. The Proposed Solution
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">Visualizing the Invisible.</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  I designed a dynamic component that visualizes the "hidden math" of admissions. Instead of a static table, the "stacking calculator" shows students exactly how close they are.
                </p>
                
                <Button 
                  className="bg-white text-black hover:bg-cyan-400 hover:text-black font-medium text-base px-6 py-4 h-auto rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:scale-105"
                  onClick={() => setLocation('/monash/prototype/hifi')}
                >
                  Try It Out
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
            </motion.div>
              
            <motion.div 
               className="lg:col-span-7 relative"
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true, margin: "-10% 0px" }}
               variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />
                
                {/* Interactive Mockup */}
                <div className="bg-[#0f1219] rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                  <div className="flex justify-between font-mono text-xs text-gray-500 mb-10 border-b border-white/5 pb-4">
                    <span>PATHWAY_ENGINE</span>
                    <span className="text-cyan-400">● ACTIVE</span>
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
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-l-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm mb-1 px-4">
                        <span className="text-cyan-400">Regional Bonus</span>
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
                            className="absolute top-0 bottom-0 left-[65%] bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
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
                          className="h-10 px-4 flex items-center bg-cyan-400 text-black rounded-full text-sm font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                       >
                          <Check className="w-4 h-4 mr-2" /> Eligible
                       </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <p className="text-xs font-mono text-gray-500 mt-4 text-left w-full px-8">
                  The stacking calculator visualizes eligibility adjustments based on postcode, revealing a student's true Selection Rank beyond their raw ATAR.
                </p>
            </motion.div>
        </div>
      </Section>
      {/* 4. The Gallery */}
      <Section id="gallery" className="border-t border-white/5 bg-black/20">
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
             {/* 1. Information Architecture */}
             <motion.div variants={fadeInUp} className="group space-y-6">
                <div 
                  className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl cursor-pointer"
                  onClick={() => setLocation('/monash/prototype/docs')}
                >
                  <AbstractBrowser variant="ia-map" theme="light" className="w-full h-full border-0 bg-transparent" />
                </div>
                <div className="flex items-end justify-between">
                   <div>
                      <h4 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">Information Architecture</h4>
                      <p className="text-gray-400 text-sm">The Logic</p>
                   </div>
                   <Button 
                      variant="outline" 
                      className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors text-xs h-8 px-4"
                      onClick={() => setLocation('/monash/prototype/docs')}
                    >
                      See IA <ExternalLink className="ml-2 w-3 h-3" />
                   </Button>
                </div>
             </motion.div>

             {/* 2. Low-Fidelity Wireframe */}
             <motion.div variants={fadeInUp} className="group space-y-6">
                <div 
                  className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl cursor-pointer"
                  onClick={() => setLocation('/monash/prototype')}
                >
                   <AbstractBrowser variant="wireframe" theme="light" className="w-full h-full border-0 bg-transparent" />
                </div>
                <div className="flex items-end justify-between">
                   <div>
                      <h4 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">Low-Fidelity Wireframe</h4>
                      <p className="text-gray-400 text-sm">The Skeleton</p>
                   </div>
                   <Button 
                      variant="outline" 
                      className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors text-xs h-8 px-4"
                      onClick={() => setLocation('/monash/prototype')}
                    >
                      See Wireframe <ExternalLink className="ml-2 w-3 h-3" />
                   </Button>
                </div>
             </motion.div>

             {/* 3. High-Fidelity UI */}
             <motion.div variants={fadeInUp} className="group space-y-6">
                <div 
                  className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-white/10 relative group-hover:border-white/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex items-center justify-center p-8 cursor-pointer"
                  onClick={() => setLocation('/monash/prototype/hifi')}
                >
                   <img 
                     src="/assets/images/monash-shield.png" 
                     alt="Monash University Shield" 
                     className="w-full h-auto object-contain max-w-[240px]"
                   />
                </div>
                <div className="flex items-end justify-between">
                   <div>
                      <h4 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">High-Fidelity UI</h4>
                      <p className="text-gray-400 text-sm">The Polish</p>
                   </div>
                   <Button 
                      variant="outline" 
                      className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors text-xs h-8 px-4"
                      onClick={() => setLocation('/monash/prototype/hifi')}
                    >
                      See Demo <ExternalLink className="ml-2 w-3 h-3" />
                   </Button>
                </div>
             </motion.div>
           </div>

           {/* Interactive Demo Section - REMOVED */}
           
        </motion.div>
      </Section>
      {/* CTA Section */}
      <div className="py-32 bg-deep-basalt border-t border-white/5">
        <div className="container mx-auto px-4 flex justify-center">
             <FooterContact 
                 title={
                   <span>
                     Let's remove the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">friction</span>.
                   </span>
                 } 
                 stickyVisible={isPastHero}
                 className="max-w-4xl"
                 withGradientShadow={true}
                 disableExpansion={true}
                 glowColor="orange"
                 removeTextShadow={true}
               />
        </div>
      </div>
      <footer id="footer" className="py-8 bg-black border-t border-white/10">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-left"
          >
           <p className="font-mono text-xs text-gray-600">
             <a href="mailto:brian@defriction.design" className="hover:text-cyan-400 transition-colors">
               brian@defriction.design
             </a>
           </p>
           <p className="font-mono text-xs text-gray-600 mt-2">
             © 2026 defriction design. MELBOURNE / EUGENE.
           </p>
         </motion.div>
      </footer>
      <FrictionLogModal open={showFrictionModal} onOpenChange={setShowFrictionModal} />
      <FrictionLogModalB open={showFrictionModalB} onOpenChange={setShowFrictionModalB} />
    </div>
  );
}