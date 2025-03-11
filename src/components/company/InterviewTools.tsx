
import PageTemplate from './PageTemplate';
import { CalendarDays } from 'lucide-react';

const InterviewTools = () => {
  return (
    <PageTemplate 
      title="Interview Tools" 
      icon={<CalendarDays className="text-primary h-6 w-6" />}
      description="Schedule, conduct, and evaluate interviews seamlessly."
    />
  );
};

export default InterviewTools;
