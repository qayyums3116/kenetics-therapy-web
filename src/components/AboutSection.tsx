
import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'AI-driven accuracy in every movement assessment and therapy plan.',
      delay: 'delay-100'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making quality physical therapy available to everyone, everywhere.',
      delay: 'delay-200'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Setting new standards in digital healthcare innovation.',
      delay: 'delay-300'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Putting patient well-being at the center of everything we do.',
      delay: 'delay-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6">
                About KENETICS
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're revolutionizing physical therapy by combining cutting-edge artificial intelligence 
                with personalized care. Our mission is to make high-quality rehabilitation accessible 
                to everyone, regardless of location or circumstance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by healthcare professionals and technology experts, KENETICS bridges the gap 
                between traditional therapy and modern innovation, delivering results that exceed 
                expectations while maintaining the human touch that healthcare requires.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      isVisible ? `animate-fade-in-up ${value.delay}` : 'opacity-0'
                    }`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--kenetics-primary))] rounded-full flex items-center justify-center">
                      <value.icon size={20} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[hsl(var(--kenetics-dark))] mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare Professional"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--kenetics-primary))]/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold text-[hsl(var(--kenetics-dark))] mb-1">
                      Personalized Care
                    </h4>
                    <p className="text-sm text-gray-600">
                      Every therapy plan is uniquely tailored to your specific needs and goals.
                    </p>
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

export default AboutSection;
