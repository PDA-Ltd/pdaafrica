import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { female } from "../assets/images";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const YoFeB4G = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.yofeb4g : fr.yofeb4g;
  const [heroRef, heroVisible] = useScrollAnimation();
  const [snapshotRef, snapshotVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [phasesRef, phasesVisible] = useScrollAnimation();

  const phases = [
    {
      title: t.phases?.formalization || "Business Formalization training",
      desc:
        t.phasesDesc?.formalization ||
        "Production of a Business Formalization manual and in-person training sessions.",
    },
    {
      title: t.phases?.tvet || "TVET Skills Enhancement training",
      desc:
        t.phasesDesc?.tvet ||
        "Industry visits to upgrade knowledge of tools and techniques.",
    },
    {
      title: t.phases?.mentorship || "Mentorship Programme",
      desc:
        t.phasesDesc?.mentorship ||
        "Virtual and in-person mentorship with female entrepreneurs in the construction sector.",
    },
    {
      title: t.phases?.advocacy || "Advocacy Campaigns",
      desc:
        t.phasesDesc?.advocacy ||
        "Periodic social media campaigns, stakeholder meetings and dialogues.",
    },
    {
      title: t.phases?.mel || "Monitoring, Evaluation & Learning",
      desc:
        t.phasesDesc?.mel ||
        "Ongoing monitoring, evaluation and learning meetings to improve outcomes.",
    },
  ];

  const objectives = [t.obj1, t.obj2, t.obj3, t.obj4].filter(Boolean);

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
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${female})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div
          ref={heroRef}
          className={`relative flex items-center justify-center h-full px-6 ${
            heroVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
          }`}
        >
          <div className="text-center text-white max-w-4xl">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl mb-3 text-orange drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-5 font-poppins text-white/90 leading-relaxed">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaHandshake className="text-3xl mb-3" />
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
              <div className="text-lg font-bold">{t.countryValue}</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaShieldAlt className="text-3xl mb-3" />
              <div className="text-sm opacity-90 mb-1">{t.category}</div>
              <div className="text-base md:text-lg font-bold">{t.categoryValue}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-orange hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{t.snapshotDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={objectivesRef}
            className={`text-center mb-8 ${
              objectivesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-2">
              {t.objectivesTitle}
            </h2>
          </div>
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${
              objectivesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            {objectives.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-6 border border-orange/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange rounded-full p-3 flex-shrink-0">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 text-sm md:text-base">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={phasesRef}
            className={`text-center mb-8 ${
              phasesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-2">
              {t.phasesTitle}
            </h2>
          </div>
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${
              phasesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            {phases.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg border border-orange/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 rounded-full p-3 flex-shrink-0">
                    <FaChartLine className="text-orange text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{p.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default YoFeB4G;
