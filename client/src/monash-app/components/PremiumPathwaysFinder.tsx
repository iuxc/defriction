import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Globe,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Mail,
  MessageCircle,
  Calendar,
  FileText,
  TrendingUp,
  Target,
  Zap,
  Info,
  X,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { Link } from 'wouter';
import { StackingBar, Acronym } from './StackingBar';

// Animations removed as requested
const motion = {
  div: ({ initial, animate, exit, variants, transition, layout, layoutId, whileHover, whileTap, viewport, ...props }: any) => <div {...props} />,
  button: ({ initial, animate, exit, variants, transition, layout, layoutId, whileHover, whileTap, viewport, ...props }: any) => <button {...props} />,
  span: ({ initial, animate, exit, variants, transition, layout, layoutId, whileHover, whileTap, viewport, ...props }: any) => <span {...props} />,
  a: ({ initial, animate, exit, variants, transition, layout, layoutId, whileHover, whileTap, viewport, ...props }: any) => <a {...props} />,
  img: ({ initial, animate, exit, variants, transition, layout, layoutId, whileHover, whileTap, viewport, ...props }: any) => <img {...props} />,
};
const AnimatePresence = ({ children }: any) => <>{children}</>;

// ============================================================================
// MOCK DATA
// ============================================================================

const COURSES = [
  { id: 'nursing', name: 'Bachelor of Nursing', cutoff: 70, vtacCode: '2800311841', faculty: 'Medicine, Nursing and Health Sciences' },
  { id: 'commerce', name: 'Bachelor of Commerce', cutoff: 85, vtacCode: '2800112345', faculty: 'Business and Economics' },
  { id: 'arts', name: 'Bachelor of Arts', cutoff: 60, vtacCode: '2800198765', faculty: 'Arts' },
  { id: 'engineering', name: 'Bachelor of Engineering', cutoff: 80, vtacCode: '2800156789', faculty: 'Engineering' },
  { id: 'science', name: 'Bachelor of Science', cutoff: 75, vtacCode: '2800143210', faculty: 'Science' },
];

const POSTCODES: Record<string, { regional: boolean; lowSES: boolean; name: string }> = {
  '2830': { regional: true, lowSES: true, name: 'Dubbo, NSW' },
  '3350': { regional: true, lowSES: false, name: 'Ballarat, VIC' },
  '3175': { regional: false, lowSES: true, name: 'Dandenong, VIC' },
  '3000': { regional: false, lowSES: false, name: 'Melbourne CBD, VIC' },
  '3800': { regional: false, lowSES: false, name: 'Clayton, VIC' },
};

const TAFE_QUALIFICATIONS = [
  { id: 'dip-nursing', name: 'Diploma of Nursing', field: 'Health' },
  { id: 'dip-business', name: 'Diploma of Business', field: 'Business' },
  { id: 'cert-iv-aged', name: 'Certificate IV in Aged Care', field: 'Health' },
  { id: 'dip-it', name: 'Diploma of Information Technology', field: 'IT' },
];

const ATAR_RANGES = [
  { id: '90-99', label: '90 - 99', low: 90, high: 99 },
  { id: '80-89', label: '80 - 89', low: 80, high: 89 },
  { id: '70-79', label: '70 - 79', low: 70, high: 79 },
  { id: '60-69', label: '60 - 69', low: 60, high: 69 },
  { id: '50-59', label: '50 - 59', low: 50, high: 59 },
  { id: 'below-50', label: 'Below 50', low: 30, high: 49 },
];

// ============================================================================
// TYPES
// ============================================================================

type UserStatus = 'year12' | 'tafe' | 'mature' | 'international' | null;
type ATARType = 'predicted' | 'actual' | null;
type Step = 'welcome' | 'status' | 'atar-type' | 'atar-input' | 'postcode' | 'course' | 'result' | 'tafe-qual' | 'tafe-course' | 'tafe-result' | 'mature-course' | 'mature-result' | 'international' | 'email';

interface AppState {
  step: Step;
  status: UserStatus;
  atarType: ATARType;
  actualAtar: number | null;
  predictedRange: { low: number; high: number } | null;
  postcode: string;
  postcodeData: { regional: boolean; lowSES: boolean; name: string } | null;
  selectedCourse: typeof COURSES[0] | null;
  tafeQual: typeof TAFE_QUALIFICATIONS[0] | null;
  email: string;
}

// ============================================================================
// SMART ASSISTANT TIPS
// ============================================================================

const TIPS: Record<string, string> = {
  welcome: "I'm here to help you find the best pathway to your dream course.",
  status: "Choose the option that best describes your current situation.",
  'atar-type': "Don't worry if you don't have your final ATAR yet—we can work with predictions!",
  'atar-input': "Enter your ATAR score. Remember, this is just the starting point!",
  postcode: "Your postcode helps us check if you qualify for bonus points.",
  course: "Select the course you're most interested in. We'll show you how to get there.",
  result: "Here's your personalized pathway. You've got this!",
  nursing: "Great choice! Nursing is competitive but incredibly rewarding.",
  commerce: "Commerce opens doors to many career paths in business and finance.",
  regional: "You qualify for regional bonus points! That's a +5 boost.",
  lowSES: "You qualify for equity access points. Every bit helps!",
  bridge: "Don't worry—there's a pathway program that can bridge the gap.",
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function calculateSelectionRank(baseAtar: number, postcode: { regional: boolean; lowSES: boolean } | null): { total: number; breakdown: { base: number; regional: number; lowSES: number } } {
  let regional = 0;
  let lowSES = 0;
  
  if (postcode?.regional) regional = 5;
  if (postcode?.lowSES) lowSES = 3;
  
  const total = Math.min(baseAtar + regional + lowSES, 99.95);
  
  return {
    total,
    breakdown: { base: baseAtar, regional, lowSES }
  };
}

function getEligibilityStatus(score: number, cutoff: number, isPredicted: boolean): 'eligible' | 'borderline' | 'bridge' {
  if (isPredicted) {
    if (score >= cutoff + 5) return 'eligible';
    if (score >= cutoff - 5) return 'borderline';
    return 'bridge';
  }
  if (score >= cutoff) return 'eligible';
  return 'bridge';
}

// ============================================================================
// COMPONENTS
// ============================================================================

// Glass Container - stable container without layout animation to prevent scroll jitter
function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'bg-white rounded-none shadow-2xl shadow-slate-900/20 border border-slate-200 font-sans',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Simple fade wrapper for step content
function FadeContent({ children, stepKey }: { children: React.ReactNode; stepKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepKey}
        initial={{ opacity: 0, scale: 0.98, y: 10, filter: 'blur(4px)' }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.98, y: -10, filter: 'blur(2px)' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Smart Assistant Bubble
function SmartAssistant({ tip, onClose }: { tip: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      className="absolute -top-4 right-4 transform -translate-y-full z-50"
    >
      <div className="relative bg-monash-blue text-white rounded-none px-4 py-3 max-w-xs shadow-lg shadow-monash-blue/30">
        <button onClick={onClose} className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-none flex items-center justify-center shadow-md">
          <X className="w-3 h-3 text-slate-600" />
        </button>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-none bg-white/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-sm leading-relaxed">{tip}</p>
        </div>
        <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-monash-blue" />
      </div>
    </motion.div>
  );
}

// Selection Card with staggered entrance animation
function SelectionCard({ 
  icon: Icon, 
  title, 
  description, 
  selected, 
  onClick,
  disabled = false,
  index = 0
}: { 
  icon: React.ElementType; 
  title: React.ReactNode; 
  description: string; 
  selected: boolean; 
  onClick: () => void;
  disabled?: boolean;
  index?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={!disabled ? { scale: 1.02, y: -2, backgroundColor: selected ? undefined : '#F8FAFC' } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'relative w-full p-6 rounded-none border-2 text-left transition-colors duration-500',
        selected 
          ? 'border-monash-blue bg-vapor-grey shadow-lg shadow-monash-blue/20' 
          : 'border-slate-300 bg-white hover:border-slate-400 shadow-sm hover:shadow-md',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <div className={clsx(
        'w-12 h-12 rounded-none flex items-center justify-center mb-4 transition-colors duration-500',
        selected ? 'bg-monash-blue text-white' : 'bg-vapor-grey text-slate-700'
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm font-sans text-slate-500">{description}</p>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-4 right-4 w-6 h-6 bg-monash-blue rounded-none flex items-center justify-center"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}


// Primary Button
function PrimaryButton({ children, onClick, disabled = false, icon: Icon }: { 
  children: React.ReactNode; 
  onClick: () => void; 
  disabled?: boolean;
  icon?: React.ElementType;
}) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'w-full h-14 rounded-none font-semibold text-white flex items-center justify-center gap-2 transition-all',
        disabled 
          ? 'bg-slate-400 text-white cursor-not-allowed' 
          : 'bg-gradient-to-r from-monash-blue to-monash-blue hover:from-deep-sapphire hover:to-deep-sapphire shadow-lg shadow-monash-blue/30'
      )}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.button>
  );
}

// Secondary Button
function SecondaryButton({ children, onClick, icon: Icon }: { 
  children: React.ReactNode; 
  onClick: () => void;
  icon?: React.ElementType;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full h-14 rounded-none font-semibold text-slate-700 bg-vapor-grey hover:bg-slate-300 border border-slate-300 flex items-center justify-center gap-2 transition-all"
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}

// Input Field
function InputField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  icon: Icon,
  suffix
}: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  type?: string;
  icon?: React.ElementType;
  suffix?: string;
}) {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className={clsx(
        'relative h-14 rounded-none border-2 transition-all duration-200',
        focused ? 'border-monash-blue ring-4 ring-monash-blue/20' : 'border-slate-300'
      )}>
        {Icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            'w-full h-full bg-transparent rounded-none text-slate-900 placeholder-slate-500 focus:outline-none',
            Icon ? 'pl-12 pr-4' : 'px-4',
            suffix && 'pr-16'
          )}
        />
        {suffix && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-600 font-medium">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}

// Progress Steps - Inverted for blue background (no container, light colors)
function ProgressSteps({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  // currentStep is 1-indexed (1 = first step)
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepNum = i + 1; // Convert to 1-indexed
        return (
          <motion.div
            key={i}
            initial={{ scale: 0.8 }}
            animate={{ scale: stepNum <= currentStep ? 1 : 0.8 }}
            className={clsx(
              'h-3 rounded-full transition-all duration-300',
              stepNum === currentStep 
                ? 'w-10 bg-white shadow-md shadow-white/30' 
                : stepNum < currentStep 
                  ? 'w-3 bg-white' 
                  : 'w-3 bg-white/40'
            )}
          />
        );
      })}
      <span className="ml-2 text-sm font-medium text-white">
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PremiumPathwaysFinder() {
  const [state, setState] = useState<AppState>({
    step: 'welcome',
    status: null,
    atarType: null,
    actualAtar: null,
    predictedRange: null,
    postcode: '',
    postcodeData: null,
    selectedCourse: null,
    tafeQual: null,
    email: ''
  });
  
  const [showTip, setShowTip] = useState(true);
  const [currentTip, setCurrentTip] = useState(TIPS.welcome);
  
  // Update tip based on step
  useEffect(() => {
    const tip = TIPS[state.step] || TIPS.welcome;
    setCurrentTip(tip);
    setShowTip(true);
  }, [state.step]);

  // Calculate selection rank
  const getSelectionRank = () => {
    let baseAtar = 0;
    if (state.atarType === 'actual' && state.actualAtar) {
      baseAtar = state.actualAtar;
    } else if (state.atarType === 'predicted' && state.predictedRange) {
      baseAtar = (state.predictedRange.low + state.predictedRange.high) / 2;
    }
    return calculateSelectionRank(baseAtar, state.postcodeData);
  };
  
  // Get step number for progress - handles different flows
  const getStepNumber = (): { current: number; total: number } => {
    // Year 12 flow: welcome -> status -> atar-type -> atar-input -> postcode -> course -> result -> email
    const year12Steps: Step[] = ['welcome', 'status', 'atar-type', 'atar-input', 'postcode', 'course', 'result', 'email'];
    // TAFE flow: welcome -> status -> tafe-qual -> tafe-course -> tafe-result -> email
    const tafeSteps: Step[] = ['welcome', 'status', 'tafe-qual', 'tafe-course', 'tafe-result', 'email'];
    // Mature Age flow: welcome -> status -> mature-course -> mature-result -> email
    const matureSteps: Step[] = ['welcome', 'status', 'mature-course', 'mature-result', 'email'];
    
    // Determine which flow we're in based on current step or status
    if (tafeSteps.includes(state.step) || state.status === 'tafe') {
      const idx = tafeSteps.indexOf(state.step);
      return { current: idx >= 0 ? idx + 1 : 1, total: tafeSteps.length - 1 }; // -1 to exclude email from count
    }
    if (matureSteps.includes(state.step) || state.status === 'mature') {
      const idx = matureSteps.indexOf(state.step);
      return { current: idx >= 0 ? idx + 1 : 1, total: matureSteps.length - 1 };
    }
    // Default to Year 12 flow
    const idx = year12Steps.indexOf(state.step);
    return { current: idx >= 0 ? idx + 1 : 1, total: year12Steps.length - 1 };
  };
  
  // Navigation
  const goToStep = (step: Step) => {
    setState(prev => ({ ...prev, step }));
  };
  
  const goBack = () => {
    const backMap: Partial<Record<Step, Step>> = {
      'status': 'welcome',
      'atar-type': 'status',
      'atar-input': 'atar-type',
      'postcode': 'atar-input',
      'course': 'postcode',
      'result': 'course',
      'tafe-qual': 'status',
      'tafe-course': 'tafe-qual',
      'tafe-result': 'tafe-course',
      'mature-course': 'status',
      'mature-result': 'mature-course',
      'international': 'status',
      'email': 'result'
    };
    const prevStep = backMap[state.step];
    if (prevStep) goToStep(prevStep);
  };
  
  // Render current step
  const renderStep = () => {
    switch (state.step) {
      case 'welcome':
        return (
          <div className="text-center space-y-8 py-8">
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-20 h-20 mx-auto rounded-none bg-gradient-to-br from-monash-blue to-deep-sapphire flex items-center justify-center shadow-xl shadow-monash-blue/30"
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight mb-3">
                Find Your Pathway
              </h1>
              <p className="text-slate-500 max-w-sm mx-auto font-sans">
                Let's discover the best way for you to get into your dream course.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PrimaryButton onClick={() => goToStep('status')} icon={ArrowRight}>
                Get Started
              </PrimaryButton>
            </motion.div>
          </div>
        );
        
      case 'status':
        return (
          <div className="space-y-6">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                What best describes you?
              </h2>
              <p className="text-slate-500 font-sans">Choose the option that fits your situation</p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <SelectionCard
                icon={GraduationCap}
                title="Year 12 Student"
                description="I'm currently in Year 12 or just finished."
                selected={state.status === 'year12'}
                onClick={() => setState(prev => ({ ...prev, status: 'year12' }))}
                index={0}
              />
              <SelectionCard
                icon={BookOpen}
                title={<><Acronym abbr="TAFE" full="Technical and Further Education">TAFE</Acronym> / <Acronym abbr="VET" full="Vocational Education and Training">VET</Acronym> Graduate</>}
                description="I have a Certificate IV, Diploma, or similar."
                selected={state.status === 'tafe'}
                onClick={() => setState(prev => ({ ...prev, status: 'tafe' }))}
                index={1}
              />
              <SelectionCard
                icon={Briefcase}
                title="Mature Age"
                description="I'm working or returning to study."
                selected={state.status === 'mature'}
                onClick={() => setState(prev => ({ ...prev, status: 'mature' }))}
                index={2}
              />
              <SelectionCard
                icon={Globe}
                title="International Student"
                description="I'm an international student."
                selected={state.status === 'international'}
                onClick={() => setState(prev => ({ ...prev, status: 'international' }))}
                index={3}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => {
                  if (state.status === 'year12') goToStep('atar-type');
                  else if (state.status === 'tafe') goToStep('tafe-qual');
                  else if (state.status === 'mature') goToStep('mature-course');
                  else if (state.status === 'international') goToStep('international');
                }} 
                disabled={!state.status}
                icon={ArrowRight}
              >
                Continue
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'atar-type':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                Your <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym> Score
              </h2>
              <p className="text-slate-500 font-sans">Do you have your final <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym> or a prediction?</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <SelectionCard
                icon={Target}
                title={<>Actual <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym></>}
                description="I have my final ATAR score."
                selected={state.atarType === 'actual'}
                onClick={() => setState(prev => ({ ...prev, atarType: 'actual' }))}
                index={0}
              />
              <SelectionCard
                icon={TrendingUp}
                title={<>Predicted <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym></>}
                description="I'm using an estimated range."
                selected={state.atarType === 'predicted'}
                onClick={() => setState(prev => ({ ...prev, atarType: 'predicted' }))}
                index={1}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('atar-input')} 
                disabled={!state.atarType}
                icon={ArrowRight}
              >
                Continue
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'atar-input':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                {state.atarType === 'actual' ? <>Enter Your <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym></> : 'Select Your Range'}
              </h2>
              <p className="text-slate-500">
                {state.atarType === 'actual' 
                  ? <>Enter your final <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym> score</>
                  : 'Choose the range that matches your prediction'}
              </p>
            </div>
            
            {state.atarType === 'actual' ? (
              <InputField
                label="ATAR Score (Australian Tertiary Admission Rank)"
                value={state.actualAtar?.toString() || ''}
                onChange={(v) => setState(prev => ({ ...prev, actualAtar: parseFloat(v) || null }))}
                placeholder="e.g., 75.50"
                type="number"
                icon={Target}
              />
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {ATAR_RANGES.map(range => (
                  <motion.button
                    key={range.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setState(prev => ({ 
                      ...prev, 
                      predictedRange: { low: range.low, high: range.high } 
                    }))}
                    className={clsx(
                      'p-4 rounded-none border-2 text-center font-semibold transition-all',
                      state.predictedRange?.low === range.low
                        ? 'border-monash-blue bg-white ring-2 ring-monash-blue/30 text-deep-sapphire shadow-md'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 shadow-sm'
                    )}
                  >
                    {range.label}
                  </motion.button>
                ))}
              </div>
            )}
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('postcode')} 
                disabled={state.atarType === 'actual' ? !state.actualAtar : !state.predictedRange}
                icon={ArrowRight}
              >
                Continue
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'postcode':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Your Location
              </h2>
              <p className="text-slate-500">Enter your postcode to check for bonus points</p>
            </div>
            
            <InputField
              label="Postcode"
              value={state.postcode}
              onChange={(v) => {
                setState(prev => ({ 
                  ...prev, 
                  postcode: v,
                  postcodeData: POSTCODES[v] || null
                }));
              }}
              placeholder="e.g., 2830"
              icon={MapPin}
            />
            
            {state.postcodeData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-none bg-emerald-50 border border-emerald-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-emerald-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">{state.postcodeData.name}</p>
                    <p className="text-sm text-emerald-600">
                      {state.postcodeData.regional && 'Regional (+5 points) '}
                      {state.postcodeData.lowSES && <>Low <Acronym abbr="SES" full="Socio-Economic Status">SES</Acronym> (+3 points)</>}
                      {!state.postcodeData.regional && !state.postcodeData.lowSES && 'Metro area (no bonus)'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            
            <p className="text-xs text-slate-600 text-center">
              Try: 2830 (Regional + Low <Acronym abbr="SES" full="Socio-Economic Status">SES</Acronym>), 3350 (Regional), 3175 (Low <Acronym abbr="SES" full="Socio-Economic Status">SES</Acronym>), 3000 (Metro)
            </p>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('course')} 
                disabled={!state.postcode}
                icon={ArrowRight}
              >
                Continue
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'course':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Choose Your Course
              </h2>
              <p className="text-slate-500">Select the course you're interested in</p>
            </div>
            
            <div className="space-y-3">
              {COURSES.map(course => {
                const rank = getSelectionRank();
                const status = getEligibilityStatus(rank.total, course.cutoff, state.atarType === 'predicted');
                
                return (
                  <motion.button
                    key={course.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setState(prev => ({ ...prev, selectedCourse: course }))}
                    className={clsx(
                      'w-full p-4 rounded-none border-2 text-left transition-all flex items-center justify-between gap-4',
                      state.selectedCourse?.id === course.id
                        ? 'border-monash-blue bg-white ring-2 ring-monash-blue/30 shadow-md'
                        : 'border-slate-300 bg-white hover:border-slate-400 shadow-sm'
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-900 truncate">{course.name}</h3>
                      <p className="text-sm text-slate-500 truncate">Cutoff: {course.cutoff} • {course.faculty}</p>
                    </div>
                    <div className={clsx(
                      'px-3 py-1 rounded-none text-xs font-semibold whitespace-nowrap flex-shrink-0',
                      status === 'eligible' && 'bg-emerald-100 text-emerald-700',
                      status === 'borderline' && 'bg-amber-100 text-amber-700',
                      status === 'bridge' && 'bg-vapor-grey text-slate-700 border border-slate-300'
                    )}>
                      {status === 'eligible' && 'Likely Eligible'}
                      {status === 'borderline' && 'Borderline'}
                      {status === 'bridge' && 'Pathway Available'}
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('result')} 
                disabled={!state.selectedCourse}
                icon={ArrowRight}
              >
                See My Pathway
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'result':
        const rank = getSelectionRank();
        const eligibility = state.selectedCourse 
          ? getEligibilityStatus(rank.total, state.selectedCourse.cutoff, state.atarType === 'predicted')
          : 'bridge';
        const gap = state.selectedCourse ? state.selectedCourse.cutoff - rank.total : 0;
        
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className={clsx(
                  'w-16 h-16 mx-auto rounded-none flex items-center justify-center mb-4',
                  eligibility === 'eligible' && 'bg-emerald-100',
                  eligibility === 'borderline' && 'bg-amber-100',
                  eligibility === 'bridge' && 'bg-electric-sky/20'
                )}
              >
                {eligibility === 'eligible' && <CheckCircle2 className="w-8 h-8 text-emerald-600" />}
                {eligibility === 'borderline' && <AlertCircle className="w-8 h-8 text-amber-600" />}
                {eligibility === 'bridge' && <TrendingUp className="w-8 h-8 text-monash-blue" />}
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                {eligibility === 'eligible' && "You're Likely Eligible!"}
                {eligibility === 'borderline' && "You're in the Borderline Zone"}
                {eligibility === 'bridge' && "There's a Pathway for You"}
              </h2>
              <p className="text-slate-500">{state.selectedCourse?.name}</p>
            </div>
            
            {/* Selection Rank Visualization */}
            <div className="bg-vapor-grey rounded-none p-6">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">
                Your Selection Rank
              </h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-slate-900 tabular-nums">{rank.total.toFixed(2)}</span>
                <span className="text-slate-600 ml-2">/ 99.95</span>
              </div>
              <StackingBar 
                breakdown={rank.breakdown} 
                total={rank.total} 
                cutoff={state.selectedCourse?.cutoff || 0}
                showBridge={eligibility === 'bridge'}
                eligibility={eligibility}
                postcodeData={state.postcodeData}
              />
            </div>
            
            {/* Bridge Pathway Card */}
            {eligibility === 'bridge' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-none p-6 border border-amber-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-1">Bridge Pathway Available</h3>
                    <p className="text-sm text-amber-700 mb-3">
                      Monash College Diploma can bridge the {gap.toFixed(1)} point gap. 
                      Complete the diploma and transition directly into Year 2 of your degree.
                    </p>
                    <button className="text-sm font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1">
                      Learn about Monash College <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Application CTA */}
            <div className="bg-vapor-grey rounded-none p-6">
              <h3 className="font-bold text-indigo-900 mb-2">Ready to Apply?</h3>
              <p className="text-sm text-deep-sapphire mb-4">
                Apply through <Acronym abbr="VTAC" full="Victorian Tertiary Admissions Centre">VTAC</Acronym> using course code: <span className="font-mono font-bold">{state.selectedCourse?.vtacCode}</span>
              </p>
              <a 
                href="https://www.vtac.edu.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-monash-blue border-2 border-monash-blue rounded-none text-sm font-semibold hover:bg-monash-blue hover:text-white transition-colors"
              >
                Apply via <Acronym abbr="VTAC" full="Victorian Tertiary Admissions Centre">VTAC</Acronym> <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton onClick={() => goToStep('email')} icon={Mail}>
                Email My Results
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'tafe-qual':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Your <Acronym abbr="TAFE" full="Technical and Further Education">TAFE</Acronym> Qualification
              </h2>
              <p className="text-slate-500">Select your highest <Acronym abbr="TAFE" full="Technical and Further Education">TAFE</Acronym>/<Acronym abbr="VET" full="Vocational Education and Training">VET</Acronym> qualification</p>
            </div>
            
            <div className="space-y-3">
              {TAFE_QUALIFICATIONS.map(qual => (
                <motion.button
                  key={qual.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setState(prev => ({ ...prev, tafeQual: qual }))}
                  className={clsx(
                    'w-full p-4 rounded-none border-2 text-left transition-all',
                    state.tafeQual?.id === qual.id
                      ? 'border-monash-blue bg-white ring-2 ring-monash-blue/30 shadow-md'
                      : 'border-slate-300 bg-white hover:border-slate-400 shadow-sm'
                  )}
                >
                  <h3 className="font-semibold text-slate-900">{qual.name}</h3>
                  <p className="text-sm text-slate-500">Field: {qual.field}</p>
                </motion.button>
              ))}
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('tafe-course')} 
                disabled={!state.tafeQual}
                icon={ArrowRight}
              >
                Continue
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'tafe-course':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Choose Your Course
              </h2>
              <p className="text-slate-500">Based on your {state.tafeQual?.name}</p>
            </div>
            
            <div className="space-y-3">
              {COURSES.map(course => {
                const isDirectEntry = state.tafeQual?.field === 'Health' && course.id === 'nursing';
                const hasPathway = ['nursing', 'commerce', 'arts'].includes(course.id);
                
                return (
                  <motion.button
                    key={course.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setState(prev => ({ ...prev, selectedCourse: course }))}
                    className={clsx(
                      'w-full p-4 rounded-none border-2 text-left transition-all flex items-center justify-between',
                      state.selectedCourse?.id === course.id
                        ? 'border-monash-blue bg-white ring-2 ring-monash-blue/30 shadow-md'
                        : 'border-slate-300 bg-white hover:border-slate-400 shadow-sm'
                    )}
                  >
                    <div>
                      <h3 className="font-semibold text-slate-900">{course.name}</h3>
                      <p className="text-sm text-slate-500">{course.faculty}</p>
                    </div>
                    <div className={clsx(
                      'px-3 py-1 rounded-none text-xs font-semibold',
                      isDirectEntry && 'bg-emerald-100 text-emerald-700',
                      !isDirectEntry && hasPathway && 'bg-amber-100 text-amber-700',
                      !isDirectEntry && !hasPathway && 'bg-vapor-grey text-slate-700 border border-slate-300'
                    )}>
                      {isDirectEntry && '✓ Direct Entry'}
                      {!isDirectEntry && hasPathway && '◐ Pathway Required'}
                      {!isDirectEntry && !hasPathway && '○ Not Available'}
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('tafe-result')} 
                disabled={!state.selectedCourse}
                icon={ArrowRight}
              >
                See My Pathway
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'tafe-result':
        const isDirectEntry = state.tafeQual?.field === 'Health' && state.selectedCourse?.id === 'nursing';
        
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={clsx(
                  'w-16 h-16 mx-auto rounded-none flex items-center justify-center mb-4',
                  isDirectEntry ? 'bg-emerald-100' : 'bg-amber-100'
                )}
              >
                {isDirectEntry 
                  ? <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  : <AlertCircle className="w-8 h-8 text-amber-600" />
                }
              </motion.div>
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                {isDirectEntry ? 'Direct Entry Available!' : 'Pathway Required'}
              </h2>
              <p className="text-slate-500 font-sans">{state.selectedCourse?.name}</p>
            </div>
            
            {isDirectEntry ? (
              <div className="bg-emerald-50 rounded-none p-6 border border-emerald-200">
                <h3 className="font-display font-bold text-emerald-900 mb-2">You qualify for direct entry!</h3>
                <p className="text-sm font-sans text-emerald-700 mb-4">
                  Your {state.tafeQual?.name} articulates directly to this course. 
                  You may also be eligible for credit for prior learning.
                </p>
                <a 
                  href="https://www.monash.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-none text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Apply Direct <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="bg-amber-50 rounded-none p-6 border border-amber-200">
                <h3 className="font-display font-bold text-amber-900 mb-2">Foundation Year Required</h3>
                <p className="text-sm font-sans text-amber-700 mb-4">
                  Your qualification doesn't directly articulate to {state.selectedCourse?.name}. 
                  Consider completing a foundation year or bridging course.
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-none text-sm font-semibold hover:bg-amber-700 transition-colors">
                  Explore Pathways <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton onClick={() => goToStep('email')} icon={Mail}>
                Email My Results
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'mature-course':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                Choose Your Course
              </h2>
              <p className="text-slate-500 font-sans">As a mature age student, you have flexible entry options</p>
            </div>
            
            {/* Ghost Field Notice - ATAR fields are NOT shown */}
            <div className="bg-vapor-grey rounded-none p-4 flex items-center gap-3">
              <Info className="w-5 h-5 text-monash-blue flex-shrink-0" />
              <p className="text-sm text-deep-sapphire">
                As a mature age applicant, you don't need an <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym>. Entry is based on work experience, 
                prior study, and a personal statement.
              </p>
            </div>
            
            <div className="space-y-3">
              {COURSES.map(course => (
                <motion.button
                  key={course.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setState(prev => ({ ...prev, selectedCourse: course }))}
                  className={clsx(
                    'w-full p-4 rounded-none border-2 text-left transition-all',
                    state.selectedCourse?.id === course.id
                      ? 'border-monash-blue bg-white ring-2 ring-monash-blue/30 shadow-md'
                      : 'border-slate-300 bg-white hover:border-slate-400 shadow-sm'
                  )}
                >
                  <h3 className="font-display font-semibold text-slate-900">{course.name}</h3>
                  <p className="text-sm font-sans text-slate-500">{course.faculty}</p>
                </motion.button>
              ))}
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => goToStep('mature-result')} 
                disabled={!state.selectedCourse}
                icon={ArrowRight}
              >
                See My Options
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'mature-result':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 mx-auto rounded-none bg-electric-sky/20 flex items-center justify-center mb-4"
              >
                <Briefcase className="w-8 h-8 text-monash-blue" />
              </motion.div>
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                Your Pathway Options
              </h2>
              <p className="text-slate-500 font-sans">{state.selectedCourse?.name}</p>
            </div>
            
            <div className="bg-vapor-grey rounded-none p-6 border border-electric-sky/30">
              <h3 className="font-display font-bold text-indigo-900 mb-3">Apply Direct (No <Acronym abbr="ATAR" full="Australian Tertiary Admission Rank">ATAR</Acronym> Required)</h3>
              <ul className="space-y-2 text-sm font-sans text-deep-sapphire mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-monash-blue" />
                  Submit a personal statement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-monash-blue" />
                  Provide evidence of work experience (2+ years)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-monash-blue" />
                  Include any prior study transcripts
                </li>
              </ul>
              <a 
                href="https://www.monash.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-monash-blue text-white rounded-none text-sm font-semibold hover:bg-deep-sapphire transition-colors"
              >
                Apply Direct (Free) <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton onClick={() => goToStep('email')} icon={Mail}>
                Email My Results
              </PrimaryButton>
            </div>
          </div>
        );
        
      case 'international':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 mx-auto rounded-none bg-electric-sky/20 flex items-center justify-center mb-4"
              >
                <Globe className="w-8 h-8 text-monash-blue" />
              </motion.div>
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                Welcome, International Student!
              </h2>
              <p className="text-slate-500 font-sans">
                International students have unique pathways. Let's connect you with a specialist advisor.
              </p>
            </div>
            
            <div className="space-y-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="block p-4 rounded-none border-2 border-slate-300 hover:border-indigo-400 shadow-sm hover:bg-vapor-grey transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-electric-sky/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-monash-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900">Live Chat</h3>
                    <p className="text-sm font-sans text-slate-500">Chat with an advisor now</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                </div>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="block p-4 rounded-none border-2 border-slate-300 hover:border-indigo-400 shadow-sm hover:bg-vapor-grey transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-emerald-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900">Book a Video Call</h3>
                    <p className="text-sm font-sans text-slate-500">Schedule a 1:1 consultation</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                </div>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="block p-4 rounded-none border-2 border-slate-300 hover:border-indigo-400 shadow-sm hover:bg-vapor-grey transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-amber-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900">Country-Specific Guide</h3>
                    <p className="text-sm font-sans text-slate-500">Download entry requirements for your country</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                </div>
              </motion.a>
            </div>
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 mx-auto rounded-none bg-electric-sky/20 flex items-center justify-center mb-4"
              >
                <Mail className="w-8 h-8 text-monash-blue" />
              </motion.div>
              <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2">
                Save Your Results
              </h2>
              <p className="text-slate-500 font-sans">We'll email you a summary of your personalized pathway</p>
            </div>
            
            <InputField
              label="Email Address"
              value={state.email}
              onChange={(v) => setState(prev => ({ ...prev, email: v }))}
              placeholder="your.email@example.com"
              type="email"
              icon={Mail}
            />
            
            <div className="flex gap-3 pt-4">
              <SecondaryButton onClick={goBack} icon={ArrowLeft}>Back</SecondaryButton>
              <PrimaryButton 
                onClick={() => alert('Email sent! (Demo)')} 
                disabled={!state.email.includes('@')}
                icon={Mail}
              >
                Send My Results
              </PrimaryButton>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-sapphire via-monash-blue to-deep-sapphire font-sans premium-theme">
      <style>{`
        .premium-theme {
          --font-display: "Domine", serif;
        }
        .premium-theme h1, 
        .premium-theme h2, 
        .premium-theme h3, 
        .premium-theme h4 {
          font-family: var(--font-display);
        }
      `}</style>
      
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-sky/20 rounded-none blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-monash-blue/30 rounded-none blur-3xl" />
      </div>
      
      {/* Main Content */}
      <div className="relative pt-12 pb-16 px-4">
        <div className="max-w-lg mx-auto">
          {/* Logo - Always visible */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img 
              src="/assets/monash-logo.png" 
              alt="Monash University" 
              className="h-20 w-auto object-contain mix-blend-screen mb-6 opacity-90"
            />
            
            {/* Progress Indicators - Hidden on Welcome/International */}
            {state.step !== 'welcome' && state.step !== 'international' && (
              <>
                {state.step === 'email' ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setState({
                      step: 'welcome',
                      status: null,
                      atarType: null,
                      actualAtar: null,
                      predictedRange: null,
                      postcode: '',
                      postcodeData: null,
                      selectedCourse: null,
                      tafeQual: null,
                      email: ''
                    })}
                    className="bg-white/90 backdrop-blur-sm rounded-none px-6 py-3 shadow-lg border border-slate-200 flex items-center gap-2 text-monash-blue font-semibold hover:bg-white transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Start Over
                  </motion.button>
                ) : (
                  <div className="px-6 py-3">
                    <ProgressSteps currentStep={getStepNumber().current} totalSteps={getStepNumber().total} />
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Glass Card - stable container with content fade */}
          <div className="relative">
            <GlassCard className="p-8">
              <FadeContent stepKey={state.step}>
                {renderStep()}
              </FadeContent>
            </GlassCard>
          </div>
          
          {/* Demo Disclaimer */}
          <p className="text-center text-xs text-white/50 mt-6">
            For demonstration purposes only. May not be reproduced without written permission.
          </p>
        </div>
      </div>
    </div>
  );
}
