import React from "react";
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

const ProjectCard = ({ title, description, location, officers, text, language, index }) => {
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
    <div className="flip-card h-full">
      <div className="flip-card-inner h-full">
        {/* Front of the card */}
        <div className="flip-card-front border-0 rounded-2xl p-0 shadow-xl font-poppins hover:shadow-2xl transition-all duration-300 overflow-hidden w-full relative group">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
            {/* Icon */}
            <div className="mb-4 flex items-start justify-between">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/30 transition-all group-hover:scale-110">
                <img src={icon} alt="Project" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-white text-xs font-bold">{officers} {t.fieldOfficers}</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-white leading-tight break-words overflow-wrap-anywhere drop-shadow-lg">{title}</h3>
            
            {/* Description */}
            <p className="text-white/90 mb-4 leading-relaxed text-xs sm:text-sm md:text-base break-words overflow-wrap-anywhere flex-1 drop-shadow">{description}</p>
            
            {/* Location Badge */}
            <div className="mt-auto pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white text-xs sm:text-sm font-semibold break-words overflow-wrap-anywhere">{location}</p>
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back border-2 border-orange rounded-2xl p-4 sm:p-6 shadow-lg bg-gradient-to-br from-orange/5 to-orange/10 font-poppins overflow-y-auto w-full">
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words overflow-wrap-anywhere">{text}</p>
        </div>
      </div>
    </div>
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
            <div className={`grid md:grid-cols-3 gap-8 ${whoWeAreVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
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
                text={language === "en" ? "The Nestlé Income Accelerator Program (IAP) aims to improve the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. PDA, in partnership with Beyond Beans, formed 77 VSLA groups under the project in Ivory Coast. Between January to March 2024, 17 of the VSLA groups had their share outs and completed Gender Action Learning Systems (GALS) training for their members. This training employs participatory techniques to sensitize participants on gender issues and increase their financial literacy, among other benefits." : "Le programme Nestlé Income Accelerator (IAP) vise à améliorer les moyens de subsistance des familles de producteurs de cacao, tout en faisant progresser les pratiques agricoles régénératrices. PDA, en partenariat avec Beyond Beans, a formé 77 groupes VSLA dans le cadre du projet en Côte d'Ivoire. Entre janvier et mars 2024, 17 des groupes VSLA ont effectué leurs partages et terminé la formation sur les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) pour leurs membres. Cette formation utilise des techniques participatives pour sensibiliser les participants aux questions de genre et augmenter leur éducation financière, entre autres avantages."}
                language={language}
              />
              <ProjectCard
                index={1}
                title={language === "en" ? "Nestle Income Accelerator Programme [Ghana]" : "Programme Nestlé Income Accelerator [Ghana]"}
                description={language === "en" ? "Income diversification and restructuring of VSLA groups for cocoa-farming communities." : "Diversification des revenus et restructuration des groupes VSLA pour les communautés productrices de cacao."}
                location="Ghana"
                officers="7"
                text={language === "en" ? "In Ghana, the programme still has the overall goal of improving the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. Specifically, however, there are four pillars (the promotion of school enrolment; pruning; agroforestry; and income diversification). PDA is engaged for the pillar of income diversification, through the formation of VSLA groups for selected program beneficiaries and the restructuring of existing VSLA groups which have IAP beneficiaries. Currently, project communities have been sensitized, and field officers have begun engaging interested project beneficiaries for the formation and restructuring of VSLA groups." : "Au Ghana, le programme a toujours pour objectif global d'améliorer les moyens de subsistance des familles de producteurs de cacao, tout en faisant progresser les pratiques agricoles régénératrices. Cependant, il y a quatre piliers spécifiques (la promotion de la scolarisation ; la taille ; l'agroforesterie ; et la diversification des revenus). PDA est engagé pour le pilier de la diversification des revenus, grâce à la formation de groupes VSLA pour les bénéficiaires sélectionnés du programme et la restructuration des groupes VSLA existants qui ont des bénéficiaires IAP. Actuellement, les communautés du projet ont été sensibilisées et les agents de terrain ont commencé à engager les bénéficiaires intéressés du projet pour la formation et la restructuration des groupes VSLA."}
                language={language}
              />
              <ProjectCard
                index={2}
                title={language === "en" ? "SUCDEN VSLA Programme" : "Programme VSLA SUCDEN"}
                description={language === "en" ? "Addressing cocoa sector challenges, improving women's earning capacity, and promoting financial literacy in Ghana." : "Répondre aux défis du secteur du cacao, améliorer la capacité de gain des femmes et promouvoir l'éducation financière au Ghana."}
                location={language === "en" ? "Western North Region, Ghana" : "Région du Nord-Ouest, Ghana"}
                officers="2"
                text={language === "en" ? "The Women's Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour. The project is being implemented in Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with Sucden and Kuapa Kokoo Farmers' Union (KKFU). 9 VSLA groups have been formed under the project, meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members." : "Le projet d'autonomisation des femmes, d'accès à la finance et de génération de revenus au Ghana vise à répondre aux principaux défis auxquels est confronté le secteur du cacao au Ghana, notamment les faibles revenus, la faible productivité, le manque d'accès aux services financiers et la faible éducation financière — qui sont toutes des causes profondes du travail des enfants. Le projet est mis en œuvre dans les districts de cacao d'Akontombra, Fosukrom et Adabokrom dans la région du Nord-Ouest du Ghana en partenariat avec Sucden et l'Union des agriculteurs Kuapa Kokoo (KKFU). 9 groupes VSLA ont été formés dans le cadre du projet, se réunissant chaque semaine pour épargner, accorder des prêts et mener une formation sur les systèmes d'apprentissage de l'action pour l'égalité des sexes (GALS) pour leurs membres."}
                language={language}
              />
              <ProjectCard
                index={3}
                title={language === "en" ? "Enroute Project [Cote D'Ivoire]" : "Projet Enroute [Côte d'Ivoire]"}
                description={language === "en" ? "Testing interventions for supporting farmers' living income and implementing VSLA-CHILD and Empowering Better Decisions (EBD) trainings." : "Tester des interventions pour soutenir le revenu de subsistance des agriculteurs et mettre en œuvre les formations VSLA-CHILD et Empowering Better Decisions (EBD)."}
                location={language === "en" ? "Cote D'Ivoire" : "Côte d'Ivoire"}
                officers="2"
                text={language === "en" ? "The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions: Cash transfer only, Cash transfer and services, Only services. Under these three interventions, PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas. 25 VSLA-CHILD groups and 14 Empowering Better Decisions (EBD) groups have been formed under the project." : "Le projet Enroute cherche à identifier les moyens les plus rentables de soutenir les agriculteurs pour gagner un revenu de subsistance. Le projet teste trois interventions : Transfert d'argent uniquement, Transfert d'argent et services, Services uniquement. Dans le cadre de ces trois interventions, PDA travaille avec des membres sélectionnés des ménages du groupe de transfert d'argent uniquement, pour les former sur une série de sessions appelées Empowering Better Decisions. PDA met également en œuvre la méthodologie VSLA-CHILD pour les deux groupes restants des zones d'intervention. 25 groupes VSLA-CHILD et 14 groupes Empowering Better Decisions (EBD) ont été formés dans le cadre du projet."}
                language={language}
              />
              <ProjectCard
                index={4}
                title={language === "en" ? "ECOM/NCP VSLA-GALS Programme" : "Programme ECOM/NCP VSLA-GALS"}
                description={language === "en" ? "Building economic and social capacities of cocoa farmers in Ghana, focusing on financial inclusion and gender empowerment." : "Renforcer les capacités économiques et sociales des producteurs de cacao au Ghana, en se concentrant sur l'inclusion financière et l'autonomisation des femmes."}
                location={language === "en" ? "Eastern & Central Regions, Ghana" : "Régions de l'Est et du Centre, Ghana"}
                officers="4"
                text={language === "en" ? "The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Nestle Cocoa Plan (NCP) and ECOM. 40 VSLAs are being run under this project" : "Le projet ECOM/NCP VSLA-GALS est un projet d'inclusion financière et d'autonomisation des femmes qui vise à renforcer les capacités économiques et sociales des producteurs de cacao dans les communautés sélectionnées des régions de l'Est et du Centre du Ghana grâce aux groupes d'associations villageoises d'épargne et de crédit (VSLA). Le projet est mis en œuvre par Participatory Development Associates (PDA) en partenariat avec Nestle Cocoa Plan (NCP) et ECOM. 40 VSLA sont gérés dans le cadre de ce projet"}
                language={language}
              />
              <ProjectCard
                index={5}
                title={language === "en" ? "New ECOM VSLA GALS Project" : "Nouveau projet ECOM VSLA GALS"}
                description={language === "en" ? "Economic and social empowerment through VSLA and GALS training for cocoa farmers across multiple regions in Ghana." : "Autonomisation économique et sociale grâce à la formation VSLA et GALS pour les producteurs de cacao dans plusieurs régions du Ghana."}
                location={language === "en" ? "Eastern, Central, Ashanti, Western North, Oti Regions, Ghana" : "Régions de l'Est, du Centre, d'Ashanti, du Nord-Ouest, d'Oti, Ghana"}
                officers="4"
                text={language === "en" ? "The VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities, Ofoase and Abenase in the Eastern Region, Dunkwa in the Central Region, Asankaragua in the Western North Region, Offinso in the Ashanti Region and Papase in Oti Region through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Lindt & Sprüngli Farming Program and ECOM. 49 VSLA groups have been formed under the project." : "Le projet VSLA-GALS est un projet d'inclusion financière et d'autonomisation des femmes qui vise à renforcer les capacités économiques et sociales des producteurs de cacao dans les communautés sélectionnées, Ofoase et Abenase dans la région de l'Est, Dunkwa dans la région du Centre, Asankaragua dans la région du Nord-Ouest, Offinso dans la région d'Ashanti et Papase dans la région d'Oti grâce aux groupes d'associations villageoises d'épargne et de crédit (VSLA). Le projet est mis en œuvre par Participatory Development Associates (PDA) en partenariat avec le programme agricole Lindt & Sprüngli et ECOM. 49 groupes VSLA ont été formés dans le cadre du projet."}
                language={language}
              />
              {/* Add more ProjectCards as needed */}
            </div>
          </div>
        </section>
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
          </div>
        </section>
    </section>
  );
};

export default VSLA;
