
import PageTemplate from './PageTemplate';
import { FileText } from 'lucide-react';

const Documentation = () => {
  return (
    <PageTemplate 
      title="Documentation" 
      icon={<FileText className="text-primary h-6 w-6" />}
      description="Detailed guides on how to use our platform."
    />
  );
};

export default Documentation;
