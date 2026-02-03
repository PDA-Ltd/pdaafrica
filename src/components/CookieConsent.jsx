import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en.js";
import { fr } from "../translations/fr.js";

const CookieConsent = () => {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const t = language === "en" ? en.cookies : fr.cookies;

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("pdaAfricaCookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("pdaAfricaCookieConsent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("pdaAfricaCookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("pdaAfricaCookieConsent", JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowCustomize(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8">
        {!showCustomize ? (
          <>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {t.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleAcceptAll}
                className="bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                {t.customize}
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {t.rejectAll}
              </button>
            </div>
          </>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {t.customize}
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{t.necessary}</p>
                  <p className="text-sm text-gray-600">
                    {language === "en"
                      ? "Required for the website to function"
                      : "Nécessaire au fonctionnement du site"}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="w-5 h-5 text-orange"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{t.analytics}</p>
                  <p className="text-sm text-gray-600">
                    {language === "en"
                      ? "Help us understand how visitors use our website"
                      : "Nous aide à comprendre comment les visiteurs utilisent notre site"}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="w-5 h-5 text-orange"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{t.marketing}</p>
                  <p className="text-sm text-gray-600">
                    {language === "en"
                      ? "Used to deliver personalized content and ads"
                      : "Utilisé pour diffuser du contenu et des publicités personnalisés"}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="w-5 h-5 text-orange"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSavePreferences}
                className="bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                {language === "en" ? "Save Preferences" : "Enregistrer les préférences"}
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                {language === "en" ? "Cancel" : "Annuler"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
