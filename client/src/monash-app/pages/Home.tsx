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
        title={<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">defriction</span>}
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName="bg-[#050505] shadow-2xl border-white/10"
      />
    </PathwaysProvider>
  );
}
