
import PageTemplate from './PageTemplate';
import { FileContract } from 'lucide-react';

const TermsOfService = () => {
  return (
    <PageTemplate 
      title="Terms of Service" 
      icon={<FileContract className="text-primary h-6 w-6" />}
      description="Legal terms governing the use of our platform."
    />
  );
};

export default TermsOfService;
