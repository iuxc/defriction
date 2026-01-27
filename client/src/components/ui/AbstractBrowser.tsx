import { motion } from "framer-motion";

interface AbstractBrowserProps {
  variant?: "dashboard" | "landing" | "mobile" | "data" | "kanban" | "code-split" | "invoice" | "timezone" | "brain" | "profile" | "modern-hero";
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
      <div className="p-4 relative min-h-[160px] bg-gradient-to-br from-white/[0.02] to-transparent">
        <Content variant={variant} />
      </div>
    </div>
  );
}

function Content({ variant }: { variant: AbstractBrowserProps["variant"] }) {
  const lineClass = "bg-white/10 rounded-full";
  const blockClass = "bg-white/5 rounded border border-white/5";

  switch (variant) {
    case "modern-hero":
      return (
        <div className="flex flex-col h-full relative">
          {/* Header Area */}
          <div className="flex justify-between items-center mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-6 ${blockClass} bg-white/10`} 
            />
            <div className="flex gap-4">
               {["w-16", "w-12", "w-20", "w-8"].map((w, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                   className={`h-2 ${w} ${lineClass}`} 
                 />
               ))}
            </div>
          </div>

          {/* Hero Content Area */}
          <div className="flex-1 grid grid-cols-12 gap-6">
             {/* Left Column - Main Feature */}
             <div className="col-span-8 flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className={`h-40 ${blockClass} bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden group`}
                >
                   {/* Animated shine effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                   
                   <div className="absolute bottom-4 left-4 right-4 flex gap-3 items-end">
                      <div className={`h-12 w-12 rounded-full ${blockClass} bg-white/10`} />
                      <div className="space-y-2 flex-1">
                         <div className={`h-3 w-1/2 ${lineClass}`} />
                         <div className={`h-2 w-1/3 ${lineClass} opacity-60`} />
                      </div>
                   </div>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-4 flex-1">
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 1.2 }}
                     className={`rounded-lg bg-white/5 border border-white/5 p-3 flex flex-col justify-between`}
                   >
                      <div className={`w-8 h-8 rounded-full bg-volt-lime/20 mb-2`} />
                      <div className={`h-2 w-2/3 ${lineClass}`} />
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 1.3 }}
                     className={`rounded-lg bg-white/5 border border-white/5 p-3 flex flex-col justify-between`}
                   >
                      <div className={`w-8 h-8 rounded-full bg-ion-cyan/20 mb-2`} />
                      <div className={`h-2 w-2/3 ${lineClass}`} />
                   </motion.div>
                </div>
             </div>

             {/* Right Column - Sidebar/Stats */}
             <div className="col-span-4 flex flex-col gap-3">
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: 1.4 }}
                   className={`h-24 ${blockClass} bg-white/[0.03] p-3 flex flex-col items-center justify-center gap-2`}
                >
                   <div className={`w-10 h-10 rounded-full border-2 border-white/10`} />
                   <div className={`h-2 w-1/2 ${lineClass}`} />
                </motion.div>
                
                {[1, 2, 3].map((_, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 1.5 + (i * 0.1) }}
                     className={`h-8 ${lineClass} w-full opacity-40`} 
                   />
                ))}
             </div>
          </div>
          
          {/* Floating UI Element */}
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 2, type: "spring" }}
             className="absolute -right-4 -bottom-4 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl z-10"
          >
             <div className="flex gap-3 items-center">
                <div className="h-2 w-2 rounded-full bg-volt-lime animate-pulse" />
                <div className="space-y-1">
                   <div className="h-1.5 w-16 bg-white/40 rounded-full" />
                   <div className="h-1.5 w-10 bg-white/20 rounded-full" />
                </div>
             </div>
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
