import React from "react";
import { mission, reachout } from "../assets/images";
import { peak, dart, bulb, puzzle, globe, signal, finance, clipboard, star, user, research, givelove, respect } from "../assets/icons";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.about : fr.about;

  const values = [
    {
      icon: star,
      title: language === "en" ? "Integrity" : "Intégrité",
      description: language === "en" 
        ? "We commit to honest and ethical conduct in all interactions; fostering trust, transparency, and accountability."
        : "Nous nous engageons à une conduite honnête et éthique dans toutes les interactions ; favorisant la confiance, la transparence et la responsabilité.",
      color: "bg-blue-50",
      iconColor: "bg-blue-500",
      iconFilter: "brightness-0 invert",
    },
    {
      icon: globe,
      title: language === "en" ? "Inclusion" : "Inclusion",
      description: language === "en"
        ? "We foster inclusive environments where every voice is heard, valued, and contributes to our goal."
        : "Nous favorisons des environnements inclusifs où chaque voix est entendue, valorisée et contribue à notre objectif.",
      color: "bg-green-50",
      iconColor: "bg-green-500",
      iconFilter: "",
    },
    {
      icon: dart,
      title: language === "en" ? "Impact" : "Impact",
      description: language === "en"
        ? "We focus on outcomes that empower and transform people's lives and communities."
        : "Nous nous concentrons sur les résultats qui autonomisent et transforment la vie des gens et des communautés.",
      color: "bg-lightOrange",
      iconColor: "bg-orange",
      iconFilter: "brightness-0 invert",
    },
    {
      icon: respect,
      title: language === "en" ? "Respect" : "Respect",
      description: language === "en"
        ? "We value the uniqueness of every individual (everyone matters), so we create a safe and supportive environment where the views, opinions, and contributions of everyone is encouraged and respected."
        : "Nous valorisons l'unicité de chaque individu (chacun compte), nous créons donc un environnement sûr et favorable où les opinions, points de vue et contributions de chacun sont encouragés et respectés.",
      color: "bg-purple-50",
      iconColor: "bg-purple-500",
      iconFilter: "brightness-0 invert",
    },
    {
      icon: research,
      title: language === "en" ? "Resourcefulness" : "Ingéniosité",
      description: language === "en"
        ? "We work innovatively with communities to harness and effectively utilize local resources for community-led development."
        : "Nous travaillons de manière innovante avec les communautés pour exploiter et utiliser efficacement les ressources locales pour un développement dirigé par la communauté.",
      color: "bg-yellow-50",
      iconColor: "bg-yellow-500",
      iconFilter: "",
    },
  ];

  const strategicObjectives = [
    {
      icon: finance,
      title: language === "en" ? "Financial Inclusion" : "Inclusion financière",
      description: language === "en"
        ? "Expand the use of our model of financial inclusion and enhance local economic development across Africa."
        : "Élargir l'utilisation de notre modèle d'inclusion financière et améliorer le développement économique local à travers l'Afrique.",
      link: "/financial-inclusion-and-vsla",
    },
    {
      icon: clipboard,
      title: language === "en" ? "Child Protection" : "Protection de l'enfance",
      description: language === "en"
        ? "Shape child protection spaces by strengthening child-centred basic education, community structures, and the inter-agency referral system."
        : "Façonner les espaces de protection de l'enfance en renforçant l'éducation de base centrée sur l'enfant, les structures communautaires et le système de référence inter-agences.",
      link: "/nyonkopa-child-labour-remediation",
    },
    {
      icon: globe,
      title: language === "en" ? "Climate-Smart Agriculture" : "Agriculture intelligente face au climat",
      description: language === "en"
        ? "Promote the use of climate-smart agricultural practices among smallholder farmers in communities."
        : "Promouvoir l'utilisation de pratiques agricoles intelligentes face au climat parmi les petits exploitants agricoles dans les communautés.",
      link: "/projects",
    },
    {
      icon: signal,
      title: language === "en" ? "Youth Development" : "Développement de la jeunesse",
      description: language === "en"
        ? "Develop and implement innovative approaches of youth development programs at scale across Africa."
        : "Développer et mettre en œuvre des approches innovantes de programmes de développement de la jeunesse à grande échelle à travers l'Afrique.",
      link: "/projects",
    },
    {
      icon: bulb,
      title: language === "en" ? "Organizational Sustainability" : "Durabilité organisationnelle",
      description: language === "en"
        ? "Build PDA Africa's financial resilience and organizational sustainability by building a portfolio of diversified partners and strengthening partner relationships."
        : "Renforcer la résilience financière et la durabilité organisationnelle de PDA Africa en construisant un portefeuille de partenaires diversifiés et en renforçant les relations avec les partenaires.",
      link: "/get-involved",
    },
  ];

  const visionText = language === "en"
    ? "We envision a world where states, communities, and organisations foster an environment that empowers all individuals, regardless of gender, ethnicity, background, belief, age, or ability, to reach their full potential and make meaningful contributions towards a more equitable and sustainable society."
    : "Nous envisageons un monde où les États, les communautés et les organisations favorisent un environnement qui permet à tous les individus, indépendamment du sexe, de l'ethnicité, du milieu, de la croyance, de l'âge ou des capacités, d'atteindre leur plein potentiel et de contribuer de manière significative à une société plus équitable et durable.";

  const missionText = language === "en"
    ? "To work with communities, organisations, and states to facilitate the participation of all people towards taking greater control over their lives, and contribute to a more sustainable environment and society."
    : "Travailler avec les communautés, les organisations et les États pour faciliter la participation de tous les peuples à prendre un plus grand contrôle sur leur vie et contribuer à un environnement et une société plus durables.";

  const profileText1 = language === "en"
    ? "PDA Africa is the not-for-profit arm of Participatory Development Associates that co-creates the design, implementation, and management of community-led projects and programs."
    : "PDA Africa est la branche à but non lucratif de Participatory Development Associates qui co-crée la conception, la mise en œuvre et la gestion de projets et programmes dirigés par les communautés.";

  const profileText2 = language === "en"
    ? "We use innovative, participatory methodologies to facilitate development processes that empower communities to take ownership of their growth. We do this for communities and partners. Our partnerships span development interventions with governments, the private sector, and international development partners."
    : "Nous utilisons des méthodologies participatives innovantes pour faciliter les processus de développement qui permettent aux communautés de prendre en charge leur croissance. Nous le faisons pour les communautés et les partenaires. Nos partenariats couvrent des interventions de développement avec les gouvernements, le secteur privé et les partenaires de développement internationaux.";

  const [heroRef, heroVisible] = useScrollAnimation();
  const [profileRef, profileVisible] = useScrollAnimation();
  const [visionRef, visionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [objectivesRef, objectivesVisible] = useScrollAnimation();

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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title.split(" ").slice(0, 1).join(" ")} <span className="text-yellow-300">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={profileRef} className={`text-center mb-10 ${profileVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.profile.split(" ").slice(0, 1).join(" ")} <span className="text-orange">{t.profile.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange/10 to-orange/20 rounded-lg p-8 md:p-12 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {profileText1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {profileText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={visionRef} className={`grid md:grid-cols-2 gap-8 mb-10 ${visionVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center">
                  <img src={peak} alt="Vision" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {t.vision.split(" ").slice(0, 1).join(" ")} <span className="text-orange">{t.vision.split(" ").slice(1).join(" ")}</span>
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange rounded-full w-16 h-16 flex items-center justify-center">
                  <img src={dart} alt="Mission" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {t.mission.split(" ").slice(0, 1).join(" ")} <span className="text-orange">{t.mission.split(" ").slice(1).join(" ")}</span>
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {missionText}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={mission}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={reachout}
                alt="Reach Out"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={valuesRef} className={`text-center mb-10 ${valuesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.values.split(" ").slice(0, 1).join(" ")} <span className="text-orange">{t.values.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-24">
              {t.valuesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`${value.color} rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
              >
                <div className={`${value.iconColor} rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <img src={value.icon} alt={value.title} className={`w-8 h-8 ${value.iconFilter || ""}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={objectivesRef} className={`text-center mb-10 ${objectivesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.strategicObjectives.split(" ").slice(0, 1).join(" ")} <span className="text-orange">{t.strategicObjectives.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-24">
              {t.strategicDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicObjectives.map((objective, index) => (
              <Link
                key={index}
                to={objective.link}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-lightOrange rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-orange group-hover:scale-110 transition-all">
                  <img
                    src={objective.icon}
                    alt={objective.title}
                    className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange transition-colors">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {objective.description}
                </p>
                <span className="inline-flex items-center text-orange font-semibold group-hover:underline">
                  {language === "en" ? "Learn More" : "En savoir plus"}
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-500 text-orange">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={ctaRef} className={`max-w-4xl mx-auto text-center ${ctaVisible ? 'animate-on-scroll visible scale' : 'animate-on-scroll scale'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Partner with us to empower communities and create lasting positive change across Sub-Saharan Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-block bg-white text-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              to="/contact-us"
              className="inline-block bg-transparent border-2 border-white text-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
