import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const aboutRef = useScrollAnimation();

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Combining technical skills with creative vision to create beautiful interfaces.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and user experience.',
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Always keeping the end user in mind when building solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate AI & Data Science student with strong DSA skills and a flair for building clean, responsive frontend experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-20" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate and curious Artificial Intelligence and Data Science student with a strong foundation in Data Structures & Algorithms and a growing expertise in Frontend Web Development. I love building intelligent and user-friendly web interfaces that blend design with functionality.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey combines the analytical power of AI with the creativity of UI/UX, allowing me to tackle problems both logically and visually. Whether it's designing clean, responsive web apps or diving deep into machine learning models, I enjoy the challenge of turning ideas into impactful digital experiences.
              </p>
               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Currently, I’m sharpening my skills in modern web technologies like React.js, Tailwind CSS, and exploring real-world applications of AI/ML. I’m always looking to collaborate on innovative projects that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;