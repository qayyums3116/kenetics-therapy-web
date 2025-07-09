
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Knee Recovery Patient',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'KENETICS transformed my recovery journey. The AI-guided exercises were perfectly tailored to my needs, and I recovered faster than expected.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Back Pain Therapy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The convenience of at-home therapy combined with professional-grade AI guidance made all the difference in my treatment.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Post-Surgery Rehabilitation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'I was skeptical about remote therapy, but KENETICS proved that technology can deliver exceptional healthcare outcomes.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--kenetics-dark))] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Real stories from real people who have transformed their lives with KENETICS.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[hsl(var(--kenetics-primary))]"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[hsl(var(--kenetics-primary))] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-[hsl(var(--kenetics-primary))] text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-300">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial 
                        ? 'bg-[hsl(var(--kenetics-primary))]' 
                        : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
