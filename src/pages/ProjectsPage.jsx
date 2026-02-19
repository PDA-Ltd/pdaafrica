import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { clipboard, finance, globe } from "../assets/icons";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectsPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.projects : fr.projects;
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const projectIcons = {
    "Financial Inclusion and VSLAs": finance,
    "Cocoa Communities' Library Project": clipboard,
    "Nyonkopa Child Labour Remediation": globe,
    "The iMPACT Project": globe,
    "\"Yen Daakye\" Programme": globe,
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
          <div ref={heroRef} className={`max-w-4xl mx-auto text-center ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3">
              {t.title.split(" ").slice(0, 1).join(" ")} <span className="text-black">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={projectsRef} className={`text-center mb-6 ${projectsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.featured.split(" ")[0]} <span className="text-orange">{t.featured.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.featuredDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const icon = projectIcons[project.label] || clipboard;
              const projectTranslation = t.projectList[project.label] || project;
              return (
                <Link
                  key={index}
                  to={project.link}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.imgURL}
                      alt={projectTranslation.label || project.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange transition-colors">
                      {projectTranslation.label || project.label}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {projectTranslation.subtext || project.subtext}
                    </p>
                    <div className="flex items-center text-orange font-semibold group-hover:underline">
                      {projectTranslation.button || project.button}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="padding py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.impact.split(" ")[0]} <span className="text-orange">{t.impact.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.impactDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src={globe} alt={t.communitiesReached} className="w-10 h-10 brightness-0 invert" />
              </div>
              <h3 className="text-4xl font-bold text-orange mb-2">100+</h3>
              <p className="text-gray-600 text-lg">{t.communitiesReached}</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src={finance} alt={t.vslaGroups} className="w-10 h-10 brightness-0 invert" />
              </div>
              <h3 className="text-4xl font-bold text-orange mb-2">500+</h3>
              <p className="text-gray-600 text-lg">{t.vslaGroups}</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src={clipboard} alt={t.libraries} className="w-10 h-10 brightness-0 invert" />
              </div>
              <h3 className="text-4xl font-bold text-orange mb-2">50+</h3>
              <p className="text-gray-600 text-lg">{t.libraries}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Bottom Section */}
      {/* <section className="padding py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our <span className="text-orange">Work</span>
          </h2>
        </div>
      </section> */}
    </div>
  );
};

export default ProjectsPage;
