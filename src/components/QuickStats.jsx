// import React from "react";
// import {
//   FaChild,
//   FaCalendarAlt,
//   FaStar,
//   FaUserFriends,
//   FaVenus,
// } from "react-icons/fa"; // Icons
// import Slider from "react-slick"; // Slider
// import CountUp from "react-countup"; // Animated Numbers
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const QuickStats = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
//         Quick Stats
//       </h2>

//       <Slider {...sliderSettings} className="max-w-3xl mx-auto">
//         {/* Slide 1 - Children Participation */}
//         <div className="flex flex-col items-center justify-center p-6">
//           <FaChild className="text-6xl text-blue-500 mb-4" />
//           <CountUp
//             start={0}
//             end={1129}
//             duration={2}
//             className="text-5xl font-bold text-blue-600"
//           />
//           <p className="text-gray-700 mt-4 text-center">
//             Children participate in the reading clubs across 10 project
//             communities.
//           </p>
//         </div>

//         {/* Slide 2 - Weekly Reading Sessions */}
//         <div className="flex flex-col items-center justify-center p-6">
//           <FaCalendarAlt className="text-6xl text-blue-500 mb-4" />
//           <CountUp
//             start={0}
//             end={579}
//             duration={2}
//             className="text-5xl font-bold text-blue-600"
//           />
//           <p className="text-gray-700 mt-4 text-center">
//             Children attend weekly reading sessions.
//           </p>
//         </div>

//         {/* Slide 3 - Membership Increase */}
//         <div className="flex flex-col items-center justify-center p-6">
//           <FaStar className="text-6xl text-yellow-500 mb-4" />
//           <CountUp
//             start={0}
//             end={148.7}
//             decimals={1}
//             duration={2}
//             className="text-5xl font-bold text-yellow-600"
//           />
//           <p className="text-gray-700 mt-4 text-center">
//             Percentage increase in reading club membership since 2023.
//           </p>
//         </div>

//         {/* Slide 4 - Attendance Increase */}
//         <div className="flex flex-col items-center justify-center p-6">
//           <FaUserFriends className="text-6xl text-green-500 mb-4" />
//           <CountUp
//             start={0}
//             end={34.99}
//             decimals={2}
//             duration={2}
//             className="text-5xl font-bold text-green-600"
//           />
//           <p className="text-gray-700 mt-4 text-center">
//             Reading club attendance has increased by 34.99%.
//           </p>
//         </div>

//         {/* Slide 5 - Female Participation */}
//         <div className="flex flex-col items-center justify-center p-6">
//           <FaVenus className="text-6xl text-pink-500 mb-4" />
//           <p className="text-5xl font-bold text-pink-600">More Females</p>
//           <p className="text-gray-700 mt-4 text-center">
//             More female children are involved in the reading clubs than males.
//           </p>
//         </div>
//       </Slider>
//     </section>
//   );
// };

// export default QuickStats;

import React from "react";
import {
  FaChild,
  FaCalendarAlt,
  FaStar,
  FaUserFriends,
  FaVenus,
} from "react-icons/fa"; // Icons
import CountUp from "react-countup"; // Animated Numbers

const QuickStats = () => {
  return (
    <section className="py-12 bg-white font-poppins">
      <h2 className="font-poppins font-semibold text-3xl text-center text-red mb-4">
        About the Project
      </h2>
      <p className="text-gray-600 mt-4 px-4 md:px-12 font-poppins text-base text-center ">
        A 2-year initiative by Participatory Development Associates (PDA) in
        partnership with Magic Libraries Foundation.
      </p>
      <p className="text-gray-600 mt-2 px-4 md:px-12 font-poppins text-base text-center mb-4 ">
        It aims to promote reading literacy among children in cocoa-growing
        communities in Ghana.
      </p>

      {/* Flex container to display stats side-by-side */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Child Participation */}
        <div className="flex flex-col items-center justify-center p-6 hover:scale-110 transform transition-all duration-300">
          <FaChild className="text-4xl text-orange mb-4" />
          <CountUp
            start={0}
            end={1129}
            duration={2}
            className="text-4xl font-bold text-orange"
          />
          <p className="text-gray-700 mt-4 text-center">
            Children participate in the reading clubs across 10 project
            communities.
          </p>
        </div>

        {/* Weekly Reading Sessions */}
        <div className="flex flex-col items-center justify-center p-6 hover:scale-110 transform transition-all duration-300">
          <FaCalendarAlt className="text-4xl text-orange mb-4" />
          <CountUp
            start={0}
            end={579}
            duration={2}
            className="text-4xl font-bold text-orange"
          />
          <p className="text-gray-700 mt-4 text-center">
            Children attend weekly reading sessions .
          </p>
        </div>

        {/* Membership Increase */}
        <div className="flex flex-col items-center justify-center p-6 hover:scale-110 transform transition-all duration-300">
          <FaStar className="text-4xl text-orange mb-4" />
          <CountUp
            start={0}
            end={148.7}
            decimals={1}
            duration={2}
            className="text-4xl font-bold text-orange"
          />
          <p className="text-gray-700 mt-4 text-center">
            Percentage increase in reading club membership since 2023.
          </p>
        </div>

        {/* Attendance Increase */}
        <div className="flex flex-col items-center justify-center p-6 hover:scale-110 transform transition-all duration-300">
          <FaUserFriends className="text-4xl text-orange mb-4" />
          <CountUp
            start={0}
            end={34.99}
            decimals={2}
            duration={2}
            className="text-4xl font-bold text-orange"
          />
          <p className="text-gray-700 mt-4 text-center">
            Percentage increase in reading club attendance over the period.
          </p>
        </div>

        {/* Female Participation */}
        <div className="flex flex-col items-center justify-center p-6 hover:scale-110 transform transition-all duration-300">
          <FaVenus className="text-4xl text-orange mb-4" />
          <CountUp
            start={0}
            end={300}
            duration={2}
            className="text-4xl font-bold text-orange"
          />
          {/* <p className="text-4xl font-bold text-red">More Females</p> */}
          <p className="text-gray-700 mt-4 text-center">
            More female children are involved in the reading clubs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
