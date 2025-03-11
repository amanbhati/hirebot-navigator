
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/animations';
import { CalendarDays, Clock, CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  date: string;
  day: string;
}

const InterviewScheduler = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  
  // Sample dates for the next 7 days
  const generateDates = () => {
    const dates = [];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      dates.push({
        id: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        day: days[date.getDay()]
      });
    }
    
    return dates;
  };
  
  const availableDates = generateDates();
  
  // Generate time slots for the selected date
  const generateTimeSlots = (): TimeSlot[] => {
    if (!selectedDate) return [];
    
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    const date = new Date(selectedDate);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    for (let hour = startHour; hour < endHour; hour++) {
      const startTime = `${hour}:00`;
      const endTime = `${hour + 1}:00`;
      
      slots.push({
        id: `${selectedDate}-${hour}`,
        startTime,
        endTime,
        date: dateStr,
        day
      });
    }
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  const handleDateClick = (dateId: string) => {
    setSelectedDate(dateId);
    setSelectedTimeSlot(null);
  };
  
  const handleTimeSlotClick = (slotId: string) => {
    setSelectedTimeSlot(slotId);
  };
  
  const handleConfirm = () => {
    if (!selectedTimeSlot) {
      toast.error('Please select a time slot');
      return;
    }
    
    const selectedSlot = timeSlots.find(slot => slot.id === selectedTimeSlot);
    
    if (selectedSlot) {
      toast.success(`Interview scheduled for ${selectedSlot.day}, ${selectedSlot.date} at ${selectedSlot.startTime}`);
      setConfirmed(true);
    }
  };
  
  const handleReschedule = () => {
    setConfirmed(false);
  };
  
  const getFormattedTime = (timeString: string) => {
    const [hours] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:00 ${ampm}`;
  };
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm"
    >
      <h3 className="text-xl font-bold mb-6">Schedule Your Interview</h3>
      
      {!confirmed ? (
        <>
          <div className="mb-8">
            <h4 className="text-sm font-medium text-muted-foreground mb-4 flex items-center">
              <CalendarDays className="mr-2" size={16} />
              Select a Date
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {availableDates.map(date => (
                <button
                  key={date.id}
                  onClick={() => handleDateClick(date.id)}
                  className={`p-3 rounded-md border text-center transition-colors hover:border-primary hover:bg-primary/5 ${
                    selectedDate === date.id 
                      ? 'border-primary bg-primary/10 text-primary' 
                      : 'border-border'
                  }`}
                >
                  <div className="text-xs font-medium mb-1">{date.day}</div>
                  <div className="text-sm">{date.label}</div>
                </button>
              ))}
            </div>
          </div>
          
          {selectedDate && (
            <div className="mb-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4 flex items-center">
                <Clock className="mr-2" size={16} />
                Select a Time
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {timeSlots.map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => handleTimeSlotClick(slot.id)}
                    className={`p-3 rounded-md border text-center transition-colors hover:border-primary hover:bg-primary/5 ${
                      selectedTimeSlot === slot.id 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-border'
                    }`}
                  >
                    {getFormattedTime(slot.startTime)} - {getFormattedTime(slot.endTime)}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-end">
            <button
              onClick={handleConfirm}
              disabled={!selectedTimeSlot}
              className="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Confirm Interview
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-500" size={32} />
          </div>
          
          {timeSlots.find(slot => slot.id === selectedTimeSlot) && (
            <>
              <h4 className="text-xl font-bold mb-2">Interview Scheduled!</h4>
              <div className="space-y-2 mb-6">
                <p className="text-lg">
                  {timeSlots.find(slot => slot.id === selectedTimeSlot)?.day}, 
                  {timeSlots.find(slot => slot.id === selectedTimeSlot)?.date}
                </p>
                <p className="text-lg text-primary font-medium">
                  {getFormattedTime(timeSlots.find(slot => slot.id === selectedTimeSlot)?.startTime || '')} - 
                  {getFormattedTime(timeSlots.find(slot => slot.id === selectedTimeSlot)?.endTime || '')}
                </p>
              </div>
              <p className="text-muted-foreground mb-8">
                You will receive a confirmation email with details and a calendar invitation.
              </p>
            </>
          )}
          
          <button
            onClick={handleReschedule}
            className="text-primary hover:underline"
          >
            Reschedule Interview
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default InterviewScheduler;
