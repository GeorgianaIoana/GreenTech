import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 rounded-full opacity-20 animate-ping"></div>
            <div className="relative bg-teal-600 rounded-full p-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-montserratAlt">
          Mulțumim pentru mesaj!
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-montserratAlt">
          Am primit mesajul tău și îți vom răspunde în cel mai scurt timp posibil.
          <br />
          <span className="text-teal-600 font-semibold">
            Timp mediu de răspuns: sub 24h în zilele lucrătoare.
          </span>
        </p>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-teal-100">
          <p className="text-slate-600 mb-4 font-montserratAlt">
            În timp ce aștepți, poți să:
          </p>
          <ul className="text-left space-y-2 text-slate-700 font-montserratAlt">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span>Explorezi proiectele noastre</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span>Vezi serviciile pe care le oferim</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span>Ne contactezi direct pe WhatsApp</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
          >
            <Home className="w-5 h-5" />
            <span>Înapoi la Home</span>
          </button>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center space-x-2 bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
          >
            <ArrowLeft className="w-5 h-5 rotate-180" />
            <span>Vezi Proiectele</span>
          </button>
        </div>

        {/* WhatsApp Quick Contact */}
        <div className="mt-12 pt-8 border-t border-teal-200">
          <p className="text-slate-600 mb-4 font-montserratAlt">
            Ai nevoie de un răspuns urgent?
          </p>
          <a
            href="https://wa.me/40123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .1 5.36.1 11.96c0 2.11.55 4.18 1.6 6.01L0 24l6.2-1.63a11.9 11.9 0 005.86 1.56h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.21-3.52-8.49zM12.07 21.3h-.01a9.3 9.3 0 01-4.74-1.29l-.34-.2-3.68.97.98-3.59-.22-.37A9.3 9.3 0 012.8 11.96C2.8 6.85 6.96 2.7 12.06 2.7c2.49 0 4.83.97 6.6 2.74a9.29 9.29 0 012.74 6.6c0 5.1-4.16 9.26-9.33 9.26zm5.34-6.95c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.61.06-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.42-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.06-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.51.07-.78.36-.26.29-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z" />
            </svg>
            <span>Scrie pe WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

