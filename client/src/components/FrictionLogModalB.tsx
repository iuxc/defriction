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
      <DialogContent className="w-fit max-w-4xl h-[90vh] p-0 gap-0 bg-[#F3F4F6] text-slate-900 border-none overflow-hidden flex flex-col mx-auto shadow-2xl rounded-3xl">
        <div className="relative z-10 flex-none p-8 border-b border-slate-200 bg-[#F3F4F6]/90 backdrop-blur-xl">
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
              User B Friction Log
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-[#7fa300]">
              Year 12 Student with Low ATAR (60.00)
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 max-w-3xl mx-auto pb-24">
            
            {/* User Profile */}
            <section className="bg-[#0B0F19] p-8 rounded-3xl border border-slate-800 text-white shadow-xl mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3CC00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#A3CC00]/20 transition-all duration-700" />
              
              <h3 className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#A3CC00] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A3CC00]" />
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
            <div className="relative pl-12 space-y-12">
              {/* Continuous Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-300/50 rounded-full" />
              
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[49px] top-0 w-12 h-12 rounded-full bg-slate-900 border-[3px] border-[#F3F4F6] shadow-lg flex items-center justify-center text-white text-lg font-bold z-10 ring-1 ring-slate-900/10">1</div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Monash University Homepage</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Finding</h4>
                      <p className="text-slate-700 text-base leading-relaxed">User arrives looking for information on alternative entry methods.</p>
                    </div>
                    
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 flex gap-4">
                      <div className="bg-blue-100 rounded-full p-2 h-fit shrink-0">
                        <Info className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                         <div className="font-bold text-blue-900 text-sm mb-1">Observation</div>
                         <p className="text-blue-800/80 text-sm leading-relaxed">The site provides a standard entry point for all prospective domestic students.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[49px] top-0 w-12 h-12 rounded-full bg-red-500 border-[3px] border-[#F3F4F6] shadow-lg flex items-center justify-center text-white text-lg font-bold z-10 ring-1 ring-red-500/20">2</div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Pathway Information Search</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Finding</h4>
                      <p className="text-slate-700 text-base leading-relaxed">User attempts to navigate to specialized pathway pages via the "Study" menu.</p>
                    </div>
                    
                    <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 flex gap-4">
                      <div className="bg-red-100 rounded-full p-2 h-fit shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                         <div className="font-bold text-red-900 text-sm mb-1">Friction: Broken Links</div>
                         <p className="text-red-800/80 text-sm leading-relaxed">Multiple 404 errors were encountered when trying to access <code className="bg-red-100 px-1.5 py-0.5 rounded text-xs font-mono font-bold mx-1">/study/how-to-apply/pathways</code>, forcing a return to Google.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[49px] top-0 w-12 h-12 rounded-full bg-orange-500 border-[3px] border-[#F3F4F6] shadow-lg flex items-center justify-center text-white text-lg font-bold z-10 ring-1 ring-orange-500/20">3</div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Entry Pathways for Domestic Students Page</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Finding</h4>
                      <p className="text-slate-700 text-base leading-relaxed">A landing page that lists DoTS, DoHE, and Monash College Diplomas.</p>
                    </div>
                    
                    <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-5 flex gap-4">
                      <div className="bg-orange-100 rounded-full p-2 h-fit shrink-0">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                         <div className="font-bold text-orange-900 text-sm mb-1">Friction: Information Overload</div>
                         <p className="text-orange-800/80 text-sm leading-relaxed">No "Pathways Calculator" exists to help a student with a 60.00 ATAR choose between the different diploma types.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -left-[49px] top-0 w-12 h-12 rounded-full bg-slate-900 border-[3px] border-[#F3F4F6] shadow-lg flex items-center justify-center text-white text-lg font-bold z-10 ring-1 ring-slate-900/10">4</div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Monash College ATAR Requirements</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Finding</h4>
                      <p className="text-slate-700 text-base leading-relaxed">User moves to the College-specific page to check entry scores.</p>
                    </div>
                    
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 flex gap-4">
                      <div className="bg-blue-100 rounded-full p-2 h-fit shrink-0">
                        <Info className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                         <div className="font-bold text-blue-900 text-sm mb-1">Observation</div>
                         <p className="text-blue-800/80 text-sm leading-relaxed">Requirements for Part 1 and Part 2 diplomas are clearly listed by ATAR score.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute -left-[49px] top-0 w-12 h-12 rounded-full bg-red-500 border-[3px] border-[#F3F4F6] shadow-lg flex items-center justify-center text-white text-lg font-bold z-10 ring-1 ring-red-500/20">5</div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Destination Degrees & Scores</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Finding</h4>
                      <p className="text-slate-700 text-base leading-relaxed">Table showing the required "Pass" or "Credit" average needed to move into the second year of a degree.</p>
                    </div>
                    
                    <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 flex gap-4">
                      <div className="bg-red-100 rounded-full p-2 h-fit shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                         <div className="font-bold text-red-900 text-sm mb-1">Friction: Navigation Complexity</div>
                         <p className="text-red-800/80 text-sm leading-relaxed">Extensive "Dropdown" menus make it difficult to compare requirements across different degree options.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               {/* Step 6 */}
               <div className="relative">
                <div className="absolute -left-[49px] top-0 w-12 h-12 rounded-full bg-orange-500 border-[3px] border-[#F3F4F6] shadow-lg flex items-center justify-center text-white text-lg font-bold z-10 ring-1 ring-orange-500/20">6</div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Application Process</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Finding</h4>
                      <p className="text-slate-700 text-base leading-relaxed">Instructions for applying through VTAC for the February intake.</p>
                    </div>
                    
                    <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-5 flex gap-4">
                      <div className="bg-orange-100 rounded-full p-2 h-fit shrink-0">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                         <div className="font-bold text-orange-900 text-sm mb-1">Friction: Administrative Ambiguity</div>
                         <p className="text-orange-800/80 text-sm leading-relaxed">No mention of mandatory VTAC application fees, and the Docklands campus location is not prominent until the end of the journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <hr className="border-slate-200" />

            {/* Summary Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Major Friction Points
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-red-900">
                    <strong className="block font-semibold mb-1">Site Reliability</strong>
                    404 errors on high-intent "Pathways" URLs create an immediate sense of distrust.
                  </li>
                  <li className="text-sm text-red-900">
                    <strong className="block font-semibold mb-1">Navigation Fatigue</strong>
                    "Dropdown hell" in the destination degree section makes it hard to map out a multi-year plan.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Key Information Missing
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-slate-700">
                    <strong className="block font-semibold text-slate-900 mb-1">Total Cost</strong>
                    Exact fee structures for the pathway year are not displayed alongside the course info.
                  </li>
                  <li className="text-sm text-slate-700">
                    <strong className="block font-semibold text-slate-900 mb-1">Campus Logistics</strong>
                    Lack of prominence regarding the Docklands location, which may surprise students expecting Clayton or Peninsula.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
