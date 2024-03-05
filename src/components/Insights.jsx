import React from "react";

const Insights = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mt-10 text-white text-4xl lg:text-6xl font-bold">
        Latest Insights
      </div>
      <p className="text-white text-2xl flex flex-col items-center justify-center text-center m-10">
        The latest news from the world of social marketing, advertising,
        influencers and paid social
      </p>
      <div>
        <div className="flex flex-col lg:flex-row  justify-center items-center m-10">
          <div className="m-10">
            <img
              src="./OIP.jpeg"
              alt="Image"
              className="lg:ml-10 mt-6 lg:mt-0 rounded-xl order-first lg:order-last"
            />
            <div className="text-white ml-11">
              <div>Feb 26th 2024</div>
              <span className="text-emerald-400">News Article</span>
              <p>Top 5 Adtech Tools This Week</p>
              <button className="bg-[#00df9a] w-[130px] text-xl mt-2  lg:mr-10 rounded-md font-medium  py-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 ">
                Read More
              </button>
            </div>
          </div>
          <div className="m-10">
            <img
              src="./OIP.jpeg"
              alt="Image"
              className="lg:ml-10 mt-6 lg:mt-0 rounded-xl order-first lg:order-last"
            />
            <div className="text-white ml-11">
              <div>Feb 26th 2024</div>
              <span className="text-emerald-400">News Article</span>
              <p>
                Video focused firms Pixability, Culture Genesis team up to
                expand diverse creators network
              </p>
              <button className="bg-[#00df9a] w-[130px] text-xl mt-2  lg:mr-10 rounded-md font-medium  py-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 ">
                Read More
              </button>
            </div>
          </div>
          <div className="m-10">
            <img
              src="./OIP.jpeg"
              alt="Image"
              className="lg:ml-10 mt-6 lg:mt-0 rounded-xl order-first lg:order-last"
            />
            <div className="text-white ml-11">
              <div>Feb 26th 2024</div>
              <span className="text-emerald-400">News Article</span>
              <p>
                Media Buying Briefing: Agencies AI efforts lead to aliens and
                Whop
              </p>
              <button className="bg-[#00df9a] w-[130px] text-xl mt-2  lg:mr-10 rounded-md font-medium  py-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 ">
                Read More
              </button>
            </div>
          </div>
        </div>
        <button className="bg-[#00df9a] w-[180px] text-xl mt-2 lg:mr-10 rounded-md font-medium p-3 text-black hover:scale-105 duration-300 ease-in-out bg-opacity-80 flex mx-auto">
          View All Blog posts
        </button>
      </div>
    </div>
  );
};

export default Insights;
