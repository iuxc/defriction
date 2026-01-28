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
        title={
          <span className="flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">defriction</span>
            <span className="text-gray-500 font-normal text-base">// Low-Fidelity Wireframe</span>
          </span>
        }
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName="bg-[#050505] shadow-2xl border-white/10"
      />
    </PathwaysProvider>
  );
}
