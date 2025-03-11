
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, CalendarClock, FileText, Users, ClipboardCheck, X } from 'lucide-react';
import { useInView } from '@/lib/animations';

type Status = 'submitted' | 'review' | 'assessment' | 'interview' | 'decision' | 'rejected';

interface StatusStep {
  id: Status;
  label: string;
  description: string;
  icon: React.ReactNode;
  date?: string;
}

const ApplicationStatus = () => {
  const [currentStatus, setCurrentStatus] = useState<Status>('submitted');
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isRejected, setIsRejected] = useState(false);
  
  // For demo purposes, advance through statuses
  const [demoMode, setDemoMode] = useState(false);

  useEffect(() => {
    if (demoMode) {
      const statuses: Status[] = ['submitted', 'review', 'assessment', 'interview', 'decision'];
      let currentIndex = statuses.indexOf(currentStatus);
      
      const interval = setInterval(() => {
        if (currentIndex < statuses.length - 1) {
          currentIndex++;
          setCurrentStatus(statuses[currentIndex]);
        } else {
          clearInterval(interval);
        }
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [demoMode, currentStatus]);

  const statusSteps: StatusStep[] = [
    {
      id: 'submitted',
      label: 'Application Submitted',
      description: 'Your application has been received and is being processed.',
      icon: <FileText className="text-primary" />,
      date: 'May 15, 2023'
    },
    {
      id: 'review',
      label: 'Resume Review',
      description: 'Our team is reviewing your qualifications and experience.',
      icon: <ClipboardCheck className="text-primary" />,
      date: currentStatus !== 'submitted' ? 'May 17, 2023' : undefined
    },
    {
      id: 'assessment',
      label: 'Skills Assessment',
      description: 'Complete the skills assessment to demonstrate your abilities.',
      icon: <Users className="text-primary" />,
      date: ['assessment', 'interview', 'decision'].includes(currentStatus) ? 'May 22, 2023' : undefined
    },
    {
      id: 'interview',
      label: 'Interview Scheduled',
      description: 'You will be contacted soon to schedule the interview.',
      icon: <CalendarClock className="text-primary" />,
      date: ['interview', 'decision'].includes(currentStatus) ? 'June 1, 2023' : undefined
    },
    {
      id: 'decision',
      label: 'Final Decision',
      description: 'A decision will be made based on your overall application.',
      icon: <CheckCircle className="text-primary" />,
      date: currentStatus === 'decision' ? 'June 10, 2023' : undefined
    },
  ];
  
  const getStepStatus = (stepId: Status) => {
    const statusOrder = ['submitted', 'review', 'assessment', 'interview', 'decision'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    const stepIndex = statusOrder.indexOf(stepId);
    
    if (isRejected) {
      return stepId === currentStatus ? 'current' : stepIndex < statusOrder.indexOf(currentStatus) ? 'completed' : 'upcoming';
    }
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  const toggleDemoMode = () => {
    setDemoMode(!demoMode);
    if (!demoMode) {
      setCurrentStatus('submitted');
      setIsRejected(false);
    }
  };

  const rejectApplication = () => {
    setIsRejected(true);
    setDemoMode(false);
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Application Status</h3>
        <div className="flex gap-3">
          <button 
            onClick={toggleDemoMode}
            className="text-sm px-3 py-1 rounded-md border border-primary/30 text-primary hover:bg-primary/5"
          >
            {demoMode ? 'Stop Demo' : 'Demo Progress'}
          </button>
          <button 
            onClick={rejectApplication}
            className="text-sm px-3 py-1 rounded-md border border-red-500/30 text-red-500 hover:bg-red-500/5"
          >
            Simulate Rejection
          </button>
        </div>
      </div>

      <div className="relative">
        {isRejected && (
          <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center rounded-lg">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <X className="text-red-500" size={24} />
            </div>
            <h4 className="text-lg font-bold mb-2">Application Not Selected</h4>
            <p className="text-center text-muted-foreground max-w-md mb-4">
              Thank you for your interest. Unfortunately, we have decided to pursue other candidates whose qualifications better match our current needs.
            </p>
            <button 
              onClick={() => {
                setIsRejected(false);
                setCurrentStatus('submitted');
              }}
              className="text-primary hover:underline"
            >
              Return to status view
            </button>
          </div>
        )}

        <div className="space-y-8">
          {statusSteps.map((step, index) => {
            const stepStatus = getStepStatus(step.id);
            return (
              <div key={step.id} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      stepStatus === 'completed' 
                        ? 'bg-primary' 
                        : stepStatus === 'current' 
                          ? 'bg-primary ring-4 ring-primary/20' 
                          : 'bg-gray-200'
                    }`}
                  >
                    {stepStatus === 'completed' ? (
                      <CheckCircle className="text-white" size={16} />
                    ) : stepStatus === 'current' ? (
                      <Clock className="text-white" size={16} />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                    )}
                  </div>
                  
                  {index < statusSteps.length - 1 && (
                    <div 
                      className={`absolute top-8 left-1/2 w-0.5 h-24 -translate-x-1/2 ${
                        stepStatus === 'completed' ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
                
                <div className={`flex-1 pb-8 ${stepStatus === 'upcoming' ? 'opacity-50' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className={`font-medium flex items-center gap-2 ${
                        stepStatus === 'current' ? 'text-primary font-semibold' : ''
                      }`}>
                        <span className="w-5 h-5">{step.icon}</span>
                        {step.label}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                    </div>
                    
                    {step.date && (
                      <span className="text-sm text-muted-foreground">{step.date}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationStatus;
