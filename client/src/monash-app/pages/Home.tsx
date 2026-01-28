import PathwaysFinder from '../components/PathwaysFinder';
import { PathwaysProvider } from '../contexts/PathwaysContext';
import { FooterContact } from '@/components/FooterContact';

export default function Home() {
  return (
    <PathwaysProvider>
      <PathwaysFinder />
      <FooterContact 
        title={<span>Let's remove the <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent font-bold">friction</span>.</span>}
        backLink="/work/monash"
        alwaysSticky={true}
      />
    </PathwaysProvider>
  );
}
