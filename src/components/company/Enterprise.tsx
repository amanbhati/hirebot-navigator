
import PageTemplate from './PageTemplate';
import { Building2 } from 'lucide-react';

const Enterprise = () => {
  return (
    <PageTemplate 
      title="Enterprise" 
      icon={<Building2 className="text-primary h-6 w-6" />}
      description="Customized recruitment solutions for large organizations."
    />
  );
};

export default Enterprise;
