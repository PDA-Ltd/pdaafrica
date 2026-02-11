import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import ReviewForm from "../components/ReviewForm";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { finance, clipboard, globe, signal, bulb } from "../assets/icons";

const ImpactPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.impact : fr.impact;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [hoveredProgram, setHoveredProgram] = useState(null);
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [areasRef, areasVisible] = useScrollAnimation();
  const [programRef, programVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const areasOfWork = [
    {
      icon: finance,
      title: t.areasOfWorkList?.financialInclusion?.title || "Financial Inclusion",
      description: t.areasOfWorkList?.financialInclusion?.description || "Empowering communities through VSLA groups and financial literacy programs",
    },
    {
      icon: clipboard,
      title: t.areasOfWorkList?.childProtection?.title || "Child Protection",
      description: t.areasOfWorkList?.childProtection?.description || "Strengthening child protection systems and education",
    },
    {
      icon: globe,
      title: t.areasOfWorkList?.communityDevelopment?.title || "Community Development",
      description: t.areasOfWorkList?.communityDevelopment?.description || "Supporting sustainable community-led development initiatives",
    },
    {
      icon: signal,
      title: t.areasOfWorkList?.educationLiteracy?.title || "Education & Literacy",
      description: t.areasOfWorkList?.educationLiteracy?.description || "Promoting literacy and education in cocoa-growing communities",
    },
  ];

  const stats = [
    {
      value: "100K+",
      label: t.communitiesReached || "Communities Reached",
      icon: "🌍",
    },
    {
      value: "50K+",
      label: t.vslaGroups || "VSLA Groups Formed",
      icon: "👥",
    },
    {
      value: "200+",
      label: t.libraries || "Community Libraries",
      icon: "📚",
    },
  ];

  const programs = [
    {
      title: t.programs?.vsla?.title || "VSLA Programs",
      description: t.programs?.vsla?.description || "Forming and training VSLA groups for financial inclusion and economic empowerment.",
      link: "/financial-inclusion-and-vsla",
      icon: finance,
    },
    {
      title: t.programs?.library?.title || "Library Project",
      description: t.programs?.library?.description || "Promoting literacy and reading habits among children in cocoa-growing communities.",
      link: "/cocoa-communities-library-project",
      icon: clipboard,
    },
    {
      title: t.programs?.childProtection?.title || "Child Protection",
      description: t.programs?.childProtection?.description || "Remediating child labour cases and protecting children's rights.",
      link: "/nyonkopa-child-labour-remediation",
      icon: globe,
    },
  ];

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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title.split(" ")[0]} <span className="text-yellow-300">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={statsRef} className={`text-center mb-10 ${statsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.impactStats}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`text-center rounded-lg p-8 transition-all duration-300 transform cursor-pointer ${
                  hoveredStat === index
                    ? "bg-gradient-to-br from-orange to-orange/80 shadow-2xl scale-105 text-white"
                    : "bg-gradient-to-br from-orange/10 to-orange/20 shadow-md hover:shadow-xl"
                }`}
              >
                <div className={`text-6xl mb-4 transition-transform duration-300 ${hoveredStat === index ? 'scale-125 rotate-12' : ''}`}>
                  {stat.icon}
                </div>
                <div className={`text-5xl md:text-6xl font-bold mb-2 transition-colors ${
                  hoveredStat === index ? "text-white" : "text-orange"
                }`}>
                  {stat.value}
                </div>
                <div className={`text-lg font-medium transition-colors ${
                  hoveredStat === index ? "text-white/90" : "text-gray-700"
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={areasRef} className={`text-center mb-10 ${areasVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.areasOfWork}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.areasOfWorkDesc || "Our comprehensive approach to community empowerment"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasOfWork.map((area, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredArea(index)}
                onMouseLeave={() => setHoveredArea(null)}
                className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 transform cursor-pointer text-center ${
                  hoveredArea === index
                    ? "shadow-2xl scale-105 -translate-y-2 bg-gradient-to-br from-orange/10 to-orange/20 border-2 border-orange"
                    : "hover:shadow-xl"
                }`}
              >
                <div className={`bg-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                  hoveredArea === index ? "bg-orange scale-110 rotate-6" : ""
                }`}>
                  <img 
                    src={area.icon} 
                    alt={area.title} 
                    className={`w-8 h-8 transition-all duration-300 ${
                      hoveredArea === index ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  hoveredArea === index ? "text-orange" : "text-gray-800"
                }`}>
                  {area.title}
                </h3>
                <p className={`text-sm transition-colors ${
                  hoveredArea === index ? "text-gray-700 font-medium" : "text-gray-600"
                }`}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={programRef} className={`text-center mb-10 ${programVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.programImpact}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.programImpactDesc || "Transforming lives through our flagship programs"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Link
                key={index}
                to={program.link}
                onMouseEnter={() => setHoveredProgram(index)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`bg-gradient-to-br rounded-lg p-8 border transition-all duration-300 transform cursor-pointer block ${
                  hoveredProgram === index
                    ? "from-orange to-orange/80 border-orange shadow-2xl scale-105 -translate-y-2 text-white"
                    : "from-orange/10 to-white border-orange/20 shadow-md hover:shadow-xl"
                }`}
              >
                <div className={`mb-4 transition-all duration-300 ${
                  hoveredProgram === index ? "scale-110" : ""
                }`}>
                  <img 
                    src={program.icon} 
                    alt={program.title}
                    className={`w-12 h-12 transition-all duration-300 ${
                      hoveredProgram === index ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                  hoveredProgram === index ? "text-white" : "text-gray-800"
                }`}>
                  {program.title}
                </h3>
                <p className={`mb-4 transition-colors ${
                  hoveredProgram === index ? "text-white/90" : "text-gray-600"
                }`}>
                  {program.description}
                </p>
                <div className={`font-semibold inline-flex items-center transition-colors ${
                  hoveredProgram === index ? "text-white" : "text-orange"
                }`}>
                  {language === "en" ? "Learn More" : "En savoir plus"}
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    hoveredProgram === index ? "translate-x-2" : ""
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={testimonialsRef} className={`text-center mb-10 ${testimonialsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.testimonials}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div className="mb-10">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {reviews.map((review, index) => {
                // Map review to translated version
                const reviewKeys = ["eugene", "beyondBeans", "emelia", "janet"];
                const reviewKey = reviewKeys[index];
                const reviewTranslations = language === "en" ? en.reviews : fr.reviews;
                const translatedReview = reviewTranslations[reviewKey] || {};
                const testimonialsTranslations = language === "en" ? en.testimonials : fr.testimonials;
                const reviewPositions = testimonialsTranslations?.reviewPositions || {};
                const reviewFeedback = testimonialsTranslations?.reviewFeedback || {};
                
                return (
                  <div key={index} className="px-4">
                    <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <ReviewCard
                        imgURL={review.imgURL}
                        customerName={translatedReview.name || review.customerName}
                        rating={review.rating}
                        position={reviewPositions[review.position] || translatedReview.position || review.position}
                        feedback={reviewFeedback[review.feedback] || translatedReview.feedback || review.feedback}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="text-center">
            <button
              onClick={openModal}
              className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t.leaveReview}
            </button>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8 pt-12">
              <ReviewForm onClose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactPage;
