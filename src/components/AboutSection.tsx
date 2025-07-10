
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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Meet Kenetics Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Meet Kenetics
          </h2>
          
          {/* Kenetics Technology Image */}
          <div className={`w-full max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-purple-900 p-8">
              <img 
                src="/lovable-uploads/bf8bd996-4d49-4ac1-b078-f2d68526fbdb.png" 
                alt="Kenetics AI Technology in Action - Real-time movement analysis and feedback"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className={`text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Mission
          </h3>
          <h4 className={`text-2xl font-semibold text-[hsl(var(--kenetics-primary))] mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Get to Know Us
          </h4>
          <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            At Kenetics, we are pioneers in health technology, driven by a mission to enhance healthcare accessibility and inclusivity. Through cutting-edge technology, we empower underserved individuals with personalized at-home physical therapy exercises, revolutionizing musculoskeletal injury care. Our commitment is to make healing a seamless, cost-effective, and empowering experience for all.
          </p>
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

        {/* Kenetics Journey Carousel */}
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[hsl(var(--kenetics-primary))] to-[hsl(var(--kenetics-primary-dark))] p-8 text-center">
            <h3 className="text-3xl font-bold text-black mb-4">
              Kenetics Journey
            </h3>
            <p className="text-lg text-black/80">
              Empowering individuals through technology-driven healthcare solutions.
            </p>
          </div>
          
          <div className="relative p-8">
            <div className="overflow-hidden">
              <div 
                className="flex transition-all duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselContent.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-[hsl(var(--kenetics-primary))] mb-6 animate-pulse">
                        {slide.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-3 rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-[hsl(var(--kenetics-primary-dark))]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-3 rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-[hsl(var(--kenetics-primary-dark))]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center pb-8 space-x-3">
            {carouselContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[hsl(var(--kenetics-primary))] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
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
