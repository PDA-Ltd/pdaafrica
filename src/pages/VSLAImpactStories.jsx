import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { comfort, emmanuel } from "../assets/images";

const VSLAImpactStories = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.vslaImpactStories : fr.vslaImpactStories;

  const [heroRef, heroVisible] = useScrollAnimation();
  const [storiesRef, storiesVisible] = useScrollAnimation();

  // Get stories from translations based on current language
  const stories = t.stories;
  
  // Impact stories data with translations
  const impactStories = [
    {
      id: 1,
      name: stories.comfort.name,
      location: stories.comfort.location,
      group: stories.comfort.group,
      image: comfort,
      story: {
        introduction: stories.comfort.introduction,
        seeingPossibilities: stories.comfort.seeingPossibilities,
        takingRisks: stories.comfort.takingRisks,
        learningToTrack: stories.comfort.learningToTrack,
        conclusion: stories.comfort.conclusion
      }
    },
    {
      id: 2,
      name: stories.emmanuel.name,
      location: stories.emmanuel.location,
      group: stories.emmanuel.group,
      image: emmanuel,
      story: {
        introduction: stories.emmanuel.introduction,
        learningToSave: stories.emmanuel.learningToSave,
        rethinkingSpending: stories.emmanuel.rethinkingSpending,
        strengtheningFamily: stories.emmanuel.strengtheningFamily,
        conclusion: stories.emmanuel.conclusion
      }
    }
    // More stories can be added here
  ];

  return (
    <section
      id="vsla-impact-stories"
      className="max-container max-w-full min-h-screen font-poppins"
    >
      {/* Back to VSLA Button */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/financial-inclusion-and-vsla"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t.backToVSLA}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange via-orange/90 to-orange/80 h-[500px] md:h-[600px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div ref={heroRef} className={`relative h-full flex items-center justify-center px-6 ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          <div className="text-center max-w-4xl">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-3 drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-white mt-4 px-4 md:px-12 font-poppins mb-5 text-xl md:text-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={storiesRef} className={`${storiesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                {t.storiesTitle.split(" ")[0]} <span className="text-orange">{t.storiesTitle.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.storiesDescription}
              </p>
            </div>

            {/* Stories Grid */}
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              {impactStories.map((story, index) => (
                <div
                  key={story.id}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Mobile Layout: Image at top, full width */}
                  <div className="lg:hidden">
                    {/* Image Section - Mobile */}
                    <div className="relative w-full h-[400px] sm:h-[500px]">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{story.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{story.location}</span>
                          </div>
                          <span className="hidden sm:inline text-orange">•</span>
                          <span>{story.group}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Mobile */}
                    <div className="p-6 sm:p-8">
                      {/* Story Quote */}
                      <div className="mb-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="text-orange text-3xl sm:text-4xl font-bold leading-none mt-1 flex-shrink-0">"</div>
                          <p className="text-lg sm:text-xl font-semibold text-gray-800 italic leading-relaxed">
                            {story.story.introduction}
                          </p>
                        </div>
                      </div>

                      {/* Story Sections */}
                      <div className="space-y-5 sm:space-y-6">
                        {story.story.seeingPossibilities && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-orange mb-2 sm:mb-3">{t.seeingPossibilities}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{story.story.seeingPossibilities}</p>
                          </div>
                        )}

                        {story.story.takingRisks && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-orange mb-2 sm:mb-3">{t.takingRisks}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{story.story.takingRisks}</p>
                          </div>
                        )}

                        {story.story.learningToTrack && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-orange mb-2 sm:mb-3">{t.learningToTrack}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{story.story.learningToTrack}</p>
                          </div>
                        )}

                        {story.story.learningToSave && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-orange mb-2 sm:mb-3">{t.learningToSave}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{story.story.learningToSave}</p>
                          </div>
                        )}

                        {story.story.rethinkingSpending && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-orange mb-2 sm:mb-3">{t.rethinkingSpending}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{story.story.rethinkingSpending}</p>
                          </div>
                        )}

                        {story.story.strengtheningFamily && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-orange mb-2 sm:mb-3">{t.strengtheningFamily}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{story.story.strengtheningFamily}</p>
                          </div>
                        )}

                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">{story.story.conclusion}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop/Tablet Layout: Side by side */}
                  <div className="hidden lg:flex">
                    {/* Image Section - Desktop */}
                    <div className={`w-full lg:w-[45%] xl:w-[40%] relative min-h-[500px] lg:min-h-[600px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section - Desktop */}
                    <div className={`flex-1 p-6 lg:p-8 xl:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {/* Header */}
                      <div className="mb-4 lg:mb-6">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 lg:mb-3 break-words">{story.name}</h3>
                        <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm lg:text-base xl:text-lg">{story.location}</span>
                          </div>
                          <span className="text-orange hidden lg:inline">•</span>
                          <span className="text-sm lg:text-base xl:text-lg">{story.group}</span>
                        </div>
                      </div>

                      {/* Story Quote */}
                      <div className="mb-6 lg:mb-8">
                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="text-orange text-4xl lg:text-5xl font-bold leading-none mt-1 flex-shrink-0">"</div>
                          <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 italic leading-relaxed break-words">
                            {story.story.introduction}
                          </p>
                        </div>
                      </div>

                      {/* Story Sections */}
                      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
                        {story.story.seeingPossibilities && (
                          <div>
                            <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-orange mb-2 lg:mb-3 break-words">{t.seeingPossibilities}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base xl:text-lg break-words">{story.story.seeingPossibilities}</p>
                          </div>
                        )}

                        {story.story.takingRisks && (
                          <div>
                            <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-orange mb-2 lg:mb-3 break-words">{t.takingRisks}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base xl:text-lg break-words">{story.story.takingRisks}</p>
                          </div>
                        )}

                        {story.story.learningToTrack && (
                          <div>
                            <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-orange mb-2 lg:mb-3 break-words">{t.learningToTrack}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base xl:text-lg break-words">{story.story.learningToTrack}</p>
                          </div>
                        )}

                        {story.story.learningToSave && (
                          <div>
                            <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-orange mb-2 lg:mb-3 break-words">{t.learningToSave}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base xl:text-lg break-words">{story.story.learningToSave}</p>
                          </div>
                        )}

                        {story.story.rethinkingSpending && (
                          <div>
                            <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-orange mb-2 lg:mb-3 break-words">{t.rethinkingSpending}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base xl:text-lg break-words">{story.story.rethinkingSpending}</p>
                          </div>
                        )}

                        {story.story.strengtheningFamily && (
                          <div>
                            <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-orange mb-2 lg:mb-3 break-words">{t.strengtheningFamily}</h4>
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base xl:text-lg break-words">{story.story.strengtheningFamily}</p>
                          </div>
                        )}

                        <div className="pt-3 lg:pt-4 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed italic text-sm lg:text-base xl:text-lg break-words">{story.story.conclusion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VSLAImpactStories;
