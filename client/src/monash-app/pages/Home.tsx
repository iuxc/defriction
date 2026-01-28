import PathwaysFinder from '../components/PathwaysFinder';
import { PathwaysProvider } from '../contexts/PathwaysContext';
import { FooterContact } from '@/components/FooterContact';

export default function Home() {
  return (
    <PathwaysProvider>
      <div className="pb-40">
        <PathwaysFinder />
      </div>
      <FooterContact 
        title={<span>Let's remove the <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">friction</span>.</span>}
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName="bg-[#050505] shadow-2xl border-white/10"
      />
    </PathwaysProvider>
  );
}
