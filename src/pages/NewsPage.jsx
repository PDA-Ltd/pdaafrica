import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { newsPageArticles } from "../data/newsPageArticles";

const NewsPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.news : fr.news;
  const locale = language === "fr" ? "fr" : "en";
  const [selectedRaw, setSelectedRaw] = useState(null);

  const [heroRef, heroVisible] = useScrollAnimation();
  const [newsRef, newsVisible] = useScrollAnimation();

  const openArticle = (raw) => {
    setSelectedRaw(raw);
    document.body.style.overflow = "hidden";
  };

  const closeArticle = () => {
    setSelectedRaw(null);
    document.body.style.overflow = "unset";
  };

  const selectedArticle = selectedRaw ? selectedRaw[locale] : null;

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
          <div ref={heroRef} className={`max-w-4xl mx-auto text-center ${heroVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3">
              {t.title.split(" ").slice(0, 1).join(" ")} <span className="text-black">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={newsRef} className={`space-y-8 ${newsVisible ? "animate-on-scroll visible fade-up" : "animate-on-scroll fade-up"}`}>
            {newsPageArticles.map((raw) => {
              const article = raw[locale];
              return (
                <article
                  key={raw.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img
                        src={raw.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="text-orange text-sm font-semibold">
                          {article.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                        {article.excerpt}
                      </p>

                      <button
                        type="button"
                        onClick={() => openArticle(raw)}
                        className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center gap-2 self-start"
                      >
                        {t.readFullArticle}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedRaw && selectedArticle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closeArticle}
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

          <div
            className="relative min-h-screen flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl my-auto">
              <button
                type="button"
                onClick={closeArticle}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                <div className="relative h-64 md:h-96 w-full">
                  <img
                    src={selectedRaw.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                        {selectedArticle.category}
                      </span>
                      <span className="text-sm md:text-base opacity-90 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {selectedArticle.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                      {selectedArticle.title}
                    </h2>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base md:text-lg break-words">
                      {selectedArticle.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
