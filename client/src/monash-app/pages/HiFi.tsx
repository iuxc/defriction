import PremiumPathwaysFinder from '../components/PremiumPathwaysFinder';
import { FooterContact } from '@/components/FooterContact';

export default function HiFi() {
  return (
    <>
      <PremiumPathwaysFinder />
      <FooterContact 
        title={<span>Let's remove the <span className="text-orange-500">friction</span>.</span>} 
      />
    </>
  );
}
