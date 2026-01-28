import PathwaysFinder from '../components/PathwaysFinder';
import { PathwaysProvider } from '../contexts/PathwaysContext';
import { FooterContact } from '@/components/FooterContact';

export default function Home() {
  return (
    <PathwaysProvider>
      <PathwaysFinder />
      <FooterContact 
        title={<span>Let's remove the <span className="text-orange-500">friction</span>.</span>}
        backLink="/"
      />
    </PathwaysProvider>
  );
}
