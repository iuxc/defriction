import PathwaysFinder from '../components/PathwaysFinder';
import { PathwaysProvider } from '../contexts/PathwaysContext';
import { PrototypeFloatingBar } from '@/components/PrototypeFloatingBar';

export default function Home() {
  return (
    <PathwaysProvider>
      <div className="font-inter min-h-screen bg-white">
        <PathwaysFinder />
      </div>
      <PrototypeFloatingBar page="wireframe" />
    </PathwaysProvider>
  );
}
