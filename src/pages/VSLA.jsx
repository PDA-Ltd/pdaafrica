import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { modul, obuasi } from "../assets/images";
import {
  beyond,
  cocoa,
  coram,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  finan,
  sucden,
  lindt,
  nestle,
  socam,

} from "../assets/images";
import { finance, globe, clipboard } from "../assets/icons";
import Tab from "../components/Tab";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const ProjectCard = ({ title, description, location, officers }) => (
//   <div className="border rounded-lg p-6 shadow-md">
//     <h3 className="text-2xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//     <p className="mt-4 text-gray-500">Location: {location}</p>
//     <p className="text-gray-500">Field Officers: {officers}</p>
//   </div>
// );

const successStories = [
  "“I am a member of the Yɛn Daakye group. The group has been of help to me. What we learned in our lessons has helped a lot. I took a loan from the group to purchase corn-mill machine. Currently, I have taken another loan to purchase footwears that I sell. You will be marvelled when you see my store in this community. If I say it hasn’t helped me, I would be lying. It has really helped me so I will continue to be a member of the group.” – Akosua Mensah",
  "“I am a member of the Ayekoo group. I am the Chairman of the group. We learned about vision Journey, that is, our future goals. I wanted to build a house but I didn’t know how to start. When we started this group, what we learned helped me to know that if you and your spouse do not share similar idea, it will be difficult for the family to develop. After the training, I was able to build and roof a single room house where we currently stay.” – Eric Amoako",
  "“I am a member of Love group at Oti Boateng. The training has been an eye opener to me. I used to spend money anyhow. The group has help me to save a lot of money. I have started a container about five years ago of which I am confident that I may finish before this year ends and start stocking it. The project has been helpful to me.” – Obeng Asiwe Collins",
    "“The name of the group I join is called Nkabom Ma Nkɔsoɔ. The training has helped me a lot, especially the savings. At first, I used to be truant because I did not understand it. I later realized that I was able to get a loan from the group to support my building project. I used the money to purchase cement and paid later. The group has helped me a lot because I have gotten a lot of benefits which is helping me in my daily life.” – Akwasi Owusu",
    "“The name of the VSLA group I joined is Nkabom in Ataase community. I have benefitted greatly from this project. At first getting money and access to credit facilities was very difficult such that I could not get money to pay my children school fees when I needed to. Before the project, none of my children attended senior high school but the loan scheme provided by the saving group enabled me to access a loan to help send my last born to senior high school. So, for me, this project has benefitted me greatly and I would like to say thank to the sponsors of the project.” – Akosua Felicia",
    "“I belong to Yen ka Bom group in the Ayaasu community. The Gals training provided PDA has help foster more unity and stabilized my marriage as it was on the verge of collapse. I have also been able to take loans to pay my children school fees and also start a soap making business, so I am grateful to PDA for bringing this project to us” – Afia Adoma",
];

const SuccessStories = () => {
  const settings = { 
    dots: true, 
    infinite: true, 
    autoplay: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="text-center">
      <Slider {...settings}>
        {successStories.map((story, index) => (
          <div key={index} className="px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange">
              <p className="text-gray-700 text-lg leading-relaxed italic">{story}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  location,
  officers,
  text,
  language,
  index,
  onClick,
}) => {
  const t = language === "en" ? en.vsla : fr.vsla;
  
  // Different gradient colors for variety
  const gradients = [
    "from-orange via-orange/90 to-orange/80",
    "from-blue-500 via-blue-400 to-blue-600",
    "from-purple-500 via-purple-400 to-purple-600",
    "from-green-500 via-green-400 to-green-600",
    "from-red via-red/90 to-red/80",
    "from-indigo-500 via-indigo-400 to-indigo-600",
  ];
  
  const gradient = gradients[index % gradients.length];
  const icon = index % 3 === 0 ? finance : index % 3 === 1 ? globe : clipboard;

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left w-full focus:outline-none"
    >
      <div className="border-0 rounded-2xl p-0 shadow-xl font-poppins hover:shadow-2xl transition-all duration-300 overflow-hidden w-full relative group">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col cursor-pointer">
          {/* Icon */}
          <div className="mb-4 flex items-start justify-between">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/30 transition-all group-hover:scale-110">
              <img src={icon} alt="Project" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
              <span className="text-white text-xs font-bold">
                {officers} {t.fieldOfficers}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-white leading-tight break-words overflow-wrap-anywhere drop-shadow-lg">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/90 mb-4 leading-relaxed text-xs sm:text-sm md:text-base break-words overflow-wrap-anywhere flex-1 drop-shadow">
            {description}
          </p>

          {/* Location Badge */}
          <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-white text-xs sm:text-sm font-semibold break-words overflow-wrap-anywhere">
                {location}
              </p>
            </div>
            <span className="text-[10px] sm:text-xs text-white/80 italic">
              {language === "en" ? "Click to read more" : "Cliquez pour en savoir plus"}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

const partners = [
  { imgURL: beyond, name: "Beyond" },
  { imgURL: cocoa, name: "Cocoa" },
  { imgURL: coram, name: "Coram" },
  { imgURL: kokoo, name: "Kokoo" },
  { imgURL: opm, name: "OPM" },
  { imgURL: pandemics, name: "Pandemics" },
  { imgURL: sucden, name: "Sucden" },
  { imgURL: lindt, name: "Lindt" },
  { imgURL: nestle, name: "Nestle" },
  { imgURL: socam, name: "Socam" },
];

const VSLA = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.vsla : fr.vsla;
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [whoWeAreRef, whoWeAreVisible] = useScrollAnimation();
  const [modelRef, modelVisible] = useScrollAnimation();
  const [partnershipsRef, partnershipsVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [storiesRef, storiesVisible] = useScrollAnimation();

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="pdaafrica"
      className="max-container max-w-full min-h-screen font-poppins"
    >
      {/* Back to Projects Button */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-orange font-semibold transition-colors duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${obuasi})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div ref={heroRef} className={`relative h-full flex items-center justify-center px-6 ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          <div className="text-center max-w-4xl">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl text-orange mb-3 drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-white mt-4 px-4 md:px-12 font-poppins mb-5 text-xl md:text-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

        {/* Who We Are Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div ref={whoWeAreRef} className={`text-center mb-6 ${whoWeAreVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                {t.whoWeAre.split(" ")[0]} <span className="text-orange">{t.whoWeAre.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.whoWeAreDesc}
              </p>
            </div>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${whoWeAreVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <p className="text-5xl font-bold text-orange mb-2">21+</p>
                <p className="text-gray-700 font-semibold text-lg">{t.yearsOfImpact}</p>
              </div>
              <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <p className="text-5xl font-bold text-orange mb-2">200+</p>
                <p className="text-gray-700 font-semibold text-lg">{t.communities}</p>
              </div>
              <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <p className="text-5xl font-bold text-orange mb-2">1000+</p>
                <p className="text-gray-700 font-semibold text-lg">{t.beneficiaries}</p>
              </div>
            </div>
          </div>
        </section>

        {/* VSLA+ Model Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div ref={modelRef} className={`text-center mb-6 ${modelVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                {t.ourModel.split(" ")[0]} <span className="text-orange">{t.ourModel.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {t.ourModelDesc}
              </p>
            </div>
            <div className={`${modelVisible ? 'animate-on-scroll visible scale' : 'animate-on-scroll scale'}`}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
                <img
                  src={modul}
                  alt="VSLA+ Model Infographic"
                  className="mx-auto w-full max-w-4xl rounded-xl"
                />
                <p className="text-gray-600 mt-6 italic text-center text-lg">
                  {t.modelNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact and Partnerships Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div ref={partnershipsRef} className={`text-center mb-6 ${partnershipsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                {t.impactPartnerships.split(" ")[0]} <span className="text-orange">{t.impactPartnerships.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.impactPartnershipsDesc}
              </p>
            </div>

            <div className={`${partnershipsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
                <div className="flex overflow-hidden group justify-center">
                  <div className="flex animate-loop-scroll space-x-12 group-hover:paused relative">
                    {partners.map((partner, index) => (
                      <div key={index} className="flex-shrink-0 w-24 h-24 bg-gray-50 rounded-xl p-4 flex items-center justify-center hover:bg-orange/10 transition-colors duration-300">
                        <img
                          src={partner.imgURL}
                          alt={partner.name}
                          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ))}
                    {partners.map((partner, index) => (
                      <div key={index + partners.length} className="flex-shrink-0 w-24 h-24 bg-gray-50 rounded-xl p-4 flex items-center justify-center hover:bg-orange/10 transition-colors duration-300">
                        <img
                          src={partner.imgURL}
                          alt={partner.name}
                          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div ref={projectsRef} className={`text-center mb-6 ${projectsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                {t.ourProjects.split(" ")[0]} <span className="text-orange">{t.ourProjects.split(" ").slice(1).join(" ")}</span>
              </h2>
            </div>
            <div className={`vslacard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${projectsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
              <ProjectCard
                index={0}
                title={language === "en" ? "Nestle Income Accelerator Programme [Cote D'Ivoire]" : "Programme Nestlé Income Accelerator [Côte d'Ivoire]"}
                description={language === "en" ? "Improving the livelihoods of cocoa-farming families through VSLA groups and Gender Action Learning Systems (GALS) training." : "Améliorer les moyens de subsistance des familles de producteurs de cacao grâce aux groupes VSLA et à la formation sur les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS)."}
                location={language === "en" ? "Cote D'Ivoire" : "Côte d'Ivoire"}
                officers="7"
                text={language === "en" ? "The Nestlé Income Accelerator Programme (IAP) is an initiative aimed at improving the livelihoods of cocoa-farming families in Côte D'Ivoire while advancing regenerative agriculture practices. In collaboration with Beyond Beans, PDA has been instrumental in forming 87 Village Savings and Loans Association (VSLA) groups. Seven field officers actively facilitate project activities, including financial literacy and gender empowerment training, leveraging the Gender Action Learning Systems (GALS) methodology to ensure inclusivity and impact. The program was extended to October 2025 to allow all VSLA groups to complete their full 52-week cycle and successfully complete GALS training. By May, some groups had already conducted their first share-out and commenced a second cycle. All 88 VSLA groups formed under the project successfully named their groups and were trained on VSLA leadership and elected their management committee members." : "Le programme Nestlé Income Accelerator (IAP) est une initiative visant à améliorer les moyens de subsistance des familles de producteurs de cacao en Côte d'Ivoire tout en faisant progresser les pratiques agricoles régénératrices. En collaboration avec Beyond Beans, PDA a joué un rôle déterminant dans la formation de 87 groupes d'associations villageoises d'épargne et de crédit (VSLA). Sept agents de terrain facilitent activement les activités du projet, notamment la formation en éducation financière et l'autonomisation des femmes, en utilisant la méthodologie des systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) pour assurer l'inclusivité et l'impact. Le programme a été prolongé jusqu'en octobre 2025 pour permettre à tous les groupes VSLA de terminer leur cycle complet de 52 semaines et de terminer avec succès la formation GALS. En mai, certains groupes avaient déjà effectué leur premier partage et commencé un deuxième cycle. Les 88 groupes VSLA formés dans le cadre du projet ont nommé avec succès leurs groupes et ont été formés sur le leadership VSLA et ont élu les membres de leur comité de gestion."}
                language={language}
                onClick={() =>
                  openProjectModal({
                    title:
                      language === "en"
                        ? "Nestle Income Accelerator Programme [Cote D'Ivoire]"
                        : "Programme Nestlé Income Accelerator [Côte d'Ivoire]",
                    location: language === "en" ? "Cote D'Ivoire" : "Côte d'Ivoire",
                    officers: "7",
                    partner: "Beyond Beans",
                    period: "2025 –",
                    url:
                      language === "en"
                        ? "https://pdaghana.com/nestle-income-accelerator-programme-iap-2-cote-divoire/"
                        : "https://pdaghana.com/nestle-income-accelerator-programme-iap-2-cote-divoire/",
                    highlights:
                      language === "en"
                        ? [
                            "87 VSLA groups formed with 7 PDA field officers supporting implementation.",
                            "Extended to October 2025 so all groups complete a 52‑week cycle and GALS training.",
                            "All groups trained in financial literacy, gender empowerment and VSLA leadership.",
                          ]
                        : [
                            "87 groupes VSLA formés avec 7 agents de terrain PDA chargés de la mise en œuvre.",
                            "Prolongé jusqu'en octobre 2025 pour permettre à tous les groupes de terminer un cycle de 52 semaines et la formation GALS.",
                            "Tous les groupes ont été formés à l'éducation financière, à l'autonomisation des femmes et au leadership VSLA.",
                          ],
                    description:
                      language === "en"
                        ? "Improving the livelihoods of cocoa‑farming families through VSLA groups, GALS training and regenerative agriculture in Côte d'Ivoire."
                        : "Améliorer les moyens de subsistance des familles de producteurs de cacao grâce aux groupes VSLA, à la formation GALS et à l'agriculture régénératrice en Côte d'Ivoire.",
                    text:
                      language === "en"
                        ? "The Nestlé Income Accelerator Programme (IAP) is an initiative aimed at improving the livelihoods of cocoa-farming families in Côte D'Ivoire while advancing regenerative agriculture practices. In collaboration with Beyond Beans, PDA has been instrumental in forming 87 Village Savings and Loans Association (VSLA) groups. Seven field officers actively facilitate project activities, including financial literacy and gender empowerment training, leveraging the Gender Action Learning Systems (GALS) methodology to ensure inclusivity and impact. The program was extended to October 2025 to allow all VSLA groups to complete their full 52-week cycle and successfully complete GALS training. By May, some groups had already conducted their first share-out and commenced a second cycle. All 88 VSLA groups formed under the project successfully named their groups and were trained on VSLA leadership and elected their management committee members."
                        : "Le programme Nestlé Income Accelerator (IAP) est une initiative visant à améliorer les moyens de subsistance des familles de producteurs de cacao en Côte d'Ivoire tout en faisant progresser les pratiques agricoles régénératrices. En collaboration avec Beyond Beans, PDA a joué un rôle déterminant dans la formation de 87 groupes d'associations villageoises d'épargne et de crédit (VSLA). Sept agents de terrain facilitent activement les activités du projet, notamment la formation en éducation financière et en autonomisation des femmes, en utilisant la méthodologie des systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) pour assurer l'inclusivité et l'impact. Le programme a été prolongé jusqu'en octobre 2025 pour permettre à tous les groupes VSLA de terminer leur cycle complet de 52 semaines et de terminer avec succès la formation GALS. En mai, certains groupes avaient déjà effectué leur premier partage et commencé un deuxième cycle. Les 88 groupes VSLA formés dans le cadre du projet ont nommé avec succès leurs groupes et ont été formés sur le leadership VSLA et ont élu les membres de leur comité de gestion.",
                  })
                }
              />
              <ProjectCard
                index={1}
                title={language === "en" ? "Nestle Income Accelerator Programme [Ghana]" : "Programme Nestlé Income Accelerator [Ghana]"}
                description={language === "en" ? "Income diversification and restructuring of VSLA groups for cocoa-farming communities." : "Diversification des revenus et restructuration des groupes VSLA pour les communautés productrices de cacao."}
                location="Ghana"
                officers="7"
                text={language === "en" ? "In Ghana, the Nestlé Income Accelerator Programme (IAP) focuses on improving the livelihoods of cocoa-farming families through the formation and restructuring of VSLA groups. The programme also advances regenerative agriculture practices and promotes income diversification, working in tandem with four pillars: school enrolment, pruning, agroforestry, and income diversification. Seven PDA field officers were trained to implement the IAP in Ghana, focusing on VSLA formation and restructuring. The project has been extended into a second phase with a strong focus on women's economic empowerment. This phase introduces financial literacy and entrepreneurship training to strengthen household financial management, as well as Income Generating Activity (IGA) support to enable beneficiaries to diversify income sources beyond cocoa farming. The project reached approximately 4,000 beneficiaries across Nsokote and Bekwai." : "Au Ghana, le programme Nestlé Income Accelerator (IAP) se concentre sur l'amélioration des moyens de subsistance des familles de producteurs de cacao grâce à la formation et à la restructuration des groupes VSLA. Le programme fait également progresser les pratiques agricoles régénératrices et promeut la diversification des revenus, en travaillant en tandem avec quatre piliers : la scolarisation, la taille, l'agroforesterie et la diversification des revenus. Sept agents de terrain PDA ont été formés pour mettre en œuvre l'IAP au Ghana, en se concentrant sur la formation et la restructuration des VSLA. Le projet a été étendu à une deuxième phase avec un fort accent sur l'autonomisation économique des femmes. Cette phase introduit la formation en éducation financière et en entrepreneuriat pour renforcer la gestion financière des ménages, ainsi que le soutien aux activités génératrices de revenus (AGR) pour permettre aux bénéficiaires de diversifier les sources de revenus au-delà de la culture du cacao. Le projet a atteint environ 4 000 bénéficiaires à Nsokote et Bekwai."}
                language={language}
                onClick={() =>
                  openProjectModal({
                    title:
                      language === "en"
                        ? "Nestle Income Accelerator Programme [Ghana]"
                        : "Programme Nestlé Income Accelerator [Ghana]",
                    location: "Ghana",
                    officers: "7",
                    partner: "Beyond Beans",
                    period: "2025 –",
                    url:
                      language === "en"
                        ? "https://pdaghana.com/nestle-income-accelerator-programme-iap-2-ghana/"
                        : "https://pdaghana.com/nestle-income-accelerator-programme-iap-2-ghana/",
                    highlights:
                      language === "en"
                        ? [
                            "Focuses on income diversification and VSLA restructuring in cocoa-growing communities.",
                            "Implements four pillars: school enrolment, pruning, agroforestry and income diversification.",
                            "Reached about 4,000 beneficiaries across Nsokote and Bekwai, with a strong emphasis on women's economic empowerment.",
                          ]
                        : [
                            "Se concentre sur la diversification des revenus et la restructuration des VSLA dans les communautés productrices de cacao.",
                            "Met en œuvre quatre piliers : scolarisation, taille, agroforesterie et diversification des revenus.",
                            "A atteint environ 4 000 bénéficiaires à Nsokote et Bekwai, avec un fort accent sur l'autonomisation économique des femmes.",
                          ],
                    description:
                      language === "en"
                        ? "Supporting cocoa-farming households in Ghana through VSLA formation and restructuring, regenerative agriculture and women's economic empowerment."
                        : "Soutenir les ménages producteurs de cacao au Ghana grâce à la formation et à la restructuration des VSLA, à l'agriculture régénératrice et à l'autonomisation économique des femmes.",
                    text:
                      language === "en"
                        ? "In Ghana, the Nestlé Income Accelerator Programme (IAP) focuses on improving the livelihoods of cocoa-farming families through the formation and restructuring of VSLA groups. The programme also advances regenerative agriculture practices and promotes income diversification, working in tandem with four pillars: school enrolment, pruning, agroforestry, and income diversification. Seven PDA field officers were trained to implement the IAP in Ghana, focusing on VSLA formation and restructuring. The project has been extended into a second phase with a strong focus on women's economic empowerment. This phase introduces financial literacy and entrepreneurship training to strengthen household financial management, as well as Income Generating Activity (IGA) support to enable beneficiaries to diversify income sources beyond cocoa farming. The project reached approximately 4,000 beneficiaries across Nsokote and Bekwai."
                        : "Au Ghana, le programme Nestlé Income Accelerator (IAP) se concentre sur l'amélioration des moyens de subsistance des familles de producteurs de cacao grâce à la formation et à la restructuration des groupes VSLA. Le programme fait également progresser les pratiques agricoles régénératrices et promeut la diversification des revenus, en travaillant en tandem avec quatre piliers : la scolarisation, la taille, l'agroforesterie et la diversification des revenus. Sept agents de terrain PDA ont été formés pour mettre en œuvre l'IAP au Ghana, en se concentrant sur la formation et la restructuration des VSLA. Le projet a été étendu à une deuxième phase avec un fort accent sur l'autonomisation économique des femmes. Cette phase introduit la formation en éducation financière et en entrepreneuriat pour renforcer la gestion financière des ménages, ainsi que le soutien aux activités génératrices de revenus (AGR) pour permettre aux bénéficiaires de diversifier les sources de revenus au-delà de la culture du cacao. Le projet a atteint environ 4 000 bénéficiaires à Nsokote et Bekwai.",
                  })
                }
              />
              <ProjectCard
                index={2}
                title={language === "en" ? "SUCDEN VSLA Programme" : "Programme VSLA SUCDEN"}
                description={language === "en" ? "Addressing cocoa sector challenges, improving women's earning capacity, and promoting financial literacy in Ghana." : "Répondre aux défis du secteur du cacao, améliorer la capacité de gain des femmes et promouvoir l'éducation financière au Ghana."}
                location={language === "en" ? "Western North Region, Ghana" : "Région du Nord-Ouest, Ghana"}
                officers="2"
                text={language === "en" ? "The Women's Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour. The project is being implemented in Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with Sucden and Kuapa Kokoo Farmers' Union (KKFU). 9 VSLA groups have been formed under the project, meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members." : "Le projet d'autonomisation des femmes, d'accès à la finance et de génération de revenus au Ghana vise à répondre aux principaux défis auxquels est confronté le secteur du cacao au Ghana, notamment les faibles revenus, la faible productivité, le manque d'accès aux services financiers et la faible éducation financière — qui sont toutes des causes profondes du travail des enfants. Le projet est mis en œuvre dans les districts de cacao d'Akontombra, Fosukrom et Adabokrom dans la région du Nord-Ouest du Ghana en partenariat avec Sucden et l'Union des agriculteurs Kuapa Kokoo (KKFU). 9 groupes VSLA ont été formés dans le cadre du projet, se réunissant chaque semaine pour épargner, accorder des prêts et mener une formation sur les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) pour leurs membres."}
                language={language}
                onClick={() =>
                  openProjectModal({
                    title:
                      language === "en"
                        ? "SUCDEN VSLA Programme"
                        : "Programme VSLA SUCDEN",
                    location:
                      language === "en"
                        ? "Western North Region, Ghana"
                        : "Région du Nord-Ouest, Ghana",
                    officers: "2",
                    partner:
                      language === "en"
                        ? "Sucden, Kuapa Kokoo Farmers' Union (KKFU)"
                        : "Sucden, Union des agriculteurs Kuapa Kokoo (KKFU)",
                    period: "2024 –",
                    url:
                      language === "en"
                        ? "https://pdaghana.com/womens-empowerment-access-to-finance-and-income-generation-in-ghana/"
                        : "https://pdaghana.com/womens-empowerment-access-to-finance-and-income-generation-in-ghana/",
                    highlights:
                      language === "en"
                        ? [
                            "9 VSLA groups formed in Akontombra, Fosukrom and Adabokrom districts.",
                            "Focuses on women's economic empowerment and access to finance.",
                            "Weekly VSLA meetings combine savings, loans and GALS training.",
                          ]
                        : [
                            "9 groupes VSLA formés dans les districts d'Akontombra, Fosukrom et Adabokrom.",
                            "Met l'accent sur l'autonomisation économique des femmes et l'accès à la finance.",
                            "Les réunions hebdomadaires combinent épargne, prêts et formation GALS.",
                          ],
                    description:
                      language === "en"
                        ? "Addressing key cocoa sector challenges by strengthening women's earning capacity, financial literacy and access to savings and loans."
                        : "Répondre aux principaux défis du secteur du cacao en renforçant la capacité de gain des femmes, l'éducation financière et l'accès à l'épargne et au crédit.",
                    text:
                      language === "en"
                        ? "The Women's Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour. The project is being implemented in Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with Sucden and Kuapa Kokoo Farmers' Union (KKFU). 9 VSLA groups have been formed under the project, meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members."
                        : "Le projet d'autonomisation des femmes, d'accès à la finance et de génération de revenus au Ghana vise à répondre aux principaux défis auxquels est confronté le secteur du cacao au Ghana, notamment les faibles revenus, la faible productivité, le manque d'accès aux services financiers et la faible éducation financière — qui sont toutes des causes profondes du travail des enfants. Le projet est mis en œuvre dans les districts de cacao d'Akontombra, Fosukrom et Adabokrom dans la région du Nord-Ouest du Ghana en partenariat avec Sucden et l'Union des agriculteurs Kuapa Kokoo (KKFU). 9 groupes VSLA ont été formés dans le cadre du projet, se réunissant chaque semaine pour épargner, accorder des prêts et mener une formation sur les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) pour leurs membres.",
                  })
                }
              />
              <ProjectCard
                index={3}
                title={language === "en" ? "Enroute Project [Cote D'Ivoire]" : "Projet Enroute [Côte d'Ivoire]"}
                description={language === "en" ? "Testing interventions for supporting farmers' living income and implementing VSLA-CHILD and Empowering Better Decisions (EBD) trainings." : "Tester des interventions pour soutenir le revenu de subsistance des agriculteurs et mettre en œuvre les formations VSLA-CHILD et Empowering Better Decisions (EBD)."}
                location={language === "en" ? "Cote D'Ivoire" : "Côte d'Ivoire"}
                officers="2"
                text={language === "en" ? "The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions: Cash transfer only, Cash transfer and services, Only services. Under these three interventions, PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas. 25 VSLA-CHILD groups and 14 Empowering Better Decisions (EBD) groups have been formed under the project. 2 PDA field officers are working on the project. Empowering Better Decisions (EBD) is a methodology which was co-created by PDA and Beyond Beans to enable farmers to plan through cooperation for improved living conditions for the household. It is made up of four carefully selected Participatory Action Learning (PAL) modules and is expected to cause immediate and long-term change in the mindset of the participants. VSLA-CHILD is a child labour remediation initiative that aims to tackle child labour in cocoa-producing communities through a community-driven approach. Currently, the VSLA groups have continued with weekly meetings to save and repay loans while progressing through the GALS and child labour trainings. The groups have had their share outs in the first week of April." : "Le projet Enroute cherche à identifier les moyens les plus rentables de soutenir les agriculteurs pour gagner un revenu de subsistance. Le projet teste trois interventions : Transfert d'argent uniquement, Transfert d'argent et services, Services uniquement. Dans le cadre de ces trois interventions, PDA travaille avec des membres sélectionnés des ménages du groupe de transfert d'argent uniquement, pour les former sur une série de sessions appelées Empowering Better Decisions. PDA met également en œuvre la méthodologie VSLA-CHILD pour les deux groupes restants des zones d'intervention. 25 groupes VSLA-CHILD et 14 groupes Empowering Better Decisions (EBD) ont été formés dans le cadre du projet. 2 agents de terrain PDA travaillent sur le projet. Empowering Better Decisions (EBD) est une méthodologie co-créée par PDA et Beyond Beans pour permettre aux agriculteurs de planifier par la coopération pour améliorer les conditions de vie du ménage. Il est composé de quatre modules d'apprentissage de l'action participative (PAL) soigneusement sélectionnés et devrait provoquer un changement immédiat et à long terme dans l'état d'esprit des participants. VSLA-CHILD est une initiative de remédiation du travail des enfants qui vise à lutter contre le travail des enfants dans les communautés productrices de cacao grâce à une approche communautaire. Actuellement, les groupes VSLA ont continué avec des réunions hebdomadaires pour épargner et rembourser les prêts tout en progressant dans les formations GALS et sur le travail des enfants. Les groupes ont effectué leurs partages dans la première semaine d'avril."}
                language={language}
                onClick={() =>
                  openProjectModal({
                    title:
                      language === "en"
                        ? "Enroute Project [Cote D'Ivoire]"
                        : "Projet Enroute [Côte d'Ivoire]",
                    location: language === "en" ? "Cote D'Ivoire" : "Côte d'Ivoire",
                    officers: "2",
                    description:
                      language === "en"
                        ? "Testing interventions for supporting farmers' living income and implementing VSLA-CHILD and Empowering Better Decisions (EBD) trainings."
                        : "Tester des interventions pour soutenir le revenu de subsistance des agriculteurs et mettre en œuvre les formations VSLA-CHILD et Empowering Better Decisions (EBD).",
                    text:
                      language === "en"
                        ? "The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions: Cash transfer only, Cash transfer and services, Only services. Under these three interventions, PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas. 25 VSLA-CHILD groups and 14 Empowering Better Decisions (EBD) groups have been formed under the project. 2 PDA field officers are working on the project. Empowering Better Decisions (EBD) is a methodology which was co-created by PDA and Beyond Beans to enable farmers to plan through cooperation for improved living conditions for the household. It is made up of four carefully selected Participatory Action Learning (PAL) modules and is expected to cause immediate and long-term change in the mindset of the participants. VSLA-CHILD is a child labour remediation initiative that aims to tackle child labour in cocoa-producing communities through a community-driven approach. Currently, the VSLA groups have continued with weekly meetings to save and repay loans while progressing through the GALS and child labour trainings. The groups have had their share outs in the first week of April."
                        : "Le projet Enroute cherche à identifier les moyens les plus rentables de soutenir les agriculteurs pour gagner un revenu de subsistance. Le projet teste trois interventions : Transfert d'argent uniquement, Transfert d'argent et services, Services uniquement. Dans le cadre de ces trois interventions, PDA travaille avec des membres sélectionnés des ménages du groupe de transfert d'argent uniquement, pour les former sur une série de sessions appelées Empowering Better Decisions. PDA met également en œuvre la méthodologie VSLA-CHILD pour les deux groupes restants des zones d'intervention. 25 groupes VSLA-CHILD et 14 groupes Empowering Better Decisions (EBD) ont été formés dans le cadre du projet. 2 agents de terrain PDA travaillent sur le projet. Empowering Better Decisions (EBD) est une méthodologie co-créée par PDA et Beyond Beans pour permettre aux agriculteurs de planifier par la coopération pour améliorer les conditions de vie du ménage. Il est composé de quatre modules d'apprentissage de l'action participative (PAL) soigneusement sélectionnés et devrait provoquer un changement immédiat et à long terme dans l'état d'esprit des participants. VSLA-CHILD est une initiative de remédiation du travail des enfants qui vise à lutter contre le travail des enfants dans les communautés productrices de cacao grâce à une approche communautaire. Actuellement, les groupes VSLA ont continué avec des réunions hebdomadaires pour épargner et rembourser les prêts tout en progressant dans les formations GALS et sur le travail des enfants. Les groupes ont effectué leurs partages dans la première semaine d'avril.",
                  })
                }
              />
              <ProjectCard
                index={4}
                title={language === "en" ? "ECOM/NCP VSLA-GALS Programme" : "Programme ECOM/NCP VSLA-GALS"}
                description={language === "en" ? "Building economic and social capacities of cocoa farmers in Ghana, focusing on financial inclusion and gender empowerment." : "Renforcer les capacités économiques et sociales des producteurs de cacao au Ghana, en se concentrant sur l'inclusion financière et l'autonomisation des femmes."}
                location={language === "en" ? "Eastern & Central Regions, Ghana" : "Régions de l'Est et du Centre, Ghana"}
                officers="4"
                text={language === "en" ? "The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Nestle Cocoa Plan (NCP) and ECOM. 40 VSLAs are being run under this project, with 4 PDA field officers assigned to the project. The project methodology incorporated Gender Action Learning Systems (GALS) into VSLAs with the overall objective to improve savings culture, access to micro-credit, improve income, wellbeing and gender justice in household decision making. Between January and March 2024, the VSLA groups stopped granting loans and focused on loan repayments to ensure that all loans are repaid by the time of the groups' share out. By the end of March, all 40 groups had their share outs. There were also some visitations by partners to two communities each in the four project districts (Suhum, Asamankese, Breman Asikuma and Akim Oda). The groups will be handed over to ECOM after they start their second cycle." : "Le projet ECOM/NCP VSLA-GALS est un projet d'inclusion financière et d'autonomisation des femmes qui vise à renforcer les capacités économiques et sociales des producteurs de cacao dans les communautés sélectionnées des régions de l'Est et du Centre du Ghana grâce aux groupes d'associations villageoises d'épargne et de crédit (VSLA). Le projet est mis en œuvre par Participatory Development Associates (PDA) en partenariat avec Nestle Cocoa Plan (NCP) et ECOM. 40 VSLA sont gérés dans le cadre de ce projet, avec 4 agents de terrain PDA assignés au projet. La méthodologie du projet a intégré les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) dans les VSLA avec l'objectif global d'améliorer la culture de l'épargne, l'accès au micro-crédit, améliorer les revenus, le bien-être et la justice de genre dans la prise de décision des ménages. Entre janvier et mars 2024, les groupes VSLA ont cessé d'accorder des prêts et se sont concentrés sur les remboursements de prêts pour s'assurer que tous les prêts sont remboursés au moment du partage des groupes. D'ici la fin mars, les 40 groupes ont effectué leurs partages. Il y a également eu des visites de partenaires dans deux communautés chacune dans les quatre districts du projet (Suhum, Asamankese, Breman Asikuma et Akim Oda). Les groupes seront remis à ECOM après avoir commencé leur deuxième cycle."}
                language={language}
                onClick={() =>
                  openProjectModal({
                    title:
                      language === "en"
                        ? "ECOM/NCP VSLA-GALS Programme"
                        : "Programme ECOM/NCP VSLA-GALS",
                    location:
                      language === "en"
                        ? "Eastern & Central Regions, Ghana"
                        : "Régions de l'Est et du Centre, Ghana",
                    officers: "4",
                    description:
                      language === "en"
                        ? "Building economic and social capacities of cocoa farmers in Ghana, focusing on financial inclusion and gender empowerment."
                        : "Renforcer les capacités économiques et sociales des producteurs de cacao au Ghana, en se concentrant sur l'inclusion financière et l'autonomisation des femmes.",
                    text:
                      language === "en"
                        ? "The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Nestle Cocoa Plan (NCP) and ECOM. 40 VSLAs are being run under this project, with 4 PDA field officers assigned to the project. The project methodology incorporated Gender Action Learning Systems (GALS) into VSLAs with the overall objective to improve savings culture, access to micro-credit, improve income, wellbeing and gender justice in household decision making. Between January and March 2024, the VSLA groups stopped granting loans and focused on loan repayments to ensure that all loans are repaid by the time of the groups' share out. By the end of March, all 40 groups had their share outs. There were also some visitations by partners to two communities each in the four project districts (Suhum, Asamankese, Breman Asikuma and Akim Oda). The groups will be handed over to ECOM after they start their second cycle."
                        : "Le projet ECOM/NCP VSLA-GALS est un projet d'inclusion financière et d'autonomisation des femmes qui vise à renforcer les capacités économiques et sociales des producteurs de cacao dans les communautés sélectionnées des régions de l'Est et du Centre du Ghana grâce aux groupes d'associations villageoises d'épargne et de crédit (VSLA). Le projet est mis en œuvre par Participatory Development Associates (PDA) en partenariat avec Nestle Cocoa Plan (NCP) et ECOM. 40 VSLA sont gérés dans le cadre de ce projet, avec 4 agents de terrain PDA assignés au projet. La méthodologie du projet a intégré les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) dans les VSLA avec l'objectif global d'améliorer la culture de l'épargne, l'accès au micro-crédit, améliorer les revenus, le bien-être et la justice de genre dans la prise de décision des ménages. Entre janvier et mars 2024, les groupes VSLA ont cessé d'accorder des prêts et se sont concentrés sur les remboursements de prêts pour s'assurer que tous les prêts sont remboursés au moment du partage des groupes. D'ici la fin mars, les 40 groupes ont effectué leurs partages. Il y a également eu des visites de partenaires dans deux communautés chacune dans les quatre districts du projet (Suhum, Asamankese, Breman Asikuma et Akim Oda). Les groupes seront remis à ECOM après avoir commencé leur deuxième cycle.",
                  })
                }
              />
              <ProjectCard
                index={5}
                title={language === "en" ? "New ECOM VSLA GALS Project" : "Nouveau projet ECOM VSLA GALS"}
                description={language === "en" ? "Economic and social empowerment through VSLA and GALS training for cocoa farmers across multiple regions in Ghana." : "Autonomisation économique et sociale grâce à la formation VSLA et GALS pour les producteurs de cacao dans plusieurs régions du Ghana."}
                location={language === "en" ? "Eastern, Central, Ashanti, Western North, Oti Regions, Ghana" : "Régions de l'Est, du Centre, d'Ashanti, du Nord-Ouest, d'Oti, Ghana"}
                officers="4"
                text={language === "en" ? "The VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities, Ofoase and Abenase in the Eastern Region, Dunkwa in the Central Region, Asankaragua in the Western North Region, Offinso in the Ashanti Region and Papase in Oti Region through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Lindt & Sprüngli Farming Program and ECOM. 49 VSLA groups have been formed under the project." : "Le projet VSLA-GALS est un projet d'inclusion financière et d'autonomisation des femmes qui vise à renforcer les capacités économiques et sociales des producteurs de cacao dans les communautés sélectionnées, Ofoase et Abenase dans la région de l'Est, Dunkwa dans la région du Centre, Asankaragua dans la région du Nord-Ouest, Offinso dans la région d'Ashanti et Papase dans la région d'Oti grâce aux groupes d'associations villageoises d'épargne et de crédit (VSLA). Le projet est mis en œuvre par Participatory Development Associates (PDA) en partenariat avec le programme agricole Lindt & Sprüngli et ECOM. 49 groupes VSLA ont été formés dans le cadre du projet."}
                language={language}
                onClick={() =>
                  openProjectModal({
                    title:
                      language === "en"
                        ? "New ECOM VSLA GALS Project"
                        : "Nouveau projet ECOM VSLA GALS",
                    location:
                      language === "en"
                        ? "Eastern, Central, Ashanti, Western North, Oti Regions, Ghana"
                        : "Régions de l'Est, du Centre, d'Ashanti, du Nord-Ouest, d'Oti, Ghana",
                    officers: "4",
                    description:
                      language === "en"
                        ? "Economic and social empowerment through VSLA and GALS training for cocoa farmers across multiple regions in Ghana."
                        : "Autonomisation économique et sociale grâce à la formation VSLA et GALS pour les producteurs de cacao dans plusieurs régions du Ghana.",
                    text:
                      language === "en"
                        ? "The VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities, Ofoase and Abenase in the Eastern Region, Dunkwa in the Central Region, Asankaragua in the Western North Region, Offinso in the Ashanti Region and Papase in Oti Region through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Lindt & Sprüngli Farming Program and ECOM. 49 VSLA groups have been formed under the project."
                        : "Le projet VSLA-GALS est un projet d'inclusion financière et d'autonomisation des femmes qui vise à renforcer les capacités économiques et sociales des producteurs de cacao dans les communautés sélectionnées, Ofoase et Abenase dans la région de l'Est, Dunkwa dans la région du Centre, Asankaragua dans la région du Nord-Ouest, Offinso dans la région d'Ashanti et Papase dans la région d'Oti grâce aux groupes d'associations villageoises d'épargne et de crédit (VSLA). Le projet est mis en œuvre par Participatory Development Associates (PDA) en partenariat avec le programme agricole Lindt & Sprüngli et ECOM. 49 groupes VSLA ont été formés dans le cadre du projet.",
                  })
                }
              />
              <ProjectCard
                index={6}
                title={language === "en" ? "My Life, My Rights" : "Ma vie, mes droits"}
                description={
                  language === "en"
                    ? "Strengthening child protection, education quality and financial inclusion through VSLAs in cocoa-growing communities."
                    : "Renforcer la protection de l'enfant, la qualité de l'éducation et l'inclusion financière par les VSLA dans les communautés productrices de cacao."
                }
                location={language === "en" ? "Ashanti, Ahafo & Western North Regions, Ghana" : "Régions Ashanti, Ahafo et Nord-Ouest, Ghana"}
                officers="4"
                text={
                  language === "en"
                    ? "My Life, My Rights is a child protection and financial inclusion project implemented by Right To Play (RTP) and Participatory Development Associates (PDA) in selected cocoa communities in the Ashanti and Ahafo regions, in partnership with Barry Callebaut (Nyonkopa Cocoa). The project focuses on improving the quality of basic education and child protection in 50 communities, targeting 17,000 children, 10,000 parents, 400 teachers and 40 GES officials across seven districts in the Ashanti, Ahafo and Western North regions. PDA’s core role is to form 40 VSLA groups and train them using GALS, Farmer Business School and business incubation modules to build resilient, income‑generating households. In the first year, 30 new VSLA groups were formed alongside 10 existing groups, all integrating GALS components. Year two will focus on Farmer Business School training to deepen beneficiaries’ business and farming skills."
                    : "« Ma vie, mes droits » est un projet de protection de l'enfance et d'inclusion financière mis en œuvre par Right To Play (RTP) et Participatory Development Associates (PDA) dans des communautés cacaoyères sélectionnées des régions Ashanti et Ahafo, en partenariat avec Barry Callebaut (Nyonkopa Cocoa). Le projet vise à améliorer la qualité de l'éducation de base et la protection de l'enfance dans 50 communautés, en ciblant 17 000 enfants, 10 000 parents, 400 enseignants et 40 responsables du Service de l'éducation du Ghana (GES) dans sept districts des régions Ashanti, Ahafo et Nord-Ouest. Le rôle principal de PDA est de former 40 groupes VSLA et de les former en utilisant les modules GALS, Farmer Business School et incubation d'entreprises pour renforcer la résilience des ménages et leurs activités génératrices de revenus. Au cours de la première année, 30 nouveaux groupes VSLA ont été formés, en plus de 10 groupes existants, tous intégrant des composantes GALS. La deuxième année se concentrera sur la formation Farmer Business School afin d'approfondir les compétences commerciales et agricoles des bénéficiaires."
                }
                language={language}
                onClick={() =>
                  openProjectModal({
                    title: language === "en" ? "My Life, My Rights" : "Ma vie, mes droits",
                    location:
                      language === "en"
                        ? "Ashanti, Ahafo & Western North Regions, Ghana"
                        : "Régions Ashanti, Ahafo et Nord-Ouest, Ghana",
                    officers: "4",
                    partner:
                      language === "en"
                        ? "Right To Play, Barry Callebaut (Nyonkopa Cocoa), Beyond Beans"
                        : "Right To Play, Barry Callebaut (Nyonkopa Cocoa), Beyond Beans",
                    period: "2025 –",
                    url:
                      language === "en"
                        ? "https://pdaghana.com/my-life-my-right/"
                        : "https://pdaghana.com/my-life-my-right/",
                    highlights:
                      language === "en"
                        ? [
                            "Implemented in 50 cocoa communities across 7 districts in Ashanti, Ahafo and Western North.",
                            "Targets 17,000 children, 10,000 parents, 400 teachers and 40 GES officials.",
                            "40 VSLA groups to be formed and trained with GALS, Farmer Business School and business incubation.",
                          ]
                        : [
                            "Mis en œuvre dans 50 communautés cacaoyères de 7 districts des régions Ashanti, Ahafo et Nord-Ouest.",
                            "Cible 17 000 enfants, 10 000 parents, 400 enseignants et 40 responsables du GES.",
                            "40 groupes VSLA doivent être formés et formés avec GALS, Farmer Business School et incubation d'entreprises.",
                          ],
                    description:
                      language === "en"
                        ? "A child protection and VSLA‑based financial inclusion project that strengthens education quality, community child protection systems and household resilience."
                        : "Un projet de protection de l'enfance et d'inclusion financière basé sur les VSLA qui renforce la qualité de l'éducation, les systèmes communautaires de protection de l'enfance et la résilience des ménages.",
                    text:
                      language === "en"
                        ? "My Life, My Rights is a project being implemented by Right To Play (RTP) and Participatory Development Associates (PDA) in selected cocoa communities in the Ashanti and Ahafo regions, in partnership with Barry Callebaut (Nyonkopa Cocoa). The project focuses on improving the quality of education and child protection, and will take place in 50 communities, targeting 17,000 children, 10,000 parents, 400 teachers, and 40 GES officials in 7 districts across the Ashanti, Ahafo, and Western North regions. PDA’s main activity on the project is to form 40 VSLA groups and train them on GALS, Farmer Business School and business incubation. As part of this collaboration, PDA has supported the training of Community Child Protection Committees (CCPCs) on child rights, child labour, financial literacy, safeguarding and action planning. In the first year, 30 new VSLA groups have been formed alongside 10 existing groups, all integrating Gender Action Learning System (GALS) components, with ongoing monitoring and support. The second year of the project will focus on Farmer Business School training to equip beneficiaries with practical business and farming skills to further strengthen household resilience."
                        : "« Ma vie, mes droits » est un projet mis en œuvre par Right To Play (RTP) et Participatory Development Associates (PDA) dans des communautés cacaoyères sélectionnées des régions Ashanti et Ahafo, en partenariat avec Barry Callebaut (Nyonkopa Cocoa). Le projet se concentre sur l'amélioration de la qualité de l'éducation et de la protection de l'enfance et se déroulera dans 50 communautés, en ciblant 17 000 enfants, 10 000 parents, 400 enseignants et 40 responsables du GES dans sept districts des régions Ashanti, Ahafo et Nord-Ouest. L'activité principale de PDA dans le cadre du projet est de former 40 groupes VSLA et de les former sur GALS, Farmer Business School et l'incubation d'entreprises. Dans le cadre de cette collaboration, PDA a soutenu la formation des comités communautaires de protection de l'enfance (CCPC) sur les droits de l'enfant, le travail des enfants, l'éducation financière, la sauvegarde et l'élaboration de plans d'action. Au cours de la première année, 30 nouveaux groupes VSLA ont été formés, ainsi que 10 groupes existants, tous intégrant des composantes GALS, avec un suivi et un accompagnement continus. La deuxième année du projet se concentrera sur la formation Farmer Business School afin de doter les bénéficiaires de compétences pratiques en affaires et en agriculture pour renforcer davantage la résilience des ménages.",
                  })
                }
              />
              <ProjectCard
                index={7}
                title={language === "en" ? "VSLA-GALS Project - Cameroon" : "Projet VSLA-GALS - Cameroun"}
                description={
                  language === "en"
                    ? "Creating VSLA groups in Obala district to train members on savings, investment, and family harmony through GALS-IGA training."
                    : "Création de groupes VSLA dans le district d'Obala pour former les membres à l'épargne, à l'investissement et à l'harmonie familiale grâce à la formation GALS-IGA."
                }
                location={language === "en" ? "Obala District, Cameroon" : "District d'Obala, Cameroun"}
                officers="7"
                text={
                  language === "en"
                    ? "The VSLA-GALS Project in Cameroon aims to create 10 VSLA groups in the district of Obala, training members on how to save and use their money to invest, and teaching them how to live happily with their loved ones. 11 groups were created in 7 communities with a total of 280 members (111 males and 169 females). Activities carried out within the cycle include savings, social fund contribution, loan taking and repayment, GALS training and implementation, share outs, and launch of the second cycle. 22 champions underwent GALS-IGA training in May, who later took what they learnt to their various groups. The training helped farmers first to mend their family bonds, and secondly, IGA helped them to get creative with little project ideas. The loans they took after the training were to realize the projects they conceived. The members are still implementing what they gathered from the training, and when they face a difficulty, they bring it to the group for assistance. All the major objectives of this project were met. The farmers even commented that the VSLA groups made things easier on them this year based on the aspect of finding funds to take care of their farms, send their children to school, and also for medical emergencies. In all the 7 communities, at least 1 extra group (mostly 2) has been formed at the beginning of the second cycle. One of the communities is forming 3 more groups. Other communities in the district of Obala are requesting for the project after seeing how it is positively affecting their neighboring communities."
                    : "Le projet VSLA-GALS au Cameroun vise à créer 10 groupes VSLA dans le district d'Obala, en formant les membres sur la façon d'épargner et d'utiliser leur argent pour investir, et en leur apprenant à vivre heureux avec leurs proches. 11 groupes ont été créés dans 7 communautés avec un total de 280 membres (111 hommes et 169 femmes). Les activités menées dans le cycle comprennent l'épargne, la contribution au fonds social, la prise et le remboursement de prêts, la formation et la mise en œuvre GALS, les partages et le lancement du deuxième cycle. 22 champions ont suivi une formation GALS-IGA en mai, qui ont ensuite transmis ce qu'ils ont appris à leurs différents groupes. La formation a d'abord aidé les agriculteurs à réparer leurs liens familiaux, et deuxièmement, l'IGA les a aidés à être créatifs avec de petites idées de projets. Les prêts qu'ils ont pris après la formation étaient pour réaliser les projets qu'ils avaient conçus. Les membres mettent toujours en œuvre ce qu'ils ont appris de la formation, et lorsqu'ils rencontrent une difficulté, ils l'apportent au groupe pour obtenir de l'aide. Tous les objectifs majeurs de ce projet ont été atteints. Les agriculteurs ont même commenté que les groupes VSLA ont facilité les choses pour eux cette année en ce qui concerne la recherche de fonds pour prendre soin de leurs fermes, envoyer leurs enfants à l'école et aussi pour les urgences médicales. Dans les 7 communautés, au moins 1 groupe supplémentaire (principalement 2) a été formé au début du deuxième cycle. L'une des communautés forme 3 groupes supplémentaires. D'autres communautés du district d'Obala demandent le projet après avoir vu comment il affecte positivement leurs communautés voisines."
                }
                language={language}
                onClick={() =>
                  openProjectModal({
                    title: language === "en" ? "VSLA-GALS Project - Cameroon" : "Projet VSLA-GALS - Cameroun",
                    location: language === "en" ? "Obala District, Cameroon" : "District d'Obala, Cameroun",
                    officers: "7",
                    partner: language === "en" ? "SOCAM 5C" : "SOCAM 5C",
                    period: language === "en" ? "Ongoing" : "En cours",
                    description:
                      language === "en"
                        ? "Creating VSLA groups in Obala district to train members on savings, investment, and family harmony through GALS-IGA training."
                        : "Création de groupes VSLA dans le district d'Obala pour former les membres à l'épargne, à l'investissement et à l'harmonie familiale grâce à la formation GALS-IGA.",
                    highlights:
                      language === "en"
                        ? [
                            "11 groups created in 7 communities with 280 total members (111 males, 169 females).",
                            "22 champions underwent GALS-IGA training in May and cascaded learning to their groups.",
                            "Activities include savings, social fund contribution, loans, GALS training, and share outs.",
                            "All major project objectives were met with positive community feedback.",
                            "Additional groups formed in all 7 communities at the start of the second cycle.",
                            "Other communities in Obala district are requesting the project after seeing positive impacts.",
                          ]
                        : [
                            "11 groupes créés dans 7 communautés avec 280 membres au total (111 hommes, 169 femmes).",
                            "22 champions ont suivi une formation GALS-IGA en mai et ont transmis l'apprentissage à leurs groupes.",
                            "Les activités comprennent l'épargne, la contribution au fonds social, les prêts, la formation GALS et les partages.",
                            "Tous les objectifs majeurs du projet ont été atteints avec des commentaires positifs de la communauté.",
                            "Des groupes supplémentaires ont été formés dans les 7 communautés au début du deuxième cycle.",
                            "D'autres communautés du district d'Obala demandent le projet après avoir vu les impacts positifs.",
                          ],
                    text:
                      language === "en"
                        ? "The VSLA-GALS Project in Cameroon aims to create 10 VSLA groups in the district of Obala, training members on how to save and use their money to invest, and teaching them how to live happily with their loved ones. 11 groups were created in 7 communities with a total of 280 members (111 males and 169 females). Activities carried out within the cycle include savings, social fund contribution, loan taking and repayment, GALS training and implementation, share outs, and launch of the second cycle. 22 champions underwent GALS-IGA training in May, who later took what they learnt to their various groups. The training helped farmers first to mend their family bonds, and secondly, IGA helped them to get creative with little project ideas. The loans they took after the training were to realize the projects they conceived. The members are still implementing what they gathered from the training, and when they face a difficulty, they bring it to the group for assistance. All the major objectives of this project were met. The farmers even commented that the VSLA groups made things easier on them this year based on the aspect of finding funds to take care of their farms, send their children to school, and also for medical emergencies. In all the 7 communities, at least 1 extra group (mostly 2) has been formed at the beginning of the second cycle. One of the communities is forming 3 more groups. Other communities in the district of Obala are requesting for the project after seeing how it is positively affecting their neighboring communities."
                        : "Le projet VSLA-GALS au Cameroun vise à créer 10 groupes VSLA dans le district d'Obala, en formant les membres sur la façon d'épargner et d'utiliser leur argent pour investir, et en leur apprenant à vivre heureux avec leurs proches. 11 groupes ont été créés dans 7 communautés avec un total de 280 membres (111 hommes et 169 femmes). Les activités menées dans le cycle comprennent l'épargne, la contribution au fonds social, la prise et le remboursement de prêts, la formation et la mise en œuvre GALS, les partages et le lancement du deuxième cycle. 22 champions ont suivi une formation GALS-IGA en mai, qui ont ensuite transmis ce qu'ils ont appris à leurs différents groupes. La formation a d'abord aidé les agriculteurs à réparer leurs liens familiaux, et deuxièmement, l'IGA les a aidés à être créatifs avec de petites idées de projets. Les prêts qu'ils ont pris après la formation étaient pour réaliser les projets qu'ils avaient conçus. Les membres mettent toujours en œuvre ce qu'ils ont appris de la formation, et lorsqu'ils rencontrent une difficulté, ils l'apportent au groupe pour obtenir de l'aide. Tous les objectifs majeurs de ce projet ont été atteints. Les agriculteurs ont même commenté que les groupes VSLA ont facilité les choses pour eux cette année en ce qui concerne la recherche de fonds pour prendre soin de leurs fermes, envoyer leurs enfants à l'école et aussi pour les urgences médicales. Dans les 7 communautés, au moins 1 groupe supplémentaire (principalement 2) a été formé au début du deuxième cycle. L'une des communautés forme 3 groupes supplémentaires. D'autres communautés du district d'Obala demandent le projet après avoir vu comment il affecte positivement leurs communautés voisines.",
                  })
                }
              />
              {/* Add more ProjectCards as needed */}
            </div>
          </div>
        </section>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
              <button
                type="button"
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/90 text-gray-700 hover:bg-white hover:text-gray-900 shadow-md text-2xl font-bold leading-none z-20"
                aria-label={language === "en" ? "Close" : "Fermer"}
              >
                &times;
              </button>

              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-orange via-orange/90 to-red-500 rounded-t-2xl px-6 md:px-8 pt-8 pb-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-16 -left-8 w-52 h-52 bg-white/10 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80">
                    {language === "en" ? "VSLA Programme" : "Programme VSLA"}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm">
                    <span className="inline-flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{selectedProject.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                      <span>
                        {selectedProject.officers}{" "}
                        {language === "en"
                          ? "Field Officers"
                          : "Agents de terrain"}
                      </span>
                    </span>
                    {selectedProject.partner && (
                      <span className="inline-flex items-center gap-1.5 bg-black/15 rounded-full px-3 py-1">
                        <span className="font-semibold">
                          {language === "en" ? "Partner:" : "Partenaire :"}
                        </span>
                        <span>{selectedProject.partner}</span>
                      </span>
                    )}
                    {selectedProject.period && (
                      <span className="inline-flex items-center gap-1.5 bg-black/15 rounded-full px-3 py-1">
                        <span className="font-semibold">
                          {language === "en" ? "Period:" : "Période :"}
                        </span>
                        <span>{selectedProject.period}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 pt-4">
                <div className="grid md:grid-cols-5 gap-6 md:gap-8">
                  {/* Snapshot / Highlights */}
                  <div className="md:col-span-2 space-y-4">
                    {selectedProject.description && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                          {language === "en" ? "Snapshot" : "Aperçu"}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>
                    )}

                    {selectedProject.highlights &&
                      selectedProject.highlights.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                            {language === "en" ? "Key Highlights" : "Points clés"}
                          </h4>
                          <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm">
                            {selectedProject.highlights.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                  </div>

                  {/* Detailed Narrative */}
                  <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-gray-200 md:pl-6 pt-4 md:pt-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      {language === "en" ? "How the project works" : "Comment le projet fonctionne"}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line break-words">
                      {selectedProject.text}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={closeProjectModal}
                    className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-orange text-white text-sm md:text-base font-semibold hover:bg-orange/90 shadow-md hover:shadow-lg transition-colors"
                  >
                    {language === "en" ? "Close" : "Fermer"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Success Stories Slider */}
        <section ref={storiesRef} className={`py-16 px-8 bg-gradient-to-b from-white to-gray-50 text-center ${storiesVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {t.storiesOfChange.split(" ")[0]} <span className="text-orange">{t.storiesOfChange.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              {t.storiesDescription}
            </p>
            <div className="mt-12">
              <SuccessStories />
            </div>
            <div className="mt-10">
              <Link
                to="/vsla-impact-stories"
                className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg hover:bg-orange/90 text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <span>{t.viewImpactStories || "View Impact Stories"}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
    </section>
  );
};

export default VSLA;
