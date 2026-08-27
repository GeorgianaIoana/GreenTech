import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { language } = useLanguage();

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
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const shouldShowBackground = isScrolled || location.pathname !== '/';

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
            {items.map((item, index) => {
              const englishItem = navItems.en[index];
              return (
                <button
                  key={item}
                  onClick={() => handleNavigation(englishItem)}
                  onMouseEnter={() => {
                    if (englishItem === 'Schedule' && !window.Calendly && !document.querySelector('script[src*="calendly.com"]')) {
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
              {items.map((item, index) => {
                const englishItem = navItems.en[index];
                return (
                  <button
                    key={item}
                    onClick={() => handleNavigation(englishItem)}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-teal-600/50 transition-colors duration-200"
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
