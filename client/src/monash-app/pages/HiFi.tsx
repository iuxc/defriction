import PremiumPathwaysFinder from '../components/PremiumPathwaysFinder';
import { PrototypeNav } from '../components/PrototypeNav';

export default function HiFi() {
  return (
    <>
      <PrototypeNav />
      <div className="pt-24 bg-deep-basalt min-h-screen">
        <PremiumPathwaysFinder />
      </div>
    </>
  );
}
