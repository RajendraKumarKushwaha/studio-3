"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlowGalleryClient({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="py-24 bg-[#C0984B] flex items-center justify-center">
      <div className="container px-4 flex flex-col items-center justify-center text-center">
        <p className="text-black text-3xl font-bold mb-6 heading">Our Portfolio</p>
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-10 heading">
          Professional Photography for Every Special Occasion
        </h2>
        <div className="relative w-full h-[70vh] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index].src}
              alt="gallery"
              className="w-full h-full object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 bg-black/60 px-4 py-2">
            <h3 className="text-white text-lg font-semibold">{images[index].title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
