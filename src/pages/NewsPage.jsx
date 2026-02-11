import React, { useState } from "react";
import { farmer, child, africateam } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const NewsPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.news : fr.news;
  const [expandedArticle, setExpandedArticle] = useState(null);
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [newsRef, newsVisible] = useScrollAnimation();

  const newsArticles = [
    {
      id: 1,
      title: "PDA at Amsterdam Chocoa Week 2026",
      date: "February 20, 2026",
      category: "PDA Activities and Events",
      image: africateam,
      excerpt: "Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026, held as part of Amsterdam Chocoa Week, one of the leading global platforms for dialogue on sustainable cocoa and responsible chocolate production.",
      content: `Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026, held as part of Amsterdam Chocoa Week, one of the leading global platforms for dialogue on sustainable cocoa and responsible chocolate production.

At the conference, Edem Agbe will speak during Panel Breakout Session 5.2: Gender, Family Well-Being and Resilience, where he will share insights and lessons from PDA's work in cocoa-growing communities. The session will highlight how gender-responsive and family-centred approaches contribute to stronger household resilience and long-term sustainability within the cocoa sector.

PDA's contribution will draw on practical field experience, demonstrating how inclusive community development strengthens livelihoods, supports social well-being, and aligns with global efforts toward sustainable and responsible cocoa value chains.

The Chocoa Conference brings together global chocolate manufacturers, policymakers, development partners, civil society organisations, and other key stakeholders committed to shaping the future of sustainable cocoa.

📅 Friday, 20 February 2026
📍 Amsterdam, Netherlands`,
    },
    {
      id: 2,
      title: "Farmers' Voice Radio Academy: Empowering Ghana's Cocoa Farmers Through Participatory Local Language Radio",
      date: "December 15, 2025",
      category: "PDA Activities and Events",
      image: farmer,
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
      id: 3,
      title: "PDA Holds 8th Child Protection Workshop Spotlighting Galamsey's Threat to Children",
      date: "December 11, 2025",
      category: "PDA Activities and Events",
      image: child,
      excerpt: "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
      content: `The 2025 edition of the workshop brought together national and community stakeholders to address the growing threat of illegal mining galamsey to children in Ghana's cocoa-growing regions.

Speakers at both events stressed that galamsey is no longer just an environmental concern but a severe child protection crisis. Over 21% of children aged 5–17 in mining zones are engaged in hazardous labour, while contaminated water bodies, degraded farmlands, and weakened community structures continue to heighten their vulnerability.

The Accra session, held on 27th November at the ISSER Conference Hall, brought together policymakers, cocoa companies, researchers, development partners, and national media. Mrs. Annabelle Yeboah-Osei, Director of Operations at PDA, opened the session with remarks highlighting the urgent need to safeguard children, noting that national discourse has often overlooked the realities children face in mining-affected communities.

The Bechem session, held on 4th December at the JOSBA Hotel Conference Room, engaged district assemblies, school authorities, social welfare officers, community leaders, and local child protection actors. Speaking from the frontline of education impacts, Mr. Hamid Kramo, Director of the Ghana Education Service for Ahafo Ano South East, described galamsey as a national crisis.

Both events featured the premiere of a PDA-produced mini-documentary capturing the experiences of families and children living in galamsey-affected cocoa-growing communities. The documentary sparked emotional responses in both Accra and Bechem and reinforced the urgent need for stronger collaboration across government, cocoa companies, civil society organizations, and communities to minimize the adverse effects of illegal mining on children.

Participants underscored that addressing the child protection crisis linked to galamsey requires coordinated action across government, the private sector, civil society, cocoa companies, and local communities.`,
    },
  ];

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title.split(" ").slice(0, 1).join(" ")} <span className="text-yellow-300">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={newsRef} className={`space-y-10 ${newsVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Header */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="bg-orange px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-sm opacity-90">{article.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {article.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Expandable Full Content */}
                {expandedArticle === article.id ? (
                  <div className="space-y-4">
                    <div className="border-t border-gray-200 pt-6">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {article.content}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleArticle(article.id)}
                      className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center gap-2"
                    >
                      {t.showLess}
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          expandedArticle === article.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleArticle(article.id)}
                    className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center gap-2"
                  >
                    {t.readFullArticle}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
