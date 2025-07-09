
import React, { useEffect, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    plans: 0,
    patients: 0,
    hours: 0,
    experts: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const finalValues = {
        plans: 2500,
        patients: 1800,
        hours: 15000,
        experts: 150
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          plans: Math.floor(finalValues.plans * progress),
          patients: Math.floor(finalValues.patients * progress),
          hours: Math.floor(finalValues.hours * progress),
          experts: Math.floor(finalValues.experts * progress)
        });

        if (step >= steps) {
          setCounters(finalValues);
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      number: counters.plans,
      suffix: '+',
      label: 'Therapy Plans Created',
      delay: 'delay-100'
    },
    {
      number: counters.patients,
      suffix: '+',
      label: 'Patients Helped',
      delay: 'delay-200'
    },
    {
      number: counters.hours,
      suffix: '+',
      label: 'Hours of Remote Support',
      delay: 'delay-300'
    },
    {
      number: counters.experts,
      suffix: '+',
      label: 'Skilled Experts',
      delay: 'delay-400'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-[hsl(var(--kenetics-primary))] text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our Impact
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Making a difference in healthcare, one patient at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                isVisible ? `animate-fade-in-up ${stat.delay}` : 'opacity-0'
              }`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-black">
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
