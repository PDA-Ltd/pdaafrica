import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mission, farmer, child, africateam, reachout, cclp, vsla, cocoa, chocoa, etg1, farmervoice, ksw, cclphero } from "../assets/images";
import { reviews } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Home = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.home : fr.home;
  
  // Scroll animations
  const [statsRef, statsVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [newsRef, newsVisible] = useScrollAnimation();
  const [galleryRef, galleryVisible] = useScrollAnimation();
  const [testimonialRef, testimonialVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const featuredProjects = [
    {
      title: t.featuredProjects?.cclp?.title || "Cocoa Communities Library Project",
      description: t.featuredProjects?.cclp?.description || "Empowering cocoa-growing communities through education and literacy programs.",
      image: cclp,
      link: "/cocoa-communities-library-project",
    },
    {
      title: t.featuredProjects?.vsla?.title || "Financial Inclusion & VSLA",
      description: t.featuredProjects?.vsla?.description || "Supporting financial inclusion through Village Savings and Loan Associations.",
      image: vsla,
      link: "/financial-inclusion-and-vsla",
    },
    {
      title: t.featuredProjects?.childLabour?.title || "Child Labour Remediation",
      description: t.featuredProjects?.childLabour?.description || "Protecting children and ensuring their rights in cocoa-growing communities.",
      image: child,
      link: "/nyonkopa-child-labour-remediation",
    },
    {
      title: t.featuredProjects?.impact?.title || "The iMPACT Project",
      description: t.featuredProjects?.impact?.description || "Transforming cocoa-dependent communities through integrated development approaches.",
      image: cocoa,
      link: "/the-impact-project",
    },
    {
      title: t.featuredProjects?.yenDaakye?.title || "\"Yen Daakye\" Programme",
      description: t.featuredProjects?.yenDaakye?.description || "Eliminating the worst forms of child labour and forced labour in cocoa production.",
      image: child,
      link: "/yen-daakye-programme",
    },
  ];

  // Use the first review from actual reviews data with translations
  const reviewTranslations = language === "en" ? en.reviews : fr.reviews;
  const translatedReview = reviewTranslations.eugene || {};
  const featuredTestimonial = {
    ...reviews[0],
    customerName: translatedReview.name || reviews[0].customerName,
    position: translatedReview.position || reviews[0].position,
    feedback: translatedReview.feedback || reviews[0].feedback,
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section - Video */}
      <section className="relative w-full h-[70vh] min-h-[400px] md:h-[80vh] bg-black overflow-hidden">
        <video
          src={cclphero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-orange mb-3">
                {language === "en" ? "Everyone Matters" : "Chacun compte"}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {t.welcome}
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl mb-8">
                {t.aboutDescription}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link
                  to="/about-us"
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 md:px-8 md:py-4 bg-orange text-white font-semibold rounded-lg shadow-lg hover:bg-orange/90 transition-colors text-sm md:text-base"
                >
                  {t.learnMore}
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/40 backdrop-blur hover:bg-white/20 transition-colors text-sm md:text-base"
                >
                  {t.programmes}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section - hidden but code preserved */}
      {/* <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={statsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${statsVisible ? 'animate-on-scroll visible bounce' : 'animate-on-scroll bounce'}`}>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-orange mb-2 group-hover:text-orange/80 transition-colors">100K+</div>
              <div className="text-gray-600 text-lg font-medium">{t.communitiesReached || "Communities Reached"}</div>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-orange mb-2 group-hover:text-orange/80 transition-colors">50K+</div>
              <div className="text-gray-600 text-lg font-medium">{t.vslaGroups || "VSLA Groups Formed"}</div>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-orange mb-2 group-hover:text-orange/80 transition-colors">200+</div>
              <div className="text-gray-600 text-lg font-medium">{t.libraries || "Community Libraries"}</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section - Featured */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                {t.aboutTitle.split("PDA Africa")[0]} <span className="text-orange">PDA Africa</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t.aboutDescription}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t.aboutDescription2}
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center text-orange font-semibold text-base hover:text-orange/80 transition-colors group"
              >
                {t.learnMore}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={mission}
                alt="PDA Africa Mission"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={projectsRef} className={`text-center mb-6 ${projectsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {t.programmes.split("Programmes")[0]} <span className="text-orange">{language === "en" ? "Programmes" : "Programmes"}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.programmesDesc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>
                  <span className="text-orange font-semibold group-hover:underline text-sm">
                    {t.exploreProject || "Explore Project"}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center min-h-[44px] bg-orange text-white px-6 md:px-8 py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-orange/90 transition-colors"
            >
              {t.viewAllProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={newsRef} className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 ${newsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight tracking-tight">
                {t.latestNews.split("News")[0]}<span className="text-orange">{language === "en" ? "News" : "Actualités"}</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {t.newsDesc}
              </p>
            </div>
            <Link
              to="/news-and-updates"
              className="inline-flex items-center min-h-[44px] px-4 py-2 text-orange font-semibold hover:text-orange/80 transition-colors text-sm md:text-base"
            >
              {t.viewAllNews}
              <svg
                className="w-4 h-4 md:w-5 md:h-5 ml-2"
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
            </Link>
          </div>

          {/* News Slider */}
          <div className="news-slider-container">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
              arrows={true}
              className="news-slider"
            >
              {[
                {
                  id: 1,
                  title: "PDA Delivers GALS + CHILD Methodology Training for ETG Uganda",
                  date: "March 9, 2026",
                  category: "PDA Activities and Events",
                  image: etg1,
                  excerpt: "Participatory Development Associates (PDA) is currently implementing a Training of Trainers (TOT) programme on the Gender Action Learning System (GALS) + CHILD methodology for Export Trading Group (ETG) Uganda.",
                },
                {
                  id: 2,
                  title: "PDA at Amsterdam Chocoa Week 2026",
                  date: "February 20, 2026",
                  category: "PDA Activities and Events",
                  image: chocoa,
                  excerpt: "Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026, held as part of Amsterdam Chocoa Week, one of the leading global platforms for dialogue on sustainable cocoa and responsible chocolate production.",
                },
                {
                  id: 3,
                  title: "Farmers' Voice Radio Academy: Empowering Ghana's Cocoa Farmers Through Participatory Local Language Radio",
                  date: "December 15, 2025",
                  category: "PDA Activities and Events",
                  image: farmervoice,
                  excerpt: "We are working to empower 100,000 smallholder cocoa farmers in Ghana by raising under-represented voices and connecting farmers with the knowledge they need to build resilient, inclusive and thriving cocoa communities.",
                },
                {
                  id: 4,
                  title: "PDA Holds 8th Child Protection Workshop Spotlighting Galamsey's Threat to Children",
                  date: "December 11, 2025",
                  category: "PDA Activities and Events",
                  image: ksw,
                  excerpt: "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
                },
              ].map((article) => (
                <div key={article.id} className="px-2">
                  <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-xl p-6 md:p-10 hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div className="order-2 md:order-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                          <span className="text-orange font-semibold text-xs md:text-sm uppercase tracking-wide">
                            {article.category}
                          </span>
                          <span className="text-gray-400 hidden sm:inline">•</span>
                          <span className="text-gray-500 text-xs md:text-sm">{article.date}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight tracking-tight" style={{ lineHeight: '1.1' }}>
                          {article.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                          {article.excerpt}
                        </p>
                        <Link
                          to="/news-and-updates"
                          className="inline-flex items-center min-h-[44px] text-orange font-semibold hover:text-orange/80 transition-colors group text-sm md:text-base"
                        >
                          {t.readFullStory || "Read Full Story"}
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                        </Link>
                      </div>
                      <div className="flex items-center justify-center order-1 md:order-2">
                        <img
                          src={article.image}
                          alt={article.title}
                          className={`rounded-lg shadow-lg max-w-full md:max-w-sm w-full h-auto object-cover ${
                            article.id === 2 || article.id === 4 ? 'max-h-48 sm:max-h-64 md:max-h-80' : 'max-h-64 md:max-h-96'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={galleryRef} className={`flex justify-between items-center mb-10 ${galleryVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {t.activities.split("Activities")[0]} <span className="text-orange">{language === "en" ? "Activities" : "Activités"}</span>
              </h2>
              <p className="text-lg text-gray-600">
                {t.activitiesDesc}
              </p>
            </div>
            <Link
              to="/gallery"
              className="hidden md:inline-flex items-center text-orange font-semibold hover:text-orange/80 transition-colors"
            >
              {t.viewGallery}
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
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[africateam, farmer, child, mission].map((img, index) => (
              <Link
                key={index}
                to="/gallery"
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={testimonialRef} className={`text-center mb-6 ${testimonialVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {t.impact.split("Impact")[0]} <span className="text-orange">{language === "en" ? "Impact" : "Impact"}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.impactDesc}
            </p>
          </div>

          {/* Impact Testimonials Slider */}
          <div className="impact-slider-container mb-8">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
              arrows={true}
              className="impact-slider"
            >
              {reviews.map((review, index) => {
                const reviewKeys = ["eugene", "beyondBeans", "emelia", "janet"];
                const reviewKey = reviewKeys[index];
                const reviewTranslations = language === "en" ? en.reviews : fr.reviews;
                const translatedReview = reviewTranslations[reviewKey] || {};
                
                return (
                  <div key={index} className="px-2">
                    <div className="bg-gray-50 rounded-lg p-8 md:p-12">
                      <div className="max-w-3xl mx-auto text-center">
                        <div className="mb-6">
                          <img
                            src={review.imgURL}
                            alt={translatedReview.name || review.customerName}
                            className="w-20 h-20 rounded-full mx-auto object-cover"
                          />
                        </div>
                        <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                          "{translatedReview.feedback || review.feedback}"
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center">
                            <p className="font-semibold text-gray-800 text-lg">
                              {translatedReview.name || review.customerName}
                            </p>
                            <p className="text-gray-600 text-sm">{translatedReview.position || review.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="text-center">
            <Link
              to="/impact"
              className="inline-flex items-center justify-center min-h-[44px] bg-orange text-white px-6 md:px-8 py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-orange/90 transition-colors"
            >
              {language === "en" ? "View Our Impact" : "Voir notre impact"}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-r from-orange/90 to-orange/80">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={ctaRef} className={`max-w-4xl mx-auto text-center ${ctaVisible ? 'animate-on-scroll visible scale' : 'animate-on-scroll scale'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            {t.readyToMakeDifference}
          </h2>
          <p className="text-xl mb-8 text-white/95 leading-relaxed">
            {t.readyDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-block bg-white text-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.getInvolvedBtn}
            </Link>
            <Link
              to="/contact-us"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange transition-all transform hover:scale-105"
            >
              {t.contactUsBtn}
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
