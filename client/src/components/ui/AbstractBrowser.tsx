import { motion } from "framer-motion";

interface AbstractBrowserProps {
  variant?: "dashboard" | "landing" | "mobile" | "data" | "kanban" | "code-split" | "invoice" | "timezone" | "brain" | "profile" | "infinite-pdf" | "terminal" | "ia-map" | "wireframe";
  className?: string;
}

export function AbstractBrowser({ variant = "landing", className = "" }: AbstractBrowserProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm ${className}`}>
      {/* Browser Chrome */}
      <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
        <div className="flex-1 ml-2">
          <div className="h-4 bg-white/5 rounded-full w-2/3 max-w-[200px]" />
        </div>
      </div>

      {/* Viewport Content */}
      <div className="p-4 relative min-h-[160px] bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden">
        <Content variant={variant} />
      </div>
    </div>
  );
}

function Content({ variant }: { variant: AbstractBrowserProps["variant"] }) {
  const lineClass = "bg-white/10 rounded-full";
  const blockClass = "bg-white/5 rounded border border-white/5";

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
                    <div className="w-0.5 h-4 bg-white/20 rounded-full rotate-45 origin-bottom absolute bottom-1/2 left-1/2 -translate-x-1/2" />
                    <div className="w-0.5 h-3 bg-white/20 rounded-full rotate-[-45] origin-bottom absolute bottom-1/2 left-1/2 -translate-x-1/2" />
                 </div>
                 <div className={`h-2 w-8 ${lineClass}`} />
              </div>
              <div className={`flex-1 h-px bg-white/10 mx-4 relative`}>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className={`w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center bg-white/5 relative`}>
                    <div className="w-0.5 h-4 bg-white/40 rounded-full rotate-180 origin-bottom absolute bottom-1/2 left-1/2 -translate-x-1/2" />
                    <div className="w-0.5 h-3 bg-white/40 rounded-full rotate-90 origin-bottom absolute bottom-1/2 left-1/2 -translate-x-1/2" />
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
        <div className="flex flex-col items-center h-full pt-4">
           {/* Level 1 */}
           <div className={`w-24 h-8 ${blockClass} mb-4 flex items-center justify-center`}>
              <div className={`w-12 h-2 ${lineClass}`} />
           </div>
           
           {/* Connector */}
           <div className="h-6 w-px bg-white/10 relative">
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 h-px bg-white/10" />
           </div>

           {/* Level 2 */}
           <div className="flex gap-4 mt-6">
              <div className="flex flex-col items-center">
                 <div className="h-4 w-px bg-white/10 mb-2" />
                 <div className={`w-16 h-12 ${blockClass} flex flex-col gap-2 p-2`}>
                    <div className={`w-full h-1 ${lineClass}`} />
                    <div className={`w-2/3 h-1 ${lineClass}`} />
                 </div>
              </div>
              <div className="flex flex-col items-center">
                 <div className="h-4 w-px bg-white/10 mb-2" />
                 <div className={`w-16 h-12 ${blockClass} flex flex-col gap-2 p-2`}>
                    <div className={`w-full h-1 ${lineClass}`} />
                    <div className={`w-2/3 h-1 ${lineClass}`} />
                 </div>
              </div>
              <div className="flex flex-col items-center">
                 <div className="h-4 w-px bg-white/10 mb-2" />
                 <div className={`w-16 h-12 ${blockClass} flex flex-col gap-2 p-2`}>
                    <div className={`w-full h-1 ${lineClass}`} />
                    <div className={`w-2/3 h-1 ${lineClass}`} />
                 </div>
              </div>
           </div>
        </div>
      );

    case "wireframe":
      return (
        <div className="h-full flex flex-col bg-white/[0.02]">
           {/* Header */}
           <div className="h-8 border-b border-white/5 flex items-center px-3 justify-between">
              <div className={`w-16 h-2 ${lineClass}`} />
              <div className="flex gap-2">
                 <div className={`w-4 h-4 rounded-full bg-white/5`} />
                 <div className={`w-4 h-4 rounded-full bg-white/5`} />
              </div>
           </div>
           
           <div className="flex-1 flex">
              {/* Sidebar */}
              <div className="w-12 border-r border-white/5 py-3 flex flex-col items-center gap-3">
                 <div className={`w-6 h-6 rounded bg-white/5`} />
                 <div className={`w-6 h-6 rounded bg-white/5`} />
                 <div className={`w-6 h-6 rounded bg-white/5`} />
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
