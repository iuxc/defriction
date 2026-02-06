import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface AbstractBrowserProps {
  variant?: "dashboard" | "landing" | "mobile" | "data" | "kanban" | "code-split" | "invoice" | "timezone" | "brain" | "profile" | "infinite-pdf" | "terminal" | "ia-map" | "wireframe" | "sms-journal" | "sms-to-story" | "app-abandon" | "venn-market" | "app-vs-sms" | "dual-system";
  className?: string;
  theme?: "dark" | "light";
}

export function AbstractBrowser({ variant = "landing", className = "", theme = "dark" }: AbstractBrowserProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden border ${theme === "light" ? "border-gray-200 bg-gray-50/50" : "border-white/10 bg-black/40"} backdrop-blur-sm ${className}`}>
      {/* Browser Chrome */}
      <div className={`h-8 ${theme === "light" ? "bg-gray-100 border-gray-200" : "bg-white/5 border-white/5"} border-b flex items-center px-3 gap-2`}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
        <div className="flex-1 ml-2">
          <div className={`h-4 ${theme === "light" ? "bg-white" : "bg-white/5"} rounded-full w-2/3 max-w-[200px]`} />
        </div>
      </div>

      {/* Viewport Content */}
      <div className={`p-4 relative min-h-[160px] ${theme === "light" ? "bg-white" : "bg-gradient-to-br from-white/[0.02] to-transparent"} overflow-hidden`}>
        <Content variant={variant} theme={theme} />
      </div>
    </div>
  );
}

function Content({ variant, theme }: { variant: AbstractBrowserProps["variant"], theme: AbstractBrowserProps["theme"] }) {
  const lineClass = theme === "light" ? "bg-gray-200 rounded-full" : "bg-white/10 rounded-full";
  const blockClass = theme === "light" ? "bg-gray-100 rounded border border-gray-200" : "bg-white/5 rounded border border-white/5";
  const borderColor = theme === "light" ? "border-gray-200" : "border-white/5";
  const connectorColor = theme === "light" ? "bg-gray-200" : "bg-white/10";


  switch (variant) {
    case "infinite-pdf":
      return (
        <div className="w-full h-[300px] bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden flex flex-col items-center">
            {/* Document Header */}
            <div className={`w-1/2 h-4 ${blockClass} mb-8`} />
            
            {/* Rows */}
            <div className="w-full space-y-3 relative">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="flex gap-4 items-center opacity-80">
                         <div className={`w-8 h-2 ${lineClass}`} />
                         <div className={`flex-1 h-2 ${lineClass}`} />
                         <div className={`w-12 h-2 ${lineClass}`} />
                    </div>
                ))}
                {/* Fade out at bottom for infinity effect */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#000] to-transparent pointer-events-none" />
            </div>
        </div>
      );

    case "terminal":
        return (
            <div className="font-mono text-xs space-y-2 p-2">
                <motion.div 
                  className="flex gap-2 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "linear", delay: 0.2 }}
                >
                    <span className="text-pink-500">const</span>
                    <span className="text-blue-400">applicant</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-300">await</span>
                    <span className="text-blue-400">db</span>
                    <span className="text-white">.</span>
                    <span className="text-green-400">fetch</span>
                    <span className="text-white">(</span>
                    <span className="text-orange-300">user.id</span>
                    <span className="text-white">);</span>
                </motion.div>

                <motion.div 
                  className="flex gap-2 pl-4 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "linear", delay: 1.2 }}
                >
                    <span className="text-pink-500">if</span>
                    <span className="text-white">(</span>
                    <span className="text-blue-400">applicant</span>
                    <span className="text-white">.</span>
                    <span className="text-blue-400">hasBonus</span>
                    <span className="text-white">)</span>
                    <span className="text-white">{`{`}</span>
                </motion.div>

                <motion.div 
                  className="flex gap-2 pl-8 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "linear", delay: 2.0 }}
                >
                     <span className="text-blue-400">score</span>
                     <span className="text-white">+=</span>
                     <span className="text-purple-400">5.0</span>
                     <span className="text-white">;</span>
                </motion.div>

                <motion.div 
                  className="flex gap-2 pl-4 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, ease: "linear", delay: 2.5 }}
                >
                    <span className="text-white">{`}`}</span>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 2.8 }}
                   className="flex gap-2 mt-4"
                >
                    <span className="text-green-400">➜</span>
                    <span className="text-white">Processing...</span>
                    <span className="w-2 h-4 bg-white animate-pulse" />
                </motion.div>
                
                 <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 0.5 }}
                   viewport={{ once: true }}
                   transition={{ delay: 3.2 }}
                   className="space-y-1 mt-6"
                 >
                    <div className="flex gap-2"><span className="text-gray-500">// Calculating adjustment factors</span></div>
                    <div className="flex gap-2"><span className="text-gray-500">// Checking regional status</span></div>
                    <div className="flex gap-2"><span className="text-gray-500">// Validating prerequisites</span></div>
                 </motion.div>
            </div>
        );

    case "dashboard":
      return (
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className={`w-16 h-16 ${blockClass}`} />
            <div className="flex-1 space-y-2">
              <div className={`h-4 w-1/3 ${lineClass}`} />
              <div className={`h-24 ${blockClass}`} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className={`h-20 ${blockClass}`} />
            <div className={`h-20 ${blockClass}`} />
            <div className={`h-20 ${blockClass}`} />
          </div>
        </div>
      );
    
    case "data":
      return (
        <div className="space-y-3">
          <div className={`h-32 ${blockClass} relative overflow-hidden`}>
             <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 100 40" preserveAspectRatio="none">
               <path d="M0,40 L10,35 L20,38 L30,30 L40,32 L50,20 L60,25 L70,15 L80,20 L90,10 L100,5 V40 H0 Z" fill="currentColor" />
             </svg>
          </div>
          <div className="space-y-2">
             <div className={`h-2 w-full ${lineClass}`} />
             <div className={`h-2 w-5/6 ${lineClass}`} />
             <div className={`h-2 w-4/6 ${lineClass}`} />
          </div>
        </div>
      );

    case "mobile":
       return (
         <div className="flex justify-center">
            <div className={`w-24 h-40 ${blockClass} border-x-2 border-white/10 flex flex-col items-center pt-2 gap-2`}>
               <div className={`w-8 h-1 ${lineClass}`} />
               <div className={`w-20 h-20 ${blockClass} rounded-sm`} />
               <div className="space-y-1 w-16">
                 <div className={`h-1 w-full ${lineClass}`} />
                 <div className={`h-1 w-2/3 ${lineClass}`} />
               </div>
            </div>
         </div>
       );

    case "kanban":
      return (
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="space-y-2">
            <div className={`h-3 w-3/4 ${lineClass} mb-3`} />
            <div className={`h-16 ${blockClass}`} />
            <div className={`h-12 ${blockClass}`} />
          </div>
          <div className="space-y-2 pt-8">
             <div className={`h-20 ${blockClass}`} />
             <div className={`h-16 ${blockClass}`} />
          </div>
          <div className="space-y-2 pt-4">
             <div className={`h-14 ${blockClass}`} />
             <div className={`h-24 ${blockClass}`} />
          </div>
        </div>
      );

    case "timezone":
       return (
         <div className="flex flex-col justify-center h-full gap-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col items-center gap-2">
                 <div className={`w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center relative`}>
                    <Clock className="w-6 h-6 text-white/40" />
                 </div>
                 <div className={`h-2 w-8 ${lineClass}`} />
              </div>
              <div className={`flex-1 h-px bg-white/10 mx-4 relative`}>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className={`w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center bg-white/5 relative`}>
                    <Clock className="w-6 h-6 text-white/60" />
                 </div>
                 <div className={`h-2 w-8 ${lineClass}`} />
              </div>
            </div>
            <div className="flex gap-2 justify-center">
               <div className={`h-8 w-32 ${blockClass} rounded-full`} />
            </div>
         </div>
       );

    case "brain":
       return (
         <div className="flex items-center justify-center h-full">
            <div className="relative w-32 h-24">
               {/* Left Hemisphere - Logic/Structure */}
               <div className="absolute left-0 top-0 w-[48%] h-full border border-white/10 rounded-l-full bg-white/[0.02] flex flex-col justify-center items-center gap-1 p-2">
                  <div className={`w-full h-1 ${lineClass}`} />
                  <div className={`w-full h-1 ${lineClass}`} />
                  <div className={`w-3/4 h-1 ${lineClass}`} />
                  <div className={`w-full h-1 ${lineClass}`} />
               </div>
               
               {/* Right Hemisphere - Creative/Fluid */}
               <div className="absolute right-0 top-0 w-[48%] h-full border border-white/10 rounded-r-full bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                     <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <circle cx="30" cy="30" r="20" fill="currentColor" className="text-white" />
                        <circle cx="70" cy="60" r="25" fill="currentColor" className="text-white" />
                     </svg>
                  </div>
               </div>

               {/* Connector */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[4%] h-16 bg-white/10 rounded-full" />
            </div>
         </div>
       );

    case "code-split":
      return (
        <div className="flex gap-4 h-full">
          <div className="w-1/2 space-y-2">
             <div className={`h-3 w-1/2 ${lineClass} mb-4`} />
             <div className={`h-2 w-full ${lineClass}`} />
             <div className={`h-2 w-3/4 ${lineClass}`} />
             <div className={`h-2 w-5/6 ${lineClass}`} />
             <div className={`h-2 w-2/3 ${lineClass}`} />
             <div className={`h-2 w-4/5 ${lineClass}`} />
          </div>
          <div className={`w-1/2 ${blockClass} flex items-center justify-center`}>
            <div className={`w-12 h-12 rounded-full border-2 border-dashed border-white/20`} />
          </div>
        </div>
      );

    case "invoice":
      return (
        <div className={`w-3/4 mx-auto ${blockClass} p-3 flex flex-col gap-3 bg-white/[0.02]`}>
           <div className="flex justify-between items-center">
             <div className={`h-3 w-8 ${blockClass}`} />
             <div className={`h-3 w-12 ${lineClass}`} />
           </div>
           <div className={`h-px w-full bg-white/10 my-1`} />
           <div className="space-y-2">
             <div className="flex justify-between">
                <div className={`h-2 w-16 ${lineClass}`} />
                <div className={`h-2 w-8 ${lineClass}`} />
             </div>
             <div className="flex justify-between">
                <div className={`h-2 w-20 ${lineClass}`} />
                <div className={`h-2 w-8 ${lineClass}`} />
             </div>
           </div>
           <div className="mt-auto flex justify-end">
              <div className={`h-4 w-16 ${blockClass}`} />
           </div>
        </div>
      );

    case "profile":
      return (
        <div className="flex gap-4 p-4 h-full items-start">
           <div className={`w-24 h-24 ${blockClass} rounded-full flex-shrink-0 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/5" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-10 bg-white/10 rounded-t-full" />
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-9 h-9 bg-white/10 rounded-full" />
           </div>
           <div className="flex-1 space-y-3 pt-2">
              <div className={`h-4 w-1/2 ${lineClass}`} />
              <div className={`h-3 w-1/3 ${lineClass} opacity-60`} />
              <div className="flex gap-2 pt-2">
                 <div className={`h-8 w-20 ${blockClass} rounded-full`} />
                 <div className={`h-8 w-20 ${blockClass} rounded-full`} />
              </div>
              <div className="space-y-2 pt-2">
                 <div className={`h-2 w-full ${lineClass}`} />
                 <div className={`h-2 w-full ${lineClass}`} />
                 <div className={`h-2 w-3/4 ${lineClass}`} />
              </div>
           </div>
        </div>
      );

    case "ia-map":
      return (
        <div className={`font-mono text-xs space-y-2 p-2 ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
            <motion.div 
              className="flex gap-2 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "linear", delay: 0.2 }}
            >
                <span className="text-pink-500">const</span>
                <span className="text-blue-500">routes</span>
                <span className={theme === "light" ? "text-gray-600" : "text-white"}>=</span>
                <span className={theme === "light" ? "text-gray-600" : "text-white"}>[</span>
            </motion.div>

            <motion.div 
              className="flex gap-2 pl-4 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "linear", delay: 1.2 }}
            >
                <span className={theme === "light" ? "text-gray-600" : "text-white"}>{`{`}</span>
                <span className="text-blue-500">path:</span>
                <span className="text-green-600">"/undergrad"</span>
                <span className={theme === "light" ? "text-gray-600" : "text-white"}>,</span>
                <span className="text-blue-500">component:</span>
                <span className="text-yellow-600">SchoolLeaverFlow</span>
            </motion.div>

            <motion.div 
              className="flex gap-2 pl-4 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "linear", delay: 2.0 }}
            >
                 <span className={theme === "light" ? "text-gray-600" : "text-white"}>{`}, {`}</span>
                 <span className="text-blue-500">path:</span>
                 <span className="text-green-600">"/mature-age"</span>
                 <span className={theme === "light" ? "text-gray-600" : "text-white"}>,</span>
            </motion.div>

            <motion.div 
              className="flex gap-2 pl-8 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "linear", delay: 2.8 }}
            >
                 <span className="text-blue-500">component:</span>
                 <span className="text-yellow-600">AlternativeEntryPath</span>
            </motion.div>

            <motion.div 
              className="flex gap-2 pl-4 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, ease: "linear", delay: 3.3 }}
            >
                <span className={theme === "light" ? "text-gray-600" : "text-white"}>{`}]`}</span>
                <span className={theme === "light" ? "text-gray-600" : "text-white"}>;</span>
            </motion.div>

             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.5 }}
               viewport={{ once: true }}
               transition={{ delay: 3.8 }}
               className="space-y-1 mt-4 italic"
             >
                <div className="flex gap-2"><span className="text-gray-400">// Mapping user types to entry flows</span></div>
                <div className="flex gap-2"><span className="text-gray-400">// Resolving dynamic prerequisites</span></div>
             </motion.div>
        </div>
      );

    case "sms-to-story":
      return (
        <div className="flex items-center justify-center gap-3 h-full py-4">
          <div className={`w-[28%] ${theme === "light" ? "bg-gray-100 border-gray-200" : "bg-white/5 border-white/10"} border rounded-xl p-2 flex flex-col gap-1.5 justify-end h-[140px]`}>
            <div className={`self-start max-w-[90%] rounded-xl rounded-bl-sm px-2 py-1.5 ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`}>
              <div className={`h-1 w-10 ${lineClass}`} />
            </div>
            <div className={`self-end max-w-[85%] rounded-xl rounded-br-sm px-2 py-1.5 ${theme === "light" ? "bg-blue-100" : "bg-purple-500/20"}`}>
              <div className={`h-1 w-8 ${theme === "light" ? "bg-blue-200 rounded-full" : "bg-purple-400/30 rounded-full"}`} />
            </div>
            <div className={`self-start max-w-[90%] rounded-xl rounded-bl-sm px-2 py-1.5 ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`}>
              <div className={`h-1 w-12 ${lineClass}`} />
              <div className={`h-1 w-6 ${lineClass} mt-0.5`} />
            </div>
            <div className={`self-end max-w-[85%] rounded-xl rounded-br-sm px-2 py-1.5 ${theme === "light" ? "bg-blue-100" : "bg-purple-500/20"}`}>
              <div className={`h-1 w-10 ${theme === "light" ? "bg-blue-200 rounded-full" : "bg-purple-400/30 rounded-full"}`} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className={`w-8 h-px ${connectorColor}`} />
            <svg className={`w-4 h-4 ${theme === "light" ? "text-gray-400" : "text-white/30"}`} viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l7 7-7 7V9H1V7h7V1z" /></svg>
          </div>

          <div className={`w-[38%] ${theme === "light" ? "bg-amber-50 border-amber-200" : "bg-amber-900/10 border-amber-500/15"} border rounded-lg p-3 flex flex-col gap-1.5 h-[140px]`}>
            <div className={`h-2 w-2/3 mx-auto ${theme === "light" ? "bg-amber-200 rounded-full" : "bg-amber-500/20 rounded-full"} mb-2`} />
            <div className={`h-1 w-full ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
            <div className={`h-1 w-full ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
            <div className={`h-1 w-5/6 ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
            <div className={`h-1 w-full ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
            <div className={`h-1 w-4/6 ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
            <div className="h-1" />
            <div className={`h-1 w-full ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
            <div className={`h-1 w-3/4 ${theme === "light" ? "bg-amber-100 rounded-full" : "bg-amber-500/10 rounded-full"}`} />
          </div>
        </div>
      );

    case "app-abandon":
      return (
        <div className="flex flex-col items-center justify-center h-full py-4 gap-4">
          <div className="grid grid-cols-4 gap-2.5 w-fit">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg ${
                  i === 2
                    ? theme === "light" ? "bg-purple-200 border-purple-300 border opacity-40" : "bg-purple-500/20 border-purple-500/30 border opacity-40"
                    : i === 5
                    ? theme === "light" ? "bg-purple-100 border-purple-200 border opacity-20" : "bg-purple-500/10 border-purple-500/15 border opacity-20"
                    : theme === "light" ? "bg-gray-100 border-gray-200 border" : "bg-white/5 border-white/10 border"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${theme === "light" ? "bg-purple-300" : "bg-purple-500/40"}`} />
            <div className={`h-px w-8 ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`} />
            <div className={`w-2 h-2 rounded-full ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`} />
          </div>
        </div>
      );

    case "venn-market":
      return (
        <div className="flex items-center justify-center h-full py-4">
          <div className="relative w-40 h-32">
            <div className={`absolute left-0 top-0 w-24 h-24 rounded-full border ${theme === "light" ? "border-purple-200 bg-purple-50/50" : "border-purple-500/20 bg-purple-500/5"}`} />
            <div className={`absolute right-0 top-0 w-24 h-24 rounded-full border ${theme === "light" ? "border-blue-200 bg-blue-50/50" : "border-blue-500/20 bg-blue-500/5"}`} />
            <div className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-24 rounded-full border ${theme === "light" ? "border-amber-200 bg-amber-50/50" : "border-amber-500/20 bg-amber-500/5"}`} />
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-3 h-3 rounded-full ${theme === "light" ? "bg-purple-400" : "bg-purple-400/60"}`} />
            <div className={`absolute left-2 top-4 text-[7px] font-mono ${theme === "light" ? "text-purple-400" : "text-purple-400/60"}`}>Journaling</div>
            <div className={`absolute right-0 top-4 text-[7px] font-mono ${theme === "light" ? "text-blue-400" : "text-blue-400/60"}`}>Memory</div>
            <div className={`absolute left-1/2 -translate-x-1/2 bottom-1 text-[7px] font-mono ${theme === "light" ? "text-amber-500" : "text-amber-400/60"}`}>AI Companion</div>
          </div>
        </div>
      );

    case "app-vs-sms":
      return (
        <div className="flex gap-3 items-center justify-center h-full py-4">
          <div className="w-[42%] opacity-50">
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`w-6 h-6 rounded-md ${theme === "light" ? "bg-gray-200" : "bg-white/5"} ${i % 3 === 0 ? "opacity-40" : ""}`} />
              ))}
            </div>
            <div className={`mt-2 h-1 w-8 mx-auto ${lineClass} opacity-40`} />
          </div>

          <div className="flex flex-col items-center">
            <svg className={`w-4 h-4 ${theme === "light" ? "text-gray-400" : "text-white/20"}`} viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l7 7-7 7V9H1V7h7V1z" /></svg>
          </div>

          <div className={`w-[42%] ${theme === "light" ? "bg-gray-50 border-gray-200" : "bg-white/[0.03] border-white/10"} border rounded-xl p-2 flex flex-col gap-1.5`}>
            <div className={`self-start max-w-[85%] rounded-xl rounded-bl-sm px-2 py-1 ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`}>
              <div className={`h-1 w-10 ${lineClass}`} />
            </div>
            <div className={`self-end max-w-[80%] rounded-xl rounded-br-sm px-2 py-1 ${theme === "light" ? "bg-purple-100" : "bg-purple-500/15"}`}>
              <div className={`h-1 w-8 ${theme === "light" ? "bg-purple-200 rounded-full" : "bg-purple-400/20 rounded-full"}`} />
            </div>
            <div className={`self-start max-w-[85%] rounded-xl rounded-bl-sm px-2 py-1 ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`}>
              <div className={`h-1 w-12 ${lineClass}`} />
            </div>
          </div>
        </div>
      );

    case "dual-system":
      return (
        <div className="flex flex-col items-center justify-center h-full py-3 gap-2 text-[7px] font-mono">
          <div className={`px-3 py-1.5 rounded-md border ${theme === "light" ? "bg-gray-100 border-gray-200 text-gray-600" : "bg-white/5 border-white/10 text-gray-400"}`}>User → SMS</div>
          <div className={`w-px h-3 ${connectorColor}`} />
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className={`px-3 py-1.5 rounded-md border ${theme === "light" ? "bg-purple-50 border-purple-200 text-purple-600" : "bg-purple-500/10 border-purple-500/20 text-purple-400"}`}>Lorbo (Haiku)</div>
              <div className={`w-px h-3 ${connectorColor}`} />
            </div>
            <div className="flex flex-col items-center gap-2 pt-8">
              <div className={`w-px h-3 ${connectorColor}`} />
              <div className={`px-3 py-1.5 rounded-md border ${theme === "light" ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-blue-500/10 border-blue-500/20 text-blue-400"}`}>Narrative (Sonnet)</div>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-md border ${theme === "light" ? "bg-amber-50 border-amber-200 text-amber-600" : "bg-amber-500/10 border-amber-500/20 text-amber-400"}`}>Factbook</div>
          <div className={`w-px h-3 ${connectorColor}`} />
          <div className={`px-3 py-1.5 rounded-md border ${theme === "light" ? "bg-green-50 border-green-200 text-green-600" : "bg-green-500/10 border-green-500/20 text-green-400"}`}>Journal</div>
        </div>
      );

    case "sms-journal":
      return (
        <div className="flex gap-3 h-full">
          <div className="w-[45%] flex flex-col justify-end gap-2 py-1">
            <div className={`self-start max-w-[85%] rounded-2xl rounded-bl-sm px-3 py-2 ${theme === "light" ? "bg-gray-100 border border-gray-200" : "bg-white/5 border border-white/10"}`}>
              <div className={`h-1.5 w-16 ${lineClass}`} />
              <div className={`h-1.5 w-10 ${lineClass} mt-1`} />
            </div>
            <div className={`self-end max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 ${theme === "light" ? "bg-blue-100 border border-blue-200" : "bg-blue-500/15 border border-blue-500/20"}`}>
              <div className={`h-1.5 w-12 ${theme === "light" ? "bg-blue-200 rounded-full" : "bg-blue-400/20 rounded-full"}`} />
            </div>
            <div className={`self-start max-w-[85%] rounded-2xl rounded-bl-sm px-3 py-2 ${theme === "light" ? "bg-gray-100 border border-gray-200" : "bg-white/5 border border-white/10"}`}>
              <div className={`h-1.5 w-20 ${lineClass}`} />
            </div>
            <div className={`self-end max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 ${theme === "light" ? "bg-blue-100 border border-blue-200" : "bg-blue-500/15 border border-blue-500/20"}`}>
              <div className={`h-1.5 w-14 ${theme === "light" ? "bg-blue-200 rounded-full" : "bg-blue-400/20 rounded-full"}`} />
              <div className={`h-1.5 w-8 ${theme === "light" ? "bg-blue-200 rounded-full" : "bg-blue-400/20 rounded-full"} mt-1`} />
            </div>
            <div className={`self-start max-w-[85%] rounded-2xl rounded-bl-sm px-3 py-2 ${theme === "light" ? "bg-gray-100 border border-gray-200" : "bg-white/5 border border-white/10"}`}>
              <div className={`h-1.5 w-16 ${lineClass}`} />
              <div className={`h-1.5 w-12 ${lineClass} mt-1`} />
            </div>
          </div>

          <div className={`w-px ${connectorColor} self-stretch my-2`} />

          <div className="w-[50%] flex flex-col justify-center gap-2 py-2">
            <div className={`h-2.5 w-3/4 ${lineClass} mb-1`} />
            <div className={`h-1.5 w-full ${lineClass}`} />
            <div className={`h-1.5 w-full ${lineClass}`} />
            <div className={`h-1.5 w-5/6 ${lineClass}`} />
            <div className={`h-1.5 w-full ${lineClass}`} />
            <div className={`h-1.5 w-4/6 ${lineClass}`} />
            <div className="h-2" />
            <div className={`h-1.5 w-full ${lineClass}`} />
            <div className={`h-1.5 w-full ${lineClass}`} />
            <div className={`h-1.5 w-3/4 ${lineClass}`} />
          </div>
        </div>
      );

    case "wireframe":
      return (
        <div className={`h-full flex flex-col ${theme === "light" ? "bg-white" : "bg-white/[0.02]"}`}>
           {/* Header */}
           <div className={`h-8 border-b ${borderColor} flex items-center px-3 justify-between`}>
              <div className={`w-16 h-2 ${lineClass}`} />
              <div className="flex gap-2">
                 <div className={`w-4 h-4 rounded-full ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`} />
                 <div className={`w-4 h-4 rounded-full ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`} />
              </div>
           </div>
           
           <div className="flex-1 flex">
              {/* Sidebar */}
              <div className={`w-12 border-r ${borderColor} py-3 flex flex-col items-center gap-3`}>
                 <div className={`w-6 h-6 rounded ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`} />
                 <div className={`w-6 h-6 rounded ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`} />
                 <div className={`w-6 h-6 rounded ${theme === "light" ? "bg-gray-100" : "bg-white/5"}`} />
              </div>
              
              {/* Main */}
              <div className="flex-1 p-3 space-y-3">
                 <div className="flex gap-3">
                    <div className={`w-1/3 h-24 ${blockClass}`} />
                    <div className={`w-2/3 h-24 ${blockClass}`} />
                 </div>
                 <div className={`w-full h-32 ${blockClass}`} />
              </div>
           </div>
        </div>
      );

    default: // landing
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className={`h-4 w-8 ${blockClass}`} />
            <div className="flex gap-2">
              <div className={`h-2 w-8 ${lineClass}`} />
              <div className={`h-2 w-8 ${lineClass}`} />
            </div>
          </div>
          <div className="space-y-2 py-4 flex flex-col items-center">
            <div className={`h-6 w-3/4 ${lineClass}`} />
            <div className={`h-3 w-1/2 ${lineClass} opacity-60`} />
            <div className={`mt-2 h-8 w-24 ${blockClass}`} />
          </div>
          <div className="grid grid-cols-2 gap-3">
             <div className={`h-20 ${blockClass}`} />
             <div className={`h-20 ${blockClass}`} />
          </div>
        </div>
      );
  }
}
