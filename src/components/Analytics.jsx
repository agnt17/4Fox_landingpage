import React from "react";
// import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center lg:text-4xl text-2xl text-white">
        <div className="mb-4">Trusted Partners</div>
        <div className="mb-4 text-4xl sm:text-4xl text-white">Icons</div>
        <p className="text-white">
          <span className="p-1 text-emerald-400 font-extralight">
            Who we are?
          </span>{" "}
          We are a global social media and influencer marketing agency
          <span className="text-emerald-400  p-1 font-extralight">
            powered by technology
          </span>
        </p>
        <div className="text-xl">
          <p className="m-16">
            Socially Powerful, founded in 2017, stood as pioneers of the
            industry. Today, we are a global, award-winning leading social and{" "}
            <span className="text-emerald-400 font-extralight">
              influencer marketing
            </span>{" "}
            agency with offices in the UK, US, Europe and Middle-East.
          </p>
          <p className="m-16">
            Embodying a social-first ethos, our social marketing agency
            simplifies the complexities of social media platforms, influencer
            marketing, paid social and advertising with technology and
            performance at our core to find solutions to brand problems.
          </p>
          <p className="m-16">
            Recognising that brand success goes beyond surface-level metrics,
            our social agency prioritises connections to culture, marketing
            performance, and guaranteed results. By cutting out social media
            noise, we create authentic relationships and craft multi-dimensional
            social marketing narratives for global brands across all geographies
            and platforms.
          </p>
          <p className="m-16">
            Welcome to Socially Powerful,{" "}
            <span className="text-emerald-400 font-extralight">
              where attention meets guaranteed impact.
            </span>
          </p>
        </div>
        <div className="flex flex-col  items-center lg:flex-row justify-around ">
          <div className="bg-white p-4 rounded-xl shadow-md m-10 h-auto hover:bg-slate-200 cursor-pointer">
            <h2 className=" text-teal-600 font-bold ">Forbes</h2>
            <p className="text-gray-700 mb-4 text-2xl">Feautred founders</p>
            <img src="./f-logo.png" className="w-32 flex mx-auto" />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md m-10 h-40">
            <h2 className="text-teal-600 font-bold">Global</h2>
            <p className="text-gray-700 mb-4 text-2xl">Award-Winning Agency</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md m-10 h-40">
            <h2 className="text-teal-600 font-bold">Creative</h2>
            <p className="text-gray-700 mb-4">Award-Winning Agency</p>
          </div>
        </div>
        <button className="bg-[#00df9a] w-[210px] text-xl  lg:mr-10 rounded-md font-medium  py-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 ">
          Read More
        </button>
      </div>
    </>
  );
};

export default Analytics;
