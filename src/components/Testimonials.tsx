
import { useInView } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director, TechGlobal",
    content: "The AI-powered candidate matching transformed our recruitment process. We've reduced time-to-hire by 40% while improving the quality of our hires dramatically.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Talent Acquisition, Innovate Inc",
    content: "The conversational AI assistant handles routine candidate questions, freeing our team to focus on high-value interactions. It's been a game-changer for our efficiency.",
    stars: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Recruitment Manager, FinCorp",
    content: "The bias mitigation tools have helped us build a more diverse team. Our candidates appreciate the fairness and transparency of the process.",
    stars: 4
  },
  {
    name: "David Smith",
    role: "CTO, StartUp Vision",
    content: "The automated interview summaries save us hours of review time. The AI captures insights we might have missed, resulting in better hiring decisions.",
    stars: 5
  }
];

const Testimonials = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section 
      id="testimonials" 
      className="relative py-20 md:py-32 bg-white"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag bg-primary/10 text-primary mb-4">Testimonials</span>
          <h2 className="heading-2 mb-4">What Our Clients Say</h2>
          <p className="body-text">
            Discover how our AI-powered recruitment platform is transforming hiring processes
            for companies across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.stars ? "text-primary fill-primary" : "text-muted"}
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg italic">"{testimonial.content}"</p>
              <div className="mt-auto">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
