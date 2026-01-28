import PremiumPathwaysFinder from '../components/PremiumPathwaysFinder';
import { FooterContact } from '@/components/FooterContact';

export default function HiFi() {
  return (
    <>
      <PremiumPathwaysFinder />
      <FooterContact 
        title={
          <span className="flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">defriction</span>
            <span className="text-gray-500 font-normal text-base">// High-Fidelity UI</span>
          </span>
        } 
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName="bg-[#050505] shadow-2xl border-white/10"
      />
    </>
  );
}
