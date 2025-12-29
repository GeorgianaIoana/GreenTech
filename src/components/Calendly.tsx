import React, { useEffect } from 'react';

const Calendly: React.FC = () => {
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (document.querySelector('script[src*="calendly.com"]')) {
      return;
    }

    // Load Calendly widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="calendly-inline-widget" 
         data-url="https://calendly.com/georgiana17stanciu/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3dceda" 
         style={{ minWidth: '320px', height: '700px' }}>
    </div>
  );
};

export default Calendly;

