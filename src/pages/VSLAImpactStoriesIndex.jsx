import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getVslaImpactStorySummaries } from "../data/vslaImpactStories";

const VSLAImpactStoriesIndex = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.vslaImpactStories : fr.vslaImpactStories;
  const [heroRef, heroVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const summaries = getVslaImpactStorySummaries(t);

  return (
    <section
      id="vsla-impact-stories"
      className="max-container max-w-full min-h-screen font-poppins bg-white"
    >
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

      <div className="relative bg-gradient-to-br from-orange via-orange/90 to-orange/80 min-h-[420px] md:min-h-[480px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div
          ref={heroRef}
          className={`relative min-h-[420px] md:min-h-[480px] flex items-center justify-center px-6 py-16 ${
            heroVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
          }`}
        >
          <div className="text-center max-w-4xl">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-3 drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-white mt-4 font-poppins text-xl md:text-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={gridRef}
            className={`text-center mb-12 ${
              gridVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              {t.storiesTitle.split(" ")[0]}{" "}
              <span className="text-orange">{t.storiesTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.storiesDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {summaries.map((item) => (
              <Link
                key={item.slug}
                to={`/vsla-impact-stories/${item.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-orange/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-orange transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/90">
                      {item.location} · {item.group}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 leading-relaxed line-clamp-4 mb-6 flex-1">{item.introduction}</p>
                  <span className="text-orange font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    {t.readFullStory}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </div>
      </section>
    </section>
  );
};

export default VSLAImpactStoriesIndex;
