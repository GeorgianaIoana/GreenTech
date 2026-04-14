import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      tagline: "Make your business bloom",
      navigation: "Navigation",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      contactTitle: "Contact",
      copyright: `© ${currentYear} Bloomsoft. All rights reserved.`,
      privacy: "Privacy Policy",
      terms: "Terms and Conditions",
    },
    ro: {
      tagline: "",
      navigation: "Navigare",
      about: "Despre",
      services: "Servicii",
      projects: "Proiecte",
      contact: "Contact",
      contactTitle: "Contact",
      copyright: `© ${currentYear} Bloomsoft. Toate drepturile rezervate.`,
      privacy: "Politica de Confidențialitate",
      terms: "Termeni și Condiții",
    },
  };

  const t = translations[language];

  const handleNavigation = (section: string) => {
    if (section === 'Projects') {
      navigate('/projects');
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-teal-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <button
              onClick={() => navigate('/')}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/bloomsoft-logo.png"
                alt="Bloomsoft"
                className="h-40 w-auto"
              />
            </button>
            <p className="mt-4 text-xl text-teal-100 font-inter">
              {t.tagline}
            </p>
          </div>

          <nav aria-label="Quick Links" className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-200 font-montserratAlt">
              {t.navigation}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation('about')}
                  className="hover:text-orange-300 text-left font-inter"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('services')}
                  className="hover:text-orange-300 text-left font-inter"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('Projects')}
                  className="hover:text-orange-300 text-left font-inter"
                >
                  {t.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="hover:text-orange-300 text-left font-inter"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </nav>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-200 font-montserratAlt">
              {t.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@bloomsoft.tech"
                  className="hover:text-orange-300"
                >
                  hello@bloomsoft.tech
                </a>
              </li>
              <li>
                <a href="tel:+40742898793" className="hover:text-orange-300">
                  +40 742 898 793
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-x-5 hidden">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-orange-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-orange-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="hover:text-orange-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-teal-100">
            {/* Left: Copyright */}
            <div className="text-left md:text-left">
              <p className="font-inter">
                {t.copyright}
              </p>
            </div>

            {/* Center: Links and ANPC */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate('/privacy')}
                className="hover:text-orange-300 font-inter text-left"
              >
                {t.privacy}
              </button>
              <button
                onClick={() => navigate('/terms')}
                className="hover:text-orange-300 font-inter text-left"
              >
                {t.terms}
              </button>
              <a 
                href="https://anpc.ro/ce-este-sal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-orange-300"
              >
                ANPC-SAL
              </a>
              <a 
                href="https://anpc.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-orange-300"
              >
                ANPC
              </a>
            </div>

            {/* Right: Payment Methods */}
            <div className="flex items-center gap-2">
              {/* VISA */}
              <div className="bg-teal-900/50 border border-teal-700/30 rounded-lg px-3 py-1.5 flex items-center justify-center hover:bg-teal-800/50 transition-colors duration-200">
                <span className="text-teal-100 font-bold text-xs">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="bg-teal-900/50 border border-teal-700/30 rounded-lg px-3 py-1.5 flex items-center justify-center hover:bg-teal-800/50 transition-colors duration-200">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500 -ml-2"></div>
                </div>
                <span className="text-teal-100 text-xs ml-1">mastercard</span>
              </div>
              {/* PayPal */}
              <div className="bg-teal-900/50 border border-teal-700/30 rounded-lg px-3 py-1.5 flex items-center justify-center hover:bg-teal-800/50 transition-colors duration-200">
                <span className="text-teal-100 font-semibold text-xs">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
