"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomePartOne = () => {
  const images = [
    {
      src: "/imageone.jpg",
      texts: ["Living Room / Furniture", "Wooden Dish", "Purchase"],
    },
    {
      src: "/imagetwo.jpg",
      texts: ["Living Room / Furniture", "Oval Redesign", "Purchase"],
    },
    {
      src: "/imagethree.png",
      texts: ["Living Room / Furniture", "New Chandelier", "Purchase"],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative h-[100vh] w-[95%] ml-9 overflow-hidden bg-[#f5f5f5]">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] object-cover"
        >
          <img
            src={images[currentIndex].src}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 -left-30 flex flex-col">
            {images[currentIndex].texts.map((text, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-1 ${
                  index === 0 ? "text-gray-400" : "text-black"
                } ${index === 1 ? "text-4xl font-bold" : "text-sm"}`}
                style={{ color: index === 0 ? "gray" : "black" }}
              >
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePartOne;
