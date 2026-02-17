import { useState, useEffect } from 'react';
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
      {showTooltip && (
        <span
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs whitespace-nowrap rounded-none shadow-lg z-50"
        >
          {full}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
        </span>
      )}
    </span>
  );
}

// Tooltip for bonus rows
function BonusTooltip({ type, postcodeData, children }: {
  type: 'regional' | 'lowSES';
  postcodeData?: { regional: boolean; lowSES: boolean; name: string } | null;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  const tips = {
    regional: {
      title: 'Regional Bonus (+5 points)',
      desc: `You qualify because your postcode (${postcodeData?.name || 'your area'}) is classified as a regional or remote area.`
    },
    lowSES: {
      title: 'Low SES Bonus (+3 points)',
      desc: `You qualify because your postcode (${postcodeData?.name || 'your area'}) is in a low socioeconomic status area.`
    }
  };

  return (
    <span className="relative">
      <span
        className="cursor-help"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
      >
        {children}
      </span>
      {show && (
        <span className="absolute bottom-full left-0 mb-2 w-56 p-3 bg-slate-900 text-white text-xs rounded-none shadow-lg z-50">
          <span className="font-semibold block mb-1">{tips[type].title}</span>
          <span className="text-slate-300 block">{tips[type].desc}</span>
          <span className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
        </span>
      )}
    </span>
  );
}

// Accent colors
const ACCENT = {
  regional: '#00739d',  // Monash secondary blue (WCAG AA)
  lowSES: '#c90095',    // Monash fuchsia
};

// Diagonal stripe pattern as inline SVG background
function stripeStyle(hex: string) {
  // Light tint fill + darker stripe lines
  const svg = `<svg width="8" height="8" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="8" fill="${hex}" opacity="0.12"/><path d="M-2 2l4-4M0 8l8-8M6 10l4-4" stroke="${hex}" stroke-opacity="0.25" stroke-width="1.5"/></svg>`;
  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    backgroundRepeat: 'repeat',
  };
}

// Dense dot pattern for bridge gap
function dotStyle(hex: string) {
  const svg = `<svg width="5" height="5" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="5" fill="${hex}" opacity="0.10"/><circle cx="1" cy="1" r="0.8" fill="${hex}" opacity="0.5"/><circle cx="3.5" cy="3.5" r="0.8" fill="${hex}" opacity="0.5"/></svg>`;
  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    backgroundRepeat: 'repeat',
  };
}

// Animated Stacking Bar — cumulative bars with one spanning cutoff line
export function StackingBar({ breakdown, total, cutoff, showBridge = false, eligibility, postcodeData, compact = false }: {
  breakdown: { base: number; regional: number; lowSES: number };
  total: number;
  cutoff: number;
  showBridge?: boolean;
  eligibility: 'eligible' | 'borderline' | 'bridge';
  postcodeData?: { regional: boolean; lowSES: boolean; name: string } | null;
  compact?: boolean;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const maxScore = 100;
  const cutoffPct = (cutoff / maxScore) * 100;
  const gap = Math.max(0, cutoff - total);

  // Cumulative totals for each row
  const afterBase = breakdown.base;
  const afterRegional = afterBase + breakdown.regional;

  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

  const hasRegional = breakdown.regional > 0;
  const hasLowSES = breakdown.lowSES > 0;
  const hasBridge = showBridge && gap > 0;

  return (
    <div>
      {/* ── Bars with spanning cutoff line ── */}
      <div className="relative">
        {/* Cutoff badge pinned at top of line */}
        <div
          style={{ left: `${cutoffPct}%` }}
          className="absolute top-0 z-20 pointer-events-none -translate-x-1/2 -translate-y-full"
        >
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white tabular-nums bg-black px-2 py-0.5 mb-1">
            Cutoff: {cutoff}
          </span>
        </div>
        {/* Single cutoff line spanning all bars */}
        <div
          style={{ left: `${cutoffPct}%` }}
          className="absolute w-[2px] bg-black z-20 pointer-events-none top-0 -bottom-3"
        />

        <div className="space-y-4 mt-5">
          {/* ── Base ATAR ── */}
          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Raw <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym>
              </span>
              <span className="text-sm font-bold text-deep-sapphire tabular-nums">{breakdown.base.toFixed(2)}</span>
            </div>
            <div className="relative h-7 bg-slate-200/60 rounded-none">
              <div
                style={{ width: mounted ? `${(afterBase / maxScore) * 100}%` : '0%', transition: `width 1s ${ease}` }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-deep-sapphire to-monash-blue"
              />
            </div>
          </div>

          {/* ── Regional Bonus ── */}
          {hasRegional && (
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <BonusTooltip type="regional" postcodeData={postcodeData}>
                  <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1" style={{ color: ACCENT.regional }}>
                    + Regional Bonus
                    <Info className="w-3 h-3 opacity-50" />
                  </span>
                </BonusTooltip>
                <span className="text-sm font-bold tabular-nums" style={{ color: ACCENT.regional }}>+{breakdown.regional.toFixed(2)}</span>
              </div>
              <div className="relative h-7 bg-slate-200/60 rounded-none">
                {/* Prior total (base) — striped tint of accent */}
                <div
                  style={{ width: mounted ? `${(afterBase / maxScore) * 100}%` : '0%', transition: `width 0.8s ${ease} 0.3s`, ...stripeStyle(ACCENT.regional) }}
                  className="absolute left-0 top-0 h-full"
                />
                {/* New addition in accent color */}
                <div
                  style={{
                    left: mounted ? `${(afterBase / maxScore) * 100}%` : '0%',
                    width: mounted ? `${(breakdown.regional / maxScore) * 100}%` : '0%',
                    transition: `left 0.8s ${ease} 0.3s, width 0.8s ${ease} 0.5s`,
                    backgroundColor: ACCENT.regional
                  }}
                  className="absolute top-0 h-full"
                />
              </div>
            </div>
          )}

          {/* ── Low SES Bonus ── */}
          {hasLowSES && (
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <BonusTooltip type="lowSES" postcodeData={postcodeData}>
                  <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1" style={{ color: ACCENT.lowSES }}>
                    + Low <Acronym abbr="SES" full="Socio-Economic Status">SES</Acronym> Bonus
                    <Info className="w-3 h-3 opacity-50" />
                  </span>
                </BonusTooltip>
                <span className="text-sm font-bold tabular-nums" style={{ color: ACCENT.lowSES }}>+{breakdown.lowSES.toFixed(2)}</span>
              </div>
              <div className="relative h-7 bg-slate-200/60 rounded-none">
                {/* Prior total (base + regional) — striped tint of accent */}
                <div
                  style={{ width: mounted ? `${(afterRegional / maxScore) * 100}%` : '0%', transition: `width 0.8s ${ease} 0.5s`, ...stripeStyle(ACCENT.lowSES) }}
                  className="absolute left-0 top-0 h-full"
                />
                {/* New addition in accent color */}
                <div
                  style={{
                    left: mounted ? `${(afterRegional / maxScore) * 100}%` : '0%',
                    width: mounted ? `${(breakdown.lowSES / maxScore) * 100}%` : '0%',
                    transition: `left 0.8s ${ease} 0.5s, width 0.8s ${ease} 0.8s`,
                    backgroundColor: ACCENT.lowSES
                  }}
                  className="absolute top-0 h-full"
                />
              </div>
            </div>
          )}

          {/* ── Bridge Gap ── */}
          {hasBridge && (
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gap to Bridge</span>
                <span className="text-sm font-bold text-slate-400 tabular-nums">-{gap.toFixed(1)}</span>
              </div>
              <div className="relative h-7 bg-slate-200/60 rounded-none">
                {/* Prior total — plain */}
                <div
                  style={{ width: mounted ? `${(total / maxScore) * 100}%` : '0%', transition: `width 0.8s ${ease} 0.7s` }}
                  className="absolute left-0 top-0 h-full bg-slate-300/50"
                />
                {/* Gap shown as striped */}
                <div
                  style={{
                    left: mounted ? `${(total / maxScore) * 100}%` : '0%',
                    width: mounted ? `${(gap / maxScore) * 100}%` : '0%',
                    transition: `left 0.8s ${ease} 0.7s, width 0.8s ${ease} 1s`,
                    ...stripeStyle('#64748b')
                  }}
                  className="absolute top-0 h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Cutoff Reference ── */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200">
        <span className="text-xs text-slate-500">Course cutoff</span>
        <span className="text-xs font-bold text-slate-600 tabular-nums">{cutoff}.00</span>
      </div>

      {/* ── Total Row — hidden in compact mode ── */}
      {!compact && (
        <div className="flex items-center justify-between pt-3 border-t-2 border-slate-300">
          <span className="text-sm font-semibold text-slate-700">Final Selection Rank</span>
          <span className={clsx(
            'text-2xl font-bold tabular-nums',
            eligibility === 'eligible' ? 'text-monash-blue' : eligibility === 'borderline' ? 'text-deep-sapphire' : 'text-slate-500'
          )}>
            {total.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}
