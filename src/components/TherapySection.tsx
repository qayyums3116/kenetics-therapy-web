
import React, { useEffect, useState } from 'react';
import { Dumbbell, Zap, Scale, User, Activity, RotateCcw } from 'lucide-react';

const TherapySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('therapy');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const therapyOptions = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle strength with personalized resistance exercises',
      delay: 'delay-100'
    },
    {
      icon: Zap,
      title: 'Flexibility',
      description: 'Improve range of motion through targeted stretching routines',
      delay: 'delay-200'
    },
    {
      icon: Scale,
      title: 'Balance',
      description: 'Enhance stability and prevent falls with balance exercises',
      delay: 'delay-300'
    },
    {
      icon: Activity,
      title: 'Gait Analysis',
      description: 'Analyze and improve walking patterns for better mobility',
      delay: 'delay-100'
    },
    {
      icon: User,
      title: 'Posture',
      description: 'Correct posture alignment for reduced pain and better health',
      delay: 'delay-200'
    },
    {
      icon: RotateCcw,
      title: 'Range of Motion',
      description: 'Restore joint mobility through targeted movement exercises',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="therapy" className="py-20" style={{ backgroundColor: '#E7FF6E' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Choose Your Therapy
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Comprehensive therapy options tailored to your specific needs and rehabilitation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl hover:bg-[hsl(var(--kenetics-primary))] hover:text-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer ${
                isVisible ? `animate-fade-in-up ${option.delay}` : 'opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--kenetics-primary))] rounded-full mb-6 group-hover:bg-black group-hover:text-[hsl(var(--kenetics-primary))] transition-all duration-300 group-hover:scale-110">
                  <option.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--kenetics-dark))] group-hover:text-black transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-600 group-hover:text-black transition-colors leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapySection;
