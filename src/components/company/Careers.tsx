
import PageTemplate from './PageTemplate';
import { Briefcase } from 'lucide-react';

const Careers = () => {
  return (
    <PageTemplate 
      title="Careers" 
      icon={<Briefcase className="text-primary h-6 w-6" />}
      description="Join our team and help transform the future of recruitment."
    />
  );
};

export default Careers;
