import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';

const Countdown = () => {
  const invitationData = useData();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date(invitationData.date.countdownTarget).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsPast(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-wedding-dark text-wedding-cream text-center relative">
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-heading mb-10 text-wedding-gold-soft">Menuju Hari Bahagia</h2>
        
        {isPast ? (
          <div className="text-2xl font-body italic text-white/80 py-10">
            Acara telah berlangsung
          </div>
        ) : (
          <div className="flex justify-center gap-4 md:gap-8">
            <TimeUnit value={timeLeft.days} label="Hari" />
            <TimeUnit value={timeLeft.hours} label="Jam" />
            <TimeUnit value={timeLeft.minutes} label="Menit" />
            <TimeUnit value={timeLeft.seconds} label="Detik" />
          </div>
        )}
      </div>
    </section>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-2 shadow-lg">
      <span className="text-2xl md:text-4xl font-heading text-white font-bold">{value}</span>
    </div>
    <span className="text-xs md:text-sm uppercase tracking-wider text-wedding-gold-soft">{label}</span>
  </div>
);

export default Countdown;
