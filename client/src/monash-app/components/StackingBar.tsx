import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Info } from 'lucide-react';

// Acronym component with dotted underline and tooltip
export function Acronym({ abbr, full, children }: { abbr: string; full: string; children?: React.ReactNode }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <span className="relative inline-block">
      <span
        className="border-b border-dotted border-slate-500 cursor-help"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        {children || abbr}
      </span>
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs whitespace-nowrap rounded-none shadow-lg z-50"
          >
            {full}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

// Animated Stacking Bar with breakdown bars below
export function StackingBar({ breakdown, total, cutoff, showBridge = false, eligibility, postcodeData }: { 
  breakdown: { base: number; regional: number; lowSES: number }; 
  total: number; 
  cutoff: number;
  showBridge?: boolean;
  eligibility: 'eligible' | 'borderline' | 'bridge';
  postcodeData?: { regional: boolean; lowSES: boolean; name: string } | null;
}) {
  const [activeTooltip, setActiveTooltip] = useState<'regional' | 'lowSES' | null>(null);
  const maxScore = 100;
  const baseWidth = (breakdown.base / maxScore) * 100;
  const regionalWidth = (breakdown.regional / maxScore) * 100;
  const lowSESWidth = (breakdown.lowSES / maxScore) * 100;
  const cutoffPosition = (cutoff / maxScore) * 100;
  const gap = Math.max(0, cutoff - total);
  
  const totalWidth = baseWidth + regionalWidth + lowSESWidth;
  
  // Smart cutoff label positioning - if cutoff > 70%, position label to the left
  const cutoffLabelPosition = cutoffPosition > 70 ? 'right' : cutoffPosition < 30 ? 'left' : 'center';
  
  return (
    <div className="space-y-4">
      {/* Cutoff Label Above Bar - Smart positioning */}
      <div className="relative h-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ left: `${cutoffPosition}%` }}
          className={clsx(
            'absolute',
            cutoffLabelPosition === 'right' && 'transform -translate-x-full pr-2',
            cutoffLabelPosition === 'left' && 'pl-2',
            cutoffLabelPosition === 'center' && 'transform -translate-x-1/2'
          )}
        >
          <span className="text-xs font-medium text-slate-600 bg-white px-2 py-0.5 rounded-none border border-slate-300 shadow-sm whitespace-nowrap">
            Cutoff: {cutoff}
          </span>
        </motion.div>
      </div>
      
      {/* Main Progress Bar - No score inside */}
      <div className="relative h-10 bg-vapor-grey rounded-none overflow-hidden border border-slate-300">
        {/* Base ATAR */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${baseWidth}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-monash-blue to-electric-sky"
        />
        
        {/* Regional Bonus */}
        {breakdown.regional > 0 && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${regionalWidth}%` }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ left: `${baseWidth}%` }}
            className="absolute top-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
          />
        )}
        
        {/* Low SES Bonus */}
        {breakdown.lowSES > 0 && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${lowSESWidth}%` }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ left: `${baseWidth + regionalWidth}%` }}
            className="absolute top-0 h-full bg-gradient-to-r from-teal-500 to-teal-400"
          />
        )}
        
        {/* Bridge Gap */}
        {showBridge && gap > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{ 
              left: `${totalWidth}%`,
              width: `${(gap / maxScore) * 100}%`
            }}
            className="absolute top-0 h-full bg-gradient-to-r from-amber-200 to-amber-100 border-2 border-dashed border-amber-400"
          />
        )}
        
        {/* Cutoff Line - Extends above and below bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ left: `${cutoffPosition}%` }}
          className="absolute -top-4 h-[calc(100%+2rem)] w-0.5 bg-slate-800"
        />
      </div>
      
      {/* Gap Label Below Bar */}
      {showBridge && gap > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-none border border-amber-300">
            Gap to bridge: {gap.toFixed(1)} points
          </span>
        </motion.div>
      )}
      
      {/* Selection Rank Calculation - Breakdown Bars */}
      <div className="mt-6 space-y-2">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Selection Rank Calculation</h4>
        
        {/* Base ATAR Row */}
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-slate-600 shrink-0">
            Base <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym>
          </span>
          <div className="flex-1 h-3 bg-vapor-grey rounded-none overflow-hidden border border-slate-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(breakdown.base / 100) * 100}%` }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full bg-monash-blue"
            />
          </div>
          <span className="w-12 text-xs font-medium text-slate-700 text-right tabular-nums">{breakdown.base.toFixed(2)}</span>
        </div>
        
        {/* Regional Row */}
        {breakdown.regional > 0 && (
          <div className="flex items-center gap-2">
            <div className="w-16 shrink-0 relative">
              <button
                onClick={() => setActiveTooltip(activeTooltip === 'regional' ? null : 'regional')}
                onMouseEnter={() => setActiveTooltip('regional')}
                onMouseLeave={() => setActiveTooltip(null)}
                className="text-xs text-slate-600 flex items-center gap-1 cursor-help"
              >
                Regional
                <Info className="w-3 h-3 text-slate-400" />
              </button>
              <AnimatePresence>
                {activeTooltip === 'regional' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-full left-0 mb-2 w-56 p-3 bg-slate-900 text-white text-xs rounded-none shadow-lg z-50"
                  >
                    <p className="font-semibold mb-1">Regional Bonus (+5 points)</p>
                    <p className="text-slate-300">
                      You qualify because your postcode ({postcodeData?.name || 'your area'}) is classified as a regional or remote area.
                    </p>
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1 h-3 bg-vapor-grey rounded-none overflow-hidden border border-slate-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(breakdown.regional / 100) * 100}%` }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full bg-emerald-500"
              />
            </div>
            <span className="w-12 text-xs font-medium text-emerald-600 text-right tabular-nums">+{breakdown.regional}</span>
          </div>
        )}
        
        {/* Low SES Row */}
        {breakdown.lowSES > 0 && (
          <div className="flex items-center gap-2">
            <div className="w-16 shrink-0 relative">
              <button
                onClick={() => setActiveTooltip(activeTooltip === 'lowSES' ? null : 'lowSES')}
                onMouseEnter={() => setActiveTooltip('lowSES')}
                onMouseLeave={() => setActiveTooltip(null)}
                className="text-xs text-slate-600 flex items-center gap-1 cursor-help"
              >
                Low <Acronym abbr="SES" full="Socio-Economic Status">SES</Acronym>
                <Info className="w-3 h-3 text-slate-400" />
              </button>
              <AnimatePresence>
                {activeTooltip === 'lowSES' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-full left-0 mb-2 w-56 p-3 bg-slate-900 text-white text-xs rounded-none shadow-lg z-50"
                  >
                    <p className="font-semibold mb-1">Low SES Bonus (+3 points)</p>
                    <p className="text-slate-300">
                      You qualify because your postcode ({postcodeData?.name || 'your area'}) is in a low socioeconomic status area.
                    </p>
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1 h-3 bg-vapor-grey rounded-none overflow-hidden border border-slate-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(breakdown.lowSES / 100) * 100}%` }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-full bg-teal-500"
              />
            </div>
            <span className="w-12 text-xs font-medium text-teal-600 text-right tabular-nums">+{breakdown.lowSES}</span>
          </div>
        )}
        
        {/* Bridge Pathway Row */}
        {showBridge && gap > 0 && (
          <div className="flex items-center gap-2">
            <span className="w-16 text-xs text-slate-600 shrink-0">Bridge</span>
            <div className="flex-1 h-3 bg-vapor-grey rounded-none overflow-hidden border border-slate-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(gap / 100) * 100}%` }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="h-full bg-amber-400 border-r-2 border-dashed border-amber-600"
              />
            </div>
            <span className="w-12 text-xs font-medium text-amber-600 text-right tabular-nums">-{gap.toFixed(1)}</span>
          </div>
        )}
        
        {/* Total Row */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
          <span className="w-16 text-xs font-semibold text-slate-700 shrink-0">Total</span>
          <div className="flex-1">
            <span className={clsx(
              'text-2xl font-bold tabular-nums',
              eligibility === 'eligible' ? 'text-emerald-600' : eligibility === 'borderline' ? 'text-amber-600' : 'text-red-600'
            )}>
              {total.toFixed(2)}
            </span>
          </div>
          <span className="text-xs text-slate-500">/ 99.95</span>
        </div>
      </div>
    </div>
  );
}
