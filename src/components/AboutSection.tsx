
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
      content: "At Kenetics Solutions, we are driven by a deep passion to make technology more accessible and inclusive for everyone. We understand first-hand the challenges that individuals face when they don't receive the care they need, whether due to age, location, economic constraints, or language barriers. And that is why we strive to develop innovative technology solutions that cater to the needs of various communities."
    },
    {
      title: "Our Vision",
      content: "We are on a mission to revolutionize the way physical therapists interact with their patients. Our innovative service, offered through a smart device, allows patients to receive customized virtual guidance from their physical therapists while performing exercises at home. Our platform is easy to use, secure, and enables patients to stay connected to their healthcare providers."
    },
    {
      title: "Our Technology",
      content: "We believe technology plays a crucial role in delivering the best possible experience for each patient. Our team of experts is always exploring innovative techniques to integrate the latest technologies. Our application provides a unique experience to each patient, using machine learning, artificial intelligence, language modeling, and augmented reality."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Meet Kenetics Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Meet Kenetics
          </h2>
          
          {/* Placeholder for Image */}
          <div className={`w-full max-w-4xl mx-auto h-64 md:h-80 bg-gray-200 rounded-2xl flex items-center justify-center mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <p className="text-gray-500 text-lg">Image Placeholder - Add your image here</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className={`text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            Our Mission
          </h3>
          <h4 className={`text-2xl font-semibold text-[hsl(var(--kenetics-primary))] mb-6 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            Get to Know Us
          </h4>
          <p className={`text-lg text-gray-600 leading-relaxed ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            At Kenetics, we are pioneers in health technology, driven by a mission to enhance healthcare accessibility and inclusivity. Through cutting-edge technology, we empower underserved individuals with personalized at-home physical therapy exercises, revolutionizing musculoskeletal injury care. Our commitment is to make healing a seamless, cost-effective, and empowering experience for all.
          </p>
        </div>

        {/* Values Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
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

        {/* Kenetics Journey Carousel */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-[hsl(var(--kenetics-dark))] text-center mb-4">
            Kenetics Journey
          </h3>
          <p className="text-lg text-gray-600 text-center mb-8">
            Empowering individuals through technology-driven healthcare solutions.
          </p>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselContent.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <h4 className="text-2xl font-bold text-[hsl(var(--kenetics-primary))] mb-4 text-center">
                      {slide.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                      {slide.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-2 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-2 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-[hsl(var(--kenetics-primary))]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
