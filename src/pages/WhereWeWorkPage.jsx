import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { globe, finance, clipboard, signal } from "../assets/icons";

const WhereWeWorkPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.whereWeWork : fr.whereWeWork;
  const [selectedCountry, setSelectedCountry] = useState("ghana");
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [countriesRef, countriesVisible] = useScrollAnimation();
  const [detailsRef, detailsVisible] = useScrollAnimation();

  const countries = [
    { 
      id: "ghana", 
      name: language === "en" ? "Ghana" : "Ghana", 
      flag: "🇬🇭",
      color: "from-orange to-orange/80",
      bgColor: "bg-orange/10",
      borderColor: "border-orange",
      population: language === "en" ? "33.5M" : "33,5M",
      capital: language === "en" ? "Accra" : "Accra",
      communities: "150+",
      participants: "50K+",
      programs: "5",
      yearsActive: "15+",
    },
    { 
      id: "coteDivoire", 
      name: language === "en" ? "Côte d'Ivoire" : "Côte d'Ivoire", 
      flag: "🇨🇮",
      color: "from-red to-red/80",
      bgColor: "bg-red/10",
      borderColor: "border-red",
      population: language === "en" ? "28.7M" : "28,7M",
      capital: language === "en" ? "Yamoussoukro" : "Yamoussoukro",
      communities: "30+",
      participants: "10K+",
      programs: "3",
      yearsActive: "5+",
    },
    { 
      id: "cameroon", 
      name: language === "en" ? "Cameroon" : "Cameroun", 
      flag: "🇨🇲",
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-100",
      borderColor: "border-green-600",
      population: language === "en" ? "27.9M" : "27,9M",
      capital: language === "en" ? "Yaoundé" : "Yaoundé",
      communities: "20+",
      participants: "5K+",
      programs: "2",
      yearsActive: "3+",
    },
    { 
      id: "kenya", 
      name: language === "en" ? "Kenya" : "Kenya", 
      flag: "🇰🇪",
      color: "from-red to-red/80",
      bgColor: "bg-red/10",
      borderColor: "border-red",
      population: language === "en" ? "55.4M" : "55,4M",
      capital: language === "en" ? "Nairobi" : "Nairobi",
      communities: "25+",
      participants: "8K+",
      programs: "2",
      yearsActive: "4+",
    },
    { 
      id: "uganda", 
      name: language === "en" ? "Uganda" : "Ouganda", 
      flag: "🇺🇬",
      color: "from-yellow-600 to-yellow-500",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-600",
      population: language === "en" ? "47.2M" : "47,2M",
      capital: language === "en" ? "Kampala" : "Kampala",
      communities: "15+",
      participants: "3K+",
      programs: "1",
      yearsActive: "2+",
    },
  ];

  const getCountryData = (countryId) => {
    const countryData = t.countries?.[countryId];
    if (countryData) {
      return countryData;
    }
    return {
      description: language === "en" 
        ? "We work in this country to empower communities through participatory development."
        : "Nous travaillons dans ce pays pour autonomiser les communautés grâce au développement participatif.",
      regions: [language === "en" ? "Multiple regions" : "Plusieurs régions"],
      programs: [language === "en" ? "Community Development Programs" : "Programmes de développement communautaire"],
    };
  };

  const selectedCountryData = getCountryData(selectedCountry);
  const selectedCountryInfo = countries.find(c => c.id === selectedCountry);

  const programIcons = {
    "Cocoa Communities Library Project": clipboard,
    "VSLA-GALS Programme": finance,
    "Nyonkopa Child Labour Remediation": signal,
    "Farmers' Voice Radio Academy": signal,
    "Enroute Project": globe,
    "VSLA-CHILD": finance,
    "Empowering Better Decisions (EBD)": finance,
    "Community Development Programs": globe,
    "Capacity Building": clipboard,
    "Community Empowerment Programs": globe,
  };

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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3">
              {t.title.split(" ").slice(0, 2).join(" ")} <span className="text-black">{t.title.split(" ").slice(2).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 bg-gradient-to-br from-orange/5 via-white to-orange/5">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={statsRef} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ${statsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl font-bold mb-2 md:mb-3">5</div>
              <div className="text-base md:text-xl font-semibold break-words">{t.countriesLabel || "Countries"}</div>
              <div className="text-xs md:text-sm opacity-90 mt-2 break-words">{language === "en" ? "Across Africa" : "À travers l'Afrique"}</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-6 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl font-bold mb-2 md:mb-3">100K+</div>
              <div className="text-base md:text-xl font-semibold break-words">{t.communitiesReached || "Communities Reached"}</div>
              <div className="text-xs md:text-sm opacity-90 mt-2 break-words">{language === "en" ? "Empowered" : "Autonomisées"}</div>
            </div>
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-6 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform sm:col-span-2 lg:col-span-1">
              <div className="text-4xl md:text-6xl font-bold mb-2 md:mb-3">21+</div>
              <div className="text-base md:text-xl font-semibold break-words">{t.yearsOfImpact || "Years of Impact"}</div>
              <div className="text-xs md:text-sm opacity-90 mt-2 break-words">{language === "en" ? "Of Service" : "De service"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Selector */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={countriesRef} className={`text-center mb-6 ${countriesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.presence}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.presenceDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`p-4 md:p-6 rounded-xl border-2 transition-all transform hover:scale-110 hover:shadow-xl min-w-0 ${
                  selectedCountry === country.id
                    ? `${country.bgColor} ${country.borderColor} border-4 shadow-2xl scale-105`
                    : "border-gray-200 bg-white hover:border-orange/50 hover:bg-gray-50"
                }`}
              >
                <div className="text-4xl md:text-5xl mb-2 md:mb-3 transform hover:scale-110 transition-transform">{country.flag}</div>
                <div className={`font-bold text-xs md:text-sm break-words ${selectedCountry === country.id ? 'text-gray-800' : 'text-gray-600'}`}>
                  {country.name}
                </div>
              </button>
            ))}
          </div>

          {/* Country Details */}
          {selectedCountryInfo && (
            <div ref={detailsRef} className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-2 ${selectedCountryInfo.borderColor} ${detailsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'} overflow-hidden`}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="text-5xl sm:text-6xl md:text-7xl transform hover:scale-110 transition-transform flex-shrink-0">{selectedCountryInfo.flag}</div>
                <div className="flex-1 w-full min-w-0">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 break-words">{selectedCountryInfo.name}</h3>
                  <div className={`h-1 w-16 md:w-24 bg-gradient-to-r ${selectedCountryInfo.color} rounded-full mb-3 md:mb-4`}></div>
                  
                  {/* Country Basic Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-4">
                    <div className="bg-gradient-to-br from-orange/10 to-orange/20 rounded-lg p-2 md:p-3 border border-orange/20">
                      <div className="text-[10px] md:text-xs text-gray-600 mb-1 font-semibold uppercase break-words">{t.population}</div>
                      <div className="text-sm md:text-lg font-bold text-orange break-words">{selectedCountryInfo.population}</div>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-1">{t.estimate}</div>
                    </div>
                    <div className="bg-gradient-to-br from-red/10 to-red/20 rounded-lg p-2 md:p-3 border border-red/20">
                      <div className="text-[10px] md:text-xs text-gray-600 mb-1 font-semibold uppercase break-words">{t.capital}</div>
                      <div className="text-sm md:text-lg font-bold text-red break-words">{selectedCountryInfo.capital}</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange/10 to-orange/20 rounded-lg p-2 md:p-3 border border-orange/20">
                      <div className="text-[10px] md:text-xs text-gray-600 mb-1 font-semibold uppercase break-words">{t.communities}</div>
                      <div className="text-sm md:text-lg font-bold text-orange break-words">{selectedCountryInfo.communities}</div>
                    </div>
                    <div className="bg-gradient-to-br from-red/10 to-red/20 rounded-lg p-2 md:p-3 border border-red/20">
                      <div className="text-[10px] md:text-xs text-gray-600 mb-1 font-semibold uppercase break-words">{t.participants}</div>
                      <div className="text-sm md:text-lg font-bold text-red break-words">{selectedCountryInfo.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border-l-4 border-orange">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed break-words">
                  {selectedCountryData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-orange to-orange/80 rounded-lg p-2 md:p-3 flex-shrink-0">
                      <img src={globe} alt="Regions" className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 break-words">{t.regionsWeWork}</h4>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {selectedCountryData.regions.map((region, index) => (
                      <li key={index} className="flex items-center gap-2 md:gap-3 text-gray-700 bg-gray-50 rounded-lg p-2 md:p-3 hover:bg-orange/5 transition-colors">
                        <span className="text-orange text-lg md:text-xl font-bold flex-shrink-0">•</span>
                        <span className="font-medium text-sm md:text-base break-words">{region}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-red to-red/80 rounded-lg p-2 md:p-3 flex-shrink-0">
                      <img src={clipboard} alt="Programs" className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 break-words">{t.keyPrograms}</h4>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {selectedCountryData.programs.map((program, index) => {
                      const icon = programIcons[program] || globe;
                      return (
                        <li key={index} className="flex items-start gap-2 md:gap-3 text-gray-700 bg-gray-50 rounded-lg p-2 md:p-3 hover:bg-red/5 transition-colors group">
                          <div className="bg-orange rounded-lg p-1.5 md:p-2 transition-colors mt-1 flex-shrink-0">
                            <img src={icon} alt={program} className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert" />
                          </div>
                          <span className="font-medium flex-1 text-sm md:text-base break-words">{program}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Impact Stats for Selected Country */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                <div className="bg-gradient-to-br from-orange/20 to-orange/10 rounded-lg p-3 md:p-4 text-center border border-orange/20">
                  <div className="text-xl md:text-3xl font-bold text-orange mb-1 break-words">
                    {selectedCountry === "ghana" ? "200+" : selectedCountry === "coteDivoire" ? "77" : "50+"}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium break-words">
                    {language === "en" ? "VSLA Groups" : "Groupes VSLA"}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red/20 to-red/10 rounded-lg p-3 md:p-4 text-center border border-red/20">
                  <div className="text-xl md:text-3xl font-bold text-red mb-1 break-words">
                    {selectedCountryInfo.communities}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium break-words">
                    {t.communities}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange/20 to-orange/10 rounded-lg p-3 md:p-4 text-center border border-orange/20">
                  <div className="text-xl md:text-3xl font-bold text-orange mb-1 break-words">
                    {selectedCountryInfo.participants}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium break-words">
                    {t.participants}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red/20 to-red/10 rounded-lg p-3 md:p-4 text-center border border-red/20">
                  <div className="text-xl md:text-3xl font-bold text-red mb-1 break-words">
                    {selectedCountryInfo.yearsActive}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium break-words">
                    {t.yearsActive}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WhereWeWorkPage;
