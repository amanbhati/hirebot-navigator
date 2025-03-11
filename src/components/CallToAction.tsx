
import { useInView } from '@/lib/animations';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

const benefits = [
  "Reduce time-to-hire by up to 50%",
  "Improve candidate quality and match",
  "Eliminate unconscious bias",
  "Enhance candidate experience",
  "Streamline hiring workflows"
];

const CallToAction = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would connect to your backend in a real application
      toast.success("Thank you for your interest! We'll be in touch soon.");
      setSubmitted(true);
      setEmail('');
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <section 
      id="demo" 
      className="relative py-20 md:py-32 bg-primary/5"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="section-container">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="heading-2 mb-6">Ready to Transform Your Hiring Process?</h2>
              <p className="body-text mb-8">
                Schedule a personalized demo to see how our AI-powered platform can 
                revolutionize your recruitment strategy and help you find the perfect candidates.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ 
                      duration: 0.4,
                      delay: 0.1 * index + 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.4,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <a 
                  href="/apply" 
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Try our application process</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 border border-border"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      What are your main hiring challenges?
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Tell us about your hiring process and challenges..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Schedule Your Demo <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                  <p className="text-muted-foreground mb-6">
                    We've received your request and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
