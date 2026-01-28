import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Send, ArrowRight, X, Undo, Info, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterContactProps {
  title?: React.ReactNode;
  className?: string;
  stickyClassName?: string;
  stickyVisible?: boolean;
  backLink?: string;
  alwaysSticky?: boolean;
  withGradientShadow?: boolean;
  monashSwitcher?: boolean;
}

export function FooterContact({ title = "Ready to start?", className, stickyClassName, stickyVisible = true, backLink, alwaysSticky = false, withGradientShadow = false, monashSwitcher = false }: FooterContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const showSticky = alwaysSticky || (!isInView && stickyVisible);

  const onSubmit = (data: any) => {
    toast({
      title: "Transmission Received",
      description: "I'll analyze the signal and respond within 24 hours.",
    });
    // Optional: Close after submission
    // setIsOpen(false);
    reset();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
          <>
              {/* Backdrop */}
              <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              />

              {/* Modal Card */}
              <motion.div
                  layoutId="contact-card"
                  className="fixed bottom-8 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-3xl z-[100] rounded-[2rem] bg-deep-basalt border border-white/10 shadow-2xl overflow-hidden"
                  transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                  }}
              >
                  {/* Gradient Border */}
                  <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet -z-10 pointer-events-none"
                  />

                  <div className="bg-deep-basalt/95 backdrop-blur-xl relative h-full">
                      <button
                          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white z-20 rounded-full hover:bg-white/10 transition-colors"
                      >
                          <X className="w-6 h-6" />
                      </button>

                      <div className="p-8 md:p-12 text-left">
                          <motion.h3 
                              layoutId="title" 
                              className="text-2xl font-display font-bold text-white mb-8 hidden" 
                          >
                              {title}
                          </motion.h3>

                          <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                          >
                              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                      <div className="space-y-2">
                                          <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Name</label>
                                          <Input 
                                              {...register("name")} 
                                              className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10" 
                                              placeholder="Enter your name" 
                                          />
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Email</label>
                                          <Input 
                                              {...register("email")} 
                                              className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10" 
                                              placeholder="name@company.com" 
                                          />
                                      </div>
                                  </div>

                                  <div className="space-y-2">
                                      <label className="text-xs font-mono text-ion-cyan uppercase tracking-widest font-bold bg-ion-cyan/5 px-2 py-1 inline-block rounded-md">Project Budget (AUD)</label>
                                      <Select onValueChange={(value) => console.log(value)}>
                                          <SelectTrigger className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white transition-all focus:bg-white/10">
                                              <SelectValue placeholder="Select engagement level..." />
                                          </SelectTrigger>
                                          <SelectContent className="bg-deep-basalt border-white/10 text-white rounded-xl shadow-xl z-[110]">
                                              <SelectItem value="sprint">Sprint ($5k+ AUD)</SelectItem>
                                              <SelectItem value="project">Project ($15k+ AUD)</SelectItem>
                                              <SelectItem value="retainer">Retainer / Strategic Audit</SelectItem>
                                          </SelectContent>
                                      </Select>
                                  </div>

                                  <div className="space-y-2">
                                      <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">The Brief</label>
                                      <Textarea 
                                          {...register("message")} 
                                          className="bg-white/5 border-white/10 rounded-lg min-h-[150px] focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10 resize-none" 
                                          placeholder="What challenge are you trying to solve?" 
                                      />
                                  </div>

                                  <motion.div layoutId="button-container" className="w-full">
                                      <Button 
                                          type="submit" 
                                          className="w-full bg-white text-black hover:bg-volt-lime hover:text-black font-bold h-14 rounded-full text-lg transition-all duration-300 shadow-xl shadow-white/5"
                                      >
                                          Start the Conversation <Send className="ml-2 w-4 h-4" />
                                      </Button>
                                  </motion.div>
                              </form>
                          </motion.div>
                      </div>
                  </div>
              </motion.div>
          </>
      )}
    </AnimatePresence>
  );

  // Info Modal Content - Refactored to be attached to UI
  // const infoModalContent = ... (removed)

  return (
    <div ref={containerRef} className={cn("w-full px-4 relative z-10", className)}>
       {/* Billboard Button / Sticky Nav */}
       <AnimatePresence>
        {!isOpen && (isInView || showSticky) && (
            <>
              {/* Gradient Shadow Overlay for Sticky State */}
              {showSticky && withGradientShadow && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent pointer-events-none z-[75]"
                />
              )}

              {/* Info Modal Attached to Friction UI */}
              <AnimatePresence>
                {showInfo && (
                  <div className={cn(
                    // Match the card's positioning exactly but with higher z-index and pointer-events-none for container
                    showSticky 
                      ? cn("fixed bottom-32 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-4xl z-[90]", stickyClassName ? "" : "") 
                      : "absolute bottom-0 left-4 right-4 mx-auto max-w-3xl z-[90]",
                    "pointer-events-none flex flex-col items-end justify-end"
                  )}>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className={cn(
                        "pointer-events-auto", // Re-enable clicks
                        "absolute bottom-full right-0 mb-4", // Position above and right
                        "w-full max-w-md p-6 rounded-2xl",
                        "bg-[#0B0F19] border border-white/20 shadow-2xl", // Darker style
                        "text-left"
                      )}
                    >
                      {/* Gradient Shine */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                              <Info className="w-4 h-4 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-white">What You Need To Know</h3>
                          </div>
                          <button 
                            onClick={() => setShowInfo(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="text-gray-300 leading-relaxed text-sm space-y-3 font-light">
                          <p>
                            University admissions shouldn’t be a maze. This prototype transforms the applicant journey from a <strong className="text-white font-medium">Gatekeeper</strong> (static PDFs) to a <strong className="text-white font-medium">Concierge</strong> (dynamic logic).
                          </p>
                          <p>
                            By visualizing 'hidden math' like regional adjustment factors, I turn confusing cutoff ranks into clear, personalized pathways—directly supporting the 2024 Universities Accord mandate for equity and accessibility.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              <motion.div
                layoutId="contact-card"
                className={cn(
                  "rounded-[2rem] glass-panel border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer",
                  // When NOT in view (scrolling), fix to bottom
                  showSticky 
                    ? cn("fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-4xl z-[80] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-deep-basalt/90 block", stickyClassName)
                    : "mx-auto max-w-3xl relative"
                )}
                // Blue glow when sticky
                style={showSticky ? { boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" } : {}}
                onClick={() => setIsOpen(true)}
                initial={showSticky ? { y: 100, opacity: 0 } : { opacity: 1 }}
                animate={showSticky ? { y: 0, opacity: 1 } : { opacity: 1 }}
                exit={showSticky ? { y: 100, opacity: 0 } : { opacity: 0 }}
                whileHover={!showSticky ? {} : { scale: 1.02 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            >
                <div className="absolute inset-0 bg-volt-lime/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={cn(
                  "text-center pointer-events-none transition-all duration-500 flex items-center justify-between gap-8",
                  showSticky ? "p-4 px-6 md:px-8" : "p-12 flex-col"
                )}>
                    <motion.div 
                      layoutId="title" 
                      className={cn(
                        "font-display font-bold text-white leading-tight text-left flex items-center gap-4",
                        showSticky ? "text-xl md:text-2xl mb-0" : "text-4xl md:text-5xl mb-8 text-center justify-center"
                      )}
                    >
                        {title}
                        
                        {/* Monash Prototype Switcher */}
                        {monashSwitcher && (
                          <div className="relative pointer-events-auto">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSwitcherOpen(!switcherOpen);
                                setShowInfo(false);
                              }}
                              className={cn(
                                "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                                "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
                                "hover:bg-white/20 hover:scale-105 active:scale-95",
                                switcherOpen ? "bg-white/20 rotate-180" : ""
                              )}
                            >
                              <ChevronDown className="w-4 h-4 text-white" />
                            </button>

                            <AnimatePresence>
                              {switcherOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  className="absolute bottom-full left-0 mb-3 w-64 p-2 rounded-xl bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 shadow-2xl z-[100] overflow-hidden"
                                >
                                  <div className="space-y-1">
                                    <a 
                                      href="/monash/prototype/hifi"
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/10 transition-colors group"
                                    >
                                      <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">High-Fidelity UI</span>
                                      <span className="text-gray-500 text-xs">Polished Interface</span>
                                    </a>
                                    <a 
                                      href="/monash/prototype"
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/10 transition-colors group"
                                    >
                                      <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">Low-Fidelity Wireframe</span>
                                      <span className="text-gray-500 text-xs">Structure & Layout</span>
                                    </a>
                                    <a 
                                      href="/monash/prototype/docs"
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/10 transition-colors group"
                                    >
                                      <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">Information Architecture</span>
                                      <span className="text-gray-500 text-xs">Documentation</span>
                                    </a>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                    </motion.div>

                    <motion.div layoutId="button-container" className={cn(showSticky ? "shrink-0 flex items-center gap-3" : "")}>
                        <Button 
                            className={cn(
                              "font-medium rounded-full transition-all duration-300 shadow-xl pointer-events-auto",
                              // Hero button styles applied here
                              showSticky 
                                ? "text-sm px-6 py-4 h-auto bg-gradient-to-r from-orange-400 to-red-500 text-black hover:bg-none hover:bg-white hover:text-black hover:scale-105" 
                                : "bg-white text-black text-base px-6 py-4 h-auto hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-black hover:scale-105"
                            )}
                        >
                            Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>

                        {showSticky && backLink && (
                          <>
                            <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowInfo(!showInfo);
                                }}
                                className="h-[52px] w-[52px] rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center pointer-events-auto group overflow-hidden transition-all duration-300 hover:w-[110px]"
                            >
                                <div className="flex items-center justify-center w-full px-4">
                                  <Info className="w-5 h-5 text-white shrink-0 group-hover:mr-2 transition-all" />
                                  <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto text-white whitespace-nowrap text-sm font-medium transition-all duration-300">
                                      Info
                                  </span>
                                </div>
                            </motion.button>

                            <motion.a
                                href={backLink}
                                onClick={(e) => e.stopPropagation()}
                                className="h-[52px] w-[52px] rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center pointer-events-auto group overflow-hidden transition-all duration-300 hover:w-[130px]"
                            >
                                <div className="flex items-center justify-center w-full px-4">
                                    <Undo className="w-5 h-5 text-white shrink-0 group-hover:mr-2 transition-all" />
                                    <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto text-white whitespace-nowrap text-sm font-medium transition-all duration-300">
                                        Go Back
                                    </span>
                                </div>
                            </motion.a>
                          </>
                        )}
                    </motion.div>
                </div>
            </motion.div>
            </>
        )}
      </AnimatePresence>

      {/* Expanded Form Overlay (Portal) */}
      {mounted && createPortal(modalContent, document.body)}

      {/* Info Modal Overlay (Portal) - REMOVED, now attached to Friction UI */}
      
      {/* Placeholder to hold space when closed/sticky */}
      <div className={cn("w-full transition-all duration-300", isOpen ? "invisible h-[200px]" : isInView ? "invisible h-0" : "h-[300px] invisible")} />
    </div>
  );
}