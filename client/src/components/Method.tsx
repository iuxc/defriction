import { motion, PanInfo } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";
import { useState } from "react";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function Method() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && currentIndex < methodsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="method" className="min-h-screen md:py-32 relative overflow-hidden flex flex-col justify-center bg-black/20 snap-start h-screen md:h-auto">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-basalt via-transparent to-deep-basalt z-10" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto px-4 relative z-20">
        <div className="text-left mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-6 backdrop-blur-md cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
              02. The Method
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Built for <span className="bg-gradient-to-r from-volt-lime to-green-500 bg-clip-text text-transparent">Velocity</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl">
            I don't just hand off a strategy deck and walk away. I leverage the US-Australia timezone overlap to deliver production-ready design during your off-hours, while bringing the executive wisdom to ensure it actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodsData.map((method, index) => (
            <motion.div 
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card p-1 rounded-2xl relative overflow-hidden group flex flex-col h-full`}
              style={{ "--glass-border-color": "212, 255, 0" } as React.CSSProperties}
            >
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

      {/* Mobile Layout - Horizontal Swipe */}
      <div className="md:hidden flex flex-col h-full pt-16">
        {/* Header */}
        <div className="px-4 pb-4 flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 mb-2 backdrop-blur-md cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
              02. The Method
            </span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white">
            Built for <span className="bg-gradient-to-r from-volt-lime to-green-500 bg-clip-text text-transparent">Velocity</span>
          </h2>
        </div>

        {/* Swipeable Cards */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div 
            className="flex h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {methodsData.map((method, index) => (
              <div 
                key={method.title} 
                className="w-full flex-shrink-0 h-full px-4 pb-4"
              >
                <div className="h-full glass-card rounded-2xl overflow-hidden relative flex flex-col">
                  {/* Wireframe Background */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-[120%] h-[60%] opacity-[0.12]">
                      <AbstractBrowser 
                        variant={method.browserVariant} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col h-full z-10">
                    <div className="font-mono text-xs text-gray-400 mb-2">0{index + 1}</div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {method.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 py-4 flex-shrink-0">
          {methodsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-volt-lime w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="hidden md:block">
        <NextSectionArrow targetId="about" />
      </div>
    </section>
  );
}
