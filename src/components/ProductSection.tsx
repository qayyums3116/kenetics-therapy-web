
import React, { useEffect, useState } from 'react';
import { Brain, Cpu, MessageSquare } from 'lucide-react';

const ProductSection = () => {
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

    const element = document.getElementById('product');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      icon: Cpu,
      title: 'MACHINE LEARNING',
      description: 'Harness the power of our advanced machine learning for precise assessments, personalized treatment plans, progress tracking, and enhanced patient engagement. Elevate the expertise of physical therapists with data-driven insights.',
      delay: 'delay-100'
    },
    {
      icon: Brain,
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Leverage advanced technology for precise assessment, adjustments to treatment plans, progress monitoring, outcome prediction, and patient engagement, enhancing the expertise of trained therapists.',
      delay: 'delay-200'
    },
    {
      icon: MessageSquare,
      title: 'LANGUAGE MODELS',
      description: 'Utilizing language modeling in on-demand physical therapy, providers can streamline the communication process, improve the quality of care, and enhance the overall patient experience in a remote or digital healthcare environment.',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our Technology
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Leveraging cutting-edge technology to revolutionize physical therapy and make it accessible from the comfort of your home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group cursor-pointer transform hover:scale-105 ${
                isVisible ? `animate-fade-in-up ${tech.delay}` : 'opacity-0'
              }`}
              style={{
                animation: isVisible ? `float 6s ease-in-out infinite ${index * 0.5}s` : 'none'
              }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[hsl(var(--kenetics-primary))] rounded-full mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <tech.icon size={36} className="text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--kenetics-dark))] mb-4 group-hover:text-[hsl(var(--kenetics-primary))] transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
