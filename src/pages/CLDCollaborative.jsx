import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { gcled } from "../assets/images";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaArrowLeft,
  FaHandshake,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaTasks,
} from "react-icons/fa";

const CLDCollaborative = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.cldCollaborative : fr.cldCollaborative;
  const [heroRef, heroVisible] = useScrollAnimation();
  const [snapshotRef, snapshotVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [taskRef, taskVisible] = useScrollAnimation();
  const [approachRef, approachVisible] = useScrollAnimation();

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
        style={{ backgroundImage: `url(${gcled})` }}
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
              <FaBookOpen className="text-3xl mb-3" />
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
            className={`max-w-4xl mx-auto space-y-6 ${
              objectivesVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-6 md:p-8 border border-orange/20 shadow-lg">
              <div className="text-sm font-semibold text-orange mb-2">{t.goal}</div>
              <p className="text-gray-800 font-poppins text-lg leading-relaxed">{t.goalDesc}</p>
            </div>
            <ul className="space-y-4">
              {t.objectives?.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md border-l-4 border-orange hover:shadow-lg transition-shadow"
                >
                  <div className="bg-orange rounded-full p-2 flex-shrink-0 mt-0.5">
                    <FaTasks className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 leading-relaxed pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div
              ref={taskRef}
              className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange ${
                taskVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                <span className="text-orange">{t.pdaTaskTitle}</span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">{t.pdaTaskDesc}</p>
            </div>
            <div
              ref={approachRef}
              className={`${
                approachVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{t.approachTitle}</h3>
              <ul className="space-y-4">
                {t.approachPoints?.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-5 border border-orange/20 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-orange rounded-full p-2 flex-shrink-0">
                      <FaBookOpen className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CLDCollaborative;
