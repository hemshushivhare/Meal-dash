import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo",
    
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the slide duration (in milliseconds) here

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" w-full h-56 md:h-80 bg-blue-950 rounded-sm ">
      <div className="flex justify-between pt-7 px-16">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-1/5 transition-transform transform $ hover: cursor-pointer hover:scale-105 ease-out duration-500`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between">
        <button
          className="w-12 h-12  text-white rounded-full flex items-center justify-center"
          onClick={prevImage}
        >
          {}
        </button>
        <button
          className="w-12 h-12  text-white rounded-full flex items-center justify-center"
          onClick={nextImage}
        >
          {}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

