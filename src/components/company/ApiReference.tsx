
import PageTemplate from './PageTemplate';
import { Code2 } from 'lucide-react';

const ApiReference = () => {
  return (
    <PageTemplate 
      title="API Reference" 
      icon={<Code2 className="text-primary h-6 w-6" />}
      description="Technical documentation for developers integrating with our platform."
    />
  );
};

export default ApiReference;
