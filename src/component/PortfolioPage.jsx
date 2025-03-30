"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/12.jpg", title: "Wedding Moments" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg", title: "Pre-Wedding Moments" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg", title: "Haldi Moments" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg", title: "Fashion Photography" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/1.jpg", title: "Kids Photography" },
  { src: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/13.jpg", title: "Maternity Photography" },
];

export default function FlowGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 bg-[#C0984B] flex items-center justify-center">
      <div className="container px-4 flex flex-col items-center justify-center text-center">
        {/* Top Title */}
        <p className="text-black text-3xl font-bold mb-6 heading">Our Portfolio</p>
        <h2 className="text-white text-4xl font-bold mb-10 heading">
          Professional Photography for Every Special Occasion
        </h2>

        {/* Image Section */}
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

          {/* Image Title */}
          <div className="absolute bottom-0 bg-black/60 px-4 py-2 ">
            <h3 className="text-white text-lg font-semibold">{images[index].title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

