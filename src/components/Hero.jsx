import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* <p className="text-[#00df9a] font-bold text-sm p-2 m-4">
          GROWING WITH PRIVATE PRACTICES
        </p> */}
        <h1 className="w-full md:text-8xl sm:text-5xl text-3xl font-bold md:py-6 mt-10">
          Book with confidence.
        </h1>
        <div className="flex justify-center items-center pr-3">
          <p className="md:text-3xl sm:text-2xl text-l font-bold py-4">
            Great booking systems for
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-l font-bold md:pl-1 md:pt-[1rem] lg:pl-[0.5rem] pb-3 pl-3"
            strings={["Physios", "Chiros", "Dentists"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Manage your bookings easier and make your life easier.
        </p>
        <button className="bg-[#00df9a] w-[210px] mt-[3rem] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
