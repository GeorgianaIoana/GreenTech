import { useLanguage } from '../contexts/LanguageContext';

const TermsAndConditions = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Terms and Conditions",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
          title: "2. Use License",
          content: "Permission is granted to temporarily download one copy of the materials on Bloomsoft's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or remove any copyright or other proprietary notations from the materials.",
        },
        {
          title: "3. Services",
          content: "Bloomsoft provides web development, design, and hosting services. All services are provided subject to availability and our standard terms of service. We reserve the right to refuse service to anyone for any reason at any time.",
        },
        {
          title: "4. Payment Terms",
          content: "Payment terms will be agreed upon before the start of any project. We accept various payment methods as indicated on our website. All prices are in EUR unless otherwise stated.",
        },
        {
          title: "5. Intellectual Property",
          content: "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Bloomsoft or its content suppliers and is protected by international copyright laws.",
        },
        {
          title: "6. Limitation of Liability",
          content: "Bloomsoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.",
        },
        {
          title: "7. Indemnification",
          content: "You agree to indemnify and hold harmless Bloomsoft, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the website or violation of these terms.",
        },
        {
          title: "8. Modifications",
          content: "Bloomsoft reserves the right to modify these terms and conditions at any time. We will notify users of any changes by updating the 'Last Updated' date on this page. Your continued use of the website after such modifications constitutes acceptance of the updated terms.",
        },
        {
          title: "9. Governing Law",
          content: "These terms and conditions are governed by and construed in accordance with the laws of Romania. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Romania.",
        },
        {
          title: "10. Contact Information",
          content: "If you have any questions about these Terms and Conditions, please contact us at hello@bloomsoft.tech or +40 742 898 793.",
        },
      ],
    },
    ro: {
      title: "Termeni și Condiții",
      lastUpdated: "Ultima actualizare: Ianuarie 2025",
      sections: [
        {
          title: "1. Acceptarea Termenilor",
          content: "Prin accesarea și folosirea acestui site, confirmi că ai citit, înțeles și ești de acord să fii obligat de termenii și condițiile acestui acord. Dacă nu ești de acord cu aceste prevederi, te rugăm să nu accesezi sau să nu folosești acest serviciu.",
        },
        {
          title: "2. Licență de Utilizare",
          content: "Îți este permis să descarci temporar o copie a conținutului de pe site-ul Bloomsoft exclusiv pentru uz personal, non-comercial și temporar. Aceasta reprezintă o licență de utilizare, nu un transfer de proprietate, și în cadrul acestei licențe nu ai dreptul să modifici sau să copiezi materialele, să folosești conținutul în scopuri comerciale sau să elimini orice mențiuni de drepturi de autor sau alte indicații de proprietate din materiale.",
        },
        {
          title: "3. Servicii",
          content: "Bloomsoft furnizează servicii de dezvoltare web, design și hosting. Toate serviciile sunt oferite în funcție de disponibilitate și conform termenilor noștri standard. Ne rezervăm dreptul de a refuza serviciul oricărei persoane, din orice motiv, în orice moment.",
        },
        {
          title: "4. Termeni de Plată",
          content: "Condițiile de plată vor fi stabilite înainte de demararea oricărui proiect. Acceptăm multiple metode de plată, așa cum este prezentat pe site-ul nostru. Toate prețurile sunt exprimate în EUR, dacă nu este menționat altfel.",
        },
        {
          title: "5. Proprietate Intelectuală",
          content: "Întregul conținut al acestui site, inclusiv dar fără a se limita la text, grafică, logo-uri, imagini și software, aparține Bloomsoft sau furnizorilor săi de conținut și este protejat de legislația internațională privind drepturile de autor.",
        },
        {
          title: "6. Limitarea Răspunderii",
          content: "Bloomsoft nu poate fi considerat responsabil pentru daune indirecte, accidentale, speciale, consecvențiale sau punitive rezultate din utilizarea sau incapacitatea ta de a folosi serviciul.",
        },
        {
          title: "7. Despăgubire",
          content: "Ești de acord să compensezi și să exonerezi Bloomsoft, reprezentanții, directorii, angajații și agenții săi de orice cereri, daune, pierderi, răspunderi și costuri rezultate din utilizarea site-ului sau încălcarea acestor termeni.",
        },
        {
          title: "8. Modificări",
          content: "Bloomsoft își rezervă dreptul de a modifica acești termeni și condiții oricând. Vom informa utilizatorii despre orice schimbări prin actualizarea datei 'Ultima actualizare' pe această pagină. Continuarea folosirii site-ului după astfel de modificări reprezintă acceptarea termenilor actualizați.",
        },
        {
          title: "9. Legea Aplicabilă",
          content: "Acești termeni și condiții sunt reglementați și interpretați conform legislației României. Orice litigii rezultate din acești termeni vor fi supuse jurisdicției exclusive a instanțelor din România.",
        },
        {
          title: "10. Informații de Contact",
          content: "Dacă ai întrebări referitoare la acești Termeni și Condiții, te rugăm să ne contactezi la hello@bloomsoft.tech sau +40 742 898 793.",
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

export default TermsAndConditions;

