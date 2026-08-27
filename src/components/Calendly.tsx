import React, { useEffect, useRef } from 'react';

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly?: any;
  }
}

// Load Calendly script with priority
const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve) => {
    // Check if already loaded
    if (window.Calendly) {
      resolve();
      return;
    }

    const existingScript = document.querySelector('script[src*="calendly.com"]') as HTMLScriptElement;
    if (existingScript) {
      // Wait for existing script to load
      if (existingScript.onload) {
        existingScript.onload = () => resolve();
      } else {
        existingScript.addEventListener('load', () => resolve());
      }
      // If script already loaded, resolve immediately
      if (window.Calendly) {
        resolve();
      }
      return;
    }

    // Load Calendly widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => resolve();
    script.onerror = () => resolve(); // Resolve even on error to prevent hanging
    
    // Insert at the beginning of head for faster loading
    const firstScript = document.head.querySelector('script');
    if (firstScript) {
      document.head.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  });
};

// Preload script immediately when module loads
if (typeof window !== 'undefined') {
  loadCalendlyScript();
}

const Calendly: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure script is loaded and widget initializes
    const initWidget = async () => {
      await loadCalendlyScript();
      
      // Calendly auto-initializes widgets with data-url attribute
      // Just ensure the script is loaded and the div is ready
      if (widgetRef.current && window.Calendly) {
        // Force re-initialization if needed
        const widget = widgetRef.current;
        if (!widget.querySelector('iframe')) {
          // Widget will auto-initialize via data-url
          // But we can trigger it manually if needed
          setTimeout(() => {
            if (window.Calendly && widget && !widget.querySelector('iframe')) {
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/georgiana17stanciu/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=14b8a6',
                parentElement: widget,
              });
            }
          }, 50);
        }
      }
    };

    initWidget();
  }, []);

  return (
    <div 
      ref={widgetRef}
      className="calendly-inline-widget" 
      data-url="https://calendly.com/georgiana17stanciu/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=14b8a6" 
      style={{ minWidth: '320px', height: '700px' }}>
    </div>
  );
};

export default Calendly;

