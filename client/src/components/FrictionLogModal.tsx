import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface FrictionLogModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FrictionLogModal({ open, onOpenChange }: FrictionLogModalProps) {
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
              User A Friction Log
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-monash-blue">
              TAFE Diploma of Nursing Graduate
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 max-w-3xl mx-auto space-y-12">
            
            {/* Persona Profile */}
            <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Persona Profile</h3>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <span className="font-semibold min-w-[120px] text-slate-900">Background:</span>
                  <span className="text-slate-700">TAFE graduate with Diploma of Nursing</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold min-w-[120px] text-slate-900">Goal:</span>
                  <span className="text-slate-700">Enter Bachelor of Nursing at Monash University</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-semibold min-w-[120px] text-slate-900">Key Questions:</span>
                  <ul className="text-slate-700 list-disc list-inside space-y-1">
                    <li>Can I get into the Bachelor of Nursing?</li>
                    <li>Will my Diploma count for credit?</li>
                    <li>How much time/money will I save?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Journey Step 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 1</span>
                <h3 className="text-xl font-bold text-slate-900">Landing on Monash Homepage</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4">
                URL: https://www.monash.edu
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Observations</h4>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm">
                    <li>Homepage prominently features "Search courses" search bar</li>
                    <li>No visible "Alternative Pathways" or "TAFE Entry" option</li>
                    <li>Navigation shows: ABOUT | STUDY | RESEARCH | ENTERPRISE | INTERNATIONAL | NEWS & EVENTS</li>
                    <li>"APPLY TO STUDY" button visible in top right</li>
                    <li>No mention of credit transfer or prior learning on homepage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">Friction Points</h4>
                  <ol className="list-decimal list-outside ml-4 space-y-2 text-slate-600 text-sm">
                    <li><strong className="text-slate-900">No pathway-specific entry point</strong> - User must know to search for the course first</li>
                    <li><strong className="text-slate-900">Homepage assumes traditional entry</strong> - No visible content for non-traditional students</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 text-blue-900 rounded-lg text-sm font-medium border border-blue-100 flex items-center gap-2">
                User Action: Will search for "Bachelor of Nursing" or navigate to STUDY section
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 2</span>
                <h3 className="text-xl font-bold text-slate-900">Bachelor of Nursing Course Page (Domestic)</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monash.edu/study/courses/find-a-course/nursing-m2006?domestic=true
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Observations</h4>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm">
                    <li>Page shows ATAR requirements prominently:
                      <ul className="list-circle list-inside ml-4 mt-1 text-xs text-slate-500">
                        <li>Clayton: 76.85 (Range of criteria)</li>
                        <li>Monash guarantee for 2026 entry: 70</li>
                        <li>Lowest ATAR to which an offer was made in 2026: 66.85</li>
                      </ul>
                    </li>
                    <li>Subject prerequisites: English ✓, Maths ✓, Sciences/Other: N/A</li>
                    <li>"ATAR & SEAS Calculator" link visible</li>
                    <li>Duration: 3 years (full time), 6 years (part time)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                    Critical Friction Points for User A (TAFE Diploma holder)
                  </h4>
                  <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700 text-sm">
                    <li><strong className="text-slate-900">ATAR-centric presentation</strong> - Page assumes user has an ATAR; no mention of TAFE/VET entry</li>
                    <li><strong className="text-slate-900">No visible "Diploma of Nursing" pathway</strong> - User A cannot see if their qualification is valid</li>
                    <li><strong className="text-slate-900">No credit transfer information visible</strong> - How much credit would they receive?</li>
                    <li><strong className="text-slate-900">No "Alternative Entry" or "Pathway" section visible</strong> on this page</li>
                    <li><strong className="text-slate-900">Terminology issue</strong>: "RC" superscript on ATAR figures is unexplained jargon</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">User A's Questions Remain Unanswered:</h4>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 text-sm italic">
                    <li>Can I enter with my Diploma of Nursing?</li>
                    <li>Will I get credit for my prior learning?</li>
                    <li>How long will my degree take if I already have a Diploma?</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 text-blue-900 rounded-lg text-sm font-medium border border-blue-100 flex items-center gap-2">
                User Action: Must scroll down or look for "Entry requirements" tab to find pathway info
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 3</span>
                <h3 className="text-xl font-bold text-slate-900">Entry Requirements - VET/TAFE Section (CRITICAL FINDING)</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monash.edu/study/courses/find-a-course/nursing-m2006?domestic=true#entry-requirements-2
              </div>

              <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-4 text-slate-700 mb-6">
                 <div>
                   <span className="font-bold text-slate-900 block mb-1">TAFE/VET:</span>
                   Only applicants with a graded Diploma of Nursing with at least a minimum of 75% and current registration with Ahpra as an Enrolled Nurse may be eligible for entry.
                 </div>
                 <div>
                   <span className="font-bold text-slate-900 block mb-1">Domestic Applicants:</span>
                   You should apply via VTAC for entry into the Nursing Second Year Diploma entry (Clayton Campus VTAC course code: 2800311841, Peninsula Campus VTAC course code: 2800711841)
                 </div>
                 <div>
                   <span className="font-bold text-slate-900 block mb-1">Bridging course:</span>
                   (Available to Domestic students only) Monash offers a pathway to Nursing through the one-year, full-time Diploma of Tertiary Studies at the Peninsula Campus only. Applicants seeking entry via this pathway must demonstrate successful completion of all units and at least 55% average over the course.
                 </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-4">Critical Friction Points Identified</h4>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <strong className="text-slate-900 block mb-1">1. Restrictive Entry Requirement</strong>
                    User A needs 75% minimum grade AND current Ahpra registration as Enrolled Nurse.
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                      <li>What if User A has 70%? No pathway shown.</li>
                      <li>What if User A doesn't have Ahpra registration yet? Dead end.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">2. Confusing Terminology</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                      <li>"Ahpra" - Australian Health Practitioner Regulation Agency (unexplained acronym)</li>
                      <li>"VTAC course code: 2800311841" - No explanation of what VTAC is</li>
                      <li>"Second Year Diploma entry" - Confusing phrase; does this mean they start in Year 2?</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">3. Hidden Credit Information</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                      <li>Page says "Second Year Diploma entry" but doesn't explicitly state: "You will receive 1 year of credit"</li>
                      <li>No visualization of time saved</li>
                      <li>No information on which specific units are credited</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">4. No Link to Credit Details</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                       <li>No link to see exactly what credit they would receive</li>
                       <li>No PDF or table showing credit mapping from Diploma of Nursing to Bachelor units</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">5. Application Process Unclear</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                       <li>Must apply via VTAC (external site)</li>
                       <li>No direct link to VTAC</li>
                       <li>No explanation of VTAC fees (~$78-$200)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-orange-50 text-orange-900 rounded-lg text-sm font-bold border border-orange-100 flex items-center gap-2">
                DEAD END IDENTIFIED: User must now leave Monash site to find VTAC application, with only a course code and no direct link.
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 4</span>
                <h3 className="text-xl font-bold text-slate-900">Credit Search Tool - MAJOR DEAD END</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://priorstudy.monash.edu/prior-study/
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-4">What User A Experiences:</h4>
                <ol className="list-decimal list-outside ml-4 space-y-4 text-sm text-slate-700">
                  <li>User searches for "Diploma of Nursing" in Australia</li>
                  <li>
                    <strong>Results show ONLY 1 institution: Victoria University</strong>
                    <p className="text-slate-500 mt-1">No other TAFE providers listed (e.g., Holmesglen, Box Hill, RMIT, Chisholm). This is a CRITICAL gap - most TAFE nursing diplomas are not in the database.</p>
                  </li>
                  <li>
                    <strong>When clicking "View my credit" for Victoria University Diploma of Nursing:</strong>
                    <div className="mt-2 bg-white p-3 border border-slate-200 rounded text-slate-500 italic">
                      "No results were found for this search enquiry. Please try again with different or broader search criteria. A blank result does not indicate ineligibility for credit. An assessment will be made once you have submitted an application."
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-4">Critical Friction Points</h4>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <strong className="text-slate-900 block mb-1">1. DEAD END</strong>
                    The credit search returns ZERO credit results for Diploma of Nursing.
                    <ul className="list-disc list-inside ml-4 mt-1 text-slate-600">
                      <li>User has NO IDEA what credit they will receive</li>
                      <li>User has NO IDEA how much time/money they will save</li>
                      <li>User must "submit an application" and WAIT to find out</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">2. Incomplete Database</strong>
                    Only Victoria University Diploma of Nursing is listed. Major TAFE providers missing.
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">3. Confusing Disclaimer</strong>
                    "A blank result does not indicate ineligibility for credit" creates uncertainty.
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 5 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 5</span>
                <h3 className="text-xl font-bold text-slate-900">Nursing Pathways Page - MISLEADING INFORMATION</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://www.monash.edu/medicine/nursing/study/undergraduate/discover/pathways
              </div>

              <p className="text-sm text-slate-700 mb-4">
                The "Pathways" page for Nursing ONLY discusses the <strong>Diploma of Tertiary Studies (DoTS)</strong> pathway. It does NOT mention the direct TAFE Diploma of Nursing entry pathway at all.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-4">Critical Friction Points</h4>
                <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700 text-sm">
                  <li><strong className="text-slate-900">MISDIRECTION</strong>: This page suggests TAFE graduates should do DoTS (another year of study) rather than directly entering Year 2 of the Bachelor of Nursing with their existing Diploma.</li>
                  <li><strong className="text-slate-900">CONFLICTING INFORMATION</strong>: The Bachelor of Nursing course page says TAFE Diploma of Nursing holders can enter directly into "Second Year Diploma entry" with 75% GPA. This Pathways page doesn't mention this option at all.</li>
                  <li><strong className="text-slate-900">GEOGRAPHIC LIMITATION</strong>: DoTS is only available at Peninsula campus - not mentioned prominently.</li>
                  <li><strong className="text-slate-900">ADDITIONAL YEAR</strong>: DoTS adds a full year before the Bachelor of Nursing, whereas direct entry from Diploma of Nursing would save a year.</li>
                </ol>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 border border-slate-200">
                 <strong className="block mb-2 text-slate-900">Information Architecture Failure:</strong>
                 The "Pathways" page is siloed within the School of Nursing website, while the actual TAFE entry information is on the main course page under "Entry Requirements." These two pages contradict each other and create confusion.
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Journey Step 6 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded">STEP 6</span>
                <h3 className="text-xl font-bold text-slate-900">VTAC Course Search - External Site Required</h3>
              </div>
              
              <div className="text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded border border-slate-100 mb-4 truncate">
                URL: https://delta.vtac.edu.au/coursesearch/#/course/50/2801184
              </div>

              <div className="text-sm text-slate-700 mb-6">
                VTAC provides the most complete information about the "Nursing Second Year Diploma Entry" pathway, but User A had to leave the Monash website entirely to find it.
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="p-3 border-b border-slate-200">Requirement</th>
                      <th className="p-3 border-b border-slate-200">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 bg-white">Course Name</td>
                      <td className="p-3 bg-white">Nursing Second Year Diploma Entry</td>
                    </tr>
                    <tr>
                      <td className="p-3 bg-white">Course Code (Clayton)</td>
                      <td className="p-3 bg-white">2800311841</td>
                    </tr>
                    <tr>
                      <td className="p-3 bg-white">Course Code (Peninsula)</td>
                      <td className="p-3 bg-white">2800711841</td>
                    </tr>
                    <tr>
                      <td className="p-3 bg-white">Duration</td>
                      <td className="p-3 bg-white">2 years minimum</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                 <h4 className="font-bold text-red-700 mb-4">Critical Friction Points</h4>
                 <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700 text-sm">
                   <li><strong className="text-slate-900">EXTERNAL SITE REQUIRED</strong>: User A must leave Monash.edu entirely and navigate to VTAC to find complete entry requirements.</li>
                   <li><strong className="text-slate-900">NO DIRECT LINK</strong>: Monash course page only provides a course code (2800311841) but no clickable link to VTAC.</li>
                   <li><strong className="text-slate-900">VTAC APPLICATION FEE</strong>: User A will need to pay VTAC application fee (~$78-$200) to apply, which is not mentioned on Monash site.</li>
                   <li><strong className="text-slate-900">COMPETENCY-BASED EXCLUSION</strong>: VTAC reveals that "Programs that involve competency-based assessment without grades or marks will not be considered" - this critical exclusion is NOT mentioned on the Monash website.</li>
                 </ol>
              </div>
            </section>

            <section className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">User A's Journey Summary</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                  <li>Started at monash.edu homepage</li>
                  <li>Searched "Bachelor of Nursing"</li>
                  <li>Found course page, scrolled to Entry Requirements</li>
                  <li>Found VET section with minimal info</li>
                  <li>Tried Credit Search tool - NO RESULTS</li>
                  <li>Found Pathways page - MISLEADING (suggests DoTS instead)</li>
                  <li>Had to leave Monash site and go to VTAC</li>
                  <li>Found complete requirements on VTAC</li>
                </ol>
                <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
                  <div className="text-4xl font-bold text-red-400 mb-2">6+ Pages</div>
                  <div className="text-sm text-slate-400 mb-6">visited across 2 websites</div>
                  <div className="text-white font-medium">
                    Still missing: Specific credit/unit information for Diploma of Nursing
                  </div>
                </div>
              </div>
            </section>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}