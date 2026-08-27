import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly?: any;
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const navItems = {
    en: ['Home', 'About', 'Services', 'Projects', 'Schedule', 'Contact'],
    ro: ['Acasă', 'Despre Noi', 'Servicii', 'Proiecte', 'Programare', 'Contact'],
  };

  const items = navItems[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: string) => {
    if (item === 'Projects') {
      navigate('/projects');
    } else if (item === 'Schedule') {
      navigate('/schedule');
    } else if (location.pathname !== '/') {
      // If we're not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // We're on home page, just scroll
      document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isSchedulePage = location.pathname === '/schedule';
  const shouldShowBackground = isScrolled || isSchedulePage || location.pathname !== '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowBackground ? 'bg-teal-700/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate('/')}
              className="hover:opacity-80 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <img
                src="/bloomsoft-logo.png"
                alt="Bloomsoft"
                className="h-16 sm:h-20 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ro' : 'en')}
              className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-teal-600/50 transition-colors"
              title={language === 'en' ? 'Switch to Romanian' : 'Comută la engleză'}
            >
              {language === 'en' ? (
                <svg className="w-6 h-4 rounded-sm" viewBox="0 0 60 40" aria-label="English">
                  <rect width="60" height="40" fill="#012169"/>
                  <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
                </svg>
              ) : (
                <svg className="w-6 h-4 rounded-sm" viewBox="0 0 60 40" aria-label="Română">
                  <rect x="0" width="20" height="40" fill="#002B7F"/>
                  <rect x="20" width="20" height="40" fill="#FCD116"/>
                  <rect x="40" width="20" height="40" fill="#CE1126"/>
                </svg>
              )}
            </button>
            
            {items.map((item, index) => {
              const englishItem = navItems.en[index];
              return (
              <button
                key={item}
                onClick={() => handleNavigation(englishItem)}
                onMouseEnter={() => {
                  // Preload Calendly script when hovering over Schedule link
                  if (item === 'Schedule' && !window.Calendly && !document.querySelector('script[src*="calendly.com"]')) {
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://assets.calendly.com/assets/external/widget.js';
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                  }
                }}
                className="text-teal-50 font-montserratAlt font-medium tracking-wide hover:text-teal-300 transition-all duration-200 link-underline hover:scale-105"
              >
                {item}
              </button>
            );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

          {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-teal-700/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {/* Language Switcher Mobile */}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'ro' : 'en');
                }}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200 flex items-center space-x-2"
              >
                {language === 'en' ? (
                  <>
                    <svg className="w-6 h-4 rounded-sm" viewBox="0 0 60 40" aria-label="English">
                      <rect width="60" height="40" fill="#012169"/>
                      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
                    </svg>
                    <span>English</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-4 rounded-sm" viewBox="0 0 60 40" aria-label="Română">
                      <rect x="0" width="20" height="40" fill="#002B7F"/>
                      <rect x="20" width="20" height="40" fill="#FCD116"/>
                      <rect x="40" width="20" height="40" fill="#CE1126"/>
                    </svg>
                    <span>Română</span>
                  </>
                )}
              </button>
              
              {items.map((item, index) => {
                const englishItem = navItems.en[index];
                return (
                <button
                  key={item}
                  onClick={() => handleNavigation(englishItem)}
                  onMouseEnter={() => {
                    // Preload Calendly script when hovering over Schedule link
                    if (englishItem === 'Schedule' && !window.Calendly && !document.querySelector('script[src*="calendly.com"]')) {
                      const script = document.createElement('script');
                      script.type = 'text/javascript';
                      script.src = 'https://assets.calendly.com/assets/external/widget.js';
                      script.async = true;
                      script.defer = true;
                      document.head.appendChild(script);
                    }
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
                >
                  {item}
                </button>
              );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;