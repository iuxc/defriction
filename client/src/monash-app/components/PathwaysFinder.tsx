import { usePathways, type Step } from '../contexts/PathwaysContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, ArrowRight, RotateCcw, Mail, ExternalLink, MessageCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

// Progress indicator component
function ProgressBar({ currentStep }: { currentStep: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: 'welcome', label: '1' },
    { key: 'status-select', label: '2' },
    { key: 'year12-atar-type', label: '3' },
    { key: 'year12-atar-input', label: '4' },
    { key: 'year12-postcode', label: '5' },
    { key: 'year12-course-select', label: '6' },
    { key: 'year12-results', label: '7' },
  ];
  
  const matureSteps: { key: Step; label: string }[] = [
    { key: 'welcome', label: '1' },
    { key: 'status-select', label: '2' },
    { key: 'mature-qualification', label: '3' },
    { key: 'mature-course-select', label: '4' },
    { key: 'mature-results', label: '5' },
  ];
  
  const isMatureAge = ['mature-qualification', 'mature-course-select', 'mature-results'].includes(currentStep);
  const activeSteps = isMatureAge ? matureSteps : steps;
  const currentIndex = activeSteps.findIndex(s => s.key === currentStep);
  
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {activeSteps.map((step, index) => (
        <div key={step.key} className="flex items-center">
          <div 
            className={`w-8 h-8 flex items-center justify-center text-sm font-mono border border-gray-900 rounded-none
              ${index <= currentIndex ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
            `}
          >
            {step.label}
          </div>
          {index < activeSteps.length - 1 && (
            <div className={`w-8 h-0.5 ${index < currentIndex ? 'bg-gray-900' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// State debug panel
function StateDebug() {
  const { currentStep, userStatus, atarType, actualAtar, predictedAtarRange, postcode, postcodeData, selectedQualificationId } = usePathways();
  
  return (
    <div className="fixed bottom-4 right-4 bg-gray-100 border border-gray-300 p-3 text-xs font-mono max-w-xs">
      <div className="font-bold mb-2 text-gray-600">STATE DEBUG</div>
      <div>step: {currentStep}</div>
      <div>status: {userStatus || 'null'}</div>
      <div>atarType: {atarType || 'null'}</div>
      <div>actualAtar: {actualAtar || 'null'}</div>
      <div>predictedRange: {predictedAtarRange?.label || 'null'}</div>
      <div>postcode: {postcode || 'null'}</div>
      <div>regional: {postcodeData?.isRegional ? 'YES (+5)' : 'NO'}</div>
      <div>lowSES: {postcodeData?.isLowSES ? 'YES (+3)' : 'NO'}</div>
      <div>tafeQual: {selectedQualificationId || 'null'}</div>
    </div>
  );
}

// Welcome Step
function WelcomeStep() {
  const { goToStep, setIsInternational } = usePathways();
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 0: Welcome</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Find Your Pathway to Monash</h1>
      <p className="text-gray-600 mb-6">
        This tool will help you discover the best entry pathway based on your background and goals.
      </p>
      
      <div className="space-y-4">
        <div className="p-4 border-2 border-gray-900 hover:bg-gray-100 transition-colors rounded-none">
          <Label className="flex items-start gap-3 cursor-pointer">
            <input 
              type="radio" 
              name="residency" 
              className="mt-1 accent-black"
              onChange={() => {
                setIsInternational(false);
                goToStep('status-select');
              }}
            />
            <div>
              <div className="font-semibold text-gray-900">I am a Domestic Student</div>
              <div className="text-sm text-gray-600">Australian citizen, permanent resident, or NZ citizen</div>
            </div>
          </Label>
        </div>
        
        <div className="p-4 border-2 border-gray-900 hover:bg-gray-100 transition-colors rounded-none">
          <Label className="flex items-start gap-3 cursor-pointer">
            <input 
              type="radio" 
              name="residency" 
              className="mt-1 accent-black"
              onChange={() => {
                setIsInternational(true);
                goToStep('international-handoff');
              }}
            />
            <div>
              <div className="font-semibold text-gray-900">I am an International Student</div>
              <div className="text-sm text-gray-600">Studying on a student visa</div>
            </div>
          </Label>
        </div>
      </div>
    </div>
  );
}

// International Handoff Step
function InternationalHandoffStep() {
  const { goBack } = usePathways();
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">International Students</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Welcome, International Student!</h1>
      <p className="text-gray-600 mb-6">
        International students have unique pathways and requirements. Our Global Admissions team can provide personalized guidance for your situation.
      </p>
      
      <div className="bg-gray-50 border-2 border-gray-900 p-6 mb-6 rounded-none">
        <h2 className="font-semibold mb-4 text-gray-900">Connect with a Global Advisor</h2>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start gap-3 rounded-none border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-black">
            <MessageCircle className="w-4 h-4" />
            Start Live Chat
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 rounded-none border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-black">
            <Calendar className="w-4 h-4" />
            Book a Video Call
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 rounded-none border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-black">
            <ExternalLink className="w-4 h-4" />
            Explore International Pathways
          </Button>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Our advisors speak multiple languages and understand visa requirements, English language prerequisites, and country-specific qualifications.
      </p>
      
      <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
    </div>
  );
}

// Status Selection Step
function StatusSelectStep() {
  const { goToStep, goBack, setUserStatus } = usePathways();
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 1: Your Status</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">What best describes you?</h1>
      <p className="text-gray-600 mb-6">
        This helps us show you the most relevant pathway options.
      </p>
      
      <div className="space-y-4 mb-6">
        <div 
          className="p-4 border-2 border-gray-900 hover:bg-gray-100 transition-colors cursor-pointer rounded-none"
          onClick={() => {
            setUserStatus('year12');
            goToStep('year12-atar-type');
          }}
        >
          <div className="font-semibold text-gray-900">Year 12 Student</div>
          <div className="text-sm text-gray-600">Currently completing or recently completed Year 12 with an ATAR</div>
        </div>
        
        <div 
          className="p-4 border-2 border-gray-900 hover:bg-gray-100 transition-colors cursor-pointer rounded-none"
          onClick={() => {
            setUserStatus('mature-age');
            goToStep('mature-qualification');
          }}
        >
          <div className="font-semibold text-gray-900">Mature Age / TAFE Graduate</div>
          <div className="text-sm text-gray-600">Completed a TAFE diploma, certificate, or have work experience</div>
        </div>
      </div>
      
      <div className="wire-ghost p-3 mb-6 border border-dashed border-gray-400 bg-gray-50 rounded-none">
        <span className="wire-label">Ghost Field Logic</span>
        <p className="text-sm text-gray-600 mt-1">
          If "Mature Age" is selected, ATAR input fields will be HIDDEN from subsequent steps.
        </p>
      </div>
      
      <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
    </div>
  );
}

// Year 12: ATAR Type Selection
function Year12AtarTypeStep() {
  const { goToStep, goBack, setAtarType } = usePathways();
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 2: ATAR Status</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Do you have your ATAR yet?</h1>
      
      <div className="space-y-4 mb-6">
        <div 
          className="p-4 border-2 border-gray-900 hover:bg-gray-100 transition-colors cursor-pointer rounded-none"
          onClick={() => {
            setAtarType('actual');
            goToStep('year12-atar-input');
          }}
        >
          <div className="font-semibold text-gray-900">Yes, I have my actual ATAR</div>
          <div className="text-sm text-gray-600">I know my exact score (e.g., 75.50)</div>
        </div>
        
        <div 
          className="p-4 border-2 border-gray-900 hover:bg-gray-100 transition-colors cursor-pointer rounded-none"
          onClick={() => {
            setAtarType('predicted');
            goToStep('year12-atar-input');
          }}
        >
          <div className="font-semibold text-gray-900">No, I'm estimating / predicting</div>
          <div className="text-sm text-gray-600">I'll select a range based on my expected results</div>
        </div>
      </div>
      
      <div className="wire-ghost p-3 mb-6 border border-dashed border-gray-400 bg-gray-50 rounded-none">
        <span className="wire-label">Predicted Toggle Logic</span>
        <p className="text-sm text-gray-600 mt-1">
          "Predicted" selection will show range selector instead of exact input, and output soft eligibility language.
        </p>
      </div>
      
      <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
    </div>
  );
}

// Year 12: ATAR Input
function Year12AtarInputStep() {
  const { atarType, actualAtar, predictedAtarRange, goToStep, goBack, setActualAtar, setPredictedAtarRange, getAtarRanges } = usePathways();
  const [localAtar, setLocalAtar] = useState(actualAtar?.toString() || '');
  const ranges = getAtarRanges();
  
  const handleContinue = () => {
    if (atarType === 'actual' && localAtar) {
      setActualAtar(parseFloat(localAtar));
    }
    goToStep('year12-postcode');
  };
  
  const isValid = atarType === 'actual' 
    ? localAtar && parseFloat(localAtar) >= 0 && parseFloat(localAtar) <= 99.95
    : predictedAtarRange !== null;
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 3: Your ATAR</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">
        {atarType === 'actual' ? 'Enter your ATAR' : 'Select your predicted ATAR range'}
      </h1>
      
      {atarType === 'actual' ? (
        <div className="mb-6">
          <Label htmlFor="atar-input" className="text-sm text-gray-900 mb-2 block font-semibold">
            Your ATAR (0.00 - 99.95)
          </Label>
          <Input
            id="atar-input"
            type="number"
            step="0.05"
            min="0"
            max="99.95"
            value={localAtar}
            onChange={(e) => setLocalAtar(e.target.value)}
            placeholder="e.g., 75.50"
            className="text-lg rounded-none border-2 border-gray-900 focus-visible:ring-0 focus-visible:border-black text-gray-900 bg-white"
          />
        </div>
      ) : (
        <div className="mb-6">
          <RadioGroup 
            value={predictedAtarRange?.id || ''} 
            onValueChange={(id) => {
              const range = ranges.find(r => r.id === id);
              if (range) setPredictedAtarRange(range);
            }}
          >
            {ranges.map(range => (
              <div key={range.id} className="flex items-center space-x-3 p-3 border border-gray-300 hover:bg-gray-100 mb-2 rounded-none">
                <RadioGroupItem value={range.id} id={range.id} className="text-black border-black" />
                <Label htmlFor={range.id} className="flex-1 cursor-pointer text-gray-900 font-medium">
                  {range.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <div className="wire-ghost p-3 mt-4 border border-dashed border-gray-400 bg-gray-50 rounded-none">
            <span className="wire-label">Soft Language Note</span>
            <p className="text-sm text-gray-600 mt-1">
              Predicted ranges will output "Likely Eligible" or "Borderline" instead of definitive Yes/No.
            </p>
          </div>
        </div>
      )}
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={handleContinue} disabled={!isValid} className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black">
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// Year 12: Postcode Input
function Year12PostcodeStep() {
  const { postcode, postcodeData, goToStep, goBack, setPostcode, calculateYear12Results } = usePathways();
  const [localPostcode, setLocalPostcode] = useState(postcode);
  
  const handlePostcodeChange = (value: string) => {
    setLocalPostcode(value);
    if (value.length === 4) {
      setPostcode(value);
    }
  };
  
  const handleContinue = () => {
    calculateYear12Results();
    goToStep('year12-course-select');
  };
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 4: Your Location</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">What's your postcode?</h1>
      <p className="text-gray-600 mb-4">
        Regional and low-SES students may receive bonus points toward their Selection Rank.
      </p>
      
      <div className="mb-6">
        <Label htmlFor="postcode-input" className="text-sm text-gray-900 mb-2 block font-semibold">
          Australian Postcode
        </Label>
        <Input
          id="postcode-input"
          type="text"
          maxLength={4}
          value={localPostcode}
          onChange={(e) => handlePostcodeChange(e.target.value)}
          placeholder="e.g., 3000"
          className="text-lg rounded-none border-2 border-gray-900 focus-visible:ring-0 focus-visible:border-black text-gray-900 bg-white"
        />
        
        {postcodeData && (
          <div className="mt-4 p-4 bg-gray-50 border border-gray-300 animate-fade-in rounded-none">
            <div className="font-semibold text-gray-900">{postcodeData.region}</div>
            <div className="flex gap-4 mt-2">
              {postcodeData.isRegional && (
                <span className="wire-state bg-gray-600 text-white">Regional +{postcodeData.regionalBonus} pts</span>
              )}
              {postcodeData.isLowSES && (
                <span className="wire-state bg-gray-500 text-white">Low SES +{postcodeData.sesBonus} pts</span>
              )}
              {!postcodeData.isRegional && !postcodeData.isLowSES && (
                <span className="wire-state bg-gray-300 text-gray-800">Metro (No bonus)</span>
              )}
            </div>
          </div>
        )}
        
        {localPostcode.length === 4 && !postcodeData && (
          <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-none">
            <span className="wire-state">Postcode not in database - assuming Metro (No bonus)</span>
          </div>
        )}
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        Try: 2830 (Regional + Low SES), 3350 (Regional), 3175 (Low SES Metro), 3000 (Metro)
      </p>
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={handleContinue} disabled={localPostcode.length !== 4} className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black">
          See My Results
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// Year 12: Course Selection with Results
function Year12CourseSelectStep() {
  const { year12Results, atarType, goToStep, goBack } = usePathways();
  const isPredicted = atarType === 'predicted';
  
  // Get first result for the stacking visualization
  const sampleResult = year12Results[0];
  
  const getEligibilityLabel = (eligibility: string) => {
    switch (eligibility) {
      case 'eligible': return 'Eligible';
      case 'likely': return 'Likely Eligible';
      case 'borderline': return 'Borderline';
      case 'unlikely': return 'Unlikely';
      case 'ineligible': return 'Not Eligible';
      default: return eligibility;
    }
  };
  
  const getEligibilityStyle = (eligibility: string) => {
    switch (eligibility) {
      case 'eligible':
      case 'likely':
        return 'bg-gray-900 text-white rounded-none';
      case 'borderline':
        return 'bg-gray-600 text-white rounded-none';
      case 'unlikely':
      case 'ineligible':
        return 'bg-gray-200 text-gray-900 rounded-none border border-gray-300';
      default:
        return 'bg-gray-200 text-gray-900 rounded-none';
    }
  };
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 5: Your Results</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Your Selection Rank</h1>
      
      {/* Stacking Animation Visualization */}
      {sampleResult && (
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200">
          <span className="wire-label mb-3 block">Selection Rank Calculation</span>
          
          <div className="space-y-2">
            {/* Base ATAR bar */}
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm text-gray-900 font-medium">Base ATAR</div>
              <div className="flex-1 bg-gray-200 h-8 relative">
                <div 
                  className="bridge-bar bridge-current animate-grow bg-black"
                  style={{ width: `${(sampleResult.breakdown.base / 100) * 100}%` }}
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-sm text-black font-bold">
                  {sampleResult.breakdown.base.toFixed(2)}
                </span>
              </div>
            </div>
            
            {/* Regional bonus bar */}
            {sampleResult.breakdown.regional > 0 && (
              <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-24 text-sm text-gray-900 font-medium">Regional</div>
                <div className="flex-1 bg-gray-200 h-8 relative">
                  <div 
                    className="bridge-bar bg-gray-700 animate-grow"
                    style={{ 
                      width: `${(sampleResult.breakdown.regional / 100) * 100}%`,
                      animationDelay: '0.3s'
                    }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-sm text-black font-bold">
                    +{sampleResult.breakdown.regional}
                  </span>
                </div>
              </div>
            )}
            
            {/* Low SES bonus bar */}
            {sampleResult.breakdown.ses > 0 && (
              <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-24 text-sm text-gray-900 font-medium">Low SES</div>
                <div className="flex-1 bg-gray-200 h-8 relative">
                  <div 
                    className="bridge-bar bg-gray-600 animate-grow"
                    style={{ 
                      width: `${(sampleResult.breakdown.ses / 100) * 100}%`,
                      animationDelay: '0.5s'
                    }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-sm text-black font-bold">
                    +{sampleResult.breakdown.ses}
                  </span>
                </div>
              </div>
            )}
            
            {/* Total */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-400 mt-2">
              <div className="w-24 text-sm font-bold text-gray-900">Total</div>
              <div className="font-mono text-xl font-bold text-black">
                {sampleResult.selectionRank.toFixed(2)}
              </div>
              {isPredicted && (
                <span className="wire-state ml-2 text-gray-900 font-medium">Estimated (Predicted ATAR)</span>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Course Results */}
      <h2 className="font-semibold mb-4">Course Eligibility</h2>
      <div className="space-y-3 mb-6">
        {year12Results.map((result) => (
          <div key={result.course.id} className="border border-gray-300 p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold text-black">{result.course.name}</div>
                <div className="text-sm text-gray-800 font-medium">
                  Cutoff: {result.course.cutoff} | VTAC: {result.course.vtacCode}
                </div>
              </div>
              <span className={`px-3 py-1 text-sm font-bold ${getEligibilityStyle(result.eligibility)}`}>
                {getEligibilityLabel(result.eligibility)}
              </span>
            </div>
            
            {/* Bridge Visualization for ineligible courses */}
            {(result.eligibility === 'ineligible' || result.eligibility === 'unlikely') && result.gap && (
              <div className="mt-3 p-3 bg-gray-50 border border-dashed border-gray-400">
                <span className="wire-label mb-2 block text-gray-900 font-bold">Bridge Visualization</span>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 bg-gray-200 h-6 relative flex border border-gray-300">
                    {/* Your rank */}
                    <div 
                      className="bridge-current h-full bg-gray-800"
                      style={{ width: `${(result.selectionRank / result.course.cutoff) * 100}%` }}
                    />
                    {/* The gap */}
                    <div 
                      className="bridge-gap h-full flex items-center justify-center text-xs bg-gray-400 text-black font-bold"
                      style={{ width: `${(result.gap / result.course.cutoff) * 100}%` }}
                    >
                      Gap: {result.gap.toFixed(1)}
                    </div>
                  </div>
                  <span className="font-mono text-sm text-black font-bold">{result.course.cutoff}</span>
                </div>
                
                {/* Pathway CTA */}
                <div className="flex items-center gap-2 mt-3 p-2 bg-gray-100 border border-gray-300">
                  <div className="bridge-pathway w-4 h-4 bg-gray-800" />
                  <span className="text-sm text-gray-900">
                    <strong>Monash College</strong> can bridge this gap
                  </span>
                  <Button variant="outline" size="sm" className="ml-auto border-gray-900 text-gray-900 hover:bg-gray-200 rounded-none">
                    Explore Pathway
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Smart Route Output */}
      <div className="bg-gray-100 border-2 border-gray-300 p-4 mb-6 rounded-none">
        <span className="wire-label mb-2 block text-gray-900 font-bold">Smart Route Output</span>
        <div className="font-semibold mb-2 text-black">How to Apply (Year 12)</div>
        <p className="text-sm text-gray-900 mb-3 font-medium">
          As a Year 12 student, apply through VTAC (Victorian Tertiary Admissions Centre).
        </p>
        <Button className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black w-full justify-center">
          <ExternalLink className="w-4 h-4" />
          Apply via VTAC
        </Button>
      </div>
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={() => goToStep('email-capture')} variant="outline" className="gap-2 rounded-none border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-black">
          <Mail className="w-4 h-4" />
          Email My Results
        </Button>
      </div>
    </div>
  );
}

// Mature Age: Qualification Selection
function MatureQualificationStep() {
  const { selectedQualificationId, goToStep, goBack, setQualification, getQualifications, calculateMatureAgeResults } = usePathways();
  const qualifications = getQualifications();
  
  const handleContinue = () => {
    calculateMatureAgeResults();
    goToStep('mature-course-select');
  };
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 3: Your Qualification</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">What qualification do you hold?</h1>
      
      <div className="wire-ghost p-3 mb-4 border border-dashed border-gray-400 bg-gray-50 rounded-none">
        <span className="wire-label">Ghost Field: ATAR Input</span>
        <p className="text-sm text-gray-600 mt-1">
          ATAR input fields are HIDDEN for Mature Age pathway. This field would appear for Year 12 students.
        </p>
      </div>
      
      <div className="mb-6">
        <RadioGroup 
          value={selectedQualificationId || ''} 
          onValueChange={setQualification}
        >
          {qualifications.map(qual => (
            <div key={qual.id} className="flex items-center space-x-3 p-3 border border-gray-300 hover:bg-gray-100 mb-2 rounded-none">
              <RadioGroupItem value={qual.id} id={qual.id} className="text-black border-black" />
              <Label htmlFor={qual.id} className="flex-1 cursor-pointer">
                <div className="text-gray-900 font-medium">{qual.name}</div>
                <div className="text-sm text-gray-600">{qual.field} • {qual.level.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={handleContinue} disabled={!selectedQualificationId} className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black">
          See My Options
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// Mature Age: Course Selection with Partial Match Badges
function MatureCourseSelectStep() {
  const { matureAgeResults, goToStep, goBack } = usePathways();
  
  const getBadgeStyle = (eligibility: string) => {
    switch (eligibility) {
      case 'direct':
        return 'badge-eligible';
      case 'pathway':
        return 'badge-pathway';
      case 'unavailable':
        return 'badge-unavailable';
      default:
        return 'bg-gray-200';
    }
  };
  
  const getBadgeLabel = (eligibility: string) => {
    switch (eligibility) {
      case 'direct':
        return '✓ Direct Entry';
      case 'pathway':
        return '◐ Pathway Required';
      case 'unavailable':
        return '○ Not Available';
      default:
        return eligibility;
    }
  };
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 4: Course Eligibility</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Your Course Options</h1>
      
      <div className="wire-ghost p-3 mb-4 border border-dashed border-gray-400 bg-gray-50 rounded-none">
        <span className="wire-label">Partial Match Badge System</span>
        <p className="text-sm text-gray-600 mt-1">
          Courses are NOT hidden. Instead, badges explain eligibility status transparently.
        </p>
      </div>
      
      <div className="space-y-3 mb-6">
        {matureAgeResults.map((result) => (
          <div key={result.course.id} className="border border-gray-300 p-4 rounded-none">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold text-gray-900">{result.course.name}</div>
              <span className={`px-3 py-1 text-sm font-medium rounded-none ${getBadgeStyle(result.eligibility)}`}>
                {getBadgeLabel(result.eligibility)}
              </span>
            </div>
            
            {result.note && (
              <div className="mt-2 p-3 bg-gray-100 border-l-4 border-gray-500 text-sm text-gray-700">
                {result.note}
              </div>
            )}
            
            {result.eligibility === 'pathway' && (
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-100">View Pathway Details</Button>
                <Button variant="outline" size="sm" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-100">Contact Admissions</Button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Smart Route Output for Mature Age */}
      <div className="bg-gray-100 border-2 border-gray-300 p-4 mb-6 rounded-none">
        <span className="wire-label mb-2 block">Smart Route Output</span>
        <div className="font-semibold mb-2 text-gray-900">How to Apply (Mature Age)</div>
        <p className="text-sm text-gray-600 mb-3">
          As a mature-age applicant, you can apply directly to Monash University.
        </p>
        <Button className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black">
          <ExternalLink className="w-4 h-4" />
          Apply Direct to Monash
        </Button>
      </div>
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={() => goToStep('email-capture')} variant="outline" className="gap-2 rounded-none border-gray-900 text-gray-900 hover:bg-gray-100">
          <Mail className="w-4 h-4" />
          Email My Results
        </Button>
      </div>
    </div>
  );
}

// Email Capture Step
function EmailCaptureStep() {
  const { userEmail, setUserEmail, goBack, reset } = usePathways();
  const [localEmail, setLocalEmail] = useState(userEmail);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setUserEmail(localEmail);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="wire-panel animate-slide-in text-center">
        <span className="wire-label">Email Sent</span>
        <div className="py-8">
          <div className="w-16 h-16 bg-gray-900 rounded-none flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-slate-900">Check Your Inbox!</h1>
          <p className="text-gray-600 mb-6">
            We've sent your personalized pathway plan to <strong>{localEmail}</strong>
          </p>
          <Button onClick={reset} className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black">
            <RotateCcw className="w-4 h-4" />
            Start Over
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="wire-panel animate-slide-in">
      <span className="wire-label">Step 7: Save Your Results</span>
      <h1 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Email My Pathway Plan</h1>
      <p className="text-gray-600 mb-6">
        Get a summary of your personalized pathway options sent to your inbox.
      </p>
      
      <div className="mb-6">
        <Label htmlFor="email-input" className="text-sm text-gray-900 mb-2 block font-semibold">
          Your Email Address
        </Label>
        <Input
          id="email-input"
          type="email"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="text-lg rounded-none border-2 border-gray-900 focus-visible:ring-0 focus-visible:border-black text-gray-900 bg-white"
        />
      </div>
      
      <div className="wire-ghost p-3 mb-6 border border-dashed border-gray-400 bg-gray-50 rounded-none">
        <span className="wire-label">Lead Generation Hook</span>
        <p className="text-sm text-gray-600 mt-1">
          This captures high-intent user emails for the university's CRM.
        </p>
      </div>
      
      <div className="flex justify-between">
        <Button variant="ghost" onClick={goBack} className="gap-2 rounded-none text-gray-900 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={!localEmail.includes('@')} className="gap-2 rounded-none bg-gray-900 text-white hover:bg-black">
          <Mail className="w-4 h-4" />
          Send My Plan
        </Button>
      </div>
    </div>
  );
}

// Main PathwaysFinder component
export default function PathwaysFinder() {
  const { currentStep } = usePathways();
  
  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeStep />;
      case 'international-handoff':
        return <InternationalHandoffStep />;
      case 'status-select':
        return <StatusSelectStep />;
      case 'year12-atar-type':
        return <Year12AtarTypeStep />;
      case 'year12-atar-input':
        return <Year12AtarInputStep />;
      case 'year12-postcode':
        return <Year12PostcodeStep />;
      case 'year12-course-select':
      case 'year12-results':
        return <Year12CourseSelectStep />;
      case 'mature-qualification':
        return <MatureQualificationStep />;
      case 'mature-course-select':
      case 'mature-results':
        return <MatureCourseSelectStep />;
      case 'email-capture':
        return <EmailCaptureStep />;
      default:
        return <WelcomeStep />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
            <span className="wire-label">Gray Box Wireframe Prototype</span>
          </div>
          <h1 className="text-lg font-semibold mt-2 text-slate-900">Pathways Finder</h1>
        </div>
        
        {/* Progress */}
        {currentStep !== 'welcome' && currentStep !== 'international-handoff' && currentStep !== 'email-capture' && (
          <ProgressBar currentStep={currentStep} />
        )}
        
        {/* Current Step */}
        {renderStep()}
        
      </div>
    </div>
  );
}
