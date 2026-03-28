import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { ksw } from "../assets/images";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaArrowLeft,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

const KnowledgeSharingWorkshops = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.ksw : fr.ksw;
  const [heroRef, heroVisible] = useScrollAnimation();
  const [snapshotRef, snapshotVisible] = useScrollAnimation();
  const [seriesRef, seriesVisible] = useScrollAnimation();

  return (
    <section
      id="pdaafrica"
      className="max-container max-w-full w-full min-h-screen bg-white justify-center font-poppins"
    >
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t.backToProjects}</span>
          </Link>
        </div>
      </div>

      <div
        className="relative w-full min-h-[70vh] sm:min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${ksw})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div
          ref={heroRef}
          className={`relative flex items-center justify-center min-h-[70vh] sm:min-h-screen px-6 py-16 ${
            heroVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
          }`}
        >
          <div className="text-center text-white max-w-4xl">
            <h1 className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 text-orange drop-shadow-2xl leading-tight">
              {t.title}
            </h1>
            <p className="text-lg md:text-2xl mt-4 mb-5 font-poppins text-white/90 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={snapshotRef}
            className={`text-center mb-8 ${
              snapshotVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-2">
              {t.snapshotTitle}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-3">{t.snapshotLead}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaUsers className="text-3xl mb-3" />
              <div className="text-sm opacity-90 mb-1">{t.partner}</div>
              <div className="text-base md:text-lg font-bold">{t.partnerName}</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaCalendarAlt className="text-3xl mb-3" />
              <div className="text-sm opacity-90 mb-1">{t.period}</div>
              <div className="text-lg font-bold">{t.periodValue}</div>
            </div>
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaMapMarkerAlt className="text-3xl mb-3" />
              <div className="text-sm opacity-90 mb-1">{t.country}</div>
              <div className="text-base md:text-lg font-bold">{t.countryValue}</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaShieldAlt className="text-3xl mb-3" />
              <div className="text-sm opacity-90 mb-1">{t.category}</div>
              <div className="text-base md:text-lg font-bold">{t.categoryValue}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-orange hover:shadow-2xl transition-shadow duration-300 mb-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{t.snapshotDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={seriesRef}
            className={`text-center mb-12 ${
              seriesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-2">
              {t.seriesTitle}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t.seriesSubtitle}</p>
          </div>

          <div className="space-y-8">
            {t.workshops.map((w, i) => (
              <article
                key={i}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  seriesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-stretch">
                  <div className="bg-gradient-to-br from-orange to-orange/90 text-white px-6 py-5 md:w-44 flex flex-col justify-center items-center md:items-start shrink-0">
                    <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
                      {t.editionLabel}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold mt-1">{w.edition}</span>
                  </div>
                  <div className="p-6 md:p-8 flex-1 border-l-4 border-orange">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{w.theme}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="inline-flex items-center gap-2">
                        <FaCalendarAlt className="text-orange" />
                        {w.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FaMapMarkerAlt className="text-orange" />
                        {w.venue}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-orange uppercase tracking-wide mb-2">
                      {t.reportHeading}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">{w.report}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default KnowledgeSharingWorkshops;
