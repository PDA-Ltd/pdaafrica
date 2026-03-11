import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  FaChild,
  FaUsers,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaHandshake,
  FaCalendarAlt,
  FaBookOpen,
  FaShieldAlt,
  FaBuilding,
  FaCheckCircle,
  FaTasks,
  FaChartLine,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";
import { slide, nyomodul, nyonk } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const successStories = [
  "“Joining the VSLA group has helped me save for my children's education.” – Cocoa Farmer",
  "“With the project's support, I now understand the importance of keeping my children in school.” – Parent",
  "“The training sessions have changed our approach to child labor.” – Community Leader",
];

const SuccessStories = () => {
  const settings = { 
    dots: true, 
    infinite: true, 
    autoplay: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="text-center">
      <Slider {...settings}>
        {successStories.map((story, index) => (
          <div key={index} className="px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange transform hover:-translate-y-1">
              <p className="text-gray-700 text-lg leading-relaxed italic">{story}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Nyonkopa = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.nyonkopa : fr.nyonkopa;
  
  const [expandedSection, setExpandedSection] = useState(null);
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [snapshotRef, snapshotVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [activitiesRef, activitiesVisible] = useScrollAnimation();
  const [moduleRef, moduleVisible] = useScrollAnimation();
  const [coverageRef, coverageVisible] = useScrollAnimation();
  const [storiesRef, storiesVisible] = useScrollAnimation();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const activityCards = [
    {
      id: "referral",
      icon: FaUsers,
      title: t.strengtheningReferral,
      shortDesc: language === "en" ? "Large-scale referral of 6,078 child protection cases across 58 districts" : "Référence à grande échelle de 6 078 cas de protection de l'enfance dans 58 districts",
      fullDesc: t.strengtheningReferralDescription,
      q4Desc: t.strengtheningReferralQ4,
      reach: t.overallReach,
      color: "orange",
    },
    {
      id: "capacity",
      icon: FaBuilding,
      title: t.buildingCapacity,
      shortDesc: language === "en" ? "Trained 58 case managers on SWIMS for improved case handling" : "Formation de 58 gestionnaires de cas sur SWIMS pour améliorer la gestion des cas",
      fullDesc: t.buildingCapacityDescription,
      color: "orange",
    },
    {
      id: "structures",
      icon: FaUsers,
      title: t.strengtheningStructures,
      shortDesc: language === "en" ? "Revitalizing DCPCs and strengthening 30 CCPCs in child labor-prone areas" : "Revitalisation des DCPC et renforcement de 30 CCPC dans les zones à risque de travail des enfants",
      districtDesc: t.strengtheningStructuresDescription,
      communityDesc: t.strengtheningStructuresCommunity,
      color: "red",
    },
    {
      id: "remediation",
      icon: FaHandsHelping,
      title: t.remediationSupport,
      shortDesc: language === "en" ? "154 children enrolled in vocational training, 69% transition rate" : "154 enfants inscrits à la formation professionnelle, taux de transition de 69%",
      fullDesc: t.remediationSupportDescription,
      color: "yellow",
    },
  ];

  return (
    <section
      id="pdaafrica"
      className="max-container max-w-full w-full min-h-screen font-poppins overflow-hidden"
    >
      {/* Back to Projects Button */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${nyonk})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div ref={heroRef} className={`relative flex items-center justify-center h-full px-6 ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-orange font-bold font-poppins mb-3 drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-5 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Project Snapshot Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={snapshotRef} className={`text-center mb-8 ${snapshotVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-2">
              {t.projectSnapshot}
            </h2>
          </div>
          
          {/* Project Info Cards - Animated */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaHandshake className="text-3xl mb-3 animate-bounce" />
              <div className="text-sm opacity-90 mb-1">{t.partners}</div>
              <div className="text-base md:text-lg font-bold">Barry Callebaut Nyonkopa</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaCalendarAlt className="text-3xl mb-3 animate-bounce delay-100" />
              <div className="text-sm opacity-90 mb-1">{t.period}</div>
              <div className="text-lg font-bold">2025 –</div>
            </div>
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaMapMarkerAlt className="text-3xl mb-3 animate-bounce delay-200" />
              <div className="text-sm opacity-90 mb-1">{t.country}</div>
              <div className="text-lg font-bold">Ghana</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <FaShieldAlt className="text-3xl mb-3 animate-bounce delay-300" />
              <div className="text-sm opacity-90 mb-1">{t.category}</div>
              <div className="text-base md:text-lg font-bold">Child Protection and Welfare</div>
            </div>
          </div>

          {/* Description - Compact */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-orange hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {t.snapshotDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Objectives - Right after Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={objectivesRef} className={`text-center mb-8 ${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.projectObjectives.split(" ")[0]} <span className="text-orange">{t.projectObjectives.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <div className={`grid md:grid-cols-3 gap-6 ${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-orange group">
              <div className="bg-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <FaChild className="h-10 w-10 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-2xl text-orange mb-4">
                {t.remediationProcess}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.remediationProcessDesc}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-orange group">
              <div className="bg-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <FaUsers className="h-10 w-10 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-2xl text-orange mb-4">
                {t.economicEmpowerment}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.economicEmpowermentDesc}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-orange group">
              <div className="bg-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <FaHandsHelping className="h-10 w-10 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-2xl text-orange mb-4">
                {t.communitySensitization}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.communitySensitizationDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - Compact */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={statsRef} className={`text-center mb-8 ${statsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.aboutProject.split(" ")[0]} <span className="text-orange">{t.aboutProject.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <div className={`grid md:grid-cols-3 gap-8 ${statsVisible ? 'animate-on-scroll visible scale' : 'animate-on-scroll scale'}`}>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="bg-orange/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <FaChild className="h-10 w-10 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-5xl font-bold text-orange mb-2 animate-pulse">10,436</p>
              <p className="font-semibold text-gray-700 text-lg">{t.childrenRemediated}</p>
            </div>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="bg-orange/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <FaMapMarkerAlt className="h-10 w-10 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-5xl font-bold text-orange mb-2 animate-pulse">400</p>
              <p className="font-semibold text-gray-700 text-lg">{t.communitiesCovered}</p>
            </div>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="bg-orange/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <FaUsers className="h-10 w-10 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-5xl font-bold text-orange mb-2 animate-pulse">46</p>
              <p className="font-semibold text-gray-700 text-lg">{t.vslaGroupsFormed}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities - Interactive Expandable Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={activitiesRef} className={`text-center mb-8 ${activitiesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {language === "en" ? "Key Activities" : "Activités clés"}
            </h2>
            <p className="text-gray-600 mt-4">
              {language === "en" ? "Click on each card to learn more" : "Cliquez sur chaque carte pour en savoir plus"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activityCards.map((activity, index) => {
              const Icon = activity.icon;
              const isExpanded = expandedSection === activity.id;
              const colorClasses = {
                orange: "from-orange/5 to-orange/10 border-orange",
                red: "from-red/5 to-red/10 border-red",
                yellow: "from-yellow-50 to-orange/10 border-yellow-500",
              };
              
              return (
                <div
                  key={activity.id}
                  className={`bg-gradient-to-br ${colorClasses[activity.color]} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
                  onClick={() => toggleSection(activity.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`rounded-full p-4 flex-shrink-0 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${
                        activity.color === 'orange' ? 'bg-orange' : 
                        activity.color === 'red' ? 'bg-red' : 
                        'bg-yellow-500'
                      }`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">
                          {activity.shortDesc}
                        </p>
                      </div>
                      <FaArrowDown className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {isExpanded && (
                      <div className="mt-4 space-y-4 animate-fade-in">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {activity.fullDesc}
                        </p>
                        {activity.q4Desc && (
                          <div className="bg-white/50 rounded-lg p-4 border-l-4 border-orange">
                            <p className="text-gray-700 text-sm md:text-base">
                              {activity.q4Desc}
                            </p>
                          </div>
                        )}
                        {activity.reach && (
                          <div className="bg-gradient-to-r from-orange to-orange/80 rounded-lg p-4 text-white">
                            <p className="text-sm md:text-base font-semibold">
                              {activity.reach}
                            </p>
                          </div>
                        )}
                        {activity.districtDesc && (
                          <div className="space-y-3">
                            <div className="bg-white/50 rounded-lg p-4 border-l-4 border-orange">
                              <p className="text-gray-700 text-sm md:text-base">
                                {activity.districtDesc}
                              </p>
                            </div>
                            <div className="bg-white/50 rounded-lg p-4 border-l-4 border-red">
                              <p className="text-gray-700 text-sm md:text-base">
                                {activity.communityDesc}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Looking Ahead - Compact */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-green-500 rounded-full p-4 animate-pulse">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800">
                {t.lookingAhead}
              </h2>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-6 md:p-8 border-2 border-green-500/30 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <FaTasks className="text-green-600 text-3xl mt-1 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-1">
                {t.lookingAheadDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Module - More Animated */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={moduleRef} className={`text-center mb-6 ${moduleVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.projectModule.split(" ")[0]} <span className="text-orange">{t.projectModule.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.projectModuleDesc}
            </p>
          </div>
          <div className={`${moduleVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-300">
              <div className="space-y-6">
                {[
                  { num: 1, title: "Identification", desc: "Identifying children at risk or engaged in child labour", color: "red", colorClass: "red" },
                  { num: 2, title: "Assessment", desc: "Comprehensive assessment of child's situation, family context, and root causes", color: "orange", colorClass: "orange" },
                  { num: 3, title: "Remediation", desc: "Implementing targeted interventions including VSLA groups, education support, and community sensitization", color: "yellow", colorClass: "yellow-500" },
                  { num: 4, title: "Monitoring & Follow-up", desc: "Continuous monitoring, evaluation, and follow-up to ensure sustainable outcomes", color: "green", colorClass: "green-500" },
                ].map((level, index) => {
                  const bgClass = level.colorClass === "red" ? "from-red/10 to-red/20 border-red" :
                                 level.colorClass === "orange" ? "from-orange/10 to-orange/20 border-orange" :
                                 level.colorClass === "yellow-500" ? "from-yellow-50 to-yellow-100 border-yellow-500" :
                                 "from-green-50 to-green-100 border-green-500";
                  const bgCircleClass = level.colorClass === "red" ? "bg-red" :
                                       level.colorClass === "orange" ? "bg-orange" :
                                       level.colorClass === "yellow-500" ? "bg-yellow-500" :
                                       "bg-green-500";
                  const textClass = level.colorClass === "red" ? "text-red" :
                                   level.colorClass === "orange" ? "text-orange" :
                                   level.colorClass === "yellow-500" ? "text-yellow-700" :
                                   "text-green-700";
                  const arrowClass = level.colorClass === "red" ? "text-red" :
                                    level.colorClass === "orange" ? "text-orange" :
                                    level.colorClass === "yellow-500" ? "text-yellow-600" :
                                    "text-green-600";
                  const nextColor = index === 0 ? "orange" : index === 1 ? "yellow" : "green";
                  const gradientClass = level.colorClass === "red" ? `from-red/40 to-${nextColor}/40` :
                                       level.colorClass === "orange" ? `from-orange/40 to-${nextColor}/40` :
                                       level.colorClass === "yellow-500" ? `from-yellow-300 to-${nextColor}-300` :
                                       `from-green-300 to-${nextColor}-300`;
                  
                  return (
                    <div key={level.num}>
                      <div className={`bg-gradient-to-r ${bgClass} rounded-xl p-6 border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2 hover:scale-[1.02] group`}>
                        <div className="flex items-center gap-4">
                          <div className={`${bgCircleClass} text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {level.num}
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold ${textClass} mb-2`}>
                              {level.title}
                            </h3>
                            <p className="text-gray-700">{level.desc}</p>
                          </div>
                          <FaArrowRight className={`${arrowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="flex justify-center my-2">
                          <div className={`w-1 h-8 bg-gradient-to-b ${gradientClass} rounded-full animate-pulse`}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: FaUsers, text: "Community Engagement" },
                    { icon: FaHandsHelping, text: "Participatory Approach" },
                    { icon: FaChild, text: "Child-Centered" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange/5 transition-all duration-300 transform hover:-translate-y-2 group">
                        <Icon className="text-orange text-4xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-gray-700 font-semibold">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div ref={coverageRef} className={`text-center mb-6 ${coverageVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.projectCoverage.split(" ")[0]} <span className="text-orange">{t.projectCoverage.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.projectCoverageDesc}
            </p>
          </div>
          <div className={`${coverageVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1015357.3502807181!2d-2.56408976350274!3d6.232106141599593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAkim%20Oda%2C%20Assin%20Fosu%2C%20Asante%20Bekwai%2C%20Kasapin%2C%20Goaso%2C%20and%20Juaboso.!5e0!3m2!1sen!2sgh!4v1730807163690!5m2!1sen!2sgh"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Project Map"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section ref={storiesRef} className={`py-16 px-6 bg-gradient-to-b from-white to-gray-50 text-center ${storiesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.storiesOfChange.split(" ")[0]} <span className="text-orange">{t.storiesOfChange.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            {t.storiesDescription}
          </p>
          <div className="mt-12">
            <SuccessStories />
          </div>
        </div>
      </section>

      {/* Child Abuse Tracker */}
      <section>
        <div className="flex justify-center align-middle p-3">
          <h1 className="font-poppins text-3xl font-bold text-red">
            {t.childAbuseTracker}
          </h1>
        </div>
        <iframe
          src="https://stopviolenceagainstchildren.ushahidi.io/map"
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Dashboard"
        ></iframe>
      </section>
    </section>
  );
};

export default Nyonkopa;
