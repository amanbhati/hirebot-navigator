
import PageTemplate from './PageTemplate';
import { Lightbulb } from 'lucide-react';

const Solutions = () => {
  return (
    <PageTemplate 
      title="Solutions" 
      icon={<Lightbulb className="text-primary h-6 w-6" />}
      description="Comprehensive recruitment tools to streamline your hiring process."
    />
  );
};

export default Solutions;
