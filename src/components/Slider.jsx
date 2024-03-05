import React, { useState, useEffect } from "react";
// import './Slider.css'; // You may need to create a CSS file for styling

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./f-logo.png",
    "./f-logo.png",
    "./f-logo.png",
    "./f-logo.png",
    "./f-logo.png",
    "./f-logo.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row gap-10 justify-center items-center mt-16 ">
      {images.map((image, index) => (
        <img key={index} src="./OIP.jpeg" alt="image" className={"w-28"} />
      ))}
    </div>
  );
};

export default Slider;
