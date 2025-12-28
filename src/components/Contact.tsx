import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);

  // Replace with your email address
  const recipientEmail = "georgiana17stanciu@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setError("Te rugăm să accepți prelucrarea datelor.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          service: service,
          message: message,
          _subject: `New Contact Form: ${name}`,
          _captcha: "false", // Set to "true" if you want to enable reCAPTCHA
        }),
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        // Redirect to thank you page
        navigate("/thank-you");
      } else {
        setError("A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.");
      }
    } catch (err: any) {
      console.error("FormSubmit error:", err);
      setError("A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-teal-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-10 items-start md:grid-cols-2">
        {/* Coloană stângă: date de contact */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contactează-ne
          </h2>
          <p className="text-gray-700 mb-8">
            Suntem aici să te ajutăm cu proiecte web sustenabile. Ne poți scrie
            sau suna direct folosind detaliile de mai jos.
          </p>
          <ul className="space-y-5 text-slate-800">
            <li className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <div className="font-medium">Telefon</div>
                <a href="tel:+40123456789" className="hover:text-teal-700">
                  +40 123 456 789
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.4l-10 5.6L2 6.4V6zm0 3.2l9.46 5.3a1.5 1.5 0 001.48 0L22 9.2V18a2 2 0 01-2 2H4a2 2 0 01-2-2V9.2z" />
                </svg>
              </span>
              <div>
                <div className="font-medium">Email</div>
                <a
                  href="mailto:hello@greentea.studio"
                  className="hover:text-teal-700"
                >
                  hello@greentea.studio
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9v2H4a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2v-7a2 2 0 00-2-2h-1V9c0-3.866-3.134-7-7-7zm5 9H7V9a5 5 0 0110 0v2z" />
                </svg>
              </span>
              <div>
                <div className="font-medium">Program</div>
                <p>Luni–Vineri: 09:00–18:00</p>
                <p>Sâmbătă–Duminică: închis</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 7.5 9 11 9 11s9-3.5 9-11c0-4.97-4.03-9-9-9zm0 12.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                </svg>
              </span>
              <div>
                <div className="font-medium">Adresă</div>
                <p>București, România</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/40123456789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .1 5.36.1 11.96c0 2.11.55 4.18 1.6 6.01L0 24l6.2-1.63a11.9 11.9 0 005.86 1.56h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.21-3.52-8.49zM12.07 21.3h-.01a9.3 9.3 0 01-4.74-1.29l-.34-.2-3.68.97.98-3.59-.22-.37A9.3 9.3 0 012.8 11.96C2.8 6.85 6.96 2.7 12.06 2.7c2.49 0 4.83.97 6.6 2.74a9.29 9.29 0 012.74 6.6c0 5.1-4.16 9.26-9.33 9.26zm5.34-6.95c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.61.06-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.42-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.06-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.51.07-.78.36-.26.29-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z" />
              </svg>
              Scrie pe WhatsApp
            </a>
            <div className="flex items-center gap-5 text-teal-700">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-orange-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-orange-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h-.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-orange-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-sm text-teal-800/80">
              Timp mediu de răspuns: sub 24h în zilele lucrătoare.
            </p>
          </div>
        </div>

        {/* Coloană dreaptă: formular */}
        <div className="w-full max-w-md justify-self-end bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Trimite-ne un mesaj
          </h3>
          <p className="text-gray-600 mb-8">
            Ne bucurăm să auzim de la tine. Trimite mesajul și revenim curând.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Nume complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Serviciu
              </label>
              <select
                id="service"
                name="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
              >
                <option value="">Alege un serviciu</option>
                <option value="sustainable-website">Website sustenabil</option>
                <option value="eco-webapp">Aplicație web eco</option>
                <option value="green-ecommerce">E-Commerce verde</option>
                <option value="brand-identity">
                  Identitate de brand sustenabilă
                </option>
                <option value="consultation">Consultanță de strategie</option>
                <option value="other">Altceva</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white resize-none"
                placeholder="Cu ce te putem ajuta?"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="consent" className="text-sm text-slate-700">
                Sunt de acord cu prelucrarea datelor mele conform Politicii de
                confidențialitate.
              </label>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!consent || loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Se trimite..." : "Trimite mesajul"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
