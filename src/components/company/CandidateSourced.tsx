
import PageTemplate from './PageTemplate';
import { Search } from 'lucide-react';

const CandidateSourced = () => {
  return (
    <PageTemplate 
      title="Candidate Sourcing" 
      icon={<Search className="text-primary h-6 w-6" />}
      description="Discover qualified candidates efficiently with our sourcing tools."
    />
  );
};

export default CandidateSourced;
