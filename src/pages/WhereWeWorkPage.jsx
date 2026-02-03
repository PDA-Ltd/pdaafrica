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
      programs: "4",
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title.split(" ").slice(0, 2).join(" ")} <span className="text-yellow-300">{t.title.split(" ").slice(2).join(" ")}</span>
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
          <div ref={statsRef} className={`grid md:grid-cols-3 gap-8 ${statsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-6xl font-bold mb-3">5</div>
              <div className="text-xl font-semibold">{t.countriesLabel || "Countries"}</div>
              <div className="text-sm opacity-90 mt-2">{language === "en" ? "Across Africa" : "À travers l'Afrique"}</div>
            </div>
            <div className="bg-gradient-to-br from-red to-red/80 rounded-xl p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-6xl font-bold mb-3">100K+</div>
              <div className="text-xl font-semibold">{t.communitiesReached || "Communities Reached"}</div>
              <div className="text-sm opacity-90 mt-2">{language === "en" ? "Empowered" : "Autonomisées"}</div>
            </div>
            <div className="bg-gradient-to-br from-orange to-orange/80 rounded-xl p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-6xl font-bold mb-3">21+</div>
              <div className="text-xl font-semibold">{t.yearsOfImpact || "Years of Impact"}</div>
              <div className="text-sm opacity-90 mt-2">{language === "en" ? "Of Service" : "De service"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Selector */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={countriesRef} className={`text-center mb-10 ${countriesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.presence}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.presenceDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`p-6 rounded-xl border-2 transition-all transform hover:scale-110 hover:shadow-xl ${
                  selectedCountry === country.id
                    ? `${country.bgColor} ${country.borderColor} border-4 shadow-2xl scale-105`
                    : "border-gray-200 bg-white hover:border-orange/50 hover:bg-gray-50"
                }`}
              >
                <div className="text-5xl mb-3 transform hover:scale-110 transition-transform">{country.flag}</div>
                <div className={`font-bold text-sm ${selectedCountry === country.id ? 'text-gray-800' : 'text-gray-600'}`}>
                  {country.name}
                </div>
              </button>
            ))}
          </div>

          {/* Country Details */}
          {selectedCountryInfo && (
            <div ref={detailsRef} className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 md:p-12 border-2 ${selectedCountryInfo.borderColor} ${detailsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-7xl transform hover:scale-110 transition-transform">{selectedCountryInfo.flag}</div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">{selectedCountryInfo.name}</h3>
                  <div className={`h-1 w-24 bg-gradient-to-r ${selectedCountryInfo.color} rounded-full mb-4`}></div>
                  
                  {/* Country Basic Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-gradient-to-br from-orange/10 to-orange/20 rounded-lg p-3 border border-orange/20">
                      <div className="text-xs text-gray-600 mb-1 font-semibold uppercase">{t.population}</div>
                      <div className="text-lg font-bold text-orange">{selectedCountryInfo.population}</div>
                      <div className="text-xs text-gray-500 mt-1">{t.estimate}</div>
                    </div>
                    <div className="bg-gradient-to-br from-red/10 to-red/20 rounded-lg p-3 border border-red/20">
                      <div className="text-xs text-gray-600 mb-1 font-semibold uppercase">{t.capital}</div>
                      <div className="text-lg font-bold text-red">{selectedCountryInfo.capital}</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange/10 to-orange/20 rounded-lg p-3 border border-orange/20">
                      <div className="text-xs text-gray-600 mb-1 font-semibold uppercase">{t.communities}</div>
                      <div className="text-lg font-bold text-orange">{selectedCountryInfo.communities}</div>
                    </div>
                    <div className="bg-gradient-to-br from-red/10 to-red/20 rounded-lg p-3 border border-red/20">
                      <div className="text-xs text-gray-600 mb-1 font-semibold uppercase">{t.participants}</div>
                      <div className="text-lg font-bold text-red">{selectedCountryInfo.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-xl p-6 mb-8 border-l-4 border-orange">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedCountryData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-orange to-orange/80 rounded-lg p-3">
                      <img src={globe} alt="Regions" className="w-6 h-6 brightness-0 invert" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">{t.regionsWeWork}</h4>
                  </div>
                  <ul className="space-y-3">
                    {selectedCountryData.regions.map((region, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-lg p-3 hover:bg-orange/5 transition-colors">
                        <span className="text-orange text-xl font-bold">•</span>
                        <span className="font-medium">{region}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-red to-red/80 rounded-lg p-3">
                      <img src={clipboard} alt="Programs" className="w-6 h-6 brightness-0 invert" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">{t.keyPrograms}</h4>
                  </div>
                  <ul className="space-y-3">
                    {selectedCountryData.programs.map((program, index) => {
                      const icon = programIcons[program] || globe;
                      return (
                        <li key={index} className="flex items-start gap-3 text-gray-700 bg-gray-50 rounded-lg p-3 hover:bg-red/5 transition-colors group">
                          <div className="bg-gradient-to-br from-orange/20 to-orange/10 rounded-lg p-2 group-hover:from-orange/30 group-hover:to-orange/20 transition-colors mt-1">
                            <img src={icon} alt={program} className="w-5 h-5" />
                          </div>
                          <span className="font-medium flex-1">{program}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Impact Stats for Selected Country */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-orange/20 to-orange/10 rounded-lg p-4 text-center border border-orange/20">
                  <div className="text-3xl font-bold text-orange mb-1">
                    {selectedCountry === "ghana" ? "200+" : selectedCountry === "coteDivoire" ? "77" : "50+"}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {language === "en" ? "VSLA Groups" : "Groupes VSLA"}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red/20 to-red/10 rounded-lg p-4 text-center border border-red/20">
                  <div className="text-3xl font-bold text-red mb-1">
                    {selectedCountryInfo.communities}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t.communities}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange/20 to-orange/10 rounded-lg p-4 text-center border border-orange/20">
                  <div className="text-3xl font-bold text-orange mb-1">
                    {selectedCountryInfo.participants}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t.participants}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red/20 to-red/10 rounded-lg p-4 text-center border border-red/20">
                  <div className="text-3xl font-bold text-red mb-1">
                    {selectedCountryInfo.yearsActive}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
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
