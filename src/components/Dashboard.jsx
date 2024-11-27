// import React, { useState } from "react";
// import ApexCharts from "react-apexcharts";
// import { CL, CR, vongoing } from "../assets/images";

// const Dashboard = () => {
//   const [profileDropdown, setProfileDropdown] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleProfileDropdown = () => {
//     setProfileDropdown(!profileDropdown);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Toggle dropdown menu
//   const handleDropdownClick = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   const chartOptions = {
//     series: [
//       {
//         name: "2023",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//       {
//         name: "2024",
//         data: [11, 32, 45, 32, 34, 52, 41],
//       },
//     ],
//     chart: {
//       height: 150,
//       type: "area",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//   };

//   const pieOptions = {
//     series: [44, 55, 41, 17, 15],
//     chart: {
//       width: 380,
//       type: "pie",
//     },
//     labels: ["Age 5-10", "Age 11-15", "Age 16-18", "Male", "Female"],
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 100,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   };

//   const lineOptions = {
//     series: [
//       {
//         name: "Participants",
//         data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//       },
//     ],
//     chart: {
//       height: 150,
//       type: "line",
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     title: {
//       text: "Reading Participation Over Time",
//       align: "left",
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//   };

//   return (
//     <div className="flex min-h-screen mt-32">
//       {/* Sidebar */}
//       <aside className={`bg-gray-800 p-4 ${sidebarOpen ? "w-64" : "w-20"}`}>
//         <nav>
//           <ul>
//             <li className="text-white">
//               <button onClick={toggleSidebar}>Toggle Sidebar</button>
//             </li>
//             <ul className="mt-6">
//               {[1, 2, 3].map((i) => (
//                 <li key={i} className="mb-4">
//                   <a
//                     href="#"
//                     className="block py-2 px-4 hover:bg-gray-700"
//                     onClick={() => handleDropdownClick(i)}
//                   >
//                     Menu {i}
//                   </a>
//                   {activeDropdown === i && (
//                     <div className="pl-4 mt-2">
//                       <a href="#" className="block py-1 px-2 hover:bg-gray-700">
//                         Submenu 1
//                       </a>
//                       <a href="#" className="block py-1 px-2 hover:bg-gray-700">
//                         Submenu 2
//                       </a>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <div className="flex-1 p-6">
//         <nav className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//           </div>

//           {/* Profile Section */}
//           <div className="relative">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="cursor-pointer"
//               onClick={toggleProfileDropdown}
//             />
//             {profileDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-4">
//                 <a href="#" className="block">
//                   Profile
//                 </a>
//                 <a href="#" className="block">
//                   Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>

//         <main>
//           {/* Project Status Section */}
//           <section className="project-status my-6">
//             <h1 className="text-xl font-semibold mb-4">Projects</h1>
//             <div className="grid grid-cols-3 gap-4">
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img src={vongoing} alt="VSLA" className="rounded-lg" />
//                 <p className="title font-bold">VSLA</p>
//                 <p className="status text-gray-600">Ongoing</p>
//               </div>
//               <div className="card bg-purple-100 p-4 rounded-lg">
//                 <img src={CL} alt="Child Labour" className="rounded-lg" />
//                 <p className="title font-bold">Child Labour</p>
//                 <p className="status text-gray-600">Ongoing</p>
//               </div>
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img src={CR} alt="Community Reading" className="rounded-lg" />
//                 <p className="title font-bold">Community Reading</p>
//                 <p className="status text-gray-600">Ongoing</p>
//               </div>
//             </div>
//           </section>

//           {/* Dashboard Title and Breadcrumb */}
//           <h1 className="title text-3xl font-bold my-4">Dashboard</h1>
//           <ul className="breadcrumbs flex space-x-2 text-gray-500">
//             <li>
//               <a href="#" className="hover:underline">
//                 Home
//               </a>
//             </li>
//             <li>/</li>
//             <li>
//               <a href="#" className="active text-gray-700">
//                 Dashboard
//               </a>
//             </li>
//           </ul>

//           {/* Info Data Section */}
//           <div className="grid grid-cols-3 gap-6 my-6">
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">1500</h2>
//               <p className="text-gray-500">Number of readers</p>
//             </div>
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">234</h2>
//               <p className="text-gray-500">VSLA participants</p>
//             </div>
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">465</h2>
//               <p className="text-gray-500">Child labour</p>
//             </div>
//           </div>

//           {/* Charts */}
//           <div className="grid grid-cols-2 gap-6">
//             <div id="chart" className="bg-white p-6 rounded-lg shadow-lg">
//               <ApexCharts
//                 options={chartOptions}
//                 series={chartOptions.series}
//                 type="area"
//                 height={150}
//               />
//             </div>

//             <div id="pieChart" className="bg-white p-6 rounded-lg shadow-lg">
//               <ApexCharts
//                 options={pieOptions}
//                 series={pieOptions.series}
//                 type="pie"
//                 width={380}
//               />
//             </div>

//             <div
//               id="lineChart"
//               className="bg-white p-6 rounded-lg shadow-lg col-span-2"
//             >
//               <ApexCharts
//                 options={lineOptions}
//                 series={lineOptions.series}
//                 type="line"
//                 height={150}
//               />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import ApexCharts from "react-apexcharts";
// import { CL, CR, vongoing } from "../assets/images";
// import { sidebar, user } from "../assets/icons";
// import Chatbox from "./Chatbox";

// const Dashboard = () => {
//   const [profileDropdown, setProfileDropdown] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeDropdown, setActiveDropdown] = useState(null); // Added state for activeDropdown

//   const toggleProfileDropdown = () => {
//     setProfileDropdown(!profileDropdown);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Toggle dropdown menu
//   const handleDropdownClick = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   const chartOptions = {
//     series: [
//       {
//         name: "2023",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//       {
//         name: "2024",
//         data: [11, 32, 45, 32, 34, 52, 41],
//       },
//     ],
//     chart: {
//       height: 150,
//       type: "area",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//   };

//   const lineOptions = {
//     series: [
//       {
//         name: "Participants",
//         data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//       },
//     ],
//     chart: {
//       height: 150,
//       type: "line",
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     title: {
//       text: "Reading Participation Over Time",
//       align: "left",
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//   };

//   const pieOptions = {
//     series: [44, 55, 41, 17, 15],
//     chart: {
//       width: 380,
//       type: "pie",
//     },
//     labels: ["Age 5-10", "Age 11-15", "Age 16-18", "Male", "Female"],
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 100,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       id="data-analytics"
//       className="flex min-h-screen max-container mt-24 font-poppins"
//     >
//       {/* Sidebar */}
//       <aside
//         className={`bg-gray-100 p-4 ${
//           sidebarOpen ? "w-64" : "w-20"
//         } max-sm:w-24 md:${sidebarOpen ? "w-48" : "w-16"} lg:${
//           sidebarOpen ? "w-64" : "w-20"
//         } transition-all duration-300`}
//       >
//         <nav>
//           <ul>
//             <li className="text-white">
//               <button onClick={toggleSidebar}>
//                 <img src={sidebar} alt="sidebar" className="w-8 h-8 " />
//               </button>
//             </li>
//             <ul className="mt-6">
//               {[1].map((i) => (
//                 <li key={i} className="mb-4">
//                   <a
//                     href="#"
//                     className="py-2 hover:bg-orange hover:text-white text-orange"
//                     onClick={() => handleDropdownClick(i)}
//                   >
//                     Analytics
//                   </a>
//                   {activeDropdown === i && (
//                     <div className="pl-4 mt-2">
//                       <a
//                         href="https://app.powerbi.com/groups/me/reports/0676b2fd-7dd2-4907-a521-d8dcb6e12fc2/e04e05acc28c439095c8?experience=power-bi"
//                         className="block py-1 px-2 hover:bg-red  hover:text-white"
//                       >
//                         VSLA
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-1 px-2 hover:bg-red  hover:text-white"
//                       >
//                         Child Labour
//                       </a>
//                       <a
//                         href="https://app.powerbi.com/groups/me/reports/2f0c1f4f-2c7b-44e8-b00b-f3847e7d51e6/cd3c0f38fb65155631d3?experience=power-bi"
//                         className="block py-1 px-2 hover:bg-red  hover:text-white"
//                       >
//                         Community Reading
//                       </a>
//                     </div>
//                   )}
//                 </li>
//               ))}
//               <li className="mb-4">
//                 <a
//                   href="#"
//                   className="py-2 hover:bg-orange hover:text-white text-orange"
//                 >
//                   Charts
//                 </a>
//               </li>
//               {/* <li class="divider" data-text="table">
//                 Table
//               </li> */}
//               <li className="mb-4">
//                 <a
//                   href="#"
//                   className="py-2  hover:bg-orange hover:text-white text-orange"
//                 >
//                   Tables
//                 </a>
//               </li>
//             </ul>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <div className="flex-1 p-6">
//         <nav className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//           </div>

//           {/* Profile Section */}
//           <div className="relative">
//             <img
//               src={user}
//               alt="Profile"
//               className="cursor-pointer w-10 h-10 rounded-full"
//               onClick={toggleProfileDropdown}
//             />
//             {profileDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-4">
//                 <a href="#" className="block">
//                   Profile
//                 </a>
//                 <a href="/pdaafrica" className="block">
//                   Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>

//         <main>
//           {/* Project Status Section */}
//           <section className="project-status my-6 ">
//             <h1 className="text-xl font-semibold mb-4">Projects</h1>
//             <div className="grid lg:grid-cols-3 gap-4 max-sm:grid-cols-1 md:grid-cols-2">
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img
//                   src={vongoing}
//                   alt="VSLA"
//                   className="rounded-full w-20 h-20"
//                 />
//                 <p className="text-center text-3xl font-bold">VSLA</p>
//                 <p className="text-center text-gray-600">Ongoing</p>
//               </div>
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img
//                   src={CL}
//                   alt="Child Labour"
//                   className="rounded-full w-20 h-20"
//                 />
//                 <p className="text-center text-3xl font-bold">Child Labour</p>
//                 <p className="text-center text-gray-600">Ongoing</p>
//               </div>
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img
//                   src={CR}
//                   alt="Community Reading"
//                   className="rounded-full w-20 h-20"
//                 />
//                 <p className="text-center text-3xl font-bold">
//                   Community Reading
//                 </p>
//                 <p className="text-center text-gray-600">Ongoing</p>
//               </div>
//             </div>
//           </section>

//           {/* Dashboard Title and Breadcrumb */}
//           <h1 className="title text-3xl font-bold my-4">Dashboard</h1>
//           <ul className="breadcrumbs flex space-x-2 text-gray-500">
//             <li>
//               <a href="#" className="hover:underline">
//                 Home
//               </a>
//             </li>
//             <li>/</li>
//             <li>
//               <a href="#" className="active text-gray-700">
//                 Dashboard
//               </a>
//             </li>
//           </ul>

//           {/* Info Data Section */}
//           <div className="grid lg:grid-cols-3 gap-6 my-6 max-sm:grid-cols-1 md:grid-cols-2">
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">1500</h2>
//               <p className="text-gray-500">Number of readers</p>
//             </div>
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">234</h2>
//               <p className="text-gray-500">VSLA participants</p>
//             </div>
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">465</h2>
//               <p className="text-gray-500">Child labour</p>
//             </div>
//           </div>

//           {/* Charts */}
//           <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-1">
//             <div id="chart" className="bg-white p-6 rounded-lg shadow-lg">
//               <p className="font-poppins text-base">
//                 VSLA Contributions over the year
//               </p>
//               <ApexCharts
//                 options={chartOptions}
//                 series={chartOptions.series}
//                 type="area"
//                 height={150}
//               />
//             </div>

//             <div id="lineChart" className="bg-white p-6 rounded-lg shadow-lg ">
//               <p className="font-poppins text-base">
//                 Community Reading Participant
//               </p>
//               <ApexCharts
//                 options={lineOptions}
//                 series={lineOptions.series}
//                 type="line"
//                 height={150}
//               />
//             </div>

//             <div
//               id="pieChart"
//               className="bg-white p-6 rounded-lg shadow-lg h-auto"
//             >
//               <p className="font-poppins text-base">
//                 Demographics of child labour
//               </p>
//               <ApexCharts
//                 options={pieOptions}
//                 series={pieOptions.series}
//                 type="pie"
//                 width={380}
//               />
//             </div>
//           </div>
//           <div className="mt-6">
//             <Chatbox />
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

import React from "react";
const Dashboard = () => (
  <iframe
    src="https://vsla-dashboards.herokuapp.com/summary"
    style={{ width: "100%", height: "100vh", border: "none" }}
    title="Dashboard"
  ></iframe>
);

export default Dashboard;
