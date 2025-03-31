"use client"
import { motion } from "framer-motion";

export default function CenteredBanner({ text }) {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-top"
      style={{ backgroundImage: "url('/images/choose-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.h1
  className="relative text-3xl md:text-4xl text-center heading text-transparent font-bold tracking-[1rem] stroke-text"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {text}
</motion.h1>



    </div>
  );
}
