import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Hook: count up animation for numbers
function useCountUp(target: number, isVisible: boolean, delay: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start: number | null = null;
      const duration = 2000; // animation duration in ms

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, target, delay]);

  return count;
}

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById('about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Values grid data
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
    },
  ];

  // Carousel content
  const carouselContent = [
    {
      title: 'Our Story',
      content:
        "At Kenetics Solutions, we are driven by a deep passion to make technology more accessible and inclusive for everyone. We understand first-hand the challenges that individuals face when they don't receive the care they need, whether due to age, location, economic constraints, or language barriers. And that is why we strive to develop innovative technology solutions that cater to the needs of various communities. Our solutions are designed to help bridge gaps, empower individuals, and improve their quality of life."
     },
    {
      title: 'Our Vision',
      content:
        "We are on a mission to revolutionize the way physical therapists interact with their patients. Our innovative service, offered through a smart device, allows patients to receive customized virtual guidance from their physical therapists while performing exercises at home. Our platform is easy to use, secure, and enables patients to stay connected to their healthcare providers from the comfort of their own homes.",
    },
    {
      title: 'Our Technology',
      content:
        "We believe technology plays a crucial role in delivering the best possible experience for each patient. Our team of experts is always exploring innovative techniques to integrate the latest technologies. Our application provides a unique experience to each patient, using machine learning, artificial intelligence, language modeling, and augmented reality to ensure that every session is personalized for each individual. With our cutting-edge approach to physical therapy, we strive to provide our patients with results that exceed their expectations.",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Capability bars data
  const capabilities = [
    { name: 'AI-POWERED THERAPY', percentage: 100 },
    { name: 'MACHINE LEARNING ALGORITHMS', percentage: 90 },
    { name: 'AUGMENTED REALITY (AR) INTEGRATION', percentage: 75 },
    { name: 'TELEHEALTH & REMOTE MONITORING', percentage: 65 },
    { name: 'DATA SECURITY & COMPLIANCE', percentage: 60 },
    { name: 'USER-CENTRIC DESIGN & ACCESSIBILITY', percentage: 55 },
  ];

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
<section
  id="about"
  className="py-20"
  style={{ backgroundColor: '#E7FF6E' }}
>
  <div className="max-w-6xl mx-auto mb-16">
    {/* card container with subtle backdrop blur and rounded corners */}
    <div
      className={`bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8
                  grid lg:grid-cols-2 gap-8 items-start transition-all duration-1000
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >

      {/* IMAGE with an offset color “shadow” behind it */}
      <div className="relative flex justify-center">
        {/* colored offset layer */}
        <div
          className="absolute top-4 left-4 w-full h-full
                     bg-[hsl(var(--kenetics-primary))] opacity-20
                     rounded-xl"
        />
        <img
          src="/lovable-uploads/bf8bd996-4d49-4ac1-b078-f2d68526fbdb.png"
          alt="Kenetics AI Technology - Movement Analysis"
          className="relative w-full max-w-[280px] h-auto object-cover
                     rounded-xl shadow-2xl"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center space-y-4">
        <h3 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))]">
          Our Mission
        </h3>
        <h4 className="text-2xl md:text-3xl font-semibold text-[hsl(var(--kenetics-dark))]">
          Get to Know Us
        </h4>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
       At Kenetics, we are pioneers in health technology, driven by a mission to enhance healthcare accessibility and inclusivity. We understand first-hand the challenges individuals face when they don’t receive the care they need—whether due to age, location, economic constraints, or language barriers—and we strive to bridge these gaps. Our innovative service, delivered through a smart device, empowers underserved patients with personalized at-home physical therapy exercises. Leveraging machine learning, artificial intelligence, language modeling, and augmented reality, every session is uniquely tailored and secure, enabling real-time virtual guidance from their therapists. With our cutting-edge approach, we revolutionize musculoskeletal injury care to deliver seamless, cost-effective, and empowering healing experiences that consistently exceed expectations.

        </p>
      </div>

    </div>
  </div>
</section>


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


        {/* Innovative Capabilities */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-800
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">Innovative Capabilities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {capabilities.map((cap, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[hsl(var(--kenetics-dark))]">
                    {cap.name}
                  </span>
                  <span className="text-sm font-bold text-[hsl(var(--kenetics-dark))]">
                    {cap.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[hsl(var(--kenetics-dark))] h-3 rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible ? `${cap.percentage}%` : '0%',
                      transitionDelay: `${idx * 200 + 1000}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact */}
        <div
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">Our Impact</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 500, label: 'Personalized Therapy Plans Created' },
              { number: 800, label: 'Patients Benefiting from AI-driven Therapy' },
              { number: 1200, label: 'Hours of Remote Support Provided' },
              { number: 45, label: 'Skilled Experts & Healthcare Professionals' },
            ].map((stat, idx) => {
              const count = useCountUp(stat.number, isVisible, idx * 300 + 1200);
              return (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold mb-2">{count}</div>
                  <p className="text-sm text-gray-600 leading-tight">{stat.label}</p>
                </div>
              );
            })}
          </div>
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
