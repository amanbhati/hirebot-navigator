
import PageTemplate from './PageTemplate';
import { HelpCircle } from 'lucide-react';

const Support = () => {
  return (
    <PageTemplate 
      title="Support" 
      icon={<HelpCircle className="text-primary h-6 w-6" />}
      description="Get the help you need to succeed with our platform."
    />
  );
};

export default Support;
