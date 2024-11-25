// import Button from "../components/Button";
// import { useState } from "react";
// import ProjectCard from "../components/ProjectCard";
// import { projects } from "../constants";

// const Projects = () => {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleButtonClick = (link) => {
//     setActiveForm(link);
//   };

//   const handleClose = () => {
//     setActiveForm(null);
//   };

//   return (
//     <section id="projects" className="max-container w-full ">
//       <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//         Projects
//       </h2>
//       <div className="flex justify-center w-full">
//         <h3 className="text-4xl leading-[68px]  font-poppins font-bold mb-5">
//           Our<span className="text-orange"> Programmes </span>
//         </h3>
//       </div>
//       <div className=" flex justify-center flex-wrap gap-9">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.label}
//             {...project}
//             onClick={() => handleButtonClick(project.link)}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center mt-10">
//         <button className="bg-orange text-white py-4 px-6 rounded-lg hover:bg-red text-lg font-poppins">
//           DASHBOARD
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import Button from "../components/Button";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Projects = () => {
  // const [activeForm, setActiveForm] = useState(null);
  // const navigate = useNavigate(); // Create navigate function

  // const handleButtonClick = (link) => {
  //   setActiveForm(link);
  // };

  // const handleClose = () => {
  //   setActiveForm(null);
  // };

  // Function to handle navigation
  // const handleDashboardClick = () => {
  //   navigate("/pdaafrica/dataanalytics"); // Navigate to the desired route
  // };

  return (
    <section id="projects" className="max-container mx-auto px-4 py-8">
      <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
        Projects
      </h2>
      <div className="flex justify-center w-full mb-5">
        <h3 className="text-4xl leading-[68px] font-poppins font-bold">
          Our <span className="text-orange">Programmes</span>
        </h3>
      </div>
      <div className="flex justify-center flex-wrap gap-9 mb-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.label}
            {...project}
            onClick={() => handleButtonClick(project.link)}
          />
        ))}
      </div>
      {/* <div className="flex justify-center">
        <button
          className="bg-orange text-white py-4 px-6 rounded-lg hover:bg-red text-lg font-poppins"
          onClick={handleDashboardClick} // Handle button click
        >
          DASHBOARD
        </button>
      </div> */}
    </section>
  );
};

// {activeForm && (
//   <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//     <div className="bg-white p-8 rounded-lg">
//       {/* Render the active form here based on activeForm */}
//       <Button onClick={handleClose}>Close</Button>
//     </div>
//   </div>
// )}

export default Projects;
