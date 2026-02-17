import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, AlertCircle, Info, Search, MousePointerClick, AlertTriangle, FileQuestion } from "lucide-react";

interface FrictionLogModalBProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FrictionLogModalB({ open, onOpenChange }: FrictionLogModalBProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-fit max-w-4xl h-[90vh] p-0 gap-0 bg-[#0B0F19] text-slate-100 border border-slate-700/50 overflow-hidden flex flex-col mx-auto shadow-2xl rounded-3xl">
        <div className="relative z-10 flex-none p-8 border-b border-slate-700/50 bg-[#0d1224] text-slate-100">
          <div className="absolute right-6 top-6">
            <button
              onClick={() => onOpenChange(false)}
              className="p-2 rounded-full hover:bg-slate-700/50 transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>
          <DialogHeader className="text-left pr-10">
            <DialogTitle className="text-3xl font-display font-bold text-white mb-2">
              User B Friction Log
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-slate-400">
              Year 12 Student with Low ATAR (60.00)
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 max-w-3xl mx-auto pb-24">

            {/* User Profile */}
            <section className="bg-[#111827] p-8 rounded-3xl border border-slate-700/50 text-white shadow-xl mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3CC00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#A3CC00]/20 transition-all duration-700" />

              <h3 className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#A3CC00] mb-6 flex items-center gap-2">
                Persona Profile
              </h3>

              <div className="relative z-10 grid md:grid-cols-2 gap-y-8 gap-x-12">
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Background</div>
                  <div className="text-white font-medium text-lg">Victorian Year 12 student</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">ATAR</div>
                  <div className="text-white font-medium text-lg">60.00 <span className="text-gray-500 text-base font-normal ml-2">(below typical entry)</span></div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Goal</div>
                  <div className="text-white font-medium text-lg leading-relaxed">Find a pathway to a Monash degree via a Monash College diploma.</div>
                </div>
              </div>
            </section>

            {/* Journey Timeline */}
            <div className="space-y-8 px-8">

              {/* Step 1 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-900 text-xs font-bold px-2 py-1 rounded">STEP 1</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Monash University Homepage</h3>
                    <a href="https://www.monash.edu" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 font-mono hover:text-[#006DAE] hover:underline block mt-1">
                      https://www.monash.edu
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Observations</h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm">
                        <li>The site provides a standard entry point for all prospective domestic students.</li>
                        <li>User arrives looking for information on alternative entry methods.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-700/50" />

              {/* Step 2 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-900 text-xs font-bold px-2 py-1 rounded">STEP 2</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Pathway Information Search</h3>
                    <a href="https://www.monash.edu/study" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 font-mono hover:text-[#006DAE] hover:underline block mt-1">
                      https://www.monash.edu/study
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Observations</h4>
                      <p className="text-slate-400 text-sm">User attempts to navigate to specialized pathway pages via the "Study" menu.</p>
                    </div>

                    <div className="bg-red-950/50 p-6 rounded-xl border border-red-800/40 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-400 mb-2">
                          Friction Point: Broken Links
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Multiple 404 errors were encountered when trying to access <code className="bg-red-900/50 px-1 py-0.5 rounded text-xs font-mono text-red-300">/study/how-to-apply/pathways</code>, forcing a return to Google.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-700/50" />

              {/* Step 3 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-900 text-xs font-bold px-2 py-1 rounded">STEP 3</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Entry Pathways for Domestic Students</h3>
                    <a href="https://www.monash.edu/study/courses/entry-pathways-domestic" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 font-mono hover:text-[#006DAE] hover:underline block mt-1">
                      https://www.monash.edu/study/courses/entry-pathways-domestic
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Observations</h4>
                      <p className="text-slate-400 text-sm">A landing page that lists DoTS, DoHE, and Monash College Diplomas.</p>
                    </div>

                    <div className="bg-orange-950/40 p-6 rounded-xl border border-orange-800/40 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertTriangle className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-400 mb-2">
                          Friction Point: Information Overload
                        </h4>
                        <p className="text-slate-300 text-sm">
                          No "Pathways Calculator" exists to help a student with a 60.00 ATAR choose between the different diploma types.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-700/50" />

              {/* Step 4 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-900 text-xs font-bold px-2 py-1 rounded">STEP 4</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Monash College ATAR Requirements</h3>
                    <a href="https://www.monashcollege.edu.au/study/courses/diplomas/entry-requirements" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 font-mono hover:text-[#006DAE] hover:underline block mt-1">
                      https://www.monashcollege.edu.au/study/courses/diplomas/entry-requirements
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Observations</h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm">
                        <li>User moves to the College-specific page to check entry scores.</li>
                        <li>Requirements for Part 1 and Part 2 diplomas are clearly listed by ATAR score.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-700/50" />

              {/* Step 5 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-900 text-xs font-bold px-2 py-1 rounded">STEP 5</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Destination Degrees & Scores</h3>
                    <a href="https://www.monashcollege.edu.au/study/courses/diplomas/destination-degrees" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 font-mono hover:text-[#006DAE] hover:underline block mt-1">
                      https://www.monashcollege.edu.au/study/courses/diplomas/destination-degrees
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Observations</h4>
                      <p className="text-slate-400 text-sm">Table showing the required "Pass" or "Credit" average needed to move into the second year of a degree.</p>
                    </div>

                    <div className="bg-red-950/50 p-6 rounded-xl border border-red-800/40 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-400 mb-2">
                          Friction Point: Navigation Complexity
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Extensive "Dropdown" menus make it difficult to compare requirements across different degree options.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-700/50" />

              {/* Step 6 */}
              <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-900 text-xs font-bold px-2 py-1 rounded">STEP 6</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Application Process</h3>
                    <a href="https://www.monashcollege.edu.au/study/how-to-apply" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 font-mono hover:text-[#006DAE] hover:underline block mt-1">
                      https://www.monashcollege.edu.au/study/how-to-apply
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-200 mb-2">Observations</h4>
                      <p className="text-slate-400 text-sm">Instructions for applying through VTAC for the February intake.</p>
                    </div>

                    <div className="bg-orange-950/40 p-6 rounded-xl border border-orange-800/40 flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertTriangle className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-400 mb-2">
                          Friction Point: Administrative Ambiguity
                        </h4>
                        <p className="text-slate-300 text-sm">
                          No "Pathways Calculator" exists to help a student with a 60.00 ATAR choose between the different diploma types.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="h-0" />

            {/* Summary Section */}
            <div className="bg-[#111827] border-t border-slate-700/50 -mx-8 -mb-24 mt-12 pb-12">
              <div className="p-8 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                  <div className="md:pr-8 py-4 md:py-0">
                    <div className="flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-red-400 mb-4">
                          Major Friction Points
                        </h3>
                        <ul className="space-y-4">
                          <li className="text-sm text-slate-300">
                            <strong className="block font-semibold text-red-400 mb-1">Site Reliability</strong>
                            404 errors on high-intent "Pathways" URLs create an immediate sense of distrust.
                          </li>
                          <li className="text-sm text-slate-300">
                            <strong className="block font-semibold text-red-400 mb-1">Navigation Fatigue</strong>
                            "Dropdown hell" in the destination degree section makes it hard to map out a multi-year plan.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="md:pl-8 py-4 md:py-0">
                    <div className="flex gap-4">
                      <div className="pt-1 shrink-0">
                        <Info className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-200 mb-4">
                          Key Information Missing
                        </h3>
                        <ul className="space-y-4">
                          <li className="text-sm text-slate-300">
                            <strong className="block font-semibold text-slate-200 mb-1">Total Cost</strong>
                            Exact fee structures for the pathway year are not displayed alongside the course info.
                          </li>
                          <li className="text-sm text-slate-300">
                            <strong className="block font-semibold text-slate-200 mb-1">Campus Logistics</strong>
                            Lack of prominence regarding the Docklands location, which may surprise students expecting Clayton or Peninsula.
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
