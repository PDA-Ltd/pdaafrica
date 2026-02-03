// import React from "react";
// import { useState, useEffect } from "react";
// import Tab from "../components/Tab";
// import {
//   rand1,
//   rand2,
//   rand3,
//   rand4,
//   rand5,
//   rand6,
//   rand7,
//   rand8,
//   rand9,
// } from "../assets/images";

// const AfricaGallery = () => {
//   const imageLinks = [
//     rand1,
//     rand2,
//     rand3,
//     rand4,
//     rand5,
//     rand6,
//     rand7,
//     rand8,
//     rand9,

//     // Add more links as needed
//   ];

//   const [randomImages, setRandomImages] = useState([]);

//   useEffect(() => {
//     // Shuffle the images and pick the first 3
//     const shuffledImages = imageLinks
//       .sort(() => 0.5 - Math.random())
//       .slice(0, 3);
//     setRandomImages(shuffledImages);
//   }, []); // This ensures new random images are picked each time the component is rendered

//   return (
//     <section className="max-container justify-center max-sm:mx-5" id="gallery">
//       <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//         Gallery
//       </h2>
//       <div className="flex justify-center w-full">
//         <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5">
//           Our<span className="text-orange"> Activities </span>
//         </h3>
//       </div>
//       <div className="flex justify-between mx-24 max-sm:ml-0 max-sm:gap-7">
//         <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
//           Photos
//         </h3>

//         <a
//           href="https://photos.app.goo.gl/cYe3GkajXRf1VfdF8"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Tab label="MORE PHOTOS" />
//         </a>
//       </div>
//       <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 md:grid-cols-3 lg:mx-10 mt-5">
//         {randomImages.map((imageLink, index) => (
//           <div key={index}>
//             <img
//               className="h-60 max-sm:w-full w-full max-w-full rounded-lg object-cover object-center"
//               src={imageLink}
//               alt="gallery-photo"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AfricaGallery;

import React from "react";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
  rand10,
  rand11,
  rand12,
  rand13,
  rand14,
  rand15,
  rand16,
  rand17,
  rand18,
} from "../assets/images";

const AfricaGallery = () => {
  // Define an array of album objects with their URLs, image , titles, and item counts
  const albums = [
    {
      url: "https://photos.app.goo.gl/DeZ3HMJ9Nn5p1XcJ6",
      img: rand1,
      title: "Field Trip_February 2020",
      count: 50,
    },
    {
      url: "https://photos.app.goo.gl/Ax1K2Dpc7GCXwPcS8",
      img: rand2,
      title: "Farmer Voice Radio",
      count: 204,
    },
    {
      url: "https://photos.app.goo.gl/zMscdv8XuBUzQUQq7",
      img: rand3,
      title: "VSLA/GALS Learning Meeting, Bekwai",
      count: 48,
    },
    {
      url: "https://photos.app.goo.gl/8nudMZcdbmGX4Fmw5",
      img: rand4,
      title: "World Day Against Child Labour (Nyonkopa)",
      count: 15,
    },
    {
      url: "https://photos.app.goo.gl/A8eQU7bW2JrMxBUD9",
      img: rand5,
      title: "Cocoa Commuinities Library Project",
      count: 32,
    },
    {
      url: "https://photos.app.goo.gl/qzQQjUfwSvGEZPhv7",
      img: rand6,
      title: "(The Launch) Cocoa Communities Library Project",
      count: 98,
    },
    {
      url: "https://photos.app.goo.gl/8WtHfaQcPRaoTbSMA",
      img: rand7,
      title: "CCLP LAUNCH",
      count: 27,
    },
    {
      url: "https://photos.app.goo.gl/hoCJmrYiGjDmib7g8",
      img: rand8,
      title: "CCLP Quiz Wednesday",
      count: 92,
    },
    {
      url: "https://photos.app.goo.gl/yvz4vzEna5fhph3d6",
      img: rand9,
      title: "CCLP ANNUAL READING FESTIVAL 2023",
      count: 116,
    },
    {
      url: "https://photos.app.goo.gl/TgPZbRx91FNrVoHi6",
      img: rand10,
      title: "CCLP_February 2024 MONITORING",
      count: 121,
    },
    {
      url: "https://photos.app.goo.gl/gN9Y9xoRqAHsm6TH7",
      img: rand11,
      title: "MANKRANSO SCHOOL B Reading Club launch",
      count: 20,
    },
    {
      url: "https://photos.app.goo.gl/TFeFg8hEAYtG8GGh6",
      img: rand12,
      title:
        "2nd Cluster Level Reading Competition 2024 (Ahafo Ano South East and West)",
      count: 250,
    },
    {
      url: "https://photos.app.goo.gl/nFod4YH6L7Kcr4A98",
      img: rand13,
      title: "2nd Annual Reading Festival 2024",
      count: 170,
    },
    {
      url: "https://photos.app.goo.gl/k7bvevAG8wvhg9ym7",
      img: rand14,
      title: "Cluster Library Day at Asuadei",
      count: 160,
    },
    {
      url: "https://photos.app.goo.gl/inpesJkwkYNsHFhj7",
      img: rand15,
      title: "Cluster Library Day at Boatengkrom",
      count: 176,
    },
    {
      url: "https://photos.app.goo.gl/w6H3DR2PY3kdHzpdA",
      img: rand16,
      title: "2nd Cluster Library Day @ Asuadei",
      count: 53,
    },
    {
      url: "https://photos.app.goo.gl/EFpdQYXkPXEqZ9rq5",
      img: rand17,
      title: "2nd Cluster Library Day @ Boatengkrom",
      count: 116,
    },
    {
      url: "https://photos.app.goo.gl/cYe3GkajXRf1VfdF8",
      img: rand18,
      title: "Nyonko Pa Child Labour Remediation Project",
      count: 203,
    },

    // Add more album links here, following the same structure.
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-4 gap-4 max-w-full max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3">
        {albums.map((album, index) => (
          <a
            key={index}
            href={album.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <img
              src={album.img}
              alt={album.title}
              className="w-full h-48  object-cover rounded-lg"
            />
            <p className="mt-2 font-poppins font-medium">{album.title}</p>
            <p className="text-sm text-gray-500">{album.count} items</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AfricaGallery;
