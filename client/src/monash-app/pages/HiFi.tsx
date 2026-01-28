import PremiumPathwaysFinder from '../components/PremiumPathwaysFinder';
import { FooterContact } from '@/components/FooterContact';
import { MonashSwitcher } from "@/components/MonashSwitcher";

export default function HiFi() {
  return (
    <>
      <PremiumPathwaysFinder />
      <FooterContact 
        title={
          <span className="flex items-center gap-3">
            <a href="/" onClick={(e) => e.stopPropagation()} style={{ textShadow: "none" }} className="pointer-events-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hover:opacity-80 transition-opacity">defriction</a>
            <span className="text-gray-400 font-normal text-base">// High-Fidelity UI</span>
            <MonashSwitcher />
          </span>
        } 
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName="bg-[#050505] shadow-2xl border-white/10"
        monashSwitcher={true}
      />
    </>
  );
}
