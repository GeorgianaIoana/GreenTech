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
      setError("Please accept data processing.");
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
        setError("An error occurred while sending the message. Please try again.");
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      setError("An error occurred while sending the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-teal-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-8 md:gap-10 items-start md:grid-cols-2">
        {/* Coloană stângă: date de contact */}
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            We're here to help you bloom your business. You can write to us
            or call directly using the details below.
          </p>
          <ul className="space-y-4 md:space-y-5 text-slate-800">
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
                <div className="font-medium">Phone</div>
                <a href="tel:+40742898793" className="hover:text-teal-700">
                  +40 742 898 793
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
                  href="mailto:hello@bloomsoft.tech"
                  className="hover:text-teal-700"
                >
                  hello@bloomsoft.tech
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
                <div className="font-medium">Business Hours</div>
                <p>Monday–Friday: 09:00–18:00</p>
                <p>Saturday–Sunday: Closed</p>

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
                <div className="font-medium">Address</div>
                <p>Bucharest, Romania</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Coloană dreaptă: formular */}
        <div className="w-full max-w-md justify-self-end bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Send us a message
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            We'd love to hear from you. Send us a message and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3 text-sm md:text-base focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
                placeholder="Enter your name"
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
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3 text-sm md:text-base focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
              >
                <option value="">Select a service</option>
                <option value="sustainable-website">Website</option>
                <option value="eco-webapp">Web Application</option>
                <option value="green-ecommerce">E-Commerce</option>
                <option value="brand-identity">
                  Brand Identity
                </option>
                <option value="consultation">Strategy Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3 text-sm md:text-base focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white resize-none"
                placeholder="Enter your message"
              />
            </div>

            <div className="flex items-start gap-2 md:gap-3">
              <input
                id="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 md:h-5 md:w-5 rounded border-gray-300 accent-green-600 focus:ring-green-500 focus:ring-2 flex-shrink-0 cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs md:text-sm text-slate-700 leading-relaxed">
                I agree to the processing of my data in accordance with the Privacy Policy.
              </label>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 md:px-4 md:py-3 rounded-xl text-xs md:text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!consent || loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
