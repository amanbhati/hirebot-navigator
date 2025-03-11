
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/lib/animations';

const Hero = () => {
  const { ref, isInView } = useInView({}, true);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="section-container flex flex-col items-center text-center"
      >
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="tag bg-primary/10 text-primary mb-6">AI-Powered Recruitment</span>
          
          <h1 className="heading-1 max-w-4xl mb-6">
            Transform Your Hiring Process with
            <span className="text-primary"> Intelligent Recruitment</span>
          </h1>
          
          <p className="body-text max-w-2xl mx-auto mb-10">
            Our AI-powered platform streamlines your recruitment workflow, 
            from candidate sourcing to final selection, saving you time and 
            ensuring you find the perfect talent match.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Request Demo <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="bg-white text-foreground px-6 py-3 rounded-md border border-border hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className={`mt-16 glass-panel rounded-xl overflow-hidden shadow-xl max-w-5xl transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
            <div className="w-full max-w-4xl flex flex-col items-center justify-center p-8">
              <div className="w-full h-12 bg-white/80 rounded-lg mb-4 flex items-center px-4">
                <div className="w-24 h-6 bg-primary/20 rounded-md"></div>
                <div className="ml-auto flex gap-2">
                  <div className="w-8 h-8 bg-primary/30 rounded-md"></div>
                  <div className="w-8 h-8 bg-primary/20 rounded-md"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="col-span-1 bg-white/80 rounded-lg p-4 h-64">
                  <div className="w-full h-6 bg-primary/20 rounded-md mb-4"></div>
                  <div className="w-full h-4 bg-primary/10 rounded-md mb-2"></div>
                  <div className="w-3/4 h-4 bg-primary/10 rounded-md mb-2"></div>
                  <div className="w-full h-4 bg-primary/10 rounded-md mb-4"></div>
                  <div className="w-24 h-8 bg-primary/30 rounded-md mx-auto mt-4"></div>
                </div>
                <div className="col-span-2 bg-white/80 rounded-lg p-4 h-64">
                  <div className="w-full h-6 bg-primary/20 rounded-md mb-4"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/10 rounded-md p-3 h-24">
                      <div className="w-full h-4 bg-primary/20 rounded-md mb-2"></div>
                      <div className="w-3/4 h-4 bg-primary/20 rounded-md"></div>
                    </div>
                    <div className="bg-primary/10 rounded-md p-3 h-24">
                      <div className="w-full h-4 bg-primary/20 rounded-md mb-2"></div>
                      <div className="w-3/4 h-4 bg-primary/20 rounded-md"></div>
                    </div>
                    <div className="bg-primary/10 rounded-md p-3 h-24">
                      <div className="w-full h-4 bg-primary/20 rounded-md mb-2"></div>
                      <div className="w-3/4 h-4 bg-primary/20 rounded-md"></div>
                    </div>
                    <div className="bg-primary/10 rounded-md p-3 h-24">
                      <div className="w-full h-4 bg-primary/20 rounded-md mb-2"></div>
                      <div className="w-3/4 h-4 bg-primary/20 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
