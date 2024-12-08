import React from "react";
import Slider from "react-slick";
import { modul, obuasi } from "../assets/images";
import {
  beyond,
  cocoa,
  coram,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  finan,
  sucden,
  lindt,
  nestle,
} from "../assets/images";
import Tab from "../components/Tab";

// const ProjectCard = ({ title, description, location, officers }) => (
//   <div className="border rounded-lg p-6 shadow-md">
//     <h3 className="text-2xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//     <p className="mt-4 text-gray-500">Location: {location}</p>
//     <p className="text-gray-500">Field Officers: {officers}</p>
//   </div>
// );

const successStories = [
  "“Joining the VSLA group has helped me save for my children’s education.” – Cocoa Farmer",
  "“With the project’s support, I now understand the importance of keeping my children in school.” – Parent",
  "“The training sessions have changed our approach to child labor.” – Community Leader",
];

const SuccessStories = () => {
  const settings = { dots: true, infinite: true, autoplay: true, speed: 500 };
  return (
    <section className="py-8 px-8 bg-white text-center">
      <Slider {...settings}>
        {successStories.map((story, index) => (
          <div key={index} className="p-8">
            <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-orange">{story}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const ProjectCard = ({ title, description, location, officers, text }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      {/* Front of the card */}
      <div className="flip-card-front border rounded-lg p-6 shadow-md bg-white font-poppins">
        <h3 className="text-2xl font-bold mb-2 text-orange">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="mt-4 text-gray-500">Location: {location}</p>
        <p className="text-gray-500">Field Officers: {officers}</p>
      </div>

      {/* Back of the card */}
      <div className="flip-card-back border rounded-lg p-6 shadow-md bg-white font-poppins">
        {/* <h3 className="text-2xl font-bold mb-2">{title}</h3> */}
        <p className="text-gray-600 text-[12px]">{text}</p>
      </div>
    </div>
  </div>
);

const partners = [
  { imgURL: beyond, name: "Beyond" },
  { imgURL: cocoa, name: "Cocoa" },
  { imgURL: coram, name: "Coram" },
  { imgURL: kokoo, name: "Kokoo" },
  { imgURL: opm, name: "OPM" },
  { imgURL: pandemics, name: "Pandemics" },
  { imgURL: sucden, name: "Sucden" },
  { imgURL: lindt, name: "Lindt" },
  { imgURL: nestle, name: "Nestle" },
];

const VSLA = () => {
  return (
    <section
      id="pdaafrica"
      className="max-container max-w-full min-h-screen font-poppins"
    >
      <div className="mt-26 ">
        <div
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${obuasi})` }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-end justify-center">
            <div className="text-center text-orange">
              <h1 className="font-poppins font-bold text-6xl text-orange pt-20">
                Financial Inclusions and VSLA's
              </h1>
              <p className="text-white mt-4 px-4 md:px-12 font-poppins mb-5 text-xl">
                Empowering Communities, Building Resilient Futures
              </p>
              {/* <button className="mt-6 px-6 py-2 mb-10 bg-red text-white rounded-full hover:bg-orange">
                Learn More About Our Work
              </button> */}
            </div>
          </div>
        </div>

        <div className="py-16 bg-white ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-red">Who We Are</h2>
            <p className="text-base text-gray-700">
              PDA has a proven track record of partnering with communities and
              other development organizations.
            </p>
            <div className="mt-6 flex justify-center space-x-8">
              <div>
                <p className="text-4xl font-bold text-orange">21+</p>
                <p className="text-gray-500">Years of Impact</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange">200+</p>
                <p className="text-gray-500">Communities</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange">1000+</p>
                <p className="text-gray-500">Beneficiaries</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 bg-gray-100 px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-red">
              Our VSLA+ Model
            </h2>
            <p className="text-base text-gray-700 mb-8">
              PDA adopts a unique integrated VSLA (VSLA+) model as a
              self-facilitated platform to plug in sustainable development
              interventions. Our diverse and customizable VSLA+ modules and
              components allow for specific interventions to be co-designed with
              our partners for the greatest impact in target communities.
            </p>
            <div className="mt-6">
              {/* Replace this with an actual infographic or flowchart image */}
              <img
                src={modul}
                alt="VSLA+ Model Infographic"
                className="mx-auto max-sm:w-auto shadow-lg rounded-lg"
              />
              <p className="text-gray-600 mt-4 italic">
                The VSLA+ model incorporates interventions such as financial
                literacy, gender sensitivity training, and child labor
                remediation to create a sustainable impact.
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 mx-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-red">
              Our Impact and Partnerships
            </h2>
            <p className="text-lg text-gray-700">
              PDA has a proven track record of partnering with communities and
              other development organizations to implement large-scale
              development interventions in promoting ethical and transparent
              commodity supply chains and communities over the last 21 years.
            </p>

            <div className="flex overflow-hidden group justify-center mt-10">
              <div className="flex animate-loop-scroll space-x-10 group-hover:paused relative">
                {partners.map((partner, index) => (
                  <img
                    key={index}
                    src={partner.imgURL}
                    alt={partner.name}
                    className="w-20 h-20"
                  />
                ))}
                {partners.map((partner, index) => (
                  <img
                    key={index + partners.length}
                    src={partner.imgURL}
                    alt={partner.name}
                    className="w-20 h-20"
                  />
                ))}
              </div>
            </div>

            <a href="https://vsla-dashboards.herokuapp.com/login">
              <div className="flex justify-center mt-6">
                <Tab label="Dashboard" />
              </div>
            </a>
          </div>
        </div>

        <div className="py-16 bg-gray-100">
          <div className="max-w-5xl max-md:max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-red">Our Projects</h2>
            <div className="vslacard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 md:gap-16 max-sm:px-20 md:px-14">
              <ProjectCard
                title="Nestle Income Accelerator Programme [Cote D’Ivoire]"
                description="Improving the livelihoods of cocoa-farming families through VSLA groups and Gender Action Learning Systems (GALS) training."
                location="Cote D’Ivoire"
                officers="7"
                text="The Nestlé Income Accelerator Program (IAP) aims to improve the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices.
                PDA, in partnership with Beyond Beans, formed 77 VSLA groups under the project in Ivory Coast. Between January to March 2024, 17 of the VSLA groups had their share outs and completed Gender Action Learning Systems (GALS) training for their members. This training employs participatory techniques to sensitize participants on gender issues and increase their financial literacy, among other benefits."
              />
              <ProjectCard
                title="Nestle Income Accelerator Programme [Ghana]"
                description="Income diversification and restructuring of VSLA groups for cocoa-farming communities."
                location="Ghana"
                officers="7"
                text="In Ghana, the programme still has the overall goal of improving the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. Specifically, however, there are four pillars (the promotion of school enrolment; pruning; agroforestry; and income diversification). PDA is engaged for the pillar of income diversification, through the formation of VSLA groups for selected program beneficiaries and the restructuring of existing VSLA groups which have IAP beneficiaries.
                Currently, project communities have been sensitized, and field officers have begun engaging interested project beneficiaries for the formation and restructuring of VSLA groups."
              />
              <ProjectCard
                title="SUCDEN VSLA Programme"
                description="Addressing cocoa sector challenges, improving women's earning capacity, and promoting financial literacy in Ghana."
                location="Western North Region, Ghana"
                officers="2"
                text="The Women’s Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour. The project is being implemented in Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with Sucden and Kuapa Kokoo Farmers’ Union (KKFU). 9 VSLA groups have been formed under the project, meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members."
              />
              <ProjectCard
                title="Enroute Project [Cote D’Ivoire]"
                description="Testing interventions for supporting farmers' living income and implementing VSLA-CHILD and Empowering Better Decisions (EBD) trainings."
                location="Cote D’Ivoire"
                officers="2"
                text="The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions:Cash transfer only, Cash transfer and services, Only services. Under these three interventions, PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas. 25 VSLA-CHILD groups and 14 Empowering Better Decisions (EBD) groups have been formed under the project."
              />
              <ProjectCard
                title="ECOM/NCP VSLA-GALS Programme"
                description="Building economic and social capacities of cocoa farmers in Ghana, focusing on financial inclusion and gender empowerment."
                location="Eastern & Central Regions, Ghana"
                officers="4"
                text="The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Nestle Cocoa Plan (NCP) and ECOM. 40 VSLAs are being run under this project"
              />
              <ProjectCard
                title="New ECOM VSLA GALS Project"
                description="Economic and social empowerment through VSLA and GALS training for cocoa farmers across multiple regions in Ghana."
                location="Eastern, Central, Ashanti, Western North, Oti Regions, Ghana"
                officers="4"
                text="The VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities, Ofoase and Abenase in the Eastern Region, Dunkwa in the Central Region, Asankaragua in the Western North Region, Offinso in the Ashanti Region and Papase in Oti Region through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Lindt & Sprüngli Farming Program and ECOM. 49 VSLA groups have been formed under the project."
              />
              {/* Add more ProjectCards as needed */}
            </div>
          </div>
        </div>
        {/* Success Stories Slider */}
        <section className="py-16 px-8 bg-white text-center">
          <h2 className="text-3xl font-bold text-red">Stories of Change</h2>
          <p className="mt-6 text-gray-700">
            Read about the real impact of our project on the lives of children
            and families.
          </p>
          <SuccessStories />
        </section>
      </div>
    </section>
  );
};

export default VSLA;
