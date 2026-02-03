import React from "react";
import { farmer, child, africateam } from "../assets/images";

const NewsAndUpdates = () => {
  const newsArticles = [
    {
      id: 1,
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
      link: "https://pdaghana.com/farmers-voice-radio-academy-empowering-ghanas-cocoa-farmers-through-participatory-local-language-radio/"
    },
    {
      id: 2,
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
      link: "https://pdaghana.com/8th-knowledge-sharing-workshop-on-child-protection/"
    },
    {
      id: 3,
      title: "PDA at Amsterdam Chocoa Week 2026",
      date: "January 29, 2026",
      category: "PDA Activities and Events",
      image: africateam,
      excerpt: "PDA participated in Amsterdam Chocoa Week 2026, engaging with international partners and stakeholders in the cocoa sector to discuss sustainable development, child protection, and community empowerment initiatives.",
      content: `PDA's participation in Amsterdam Chocoa Week 2026 highlighted our ongoing commitment to sustainable cocoa production and child protection in Ghana's cocoa-growing communities. The event provided an important platform for sharing insights, best practices, and collaborative solutions with international partners, cocoa companies, and development organizations.

During the week, PDA showcased its innovative approaches to addressing child labor, supporting farmer livelihoods, and strengthening community resilience. Key discussions focused on the intersection of sustainable agriculture, child protection, and economic empowerment in cocoa-producing regions.

The event reinforced the importance of multi-stakeholder collaboration in creating lasting positive change in cocoa communities across Ghana and Sub-Saharan Africa.`,
      link: "https://pdaghana.com/pda-at-amsterdam-chocoa-week-2026/"
    }
  ];

  return (
    <section
      id="news-and-updates"
      className="max-container max-w-full w-full font-poppins"
    >
      <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
        News & Updates
      </h2>
      <div className="flex justify-center w-full mb-10">
        <h3 className="text-4xl leading-[68px] font-poppins font-bold">
          Latest <span className="text-orange">News</span>
        </h3>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 px-4">
        {newsArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="text-orange font-semibold text-sm">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>

                <h2 className="font-poppins font-bold text-xl md:text-2xl text-gray-800 mb-4 hover:text-orange transition-colors">
                  {article.title}
                </h2>

                <p className="font-poppins text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange font-semibold hover:text-orange-600 transition-colors text-sm md:text-base"
                >
                  Read More
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
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsAndUpdates;
