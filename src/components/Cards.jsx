import React from "react";
import Slider from "./Slider";

const Cards = () => {
  // this page is dedicated to channels section
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center text-center lg:text-7xl text-2xl text-white mt-20">
        Our Channels
      </div>
      <div>
        <Slider />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10 text-white m-10">
        <p className=" text-3xl lg:text-4xl mb-6 ">
          Amazon Global SPN certified
        </p>
        <p className=" text-lg lg:text-2xl ">
          At Socially Powerful, we have built a{" "}
          <span className="text-emerald-400">global social</span> marketing
          <span className="text-emerald-400"> agency</span>. Our social excels
          in social marketing campaigns across, influencer marketing, paid
          social and startegy, that engage global audiences.
        </p>
      </div>
      <button className="bg-[#00df9a] w-[210px] text-xl lg:mr-10 rounded-md font-medium py-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 mt-16">
        Read More
      </button>
    </div>
  );
};

export default Cards;
