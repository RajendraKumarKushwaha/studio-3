"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "Amazing photography! Every shot was captured beautifully and the emotions really shine through.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "Professional and talented team! They made my wedding memories so special.",
    rating: 5,
  },
  {
    name: "Rahul Kapoor",
    review:
      "The best photography experience I've ever had. Highly recommended!",
    rating: 4.5,
  },
  {
    name: "Sneha Patel",
    review:
      "Captured every detail so beautifully! The team was friendly and professional.",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <motion.div
        key={index}
        className="w-full text-center px-8 max-w-3xl"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 10, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl md:text-2xl italic mb-6">"{testimonials[index].review}"</p>
        <h3 className="text-2xl font-bold">- {testimonials[index].name}</h3>
        <div className="flex justify-center mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < testimonials[index].rating ? "text-yellow-400" : "text-gray-500"
              }`}
              fill={i < testimonials[index].rating ? "#facc15" : "#4b5563"}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}