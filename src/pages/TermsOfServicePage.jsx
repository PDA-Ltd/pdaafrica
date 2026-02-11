import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TermsOfServicePage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.termsOfService : fr.termsOfService;
  const [heroRef, heroVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    { id: "acceptance", label: t.acceptance },
    { id: "use", label: t.useOfWebsite },
    { id: "property", label: t.intellectualProperty },
    { id: "content", label: t.userContent },
    { id: "disclaimer", label: t.disclaimer },
    { id: "liability", label: t.limitationOfLiability },
    { id: "changes", label: t.changesToTerms },
    { id: "contact", label: t.contactUs },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-ash">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div ref={heroRef} className={`max-w-4xl mx-auto text-center ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-orange text-sm font-semibold">{t.title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.lastUpdated} {new Date().toLocaleDateString(language === "en" ? "en-US" : "fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    {language === "en" ? "Table of Contents" : "Table des matières"}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeSection === section.id
                            ? "bg-orange text-white shadow-md"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        {section.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div ref={contentRef} className={`flex-1 max-w-4xl ${contentVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <div className="space-y-8">
                
                {/* Acceptance */}
                <div id="acceptance" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-orange/10 rounded-lg p-3">
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.acceptance}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.acceptanceText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Use of Website */}
                <div id="use" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.useOfWebsite}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.useOfWebsiteText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div id="property" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.intellectualProperty}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.intellectualPropertyText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Content */}
                <div id="content" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.userContent}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.userContentText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div id="disclaimer" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.disclaimer}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.disclaimerText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div id="liability" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-red-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.limitationOfLiability}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.limitationOfLiabilityText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div id="changes" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-indigo-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.changesToTerms}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.changesToTermsText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-sm border border-orange-200 p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-orange rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.contactUs}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.contactUsText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
