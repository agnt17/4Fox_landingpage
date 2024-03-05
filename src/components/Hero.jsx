import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <p className="text-center lg:text-3xl text-lg mt-5">
        4 FOX BUISNESS SOLUTIONS
      </p>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="w-full md:text-8xl sm:text-5xl text-3xl font-bold md:py-6 mt-10">
          BUISNESS SOLUTIONS
        </h1>
        <div className="flex justify-center items-center pr-3">
          <p className="md:text-3xl sm:text-2xl text-l font-bold py-4">
            That Truly Inspires Growth
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Manage your bookings easier and make your life easier.
        </p>
        <div className="flex lg:flex-row flex-col">
          <button className="bg-[#00df9a] w-[210px] text-xl mt-[3rem] lg:mr-10 rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300 ease-in-out ">
            Services
          </button>
          <button className="bg-[#00df9a] w-[210px] text-xl mt-[3rem] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300 ease-in-out">
            Brief
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
