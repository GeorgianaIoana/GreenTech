import React from 'react';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>Finescript</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Crafting exceptional digital experiences through innovative web development 
                and thoughtful design. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Video Page', 'First Project', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>Services</h4>
              <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <li>Web Development</li>
                <li>Mobile-First Design</li>
                <li>Backend Development</li>
                <li>UI/UX Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left" style={{ fontFamily: 'Outfit, sans-serif' }}>
              © {currentYear} DevCraft. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;