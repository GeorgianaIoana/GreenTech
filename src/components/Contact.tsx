import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setName("");
    setEmail("");
    setMessage("");
    setService("");
  };

  return (
    <section id="contact" className="py-20 bg-teal-50">
      <div className="container mx-auto px-6 flex">
        <div className="w-full max-w-md ml-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Get in touch
          </h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Send us a message and we’ll respond
            soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Full name
              </label>
              <input
                id="name"
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
                Service
              </label>
              <select
                id="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white"
              >
                <option value="">Select a service</option>
                <option value="sustainable-website">Sustainable Website</option>
                <option value="eco-webapp">Eco Web Application</option>
                <option value="green-ecommerce">Green E-Commerce</option>
                <option value="brand-identity">
                  Sustainable Brand Identity
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
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 bg-gray-50 focus:bg-white resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-60"
            >
              {submitted ? "Message sent!" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
