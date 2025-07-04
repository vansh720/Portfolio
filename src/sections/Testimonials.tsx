import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials } from '../data/portfolio';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsRef = useScrollAnimation();

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={testimonialsRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-primary-500 fill-current" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* All testimonials preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`p-6 rounded-lg transition-all duration-300 text-left ${
                  index === currentTestimonial
                    ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-700'
                    : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                  {testimonial.content}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;