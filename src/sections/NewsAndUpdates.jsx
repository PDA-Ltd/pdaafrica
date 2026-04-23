import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { homeNewsPreviewArticles } from "../data/newsPageArticles";

const NewsAndUpdates = () => {
  const { language } = useLanguage();
  const locale = language === "fr" ? "fr" : "en";
  const tNav = language === "en" ? en.nav : fr.nav;
  const tCommon = language === "en" ? en.common : fr.common;

  return (
    <section
      id="news-and-updates"
      className="max-container max-w-full w-full font-poppins"
    >
      <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
        {tNav.news}
      </h2>
      <div className="flex justify-center w-full mb-10">
        <h3 className="text-4xl leading-[68px] font-poppins font-bold">
          {language === "en" ? (
            <>
              Latest <span className="text-orange">News</span>
            </>
          ) : (
            <>
              <span className="text-orange">Dernières</span> actualités
            </>
          )}
        </h3>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 px-4">
        {homeNewsPreviewArticles.map((raw) => {
          const article = raw[locale];
          return (
            <article
              key={raw.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={raw.image}
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span className="text-orange font-semibold text-sm">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>

                  <h2 className="font-poppins font-bold text-xl md:text-2xl text-gray-800 mb-4 hover:text-orange transition-colors">
                    {article.title}
                  </h2>

                  <p className="font-poppins text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <a
                    href={raw.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange font-semibold hover:text-orange-600 transition-colors text-sm md:text-base"
                  >
                    {tCommon.readMore}
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
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default NewsAndUpdates;
