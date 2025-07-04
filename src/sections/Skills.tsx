import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillsRef = useScrollAnimation();

  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white border-b-2 border-primary-200 dark:border-primary-800 pb-2">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Visual Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3 text-primary-600 dark:text-primary-400">
                {/* You can replace this with actual icons */}
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-xs font-semibold">
                    {skill.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                {skill.name}
              </h4>
              
              {/* Skill level indicator */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;