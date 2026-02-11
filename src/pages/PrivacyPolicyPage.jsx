import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.privacyPolicy : fr.privacyPolicy;
  const [heroRef, heroVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: t.introduction },
    { id: "information", label: t.informationWeCollect },
    { id: "usage", label: t.howWeUseInformation },
    { id: "protection", label: t.dataProtection },
    { id: "cookies", label: t.cookies },
    { id: "thirdparty", label: t.thirdPartyLinks },
    { id: "rights", label: t.yourRights },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                
                {/* Introduction */}
                <div id="introduction" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-orange/10 rounded-lg p-3">
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.introduction}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.introductionText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information We Collect */}
                <div id="information" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.informationWeCollect}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.informationWeCollectText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div id="usage" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.howWeUseInformation}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.howWeUseInformationText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data Protection */}
                <div id="protection" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.dataProtection}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.dataProtectionText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookies */}
                <div id="cookies" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.cookies}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.cookiesText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third Party Links */}
                <div id="thirdparty" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-red-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.thirdPartyLinks}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.thirdPartyLinksText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Your Rights */}
                <div id="rights" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-indigo-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.yourRights}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t.yourRightsText}
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

export default PrivacyPolicyPage;
