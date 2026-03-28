import { Link, Navigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import {
  getVslaImpactStoryDetail,
  getAdjacentVslaStorySlugs,
  isValidVslaStorySlug,
} from "../data/vslaImpactStories";
import VslaImpactStoryBody from "../components/VslaImpactStoryBody";

const VSLAImpactStoryPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = language === "en" ? en.vslaImpactStories : fr.vslaImpactStories;

  if (!isValidVslaStorySlug(slug)) {
    return <Navigate to="/vsla-impact-stories" replace />;
  }

  const detail = getVslaImpactStoryDetail(t, slug);
  const { prev, next } = getAdjacentVslaStorySlugs(slug);

  return (
    <section className="max-container max-w-full min-h-screen font-poppins bg-white">
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
          <Link
            to="/vsla-impact-stories"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t.backToAllStories}</span>
          </Link>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <Link
            to="/financial-inclusion-and-vsla"
            className="text-sm text-gray-600 hover:text-orange font-medium transition-colors"
          >
            {t.backToVSLA}
          </Link>
        </div>
      </div>

      <VslaImpactStoryBody
        story={detail.story}
        t={t}
        name={detail.name}
        location={detail.location}
        group={detail.group}
        image={detail.image}
      />

      <nav
        className="max-w-5xl mx-auto px-6 pb-16 flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-200 pt-10"
        aria-label={t.storyNavigationLabel}
      >
        {prev ? (
          <Link
            to={`/vsla-impact-stories/${prev}`}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors"
          >
            <FaArrowLeft />
            {t.previousStory}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/vsla-impact-stories/${next}`}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors sm:ml-auto"
          >
            {t.nextStory}
            <FaArrowLeft className="rotate-180" />
          </Link>
        ) : null}
      </nav>
    </section>
  );
};

export default VSLAImpactStoryPage;
