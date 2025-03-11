
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeUpload from '@/components/ResumeUpload';
import ApplicationStatus from '@/components/ApplicationStatus';
import InterviewScheduler from '@/components/InterviewScheduler';

const JobApplication = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'status' | 'interview'>('upload');
  const [resumeUploaded, setResumeUploaded] = useState(false);
  
  // Mock function to simulate resume upload completion
  useState(() => {
    const timer = setTimeout(() => {
      setResumeUploaded(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="section-container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="heading-2 mb-4">Job Application Portal</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Upload your resume, track your application status, and schedule interviews all in one place.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm mb-8">
              <div className="flex justify-between border-b pb-4 mb-6">
                <button
                  onClick={() => setCurrentStep('upload')}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    currentStep === 'upload' 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  1. Resume Upload
                </button>
                <button
                  onClick={() => setCurrentStep('status')}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    currentStep === 'status' 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  2. Application Status
                </button>
                <button
                  onClick={() => setCurrentStep('interview')}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    currentStep === 'interview' 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  3. Schedule Interview
                </button>
              </div>
              
              <div className="space-y-6">
                {currentStep === 'upload' && (
                  <ResumeUpload />
                )}
                
                {currentStep === 'status' && (
                  <ApplicationStatus />
                )}
                
                {currentStep === 'interview' && (
                  <InterviewScheduler />
                )}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => {
                  const steps: ('upload' | 'status' | 'interview')[] = ['upload', 'status', 'interview'];
                  const currentIndex = steps.indexOf(currentStep);
                  if (currentIndex > 0) {
                    setCurrentStep(steps[currentIndex - 1]);
                  }
                }}
                className={`px-6 py-2 rounded-md border border-border ${
                  currentStep === 'upload' ? 'invisible' : ''
                }`}
              >
                Previous Step
              </button>
              
              <button
                onClick={() => {
                  const steps: ('upload' | 'status' | 'interview')[] = ['upload', 'status', 'interview'];
                  const currentIndex = steps.indexOf(currentStep);
                  if (currentIndex < steps.length - 1) {
                    setCurrentStep(steps[currentIndex + 1]);
                  }
                }}
                className={`px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 ${
                  currentStep === 'interview' ? 'invisible' : ''
                }`}
              >
                Next Step
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobApplication;
