import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaUsers, FaChartLine, FaHandshake, FaLeaf } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cocoa, farmer } from "../assets/images";

const ImpactProject = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.impactProject : fr.impactProject;
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [snapshotRef, snapshotVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [tasksRef, tasksVisible] = useScrollAnimation();
  const [approachRef, approachVisible] = useScrollAnimation();

  return (
    <section
      id="impact-project"
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
              {t.title || "The iMPACT Project"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {t.subtitle || "Transforming cocoa-dependent communities through integrated development approaches"}
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
                    {t.partnerName || "The iMPACT Consortium (a partnership including AFRICARE, GTZ, ICI, IFESH, MARS Inc, Rainforest Alliance, and STCP)"}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <FaChartLine className="text-orange text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{t.period || "Period"}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.periodValue || "December 2007 – January 2012"}
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
                    <FaLeaf className="text-orange text-2xl" />
                    <h3 className="text-xl font-semibold text-gray-800">{t.category || "Category"}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.categoryValue || "Agriculture & Community Development"}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t.snapshotDescription || "The iMPACT Project, funded by Mars Incorporated as part of the Mars Partnership for African Cocoa Communities of Tomorrow, targeted rural cocoa-dependent communities in Ghana. Piloted in 18 communities across two districts—Wasa Amenfi West (Asankrangwa) and Assin North (Assin Fosu)—the project aimed to demonstrate that an integrated approach combining agriculture, environment, education, and health can transform community incomes and welfare. By enhancing the capacity of cocoa farming communities to identify and improve their social, economic, and environmental conditions, the project sought to make cocoa farming a profitable, socially rewarding, and environmentally sustainable livelihood, while also positioning it as an attractive occupation for future generations."}
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.capacityBuilding || "Capacity Building"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.capacityBuildingDesc || "Empower cocoa farming communities to assess and improve their social, economic, and environmental conditions."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.integratedDevelopment || "Integrated Development"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.integratedDevelopmentDesc || "Demonstrate the benefits of integrating agriculture, education, environment, and health interventions."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.sustainableLivelihoods || "Sustainable Livelihoods"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.sustainableLivelihoodsDesc || "Enhance the profitability and sustainability of cocoa farming, making it an appealing and viable livelihood for families."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.stakeholderSynergy || "Stakeholder Synergy"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.stakeholderSynergyDesc || "Strengthen collaboration among community members, local NGOs, and other stakeholders through participatory processes and evidence-based planning."}
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
                {t.pdaTaskDescription || "PDA was responsible for providing capacity-building support throughout the community engagement process. Key tasks included:"}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold mt-1">•</span>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {t.task1 || "Training Community Engagement Partners (CEPs) and key district stakeholders in participatory methodologies."}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold mt-1">•</span>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {t.task2 || "Facilitating dialogue and sensitization sessions to raise awareness about community issues."}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold mt-1">•</span>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {t.task3 || "Supporting the participatory planning process and the development of community action plans."}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold mt-1">•</span>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {t.task4 || "Coordinating, backstopping, and monitoring the implementation of these community action plans by the CEPs."}
                  </p>
                </li>
              </ul>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-orange mb-3">{t.trainingTitle || "Training & Capacity Building"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.trainingDesc || "Organized workshops and training sessions to equip CEPs and district stakeholders with participatory tools for dialogue, sensitization, and planning."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-orange mb-3">{t.engagementTitle || "Facilitated Community Engagement"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.engagementDesc || "Conducted interactive sessions that enabled communities to voice their challenges and collaboratively design action plans."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-orange mb-3">{t.planningTitle || "Participatory Planning"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.planningDesc || "Guided communities through the elaboration of comprehensive action plans that integrated agriculture, education, environment, and health strategies."}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-orange mb-3">{t.supportTitle || "Ongoing Support"}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.supportDesc || "Provided continuous coordination and monitoring support to ensure that CEPs effectively implemented the community action plans and adapted strategies based on feedback."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ImpactProject;
