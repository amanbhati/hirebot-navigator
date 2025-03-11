
import { motion } from 'framer-motion';

interface PageTemplateProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className="bg-primary/10 p-2 rounded-lg">{icon}</div>}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      
      {description && (
        <p className="lead text-lg text-muted-foreground mb-8">
          {description}
        </p>
      )}
      
      <div className="prose max-w-none">
        <p>This page is currently under construction. Check back soon for more information about {title}.</p>
        
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mt-8">
          <h3 className="font-medium text-lg mb-3">Want to learn more?</h3>
          <p className="mb-4">Contact our team for more information about {title.toLowerCase()}.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PageTemplate;
