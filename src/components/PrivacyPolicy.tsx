import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. Introduction",
          content: "Welcome to Bloomsoft. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
        },
        {
          title: "2. Information We Collect",
          content: "We collect information that you provide directly to us, such as when you fill out our contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.",
        },
        {
          title: "3. How We Use Your Information",
          content: "We use the information we collect to respond to your inquiries, provide our services, improve our website, send you marketing communications (with your consent), and comply with legal obligations.",
        },
        {
          title: "4. Information Sharing",
          content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.",
        },
        {
          title: "5. Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          title: "6. Your Rights",
          content: "You have the right to access, correct, or delete your personal information. You may also withdraw your consent at any time. To exercise these rights, please contact us using the information provided below.",
        },
        {
          title: "7. Cookies",
          content: "Our website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, but this may limit some functionality of our website.",
        },
        {
          title: "8. Changes to This Policy",
          content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
        },
        {
          title: "9. Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at hello@bloomsoft.tech or +40 742 898 793.",
        },
      ],
    },
    ro: {
      title: "Politica de Confidențialitate",
      lastUpdated: "Ultima actualizare: Ianuarie 2025",
      sections: [
        {
          title: "1. Introducere",
          content: "Bun venit la Bloomsoft. Ne angajăm să protejăm datele tale personale și să respectăm dreptul tău la confidențialitate. Această Politică de Confidențialitate descrie modul în care colectăm, utilizăm, divulgăm și păstrăm informațiile tale atunci când accesezi site-ul nostru sau folosești serviciile noastre.",
        },
        {
          title: "2. Informații pe care le Colectăm",
          content: "Colectăm date pe care ni le oferi direct, de exemplu când completezi formularul de contact, soliciți o ofertă sau ne contactezi. Acestea pot include numele tău, adresa de email, numărul de telefon și orice alte informații pe care decizi să le împărtășești cu noi.",
        },
        {
          title: "3. Cum Folosim Informațiile Tale",
          content: "Utilizăm datele colectate pentru a răspunde la solicitările tale, a furniza serviciile noastre, a îmbunătăți site-ul, a-ți transmite comunicări comerciale (cu acordul tău) și a respecta prevederile legale.",
        },
        {
          title: "4. Partajarea Informațiilor",
          content: "Nu comercializăm, nu cedăm și nu oferim datele tale personale către terți. Putem împărtăși informațiile tale doar cu partenerii care ne asistă în funcționarea site-ului și desfășurarea activității, în condițiile respectării angajamentelor de confidențialitate.",
        },
        {
          title: "5. Securitatea Datelor",
          content: "Aplicăm măsuri tehnice și organizatorice potrivite pentru a proteja datele tale personale împotriva accesului neautorizat, modificării, dezvăluirii sau distrugerii.",
        },
        {
          title: "6. Drepturile Tale",
          content: "Ai dreptul să accesezi, să modifici sau să ștergi datele tale personale. De asemenea, poți anula consimțământul în orice moment. Pentru a-ți exercita aceste drepturi, te rugăm să ne contactezi folosind datele de contact furnizate mai jos.",
        },
        {
          title: "7. Cookie-uri",
          content: "Site-ul nostru poate utiliza cookie-uri pentru a-ți îmbunătăți experiența de navigare. Poți configura browser-ul să respingă cookie-urile, însă acest lucru poate reduce anumite funcționalități ale site-ului nostru.",
        },
        {
          title: "8. Modificări ale Acestei Politici",
          content: "Putem actualiza această Politică de Confidențialitate periodic. Te vom anunța despre orice schimbări prin publicarea noii versiuni a Politicii de Confidențialitate pe această pagină și actualizarea datei 'Ultima actualizare'.",
        },
        {
          title: "9. Contactează-ne",
          content: "Dacă ai întrebări referitoare la această Politică de Confidențialitate, te rugăm să ne contactezi la hello@bloomsoft.tech sau +40 742 898 793.",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-montserratAlt">
            {t.title}
          </h1>
          <p className="text-sm text-gray-600 mb-8 font-inter">{t.lastUpdated}</p>

          <div className="space-y-8">
            {t.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-montserratAlt">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 font-inter">
              {language === 'en' 
                ? 'For any questions or concerns, please contact us at hello@bloomsoft.tech'
                : 'Pentru întrebări sau nelămuriri, te rugăm să ne contactezi la hello@bloomsoft.tech'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

