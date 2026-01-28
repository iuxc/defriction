import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface FrictionLogModalBProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FrictionLogModalB({ open, onOpenChange }: FrictionLogModalBProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 bg-white text-slate-900 border-none overflow-hidden flex flex-col">
        <div className="relative z-10 flex-none p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md">
          <div className="absolute right-4 top-4">
            <button 
              onClick={() => onOpenChange(false)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
          <DialogHeader className="text-left pr-10">
            <DialogTitle className="text-2xl font-display font-bold text-slate-900 mb-1">
              User B Friction Log
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-monash-blue">
              Year 12 Student with Low ATAR (60.00) Seeking Monash College Pathway
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 max-w-3xl mx-auto space-y-12">
            
            {/* User Profile */}
            <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">User Profile</h3>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-[120px] text-slate-900">Persona:</span>
                  <span className="text-slate-700">Year 12 student in Victoria</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-[120px] text-slate-900">ATAR:</span>
                  <span className="text-slate-700">60.00 (below typical Monash direct entry requirements)</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-[120px] text-slate-900">Goal:</span>
                  <span className="text-slate-700">Find a pathway to a Monash University degree via Monash College diploma</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-[120px] text-slate-900">Mental Model:</span>
                  <span className="text-slate-700 italic">"I didn't get the ATAR I needed, but I've heard there's a pathway through Monash College"</span>
                </div>
              </div>
            </section>

            {/* Journey Step 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 1</span>
                <h3 className="text-xl font-bold text-slate-900">Starting at Monash University Homepage</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4">
                URL: https://www.monash.edu
              </div>

              <div className="text-sm text-slate-700 mb-4">
                User B arrives at the Monash homepage, looking for information about alternative pathways for students with lower ATARs.
              </div>

            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 2</span>
                <h3 className="text-xl font-bold text-slate-900">Looking for Domestic Student Information</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4">
                URL: https://www.monashcollege.edu.au/
              </div>

              <div className="text-sm text-slate-700 mb-4">
                User B notices the site seems oriented toward international students. Looking for domestic student pathway information.
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-2">Friction Point 2: 404 Error on Pathways Page</h4>
                <div className="text-sm text-slate-700 space-y-2">
                   <p className="font-mono text-xs bg-red-100 p-1 rounded inline-block">URL: https://www.monash.edu/study/how-to-apply/pathways</p>
                   <p className="font-bold text-red-800">Result: PAGE NOT FOUND (Error 404)</p>
                   <p>User B attempting to find pathways information encounters a dead end. The logical URL for pathways does not exist.</p>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 3</span>
                <h3 className="text-xl font-bold text-slate-900">Trying to Find Entry Pathways from Monash Study Site</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monash.edu/study/courses/entry-pathways-domestic
              </div>

              <div className="text-sm text-slate-700 mb-4">
                User B finally found this page through external search. The page lists multiple pathway options but creates confusion.
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="p-3 border-b border-slate-200">Pathway</th>
                      <th className="p-3 border-b border-slate-200">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 bg-white">Diploma of Tertiary Studies (DoTS)</td>
                      <td className="p-3 bg-white">Monash University program</td>
                    </tr>
                    <tr>
                      <td className="p-3 bg-white">Monash College Diplomas</td>
                      <td className="p-3 bg-white">Separate institution</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-4">Critical Friction Point</h4>
                <div className="space-y-3 text-sm text-slate-700">
                   <p>The page mentions "Monash College Diplomas" but:</p>
                   <ol className="list-decimal list-outside ml-4 space-y-1">
                     <li>Links to an EXTERNAL website (monashcollege.edu.au)</li>
                     <li>Does NOT specify ATAR requirements for domestic students</li>
                     <li>Does NOT explain the difference between DoTS/DoHE (Monash University) vs Monash College Diplomas</li>
                   </ol>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg text-sm text-orange-900 border border-orange-100 mt-4">
                <strong className="block mb-2">Confusing Terminology Identified:</strong>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>"DoTS" vs "DoHE" vs "Monash College Diploma" - Three different diploma pathways with no clear comparison</li>
                  <li>"Enabling program" - What does this mean?</li>
                </ul>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 4</span>
                <h3 className="text-xl font-bold text-slate-900">Clicking on Monash College Diplomas Link</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monashcollege.edu.au/study/courses/diplomas/entry-requirements
              </div>

              <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-4 text-slate-700 mb-6">
                <strong className="block text-slate-900">Critical Analysis for User B (ATAR 60.00):</strong>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Diploma Part 1 (any stream)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Diploma Part 1A (any stream)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Diploma Part 2: Art and Design, Arts (Media/Sociology), IT, Science</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-600" /> Diploma Part 2: Arts (Psychology), Business, Engineering (needs 62-65)</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-4">Friction Points Identified</h4>
                <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700 text-sm">
                  <li><strong className="text-slate-900">ATAR requirements NOT on Monash University website</strong> - User B had to navigate to a completely separate website to find this critical information.</li>
                  <li><strong className="text-slate-900">Complex Part 1 vs Part 2 structure</strong> - The distinction is confusing and not clearly explained.</li>
                  <li><strong className="text-slate-900">No clear pathway calculator</strong> - User B cannot easily determine which pathway is best for their ATAR without reading multiple pages.</li>
                  <li><strong className="text-slate-900">Missing destination degree information</strong> - This page doesn't show what degrees each diploma leads to.</li>
                </ol>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 5 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 5</span>
                <h3 className="text-xl font-bold text-slate-900">Finding Destination Degrees</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monashcollege.edu.au/.../destination-degrees-diploma-entry-requirements-domestic
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-4">Critical Friction Points</h4>
                <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700 text-sm">
                  <li><strong className="text-slate-900">DROPDOWN HELL</strong>: User B must click through multiple dropdown menus to find specific degree requirements. There are 6+ dropdowns per year.</li>
                  <li><strong className="text-slate-900">NO SINGLE VIEW</strong>: Cannot see all degrees and their requirements in one place.</li>
                  <li><strong className="text-slate-900">CONFUSING PERCENTAGE SYSTEM</strong>: The "Part 1" and "Part 2" percentages refer to diploma scores, NOT ATAR. This is extremely confusing for a Year 12 student who only knows ATAR.</li>
                  <li><strong className="text-slate-900">TWO DIFFERENT SCORING SYSTEMS</strong>:
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                      <li>ATAR (60.00) needed to enter the diploma</li>
                      <li>Diploma percentage (55-80%) needed to enter the degree</li>
                      <li>These are completely different systems with no conversion guidance.</li>
                    </ul>
                  </li>
                  <li><strong className="text-slate-900">PREREQUISITE COMPLEXITY</strong>: Each degree has different prerequisite subjects that must be met BEFORE starting the diploma.</li>
                </ol>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 6 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 6</span>
                <h3 className="text-xl font-bold text-slate-900">Trying to Find How to Apply</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monashcollege.edu.au/study/how-to-apply/domestic-students
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                 <h4 className="font-bold text-red-700 mb-4">Critical Friction Points</h4>
                 <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700 text-sm">
                   <li><strong className="text-slate-900">DUAL APPLICATION PATHWAYS</strong>: User B must choose between VTAC (Trimester 1 only) or Direct application. This is confusing - which is better?</li>
                   <li><strong className="text-slate-900">VTAC vs DIRECT - NO COMPARISON</strong>: No clear explanation of the differences, advantages, or disadvantages of each pathway.</li>
                   <li><strong className="text-slate-900">FEES NOT VISIBLE</strong>: The page mentions "Fees" but doesn't show actual costs. User B would need to navigate to yet another page.</li>
                   <li><strong className="text-slate-900">LOCATION SURPRISE</strong>: The page reveals that Monash College is at DOCKLANDS campus - this is NOT mentioned prominently on the main Monash University website.</li>
                 </ol>
              </div>
            </section>

            <section className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">User B Journey Summary</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                     <span className="text-slate-400">Total Steps</span>
                     <span className="font-bold">7+ pages</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                     <span className="text-slate-400">Time Estimated</span>
                     <span className="font-bold">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                     <span className="text-slate-400">Dead Ends</span>
                     <span className="font-bold text-red-400">3 (404 errors)</span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
                  <h4 className="font-bold text-slate-300 mb-2">Key Information Still Missing:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-400">
                    <li>Exact fees for the diploma</li>
                    <li>How long the pathway will take in total</li>
                    <li>What happens if they fail to meet the diploma score requirement</li>
                    <li>Whether they can transfer between Monash College and DoTS</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

// Helper icons
function Check({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}