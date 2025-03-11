
import PageTemplate from './PageTemplate';
import { LifeBuoy } from 'lucide-react';

const HelpCenter = () => {
  return (
    <PageTemplate 
      title="Help Center" 
      icon={<LifeBuoy className="text-primary h-6 w-6" />}
      description="Find answers to common questions about our platform."
    />
  );
};

export default HelpCenter;
