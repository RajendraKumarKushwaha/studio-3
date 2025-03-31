"use client";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FadeIn } from "@/ClientComponent/FadeIn";

export default function GalleryClient({ galleryData }) {
  const [activeCategory, setActiveCategory] = useState(galleryData[0].title);
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const selectedGallery = galleryData.find((cat) => cat.title === activeCategory);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24">
        <FadeIn delay={0.2}>
          <p className="text-center text-black text-3xl font-bold mb-10 heading">Gallery</p>
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 text-[#C0984B] heading">
            Cherished Moments
          </h2>
        </FadeIn>
        <div className="flex gap-4 justify-center mb-6 flex-wrap">
          {galleryData.map((category) => (
            <button
              key={category.title}
              className={`px-4 py-2 text-[#C0984B] heading cursor-pointer transition-all ${
                activeCategory === category.title ? "bg-[#C0984B] text-white" : "border border-[#C0984B]"
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
        <Masonry
          breakpointCols={{ default: 3, 1024: 3, 640: 2 }}
          className="flex gap-2"
          columnClassName="masonry-column"
        >
          {selectedGallery.images.map((src, idx) => (
            <div
              key={idx}
              className="mb-2 overflow-hidden border cursor-pointer"
              onClick={() => setLightbox({ isOpen: true, index: idx })}
            >
              <Image src={src} alt="Gallery Image" width={400} height={300} className="w-full h-auto object-cover" />
            </div>
          ))}
        </Masonry>
        {lightbox.isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button className="absolute top-4 right-6 text-white text-3xl" onClick={() => setLightbox({ isOpen: false, index: 0 })}>
              <X size={32} />
            </button>
            <button
              className="absolute cursor-pointer left-4 text-white text-3xl"
              disabled={lightbox.index === 0}
              onClick={() => setLightbox({ isOpen: true, index: lightbox.index - 1 })}
            >
              <ChevronLeft size={40} />
            </button>
            <Image
              src={selectedGallery.images[lightbox.index]}
              alt="Fullscreen Image"
              width={800}
              height={600}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
            <button
              className="absolute cursor-pointer right-4 text-white text-3xl"
              disabled={lightbox.index === selectedGallery.images.length - 1}
              onClick={() => setLightbox({ isOpen: true, index: lightbox.index + 1 })}
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
