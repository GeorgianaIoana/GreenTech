import React, { useEffect } from 'react';

const TawkTo: React.FC = () => {
  useEffect(() => {
    // Check if Tawk.to is already loaded
    if (window.Tawk_API) {
      return;
    }

    // Tawk.to script for pop-up chat widget
    // Initialize Tawk_API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();
    
    const script = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = 'https://embed.tawk.to/69519421ec457319807ae9b9/1jdjal8vm';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Insert before the first script tag (as per Tawk.to instructions)
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(script, s0);
    } else {
      // Fallback: append to body if no script tag found
      document.body.appendChild(script);
    }

    // Optional: Configure Tawk.to widget settings
    script.onload = () => {
      if (window.Tawk_API) {
        // Tawk.to is loaded, you can configure it here if needed
        // Example: window.Tawk_API.hideWidget(); // to hide initially
        // Example: window.Tawk_API.showWidget(); // to show
      }
    };

    // Cleanup function
    return () => {
      // Remove script on unmount if needed
      const existingScript = document.querySelector(`script[src*="tawk.to"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default TawkTo;

