import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row justify-around items-center lg:items-start py-3 bg-gradient-to-l from-orange-300 via-orange-400 to-orange-600 rounded-md z-50">
        <div className="hidden sm:block w-52 ml-[-120px]">
          <img src="./fox-logo.png" alt="Fox Logo" />
        </div>
        <div className="flex lg:flex-row text-xl mt-3  lg:gap-40  ">
          <div className="mb-2 lg:mb-0 hover:underline hover:text-white cursor-pointer">
            Home
          </div>
          <div className="mb-2 lg:mb-0 hover:underline hover:text-white cursor-pointer">
            About
          </div>

          <div className="mb-2 lg:mb-0 hover:underline hover:text-white cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
      <div className="lg:hidden flex mt-8 mx-auto w-4/6">
        <img src="./fox-logo.png" alt="Fox Logo" />
      </div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
        <div className="">
          <h1 className="w-full md:text-8xl sm:text-5xl text-3xl font-bold select-none">
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
            <button className="bg-orange-600 w-[210px] text-xl mt-[3rem] lg:mr-10 rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300 ease-in-out">
              Services
            </button>
            <button className="bg-orange-600 w-[210px] text-xl mt-[3rem] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300 ease-in-out">
              Brief
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
