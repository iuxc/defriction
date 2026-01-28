import PathwaysFinder from '../components/PathwaysFinder';
import { PathwaysProvider } from '../contexts/PathwaysContext';
import { PrototypeNav } from '../components/PrototypeNav';

export default function Home() {
  return (
    <PathwaysProvider>
      <PrototypeNav />
      <div className="pt-24">
        <PathwaysFinder />
      </div>
    </PathwaysProvider>
  );
}
