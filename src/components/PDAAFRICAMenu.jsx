import React, { useState } from "react";
import { africaLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { pdaafricalogo } from "../assets/icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const PDAAFRICAMenu = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === "en" ? en.nav : fr.nav;

  // Map menu items with translations
  const translatedLinks = africaLinks.map((link) => {
    const translationMap = {
      "Home": t.home,
      "About Us": t.about,
      "Overview": t.overview,
      "Where We Work": t.whereWeWork,
      "Our Team": t.ourTeam,
      "What We Do": t.whatWeDo,
      "Projects": t.projects,
      "Gallery": t.gallery,
      "News & Updates": t.news,
      "Impact": t.impact,
      "Get Involved": t.getInvolved,
      "Contact Us": t.contact,
    };
    
    const translatedLink = {
      ...link,
      label: translationMap[link.label] || link.label,
    };
    
    // Translate submenu items if they exist
    if (link.submenu) {
      translatedLink.submenu = link.submenu.map((subItem) => ({
        ...subItem,
        label: translationMap[subItem.label] || subItem.label,
      }));
    }
    
    return translatedLink;
  });

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleMobileMenuClick = (label) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
  };

  const handleMouseEnter = (label) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    // Add a delay before hiding the submenu to allow users to move their mouse
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // 200ms delay
    setHoverTimeout(timeout);
  };

  const handleSubmenuMouseEnter = () => {
    // Clear timeout when mouse enters submenu
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleSubmenuMouseLeave = () => {
    // Hide submenu when mouse leaves
    setHoveredMenu(null);
  };

  const handleNavigation = (href) => {
    if (href) {
      navigate(href);
      window.scrollTo(0, 0);
      setOpenNavigation(false);
    }
  };

  return (
    <header className="w-full h-20 fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="w-full h-2 bg-orange"></div>
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src={pdaafricalogo}
            alt="PDA Africa Logo"
            className="h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {translatedLinks.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="font-poppins text-lg text-gray-700 hover:text-orange font-semibold transition-colors py-2 flex items-center gap-1.5"
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              ) : (
                <button
                  className="font-poppins text-lg text-gray-700 hover:text-orange font-semibold transition-colors py-2 flex items-center gap-1.5"
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              )}
              
              {/* Desktop Submenu */}
              {item.submenu && hoveredMenu === item.label && (
                <div
                  className="absolute left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 border border-gray-100 z-50"
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                >
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={() => handleNavigation(subItem.href)}
                      className="block w-full text-left px-4 py-2.5 hover:bg-orange hover:text-white font-poppins text-base text-gray-700 transition-colors"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.pdaghana.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-poppins text-lg font-bold text-gray-800 hover:text-orange transition-all py-2 px-4 rounded-lg border-2 border-gray-200 hover:border-orange bg-gradient-to-r from-gray-50 to-white hover:from-orange-50 hover:to-orange-100 flex items-center gap-2 shadow-sm hover:shadow-md"
            title="Visit PDA Ltd - Parent Organization"
          >
            <span className="absolute -top-1 -right-1 bg-orange text-white text-xs font-bold px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
            <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{t.pda}</span>
            <svg className="w-4 h-4 text-gray-500 group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <LanguageSwitcher />
          {/* Donate button - hidden but code preserved
          <button
            onClick={() => handleNavigation("/donate")}
            className="bg-orange text-white px-6 py-2.5 rounded-lg font-poppins font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            {t.donate}
          </button>
          */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavigation}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full bg-gray-700 transition-all ${openNavigation ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-700 transition-all ${openNavigation ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-700 transition-all ${openNavigation ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {openNavigation && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <ul className="flex flex-col gap-1">
              {translatedLinks.map((item) => (
                <li key={item.label}>
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        if (item.submenu) {
                          handleMobileMenuClick(item.label);
                        } else if (item.href) {
                          handleNavigation(item.href);
                        }
                      }}
                      className="w-full text-left font-poppins text-lg text-gray-700 hover:text-orange hover:bg-orange-50 font-medium transition-colors py-3 px-4 rounded-lg flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.submenu && (
                        <svg
                          className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.label ? 'rotate-90' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {item.submenu && openMobileSubmenu === item.label && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <button
                              onClick={() => {
                                handleNavigation(subItem.href);
                                setOpenNavigation(false);
                              }}
                              className="w-full text-left font-poppins text-base text-gray-600 hover:text-orange hover:bg-orange-50 transition-colors py-2 px-4 rounded-lg"
                            >
                              {subItem.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col gap-4">
              <a
                href="https://www.pdaghana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full text-left font-poppins text-lg font-bold text-gray-800 hover:text-orange transition-all py-3 px-4 rounded-lg border-2 border-gray-200 hover:border-orange bg-gradient-to-r from-gray-50 to-white hover:from-orange-50 hover:to-orange-100 flex items-center justify-between shadow-sm hover:shadow-md"
                title="Visit PDA Ltd - Parent Organization"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{t.pda}</span>
                </div>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <LanguageSwitcher />
              {/* Donate button - hidden but code preserved
              <button
                onClick={() => handleNavigation("/donate")}
                className="w-full bg-orange text-white px-6 py-3 rounded-lg font-poppins font-semibold text-base hover:bg-orange-600 transition-colors"
              >
                {t.donate}
              </button>
              */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PDAAFRICAMenu;
