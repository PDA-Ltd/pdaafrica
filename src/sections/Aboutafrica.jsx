import Button from "../components/Button";
import { mission } from "../assets/images";
import { reachout } from "../assets/images";

const Aboutafrica = () => {
  return (
    <section
      id="about-us"
      className="max-container items-center justify-center gap-6 w-full flex max-sm:flex-col max-sm:mt-20 flex-col lg:grid"
    >
      <h2 className="text-red font-bold text-xl text-center mb-5">About Us</h2>
      <div className="flex flex-row gap-20 justify-between flex-wrap max-sm:flex-col max-md:flex-col">
        <div className="flex flex-1 flex-col lg:justify-center ">
          <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold">
            Our
            <span className="text-orange"> Mission </span>
            {/* <span className='text-coral-red'>Quality </span> Shoes */}
          </h2>
          {/* <p className=" lg:max-w-lg text-base max-sm:text-sm md:text-sm "> */}
          <p className="mt-4 text-xl font-poppins leading-6 lg:max-w-lg">
            PDA Africa works with communities, governments, local assemblies and
            like-minded partners to facilitate community-led development using
            sustainable, innovative and participatory approaches
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={mission}
            alt="mission"
            width={570}
            height={522}
            className="object-contain rounded-xl"
          />
        </div>
      </div>
      <div></div>
      <div className="flex flex-row gap-20 justify-between items-center flex-wrap max-sm:flex-col-reverse max-md:flex-col-reverse">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={reachout}
            alt="mission"
            width={570}
            height={522}
            className="object-contain rounded-xl"
          />
        </div>

        <div className="flex flex-1 flex-col ">
          <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold">
            Our
            <span className="text-orange"> Vision </span>
            {/* <span className='text-coral-red'>Quality </span> Shoes */}
          </h2>
          <p className="mt-4 lg:max-w-lg text-xl font-poppins leading-6 ">
            We envisage countries where communities have the capacity to plan
            and implement their own development agendas
          </p>
          <p className="mt-6 lg:max-w-lg text-xl font-poppins leading-6 ">
            We envisage a community where vulnerable, marginalized and minority
            groups participate actively in the development process for an
            inclusive society
          </p>
          <p className="mt-6 lg:max-w-lg text-xl font-poppins leading-6 ">
            We envisage a community where the youth are empowered to make
            positive impact on society
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutafrica;
