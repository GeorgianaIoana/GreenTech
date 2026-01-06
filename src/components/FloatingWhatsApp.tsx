import React from "react";

type FloatingWhatsAppProps = {
  phone?: string; // format international fara +, ex: 40123456789
  message?: string;
};

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phone = "40742898793",
  message = "Buna!",
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-12 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl ring-1 ring-black/5 transition hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M19.11 17.27c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.31.2-.57.07-.27-.13-1.15-.43-2.18-1.35-.81-.73-1.35-1.63-1.51-1.89-.16-.27-.02-.43.12-.58.12-.12.27-.31.4-.46.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.49-.07-.16-.6-1.45-.82-1.99-.22-.53-.44-.45-.6-.46h-.52c-.18 0-.49.07-.74.34-.25.27-.95.92-.95 2.23s.97 2.58 1.11 2.76c.14.18 1.9 2.86 4.59 4.02.65.27 1.15.43 1.55.56.65.2 1.23.18 1.69.11.51-.07 1.62-.66 1.84-1.28.23-.62.23-1.16.16-1.27-.06-.11-.25-.19-.53-.33z" />
        <path d="M27.24 4.76A13.92 13.92 0 0016 .01C7.18.01.04 7.14.04 15.96c0 2.46.64 4.87 1.7 7.01L0 32l9.2-2.42a15.86 15.86 0 007.81 2.08h.01c8.82 0 15.96-7.14 15.96-15.96 0-4.27-1.67-8.21-4.74-11.28zM16 29.33h-.01a13.34 13.34 0 01-6.8-1.85l-.49-.29-5.29 1.39 1.41-5.15-.32-.53A13.35 13.35 0 012.67 15.96C2.67 8.6 8.64 2.63 16 2.63c3.57 0 6.93 1.39 9.45 3.92a13.34 13.34 0 013.92 9.41c0 7.36-5.97 13.37-13.33 13.37z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
