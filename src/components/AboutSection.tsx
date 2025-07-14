
import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making quality physical therapy available to everyone, everywhere.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Setting new standards in digital healthcare innovation.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Putting patient well-being at the center of everything we do.',
    }
  ];

  const carouselContent = [
    {
      title: "Our Story",
      content: "At Kenetics Solutions, we are driven by a deep passion to make technology more accessible and inclusive for everyone. We understand first-hand the challenges that individuals face when they don't receive the care they need, whether due to age, location, economic constraints, or language barriers.",
    },
    {
      title: "Our Vision",
      content: "We are on a mission to revolutionize the way physical therapists interact with their patients. Our innovative service, offered through a smart device, allows patients to receive customized virtual guidance from their physical therapists while performing exercises at home.",
    },
    {
      title: "Our Technology",
      content: "We believe technology plays a crucial role in delivering the best possible experience for each patient. Our team of experts is always exploring innovative techniques to integrate the latest technologies using machine learning, artificial intelligence, and augmented reality.",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#E7FF6E' }}>
      <div className="container mx-auto px-4">
        {/* Meet Kenetics Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Meet Kenetics
          </h2>
        </div>

        {/* Mission Section with Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Mission Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-6">
                Our Mission
              </h3>
              <h4 className="text-2xl font-semibold text-[hsl(var(--kenetics-primary))] mb-6">
                Get to Know Us
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Kenetics, we are pioneers in health technology, driven by a mission to enhance healthcare accessibility and inclusivity. Through cutting-edge technology, we empower underserved individuals with personalized at-home physical therapy exercises, revolutionizing musculoskeletal injury care. Our commitment is to make healing a seamless, cost-effective, and empowering experience for all.
              </p>
            </div>
            
            {/* Right side - Animated Image */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative w-80 h-64 mx-auto">
                <img 
                  src="/lovable-uploads/bf8bd996-4d49-4ac1-b078-f2d68526fbdb.png" 
                  alt="Kenetics AI Technology - Movement Analysis"
                  className="w-full h-full object-contain hover:scale-110 transition-all duration-500 ease-in-out animate-pulse hover:animate-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-[hsl(var(--kenetics-primary))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={24} className="text-black" />
              </div>
              <h4 className="font-bold text-[hsl(var(--kenetics-dark))] mb-2 text-lg">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Attractive Kenetics Journey Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
              Kenetics Journey
            </h3>
            <p className="text-lg text-gray-600">
              Empowering individuals through technology-driven healthcare solutions
            </p>
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-80 flex items-center">
              <div 
                className="flex transition-all duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${carouselContent.length * 100}%` }}
              >
                {carouselContent.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-12 py-8 flex items-center justify-center">
                    <div className="text-center max-w-2xl">
                      <div className="inline-block mb-6">
                        <h4 className="text-2xl font-bold text-[hsl(var(--kenetics-primary))] bg-[hsl(var(--kenetics-primary))]/10 px-6 py-3 rounded-full">
                          {slide.title}
                        </h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center py-6 space-x-3">
              {carouselContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[hsl(var(--kenetics-primary))] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
