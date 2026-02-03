// import React from "react";

// const CCLP = () => {
//   return (
//     <section id="pdaafrica" className="max-container w-full min-h-screen">
//       <div className="mt-28 ">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Cocoa Communities Library Project
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default CCLP;

// import React from "react";

// const CCLP = () => {
//   return (
//     <section
//       id="pdaafrica"
//       className="max-container w-full min-h-screen bg-white"
//     >
//       {/* Hero Section */}
//       <div className="mt-28">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Cocoa Communities Library Project
//         </h1>
//         <p className="text-gray-700 text-center mt-4 px-4 md:px-12">
//           A 2-year initiative by Participatory Development Associates (PDA) in
//           partnership with Magic Libraries Foundation. It aims to promote
//           reading literacy among children in cocoa-growing communities in Ghana.
//         </p>
//       </div>

//       {/* Quick Stats Section */}
//       <div className="py-12 bg-gray-100">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
//           Quick Stats
//         </h2>
//         <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
//           <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
//             <h3 className="font-semibold text-xl text-blue-600">
//               Quick Stats 1
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 mt-4">
//               <li>
//                 1129 children participate in the reading clubs across 10 project
//                 communities.
//               </li>
//               <li>579 children attend weekly reading sessions.</li>
//               <li>148.7% increase in reading club membership since 2023.</li>
//               <li>Reading club attendance has increased by 34.99%.</li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
//             <h3 className="font-semibold text-xl text-blue-600">
//               Quick Stats 2
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 mt-4">
//               <li>
//                 Clubs meet 2 to 3 times weekly to manage large attendance.
//               </li>
//               <li>
//                 Upper primary students participate more than lower primary
//                 students.
//               </li>
//               <li>
//                 More female children are involved in the reading clubs than
//                 males.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Project Goals Section */}
//       <div className="py-12">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-orange mb-8">
//           Rationale for Reading Festival & Competitions
//         </h2>
//         <div className="max-w-5xl mx-auto px-4">
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed">
//             <li>
//               Ignite the interest of children toward reading and a love for
//               books.
//             </li>
//             <li>
//               Encourage reading for pleasure, reading diversely, and cognitive
//               development.
//             </li>
//             <li>
//               Boost children’s confidence, literacy skills, and creativity.
//             </li>
//             <li>
//               Engage local communities, Ghana Education Service, and other
//               stakeholders to support reading literacy activities.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Project Components Section */}
//       <div className="py-12 bg-gray-100">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
//           Key Components of the Project
//         </h2>
//         <div className="max-w-5xl mx-auto px-4">
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed">
//             <li>Renovation of 2 libraries in cocoa-growing communities.</li>
//             <li>
//               Establishing community reading clubs and weekly reading
//               activities.
//             </li>
//             <li>Purchasing and distributing 5000 books.</li>
//             <li>Providing "Library-in-a-Box" kits to communities.</li>
//             <li>Organizing reading competitions for children.</li>
//             <li>Engaging stakeholders for project sustainability.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Reading Competition Flow Section */}
//       <div className="py-12">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-orange mb-8">
//           Reading Festival & Competitions Structure
//         </h2>
//         <div className="max-w-5xl mx-auto">
//           <p className="text-gray-700 text-center mb-8">
//             Schools within clusters 'A' and 'B' compete for the Reading Champion
//             position, inspiring students to achieve excellence in literacy.
//           </p>
//           {/* Simple flowchart */}
//           <div className="flex justify-center items-center gap-8">
//             <div className="bg-blue-200 p-4 rounded-lg shadow-md w-40 text-center">
//               Cluster 'A' - 5 Schools
//             </div>
//             <div className="bg-orange-200 p-4 rounded-lg shadow-md w-40 text-center">
//               Cluster 'B' - 5 Schools
//             </div>
//           </div>
//           <div className="text-center mt-8">
//             <span className="font-semibold text-lg">
//               1st & 2nd Place Schools Compete for Reading Champion
//             </span>
//             <div className="bg-yellow-200 p-4 mt-4 inline-block rounded-lg shadow-md">
//               Overall Winner
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4 mt-8">
//         <div className="text-center">
//           <p>© 2024 PDA Ghana | Cocoa Communities Library Project</p>
//           <a
//             href="https://pdaghana.com"
//             className="text-orange hover:underline"
//           >
//             www.pdaghana.com
//           </a>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default CCLP;

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaBook, FaChild, FaSchool, FaChartLine, FaArrowLeft } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { competition, reading, cluster, club } from "../assets/images";
import QuickStats from "../components/QuickStats";
import ProjectStatus from "../components/ProjectStatus";
import { boatengnew, boatengold, asuaold, asuanew } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const successStories = [
  "“Reading interest has improved to the point that some children come to my house to call me for us to have reading sessions. On a scale of 1-10, I would say the reading  improvement is at 7.” – Patron, Asempaneye",
  "“Since our community received the story books, we have experienced an increase in reading interest at the individual level . Even children who did not know how to read have been inspired to read.” – Patron,Abesewa",
  "“For children who would not pick a book because they could not read before now  enjoy  reading club session especially to look at the beautiful pictures in the story books. Generally reading interest has improved tremendously.” – Patron, Potrikrom",
  "“The quiz has given children something to focus on in the short-term. Now they learn and read with expectation.” – Patron, Kunsu",
  "“Though we had a library, reading  interest was low but now the interest has increased  from 2 to 7 on a scale of 1-10.” – Patron, Asuadei",
  "“Through this project, I have had the opportunity to mentor some teachers in the community school especially those who have volunteered to support me with facilitating the reading club session.” – Patron, Duntan Nkwanta",
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

const CCLP = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.cclp : fr.cclp;
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();
  const [rationaleRef, rationaleVisible] = useScrollAnimation();
  const [competitionRef, competitionVisible] = useScrollAnimation();
  const [storiesRef, storiesVisible] = useScrollAnimation();

  return (
    <section
      id="pdaafrica"
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
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div
        className="relative w-full bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${reading})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Text Content */}
        <div ref={heroRef} className={`relative flex items-center justify-center h-full px-6 ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          <div className="text-center text-white max-w-4xl">
            <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 text-orange drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-5 font-poppins text-white/90 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <QuickStats />

      {/* Project Components Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={objectivesRef} className={`text-center mb-12 ${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-4">
              {t.projectObjectives.split(" ")[0]} <span className="text-orange">{t.projectObjectives.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 ${objectivesVisible ? 'animate-on-scroll visible fade-in-left' : 'animate-on-scroll fade-in-left'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <ul className="space-y-4">
                  {t.objectives.map((objective, index) => {
                    const icons = [FaSchool, IoIosPeople, FaBook, FiBox, FaChartLine, IoIosPeople];
                    const Icon = icons[index];
                    return (
                      <li key={index} className="flex items-start group">
                        <div className="bg-orange/10 rounded-full p-3 mr-4 group-hover:bg-orange transition-colors">
                          <Icon className="text-orange text-xl" />
                        </div>
                        <p className="text-gray-700 leading-relaxed font-poppins text-lg flex-1 pt-1">{objective}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={`order-1 lg:order-2 ${objectivesVisible ? 'animate-on-scroll visible fade-in-right' : 'animate-on-scroll fade-in-right'}`}>
              <div className="relative group">
                <img
                  src={club}
                  alt="Reading Festival"
                  className="mx-auto rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={rationaleRef} className={`text-center mb-12 ${rationaleVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-4">
              {t.rationale.split(" ")[0]} <span className="text-orange">{t.rationale.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${rationaleVisible ? 'animate-on-scroll visible fade-in-left' : 'animate-on-scroll fade-in-left'}`}>
              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-2xl p-8 shadow-lg">
                <ul className="space-y-4">
                  {t.rationalePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange text-2xl mr-4 font-bold">•</span>
                      <p className="text-gray-700 leading-relaxed font-poppins text-lg flex-1">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`${rationaleVisible ? 'animate-on-scroll visible fade-in-right' : 'animate-on-scroll fade-in-right'}`}>
              <div className="relative group">
                <img
                  src={competition}
                  alt="Reading Festival"
                  className="mx-auto rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status Section */}
      <ProjectStatus />

      {/* Reading Competition Flow Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={competitionRef} className={`text-center mb-12 ${competitionVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-4">
              {t.competitionStructure.split(" ")[0]} <span className="text-orange">{t.competitionStructure.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              {t.competitionDescription}
            </p>
          </div>

          {/* Visual Competition Structure */}
          <div className={`mt-12 ${competitionVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Cluster A and B */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Cluster A */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Cluster A</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="bg-white rounded-lg p-3 text-center shadow-md hover:scale-110 transition-transform duration-300">
                        <span className="text-blue-600 font-bold text-sm">School {num}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                      1st & 2nd Place
                    </div>
                  </div>
                </div>

                {/* Cluster B */}
                <div className="bg-gradient-to-br from-orange/10 to-orange/20 rounded-xl p-6 border-2 border-orange/30 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-orange mb-4 text-center">Cluster B</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="bg-white rounded-lg p-3 text-center shadow-md hover:scale-110 transition-transform duration-300">
                        <span className="text-orange font-bold text-sm">School {num}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-block bg-orange text-white px-4 py-2 rounded-lg font-semibold">
                      1st & 2nd Place
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow pointing down */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full"></div>
              </div>

              {/* Final Competition */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <h3 className="text-3xl font-bold text-yellow-700 mb-2">Reading Champion</h3>
                    <p className="text-gray-600 text-lg">Overall Winner</p>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                      Cluster A Winners
                    </div>
                    <span className="text-white text-2xl font-bold">VS</span>
                    <div className="bg-orange text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                      Cluster B Winners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section ref={storiesRef} className={`py-16 px-8 text-center bg-gradient-to-b from-gray-100 to-white ${storiesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
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
    </section>
  );
};

export default CCLP;
