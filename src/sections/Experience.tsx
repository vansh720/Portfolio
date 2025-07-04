import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  const experienceRef = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={experienceRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Journey of Growth Through Learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Empty space for timeline */}
                <div className="hidden md:block w-1/2" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-5 h-5 text-primary-500" />
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {job.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.position}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {job.Institute}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-accent-500" />
                        <span className="text-accent-600 dark:text-accent-400 font-medium">
                          Key Achievements
                        </span>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;