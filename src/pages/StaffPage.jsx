import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { 
  patrick, 
  david, 
  kamil, 
  andrew, 
  dzato, 
  louis, 
  abdallah, 
  joshua, 
  guide, 
  bashiru, 
  eunice,
  philip,
  yaro,
  harrison,
  eugene,
  racheal,
  emelia,
  abu,
  sanni,
  incoom,
  tietaar
} from "../assets/images";

const StaffPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.staff : fr.staff;
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStaff, setSelectedStaff] = useState(null);
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [staffRef, staffVisible] = useScrollAnimation();

  // PDA Africa Staff Data
  const staffMembers = [
    {
      id: 2,
      name: "David Eshun",
      position: t.staffMembers?.david?.position || "Project Coordinator",
      department: "programs",
      image: david,
      bio: t.staffMembers?.david?.bio || "David serves as a Project Coordinator for PDA Africa. David has 14 years of experience leading the implementation of several community-level initiatives in Ghana and Cote d'Ivoire. He leverages his many years of experience and skills in project design and coordination, facilitation of gender action and learning systems training, data analysis, design of training manuals, and monitoring and evaluation to deliver excellent project implementation.",
      expertise: t.staffMembers?.david?.expertise || ["Project Design", "Coordination", "GALS Training", "Data Analysis", "M&E"],
      experience: "14+",
      location: t.staffMembers?.david?.location || "Ghana, Côte d'Ivoire",
      education: t.staffMembers?.david?.education || "MSc in Economics, BSc in Natural Resources Management",
    },
    {
      id: 11,
      name: "Kamil Abdul Salam",
      position: t.staffMembers?.kamil?.position || "Assistant Project Coordinator",
      department: "programs",
      image: kamil,
      bio: t.staffMembers?.kamil?.bio || "Kamil is an Assistant Project Coordinator with PDA Africa, leading the Child Labor Remediation project. As an experienced development professional with expertise in designing and implementing community development interventions, Kamil has led numerous projects in Community Action Planning (CAP), Community Health and Wellbeing, Sustainable Development Projects, Social Mobilization and Organisation and Partnership Development with Community and State Institutions. He loves to share his opinions and experiences on social and economic development blogs on human and social development.",
      expertise: t.staffMembers?.kamil?.expertise || ["Community Action Planning", "Community Health", "Sustainable Development", "Social Mobilization", "Partnership Development"],
      experience: "5+",
      location: t.staffMembers?.kamil?.location || "Ghana",
      education: t.staffMembers?.kamil?.education || "MSc in Development Policy Planning, BSc in Planning",
    },
    {
      id: 3,
      name: "Andrews Owusu",
      position: t.staffMembers?.andrews?.position || "Assistant Project Officer",
      department: "programs",
      image: andrew,
      bio: t.staffMembers?.andrews?.bio || "Andrews is an Assistant Project Officer with PDA Africa. Throughout his career, Andrews has developed expertise in training facilitation, field supervision, monitoring, and community mobilization. He is passionate about initiatives that seek to economically empower women and young people.",
      expertise: t.staffMembers?.andrews?.expertise || ["Training Facilitation", "Field Supervision", "Monitoring", "Community Mobilization"],
      experience: "5+",
      location: t.staffMembers?.andrews?.location || "Ghana",
      education: t.staffMembers?.andrews?.education || "BSc in Organizational Development",
    },
    {
      id: 4,
      name: "Godsway Dzato",
      position: t.staffMembers?.godsway?.position || "Assistant Finance and Administrative Officer",
      department: "operations",
      image: dzato,
      bio: t.staffMembers?.godsway?.bio || "Godsway serves as the Finance Officer for PDA Africa. Throughout his five years of experience in finance roles, he has developed rich expertise in financial reporting and analysis.",
      expertise: t.staffMembers?.godsway?.expertise || ["Financial Reporting", "Financial Analysis", "Accounting"],
      experience: "5+",
      location: t.staffMembers?.godsway?.location || "Ghana",
      education: t.staffMembers?.godsway?.education || "BSc Administration (Accounting)",
    },
    {
      id: 1,
      name: "Patrick Ashene Dwamena",
      position: t.staffMembers?.patrick?.position || "Senior Project Officer",
      department: "programs",
      image: patrick,
      bio: t.staffMembers?.patrick?.bio || "Patrick is a Senior Project Officer with PDA Africa team and brings over 16 years of experience leading community-based development initiatives. He supervises projects in Ghana, Cameroon, and Côte d'Ivoire. He has played a key role in shaping PDA's financial inclusion initiatives at the community level.",
      expertise: t.staffMembers?.patrick?.expertise || ["Training", "Facilitation", "Report Writing", "Data Analysis", "Community Mobilization"],
      experience: "16+",
      location: t.staffMembers?.patrick?.location || "Ghana, Cameroon, Côte d'Ivoire",
      education: t.staffMembers?.patrick?.education || "HND in Journalism and Communication",
    },
    {
      id: 5,
       name: "Louis Nyar Tietaar",
      position: "Project Officer, PDA Africa",
      department: "programs",
      image: tietaar,
      bio: "Louis is a data analyst with a strong foundation in Excel and a growing expertise in machine learning and data analytics. He holds a Bachelor's degree in Accounting from Kwame Nkrumah University of Science and Technology and a Data Analytics certification from Azubi Africa. Louis is passionate about using data to generate insights, support decision-making, and build practical, data-driven solutions while continuously developing his skills in analytics and AI technologies.",
      expertise: ["Data Analysis", "Excel", "Machine Learning", "Data Analytics", "AI Technologies"],
      experience: "3+",
      location: "Ghana",
      education: "Bachelor's degree in Accounting, Data Analytics certification from Azubi Africa",
    },
    {
      id: 6,
      name: "Abdallah Yakubu",
      position: t.staffMembers?.abdallah?.position || "Field Officer",
      department: "fieldOfficers",
      image: abdallah,
      bio: t.staffMembers?.abdallah?.bio || "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: t.staffMembers?.abdallah?.expertise || ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: t.staffMembers?.abdallah?.location || "Ghana",
    },
    {
      id: 7,
      name: "Joshua Arkoh",
      position: t.staffMembers?.joshua?.position || "Field Officer",
      department: "fieldOfficers",
      image: joshua,
      bio: t.staffMembers?.joshua?.bio || "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: t.staffMembers?.joshua?.expertise || ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: t.staffMembers?.joshua?.location || "Ghana",
    },
    {
      id: 8,
      name: "Guide Gadri Elefo",
      position: t.staffMembers?.guide?.position || "Field Officer",
      department: "fieldOfficers",
      image: guide,
      bio: t.staffMembers?.guide?.bio || "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: t.staffMembers?.guide?.expertise || ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: t.staffMembers?.guide?.location || "Ghana",
    },
    {
      id: 9,
      name: "Bashiru Seidu",
      position: t.staffMembers?.bashiru?.position || "Field Officer",
      department: "fieldOfficers",
      image: bashiru,
      bio: t.staffMembers?.bashiru?.bio || "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: t.staffMembers?.bashiru?.expertise || ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: t.staffMembers?.bashiru?.location || "Ghana",
    },
    {
      id: 10,
      name: "Eunice Webaswea Averitiga",
      position: t.staffMembers?.eunice?.position || "Field Officer",
      department: "fieldOfficers",
      image: eunice,
      bio: t.staffMembers?.eunice?.bio || "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: t.staffMembers?.eunice?.expertise || ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: t.staffMembers?.eunice?.location || "Ghana",
    },
    {
      id: 12,
      name: "Louis Ahoin Mensah",
      position: t.staffMembers?.louis?.position || "Field Officer",
      department: "fieldOfficers",
      image: louis,
      bio: t.staffMembers?.louis?.bio || "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: t.staffMembers?.louis?.expertise || ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: t.staffMembers?.louis?.location || "Ghana",
    },
    {
      id: 13,
      name: "PHILIP QUAICOE",
      position: "Field Officer",
      department: "fieldOfficers",
      image: philip,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 14,
      name: "EUNICE YARO",
      position: "Field Officer",
      department: "fieldOfficers",
      image: yaro,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 15,
      name: "HARRISSON ADU",
      position: "Field Officer",
      department: "fieldOfficers",
      image: harrison,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 16,
      name: "EUGENE ASAMOAH BOAKYE",
      position: "Field Officer",
      department: "fieldOfficers",
      image: eugene,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 17,
      name: "RACHEL KANJAMBUDA BLESSING",
      position: "Field Officer",
      department: "fieldOfficers",
      image: racheal,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 18,
      name: "EMELIA ANAWINE",
      position: "Field Officer",
      department: "fieldOfficers",
      image: emelia,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 19,
      name: "ABU MUSAH",
      position: "Field Officer",
      department: "fieldOfficers",
      image: abu,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 20,
      name: "ISSIFU SANI",
      position: "Field Officer",
      department: "fieldOfficers",
      image: sanni,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
    {
      id: 21,
      name: "SAMUEL INCOOM JUNIOR",
      position: "Field Officer",
      department: "fieldOfficers",
      image: incoom,
      bio: "Field Officer working directly with communities to implement PDA Africa's programs and initiatives.",
      expertise: ["Community Engagement", "Field Work", "Program Implementation"],
      experience: "3+",
      location: "Ghana",
    },
  ];

  const departments = [
    { id: "all", label: t.allTeam },
    { id: "programs", label: language === "en" ? "Programs" : "Programmes" },
    { id: "operations", label: language === "en" ? "Operations" : "Opérations" },
    { id: "fieldOfficers", label: language === "en" ? "Field Officers" : "Agents de terrain" },
  ];

  const filteredStaff = selectedDepartment === "all" 
    ? staffMembers 
    : staffMembers.filter(staff => staff.department === selectedDepartment);

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
              {t.title.split(" ")[0]} <span className="text-black">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`min-h-[44px] px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base ${
                  selectedDepartment === dept.id
                    ? "bg-orange text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Staff Grid */}
          <div ref={staffRef} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${staffVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            {filteredStaff.map((staff) => (
              <div
                key={staff.id}
                onClick={() => setSelectedStaff(staff)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{staff.name}</h3>
                  <p className="text-orange font-semibold mb-4">{staff.position}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{staff.bio}</p>
                  <button className="text-orange font-semibold text-sm hover:underline">
                    {t.viewProfile}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-auto my-auto">
            <button
              onClick={() => setSelectedStaff(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-4 sm:p-6 md:p-8 pt-12 md:pt-12">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mx-auto md:mx-0">
                  <img src={selectedStaff.image} alt={selectedStaff.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 break-words">{selectedStaff.name}</h2>
                  <p className="text-orange font-semibold text-base sm:text-lg mb-4">{selectedStaff.position}</p>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs sm:text-sm text-gray-600 justify-center md:justify-start">
                    <div>
                      <span className="font-semibold">{t.department}:</span> {departments.find(d => d.id === selectedStaff.department)?.label || selectedStaff.department}
                    </div>
                    <div>
                      <span className="font-semibold">{t.location}:</span> {selectedStaff.location}
                    </div>
                    <div>
                      <span className="font-semibold">{t.yearsExperience}:</span> {selectedStaff.experience}
                    </div>
                    {selectedStaff.education && (
                      <div>
                        <span className="font-semibold">{t.education || "Education"}:</span> {selectedStaff.education}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{t.about}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">{selectedStaff.bio}</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{t.areasOfExpertise}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStaff.expertise.map((area, index) => (
                    <span
                      key={index}
                      className="bg-orange/10 text-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffPage;
