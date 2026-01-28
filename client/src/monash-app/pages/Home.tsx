import PathwaysFinder from '@/components/PathwaysFinder';
import { PathwaysProvider } from '@/contexts/PathwaysContext';

export default function Home() {
  return (
    <PathwaysProvider>
      <PathwaysFinder />
    </PathwaysProvider>
  );
}
