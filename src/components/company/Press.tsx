
import PageTemplate from './PageTemplate';
import { Newspaper } from 'lucide-react';

const Press = () => {
  return (
    <PageTemplate 
      title="Press" 
      icon={<Newspaper className="text-primary h-6 w-6" />}
      description="Company news, announcements, and media resources."
    />
  );
};

export default Press;
