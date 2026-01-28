import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, AlertCircle, Info, Search, MousePointerClick, AlertTriangle, FileQuestion } from "lucide-react";

interface FrictionLogModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FrictionLogModal({ open, onOpenChange }: FrictionLogModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-fit max-w-4xl h-[90vh] p-0 gap-0 bg-white text-slate-900 border-none overflow-hidden flex flex-col mx-auto shadow-2xl rounded-3xl">
        <div className="relative z-10 flex-none p-8 border-b border-slate-200 bg-slate-50 text-slate-900">
          <div className="absolute right-6 top-6">
            <button 
              onClick={() => onOpenChange(false)}
              className="p-2 rounded-full hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>
          <DialogHeader className="text-left pr-10">
            <DialogTitle className="text-3xl font-display font-bold text-slate-900 mb-2">
              User A Friction Log
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-slate-500">
              TAFE Diploma of Nursing Graduate
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 max-w-3xl mx-auto pb-24">
            
            {/* User Profile */}
            <section className="bg-[#0B0F19] p-8 rounded-3xl border border-slate-800 text-white shadow-xl mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#006DAE]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#006DAE]/30 transition-all duration-700" />
              
              <h3 className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#A3CC00] mb-6 flex items-center gap-2">
                Persona Profile
              </h3>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-y-8 gap-x-12">
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Background</div>
                  <div className="text-white font-medium text-lg">TAFE graduate with a Diploma of Nursing.</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Goal</div>
                  <div className="text-white font-medium text-lg">Enter the Bachelor of Nursing at Monash University.</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Mental Model</div>
                  <div className="text-white font-medium text-lg leading-relaxed">"I have a professional qualification; I want to know exactly how much credit I get and how to apply."</div>
                </div>
              </div>
            </section>

            {/* Journey Timeline */}
            <div className="space-y-8 px-8">
              
              {/* Step 1 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 1</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Monash University Homepage</h3>
                    <div className="text-sm text-slate-500 font-mono mt-1">
                        Finding: The search bar is the primary entry point for course information.
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Observation</h4>
                        <p className="text-slate-600 text-sm">No specific "Pathways" or "TAFE" entry point is visible on the main landing page; navigation assumes a standard starting point.</p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200" />

              {/* Step 2 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 2</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Bachelor of Nursing Course Page</h3>
                    <div className="text-sm text-slate-500 font-mono mt-1">
                        Finding: Page displays the ATAR (76.85) and Monash Guarantee (70) for the 2026 intake.
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">
                          Friction: ATAR-centric Interface
                        </h4>
                        <p className="text-slate-700 text-sm">
                          The interface is ATAR-centric. A TAFE graduate must scroll past significant high-school-specific data to find the "VET" entry requirements section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200" />

              {/* Step 3 */}
               <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 3</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">VET/TAFE Entry Section</h3>
                    <div className="text-sm text-slate-500 font-mono mt-1">
                        Finding: Notes that entry into the second year is possible with a 75% average and Ahpra registration.
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">
                          Friction: Specialized Acronyms
                        </h4>
                        <p className="text-slate-700 text-sm">
                          High use of specialized acronyms (Ahpra, NMBA, VTAC) without inline definitions or tooltips for students coming from a TAFE environment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200" />

              {/* Step 4 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 4</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Credit Search Tool</h3>
                    <div className="text-sm text-slate-500 font-mono mt-1">
                        Finding: User attempts to calculate how many units their specific TAFE Diploma will waive.
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">
                          Friction: Database Gaps
                        </h4>
                        <p className="text-slate-700 text-sm">
                          A search for "Diploma of Nursing" often returns no results for specific regional TAFE providers, leaving the user unable to calculate exact savings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

               <hr className="border-slate-200" />

              {/* Step 5 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 5</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Nursing Pathways Page</h3>
                    <div className="text-sm text-slate-500 font-mono mt-1">
                        Finding: Suggests the Diploma of Tertiary Studies (DoTS) as a primary pathway.
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">
                          Friction: Conflicting Advice
                        </h4>
                        <p className="text-slate-700 text-sm">
                          This page suggests TAFE students should take the DoTS pathway (adding a year), whereas the course page says they can enter Year 2 directly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

               <hr className="border-slate-200" />

              {/* Step 6 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 6</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">VTAC Course Search (External)</h3>
                    <div className="text-sm text-slate-500 font-mono mt-1">
                        Finding: User leaves the Monash site to view official application requirements.
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">
                          Friction: Critical Exclusions
                        </h4>
                        <p className="text-slate-700 text-sm">
                          Discovers critical exclusions—such as competency-based assessments without grades not being accepted—that were not stated on the Monash course page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            <div className="h-0" />

            {/* Summary Section */}
            <div className="bg-slate-50 border-t border-slate-200 -mx-8 -mb-24 mt-12 pb-12">
              <div className="p-8 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  <div className="md:pr-8 py-4 md:py-0">
                    <div className="flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-red-900 mb-4">
                          Major Friction Points
                        </h3>
                        <ul className="space-y-4">
                          <li className="text-sm text-slate-700">
                            <strong className="block font-semibold text-red-900 mb-1">Conflicting Advice</strong>
                            The website contradicts itself on whether a TAFE graduate needs a "Pathways" year (DoTS) or can apply for direct entry.
                          </li>
                          <li className="text-sm text-slate-700">
                            <strong className="block font-semibold text-red-900 mb-1">Credit Dead-ends</strong>
                            The search tool lacks data for common TAFE providers, making it impossible to confirm the "Year 2" entry promise.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="md:pl-8 py-4 md:py-0">
                    <div className="flex gap-4">
                      <div className="pt-1 shrink-0">
                        <Info className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-4">
                          Key Information Missing
                        </h3>
                         <ul className="space-y-4">
                          <li className="text-sm text-slate-700">
                            <strong className="block font-semibold text-slate-900 mb-1">Specific Unit Credit</strong>
                            No clear list of which units are waived for a standard Diploma of Nursing.
                          </li>
                          <li className="text-sm text-slate-700">
                            <strong className="block font-semibold text-slate-900 mb-1">Exclusion Clarity</strong>
                            Lack of early warning regarding "competency-based" (ungraded) TAFE results.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
