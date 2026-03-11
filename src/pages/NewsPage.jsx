import React, { useState } from "react";
import { chocoa, etg1, etg2, child, africateam, farmervoice, ksw } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const NewsPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.news : fr.news;
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [newsRef, newsVisible] = useScrollAnimation();

  const newsArticles = [
    {
      id: 1,
      title: "PDA Delivers GALS + CHILD Methodology Training for ETG Uganda",
      date: "March 9, 2026",
      category: "PDA Activities and Events",
      image: etg1,
      excerpt: "Participatory Development Associates (PDA) is currently implementing a Training of Trainers (TOT) programme on the Gender Action Learning System (GALS) + CHILD methodology for Export Trading Group (ETG) Uganda. The initiative supports the rollout of community-level training within Uganda's coffee supply chain, with the aim of strengthening gender equity, household dialogue, and child protection in farming communities.",
      content: `Participatory Development Associates (PDA) is currently implementing a Training of Trainers (TOT) programme on the Gender Action Learning System (GALS) + CHILD methodology for Export Trading Group (ETG) Uganda. The initiative supports the rollout of community-level training within Uganda's coffee supply chain, with the aim of strengthening gender equity, household dialogue, and child protection in farming communities.

As part of the assignment, PDA is building the capacity of field staff who work directly with farmer groups to effectively apply the Gender Action Learning System (GALS) + CHILD methodology. The training equips participants with practical tools that promote inclusive decision-making within households while addressing child protection concerns in agricultural communities.

Training and Field Mentorship

PDA's Programme Coordinator, David Eshun, is currently leading the training and field mentorship in the Greater Masaka Region. Through a participatory and hands-on approach, he is supporting ETG field teams as they begin implementing the GALS + CHILD tools with farmer groups.

The programme includes a five-day in-person Training of Trainers, during which participants are introduced to core GALS tools such as:

• Soulmate Visioning
• Vision Journey
• Gender Balance Tree
• Gender Diamond
• Leadership Map

Participants are also trained in the use of CHILD flashcards, a practical facilitation tool used to stimulate dialogue on child protection and responsible caregiving within farming households.

Following the classroom sessions, PDA is providing three days of field supervision and mentorship. During this phase, trainees apply the methodology directly with farmer groups while PDA facilitators observe the sessions, provide coaching, and help strengthen facilitation skills in real time.

Beyond technical training, the mentorship process focuses on ensuring that the tools are applied correctly, strengthening facilitation approaches, and identifying practical improvements that can enhance the effectiveness of community sessions.

This assignment reflects PDA's continued commitment to supporting partners with practical methodologies that promote gender equality, child protection, and sustainable livelihoods in agricultural value chains. By strengthening the capacity of local field teams, the programme aims to ensure that the GALS + CHILD methodology is effectively embedded within community training processes across Uganda's coffee sector.`,
    },
    {
      id: 2,
      title: "PDA at Amsterdam Chocoa Week 2026",
      date: "February 20, 2026",
      category: "PDA Activities and Events",
      image: chocoa,
      excerpt: "Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026, held as part of Amsterdam Chocoa Week, one of the leading global platforms for dialogue on sustainable cocoa and responsible chocolate production.",
      content: `Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026, held as part of Amsterdam Chocoa Week, one of the leading global platforms for dialogue on sustainable cocoa and responsible chocolate production.

At the conference, Edem Agbe will speak during Panel Breakout Session 5.2: Gender, Family Well-Being and Resilience, where he will share insights and lessons from PDA's work in cocoa-growing communities. The session will highlight how gender-responsive and family-centred approaches contribute to stronger household resilience and long-term sustainability within the cocoa sector.

PDA's contribution will draw on practical field experience, demonstrating how inclusive community development strengthens livelihoods, supports social well-being, and aligns with global efforts toward sustainable and responsible cocoa value chains.

The Chocoa Conference brings together global chocolate manufacturers, policymakers, development partners, civil society organisations, and other key stakeholders committed to shaping the future of sustainable cocoa.

📅 Friday, 20 February 2026
📍 Amsterdam, Netherlands`,
    },
    {
      id: 3,
      title: "Farmers' Voice Radio Academy: Empowering Ghana's Cocoa Farmers Through Participatory Local Language Radio",
      date: "December 15, 2025",
      category: "PDA Activities and Events",
      image: farmervoice,
      excerpt: "We are working to empower 100,000 smallholder cocoa farmers in Ghana by raising under-represented voices and connecting farmers with the knowledge they need to build resilient, inclusive and thriving cocoa communities through the power of participatory local-language FM radio.",
      content: `The Farmers' Voice Radio Academy is a free training program for cocoa cooperatives, equipping them with the skills to design, produce, and broadcast engaging local-language FM radio programs tailored to the needs of cocoa farmers.

Built on a proven methodology, Farmers' Voice Radio is particularly effective at reaching and engaging farmers who are often excluded from traditional training and support interventions, including women, tenant farmers, and producers in remote or underserved communities. Since 2010, Farmers' Voice Radio has broadcast trusted, vital agricultural information to over two million smallholder farmers. This has resulted in improved farming and land management practices, increased yields and quality, economic empowerment of women and strengthened resilience to climate change – ultimately contributing to more secure livelihoods.

By joining the Farmers' Voice Radio Academy, your cooperative will learn to produce a professional radio program that will:

• Improve communication and engagement with cooperative members and cocoa producers
• Increase membership, as farmers recognize the added value of belonging to cooperatives
• Increase living incomes by supporting higher cocoa quality, improved yields and diversified livelihoods
• Connect farmers, particularly women and tenant farmers, to information on good agricultural practices, quality processing, agroforestry, sustainability, and alternative income opportunities
• Improve the quality of cocoa purchased by cooperatives
• Reduce child labor in the supply chain by promoting awareness of children's rights
• Demystify EUDR legislation and regulations, helping farmers understand their rights, obligations, and opportunities

The FVR Academy provides two in-person training workshops (March & April 2026), individual coaching and technical support, networking and a community of practice, and a small grants competition for graduates ready to launch their programs.

Application deadline: 22nd February 2026`,
    },
    {
      id: 4,
      title: "PDA Holds 8th Child Protection Workshop Spotlighting Galamsey's Threat to Children",
      date: "December 11, 2025",
      category: "PDA Activities and Events",
      image: ksw,
      excerpt: "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
      content: `The 2025 edition of the workshop brought together national and community stakeholders to address the growing threat of illegal mining galamsey to children in Ghana's cocoa-growing regions.

Speakers at both events stressed that galamsey is no longer just an environmental concern but a severe child protection crisis. Over 21% of children aged 5–17 in mining zones are engaged in hazardous labour, while contaminated water bodies, degraded farmlands, and weakened community structures continue to heighten their vulnerability.

The Accra session, held on 27th November at the ISSER Conference Hall, brought together policymakers, cocoa companies, researchers, development partners, and national media. Mrs. Annabelle Yeboah-Osei, Director of Operations at PDA, opened the session with remarks highlighting the urgent need to safeguard children, noting that national discourse has often overlooked the realities children face in mining-affected communities.

The Bechem session, held on 4th December at the JOSBA Hotel Conference Room, engaged district assemblies, school authorities, social welfare officers, community leaders, and local child protection actors. Speaking from the frontline of education impacts, Mr. Hamid Kramo, Director of the Ghana Education Service for Ahafo Ano South East, described galamsey as a national crisis.

Both events featured the premiere of a PDA-produced mini-documentary capturing the experiences of families and children living in galamsey-affected cocoa-growing communities. The documentary sparked emotional responses in both Accra and Bechem and reinforced the urgent need for stronger collaboration across government, cocoa companies, civil society organizations, and communities to minimize the adverse effects of illegal mining on children.

Participants underscored that addressing the child protection crisis linked to galamsey requires coordinated action across government, the private sector, civil society, cocoa companies, and local communities.`,
    },
  ];

  const openArticle = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
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
          <div ref={newsRef} className={`space-y-8 ${newsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
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
                      onClick={() => openArticle(article)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closeArticle}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div 
            className="relative min-h-screen flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl my-auto">
              {/* Close Button */}
              <button
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

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Image Header - Fixed Aspect Ratio */}
                <div className="relative h-64 md:h-96 w-full">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Header Content Overlay */}
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

                {/* Article Content */}
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
