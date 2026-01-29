import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function Method() {
  const methods = [
    // ...
  ];
  
  const methodsData = [
    {
      title: "Timezone Arbitrage",
      desc: "Brief me during your Australian workday. I execute while you sleep. You wake up to finished designs the next morning.",
      gradient: "from-volt-lime/20 to-transparent",
      browserVariant: "timezone" as const
    },
    {
      title: "Dual-Track Brain",
      desc: "I speak the language of the Boardroom and the Figma file. I bridge the gap between executive goals and pixel-perfect execution.",
      gradient: "from-ion-cyan/20 to-transparent",
      browserVariant: "brain" as const
    },
    {
      title: "Zero Overhead",
      desc: "W-8BEN. No Super. No Payroll. Just a clean Wise invoice.",
      gradient: "from-electric-violet/20 to-transparent",
      browserVariant: "invoice" as const
    }
  ];

  return (
    <section id="method" className="min-h-screen md:min-h-screen h-screen md:h-auto py-16 md:py-32 relative overflow-hidden flex flex-col justify-center bg-black/20 snap-start md:snap-align-none">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-basalt via-transparent to-deep-basalt z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col h-full md:h-auto justify-center">
        <div className="text-left mb-6 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-white/10 bg-white/5 mb-3 md:mb-6 backdrop-blur-md cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
              02. The Method
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 md:mb-6">
            Built for <span className="bg-gradient-to-r from-volt-lime to-green-500 bg-clip-text text-transparent">Velocity</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl hidden md:block">
            I don't just hand off a strategy deck and walk away. I leverage the US-Australia timezone overlap to deliver production-ready design during your off-hours, while bringing the executive wisdom to ensure it actually works.
          </p>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden flex-1 flex flex-col justify-center min-h-0">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {methodsData.map((method, index) => (
              <div 
                key={method.title}
                className="snap-center shrink-0 w-[90vw] max-w-[340px] glass-card p-1 rounded-2xl relative overflow-hidden flex flex-col"
                style={{ "--glass-border-color": "212, 255, 0" } as React.CSSProperties}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${method.gradient} opacity-20 rounded-full blur-3xl -mr-10 -mt-10`} />
                
                <div className="relative z-10 p-5 flex flex-col h-full min-h-[260px]">
                  <div className="font-mono text-xs text-gray-500 mb-3">0{index + 1}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {method.desc}
                  </p>

                  <div className="mt-auto -mb-5 -mx-5">
                    <AbstractBrowser 
                      variant={method.browserVariant} 
                      className="w-full shadow-xl opacity-80"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {methodsData.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodsData.map((method, index) => (
            <motion.div 
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card p-1 rounded-2xl relative overflow-hidden group flex flex-col h-full`}
              style={{ "--glass-border-color": "212, 255, 0" } as React.CSSProperties}
            >
               {/* Inner Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${method.gradient} opacity-20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-40`} />
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="font-mono text-xs text-gray-500 mb-6">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {method.desc}
                </p>

                <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <AbstractBrowser 
                    variant={method.browserVariant} 
                    className="w-full shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <NextSectionArrow targetId="about" />
    </section>
  );
}
