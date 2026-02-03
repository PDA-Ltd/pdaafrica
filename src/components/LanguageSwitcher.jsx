import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors font-poppins text-sm font-semibold text-gray-700"
      aria-label="Toggle language"
    >
      <span className="text-lg">{language === "en" ? "🇬🇧" : "🇫🇷"}</span>
      <span className="uppercase">{language === "en" ? "EN" : "FR"}</span>
    </button>
  );
};

export default LanguageSwitcher;
