
import { useInView, staggerAnimation, useHoverImage, imageHoverAnimation, containerHoverAnimation } from '@/lib/animations';
import { Search, Users, MessageSquare, FileText, BarChart, Shield, 
  RefreshCw, LineChart, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Search,
    title: "Automated Candidate Sourcing",
    description: "AI-powered search across platforms to build dynamic talent pools tailored to specific job requirements."
  },
  {
    icon: Users,
    title: "Intelligent Candidate Matching",
    description: "Advanced algorithms analyze resumes and job descriptions to predict the best candidate fit."
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Assistants",
    description: "AI-driven chatbots engage candidates in real-time, answer queries, and schedule interviews."
  },
  {
    icon: FileText,
    title: "AI-Driven Interview Guides",
    description: "Generate structured interview questions ensuring consistent and relevant candidate evaluation."
  },
  {
    icon: RefreshCw,
    title: "Automated Feedback Collection",
    description: "Prompt interviewers to provide real-time feedback, centralizing evaluations for faster decisions."
  },
  {
    icon: BarChart,
    title: "Predictive Candidate Scoring",
    description: "Assess candidates based on skills, experience, and cultural fit with AI-generated predictive scores."
  },
  {
    icon: Shield,
    title: "Bias Mitigation Tools",
    description: "Minimize unconscious biases by focusing on candidates' skills and qualifications, promoting diversity."
  },
  {
    icon: LineChart,
    title: "Seamless Integration",
    description: "Integrate smoothly with existing ATS, CRM, and HR technologies to maintain data consistency."
  },
  {
    icon: Globe,
    title: "Real-Time Market Insights",
    description: "Access up-to-date information on job market trends, salary benchmarks, and candidate availability."
  },
  {
    icon: Clock,
    title: "Automated Interview Summaries",
    description: "Transcribe and summarize interviews, highlighting key points for efficient review and comparison."
  }
];

const Features = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section 
      id="features" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-secondary/30"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag bg-primary/10 text-primary mb-4">Features</span>
          <h2 className="heading-2 mb-4">Revolutionize Your Recruitment Process</h2>
          <p className="body-text">
            Our AI-powered platform combines advanced technologies to streamline every stage of the hiring journey,
            from sourcing to selection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={containerHoverAnimation.hover}
            >
              <motion.div 
                className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4"
                whileHover={{
                  backgroundColor: 'rgba(var(--primary), 0.2)',
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <feature.icon className="text-primary" size={24} />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
