
import PageTemplate from './PageTemplate';
import { BookOpen } from 'lucide-react';

const Blog = () => {
  return (
    <PageTemplate 
      title="Blog" 
      icon={<BookOpen className="text-primary h-6 w-6" />}
      description="Insights, trends, and best practices from our recruitment experts."
    />
  );
};

export default Blog;
