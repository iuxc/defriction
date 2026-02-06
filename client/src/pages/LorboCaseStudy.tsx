import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ChevronDown, ExternalLink, MessageSquare, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { FooterContact } from "@/components/FooterContact";
import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

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

export default function LorboCaseStudy() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > (window.innerHeight * 0.8);
      setIsPastHero(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
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
    <div className="bg-deep-basalt text-white selection:bg-purple-400 selection:text-black font-sans overflow-x-hidden">
      <Navigation forcedActive="work" />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
        
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-purple-500/30 bg-purple-500/10 mb-6 backdrop-blur-md">
                  <span className="font-mono text-sm tracking-widest text-purple-400 uppercase">
                    Startup
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tight">
                  From <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600">Blank Page</span> <br />
                  to <span className="text-white">Story.</span>
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-2xl text-gray-400 font-light max-w-lg leading-relaxed mb-10">
                  An AI journaling companion that turns your daily texts into a narrative — and your year into a book. Research, brand, product, and development. Built solo.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-2 flex flex-col sm:flex-row gap-4"
              >
                 <Button 
                    className="bg-white text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-violet-500 hover:text-white font-medium text-base px-6 py-4 h-auto rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105"
                    onClick={() => {
                      const element = document.getElementById('problem');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                 >
                    Understand the Problem
                    <ChevronDown className="ml-2 w-4 h-4" />
                 </Button>
                 <Button 
                    variant="ghost"
                    className="text-white hover:text-purple-400 hover:bg-transparent font-medium text-base gap-2 group rounded-full px-6 py-4 h-auto"
                    onClick={() => window.open('https://lorbo.app', '_blank')}
                 >
                    View the Site
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
                   <h3 className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-widest">Project</h3>
                   <p className="text-white font-medium">Lorbo</p>
                </div>
                <div>
                   <h3 className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-widest">Role</h3>
                   <p className="text-white font-medium">Research &bull; Brand &bull; Product &bull; Development</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
               className="relative lg:h-[600px] flex flex-col items-center justify-center"
            >
               <div className="relative w-full max-w-lg z-10 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-violet-400/30 blur-[60px] rounded-full opacity-60" />
                  
                  <img 
                    src="/images/lorbo-owl.webp" 
                    alt="Lorbo the owl" 
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[340px] h-auto z-0 pointer-events-none select-none drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                    style={{ top: '50%', marginTop: '-20px' }}
                  />

                  <div className="relative z-10">
                    <AbstractBrowser 
                      variant="sms-to-story" 
                      className="w-full shadow-2xl shadow-black/80 border-white/10 rotate-y-12 rotate-x-6 transform perspective-1000 transition-transform hover:rotate-0 duration-700"
                    />
                  </div>
                  
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-12 top-20 glass-panel p-4 rounded-xl border border-white/10 shadow-xl max-w-[200px]"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-mono text-purple-400">SMS → STORY</span>
                     </div>
                     <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full w-[90%] bg-purple-400" />
                     </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-8 bottom-32 glass-panel p-4 rounded-xl border border-white/10 shadow-xl"
                  >
                     <div className="text-sm font-mono text-gray-400 mb-1">CHAPTERS</div>
                     <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                       <BookOpen className="w-5 h-5 text-purple-400" /> 365
                     </div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
        <NextSectionArrow targetId="problem" />
      </section>

      {/* 1. The Problem */}
      <Section id="problem" className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
                  <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
                    The Problem
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">Journaling by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Willpower.</span></h2>
                <div className="text-base text-gray-400 font-light leading-relaxed max-w-3xl space-y-4">
                  <p>
                    Journaling apps assume the problem is access. Download this app. Open this page. Write something meaningful about your day.
                  </p>
                  <p>
                    But access was never the problem. The blank page is the problem. The cognitive load of deciding what's worth writing. The guilt of skipping a day, then a week, then abandoning the app entirely.
                  </p>
                  <p>
                    People download Day One, write for a few days, and stop. They try Apple Journal, get the prompts, and ignore them. They buy the Moleskine, fill three pages, and shelve it.
                  </p>
                  <p>
                    Meanwhile, those same people text friends all day about the mundane, funny, and meaningful moments of their lives. That content disappears into chat history. Unrecorded.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "The Pattern:", value: "The Pattern:", desc: "Download → Write → Skip → Abandon → Repeat", color: "text-purple-400" },
                  { label: "The Gap:", value: "The Gap:", desc: "No product captures how people already communicate and turns it into something worth keeping", color: "text-violet-400" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-start hover:bg-white/5 transition-colors"
                  >
                     <h4 className={`text-2xl font-display font-bold mb-2 ${stat.color}`}>{stat.value}</h4>
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
               <div className="relative flex flex-col items-center justify-center w-full gap-8">
                   <AbstractBrowser variant="app-abandon" className="w-full max-w-xl shadow-2xl h-[400px]" />
                   
                   <p className="text-xs text-gray-500 text-center max-w-md">
                     Downloaded, opened a few times, then forgotten. The graveyard of journaling apps on every home screen.
                   </p>

                   <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-4 top-1/4 glass-panel p-4 rounded-xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-xl max-w-[200px]"
                    >
                       <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                          <span className="text-xs font-mono text-purple-400 uppercase">Abandoned</span>
                       </div>
                       <div className="text-xs text-white font-medium">Last opened 47 days ago.</div>
                    </motion.div>
               </div>
            </motion.div>
        </div>
      </Section>

      {/* 2. Discovery */}
      <Section id="discovery" className="border-t border-white/5 bg-black/20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-start"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
              <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
                What I Found
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">Validating the Market.</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">The StoryWorth Signal</h3>
                <p className="text-base text-gray-400 font-light leading-relaxed">
                  StoryWorth proved that people will pay for "life → book." Their model works — prompt-based questions over a year, compiled into a printed book. But it's passive. No character. No narrative transformation. Just prompts and answers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">The Fantasy Moment</h3>
                <p className="text-base text-gray-400 font-light leading-relaxed">
                  BookTok has driven a cultural surge in fantasy fiction. Cozy fantasy, romantasy, Sarah J. Maas — the audience is large, engaged, and spending. Women 25–45 who read fantasy also overlap heavily with the journaling/wellness market. A niche with disposable income and proven buying behavior.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">The Economics</h3>
                <p className="text-base text-gray-400 font-light leading-relaxed">
                  Unit economics had to work at a $199/year price point. That meant controlling SMS costs (the biggest variable), using a dual-LLM architecture (Haiku for conversation, Sonnet for narrative), and deferring book production until month 10–11 to validate retention first.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-4">
              {[
                { label: "TAM:", value: "AI journaling + memory preservation + AI companionship" },
                { label: "Primary audience:", value: "Women 25–45, fantasy readers, lapsed journalers" },
                { label: "Competitive white space:", value: "No product combines SMS input + AI companion + narrative transformation + physical book" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-widest">{item.label}</div>
                  <p className="text-white font-medium leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full" />
              <AbstractBrowser variant="venn-market" className="shadow-2xl shadow-purple-500/10 h-[280px]" />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* 3. The Insight */}
      <Section id="insight" className="border-t border-white/5">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-center"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
              <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
                The Reframe
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Another App.</span></h2>
            <div className="text-base text-gray-400 font-light leading-relaxed space-y-4 mb-8">
              <p>
                The last thing anyone needs is another app demanding attention. Another icon. Another notification. Another thing to remember to open.
              </p>
              <p>
                Lorbo isn't an app. It's a text from a friend.
              </p>
              <p>
                Every night, Lorbo texts you. You tell him about your day — the weird, the wonderful, the completely unremarkable. He listens. He asks questions. He pulls out the details you'd otherwise forget.
              </p>
              <p>
                Then, while you sleep, a separate system finds the story in your words and writes your journal entry. You wake up to a chapter, not a chore.
              </p>
            </div>

            <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6">
              <p className="text-white italic leading-relaxed">
                "We don't need more apps. We need things that integrate with our current workflows and life. SMS is where users already are, every day."
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative">
             <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full" />
             <AbstractBrowser variant="app-vs-sms" className="shadow-2xl shadow-purple-500/10 h-[400px]" />
          </motion.div>
        </motion.div>
      </Section>

      {/* 4. The Character / System */}
      <Section id="system" className="border-t border-white/5 bg-black/20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-start"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
              <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
                The Character
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">A Companion, Not a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Chatbot.</span></h2>
            <div className="text-base text-gray-400 font-light leading-relaxed space-y-4 mb-10">
              <p>
                If I'm going to tell something about my life every day, it has to feel like it understands me. Generic AI with no personality — "Pulling calendar events..." — isn't something I want to talk to.
              </p>
              <p>
                Lorbo is a small, quirky, owl-like creature with an unfinished left wing. He started as part of a story, but was pulled from it before he was complete. Since he has no story of his own, he helps other people write theirs.
              </p>
              <p>
                He's perceptive, warm when it matters, and never speaks in fantasy clichés. No "huzzah." No "well met." The fantasy comes from perspective, not vocabulary.
              </p>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4">Separation of Powers</h3>
            <div className="text-base text-gray-400 font-light leading-relaxed space-y-4 mb-10">
              <p>
                Lorbo captures. A separate system crafts.
              </p>
              <p>
                Lorbo — powered by Claude Haiku — handles the conversation. He asks questions, pulls out details, acknowledges moments. But he never writes a journal entry.
              </p>
              <p>
                A separate system — powered by Claude Sonnet — reads the conversation and writes the narrative. But it can never update the factbook.
              </p>
              <p>
                Both systems check every response against a database of characters, settings, and events from the user's life. No message goes out without fact-checking. Because hallucination is subscription death. The moment Lorbo forgets your dog's name, the spell breaks.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-4">
              {[
                { label: "Lorbo (Haiku):", value: "Conversation, questions, engagement", color: "text-purple-400" },
                { label: "Narrative Engine (Sonnet):", value: "Journal entries, book compilation", color: "text-blue-400" },
                { label: "Factbook:", value: "Characters, settings, events — the source of truth", color: "text-amber-400" },
                { label: "Rule:", value: "Neither system can do the other's job", color: "text-red-400" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className={`text-sm font-mono ${item.color} mb-2 uppercase tracking-widest`}>{item.label}</div>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full" />
              <AbstractBrowser variant="dual-system" className="shadow-2xl shadow-purple-500/10 h-[350px]" />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* 5. Interactive Proof - From Text to Story */}
      <Section id="proof" className="border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true, margin: "-10% 0px" }}
               variants={fadeInUp}
               className="lg:col-span-5"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-8 backdrop-blur-md cursor-default">
                  <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
                    The Proof
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">From Text to Story.</h3>
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  Every night, a conversation. Every morning, a chapter.
                </p>
            </motion.div>
              
            <motion.div 
               className="lg:col-span-7 relative"
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true, margin: "-10% 0px" }}
               variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-purple-400/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="bg-[#0f1219] rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                  <div className="flex justify-between font-mono text-sm text-gray-500 mb-8 border-b border-white/5 pb-4">
                    <span>LORBO_ENGINE</span>
                    <span className="text-purple-400">● ACTIVE</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* SMS Side */}
                    <div>
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Evening Conversation</div>
                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                            <p className="text-sm text-gray-300">Hey! How was your day? Anything weird or wonderful happen?</p>
                            <p className="text-[10px] text-purple-400/60 mt-1 font-mono">LORBO</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-purple-500/15 border border-purple-500/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                            <p className="text-sm text-gray-300">My dog stole a whole baguette off the counter and ran into the yard with it</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                            <p className="text-sm text-gray-300">Classic Biscuit move. Did you get any of it back or was that his dinner now?</p>
                            <p className="text-[10px] text-purple-400/60 mt-1 font-mono">LORBO</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-purple-500/15 border border-purple-500/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                            <p className="text-sm text-gray-300">Oh it was gone. Just crumbs and pride.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Journal Side */}
                    <div className="border-l border-white/5 pl-8">
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Morning Journal</div>
                      <div className="space-y-3">
                        <p className="text-sm text-gray-300 leading-relaxed italic">
                          The Great Baguette Heist of Tuesday happened at approximately 6:14 PM, though the exact timeline remains disputed. Biscuit — a golden retriever with zero impulse control and an advanced degree in counter-surfing — executed the theft with military precision.
                        </p>
                        <p className="text-sm text-gray-300/60 leading-relaxed italic">
                          The baguette, which had been intended for dinner, was last seen disappearing through the back door at speed. Recovery efforts yielded only crumbs and a very satisfied dog.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs font-mono text-gray-500 mt-4 text-left w-full px-8">
                  A casual text becomes a narrative chapter — without the user writing a single journal entry.
                </p>
            </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="py-32 bg-deep-basalt border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -left-[10%] top-1/2 -translate-y-1/2 w-[600px] backdrop-blur-sm z-0"
            >
               <AbstractBrowser variant="sms-journal" theme="dark" className="w-full h-[400px] border-white/20 bg-white/5 backdrop-blur-md shadow-2xl opacity-50" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[600px] backdrop-blur-sm z-0"
            >
               <AbstractBrowser variant="sms-to-story" theme="dark" className="w-full h-[400px] border-white/20 bg-white/5 backdrop-blur-md shadow-2xl opacity-50" />
            </motion.div>
            
             <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-1/2 -translate-x-1/2 -top-[40%] w-[500px] backdrop-blur-sm z-0"
            >
               <AbstractBrowser variant="dual-system" theme="dark" className="w-full h-[300px] border-white/20 bg-white/5 backdrop-blur-md shadow-2xl opacity-30" />
            </motion.div>
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
             <FooterContact 
                 title={
                   <span>
                     Let's write the <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">story</span>.
                   </span>
                 } 
                 stickyVisible={isPastHero}
                 className="max-w-4xl"
                 withGradientShadow={true}
                 disableExpansion={true}
                 glowColor="purple"
                 removeTextShadow={true}
               />
             <a
               href="https://calendly.com"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium mt-6"
             >
               Or book a call directly
               <ExternalLink className="w-4 h-4" />
             </a>
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
           <p className="font-mono text-sm text-gray-600">
             <a href="mailto:brian@defriction.design" className="hover:text-purple-400 transition-colors">
               brian@defriction.design
             </a>
           </p>
           <p className="font-mono text-sm text-gray-600 mt-2">
             © 2026 defriction design. MELBOURNE / EUGENE.
           </p>
         </motion.div>
      </footer>
    </div>
  );
}
