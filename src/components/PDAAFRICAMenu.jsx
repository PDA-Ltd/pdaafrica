// import React from "react";
// import { pdaLogo } from "../assets/images";
// import { africaLinks } from "../constants";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import DonateForm from "./DonateForm";

// const PDAAFRICAMenu = () => {
//   const pathname = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//     } else {
//       setOpenNavigation(true);
//     }
//   };

//   const handleClick = () => {
//     toggleNavigation();
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50 ">
//       <div className="w-full h-3 bg-orange relative z-10 "></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10 ">
//         <a href="/">
//           <img
//             className="pt-3 pb-3"
//             src={pdaLogo}
//             alt="Logo"
//             width={150}
//             height={40}
//           />
//         </a>
//         {/* Custom menu items for PDAAFRICA page */}
//         <ul className="flex gap-8 text-lg max-lg:hidden">
//           {africaLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-poppins leading-normal text-xl text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <button className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden ">
//           Donate now
//           <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMejX4CP15Iex2bcOJqUK5Uwub8rlTQdyyDLRy204_YzVfYA/viewform?embedded=true"></a>
//         </button>
//         <div className="hidden max-lg:block">
//           <input
//             type="checkbox"
//             className=" openSidebarMenu hidden"
//             id="openSidebarMenu"
//           ></input>
//           <label
//             for="openSidebarMenu"
//             className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99] "
//             onClick={toggleNavigation}
//           >
//             <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute "></div>
//             <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
//             <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
//             <span>
//               <p className="font-poppins font-medium items-center mt-2 ">
//                 {" "}
//                 Menu
//               </p>
//             </span>
//           </label>
//         </div>

//         {/* Mobile menu */}

//         <div
//           className={`absolute left-0 w-full bg-white bg-opacity-80 transform transition-transform duration-1000 ease-in-out ${
//             openNavigation ? "translate-y-[-0%]" : "translate-y-[-200%]"
//           }`}
//           style={{
//             top: "87px",
//             zIndex: 1,
//           }}
//         >
//           <ul className="flex flex-col gap-8 text-xl items-center mt-2 mb-4">
//             {africaLinks.map((item) => (
//               <li key={item.label}>
//                 <a
//                   href={item.href}
//                   onClick={handleClick}
//                   className="font-poppins text-xl text-slate-gray openSidebarMenu "
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             <button className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none">
//               Donate now
//               <DonateForm />
//             </button>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default PDAAFRICAMenu;

// import React, { useState } from "react";
// import { pdaLogo } from "../assets/images";
// import { africaLinks } from "../constants";
// import DonateForm from "./DonateForm";

// const PDAAFRICAMenu = () => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [showDonateForm, setShowDonateForm] = useState(false); // State for showing donate form

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   const handleClick = () => {
//     toggleNavigation();
//   };

//   const handleDonateClick = () => {
//     setShowDonateForm(true); // Show donate form on click
//     toggleNavigation(); // Optionally close the mobile menu
//   };

//   const handleCloseDonateForm = () => {
//     setShowDonateForm(false); // Hide donate form
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange relative z-10"></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
//         <a href="/">
//           <img
//             className="pt-3 pb-3"
//             src={pdaLogo}
//             alt="Logo"
//             width={150}
//             height={40}
//           />
//         </a>

//         {/* Custom menu items for PDAAFRICA page */}
//         <ul className="flex gap-8 text-base max-lg:hidden m">
//           {africaLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-poppins leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <button
//           className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden"
//           onClick={handleDonateClick} // Use the same logic as the mobile menu
//         >
//           Donate now
//         </button>

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
//                 <a
//                   href={item.href}
//                   onClick={handleClick}
//                   className="font-poppins text-xl text-slate-gray"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             <button
//               className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none"
//               onClick={handleDonateClick} // Trigger donation on mobile
//             >
//               Donate now
//             </button>
//           </ul>
//         </div>
//       </nav>

//       {/* Conditionally render the DonateForm */}
//       {showDonateForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleCloseDonateForm}
//               className="absolute top-4 right-4 text-red"
//             >
//               Close
//             </button>
//             <DonateForm />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default PDAAFRICAMenu;

// import React, { useState } from "react";
// import { pdaLogo } from "../assets/images";
// import { africaLinks } from "../constants";
// import DonateForm from "./DonateForm";

// const PDAAFRICAMenu = () => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [showDonateForm, setShowDonateForm] = useState(false); // State for showing donate form

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   const handleDonateClick = (isMobile = false) => {
//     setShowDonateForm(true); // Show donate form
//     if (isMobile) toggleNavigation(); // Only close the mobile menu if it's open
//   };

//   const handleCloseDonateForm = () => {
//     setShowDonateForm(false); // Hide donate form
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange relative z-10"></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
//         <a href="/">
//           <img
//             className="pt-3 pb-3"
//             src={pdaLogo}
//             alt="Logo"
//             width={150}
//             height={40}
//           />
//         </a>

//         {/* Custom menu items for PDAAFRICA page */}
//         <ul className="flex gap-8 text-base max-lg:hidden m">
//           {africaLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-poppins leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Large screen Donate button */}
//         <button
//           className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden"
//           onClick={() => handleDonateClick(false)} // Large screen donate logic, no toggleNavigation
//         >
//           Donate now
//         </button>

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
//                 <a
//                   href={item.href}
//                   onClick={toggleNavigation}
//                   className="font-poppins text-xl text-slate-gray"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             <button
//               className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none"
//               onClick={() => handleDonateClick(true)} // Trigger donation on mobile
//             >
//               Donate now
//             </button>
//           </ul>
//         </div>
//       </nav>

//       {/* Conditionally render the DonateForm */}
//       {showDonateForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleCloseDonateForm}
//               className="absolute top-4 right-4 text-red"
//             >
//               Close
//             </button>
//             <DonateForm />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default PDAAFRICAMenu;

// import React, { useState } from "react";
// import { pdaLogo } from "../assets/images";
// import { africaLinks } from "../constants";
// import DonateForm from "./DonateForm";

// const PDAAFRICAMenu = () => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [showDonateForm, setShowDonateForm] = useState(false); // State for showing donate form

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   const handleDonateClick = (isMobile = false) => {
//     setShowDonateForm(true); // Show donate form
//     if (isMobile) toggleNavigation(); // Only close the mobile menu if it's open
//   };

//   const handleCloseDonateForm = () => {
//     setShowDonateForm(false); // Hide donate form
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange relative z-10"></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
//         <a href="/">
//           <img
//             className="pt-3 pb-3"
//             src={pdaLogo}
//             alt="Logo"
//             width={150}
//             height={40}
//           />
//         </a>

//         {/* Custom menu items for PDAAFRICA page */}
//         <ul className="flex gap-8 text-base max-lg:hidden m">
//           {africaLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-poppins leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Large screen Donate button */}
//         <button
//           className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden"
//           onClick={() => handleDonateClick(false)} // Large screen donate logic
//         >
//           Donate now
//         </button>

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
//                 <a
//                   href={item.href}
//                   onClick={toggleNavigation}
//                   className="font-poppins text-xl text-slate-gray"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             <button
//               className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none"
//               onClick={() => handleDonateClick(true)} // Trigger donation on mobile
//             >
//               Donate now
//             </button>
//           </ul>
//         </div>
//       </nav>

//       {/* Conditionally render the DonateForm */}
//       {showDonateForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleCloseDonateForm}
//               className="absolute top-4 right-4 text-red"
//             >
//               Close
//             </button>
//             {/* Only render the form content */}
//             <DonateForm />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default PDAAFRICAMenu;

import React, { useState } from "react";
import { pdaLogo } from "../assets/images";
import { africaLinks } from "../constants";
import DonateForm from "./DonateForm";
import { Link } from "react-router-dom";
import { pdaafricalogo } from "../assets/icons";

const PDAAFRICAMenu = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  //  const [showDonateForm, setShowDonateForm] = useState(false); // State for showing donate form

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  // const handleDonateClick = (isMobile = false) => {
  //   setShowDonateForm(true); // Show donate form
  //   if (isMobile) toggleNavigation(); // Only close the mobile menu if it's open
  // };

  // const handleCloseDonateForm = () => {
  //   setShowDonateForm(false); // Hide donate form
  // };

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

        {/* Custom menu items for PDAAFRICA page */}
        <ul className="flex gap-8 text-base max-lg:hidden m">
          {africaLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-poppins leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Large screen Donate button */}
        <a href="/pdaafrica/donate">
          <button
            className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden"
            onClick={() => handleDonateClick(false)} // Large screen donate logic
          >
            Donate now
          </button>
        </a>

        {/* Mobile menu button */}
        <div className="hidden max-lg:block">
          <label
            htmlFor="openSidebarMenu"
            className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99]"
            onClick={toggleNavigation}
          >
            <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute"></div>
            <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <p className="font-poppins font-medium items-center mt-2">Menu</p>
          </label>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute left-0 w-full bg-white bg-opacity-80 transform transition-transform duration-1000 ease-in-out ${
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
                <Link
                  to={item.href}
                  onClick={() => {
                    toggleNavigation(); // Close the mobile menu after clicking
                  }}
                  className="font-poppins text-xl text-slate-gray"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <a href="/pdaafrica/donate">
              <button
                className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none"
                onClick={() => handleDonateClick(true)} // Trigger donation on mobile
              >
                Donate now
              </button>
            </a>
          </ul>
        </div>
      </nav>
      {/* Conditionally render the DonateForm -the entire code comes here*/}
    </header>
  );
};

/* Conditionally render the DonateForm */

//   {showDonateForm && (
// <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//   <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//     <button
//       onClick={handleCloseDonateForm}
//       className="absolute top-4 right-4 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
//     >
//       ✕
//     </button>

//     <DonateForm />
//   </div>
// </div>
//    )}

export default PDAAFRICAMenu;

// import React, { useState } from "react";
// import { pdaLogo } from "../assets/images";
// import { africaLinks } from "../constants";
// import DonateForm from "./DonateForm";

// const PDAAFRICAMenu = () => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [showDonateForm, setShowDonateForm] = useState(false); // State for showing donate form

//   const toggleNavigation = () => {
//     setOpenNavigation(!openNavigation);
//   };

//   const handleDonateClick = (isMobile = false) => {
//     setShowDonateForm(true); // Show donate form
//     if (isMobile) toggleNavigation(); // Close mobile menu when applicable
//   };

//   const handleCloseDonateForm = () => {
//     setShowDonateForm(false); // Hide donate form
//   };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange relative z-10"></div>
//       <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10">
//         <a href="/">
//           <img
//             className="pt-3 pb-3"
//             src={pdaLogo}
//             alt="Logo"
//             width={150}
//             height={40}
//           />
//         </a>

//         {/* Custom menu items for PDAAFRICA page */}
//         <ul className="flex gap-8 text-base max-lg:hidden m">
//           {africaLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-poppins leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Large screen Donate button */}
//         <button
//           className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-lg:hidden"
//           onClick={() => handleDonateClick(false)} // Large screen donate logic
//         >
//           Donate now
//         </button>

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
//                 <a
//                   href={item.href}
//                   onClick={() => {
//                     toggleNavigation(); // Close the mobile menu after clicking
//                   }}
//                   className="font-poppins text-xl text-slate-gray"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             <button
//               className="flex rounded-xl px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none"
//               onClick={() => handleDonateClick(true)} // Trigger donation on mobile
//             >
//               Donate now
//             </button>
//           </ul>
//         </div>
//       </nav>

//       {/* Conditionally render the DonateForm */}
//       {showDonateForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleCloseDonateForm}
//               className="absolute top-4 right-4 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
//             >
//               ✕
//             </button>
//             {/* Render the DonateForm */}
//             <DonateForm />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default PDAAFRICAMenu;
