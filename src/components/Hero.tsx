import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title1: "Web Development",
      title2: "Powered by the Sun",
      description: "We help your business shine online with fast websites, efficient code, stunning UI/UX, and hosting powered by clean solar energy.",
      button: "Shine Online",
      technologies: "Built with modern technologies:",
    },
    ro: {
      title1: "Design modern,",
      title2: "cod impecabil.",
      description: "Îți oferim soluții digitale performante pentru afacerea ta. Realizăm site-uri rapide, cu cod eficient, interfețe atractive și servicii de hosting alimentate cu energie solară.",
      button: "Vezi soluțiile",
      technologies: "Construit cu tehnologii moderne:",
    },
  };

  const t = translations[language];
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen md:min-h-screen lg:h-[120vh] relative overflow-hidden flex items-center"
    >
      {/* Background Forest Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/girl-flower.jpg')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-white pt-20 md:pt-24 lg:pt-0 lg:-mt-20">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-12 leading-tight font-montserratAlt">
              {t.title1}
              <br />
              {t.title2}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-lg lg:text-xl max-w-full md:max-w-[600px] lg:max-w-[500px] text-white mb-8 md:mb-10 lg:mb-8 leading-relaxed font-montserratAlt">
              {t.description}
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToServices}
              className="mb-6 md:mb-8 lg:mb-0 inline-flex items-center justify-center bg-orange-400 text-slate-900 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-4 rounded-full text-sm md:text-lg lg:text-base font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
            >
              {t.button}
            </button>
          </div>

          {/* Trust Section */}
          <div className="mt-4 md:mt-6 lg:mt-20 max-w-full md:max-w-2xl lg:max-w-md">
            <p className="text-white text-base md:text-lg lg:text-[18px] mb-4 md:mb-5 font-medium font-montserratAlt">
              {t.technologies}
            </p>

            {/* Development Tools Carousel */}
            <div className="relative overflow-hidden py-2">
              <div className="flex animate-scroll space-x-6 md:space-x-8">
                {/* First set of tools */}
                <div className="flex items-center space-x-6 md:space-x-8 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/mysql-logo.svg"
                      alt="MySQL"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt whitespace-nowrap">
                      MySQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/js-logo.svg"
                      alt="JavaScript"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/laravel-logo.svg"
                      alt="Laravel"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/react-logo.svg"
                      alt="React"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      React
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/figma-logo.svg"
                      alt="Figma"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/filament-logo.svg"
                      alt="Filament"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Filament
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      GitHub
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Canva
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4 0h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm7.883 16.894c.702 0 1.3-.044 1.794-.132v-2.916c-.494.088-1.092.132-1.794.132-1.236 0-2.12-.22-2.65-.66-.53-.44-.795-1.078-.795-1.914 0-.836.265-1.474.795-1.914.53-.44 1.414-.66 2.65-.66.702 0 1.3.044 1.794.132V5.238c-.494-.088-1.092-.132-1.794-.132-2.64 0-4.632.616-5.976 1.848C3.143 8.186 2.471 9.72 2.471 11.5c0 1.78.672 3.314 2.016 4.546C5.831 17.278 7.823 17.894 10.463 17.894c.702 0 1.3-.044 1.794-.132v-2.916c-.494.088-1.092.132-1.794.132zm5.617 0c2.64 0 4.632-.616 5.976-1.848C23.857 14.814 24.529 13.28 24.529 11.5c0-1.78-.672-3.314-2.016-4.546C21.169 5.722 19.177 5.106 16.537 5.106c-.702 0-1.3.044-1.794.132v2.916c.494-.088 1.092-.132 1.794-.132 1.236 0 2.12.22 2.65.66.53.44.795 1.078.795 1.914 0 .836-.265 1.474-.795 1.914-.53.44-1.414.66-2.65.66-.702 0-1.3-.044-1.794-.132v2.916c.494.088 1.092.132 1.794.132z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Framer
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4.603 16.032a6.47 6.47 0 0 1-.502-1.42c-.143-.547-.143-1.074-.143-1.074s0-.527.143-1.074c.143-.547.357-1.145.746-1.754a6.793 6.793 0 0 1 1.468-1.748 6.875 6.875 0 0 1 1.942-1.217 6.52 6.52 0 0 1 2.17-.514h.025c.225-.014.55-.017.8-.017.25 0 .575.003.8.017h.025a6.52 6.52 0 0 1 2.17.514 6.875 6.875 0 0 1 1.942 1.217 6.793 6.793 0 0 1 1.468 1.748c.389.61.603 1.207.746 1.754.143.547.143 1.074.143 1.074s0 .527-.143 1.074a6.47 6.47 0 0 1-.502 1.42l5.1 2.946-5.1 2.946a6.47 6.47 0 0 1-.244.578c-.143.547-.357 1.145-.746 1.754a6.793 6.793 0 0 1-1.468 1.748 6.875 6.875 0 0 1-1.942 1.217 6.52 6.52 0 0 1-2.17.514h-.025c-.225.014-.55.017-.8.017-.25 0-.575-.003-.8-.017h-.025a6.52 6.52 0 0 1-2.17-.514 6.875 6.875 0 0 1-1.942-1.217 6.793 6.793 0 0 1-1.468-1.748c-.389-.61-.603-1.207-.746-1.754a6.47 6.47 0 0 1-.244-.578L0 18.978l4.603-2.946zM12 8.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Claude
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"/>
                      <path d="M20 5L21 8L24 9L21 10L20 13L19 10L16 9L19 8L20 5Z" opacity="0.7"/>
                      <path d="M4 14L5 17L8 18L5 19L4 22L3 19L0 18L3 17L4 14Z" opacity="0.7"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Google AI
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
                      <path d="M6 17h2v-2H6v2zm0-4h2v-2H6v2zm0-4h2V7H6v2zm4 8h8v-2h-8v2zm0-4h8v-2h-8v2zm0-4h8V7h-8v2z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Claude Code
                    </span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-6 md:space-x-8 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/mysql-logo.svg"
                      alt="MySQL"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      MySQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/js-logo.svg"
                      alt="JavaScript"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/laravel-logo.svg"
                      alt="Laravel"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/react-logo.svg"
                      alt="React"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      React
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/figma-logo.svg"
                      alt="Figma"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/filament-logo.svg"
                      alt="Filament"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Filament
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      GitHub
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Canva
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4 0h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm7.883 16.894c.702 0 1.3-.044 1.794-.132v-2.916c-.494.088-1.092.132-1.794.132-1.236 0-2.12-.22-2.65-.66-.53-.44-.795-1.078-.795-1.914 0-.836.265-1.474.795-1.914.53-.44 1.414-.66 2.65-.66.702 0 1.3.044 1.794.132V5.238c-.494-.088-1.092-.132-1.794-.132-2.64 0-4.632.616-5.976 1.848C3.143 8.186 2.471 9.72 2.471 11.5c0 1.78.672 3.314 2.016 4.546C5.831 17.278 7.823 17.894 10.463 17.894c.702 0 1.3-.044 1.794-.132v-2.916c-.494.088-1.092.132-1.794.132zm5.617 0c2.64 0 4.632-.616 5.976-1.848C23.857 14.814 24.529 13.28 24.529 11.5c0-1.78-.672-3.314-2.016-4.546C21.169 5.722 19.177 5.106 16.537 5.106c-.702 0-1.3.044-1.794.132v2.916c.494-.088 1.092-.132 1.794-.132 1.236 0 2.12.22 2.65.66.53.44.795 1.078.795 1.914 0 .836-.265 1.474-.795 1.914-.53.44-1.414.66-2.65.66-.702 0-1.3-.044-1.794-.132v2.916c.494.088 1.092.132 1.794.132z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Framer
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4.603 16.032a6.47 6.47 0 0 1-.502-1.42c-.143-.547-.143-1.074-.143-1.074s0-.527.143-1.074c.143-.547.357-1.145.746-1.754a6.793 6.793 0 0 1 1.468-1.748 6.875 6.875 0 0 1 1.942-1.217 6.52 6.52 0 0 1 2.17-.514h.025c.225-.014.55-.017.8-.017.25 0 .575.003.8.017h.025a6.52 6.52 0 0 1 2.17.514 6.875 6.875 0 0 1 1.942 1.217 6.793 6.793 0 0 1 1.468 1.748c.389.61.603 1.207.746 1.754.143.547.143 1.074.143 1.074s0 .527-.143 1.074a6.47 6.47 0 0 1-.502 1.42l5.1 2.946-5.1 2.946a6.47 6.47 0 0 1-.244.578c-.143.547-.357 1.145-.746 1.754a6.793 6.793 0 0 1-1.468 1.748 6.875 6.875 0 0 1-1.942 1.217 6.52 6.52 0 0 1-2.17.514h-.025c-.225.014-.55.017-.8.017-.25 0-.575-.003-.8-.017h-.025a6.52 6.52 0 0 1-2.17-.514 6.875 6.875 0 0 1-1.942-1.217 6.793 6.793 0 0 1-1.468-1.748c-.389-.61-.603-1.207-.746-1.754a6.47 6.47 0 0 1-.244-.578L0 18.978l4.603-2.946zM12 8.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Claude
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"/>
                      <path d="M20 5L21 8L24 9L21 10L20 13L19 10L16 9L19 8L20 5Z" opacity="0.7"/>
                      <path d="M4 14L5 17L8 18L5 19L4 22L3 19L0 18L3 17L4 14Z" opacity="0.7"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Google AI
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
                      <path d="M6 17h2v-2H6v2zm0-4h2v-2H6v2zm0-4h2V7H6v2zm4 8h8v-2h-8v2zm0-4h8v-2h-8v2zm0-4h8V7h-8v2z"/>
                    </svg>
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Claude Code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
