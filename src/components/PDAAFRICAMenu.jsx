// import React, { useState } from "react";
// import { africaLinks } from "../constants";
// import { Link } from "react-router-dom";
// import { pdaafricalogo } from "../assets/icons";

// const PDAAFRICAMenu = () => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState(null);

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange relative z-10"></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
//         <a href="/pdaafrica">
//           <img
//             className="pt-5 pb-5"
//             src={pdaafricalogo}
//             alt="Logo"
//             width={100}
//             height={15}
//           />
//         </a>

//         {/* Custom menu items for PDAAFRICA page */}
//         <ul className="flex gap-8 text-base max-lg:hidden">
//           {africaLinks.map((item) => (
//             <li
//               key={item.label}
//               className="relative group"
//               onMouseEnter={() => item.submenu && setHoveredMenu(item.label)}
//               onMouseLeave={() => setHoveredMenu(null)}
//             >
//               <Link
//                 to={item.href}
//                 className="font-poppins leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </Link>

//               {/* Submenu */}
//               {item.submenu && hoveredMenu === item.label && (
//                 <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-48">
//                   {item.submenu.map((subItem) => (
//                     <li
//                       key={subItem.label}
//                       className="px-4 py-2 hover:bg-gray-100"
//                     >
//                       <Link
//                         to={subItem.href}
//                         className="font-poppins text-base text-gray-600"
//                       >
//                         {subItem.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Large screen Donate button */}
//         <a href="/pdaafrica/donate">
//           <button
//             className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden"
//             onClick={() => handleDonateClick(false)} // Large screen donate logic
//           >
//             Donate now
//           </button>
//         </a>

//         {/* Mobile menu button */}
//         <div className="hidden max-lg:block">
//           <label
//             htmlFor="openSidebarMenu"
//             className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99]"
//             onClick={toggleNavigation}
//           >
//             <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute"></div>
//             <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
//             <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
//             <p className="font-poppins font-medium items-center mt-2">Menu</p>
//           </label>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`absolute left-0 w-full bg-white bg-opacity-80 transform transition-transform duration-1000 ease-in-out ${
//             openNavigation ? "translate-y-[0]" : "translate-y-[-200%]"
//           }`}
//           style={{
//             top: "87px",
//             zIndex: 1,
//           }}
//         >
//           <ul className="flex flex-col gap-8 text-xl items-center mt-2 mb-4">
//             {africaLinks.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   to={item.href}
//                   onClick={() => {
//                     toggleNavigation(); // Close the mobile menu after clicking
//                   }}
//                   className="font-poppins text-xl text-slate-gray"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//             <a href="/pdaafrica/donate">
//               <button
//                 className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none"
//                 onClick={() => handleDonateClick(true)} // Trigger donation on mobile
//               >
//                 Donate now
//               </button>
//             </a>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default PDAAFRICAMenu;

// import React, { useState } from "react";
// import { africaLinks } from "../constants";
// import { Link } from "react-router-dom";
// import { pdaafricalogo } from "../assets/icons";

// const PDAAFRICAMenu = () => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); // State for mobile submenu

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   const toggleMobileSubmenu = (label) => {
//     setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
//   };

//   const handleMouseEnter = (label) => {
//     setHoveredMenu(label); // Show submenu for the hovered item
//   };

//   const handleMouseLeave = () => {
//     setHoveredMenu(null); // Hide the submenu when the mouse leaves
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange relative z-10"></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
//         <a href="/pdaafrica">
//           <img
//             className="pt-5 pb-5"
//             src={pdaafricalogo}
//             alt="Logo"
//             width={100}
//             height={15}
//           />
//         </a>

//         {/* Large screen menu */}
//         <ul className="flex gap-8 text-base max-lg:hidden ">
//           {africaLinks.map((item) => (
//             <li
//               key={item.label}
//               className="relative group hover:scale-110 hover:text-orange"
//               onMouseEnter={() => handleMouseEnter(item.label)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to={item.href}
//                 className="font-poppins leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </Link>
//               {item.submenu && hoveredMenu === item.label && (
//                 <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-48">
//                   {item.submenu.map((subItem) => (
//                     <Link
//                       key={subItem.label}
//                       to={subItem.href}
//                       className="block px-4 py-2 hover:bg-orange hover:text-white font-poppins text-base text-black"
//                     >
//                       {subItem.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Donate button */}
//         <a href="/pdaafrica/donate">
//           <button className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden">
//             Donate now
//           </button>
//         </a>

//         {/* Mobile menu */}
//         <div className="hidden max-lg:block">
//           <label
//             htmlFor="openSidebarMenu"
//             className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99]"
//             onClick={toggleNavigation}
//           >
//             <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute"></div>
//             <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
//             <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
//             <p className="font-poppins font-medium items-center mt-2">Menu</p>
//           </label>
//         </div>

//         {/* Mobile menu content */}
//         <div
//           className={`absolute left-0 w-full bg-white bg-opacity-80 transform transition-transform duration-1000 ease-in-out ${
//             openNavigation ? "translate-y-[0]" : "translate-y-[-200%]"
//           }`}
//           style={{
//             top: "87px",
//             zIndex: 1,
//           }}
//         >
//           <ul className="flex flex-col gap-8 text-xl items-center mt-2 mb-4">
//             {africaLinks.map((item) => (
//               <li key={item.label}>
//                 <div className="flex flex-col">
//                   <div className="flex justify-between items-center">
//                     <Link
//                       to={item.href}
//                       onClick={() => toggleNavigation()} // Close menu on parent click
//                       className="font-poppins text-xl text-slate-gray hover:scale-110 hover:text-orange"
//                     >
//                       {item.label}
//                     </Link>
//                     {item.submenu && (
//                       <button
//                         onClick={() => toggleMobileSubmenu(item.label)}
//                         className="ml-2 text-lg"
//                       >
//                         {openMobileSubmenu === item.label ? "<" : ">"}
//                       </button>
//                     )}
//                   </div>
//                   {/* Mobile submenu */}
//                   {item.submenu && openMobileSubmenu === item.label && (
//                     <ul className="pl-4 mt-2 space-y-2">
//                       {item.submenu.map((subItem) => (
//                         <li key={subItem.label}>
//                           <Link
//                             to={subItem.href}
//                             onClick={() => toggleNavigation()} // Close menu on submenu click
//                             className="font-poppins text-base text-black hover:scale-110 hover:text-orange"
//                           >
//                             {subItem.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             ))}
//             <a href="/pdaafrica/donate">
//               <button className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none">
//                 Donate now
//               </button>
//             </a>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default PDAAFRICAMenu;

import React, { useState } from "react";
import { africaLinks } from "../constants";
import { Link } from "react-router-dom";
import { pdaafricalogo } from "../assets/icons";

const PDAAFRICAMenu = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); // For large screens
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); // For mobile menu

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleMobileMenuClick = (label) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label); // Toggle submenu
  };

  const handleMouseEnter = (label) => {
    setHoveredMenu(label); // Show submenu for large screen
  };

  const handleMouseLeave = (label) => {
    setHoveredMenu(null); // Show submenu for large screen
  };

  return (
    <header className="w-full h-24 fixed top-0 left-0 z-50">
      <div className="w-full h-3 bg-orange relative z-10"></div>
      <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
        <a href="/pdaafrica">
          <img
            className="pt-5 pb-5"
            src={pdaafricalogo}
            alt="Logo"
            width={100}
            height={15}
          />
        </a>

        {/* Large Screen Menu */}
        <ul className="flex gap-8 text-base max-lg:hidden">
          {africaLinks.map((item) => (
            <li
              key={item.label}
              className="relative group hover:scale-110 hover:text-orange"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setHoveredMenu(item.label)} // Toggle submenu on click
            >
              <Link
                to={item.href}
                className="font-poppins leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
              {item.submenu && hoveredMenu === item.label && (
                <div className="absolute left-0 bg-white shadow-md rounded-md py-2 w-48">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="block px-4 py-2 hover:bg-orange hover:text-white font-poppins text-base text-black"
                      onClick={() => setHoveredMenu(null)} // Hide submenu on item click
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Donate Button */}
        <a href="/pdaafrica/donate">
          <button className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden">
            Donate now
          </button>
        </a>

        {/* Mobile Menu */}
        <div className="hidden max-lg:block">
          <label
            htmlFor="openSidebarMenu"
            className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99]"
            onClick={toggleNavigation}
          >
            <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute"></div>
            <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <p className="font-poppins font-medium text-sm items-center mt-2">
              Menu
            </p>
          </label>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute left-0 w-full bg-white bg-opacity-95 transform transition-transform duration-1000 ease-in-out ${
            openNavigation ? "translate-y-[0]" : "translate-y-[-200%]"
          }`}
          style={{
            top: "87px",
            zIndex: 1,
          }}
        >
          <ul className="flex flex-col gap-8 text-xl items-center mt-2 mb-4">
            {africaLinks.map((item) => (
              <li key={item.label}>
                <div className="flex flex-col">
                  <Link
                    to={item.href}
                    onClick={() => {
                      // Check if the item has a submenu
                      if (item.submenu) {
                        // If it has a submenu, just handle the submenu toggle
                        handleMobileMenuClick(item.label);
                      } else {
                        // If it doesn't have a submenu, close the navigation
                        toggleNavigation();
                      }
                    }}
                    className="font-poppins text-xl text-slate-gray hover:scale-110 hover:text-orange cursor-pointer"
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Submenu */}
                  {item.submenu && openMobileSubmenu === item.label && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.href}
                            onClick={() => {
                              // Close menu on submenu click
                              toggleNavigation();
                            }}
                            className="font-poppins text-base text-black hover:scale-110 hover:text-orange"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
            <a href="/pdaafrica/donate">
              <button className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none">
                Donate now
              </button>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default PDAAFRICAMenu;
