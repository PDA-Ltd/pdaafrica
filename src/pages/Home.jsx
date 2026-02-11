import React from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import { mission, farmer, child, africateam, reachout, cclp, vsla } from "../assets/images";
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
      {/* Hero Section */}
      <section className="w-full">
        <HomeSlider />
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
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
          <div ref={projectsRef} className={`text-center mb-12 ${projectsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.programmes.split("Programmes")[0]} <span className="text-orange">{language === "en" ? "Programmes" : "Programmes"}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.programmesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
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
                  <span className="text-orange font-semibold group-hover:underline inline-flex items-center text-sm">
                    {t.exploreProject || "Explore Project"}
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-colors"
            >
              {t.viewAllProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={newsRef} className={`flex justify-between items-center mb-10 ${newsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t.latestNews.split("News")[0]} <span className="text-orange">{language === "en" ? "News" : "Actualités"}</span>
              </h2>
              <p className="text-lg text-gray-600">
                {t.newsDesc}
              </p>
            </div>
            <Link
              to="/news-and-updates"
              className="hidden md:inline-flex items-center text-orange font-semibold hover:text-orange/80 transition-colors"
            >
              {t.viewAllNews}
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

          <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-orange font-semibold text-sm uppercase tracking-wide">
                  {t.featuredStory || "Featured Story"}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4 mb-4">
                  {t.featuredStoryTitle || "Farmers' Voice Radio Academy: Empowering Ghana's Cocoa Farmers"}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.featuredStoryDesc || "We are working to empower 100,000 smallholder cocoa farmers in Ghana by raising under-represented voices and connecting farmers with the knowledge they need to build resilient, inclusive and thriving cocoa communities."}
                </p>
                <Link
                  to="/news-and-updates"
                  className="inline-flex items-center text-orange font-semibold hover:text-orange/80 transition-colors group"
                >
                  {t.readFullStory || "Read Full Story"}
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
              <div>
                <img
                  src={farmer}
                  alt="Farmers Voice Radio Academy"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={galleryRef} className={`flex justify-between items-center mb-10 ${galleryVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
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
          <div ref={testimonialRef} className={`text-center mb-12 ${testimonialVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.impact.split("Impact")[0]} <span className="text-orange">{language === "en" ? "Impact" : "Impact"}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.impactDesc}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <img
                  src={featuredTestimonial.imgURL}
                  alt={featuredTestimonial.customerName}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
              </div>
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{featuredTestimonial.feedback}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="font-semibold text-gray-800 text-lg">
                    {featuredTestimonial.customerName}
                  </p>
                  <p className="text-gray-600 text-sm">{featuredTestimonial.position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/impact"
              className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-colors"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
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
