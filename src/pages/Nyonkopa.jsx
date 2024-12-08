// import React from "react";

// const Nyonkopa = () => {
//   return (
//     <section id="pdaafrica" className="max-container w-full min-h-screen">
//       <div className="mt-28 ">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Nyonkopa Child Labour Remediation
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Nyonkopa;

// import React from "react";
// import Slider from "react-slick";
// import {
//   FaChild,
//   FaUsers,
//   FaHandsHelping,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { slide } from "../assets/images";

// const stats = [
//   { icon: <FaChild />, number: 6678, description: "Children Remediated" },
//   { icon: <FaMapMarkerAlt />, number: 277, description: "Communities Covered" },
//   { icon: <FaUsers />, number: 20, description: "VSLA Groups Formed" },
//   {
//     icon: <FaMapMarkerAlt />,
//     number: 6,
//     description: "Administrative Sectors",
//   },
// ];

// const CommunityImpact = () => {
//   const settings = { dots: true, infinite: true, autoplay: true, speed: 500 };

//   return (
//     <section className="py-12 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">
//         Community Impact
//       </h2>
//       <Slider {...settings}>
//         {stats.map((stat, index) => (
//           <div key={index} className="text-center">
//             <div className="text-6xl text-orange-500">{stat.icon}</div>
//             <div className="text-5xl font-bold mt-4 animate-count">
//               {stat.number}
//             </div>
//             <p className="text-lg text-gray-700 mt-2">{stat.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// const Nyonkopa = () => {
//   return (
//     <section
//       id="pdaafrica"
//       className="max-container w-full min-h-screen font-poppins"
//     >
//       <div className="mt-28 ">
//         {/* Hero Section */}
//         <div
//           className="relative h-screen bg-cover bg-center"
//           style={{ backgroundImage: `{ slide } ` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           <div className="relative flex items-center justify-center h-full text-center text-white">
//             <div>
//               <h1 className="text-5xl font-bold">
//                 Nyonkopa Child Labor Remediation Project
//               </h1>
//               <p className="text-xl mt-4">
//                 Partnering for a Brighter Future: A Two-Year Initiative by Barry
//                 Callebaut and PDA
//               </p>
//               <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Project Overview Section */}
//         <section className="py-16 px-8 text-center bg-white">
//           <h2 className="text-4xl font-bold text-orange-500">
//             About the Project
//           </h2>
//           <p className="mt-6 text-gray-700">
//             The Nyonkopa Child Labor Remediation Project is a 2-year initiative
//             between Barry-Callebaut and Participatory Development Associates
//             (PDA). It aims to remediate child labor for 6,678 children across
//             277 communities.
//           </p>
//           <div className="mt-10 flex flex-wrap justify-center gap-28">
//             <div className="flex flex-col items-center max-w-xs">
//               <FaChild className="h-10 w-10  text-orange mb-4" />
//               <p className="font-bold ">6,678 Children in Remediation</p>
//             </div>
//             <div className="flex flex-col items-center max-w-xs">
//               <FaMapMarkerAlt className="h-10 w-10 text-orange mb-4" />
//               <p className="font-bold">277 Communities Covered</p>
//             </div>
//             <div className="flex flex-col items-center max-w-xs">
//               <FaUsers className="h-10 w-10 text-orange mb-4" />
//               <p className="font-bold">20 VSLA Groups Formed</p>
//             </div>
//           </div>
//         </section>

//         {/* Objectives and Goals Section */}
//         <section className="py-16 px-8 bg-gray-100">
//           <h2 className="text-4xl font-bold text-center text-orange">
//             Project Objectives
//           </h2>
//           <div className="mt-8 flex flex-wrap justify-center gap-12">
//             <div className="text-center max-w-xs">
//               <h3 className="font-bold text-xl">
//                 Remediation Process Oversight
//               </h3>
//               <p className="text-gray-700 mt-4">
//                 Oversee the remediation process for children involved in labor.
//               </p>
//             </div>
//             <div className="text-center max-w-xs">
//               <h3 className="font-bold text-xl">Economic Empowerment</h3>
//               <p className="text-gray-700 mt-4">
//                 Improve household financial security by forming VSLA groups.
//               </p>
//             </div>
//             <div className="text-center max-w-xs">
//               <h3 className="font-bold text-xl">Community Sensitization</h3>
//               <p className="text-gray-700 mt-4">
//                 Raise awareness about child labor and promote community-led
//                 initiatives.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Community Impact Section with Slider */}
//         <CommunityImpact />

// {/* Beneficiary Communities Map */}
// <section className="py-16 px-8 bg-white text-center">
//   <h2 className="text-4xl font-bold text-orange">Project Coverage</h2>
//   <p className="mt-6 text-gray-700">
//     The project operates across six Nyonkopa administrative sectors:
//     Akim Oda, Assin Fosu, Asante Bekwai, Kasapin, Goaso, and Juaboso.
//   </p>
//   {/* Placeholder for Map */}
//   <div className="mt-10 bg-gray-200 h-64 flex items-center justify-center">
//     <p>Interactive Map Placeholder</p>
//   </div>
// </section>

//         {/* Success Stories Section */}
// <section className="py-16 px-8 bg-gray-100 text-center">
//   <h2 className="text-4xl font-bold text-orange-500">
//     Stories of Change
//   </h2>
//   <p className="mt-6 text-gray-700">
//     Read about the real impact of our project on the lives of children
//     and families.
//   </p>
//   <div className="mt-10 flex flex-wrap justify-center gap-8">
//     <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg">
//       <p className="text-gray-800">
//         “Joining the VSLA group has helped me save for my children’s
//         education.” – Cocoa Farmer
//       </p>
//     </div>
//     <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg">
//       <p className="text-gray-800">
//         “With the project’s support, I now understand the importance of
//         keeping my children in school.” – Parent
//       </p>
//     </div>
//   </div>
// </section>

// {/* Get Involved Section */}
// <section className="py-16 px-8 bg-white text-center">
//   <h2 className="text-4xl font-bold text-orange">Get Involved</h2>
//   <p className="mt-6 text-gray-700">
//     Support the Nyonkopa Child Labor Remediation Project by partnering
//     with us or offering assistance.
//   </p>
//   <button className="mt-8 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange">
//     Contact Us
//   </button>
// </section>

//         {/* Footer */}
//         {/* <footer className="py-8 bg-gray-800 text-center text-white">
//         <p>© 2024 PDA Ghana | Nyonkopa Child Labor Remediation Project</p>
//       </footer> */}
//       </div>
//     </section>
//   );
// };

// export default Nyonkopa;

import React from "react";
import Slider from "react-slick";
import {
  FaChild,
  FaUsers,
  FaHandsHelping,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { slide, nyomodul, nyonk } from "../assets/images";

const successStories = [
  "“Joining the VSLA group has helped me save for my children’s education.” – Cocoa Farmer",
  "“With the project’s support, I now understand the importance of keeping my children in school.” – Parent",
  "“The training sessions have changed our approach to child labor.” – Community Leader",
];

const SuccessStories = () => {
  const settings = { dots: true, infinite: true, autoplay: true, speed: 500 };
  return (
    <section className="py-8 px-8 bg-gray-100 text-center">
      <Slider {...settings}>
        {successStories.map((story, index) => (
          <div key={index} className="p-8">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
              <p className="text-orange">{story}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const Nyonkopa = () => {
  return (
    <section
      id="pdaafrica"
      className="max-container max-w-full w-full min-h-screen font-poppins"
    >
      {/* Hero Section with Video */}
      {/* <div className="relative h-[550px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src={slide}
          poster="rand7"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${nyonk})` }}
      >
        {/* Optional Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex items-end justify-center h-full text-center text-white">
          <div>
            <h1 className="text-6xl text-orange font-bold font-poppins">
              Nyonkopa Child Labor Remediation Project
            </h1>
            <p className="text-xl mt-4 mb-5">
              Partnering for a Brighter Future: A Two-Year Initiative by Barry
              Callebaut and PDA
            </p>
            {/* <button className="mt-6 px-6 py-2 bg-red text-white rounded-full hover:bg-orange">
              Learn More
            </button> */}
          </div>
        </div>
      </div>

      {/* Project Overview and Objectives */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl font-bold text-red">About the Project</h2>
        <p className="mt-6 text-gray-700">
          The Nyonkopa Child Labor Remediation Project is a 2-year initiative
          between Barry-Callebaut and Participatory Development Associates
          (PDA). It aims to remediate child labor for 10,436 children across 400
          communities.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-28">
          <div className="flex flex-col items-center max-w-xs">
            <FaChild className="h-10 w-10  text-orange mb-4" />
            <p className="font-bold ">10,436 Children in Remediation</p>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <FaMapMarkerAlt className="h-10 w-10 text-orange mb-4" />
            <p className="font-bold">400 Communities Covered</p>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <FaUsers className="h-10 w-10 text-orange mb-4" />
            <p className="font-bold">46 VSLA Groups Formed</p>
          </div>
        </div>
      </section>

      {/* Objectives and Goals Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-red">
          Project Objectives
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-12">
          <div className="text-center max-w-xs">
            <h3 className="font-bold text-xl text-orange">
              Remediation Process
            </h3>
            <p className="text-gray-700 mt-4">
              Oversee the remediation process for children involved in labor.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <h3 className="font-bold text-xl text-orange">
              Economic Empowerment
            </h3>
            <p className="text-gray-700 mt-4">
              Improve household financial security by forming VSLA groups.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <h3 className="font-bold text-xl text-orange">
              Community Sensitization
            </h3>
            <p className="text-gray-700 mt-4">
              Raise awareness about child labor and promote community-led
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Module */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-red">Project Module</h2>
        <p className="mt-6 text-gray-700">
          PDA uses a four-level broad child labour remediation model that uses
          an integrated participatory approach and facilitation methodologies.
        </p>
        <div className="flex justify-center pt-10">
          <img
            src={nyomodul}
            alt="module"
            className="mx-auto rounded-lg shadow-lg w-11/12 md:w-8/12  "
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-red">Project Coverage</h2>
        <p className="mt-6 text-gray-700">
          The project operates across six Nyonkopa administrative sectors: Akim
          Oda, Assin Fosu, Asante Bekwai, Kasapin, Goaso, and Juaboso.
        </p>
        {/* Placeholder for Map */}
        <div className="mt-10 w-full h-64 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1015357.3502807181!2d-2.56408976350274!3d6.232106141599593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAkim%20Oda%2C%20Assin%20Fosu%2C%20Asante%20Bekwai%2C%20Kasapin%2C%20Goaso%2C%20and%20Juaboso.!5e0!3m2!1sen!2sgh!4v1730807163690!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Project Map"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-red">Stories of Change</h2>
        <p className="mt-6 text-gray-700">
          Read about the real impact of our project on the lives of children and
          families.
        </p>
        <SuccessStories />
      </section>
      <section>
        <div className="flex justify-center align-middle p-3">
          <h1 className="font-poppins text-3xl font-bold text-red">
            Child Abuse Tracker
          </h1>
        </div>
        <iframe
          src="https://stopviolenceagainstchildren.ushahidi.io/map"
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Dashboard"
        ></iframe>
      </section>

      {/* Get Involved Section */}

      {/* <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-red">Get Involved</h2>
        <p className="mt-6 text-gray-700">
          Support the Nyonkopa Child Labor Remediation Project by partnering
          with us or offering assistance.
        </p>
        <img
          src={nyomodul}
          alt="module"
          className="w-96 h-96  "
        />
        <button className="mt-8 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange">
          Contact Us
        </button> */}
    </section>
  );
};

export default Nyonkopa;
