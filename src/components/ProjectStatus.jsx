import React from "react";
import { asuaold, asuanew, boatengold, boatengnew } from "../assets/images";
import { FaCheckCircle } from "react-icons/fa";
import Tab from "../components/Tab";

const ProjectStatus = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="font-poppins font-semibold text-3xl text-center text-red mb-8">
        Project Status
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-20 md:px-32 sm:px-10">
        {/* Achievements Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaCheckCircle className="text-4xl text-orange mb-4" />
          <h3 className="text-lg font-semibold text-orange mb-2">
            Achievements
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed font-poppins text-center">
            <li>Two community libraries renovated.</li>
            <li>Reading clubs established.</li>
            <li>Weekly reading sessions conducted.</li>
          </ul>
        </div>

        {/* Milestones Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaCheckCircle className="text-4xl text-orange mb-4" />
          <h3 className="text-lg font-semibold text-orange mb-2">Milestones</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed font-poppins text-center">
            <li>Initial community consultations completed.</li>
            <li>5000 books purchased and distributed.</li>
            <li>
              First reading competition held with 200+ children participating.
            </li>
          </ul>
        </div>

        {/* Progress Bar Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-orange mb-4">
            Progress Overview
          </h3>
          <div className="w-full">
            <div className="mb-4">
              <p className="text-gray-700 font-poppins">Library Renovation</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-orange h-4 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-poppins">Book Distribution</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-orange h-4 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-poppins">Community Engagement</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-orange h-4 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12 px-6 lg:px-20">
        <h3 className="text-lg font-semibold text-orange text-center mb-6">
          Renovation Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Image 1 */}
          <div className="text-center">
            <img
              src={asuaold}
              alt="Asuadei Before Renovation"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm font-poppins text-gray-700 mt-2">
              Asuadei Before Renovation
            </p>
          </div>
          {/* Image 2 */}
          <div className="text-center">
            <img
              src={asuanew}
              alt="Asuadei After Renovation"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm font-poppins text-gray-700 mt-2">
              Asuadei After Renovation
            </p>
          </div>
          {/* Image 3 */}
          <div className="text-center">
            <img
              src={boatengold}
              alt="Boatengkrom Before Renovation"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm font-poppins text-gray-700 mt-2">
              Boatengkrom Before Renovation
            </p>
          </div>
          {/* Image 4 */}
          <div className="text-center">
            <img
              src={boatengnew}
              alt="Boatengkrom After Renovation"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm font-poppins text-gray-700 mt-2">
              Boatengkrom After Renovation
            </p>
          </div>
        </div>
      </div>
      <a href="https://vsla-dashboards.herokuapp.com/magic-library">
        <div className="flex justify-center mt-6 rounded-xl">
          <Tab label="Dashboard" />
        </div>
      </a>
    </section>
  );
};

export default ProjectStatus;
