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
        stickyClassName="bg-deep-basalt/90 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10"
        monashSwitcher={true}
      />
    </PathwaysProvider>
  );
}
