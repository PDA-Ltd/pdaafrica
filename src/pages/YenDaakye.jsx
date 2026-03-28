import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaUsers, FaChartLine, FaHandshake, FaShieldAlt, FaChild } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const YenDaakye = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.yenDaakye : fr.yenDaakye;
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [snapshotRef, snapshotVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [tasksRef, tasksVisible] = useScrollAnimation();
  const [approachRef, approachVisible] = useScrollAnimation();

  return (
    <section
      id="yen-daakye"
      className="max-container max-w-full w-full min-h-screen bg-white justify-center font-poppins"
    >
      {/* Back to Projects Button */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t.backToProjects || "Back to Projects"}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange via-orange/90 to-orange/80">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div ref={heroRef} className={`max-w-4xl mx-auto text-center ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-3 drop-shadow-2xl">
              {t.title || "\"Yen Daakye\" Programme"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {t.subtitle || "Eliminating the worst forms of child labour and forced labour in cocoa production"}
            </p>
          </div>
        </div>
      </section>

      {/* Project Snapshot Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={snapshotRef} className={`${snapshotVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
                {t.snapshotTitle || "Project Snapshot"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <FaHandshake className="text-orange text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{t.partner || "Partner"}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.partnerName || "International Cocoa Initiative"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <FaChartLine className="text-orange text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{t.period || "Period"}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.periodValue || "November 2004 – 2010"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <FaUsers className="text-orange text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{t.country || "Country of Operation"}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.countryValue || "Ghana"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <FaShieldAlt className="text-orange text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{t.category || "Category"}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.categoryValue || "Agriculture & Child Protection"}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t.snapshotDescription || "PDA serves as the Local Coordinating Agency for the \"Yen Daakye\" ('Our Future') Programme, a pilot initiative targeting the elimination of the worst forms of child labour and forced labour in cocoa production and marketing. This community-driven project is part of ICI's broader effort to create sustainable and child-centred development in cocoa farming communities. The pilot runs in three districts—New Edubiase in the Ashanti Region, and Daboase and Asankrangwa in the Western Region—through district-based NGOs acting as Implementing Partners, supported by a PDA team comprising district facilitators, a field coordinator, and a community technical consultant."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={objectivesRef} className={`${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              {t.objectivesTitle || "Project Objectives"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="flex items-center gap-3 mb-3">
                  <FaChild className="text-orange text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-800">{t.eliminateLabour || "Eliminate Worst Forms of Labour"}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t.eliminateLabourDesc || "Eliminate the worst forms of child and forced labour in cocoa production and marketing."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="flex items-center gap-3 mb-3">
                  <FaUsers className="text-orange text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-800">{t.sustainableApproaches || "Sustainable Approaches"}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t.sustainableApproachesDesc || "Develop sustainable, community-driven approaches to improve the livelihoods of cocoa farming communities."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <div className="flex items-center gap-3 mb-3">
                  <FaChartLine className="text-orange text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-800">{t.enhanceSustainability || "Enhance Sustainability"}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t.enhanceSustainabilityDesc || "Enhance the social, economic, and environmental sustainability of cocoa production."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDA's Task Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={tasksRef} className={`${tasksVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              {t.pdaTaskTitle || "PDA's Task"}
            </h2>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t.pdaTaskDescription || "PDA provided capacity building and coordination support to the district-based Implementing Partners. This included training, technical support in community engagement processes, participatory planning, and ongoing monitoring of community action plans."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Went About It Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={approachRef} className={`${approachVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              {t.approachTitle || "How We Went About It"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <FaUsers className="text-orange text-2xl" />
                  <h3 className="text-xl font-semibold text-orange">{t.capacityBuildingTitle || "Capacity Building"}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t.capacityBuildingDesc || "Delivered training and workshops to enhance the skills of local facilitators and community groups."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <FaChartLine className="text-orange text-2xl" />
                  <h3 className="text-xl font-semibold text-orange">{t.participatoryPlanningTitle || "Participatory Planning"}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t.participatoryPlanningDesc || "Facilitated dialogue sessions to develop community action plans addressing child labour and forced labour issues."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <FaHandshake className="text-orange text-2xl" />
                  <h3 className="text-xl font-semibold text-orange">{t.coordinationTitle || "Coordination and Support"}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t.coordinationDesc || "Coordinated the activities of district facilitators and provided continuous backstopping and monitoring of project implementation."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default YenDaakye;
