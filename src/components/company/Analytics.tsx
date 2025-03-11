
import PageTemplate from './PageTemplate';
import { BarChart } from 'lucide-react';

const Analytics = () => {
  return (
    <PageTemplate 
      title="Analytics" 
      icon={<BarChart className="text-primary h-6 w-6" />}
      description="Gain insights into your recruitment process with data analytics."
    />
  );
};

export default Analytics;
