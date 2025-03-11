
import { motion } from 'framer-motion';
import { Bot, MessageSquare, UserRound, Users, Zap } from 'lucide-react';

const AiChatbots = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Bot className="text-primary h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">AI Chatbots</h1>
      </div>
      
      <div className="prose max-w-none">
        <p className="lead text-lg text-muted-foreground mb-8">
          Our AI-powered chatbots streamline the candidate screening process, provide instant answers to applicant questions,
          and ensure a smooth recruitment experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="text-primary h-5 w-5" />
              <h3 className="font-medium text-lg">24/7 Candidate Engagement</h3>
            </div>
            <p className="text-muted-foreground">
              Our chatbots engage with candidates around the clock, answering questions about job roles, company culture,
              and application status.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-primary h-5 w-5" />
              <h3 className="font-medium text-lg">Intelligent Screening</h3>
            </div>
            <p className="text-muted-foreground">
              Pre-screen candidates with customizable qualification questions that adapt based on candidate responses.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <UserRound className="text-primary h-5 w-5" />
              <h3 className="font-medium text-lg">Personalized Experience</h3>
            </div>
            <p className="text-muted-foreground">
              Deliver a personalized experience for each candidate based on their skills, experience, and interest areas.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-primary h-5 w-5" />
              <h3 className="font-medium text-lg">Seamless Integration</h3>
            </div>
            <p className="text-muted-foreground">
              Integrate with your existing ATS, CRM, and other recruitment tools for a unified workflow.
            </p>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mt-10 mb-4">How It Works</h2>
        <ol className="space-y-4 mb-8">
          <li><strong>Setup:</strong> Configure your chatbot with your brand guidelines, FAQs, and screening questions</li>
          <li><strong>Deploy:</strong> Add the chatbot to your careers page, job listings, or social media channels</li>
          <li><strong>Engage:</strong> The chatbot interacts with candidates, collects information, and provides assistance</li>
          <li><strong>Analyze:</strong> Review performance metrics and optimize your chatbot's effectiveness</li>
        </ol>
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-10">
          <h3 className="font-medium text-lg mb-3">Ready to see our AI Chatbots in action?</h3>
          <p className="mb-4">Schedule a demo with our team to see how our AI-powered chatbots can transform your recruitment process.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AiChatbots;
