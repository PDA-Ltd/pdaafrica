import { footerLinks, whiteMedia } from "../constants";
import { pdaafricalogo } from "../assets/icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const Footer = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.footer : fr.footer;

  // Translation mapping for footer links
  const translateLinkName = (name) => {
    const translationMap = {
      "Contact Us": t.contactUs,
      "Quick Links": t.quickLinks,
      "Programmes": t.programmes,
      "Home": t.home,
      "About Us": t.aboutUs,
      "Projects": t.projects,
      "News & Updates": t.newsUpdates,
      "Get Involved": t.getInvolved,
      "Cocoa Communities Library": t.cocoaCommunitiesLibrary,
      "Financial Inclusion & VSLA": t.financialInclusionVSLA,
      "Child Labour Remediation": t.childLabourRemediation,
      "Email:": t.email,
    };
    return translationMap[name] || name;
  };

  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-poppins text-white font-bold text-base mb-4 uppercase tracking-wider">
                {translateLinkName(section.title)}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {link.link.startsWith("/") ? (
                      <Link
                        to={link.link}
                        className="text-gray-300 hover:text-orange text-base font-medium transition-colors"
                      >
                        {translateLinkName(link.name)}
                      </Link>
                    ) : link.link.startsWith("mailto:") ||
                      link.link.startsWith("tel:") ? (
                      <a
                        href={link.link}
                        className="text-gray-300 hover:text-orange text-base font-medium transition-colors"
                      >
                        {translateLinkName(link.name)}
                      </a>
                    ) : (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange text-base font-medium transition-colors"
                      >
                        {translateLinkName(link.name)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* About Section */}
          <div>
            <Link
              to="/"
              className="inline-block mb-4"
            >
              <img 
                src={pdaafricalogo} 
                alt="PDA Africa Logo" 
                className="h-12 brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-300 text-base font-medium leading-relaxed mb-4">
              {t.description}
            </p>
            <div className="flex gap-4">
              {whiteMedia.map((icon) => (
                <a
                  key={icon.alt}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange transition-colors"
                  aria-label={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-base font-medium">
            {t.copyright} © {new Date().getFullYear()} PDA Africa. {t.allRightsReserved}
          </p>
          <div className="flex gap-6 text-base">
            <Link
              to="/privacy-policy"
              className="text-gray-300 hover:text-orange font-medium transition-colors"
            >
              {t.privacyPolicy}
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-300 hover:text-orange font-medium transition-colors"
            >
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
