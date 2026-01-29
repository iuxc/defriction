import PathwaysFinder from '../components/PathwaysFinder';
import { PathwaysProvider } from '../contexts/PathwaysContext';
import { FooterContact } from '@/components/FooterContact';
import { MonashSwitcher } from "@/components/MonashSwitcher";

export default function Home() {
  return (
    <PathwaysProvider>
      <div className="pb-40 font-inter min-h-screen bg-white">
        <PathwaysFinder />
      </div>
      <FooterContact 
        title={
          <span className="flex items-center gap-3">
            <a href="/" onClick={(e) => e.stopPropagation()} style={{ textShadow: "none" }} className="pointer-events-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hover:opacity-80 transition-opacity">defriction</a>
            <span className="text-gray-400 font-normal text-base">// Low-Fidelity Wireframe</span>
            <MonashSwitcher />
          </span>
        }
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName="!bg-[#0B0F19]/85 !backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10"
        monashSwitcher={true}
        infoContent={
          <>
            <p>Structure before polish. This clickable wireframe tests the flow and logic without the distraction of visual design.</p>
            <p>If something doesn't work here, no amount of styling will fix it.</p>
          </>
        }
      />
    </PathwaysProvider>
  );
}
