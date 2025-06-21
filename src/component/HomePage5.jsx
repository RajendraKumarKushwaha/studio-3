"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_1280.jpg",
    text: "We cherish & save your memories",
  },
  {
    image: "https://cdn.pixabay.com/photo/2018/11/03/20/37/wedding-3792773_1280.jpg",
    text: "Capturing emotions that last forever",
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/12/01/08/19/bride-1874655_960_720.jpg",
    text: "Turning moments into timeless art",
  },
 
];

export default function HomePage5() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <motion.img
          key={i}
          src={slide.image}
          alt="Slideshow Image"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ position: "absolute" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      ))}

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* <motion.h1
          key={index}
          className="text-white  text-4xl md:text-7xl heading mb-6 tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 2 }}
        >
          {slides[index].text}
        </motion.h1> */}

        {/* Buttons */}
        {/* <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <a href="/contact-us" className="bg-[#f28b00] btn hover:bg-[#f28b00] text-white py-3 px-6  text-lg font-medium transition">
            Book Now
          </a>
         
        </div> */}
      </div>
    </div>
  );
}
