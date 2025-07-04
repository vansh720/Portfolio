import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Heart, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23374151&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
              >
                {personalInfo.phone}
              </a>
              <p className="text-gray-300">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. Made with{' '}
            <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
            using React & JavaScript.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-200 group"
          >
            <ArrowUp className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;