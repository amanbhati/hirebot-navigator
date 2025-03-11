
import PageTemplate from './PageTemplate';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <PageTemplate 
      title="Privacy Policy" 
      icon={<Shield className="text-primary h-6 w-6" />}
      description="Information on how we collect, use, and protect your data."
    />
  );
};

export default PrivacyPolicy;
