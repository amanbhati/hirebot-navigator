
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 flex items-center justify-center"
            >
              <div className="bg-primary text-white h-16 w-16 rounded-lg flex items-center justify-center font-bold text-3xl">
                H
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
