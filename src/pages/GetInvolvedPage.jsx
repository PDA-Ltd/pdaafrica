import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../constants";
import { close, volunteer, givelove, negotiation } from "../assets/icons";
import { africateam } from "../assets/images";
import DonateForm from "../components/DonateForm";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const GetInvolvedPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.getInvolved : fr.getInvolved;
  const [activeForm, setActiveForm] = useState(null);
  const [showDonateForm, setShowDonateForm] = useState(false);

  const serviceIcons = {
    "Become a Volunteer": volunteer,
    "Donate to support": givelove,
    "Become a Partner": negotiation,
  };

  const handleButtonClick = (service) => {
    if (service.linkType === "paystack") {
      setShowDonateForm(true);
    } else {
      setActiveForm(service.link);
    }
  };

  const handleClose = () => {
    setActiveForm(null);
    setShowDonateForm(false);
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange via-orange/90 to-orange/80">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title.split(" ").slice(0, 2).join(" ")} <span className="text-yellow-300">{t.title.split(" ").slice(2).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.waysToGetInvolved.split(" ").slice(0, 2).join(" ")} <span className="text-orange">{t.waysToGetInvolved.split(" ").slice(2).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.waysDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Filter out donate service - hidden but code preserved */}
            {services.filter(service => service.linkType !== "paystack").map((service, index) => {
              const icon = serviceIcons[service.label] || volunteer;
              // Get translated service data
              const serviceTranslations = t.services || {};
              const translatedService = serviceTranslations[service.label] || service;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Icon */}
                  <div className="bg-orange/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:scale-110 transition-all">
                    <img
                      src={icon}
                      alt={translatedService.label || service.label}
                      className="w-12 h-12 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange transition-colors">
                    {translatedService.label || service.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {translatedService.subtext || service.subtext}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => handleButtonClick(service)}
                    className="w-full bg-orange text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    {translatedService.button || service.button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Get Involved Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.whyGetInvolved.split(" ").slice(0, 1).join(" ")} <span className="text-orange">{t.whyGetInvolved.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.whyDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.directImpact,
                description: t.directImpactDesc,
                icon: "🎯",
              },
              {
                title: t.sustainableChange,
                description: t.sustainableChangeDesc,
                icon: "🌱",
              },
              {
                title: t.communityLed,
                description: t.communityLedDesc,
                icon: "🤝",
              },
              {
                title: t.transparent,
                description: t.transparentDesc,
                icon: "📊",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <div className="text-5xl mb-4">💬</div>
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  {t.testimonial || '"Getting involved with PDA Africa has been one of the most rewarding experiences. Knowing that my contribution directly impacts communities and helps create sustainable change is incredibly fulfilling."'}
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {t.testimonialAuthor || "- Community Partner"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Google Forms */}
      {activeForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full relative max-h-[90vh] overflow-hidden">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <img src={close} alt="close" height={24} width={24} />
            </button>
            <div className="p-4 pt-12">
              <iframe
                src={activeForm}
                width="100%"
                height="600px"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ border: "none" }}
                allowFullScreen
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Donate Form */}
      {showDonateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <img src={close} alt="close" height={24} width={24} />
            </button>
            <div className="p-8 pt-12">
              <DonateForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolvedPage;
