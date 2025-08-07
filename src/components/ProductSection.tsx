import React, { useEffect, useState } from 'react';
import { Brain, Cpu, MessageSquare } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductSection: React.FC = () => {
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
      description:
        'Harness the power of our advanced machine learning for precise assessments, personalized treatment plans, progress tracking, and enhanced patient engagement. Elevate the expertise of physical therapists with data-driven insights.',
    },
    {
      icon: Brain,
      title: 'ARTIFICIAL INTELLIGENCE',
      description:
        'Leverage advanced technology for precise assessment, adjustments to treatment plans, progress monitoring, outcome prediction, and patient engagement, enhancing the expertise of trained therapists.',
    },
    {
      icon: MessageSquare,
      title: 'LANGUAGE MODELS',
      description:
        'Utilizing language modeling in on-demand physical therapy, providers can streamline the communication process, improve the quality of care, and enhance the overall patient experience in a remote or digital healthcare environment.',
    },
  ];

  return (
    <section
      id="product"
      className="py-20"
      style={{ backgroundColor: '#E7FF6E' }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Our Technology
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto ${
              isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
            }`}
          >
            Leveraging cutting-edge technology to revolutionize physical therapy and make it accessible from the comfort of your home.
          </p>
        </div>

        {/* Images */}
        <div
          className={`flex justify-center items-center mb-16 space-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <img
            src="/lovable-uploads/image1.avif"
            alt="Technology Demo 1"
            className="w-full max-w-xs h-auto object-cover rounded-xl shadow-lg"
          />
          <img
            src="/lovable-uploads/image2.avif"
            alt="Technology Demo 2"
            className="w-full max-w-xs h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Swiper Carousel */}
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl transition-all duration-700 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                >
                  <div className="w-20 h-20 rounded-full bg-[hsl(var(--kenetics-primary))] flex items-center justify-center mb-6 shadow-md">
                    <tech.icon size={36} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[hsl(var(--kenetics-dark))] mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
