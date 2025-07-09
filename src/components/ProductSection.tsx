
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
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI algorithms analyze movement patterns and provide real-time feedback for optimal therapy outcomes.',
      delay: 'delay-100'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Our ML models continuously learn from your progress to personalize and adapt your therapy plan.',
      delay: 'delay-200'
    },
    {
      icon: MessageSquare,
      title: 'Language Processing',
      description: 'Natural language processing enables intuitive communication and guidance throughout your therapy journey.',
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
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                isVisible ? `animate-fade-in-up ${tech.delay}` : 'opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--kenetics-primary))] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Demo Image */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
              alt="AI Technology Circuit Board"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">AI-Powered Motion Analysis</h4>
              <p className="text-sm opacity-90">Real-time movement tracking and correction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
