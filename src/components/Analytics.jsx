import React from "react";
// import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center lg:text-6xl text-3xl text-black">
        <div className="mb-10 font-bold " id="trust">Trusted Partners</div>
        <div className="mb-16 w-10 lg:w-40 flex flex-row justify-around items-center space-x-6 lg:space-x-20">
          <img src="./dhl.png" alt="DHL" />
          <img src="./lucria.png" alt="Lucria" />
          <img src="./ping-pong.png" alt="Ping Pong" />
          <img src="./meta-partner.png" alt="Meta Partner" />
          <img src="./google-partner.png" alt="Google Partner" />
          <img src="./shopify.png" alt="shopify Partner" />
        </div>

        <p className="text-black lg:text-4xl text-xl">
          <span className="p-1 text-orange-400 lg:text-4xl text-xl">
            Who we are?
          </span>{" "}
          We are a global social media and influencer marketing agency
          <span className="text-orange-400 p-1">powered by technology</span>
        </p>
        <div className="text-xl">
          <p className="m-16">
            Socially Powerful, founded in 2017, stood as pioneers of the
            industry. Today, we are a global, award-winning leading social and{" "}
            <span className="text-orange-400 ">influencer marketing</span>{" "}
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
            <span className="text-orange-400 ">
              where attention meets guaranteed impact.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-1 ">
          <div className="bg-orange-400 p-10 rounded-xl shadow-2xl m-10 h-96 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 flex flex-col gap-10 border-2 border-black">
            <h2 className=" text-white font-bold ">Forbes</h2>
            <p className="text-gray-700 mb-4 text-2xl">Feautred founders</p>
            <img
              src="./f-logo.png"
              className="w-32 flex mx-auto bg-white rounded-xl p-3 shadow-2xl"
            />
          </div>
          <div className="bg-orange-500 p-10 rounded-xl shadow-2xl m-10 h-96 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 flex flex-col gap-6 border-2 border-black">
            <h2 className="text-white font-bold ">Global</h2>
            <p className="text-gray-700 mb-4 text-2xl">Award-Winning Agency</p>
            <img
              src="./global-awards-winner.png"
              className="w-32 flex mx-auto bg-black rounded-2xl shadow-2xl"
            />
          </div>
          <div className="bg-orange-400 p-10 rounded-xl shadow-2xl m-10 h-96 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 flex flex-col gap-6 border-2 border-black">
            <h2 className="text-white font-bold">Creative</h2>
            <p className="text-gray-700 mb-4 text-2xl">Award-Winning Agency</p>
            <img
              src="./creative-ideas.png"
              className="w-52 h-32 flex mx-auto bg-black rounded-2xl p-4 shadow-2xl"
            />
          </div>
        </div>
        <button className="bg-orange-600 w-[210px] text-xl  lg:mr-10 rounded-md font-medium  py-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 mt-10">
          Read More
        </button>
      </div>
      
    </>

  );
};

export default Analytics;
