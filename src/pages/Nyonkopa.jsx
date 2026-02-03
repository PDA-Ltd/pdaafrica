// import React from "react";

// const Nyonkopa = () => {
//   return (
//     <section id="pdaafrica" className="max-container w-full min-h-screen">
//       <div className="mt-28 ">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Nyonkopa Child Labour Remediation
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Nyonkopa;

// import React from "react";
// import Slider from "react-slick";
// import {
//   FaChild,
//   FaUsers,
//   FaHandsHelping,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { slide } from "../assets/images";

// const stats = [
//   { icon: <FaChild />, number: 6678, description: "Children Remediated" },
//   { icon: <FaMapMarkerAlt />, number: 277, description: "Communities Covered" },
//   { icon: <FaUsers />, number: 20, description: "VSLA Groups Formed" },
//   {
//     icon: <FaMapMarkerAlt />,
//     number: 6,
//     description: "Administrative Sectors",
//   },
// ];

// const CommunityImpact = () => {
//   const settings = { dots: true, infinite: true, autoplay: true, speed: 500 };

//   return (
//     <section className="py-12 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">
//         Community Impact
//       </h2>
//       <Slider {...settings}>
//         {stats.map((stat, index) => (
//           <div key={index} className="text-center">
//             <div className="text-6xl text-orange-500">{stat.icon}</div>
//             <div className="text-5xl font-bold mt-4 animate-count">
//               {stat.number}
//             </div>
//             <p className="text-lg text-gray-700 mt-2">{stat.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// const Nyonkopa = () => {
//   return (
//     <section
//       id="pdaafrica"
//       className="max-container w-full min-h-screen font-poppins"
//     >
//       <div className="mt-28 ">
//         {/* Hero Section */}
//         <div
//           className="relative h-screen bg-cover bg-center"
//           style={{ backgroundImage: `{ slide } ` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           <div className="relative flex items-center justify-center h-full text-center text-white">
//             <div>
//               <h1 className="text-5xl font-bold">
//                 Nyonkopa Child Labor Remediation Project
//               </h1>
//               <p className="text-xl mt-4">
//                 Partnering for a Brighter Future: A Two-Year Initiative by Barry
//                 Callebaut and PDA
//               </p>
//               <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Project Overview Section */}
//         <section className="py-16 px-8 text-center bg-white">
//           <h2 className="text-4xl font-bold text-orange-500">
//             About the Project
//           </h2>
//           <p className="mt-6 text-gray-700">
//             The Nyonkopa Child Labor Remediation Project is a 2-year initiative
//             between Barry-Callebaut and Participatory Development Associates
//             (PDA). It aims to remediate child labor for 6,678 children across
//             277 communities.
//           </p>
//           <div className="mt-10 flex flex-wrap justify-center gap-28">
//             <div className="flex flex-col items-center max-w-xs">
//               <FaChild className="h-10 w-10  text-orange mb-4" />
//               <p className="font-bold ">6,678 Children in Remediation</p>
//             </div>
//             <div className="flex flex-col items-center max-w-xs">
//               <FaMapMarkerAlt className="h-10 w-10 text-orange mb-4" />
//               <p className="font-bold">277 Communities Covered</p>
//             </div>
//             <div className="flex flex-col items-center max-w-xs">
//               <FaUsers className="h-10 w-10 text-orange mb-4" />
//               <p className="font-bold">20 VSLA Groups Formed</p>
//             </div>
//           </div>
//         </section>

//         {/* Objectives and Goals Section */}
//         <section className="py-16 px-8 bg-gray-100">
//           <h2 className="text-4xl font-bold text-center text-orange">
//             Project Objectives
//           </h2>
//           <div className="mt-8 flex flex-wrap justify-center gap-12">
//             <div className="text-center max-w-xs">
//               <h3 className="font-bold text-xl">
//                 Remediation Process Oversight
//               </h3>
//               <p className="text-gray-700 mt-4">
//                 Oversee the remediation process for children involved in labor.
//               </p>
//             </div>
//             <div className="text-center max-w-xs">
//               <h3 className="font-bold text-xl">Economic Empowerment</h3>
//               <p className="text-gray-700 mt-4">
//                 Improve household financial security by forming VSLA groups.
//               </p>
//             </div>
//             <div className="text-center max-w-xs">
//               <h3 className="font-bold text-xl">Community Sensitization</h3>
//               <p className="text-gray-700 mt-4">
//                 Raise awareness about child labor and promote community-led
//                 initiatives.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Community Impact Section with Slider */}
//         <CommunityImpact />

// {/* Beneficiary Communities Map */}
// <section className="py-16 px-8 bg-white text-center">
//   <h2 className="text-4xl font-bold text-orange">Project Coverage</h2>
//   <p className="mt-6 text-gray-700">
//     The project operates across six Nyonkopa administrative sectors:
//     Akim Oda, Assin Fosu, Asante Bekwai, Kasapin, Goaso, and Juaboso.
//   </p>
//   {/* Placeholder for Map */}
//   <div className="mt-10 bg-gray-200 h-64 flex items-center justify-center">
//     <p>Interactive Map Placeholder</p>
//   </div>
// </section>

//         {/* Success Stories Section */}
// <section className="py-16 px-8 bg-gray-100 text-center">
//   <h2 className="text-4xl font-bold text-orange-500">
//     Stories of Change
//   </h2>
//   <p className="mt-6 text-gray-700">
//     Read about the real impact of our project on the lives of children
//     and families.
//   </p>
//   <div className="mt-10 flex flex-wrap justify-center gap-8">
//     <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg">
//       <p className="text-gray-800">
//         “Joining the VSLA group has helped me save for my children’s
//         education.” – Cocoa Farmer
//       </p>
//     </div>
//     <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg">
//       <p className="text-gray-800">
//         “With the project’s support, I now understand the importance of
//         keeping my children in school.” – Parent
//       </p>
//     </div>
//   </div>
// </section>

// {/* Get Involved Section */}
// <section className="py-16 px-8 bg-white text-center">
//   <h2 className="text-4xl font-bold text-orange">Get Involved</h2>
//   <p className="mt-6 text-gray-700">
//     Support the Nyonkopa Child Labor Remediation Project by partnering
//     with us or offering assistance.
//   </p>
//   <button className="mt-8 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange">
//     Contact Us
//   </button>
// </section>

//         {/* Footer */}
//         {/* <footer className="py-8 bg-gray-800 text-center text-white">
//         <p>© 2024 PDA Ghana | Nyonkopa Child Labor Remediation Project</p>
//       </footer> */}
//       </div>
//     </section>
//   );
// };

// export default Nyonkopa;

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  FaChild,
  FaUsers,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";
import { slide, nyomodul, nyonk } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const successStories = [
  "“Joining the VSLA group has helped me save for my children’s education.” – Cocoa Farmer",
  "“With the project’s support, I now understand the importance of keeping my children in school.” – Parent",
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
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange">
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
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [moduleRef, moduleVisible] = useScrollAnimation();
  const [coverageRef, coverageVisible] = useScrollAnimation();
  const [storiesRef, storiesVisible] = useScrollAnimation();

  return (
    <section
      id="pdaafrica"
      className="max-container max-w-full w-full min-h-screen font-poppins"
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div ref={heroRef} className={`relative flex items-center justify-center h-full px-6 ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl text-orange font-bold font-poppins mb-6 drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-5 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview and Objectives */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={aboutRef} className={`text-center mb-12 ${aboutVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.aboutProject.split(" ")[0]} <span className="text-orange">{t.aboutProject.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.aboutProjectDesc}
            </p>
          </div>
          <div className={`grid md:grid-cols-3 gap-8 ${aboutVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaChild className="h-10 w-10 text-orange" />
              </div>
              <p className="text-4xl font-bold text-orange mb-2">10,436</p>
              <p className="font-semibold text-gray-700 text-lg">{t.childrenRemediated}</p>
            </div>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="h-10 w-10 text-orange" />
              </div>
              <p className="text-4xl font-bold text-orange mb-2">400</p>
              <p className="font-semibold text-gray-700 text-lg">{t.communitiesCovered}</p>
            </div>
            <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-10 w-10 text-orange" />
              </div>
              <p className="text-4xl font-bold text-orange mb-2">46</p>
              <p className="font-semibold text-gray-700 text-lg">{t.vslaGroupsFormed}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives and Goals Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div ref={objectivesRef} className={`text-center mb-12 ${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.projectObjectives.split(" ")[0]} <span className="text-orange">{t.projectObjectives.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <div className={`grid md:grid-cols-3 gap-8 ${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange">
              <h3 className="font-bold text-2xl text-orange mb-4">
                {t.remediationProcess}
              </h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {t.remediationProcessDesc}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange">
              <h3 className="font-bold text-2xl text-orange mb-4">
                {t.economicEmpowerment}
              </h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {t.economicEmpowermentDesc}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange">
              <h3 className="font-bold text-2xl text-orange mb-4">
                {t.communitySensitization}
              </h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {t.communitySensitizationDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={moduleRef} className={`text-center mb-12 ${moduleVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.projectModule.split(" ")[0]} <span className="text-orange">{t.projectModule.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.projectModuleDesc}
            </p>
          </div>
          {/* Visual Module Structure */}
          <div className={`${moduleVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Four-Level Structure */}
              <div className="space-y-8">
                {/* Level 1 - Identification */}
                <div className="bg-gradient-to-r from-red/10 to-red/20 rounded-xl p-6 border-l-4 border-red hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-red mb-2">Identification</h3>
                      <p className="text-gray-700">Identifying children at risk or engaged in child labour</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-red/40 to-orange/40 rounded-full"></div>
                </div>

                {/* Level 2 - Assessment */}
                <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-xl p-6 border-l-4 border-orange hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-orange mb-2">Assessment</h3>
                      <p className="text-gray-700">Comprehensive assessment of child's situation, family context, and root causes</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-orange/40 to-yellow-400 rounded-full"></div>
                </div>

                {/* Level 3 - Remediation */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-700 mb-2">Remediation</h3>
                      <p className="text-gray-700">Implementing targeted interventions including VSLA groups, education support, and community sensitization</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-yellow-300 to-green-300 rounded-full"></div>
                </div>

                {/* Level 4 - Monitoring & Follow-up */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Monitoring & Follow-up</h3>
                      <p className="text-gray-700">Continuous monitoring, evaluation, and follow-up to ensure sustainable outcomes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting Elements */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange/5 transition-colors duration-300">
                    <FaUsers className="text-orange text-3xl mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold">Community Engagement</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange/5 transition-colors duration-300">
                    <FaHandsHelping className="text-orange text-3xl mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold">Participatory Approach</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange/5 transition-colors duration-300">
                    <FaChild className="text-orange text-3xl mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold">Child-Centered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div ref={coverageRef} className={`text-center mb-12 ${coverageVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.projectCoverage.split(" ")[0]} <span className="text-orange">{t.projectCoverage.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.projectCoverageDesc}
            </p>
          </div>
          <div className={`${coverageVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
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

      {/* Get Involved Section */}

      {/* <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-red">Get Involved</h2>
        <p className="mt-6 text-gray-700">
          Support the Nyonkopa Child Labor Remediation Project by partnering
          with us or offering assistance.
        </p>
        <img
          src={nyomodul}
          alt="module"
          className="w-96 h-96  "
        />
        <button className="mt-8 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange">
          Contact Us
        </button> */}
    </section>
  );
};

export default Nyonkopa;
